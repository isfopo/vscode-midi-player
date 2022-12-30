import { Midi } from '@tonejs/midi'
import { useRef } from 'react'
import { useCallback } from 'react'
import * as Tone from 'tone'

export const useTransport = (midi: Midi) => {
  const isSetup = useRef<boolean>(false)

  const setup = useCallback(() => {
    Tone.Transport.PPQ = midi.header.ppq
    const synths: Tone.PolySynth<Tone.Synth<Tone.SynthOptions>>[] = []

    //************** Tell Transport about Time Signature changes  ********************
    for (let i = 0; i < midi.header.timeSignatures.length; i++) {
      Tone.Transport.schedule(time => {
        Tone.Transport.timeSignature =
          midi.header.timeSignatures[i].timeSignature
      }, midi.header.timeSignatures[i].ticks + 'i')
    }

    //************** Tell Transport about bpm changes  ********************
    for (let i = 0; i < midi.header.tempos.length; i++) {
      Tone.Transport.schedule(time => {
        Tone.Transport.bpm.value = midi.header.tempos[i].bpm
      }, midi.header.tempos[i].ticks + 'i')
    }

    // //************ Change time from seconds to ticks in each part  *************
    // for (let i = 0; i < numofVoices; i++) {
    //   midi.tracks[i].notes.forEach(note => {
    //     note.time = note.ticks + 'i'
    //   })
    // }

    //************** Create Synths and Parts, one for each track  ********************
    for (let i = 0; i < midi.tracks.length; i++) {
      synths[i] = new Tone.PolySynth().toDestination()

      var part = new Tone.Part((time, value) => {
        synths[i].triggerAttackRelease(
          value.name,
          value.duration,
          time,
          value.velocity
        )
      }, midi.tracks[i].notes).start()
    }
  }, [midi])

  const play = useCallback((startPoint: Tone.Unit.Time = '0:0:0') => {
    if (!isSetup.current) {
      setup()
      isSetup.current = true
    }

    if (Tone.Transport.state === 'stopped') {
      Tone.Transport.start('+0', startPoint)
    }
  }, [])

  const stop = useCallback(() => {
    if (Tone.Transport.state === 'started') {
      Tone.Transport.stop()
    }
  }, [])

  return { play, stop }
}
