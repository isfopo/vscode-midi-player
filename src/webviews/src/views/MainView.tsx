import { Midi } from '@tonejs/midi'
import React from 'react'
import { VSCodeButton as Button } from '@vscode/webview-ui-toolkit/react'
import { useTransport } from '../hooks/useTransport'

export interface MainViewProps {
  midi: Midi
}

export const MainView: React.FC<MainViewProps> = ({ midi }) => {
  const { play, stop, pause, position } = useTransport(midi)

  return (
    <div>
      <Button onClick={() => play()}>Play</Button>
      <Button onClick={stop}>Stop</Button>
      <Button onClick={pause}>Pause</Button>
      <p>{position.toString()}</p>
      <h1>{midi.name}</h1>
      {midi.tracks.map(track => (
        <p>{track.instrument.name}</p>
      ))}
    </div>
  )
}
