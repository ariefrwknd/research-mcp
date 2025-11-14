import { OneuxHeader } from './components/OneuxHeader'
import { OneuxSearchBox } from './components/OneuxSearchBox'
import { OneuxMainContent } from './components/OneuxMainContent'
import { OneuxFooter } from './components/OneuxFooter'

export function OneuxUnresponsive() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <OneuxSearchBox />
      <OneuxHeader />
      <OneuxMainContent />
      <OneuxFooter />
    </div>
  )
}

