import { Midi } from '@tonejs/midi'
import React from 'react'

export interface MainViewProps {
  midi: Midi | undefined
}

export const MainView: React.FC<MainViewProps> = ({ midi }) => {
  if (!midi) {
    return <p>loading</p>
  }

  console.log(midi)

  return (
    <div>
      <h1>{midi.name}</h1>
      {midi.tracks.map(track => (
        <p>{track.instrument.name}</p>
      ))}
    </div>
  )
}
