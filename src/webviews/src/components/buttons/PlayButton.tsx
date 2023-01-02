import React from 'react'
import { ButtonBase } from './ButtonBase'
import { VscDebugStart as Play } from 'react-icons/vsc'
import { Time } from 'tone/build/esm/core/type/Units'

export interface PlayButtonProps {
  play: (startPoint?: Time) => void
}

export const PlayButton: React.FC<PlayButtonProps> = ({ play }) => {
  return <ButtonBase icon={<Play />} onClick={() => play()} />
}
