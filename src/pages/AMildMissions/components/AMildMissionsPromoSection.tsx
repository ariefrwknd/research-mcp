import { useState } from 'react'

import {
  iconArrowDiagonal,
  iconArrowSquareLeft,
  iconArrowSquareRight,
  iconStar,
  iconStarOutline,
  promoDivider,
  promoTexture,
  promoVector1,
  promoVector2,
  promoVector3,
} from '../assets'
import { PROMO_IMAGE, promoSlides } from '../services/amildMissionsService'

export function AMildMissionsPromoSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const currentSlide = promoSlides[activeIndex]

  const goToSlide = (direction: 'prev' | 'next') => {
    setActiveIndex((prev) => {
      if (direction === 'prev') {
        return prev === 0 ? promoSlides.length - 1 : prev - 1
      }
      return prev === promoSlides.length - 1 ? 0 : prev + 1
    })
  }

  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#ececec] bg-white shadow-sm">
      <img src={promoTexture} alt="" className="pointer-events-none absolute inset-0 w-full opacity-30" />
      <img src={promoDivider} alt="" className="pointer-events-none absolute left-0 top-16 w-1/2 opacity-30" />
      <div className="relative grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6 p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-[#fde8e9] px-4 py-1 text-sm font-semibold text-[#ed1c24]">{currentSlide.badge}</span>
            <div className="flex items-center gap-1 text-[#ed1c24]">
              {[iconStar, iconStar, iconStarOutline].map((star, index) => (
                <img key={`${star}-${index}`} src={star} alt="" className="h-5 w-5" />
              ))}
            </div>
          </div>
          <h3 className="text-3xl font-bold text-[#2c2a29]">{currentSlide.title}</h3>
          <p className="text-base text-[#413f3e]">{currentSlide.description}</p>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ed1c24] px-6 py-3 text-base font-black text-white"
          >
            <img src={iconArrowDiagonal} alt="" className="h-5 w-5" />
            {currentSlide.cta}
          </button>
          <div className="flex items-center gap-2">
            {promoSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-10 rounded-full ${index === activeIndex ? 'bg-[#ed1c24]' : 'bg-[#e4e4e4]'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-t-3xl bg-[#121212] lg:rounded-l-3xl lg:rounded-tr-none">
          <img src={promoVector1} alt="" className="pointer-events-none absolute -left-5 top-10 w-24 opacity-50" />
          <img src={promoVector2} alt="" className="pointer-events-none absolute right-6 top-16 w-32 opacity-40" />
          <img src={promoVector3} alt="" className="pointer-events-none absolute -bottom-10 right-0 w-64 opacity-20" />
          <img src={PROMO_IMAGE} alt={currentSlide.title} className="relative h-full w-full object-cover" />
          <button
            type="button"
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2"
            onClick={() => goToSlide('prev')}
          >
            <img src={iconArrowSquareLeft} alt="" className="h-12 w-12" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2"
            onClick={() => goToSlide('next')}
          >
            <img src={iconArrowSquareRight} alt="" className="h-12 w-12" />
          </button>
        </div>
      </div>
    </section>
  )
}

