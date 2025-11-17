import { useState, type ComponentType } from 'react'

import './App.css'
import { useCurrentPath } from './hooks/useCurrentPath'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { PageEight } from './pages/PageEight/PageEight'
import { DashboardResponsive } from './pages/DashboardResponsive/DashboardResponsive'
import { DashboardResponsiveComponent } from './pages/DashboardResponsiveComponent/DashboardResponsiveComponent'
import { OneuxImage } from './pages/OneuxImage/OneuxImage'
import { OneuxUnresponsive } from './pages/OneuxUnresponsive/OneuxUnresponsive'
import { DetailEvent } from './pages/DetailEvent/DetailEvent'
import { AMildMissions } from './pages/AMildMissions/AMildMissions'
import { AMildMissionsComponents } from './pages/AMildMissionsComponents/AMildMissionsComponents'

const routeTable: Record<string, ComponentType> = {
  '/magazine': PageEight,
  '/dashboard': Dashboard,
  '/dashboard/responsive': DashboardResponsive,
  '/dashboard/responsive/component': DashboardResponsiveComponent,
  '/oneux/image': OneuxImage,
  '/oneux/unresponsive': OneuxUnresponsive,
  '/oneux/detail-event': DetailEvent,
  '/a-mild/missions/single-prompt': AMildMissions,
  '/a-mild/missions/components': AMildMissionsComponents,
}

function App() {
  const currentPath = useCurrentPath()
  const ActivePage = routeTable[currentPath] ?? Dashboard
  const [isPanelVisible, setIsPanelVisible] = useState(true)

  const handleNavigate = (path: string) => {
    window.location.pathname = path
  }

  const togglePanel = () => {
    setIsPanelVisible((prev) => !prev)
  }

  return (
    <div className="app">
      <div className="fixed bottom-4 left-4 z-50">
        {isPanelVisible ? (
          <div className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-lg">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-neutral-900">Available Routes</h2>
              <button
                type="button"
                onClick={togglePanel}
                className="ml-2 rounded-md p-1 text-neutral-600 transition-colors hover:bg-neutral-100"
                aria-label="Hide navigation panel"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {Object.keys(routeTable).map((path) => (
              <button
                key={path}
                type="button"
                onClick={() => handleNavigate(path)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  currentPath === path
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                }`}
              >
                {path === '/' ? 'Dashboard' : path}
              </button>
            ))}
          </div>
        ) : (
          <button
            type="button"
            onClick={togglePanel}
            className="rounded-lg bg-white p-3 shadow-lg transition-colors hover:bg-neutral-50"
            aria-label="Show navigation panel"
          >
            <svg
              className="h-5 w-5 text-neutral-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
      </div>
      <ActivePage />
    </div>
  )
}

export default App
