import React from 'react'
import { Midi } from '@tonejs/midi'
import { useTransport } from '../../hooks/useTransport'
import styles from './index.module.css'
import { Control } from './Control'

export interface TransportProps {
  midi: Midi
}

export const Transport: React.FC<TransportProps> = ({ midi }) => {
  const { play, stop, pause, position } = useTransport(midi)

  return (
    <div className={styles['container']}>
      <p>{Math.floor(midi.header.tempos[0].bpm)}</p>
      <Control play={play} stop={stop} />
      <p>{position.toString()}</p>
    </div>
  )
}
