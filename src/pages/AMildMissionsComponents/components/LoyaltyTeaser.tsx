import { useEffect, useRef, useState } from 'react'

// Asset imports
import imgAvatar from '../../../assets/0ca13429f6931a08d0decdde0cc72cfcd7a9e32b.png'
import imgExpIcon from '../../../assets/9e533011365393d49d7691826a8ab469d8d1ea0e.png'
import imgTierMask from '../../../assets/3b2116a79434f01ad424126895a015b49e09128b.png'
import imgTierImage from '../../../assets/45d4bd0d6984129eb2c6db11bd6167cc4d99719f.png'
import imgChevronDown from '../../../assets/90f81908421afb75b67f3d08e5288cc3f01909c6.svg'
import imgDivider from '../../../assets/90f81908421afb75b67f3d08e5288cc3f01909c6.svg'
import imgImage165 from '../../../assets/16de614b9ce884964446b0acd6839ec293f68c20.png'
import imgImage177 from '../../../assets/01eb44393306d5a1ee6c88f57a0b06fe65159c1d.png'
import imgVector from '../../../assets/245a7d0f66b2a4c07c6f65541bd8759f79b07f71.png'
import imgVector1 from '../../../assets/9d91307fdf71a7bf38dad1745d0c99c835d137f2.png'
import imgVector2 from '../../../assets/eb74a525a8919d01535830698c805d339ac25f36.png'
import imgVector3 from '../../../assets/e9658add52a286024f3ccdab9b31148f3029e198.png'
import imgVector4 from '../../../assets/5ddde33acc3788bf1805dbcaf766d82a807b7fc7.png'
import imgVector5 from '../../../assets/050c6bc0d1ccf2356f8a2342240887f0e7ecc8fa.png'
import imgVector6 from '../../../assets/32f7038680f4f4ee5ca538669ffafd847a64bcb4.png'
import imgFlag from '../../../assets/afdfde28f9d5c08ca38cdf8c1d3836147bae9cdc.svg'

type LoyaltyTeaserProps = {
  className?: string
}

