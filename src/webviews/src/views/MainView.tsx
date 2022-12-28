import React, { FunctionComponent } from 'react'
import { VscFlame } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import Input from '../components/Input'
import Toggle from '../components/Toggle'
import useVSCodeState from '../hooks/useVSCodeState'
import VSCodeAPI from '../VSCodeAPI'

export interface MainViewProps {}

export const MainView: FunctionComponent<MainViewProps> = props => {
  return (
    <div>
      <p>Hello</p>
    </div>
  )
}
