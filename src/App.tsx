import type { ComponentType } from 'react'

import './App.css'
import { useCurrentPath } from './hooks/useCurrentPath'
import { PageEight } from './pages/PageEight/PageEight'

const routeTable: Record<string, ComponentType> = {
  '/': PageEight,
}

function App() {
  const currentPath = useCurrentPath()
  const ActivePage = routeTable[currentPath] ?? PageEight

  return (
    <div className="app">
      <ActivePage />
    </div>
  )
}

export default App
