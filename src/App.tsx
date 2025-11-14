import type { ComponentType } from 'react'

import './App.css'
import { useCurrentPath } from './hooks/useCurrentPath'
import { DashboardPage } from './pages/Dashboard/DashboardPage'
import { PageEight } from './pages/PageEight/PageEight'
import { ResponsivePage } from './pages/Responsive/ResponsivePage'
import { ResponsivePage as ResponsivePerComponent } from './pages/Responsive-Component/ResponsivePage'

const routeTable: Record<string, ComponentType> = {
  '/': DashboardPage,
  '/magazine': PageEight,
  '/responsive': ResponsivePage,
  '/responsive/component': ResponsivePerComponent
}

function App() {
  const currentPath = useCurrentPath()
  const ActivePage = routeTable[currentPath] ?? DashboardPage

  return (
    <div className="app">
      <ActivePage />
    </div>
  )
}

export default App
