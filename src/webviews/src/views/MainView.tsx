import { Midi } from '@tonejs/midi'
import React from 'react'
import { usePlayback } from '../hooks/usePlayback'
import { VSCodeButton as Button } from '@vscode/webview-ui-toolkit/react'

export interface MainViewProps {
  midi: Midi
}

export const MainView: React.FC<MainViewProps> = ({ midi }) => {
  const { play, stop, isPlaying } = usePlayback(midi)

  return (
    <div>
      <Button onClick={play}>Play</Button>
      <Button onClick={stop}>Stop</Button>
      <h1>{midi.name}</h1>
      {midi.tracks.map(track => (
        <p>{track.instrument.name}</p>
      ))}
    </div>
  )
}
