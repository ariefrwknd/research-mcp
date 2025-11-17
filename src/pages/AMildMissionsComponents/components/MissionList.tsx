import { useEffect, useRef, useState } from 'react'

// Asset imports
import imgVideoThumbnail from '../../../assets/bbed71f8e952b4f7468f52f180608ef1a677e536.png'
import imgAdditionalEngagementCard1 from '../../../assets/65b29a44c3cf9eaa19e8e75b6325ac4614c7b1f3.png'
import imgRedFlag1 from '../../../assets/0f504131d10383c47ffcb296e1edfeb63eef4119.png'
import imgEpisodeThumbnail from '../../../assets/9c8d9a02bb1bfa70121dcfba1f86e554f498453e.png'
import imgTickCircle from '../../../assets/4d34240ef102748676cbce442728c4b134bbf1a2.svg'
import imgImgIcon from '../../../assets/5a5c5abf7948d97602b147dc319d15de53251568.svg'
import imgEllipse750 from '../../../assets/d1ffdf6cfd8cc128dd7ec6beadf497781ce01582.svg'
import imgChevron from '../../../assets/4b9b3b7c25134e4eeeb40d750a44778b00c7498e.svg'

type EngagementLabelProps = {
  option?: 'New' | 'Finished'
  className?: string
}

function EngagementLabel({ option = 'New', className }: EngagementLabelProps) {
  if (option === 'Finished') {
    return (
      <div
        className={`flex h-[25px] items-center gap-[5px] rounded-[10px] bg-[#e9e9e9] px-[5px] py-[5px] ${className || ''}`}
      >
        <div className="relative h-[15px] w-[15px] shrink-0">
          <img alt="Tick" className="h-full w-full" src={imgTickCircle} />
        </div>
        <span className="font-bold leading-[13px] tracking-[0.25px] text-[#959493] text-xs">
          Finished
        </span>
      </div>
    )
  }
  return (
    <div className={`flex h-[25px] items-center rounded-[10px] bg-[#ed1c24] px-[5px] py-[5px] ${className || ''}`}>
      <span className="font-bold leading-[13px] tracking-[0.25px] text-white text-xs">NEW!</span>
    </div>
  )
}

type MissionCardProps = {
  episode: string
  status?: 'New' | 'Finished'
  thumbnail?: string
  className?: string
}

function MissionCard({ episode, status = 'New', thumbnail, className }: MissionCardProps) {
  return (
    <div className={`relative h-[178px] w-[185px] shrink-0 overflow-hidden rounded-[10px] bg-white ${className || ''}`}>
      {/* Episode Label and Status */}
      <div className="absolute left-[10px] top-[10px] flex w-[165px] items-center justify-between">
        <span className="font-bold leading-normal tracking-[0.25px] text-[#2c2a29] text-xs">{episode}</span>
        <EngagementLabel option={status} />
      </div>

      {/* Video Thumbnail */}
      <div className="absolute left-[10px] top-[45px] h-[123px] w-[165px] overflow-hidden rounded-[10px]">
        <img
          alt={`${episode} Thumbnail`}
          className="h-full w-full object-cover"
          src={thumbnail || imgEpisodeThumbnail}
        />
      </div>
    </div>
  )
}

type MissionListProps = {
  className?: string
}

