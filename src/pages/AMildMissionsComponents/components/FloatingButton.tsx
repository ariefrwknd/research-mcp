import { useEffect, useRef, useState } from 'react'

// Asset imports
import imgStar8 from '../../../assets/acbf30794ba9d465205890afe5f91a7fc05ceccf.png'
import imgThunder1 from '../../../assets/6a9f8958f362cddf178850a79177f519f1c6017c.png'
import imgImage191 from '../../../assets/23425883703672d01f90149effadfd6906de07d4.png'
import imgEllipse609 from '../../../assets/57be00ddd643247ef5927f0f7653243134097a2a.png'
import imgQuestionMark1 from '../../../assets/4caf46239661bd25b5c4ad2947c319ec21a18673.svg'
import imgQuestionMark2 from '../../../assets/77ebf38ac4044c91bf59c3ebb58272a1cdb81b29.svg'
import imgQuestionMark3 from '../../../assets/b97e302b2eb00874b39f569e5e8a9b7b18ff2f26.svg'
import imgChevron from '../../../assets/a06561ff5ac228fd7f764a271b07c85db0250bb1.svg'

type FloatingButtonProps = {
  className?: string
  onClick?: () => void
}

export function FloatingButton({ className, onClick }: FloatingButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)
  const hasMoved = useRef(false)

  // Initialize position on mount
  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setPosition({
        x: window.innerWidth - rect.width - 32, // 32px = 8 * 4 (right-8)
        y: window.innerHeight - rect.height - 32, // 32px = 8 * 4 (bottom-8)
      })
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    hasMoved.current = false
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault()
    const touch = e.touches[0]
    setIsDragging(true)
    hasMoved.current = false
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    })
  }

  const handleClick = (e: React.MouseEvent) => {
    // Only trigger onClick if user didn't drag
    if (hasMoved.current) {
      e.preventDefault()
      e.stopPropagation()
      return
    }
    onClick?.()
  }

  // Add global event listeners for dragging
  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX - dragStart.x
      const newY = e.clientY - dragStart.y

      // Check if user actually moved (not just clicked)
      setPosition((prev) => {
        if (Math.abs(newX - prev.x) > 5 || Math.abs(newY - prev.y) > 5) {
          hasMoved.current = true
        }

        // Constrain to viewport
        const buttonWidth = 112
        const buttonHeight = 112
        const constrainedX = Math.max(0, Math.min(newX, window.innerWidth - buttonWidth))
        const constrainedY = Math.max(0, Math.min(newY, window.innerHeight - buttonHeight))

        return { x: constrainedX, y: constrainedY }
      })
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      const newX = touch.clientX - dragStart.x
      const newY = touch.clientY - dragStart.y

      // Check if user actually moved (not just tapped)
      setPosition((prev) => {
        if (Math.abs(newX - prev.x) > 5 || Math.abs(newY - prev.y) > 5) {
          hasMoved.current = true
        }

        // Constrain to viewport
        const buttonWidth = 112
        const buttonHeight = 112
        const constrainedX = Math.max(0, Math.min(newX, window.innerWidth - buttonWidth))
        const constrainedY = Math.max(0, Math.min(newY, window.innerHeight - buttonHeight))

        return { x: constrainedX, y: constrainedY }
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      // Reset after a short delay to allow click handler to check
      setTimeout(() => {
        hasMoved.current = false
      }, 100)
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
      // Reset after a short delay to allow click handler to check
      setTimeout(() => {
        hasMoved.current = false
      }, 100)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, dragStart])

  // Handle window resize to keep button within bounds
  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => {
        const buttonWidth = 112
        const buttonHeight = 112
        const constrainedX = Math.max(0, Math.min(prev.x, window.innerWidth - buttonWidth))
        const constrainedY = Math.max(0, Math.min(prev.y, window.innerHeight - buttonHeight))
        return { x: constrainedX, y: constrainedY }
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className={`group fixed z-40 h-[112px] w-[112px] cursor-grab active:cursor-grabbing transition-transform ${
        isDragging ? 'scale-100' : 'hover:scale-105 active:scale-95'
      } ${className || ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        right: 'auto',
        bottom: 'auto',
      }}
      aria-label="Cek Peringkat Lo Di Sini"
    >
      <div className="relative h-full w-full">
        {/* Star Background */}
        <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2">
          <div className="absolute inset-0">
            <img
              alt=""
              className="h-full w-full object-contain"
              src={imgStar8}
            />
          </div>
        </div>

        {/* Thunder/Lightning Decorations */}
        <div className="absolute bottom-[29.65px] right-[9.78px]">
          <div className="rotate-[171.442deg] scale-y-[-100%]">
            <img
              alt=""
              className="h-[17.235px] w-[10.772px] object-contain"
              src={imgThunder1}
            />
          </div>
        </div>

        <div className="absolute bottom-[30.29px] right-[19.53px]">
          <div className="rotate-[346.377deg]">
            <img
              alt=""
              className="h-[17.235px] w-[10.772px] object-contain"
              src={imgThunder1}
            />
          </div>
        </div>

        {/* Podium Image */}
        <div className="absolute left-1/2 top-[3px] h-[70.176px] w-[70.176px] -translate-x-1/2">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt="Podium"
              className="absolute left-0 top-[-9.22%] h-[140.96%] w-full object-cover"
              src={imgImage191}
            />
          </div>

          {/* Question Mark Badges */}
          {/* Top Left */}
          <div className="absolute left-[19.26px] top-[10.19px]">
            <div className="relative h-[18.11px] w-[18.11px]">
              <img
                alt=""
                className="absolute inset-0 h-full w-full"
                src={imgEllipse609}
              />
              <div className="absolute left-1/2 top-1/2 h-[11.319px] w-[7.923px] -translate-x-1/2 -translate-y-1/2">
                <div className="absolute inset-[-80%_-57.14%]">
                  <img alt="" className="h-full w-full" src={imgQuestionMark1} />
                </div>
              </div>
            </div>
          </div>

          {/* Top Right */}
          <div className="absolute left-[37.37px] top-[26.03px]">
            <div className="relative h-[18.11px] w-[18.11px]">
              <img
                alt=""
                className="absolute inset-0 h-full w-full"
                src={imgEllipse609}
              />
              <div className="absolute left-1/2 top-1/2 flex h-[11.319px] w-[7.923px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <div className="rotate-[355deg]">
                  <div className="relative h-[11.319px] w-[7.923px]">
                    <div className="absolute inset-[-80%_-57.14%]">
                      <img alt="" className="h-full w-full" src={imgQuestionMark2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Center */}
          <div className="absolute left-[12.47px] top-[40.75px]">
            <div className="relative h-[18.11px] w-[18.11px]">
              <img
                alt=""
                className="absolute inset-0 h-full w-full"
                src={imgEllipse609}
              />
              <div className="absolute left-1/2 top-1/2 flex h-[11.319px] w-[7.923px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <div className="rotate-[5deg]">
                  <div className="relative h-[11.319px] w-[7.923px]">
                    <div className="absolute inset-[-80%_-57.14%]">
                      <img alt="" className="h-full w-full" src={imgQuestionMark3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Labels */}
        <div className="absolute bottom-[6px] left-1/2 flex -translate-x-1/2 flex-col items-center justify-end gap-0 pb-[2px]">
          {/* Line 1 */}
          <div className="mb-[-2px] flex items-center justify-center gap-[8.611px] rounded px-1 py-px shadow-[0px_0.861px_5.167px_0px_rgba(0,0,0,0.25)]">
            <span className="font-bold uppercase leading-[16px] text-white text-xs">
              Cek Peringkat
            </span>
          </div>

          {/* Line 2 */}
          <div className="mb-[-2px] flex items-center justify-center gap-[8.611px] rounded px-1 py-px shadow-[0px_0.861px_5.167px_0px_rgba(0,0,0,0.25)]">
            <span className="font-bold uppercase leading-[16px] text-white text-xs">
              Lo Di Sini
            </span>
          </div>
        </div>

        {/* Chevron Button (Left Side) */}
        <div className="absolute left-0 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center gap-[3.333px] overflow-hidden rounded-[10px] bg-[#ed1c24] p-[3.333px]">
          <div className="relative h-[11.111px] w-[11.111px] shrink-0 overflow-hidden">
            <div className="absolute inset-[20.83%_33.33%_20.83%_37.5%]">
              <img alt="Chevron" className="h-full w-full" src={imgChevron} />
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}

