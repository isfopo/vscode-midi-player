import React from 'react'
import { PlayButton } from '../buttons/PlayButton'
import { StopButton } from '../buttons/StopButton'
import { Time } from 'tone/build/esm/core/type/Units'

export interface ControlProps {
  play: (startPoint?: Time) => void
  stop: () => void
}

export const Control: React.FC<ControlProps> = ({ play, stop }) => (
  <span>
    <PlayButton play={play} />
    <StopButton stop={stop} />
  </span>
)
