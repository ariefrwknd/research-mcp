import { AMildMissionsHeader } from './components/AMildMissionsHeader'
import { AMildMissionsHero } from './components/AMildMissionsHero'
import { AMildMissionsInspirations } from './components/AMildMissionsInspirations'
import { AMildMissionsMgmBanner } from './components/AMildMissionsMgmBanner'
import { AMildMissionsMissionSection } from './components/AMildMissionsMissionSection'
import { AMildMissionsPromoSection } from './components/AMildMissionsPromoSection'

export function AMildMissions() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] pb-16 pt-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
        <AMildMissionsHeader />
        <AMildMissionsHero />
        <AMildMissionsMissionSection />
        <AMildMissionsMgmBanner />
        <AMildMissionsInspirations />
        <AMildMissionsPromoSection />
      </div>
    </main>
  )
}

