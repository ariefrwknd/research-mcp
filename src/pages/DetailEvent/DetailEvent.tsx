import { DetailEventHeader } from './components/DetailEventHeader'
import { DetailEventBanner } from './components/DetailEventBanner'
import { DetailEventDetailsCard } from './components/DetailEventDetailsCard'
import { DetailEventDescription } from './components/DetailEventDescription'
import { DetailEventFooter } from './components/DetailEventFooter'
import { DetailEventBackButton } from './components/DetailEventBackButton'
import { DetailEventWarningBar } from './components/DetailEventWarningBar'

export function DetailEvent() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <DetailEventHeader />
      <div className="mx-auto max-w-[1440px] px-4 pt-4 pb-4 sm:px-6 md:pt-[87.5px] lg:px-[15px]">
        <div className="relative">
          <DetailEventBackButton />
          
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-4">
            {/* Left Column - Banner */}
            <div className="w-full lg:w-[994px]">
              <DetailEventBanner />
            </div>
            
            {/* Right Column - Event Details Card */}
            <div className="w-full lg:w-[401px] lg:flex-shrink-0">
              <DetailEventDetailsCard />
            </div>
          </div>
          
          {/* Description and Terms */}
          <div className="mt-6 w-full">
            <DetailEventDescription />
          </div>
        </div>
      </div>
      
      <DetailEventFooter />
      <DetailEventWarningBar />
    </div>
  )
}

