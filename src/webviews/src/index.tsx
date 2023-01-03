import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter as Router } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { IconContext } from 'react-icons'
import './index.css'

const root = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ size: '2rem' }}>
      <Router initialEntries={[root?.dataset.route ?? '']} initialIndex={0}>
        <AppRoutes />
      </Router>
    </IconContext.Provider>
  </React.StrictMode>,
  root
)
