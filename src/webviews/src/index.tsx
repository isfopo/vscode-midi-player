import React from 'react'
import ReactDOM from 'react-dom'
import './vscode.css'
import { MemoryRouter as Router } from 'react-router-dom'
import VSCodeAPI from './VSCodeAPI'
import { AppRoutes } from './AppRoutes'

let workspace = ''

const root = document.getElementById('root')

if (root) {
  workspace = root.getAttribute('data-workspace') || ''
}

const rootEl = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Router initialEntries={[rootEl?.dataset.route ?? '']} initialIndex={0}>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
  rootEl
)
