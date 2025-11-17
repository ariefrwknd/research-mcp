import { useCallback, useEffect, useRef, useState } from 'react'

type Direction = 'left' | 'right'

export const useCarouselControls = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollIndicators = useCallback(() => {
    const node = containerRef.current
    if (!node) return
    const { scrollLeft, clientWidth, scrollWidth } = node
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1)
  }, [])

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    updateScrollIndicators()
    const handleScroll = () => updateScrollIndicators()
    const handleResize = () => updateScrollIndicators()
    node.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      node.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [updateScrollIndicators])

  const handleScroll = useCallback((direction: Direction) => {
    const node = containerRef.current
    if (!node) return
    const offset = node.clientWidth * 0.9
    node.scrollBy({ left: direction === 'left' ? -offset : offset, behavior: 'smooth' })
  }, [])

  return { containerRef, canScrollLeft, canScrollRight, handleScroll }
}

