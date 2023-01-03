import React from 'react'
import { TempoEvent } from '@tonejs/midi/dist/Header'

export interface TempoDisplayProps {
  tempos: TempoEvent[]
}

export const TempoDisplay: React.FC<TempoDisplayProps> = ({ tempos }) => {
  return <p>{Math.floor(tempos[0].bpm)}</p>
}
