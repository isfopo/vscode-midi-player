import { Midi } from '@tonejs/midi'
import { Note } from '@tonejs/midi/dist/Note'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'
import * as Tone from 'tone'
import { Part } from 'tone'
import { selectInstrument } from '../instruments/selectInstrument'

export const useTransport = (midi: Midi) => {
  const [position, setPosition] = useState<Tone.Unit.Time>('0:0:0')
  const positionInterval = useRef<NodeJS.Timer>()
  const parts = useRef<Part[]>([])

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

    //************** Create Synths and Parts, one for each track  ********************
    for (let i = 0; i < midi.tracks.length; i++) {
      synths[i] = selectInstrument(midi.tracks[i], () => {
        parts.current.push(
          new Tone.Part((time, value) => {
            synths[i].triggerAttackRelease(
              value.name,
              value.duration,
              time,
              value.velocity
            )
          }, midi.tracks[i].notes)
        )
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
        parts.current.forEach(part => part.start())
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

  return {
    play,
    stop,
    pause,
    position,
    loaded: parts.current.length === midi.tracks.length,
  }
}
