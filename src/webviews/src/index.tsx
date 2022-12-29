import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter as Router } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Router initialEntries={[rootEl?.dataset.route ?? '']} initialIndex={0}>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
  rootEl
)
