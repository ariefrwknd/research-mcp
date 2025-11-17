import { Campaigns } from './components/Campaigns'
import { FloatingButton } from './components/FloatingButton'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Inspirations } from './components/Inspirations'
import { Mgm } from './components/Mgm'
import { MissionList } from './components/MissionList'

export function AMildMissionsComponents() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-[72px]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            <Hero />
            <MissionList />
            <Mgm />
            <Inspirations />
            <Campaigns />
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButton />
    </div>
  )
}

