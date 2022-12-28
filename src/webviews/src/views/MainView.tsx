import { Midi } from '@tonejs/midi'
import React from 'react'

export interface MainViewProps {
  midi: Midi
}

export const MainView: React.FC<MainViewProps> = ({ midi }) => {
  return (
    <div>
      <h1>{midi.name}</h1>
      {midi.tracks.map(track => (
        <p>{track.instrument.name}</p>
      ))}
    </div>
  )
}
