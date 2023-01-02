import React from 'react'
import { Midi } from '@tonejs/midi'
import { useTransport } from '../hooks/useTransport'
import { ButtonBase } from '../components/buttons/ButtonBase'
import { VscDebugStart as Play } from 'react-icons/vsc'

export interface MainViewProps {
  midi: Midi
}

export const MainView: React.FC<MainViewProps> = ({ midi }) => {
  const { play, stop, pause, position } = useTransport(midi)

  return (
    <div>
      <ButtonBase icon={<Play />} onClick={() => play()} />
      <p className="container">{position.toString()}</p>
      <h1>{midi.name}</h1>
      {midi.tracks.map(track => (
        <p>{track.instrument.name}</p>
      ))}
    </div>
  )
}
