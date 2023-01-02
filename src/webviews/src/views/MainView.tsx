import React from 'react'
import { Midi } from '@tonejs/midi'
import { useTransport } from '../hooks/useTransport'
import { PlayButton } from '../components/buttons/PlayButton'
import { StopButton } from '../components/buttons/StopButton'

export interface MainViewProps {
  midi: Midi
}

export const MainView: React.FC<MainViewProps> = ({ midi }) => {
  const { play, stop, pause, position } = useTransport(midi)

  return (
    <div>
      <PlayButton play={play} />
      <StopButton stop={stop} />
      <h2 className="container">{position.toString()}</h2>
      <h1>{midi.name}</h1>
      {midi.tracks.map(track => (
        <p>{track.instrument.name}</p>
      ))}
    </div>
  )
}