export function LoyaltyTeaser({ className }: LoyaltyTeaserProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false)
      }
    }

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isExpanded])

  return (
    <div ref={containerRef} className={`relative ${className || ''}`}>
      {/* Default/Collapsed State */}
      {!isExpanded && (
        <div
          className={`flex items-center gap-[15px] rounded-[10px] p-[10px] transition-all duration-300 ${
            isHovered ? 'bg-[#ed1c24]' : 'bg-transparent'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* User Avatar & Name */}
          <div className="flex items-center gap-[5px]">
            <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-white">
              <img
                alt="User Avatar"
                className="h-full w-full object-cover"
                src={imgAvatar}
              />
            </div>
            <p
              className={`text-sm leading-normal whitespace-pre ${
                isHovered ? 'text-white' : 'text-[#2c2a29]'
              }`}
            >
              <span className="font-medium">Hi,</span>{' '}
              <span className="font-bold">Rangga!</span>
            </p>
          </div>

          {/* Divider */}
          {!isHovered && (
            <div className="h-6 w-[1px] rotate-90">
              <img alt="" className="h-full w-full" src={imgDivider} />
            </div>
          )}

          {/* Points & Tier */}
          <div className="flex items-center gap-[5px]">
            {/* Points */}
            <button
              type="button"
              className="flex items-center gap-[5px] rounded-[10px] bg-white p-[5px]"
            >
              <div className="relative h-5 w-5">
                <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 shadow-[0px_1.389px_5.556px_0px_rgba(206,0,0,0.6)]">
                  <img
                    alt="Points"
                    className="absolute left-[7.14%] top-[7.14%] h-[85.71%] w-[85.71%]"
                    src={imgExpIcon}
                  />
                </div>
              </div>
              <span className="font-bold leading-[20px] text-[#2c2a29] text-sm">5.250 Points</span>
            </button>

            {/* Tier */}
            <div className="flex items-center gap-[5px] rounded-[10px] bg-white pl-[5px] pr-[10px] py-[5px]">
              <div className="relative h-5 w-5 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                  <div
                    className="absolute inset-[-10%]"
                    style={{
                      maskImage: `url('${imgTierMask}')`,
                      maskSize: '48px 48px',
                      WebkitMaskImage: `url('${imgTierMask}')`,
                      WebkitMaskSize: '48px 48px',
                    }}
                  >
                    <img
                      alt="Tier"
                      className="h-full w-full object-cover"
                      src={imgTierImage}
                    />
                  </div>
                  <div
                    className="absolute inset-[-10%] bg-[#cadfff] mix-blend-color"
                    style={{
                      maskImage: `url('${imgTierMask}')`,
                      maskSize: '48px 48px',
                      WebkitMaskImage: `url('${imgTierMask}')`,
                      WebkitMaskSize: '48px 48px',
                    }}
                  />
                </div>
              </div>
              <span className="font-bold leading-[20px] text-[#2c2a29] text-sm">Silver</span>
            </div>

            {/* Chevron Button */}
            <button
              type="button"
              onClick={handleToggle}
              className={`flex items-center rounded-[10px] p-[5px] transition-colors ${
                isHovered ? 'bg-white' : 'bg-neutral-100'
              }`}
            >
              <div className="relative h-5 w-5 overflow-hidden">
                <div className="absolute inset-[37.5%_20.83%_33.33%_20.83%]">
                  <img
                    alt=""
                    className="h-full w-full"
                    src={imgChevronDown}
                    style={{ filter: isHovered ? 'invert(1)' : 'none' }}
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Expanded State */}
      {isExpanded && (
        <div className="relative">
          {/* Expanded Header Bar */}
          <div className="relative overflow-hidden rounded-[10px] bg-[#ed1c24] shadow-[0px_1px_12px_0px_rgba(143,166,192,0.15)]">
            {/* Background Image */}
            <div className="absolute left-1/2 top-[calc(50%+77px)] h-[554px] w-[407px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply">
              <img
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                src={imgImage165}
              />
            </div>

            {/* Header Content */}
            <div className="relative flex items-center justify-between p-[10px]">
              {/* User Avatar & Name */}
              <div className="flex items-center gap-[5px]">
                <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-white">
                  <img
                    alt="User Avatar"
                    className="h-full w-full object-cover"
                    src={imgAvatar}
                  />
                </div>
                <p className="text-sm leading-normal text-white whitespace-pre">
                  <span className="font-medium">Hi,</span> Rangga!
                </p>
              </div>

              {/* Points & Tier */}
              <div className="flex items-center gap-[5px]">
                {/* Points */}
                <button
                  type="button"
                  className="flex items-center gap-[5px] rounded-[10px] bg-white p-[5px]"
                >
                  <div className="relative h-5 w-5">
                    <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 shadow-[0px_1.389px_5.556px_0px_rgba(206,0,0,0.6)]">
                      <img
                        alt="Points"
                        className="absolute left-[7.14%] top-[7.14%] h-[85.71%] w-[85.71%]"
                        src={imgExpIcon}
                      />
                    </div>
                  </div>
                  <span className="font-bold leading-normal tracking-[0.14px] text-[#2c2a29] text-sm">
                    5.250 Points
                  </span>
                </button>

                {/* Tier */}
                <div className="flex items-center gap-[5px] rounded-[10px] bg-white pl-[5px] pr-[10px] py-[5px]">
                  <div className="relative h-5 w-5 overflow-hidden">
                    <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                      <div
                        className="absolute inset-[-10%]"
                        style={{
                          maskImage: `url('${imgTierMask}')`,
                          maskSize: '48px 48px',
                          WebkitMaskImage: `url('${imgTierMask}')`,
                          WebkitMaskSize: '48px 48px',
                        }}
                      >
                        <img
                          alt="Tier"
                          className="h-full w-full object-cover"
                          src={imgTierImage}
                        />
                      </div>
                      <div
                        className="absolute inset-[-10%] bg-[#cadfff] mix-blend-color"
                        style={{
                          maskImage: `url('${imgTierMask}')`,
                          maskSize: '48px 48px',
                          WebkitMaskImage: `url('${imgTierMask}')`,
                          WebkitMaskSize: '48px 48px',
                        }}
                      />
                    </div>
                  </div>
                  <span className="font-bold leading-normal tracking-[0.14px] text-[#2c2a29] text-sm">
                    Silver
                  </span>
                </div>

                {/* Chevron Button */}
                <button
                  type="button"
                  onClick={handleToggle}
                  className="flex items-center rounded-[10px] bg-white p-[5px]"
                >
                  <div className="relative h-5 w-5 overflow-hidden">
                    <div className="absolute inset-[37.5%_20.83%_33.33%_20.83%]">
                      <img alt="" className="h-full w-full" src={imgChevronDown} />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Content Card */}
          <div className="absolute left-0 top-[68px] z-10 w-full transition-all duration-300 ease-in-out">
            <div className="relative overflow-hidden rounded-[10px] bg-[#ed1c24] shadow-[0px_1px_12px_0px_rgba(143,166,192,0.15)]">
              {/* Background Image */}
              <div className="absolute left-1/2 top-1/2 h-[554px] w-[407px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply">
                <img
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  src={imgImage165}
                />
              </div>

              {/* Content */}
              <div className="relative p-[10px]">
                {/* User Stats Card */}
                <div className="rounded-[10px] bg-white p-[10px]">
                  {/* Background Decorations */}
                  <div className="absolute left-[109.5px] top-[-114px]">
                    <div className="absolute left-[128.14px] top-[3px]">
                      <div className="rotate-[23.237deg] opacity-[0.07]">
                        <img
                          alt=""
                          className="h-[186.952px] w-[186.952px]"
                          src={imgImage177}
                        />
                      </div>
                    </div>
                    <div className="absolute left-[221.12px] top-[-79.12px]">
                      <div className="rotate-[132.033deg] opacity-[0.07]">
                        <img
                          alt=""
                          className="h-[162.346px] w-[162.346px]"
                          src={imgImage177}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Stats Content */}
                  <div className="relative flex flex-col gap-[20px] sm:gap-5">
                    {/* Daily Stats */}
                    <div className="flex flex-col gap-[10px]">
                      {/* Daily EXP */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-[5px] min-w-0 flex-1">
                          <div className="relative h-4 w-4 shrink-0">
                            <div className="absolute inset-0">
                              <img
                                alt="Star"
                                className="absolute inset-0 h-full w-full opacity-0"
                                src={imgVector}
                              />
                              <img
                                alt=""
                                className="absolute inset-[5.21%_10.51%_12.45%_8.74%]"
                                src={imgVector1}
                              />
                              <img
                                alt=""
                                className="absolute inset-[68.64%_9.76%_12.5%_71.39%]"
                                src={imgVector2}
                              />
                            </div>
                          </div>
                          <span className="font-medium leading-[20px] text-[#333333] text-xs sm:text-sm truncate">
                            EXP Harian Terkumpul
                          </span>
                        </div>
                        <span className="font-bold leading-[13px] text-[#ed1c24] text-xs sm:text-sm shrink-0">
                          0/250
                        </span>
                      </div>

                      {/* Daily Challenges */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-[5px] min-w-0 flex-1">
                          <div className="relative h-4 w-4 shrink-0">
                            <div className="absolute inset-[3.13%_20.12%_31.21%_14.21%]">
                              <img alt="" className="h-full w-full" src={imgVector5} />
                            </div>
                            <div className="absolute inset-[60.44%_6.26%_3.79%_54.74%]">
                              <img alt="" className="h-full w-full" src={imgVector3} />
                            </div>
                            <div className="absolute inset-[60.44%_0%_3.79%_61%]">
                              <img alt="" className="h-full w-full" src={imgVector4} />
                            </div>
                          </div>
                          <span className="font-medium leading-[20px] text-[#333333] text-xs sm:text-sm truncate">
                            Tantangan Harian Selesai
                          </span>
                        </div>
                        <span className="font-bold leading-[13px] text-[#ed1c24] text-xs sm:text-sm shrink-0">0/5</span>
                      </div>

                      {/* Invite Friends Challenge */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-[5px] min-w-0 flex-1">
                          <div className="relative h-4 w-4 shrink-0 rounded-[4px]">
                            <div className="absolute inset-0">
                              <img
                                alt=""
                                className="absolute inset-0 h-full w-full opacity-0"
                                src={imgVector}
                              />
                              <img
                                alt=""
                                className="absolute inset-[11.46%_8.32%_17.71%_8.35%]"
                                src={imgVector6}
                              />
                            </div>
                          </div>
                          <span className="font-medium leading-[20px] text-[#333333] text-xs sm:text-sm truncate">
                            Tantangan Ajak Teman
                          </span>
                        </div>
                        <span className="font-bold leading-[13px] text-[#ed1c24] text-xs sm:text-sm shrink-0">0/5</span>
                      </div>
                    </div>

                    {/* Level Progress */}
                    <div className="flex flex-col gap-[5px]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs leading-normal text-[#333333]">
                          <span className="font-black not-italic">4.750 Points</span> lagi buat naik
                          ke level GOLD
                        </span>
                        <div className="flex items-center gap-[5px]">
                          <span className="font-bold leading-[13px] text-sm">
                            <span className="text-[#ed1c24]">5.250</span>/10.000
                          </span>
                          <img alt="Flag" className="h-4 w-4" src={imgFlag} />
                        </div>
                      </div>
                      {/* Progress Bar */}
                      <div className="h-1 rounded-full bg-[#b7c6cd]">
                        <div
                          className="h-1 rounded-[2.5px] bg-[#ed1c24]"
                          style={{ width: '52.5%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

