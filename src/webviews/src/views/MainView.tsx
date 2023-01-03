import React from 'react'
import { Midi } from '@tonejs/midi'
import { Transport } from '../components/Transport'
import { Tracks } from '../components/Tracks'

export interface MainViewProps {
  midi: Midi
}

export const MainView: React.FC<MainViewProps> = ({ midi }) => {
  return (
    <div>
      <Transport midi={midi} />
      <Tracks tracks={midi.tracks} />
    </div>
  )
}
