import React from 'react'
import { Midi } from '@tonejs/midi'
import { useTransport } from '../../hooks/useTransport'
import { PlayButton } from '../buttons/PlayButton'
import { StopButton } from '../buttons/StopButton'
import styles from './index.module.css'

export interface TransportProps {
  midi: Midi
}

export const Transport: React.FC<TransportProps> = ({ midi }) => {
  const { play, stop, pause, position } = useTransport(midi)

  return (
    <div className={styles['container']}>
      <PlayButton play={play} />
      <StopButton stop={stop} />
      <p>{position.toString()}</p>
    </div>
  )
}
