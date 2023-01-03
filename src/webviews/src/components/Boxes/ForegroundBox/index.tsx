import React from 'react'
import styles from './index.module.css'

export interface ForegroundBoxProps {
  children: any
}

export const ForegroundBox: React.FC<ForegroundBoxProps> = ({ children }) => (
  <span className={styles['container']}>{children}</span>
)
