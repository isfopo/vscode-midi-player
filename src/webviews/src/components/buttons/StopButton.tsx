import React from 'react'
import { ButtonBase } from './ButtonBase'
import { VscDebugStop as Stop } from 'react-icons/vsc'

export interface StopButtonProps {
  stop: () => void
}

export const StopButton: React.FC<StopButtonProps> = ({ stop }) => {
  return <ButtonBase icon={<Stop />} onClick={() => stop()} />
}
