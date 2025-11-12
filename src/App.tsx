import type { ComponentType } from 'react'

import './App.css'
import { useCurrentPath } from './hooks/useCurrentPath'
import { PageOne } from './pages/PageOne/PageOne'
import { PageTwo } from './pages/PageTwo/PageTwo'
import { PageThree } from './pages/PageThree/PageThree'
import { PageFour } from './pages/PageFour/PageFour'
import { PageFive } from './pages/PageFive/PageFive'
import { PageSix } from './pages/PageSix/PageSix'
import { PageSeven } from './pages/PageSeven/PageSeven'
import { PageEight } from './pages/PageEight/PageEight'
import { PageNine } from './pages/PageNine/PageNine'

const routeTable: Record<string, ComponentType> = {
  '/': PageOne,
  '/page-2': PageTwo,
  '/page-3': PageThree,
  '/page-4': PageFour,
  '/page-5': PageFive,
  '/page-6': PageSix,
  '/page-7': PageSeven,
  '/page-8': PageEight,
  '/page-9': PageNine,
}

function App() {
  const currentPath = useCurrentPath()
  const ActivePage = routeTable[currentPath] ?? PageOne

  return (
    <div className="app">
      <ActivePage />
    </div>
  )
}

export default App
