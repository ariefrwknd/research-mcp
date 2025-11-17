import { useRef, useState, useEffect } from 'react'

// Asset imports
import imgImage106 from '../../../assets/a09c17904f405babbe63dc08a694b12dede2c71f.png'
import imgImgReward from '../../../assets/9e533011365393d49d7691826a8ab469d8d1ea0e.png'
import imgImg from '../../../assets/38424d7eede166643ec69282fec16f23b16d0d66.png'
import imgImg1 from '../../../assets/69e6daa955277f3a00341aa958ec3acb87577d05.png'
import imgImg2 from '../../../assets/d0058e143f5adabac830a9688f265666d4a8992a.png'
import imgImg3 from '../../../assets/0ba37ea762865c5bed100ade5c5d16a67ad91664.png'
import imgImg4 from '../../../assets/401515410af395ae4eaec6b69344c7b74baa280b.png'
import imgImgVideoThumbnail from '../../../assets/d9d004d079a59fc7772112a58b52f8f8458b6cfc.png'
import imgBxPlay from '../../../assets/bfc440e4bd642b42a14d394f0f1bb625455dc483.svg'
import imgPoinImage from '../../../assets/7ba35b0cfc60f513d45a903c731af404ef7c03ea.svg'
import imgPoinImage1 from '../../../assets/8a585f890389cac7f5da3d37ac32072bcc1cb0eb.svg'

type InspirationCardProps = {
  thumbnail: string
  title: string
  duration?: string
  points?: number
  category?: string
  className?: string
}

function InspirationCard({
  thumbnail,
  title,
  duration = '1:15',
  points = 25,
  category = 'Inspirasi',
  className,
}: InspirationCardProps) {
  return (
    <div
      className={`relative h-[220px] w-[180px] shrink-0 overflow-hidden rounded-[10px] border border-[#e6e6e6] bg-white sm:h-[252px] sm:w-[201px] ${className || ''}`}
    >
      <div className="flex h-full flex-col gap-2 p-[5px] pb-2 pt-[5px] sm:gap-[10px] sm:pb-[10px]">
        {/* Thumbnail Container */}
        <div className="relative h-[120px] w-full overflow-hidden rounded-[5px] sm:h-[141.5px]">
          <img
            alt={title}
            className="h-full w-full object-cover"
            src={thumbnail}
          />

          {/* Video Duration Badge */}
          <div className="absolute left-[3.42px] top-[3.42px] flex items-center justify-center rounded-full bg-[rgba(97,98,98,0.25)] px-[5.706px] py-[5.706px]">
            <span className="font-medium capitalize leading-normal text-white text-xs">{duration}</span>
          </div>

          {/* Play Button Overlay */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-[#ed1c24]">
              <img alt="Play" className="h-[18px] w-[18px]" src={imgBxPlay} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[5px] px-[5px]">
          {/* Points Indicator */}
          <div className="flex items-center gap-[5px] rounded-[5px]">
            <div className="relative h-4 w-4 shrink-0">
              <img alt="" className="absolute inset-0 h-full w-full" src={imgPoinImage} />
              <img alt="" className="absolute inset-0 h-full w-full" src={imgPoinImage1} />
              <div className="absolute inset-0 shadow-[0px_1.111px_4.444px_0px_rgba(206,0,0,0.6)]">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    alt=""
                    className="absolute left-[7.14%] top-[7.14%] h-[85.71%] w-[85.71%]"
                    src={imgImgReward}
                  />
                </div>
              </div>
            </div>
            <span className="font-bold leading-normal tracking-[0.25px] text-[#ed1c24] text-xs sm:text-sm">
              {points} Points
            </span>
          </div>

          {/* Title and Category */}
          <div className="flex flex-col gap-2 sm:gap-[10px]">
            <p className="line-clamp-2 min-h-[38px] font-medium leading-normal tracking-[0.25px] text-[#2c2a29] text-xs sm:text-sm">
              {title}
            </p>
            <span className="font-bold uppercase leading-normal tracking-[0.025px] text-[#959493] text-[10px]">
              {category}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

type InspirationsProps = {
  className?: string
}

export function Inspirations({ className }: InspirationsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

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

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const scrollAmount = 211 // card width (201px) + gap (10px) on desktop, 190px on mobile
    const newScrollLeft = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    })

    setTimeout(() => {
      if (container) {
        setCanScrollLeft(container.scrollLeft > 0)
        setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
      }
    }, 100)
  }

  // Mock inspiration data
  const inspirations = [
    { thumbnail: imgImage106, title: 'Staycation – Amanda Anindita Kirana' },
    { thumbnail: imgImg, title: 'Staycation – Amanda Anindita Kirana' },
    { thumbnail: imgImg1, title: 'Staycation – Amanda Anindita Kirana' },
    { thumbnail: imgImg2, title: 'Staycation – Amanda Anindita Kirana' },
    { thumbnail: imgImg3, title: 'Staycation – Amanda Anindita Kirana' },
    { thumbnail: imgImg4, title: 'Staycation – Amanda Anindita Kirana' },
    { thumbnail: imgImgVideoThumbnail, title: 'Staycation – Amanda Anindita Kirana' },
  ]

  return (
    <div className={`w-full rounded-[15px] border border-[#e6e6e6] bg-white p-5 ${className || ''}`}>
      {/* Section Title */}
      <h2 className="mb-4 font-bold leading-normal text-[#2c2a29] text-xl sm:text-2xl lg:text-[24px]">
        Yang Beda Yang Menginspirasi
      </h2>

      {/* Scrollable Cards Container */}
      <div className="relative">
        {/* Left Navigation Button */}
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-opacity hover:opacity-80 sm:left-0"
            aria-label="Scroll left"
          >
            <svg
              className="h-5 w-5 text-[#ed1c24]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex min-w-0 gap-[10px] overflow-x-auto overflow-y-hidden scrollbar-hide"
        >
          {inspirations.map((inspiration, index) => (
            <InspirationCard
              key={index}
              thumbnail={inspiration.thumbnail}
              title={inspiration.title}
            />
          ))}
        </div>

        {/* Right Navigation Button */}
        {canScrollRight && (
          <button
            type="button"
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 z-10 flex h-8 w-8 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-opacity hover:opacity-80 sm:right-0"
            aria-label="Scroll right"
          >
            <svg
              className="h-5 w-5 text-[#ed1c24]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

