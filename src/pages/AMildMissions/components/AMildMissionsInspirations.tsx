import { iconChevronOutline } from '../assets'
import { useCarouselControls } from '../hooks/useCarouselControls'
import { inspirationVideos } from '../services/amildMissionsService'
import { InspirationVideoCard } from './InspirationVideoCard'

export function AMildMissionsInspirations() {
  const { containerRef, canScrollLeft, canScrollRight, handleScroll } = useCarouselControls()

  return (
    <section className="rounded-3xl border border-[#ececec] bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-2xl font-bold text-[#2c2a29]">Yang Beda Yang Menginspirasi</h3>
        <div className="hidden gap-2 md:flex">
          <NavDot disabled={!canScrollLeft} direction="left" onClick={() => handleScroll('left')} />
          <NavDot disabled={!canScrollRight} direction="right" onClick={() => handleScroll('right')} />
        </div>
      </div>
      <div ref={containerRef} className="flex gap-4 overflow-x-auto pb-2">
        {inspirationVideos.map((video) => (
          <InspirationVideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  )
}

type NavDotProps = {
  direction: 'left' | 'right'
  disabled: boolean
  onClick: () => void
}

function NavDot({ direction, disabled, onClick }: NavDotProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex size-10 items-center justify-center rounded-full border border-[#ed1c24] text-[#ed1c24] ${
        disabled ? 'opacity-30' : ''
      }`}
    >
      <img
        src={iconChevronOutline}
        alt=""
        className={`h-4 w-4 ${direction === 'left' ? 'rotate-180' : ''}`}
      />
    </button>
  )
}

