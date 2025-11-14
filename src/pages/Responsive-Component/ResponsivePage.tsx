import { ResponsiveNavbar } from './components/ResponsiveNavbar'
import { ResponsiveSummarySection } from './components/ResponsiveSummarySection'
import { ResponsiveStatsSection } from './components/ResponsiveStatsSection'

export function ResponsivePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f3f3f3] text-neutral-900">
      <ResponsiveNavbar />
      <main className="flex flex-1 flex-col">
        <ResponsiveSummarySection />
        <ResponsiveStatsSection />
      </main>
    </div>
  )
}

