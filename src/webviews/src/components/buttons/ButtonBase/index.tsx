import React from 'react'
import './index.css'

export interface ButtonBaseProps {
  icon: any
  onClick: () => void
}

export const ButtonBase: React.FC<ButtonBaseProps> = ({ icon, onClick }) => {
  return (
    <div className="container">
      <span className="icon">{icon}</span>
    </div>
  )
}