export function MissionList({ className }: MissionListProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const scrollAmount = 190 // card width (185px) + gap (5px)
    const newScrollLeft = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    })

    // Update button states after scroll
    setTimeout(() => {
      if (container) {
        setCanScrollLeft(container.scrollLeft > 0)
        setCanScrollRight(
          container.scrollLeft < container.scrollWidth - container.clientWidth - 10
        )
      }
    }, 100)
  }

  const handleScroll = () => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
  }

  // Check initial scroll state
  useEffect(() => {
    const checkScrollState = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current
        setCanScrollLeft(container.scrollLeft > 0)
        setCanScrollRight(container.scrollWidth > container.clientWidth)
      }
    }

    checkScrollState()
    window.addEventListener('resize', checkScrollState)
    return () => window.removeEventListener('resize', checkScrollState)
  }, [])

  // Mock mission data
  const missions = [
    { episode: 'EPISODE 6', status: 'New' as const },
    { episode: 'EPISODE 5', status: 'New' as const },
    { episode: 'EPISODE 4', status: 'Finished' as const },
    { episode: 'EPISODE 3', status: 'Finished' as const },
    { episode: 'EPISODE 2', status: 'Finished' as const },
    { episode: 'EPISODE 1', status: 'Finished' as const },
  ]

  return (
    <div className={`w-full ${className || ''}`}>
      <div className="flex flex-col gap-4 rounded-[15px] bg-white p-5 sm:flex-row sm:gap-[15px] sm:p-5 lg:gap-[15px] lg:p-5">
        {/* Additional Engagement Card - Left Side */}
        <div className="h-[300px] w-full overflow-hidden rounded-[15px] sm:h-[430px] sm:w-[401px] sm:shrink-0">
          <img
            alt="Additional Engagement"
            className="h-full w-full object-cover"
            src={imgAdditionalEngagementCard1}
          />
        </div>

        {/* Mission List - Right Side */}
        <div className="flex min-w-0 flex-1 flex-col gap-[30px] rounded-[15px] border border-neutral-200 bg-neutral-100 p-5 sm:p-5">
          {/* Header Section */}
          <div className="flex min-w-0 flex-col gap-[10px]">
            <h2 className="font-bold leading-normal text-[#2c2a29] text-xl sm:text-2xl lg:text-[24px]">
              Dapetin Benefitnya
            </h2>
            <p className="font-medium leading-[25px] text-[#413f3e] text-sm sm:text-base lg:text-base">
              Ikuti special challenge untuk menangin hadiah eksklusif! Tonton semua video dulu untuk
              unlock challenge utamanya ya!
            </p>
          </div>

          {/* Video Section */}
          <div className="flex flex-col gap-5">
            {/* Section Title */}
            <div className="flex min-w-0 h-[31.902px] items-center gap-[5px]">
              <div className="relative h-6 w-6 shrink-0">
                <img alt="Icon" className="h-full w-full" src={imgImgIcon} />
              </div>
              <h3 className="min-w-0 flex-1 font-bold leading-normal text-[#2c2a29] text-lg sm:text-xl lg:text-[24px]">
                Tonton yang BUKAN MAIN Di Sini
              </h3>
            </div>

            {/* Progress Information */}
            <div className="flex min-w-0 flex-col gap-[10px]">
              {/* Progress Text and Counter */}
              <div className="flex min-w-0 items-center justify-between gap-2">
                <p className="min-w-0 flex-1 font-medium leading-[25px] text-[#42403f] text-sm sm:text-base lg:text-base">
                  8 video lagi untuk unlock challenge
                </p>
                <div className="flex items-center gap-1">
                  <span className="font-bold leading-[13px] text-base">
                    <span className="text-[#ed1c24]">4</span>/6
                  </span>
                  <div className="relative h-4 w-4 shrink-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
                    <img alt="Flag" className="h-full w-full object-contain" src={imgRedFlag1} />
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-[7px] w-full overflow-hidden rounded-full bg-[#cccccc]">
                <div
                  className="h-[7px] rounded-[2.5px] bg-[#ed1c24]"
                  style={{ width: '66.67%' }}
                />
              </div>
            </div>

            {/* Mission Cards Carousel */}
            <div className="relative">
              {/* Left Navigation Button */}
              {canScrollLeft && (
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-[0px_0.8px_9.6px_0px_rgba(143,166,192,0.15)] bg-white transition-opacity hover:opacity-80 sm:left-0 lg:left-0"
                  aria-label="Scroll left"
                >
                  <div className="relative h-8 w-8">
                    <img alt="" className="h-full w-full" src={imgEllipse750} />
                    <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                      <div className="rotate-180 scale-y-[-100%]">
                        <img alt="" className="h-full w-full" src={imgChevron} />
                      </div>
                    </div>
                  </div>
                </button>
              )}

              {/* Scrollable Container */}
              <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex min-w-0 gap-[5px] overflow-x-auto overflow-y-hidden scrollbar-hide"
              >
                {missions.map((mission, index) => (
                  <MissionCard
                    key={index}
                    episode={mission.episode}
                    status={mission.status}
                    thumbnail={mission.status === 'New' ? imgVideoThumbnail : imgEpisodeThumbnail}
                  />
                ))}
              </div>

              {/* Right Navigation Button */}
              {canScrollRight && (
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 z-10 flex h-8 w-8 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-[0px_0.8px_9.6px_0px_rgba(143,166,192,0.15)] bg-white transition-opacity hover:opacity-80 sm:right-0 lg:right-0"
                  aria-label="Scroll right"
                >
                  <div className="relative h-8 w-8">
                    <img alt="" className="h-full w-full" src={imgEllipse750} />
                    <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                      <img alt="" className="h-full w-full" src={imgChevron} />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

