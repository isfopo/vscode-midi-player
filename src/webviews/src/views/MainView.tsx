import React from 'react'
import { Midi } from '@tonejs/midi'
import { Transport } from '../components/Transport'

export interface MainViewProps {
  midi: Midi
}

export const MainView: React.FC<MainViewProps> = ({ midi }) => {
  return (
    <div>
      <Transport midi={midi} />
      <h1>{midi.name}</h1>
      {midi.tracks.map(track => (
        <p>{track.instrument.name}</p>
      ))}
    </div>
  )
}
