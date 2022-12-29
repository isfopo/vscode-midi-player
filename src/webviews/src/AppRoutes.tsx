import React from 'react'
import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useMidiData } from './hooks/useMidiData'
import { MainView } from './views/MainView'
import { VSCodeProgressRing as ProgressRing } from '@vscode/webview-ui-toolkit/react'

const rootEl = document.getElementById('root')

export const AppRoutes = () => {
  const navigate = useNavigate()
  const midi = useMidiData()

  useEffect(() => {
    if (rootEl) {
      navigate(`/${rootEl.dataset.route}`, { replace: true })
    }
  }, [])

  if (!midi) {
    return <ProgressRing />
  }

  return (
    <Routes>
      <Route path="view1" element={<MainView midi={midi} />} />
    </Routes>
  )
}
