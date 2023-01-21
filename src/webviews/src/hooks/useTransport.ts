import { Midi } from '@tonejs/midi'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'
import * as Tone from 'tone'

export const useTransport = (midi: Midi) => {
  const isSetup = useRef<boolean>(false)
  const [position, setPosition] = useState<Tone.Unit.Time>('0:0:0')
  const positionInterval = useRef<NodeJS.Timer>()

  const setup = useCallback(() => {
    Tone.Transport.PPQ = midi.header.ppq
    const synths: Tone.Sampler[] = []

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
      synths[i] = new Tone.Sampler({
        urls: {
          A0: 'A0.mp3',
          C1: 'C1.mp3',
          'D#1': 'Ds1.mp3',
          'F#1': 'Fs1.mp3',
          A1: 'A1.mp3',
          C2: 'C2.mp3',
          'D#2': 'Ds2.mp3',
          'F#2': 'Fs2.mp3',
          A2: 'A2.mp3',
          C3: 'C3.mp3',
          'D#3': 'Ds3.mp3',
          'F#3': 'Fs3.mp3',
          A3: 'A3.mp3',
          C4: 'C4.mp3',
          'D#4': 'Ds4.mp3',
          'F#4': 'Fs4.mp3',
          A4: 'A4.mp3',
          C5: 'C5.mp3',
          'D#5': 'Ds5.mp3',
          'F#5': 'Fs5.mp3',
          A5: 'A5.mp3',
          C6: 'C6.mp3',
          'D#6': 'Ds6.mp3',
          'F#6': 'Fs6.mp3',
          A6: 'A6.mp3',
          C7: 'C7.mp3',
          'D#7': 'Ds7.mp3',
          'F#7': 'Fs7.mp3',
          A7: 'A7.mp3',
          C8: 'C8.mp3',
        },
        release: 1,
        baseUrl: 'https://tonejs.github.io/audio/salamander/',
        onload: () => {
          new Tone.Part((time, value) => {
            synths[i].triggerAttackRelease(
              value.name,
              value.duration,
              time,
              value.velocity
            )
          }, midi.tracks[i].notes).start()
        },
      }).toDestination()
    }
  }, [midi])

  useEffect(() => {
    setup()
  }, [])

  const play = useCallback(
    (startPoint: Tone.Unit.Time = position) => {
      Tone.start()
      if (Tone.Transport.state !== 'started') {
        Tone.Transport.start('+0', startPoint)
        positionInterval.current = setInterval(() => {
          setPosition(Tone.Transport.position)
        }, Tone.Transport.blockTime)
      }
    },
    [position]
  )

  // pause on click, stop on double click

  const pause = useCallback(() => {
    if (Tone.Transport.state !== 'paused') {
      Tone.Transport.pause()
      clearInterval(positionInterval.current)
    }
  }, [])

  const stop = useCallback(() => {
    if (Tone.Transport.state !== 'stopped') {
      Tone.Transport.stop()
      setPosition('0:0:0')
      clearInterval(positionInterval.current)
    }
  }, [])

  return { play, stop, pause, position }
}
