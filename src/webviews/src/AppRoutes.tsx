import React from 'react'
import { useEffect } from 'react'
import {
  MemoryRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { useMidiData } from './hooks/useMidiData'
import { MainView } from './views/MainView'
import VSCodeAPI from './VSCodeAPI'

const rootEl = document.getElementById('root')

export const AppRoutes = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const midi = useMidiData()

  useEffect(() => {
    if (rootEl) {
      navigate(`/${rootEl.dataset.route}`, { replace: true })
    }
  }, [])

  if (!midi) {
    return <p>loading</p>
  }

  return (
    <Routes>
      <Route path="view1" element={<MainView midi={midi} />} />
    </Routes>
  )
}
