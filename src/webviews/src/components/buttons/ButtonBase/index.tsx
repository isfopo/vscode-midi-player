import React from 'react'
import styles from './styles.module.css'

export interface ButtonBaseProps {
  icon: any
  onClick: () => void
}

export const ButtonBase: React.FC<ButtonBaseProps> = ({ icon, onClick }) => {
  return (
    <div className={styles['container']} onClick={onClick}>
      <span>{icon}</span>
    </div>
  )
}
