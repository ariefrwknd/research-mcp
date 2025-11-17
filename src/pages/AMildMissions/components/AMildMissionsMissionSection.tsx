import {
  iconCarouselCircle,
  iconChevronOutline,
  iconPlaylist,
  iconRedFlag,
  missionLockedCard,
} from '../assets'
import { useCarouselControls } from '../hooks/useCarouselControls'
import { missionEpisodes, missionProgress } from '../services/amildMissionsService'
import { MissionEpisodeCard } from './MissionEpisodeCard'

export function AMildMissionsMissionSection() {
  const { containerRef, canScrollLeft, canScrollRight, handleScroll } = useCarouselControls()
  const progressPercent = Math.round((missionProgress.completed / missionProgress.total) * 100)

  return (
    <section className="rounded-3xl border border-[#ececec] bg-white p-6 shadow-sm lg:p-8">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="relative flex-1">
          <img
            src={missionLockedCard}
            alt="Missions locked illustration"
            className="h-full w-full rounded-3xl object-cover"
          />
          <div className="absolute right-6 top-6 rounded-full bg-[#ed1c24] px-4 py-2 text-xs font-bold uppercase text-white shadow">
            Locked
          </div>
        </div>

        <div className="flex flex-[2] flex-col gap-6 rounded-3xl bg-[#f6f6f6] p-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-[#2c2a29]">Dapetin Benefitnya</h2>
                <p className="text-base text-[#413f3e]">
                  Ikuti special challenge untuk menangin hadiah eksklusif! Tonton semua video dulu untuk unlock challenge utamanya
                  ya!
                </p>
              </div>
              <button
                type="button"
                className="hidden rounded-full bg-[#ed1c24] px-4 py-2 text-xs font-bold uppercase text-white shadow lg:block"
              >
                Cek Peringkat
              </button>
            </div>
            <div className="flex items-center gap-2 text-lg font-bold text-[#2c2a29]">
              <img src={iconPlaylist} alt="" className="h-6 w-6" />
              Tonton yang BUKAN MAIN Di Sini
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm text-[#413f3e]">
              <p className="font-medium">{missionProgress.remainingVideos} video lagi untuk unlock challenge</p>
              <div className="mt-2 h-2 w-full rounded-full bg-[#dcdcdc]">
                <div className="h-2 rounded-full bg-[#ed1c24]" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#2c2a29]">
              <span className="text-[#ed1c24]">
                {missionProgress.completed}/{missionProgress.total}
              </span>
              <img src={iconRedFlag} alt="" className="h-6 w-6" />
            </div>
          </div>

          <div className="relative">
            <div ref={containerRef} className="flex gap-4 overflow-x-auto scroll-smooth pb-2">
              {missionEpisodes.map((episode) => (
                <MissionEpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
            <CarouselButton
              direction="left"
              disabled={!canScrollLeft}
              onClick={() => handleScroll('left')}
              className="left-0"
            />
            <CarouselButton
              direction="right"
              disabled={!canScrollRight}
              onClick={() => handleScroll('right')}
              className="right-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

type CarouselButtonProps = {
  direction: 'left' | 'right'
  disabled: boolean
  onClick: () => void
  className: string
}

function CarouselButton({ direction, disabled, onClick, className }: CarouselButtonProps) {
  return (
    <button
      type="button"
      aria-label={`scroll ${direction}`}
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 ${className} ${disabled ? 'opacity-30' : ''}`}
    >
      <span className="relative block size-10">
        <img src={iconCarouselCircle} alt="" className="absolute inset-0 size-full" />
        <img
          src={iconChevronOutline}
          alt=""
          className={`absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 ${
            direction === 'left' ? 'rotate-180' : ''
          }`}
        />
      </span>
    </button>
  )
}

