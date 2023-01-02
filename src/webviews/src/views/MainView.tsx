import React from 'react'
import { Midi } from '@tonejs/midi'
import { useTransport } from '../hooks/useTransport'
import { ButtonBase } from '../components/buttons/ButtonBase'

export interface MainViewProps {
  midi: Midi
}

export const MainView: React.FC<MainViewProps> = ({ midi }) => {
  const { play, stop, pause, position } = useTransport(midi)

  return (
    <div>
      <ButtonBase icon={<p>hi</p>} onClick={() => play()} />
      <p className="container">{position.toString()}</p>
      <h1>{midi.name}</h1>
      {midi.tracks.map(track => (
        <p>{track.instrument.name}</p>
      ))}
    </div>
  )
}
