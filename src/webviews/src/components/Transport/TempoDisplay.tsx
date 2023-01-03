import React from 'react'
import { TempoEvent } from '@tonejs/midi/dist/Header'
import { ForegroundBox } from '../boxes/ForegroundBox'

export interface TempoDisplayProps {
  tempos: TempoEvent[]
}

export const TempoDisplay: React.FC<TempoDisplayProps> = ({ tempos }) => {
  return (
    <ForegroundBox>
      <p>{Math.floor(tempos[0].bpm)}</p>
    </ForegroundBox>
  )
}
