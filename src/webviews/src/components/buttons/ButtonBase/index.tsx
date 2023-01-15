import React from 'react'
import styles from './index.module.css'

export interface ButtonBaseProps {
  icon: any
  onClick: () => void
  size?: 'small' | 'large'
}

export const ButtonBase: React.FC<ButtonBaseProps> = ({
  icon,
  onClick,
  size,
}) => {
  return (
    <span
      className={`${styles['container']} ${styles[size]}`}
      onClick={onClick}
    >
      <span>{icon}</span>
    </span>
  )
}
