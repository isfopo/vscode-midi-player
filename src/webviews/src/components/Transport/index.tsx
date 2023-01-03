import React from 'react'
import { Midi } from '@tonejs/midi'
import { useTransport } from '../../hooks/useTransport'
import styles from './index.module.css'
import { Control } from './Control'
import { TempoDisplay } from './TempoDisplay'
import { PositionDisplay } from './PositionDisplay'

export interface TransportProps {
  midi: Midi
}

export const Transport: React.FC<TransportProps> = ({ midi }) => {
  const { play, stop, pause, position } = useTransport(midi)

  return (
    <div className={styles['container']}>
      <TempoDisplay tempos={midi.header.tempos} />
      <Control play={play} stop={stop} />
      <PositionDisplay position={position} />
    </div>
  )
}
