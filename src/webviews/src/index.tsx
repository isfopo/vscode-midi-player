import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter as Router } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'

const root = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Router initialEntries={[root?.dataset.route ?? '']} initialIndex={0}>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
  root
)
