import { Midi } from '@tonejs/midi'
import { useEffect } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import * as Tone from 'tone'
import { Time } from 'tone'

export const usePlayback = (midi: Midi) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const play: React.MouseEventHandler = useCallback(() => {
    setIsPlaying(true)
  }, [])

  const stop: React.MouseEventHandler = useCallback(() => {
    setIsPlaying(false)
  }, [])

  useEffect(() => {
    const synths: Tone.PolySynth<Tone.Synth<Tone.SynthOptions>>[] = []

    if (isPlaying) {
      const now = Tone.now()
      midi.tracks.forEach(track => {
        //create a synth for each track
        const synth = new Tone.PolySynth().toDestination()
        synths.push(synth)
        //schedule all of the events
        track.notes.forEach(note => {
          synth.triggerAttackRelease(
            note.name,
            note.duration > 0 ? note.duration : 1,
            note.time + now,
            note.velocity
          )
        })
      })
    } else {
      //dispose the synth and make a new one
      for (const synth of synths) {
        synth.dispose()
      }
    }
  }, [midi, isPlaying])

  return { play, stop, isPlaying }
}
