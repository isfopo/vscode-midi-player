import { Midi } from '@tonejs/midi'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'
import * as Tone from 'tone'
import { Piano } from '../instruments/Piano'

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
      synths[i] = new Piano(() => {
        new Tone.Part((time, value) => {
          synths[i].triggerAttackRelease(
            value.name,
            value.duration,
            time,
            value.velocity
          )
        }, midi.tracks[i].notes).start()
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
