import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { MainView } from './views/MainView'
import './vscode.css'
import {
  MemoryRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import VSCodeAPI from './VSCodeAPI'

let workspace = ''

const root = document.getElementById('root')

if (root) {
  workspace = root.getAttribute('data-workspace') || ''
}

window.addEventListener('message', e => {
  // Here's where you'd do stuff with the message
  // Maybe stick it into state management or something?
  const message = e.data
  console.debug(message)
})

const rootEl = document.getElementById('root')

function AppRoutes() {
  let location = useLocation()
  let navigate = useNavigate()
  useEffect(() => {
    if (rootEl) {
      navigate(`/${rootEl.dataset.route}`, { replace: true })
    }
  }, [])

  useEffect(() => {
    VSCodeAPI.onMessage(message => {
      console.log(message.data)
    })
  }, [])

  return (
    <Routes>
      <Route path="view1" element={<MainView />} />
    </Routes>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router initialEntries={[rootEl?.dataset.route ?? '']} initialIndex={0}>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
  rootEl
)
