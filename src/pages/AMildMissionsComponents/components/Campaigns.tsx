import { useState } from 'react'

// Asset imports
import img5 from '../../../assets/3f530191a53b5321dc2bdd1820867b505f279186.png'
import img6 from '../../../assets/b8ba8ef388e65ec7d392857958c964e158ef5ad0.png'
import imgArrowRight from '../../../assets/26280607910a704c861a2f6a9ae12b5e1f73fb2c.svg'
import imgVuesaxBulkArrowSquareRight from '../../../assets/6338bbaf5d6fe9e2dde301ce89b989fc0cb1983d.svg'
import imgVuesaxBulkArrowSquareLeft from '../../../assets/b1d21441e551e862ae9f5e883f9e2d70aa694ceb.svg'
import img1 from '../../../assets/50771d991bbb02cb430a0e77813330bffee8b869.svg'
import img2 from '../../../assets/5c6529a079b09b0b4e7054560051d31a0391ecf2.svg'
import img3 from '../../../assets/d7b6235b5a84447c125cacb734a361c4f67a0138.svg'
import img4 from '../../../assets/7ab5be14248be861c4640e5c26e8ca4fa5a2c4b7.svg'
import img7 from '../../../assets/a0ec8d8249ca2530471a9d005373114bcd219eee.svg'
import img8 from '../../../assets/97fce0d85d7577cc07a7f4969dc0c80267716091.svg'
import img9 from '../../../assets/67eea3b86febcd0ad259484e8a48fa561c03772f.svg'

type CampaignsProps = {
  className?: string
}

export function Campaigns({ className }: CampaignsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[15px] border-[1.5px] border-[#e6e6e6] bg-white ${className || ''}`}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Panel - Content */}
        <div className="relative flex min-h-[300px] flex-1 flex-col bg-white p-5 sm:min-h-[392px] sm:p-5 lg:w-[713px] lg:flex-shrink-0">
          {/* Background Decorative Elements - Hidden on mobile, visible on desktop */}
          <div className="absolute bottom-[-34px] left-0 hidden h-[426px] w-full overflow-hidden lg:block">
            {/* Background Image */}
            <div className="absolute left-0 top-[68px] h-[380px] w-full">
              <img alt="" className="h-full w-full object-cover" src={img1} />
            </div>

            {/* Decorative Vectors */}
            <div className="absolute inset-[21.36%_-28.19%_-20.89%_68.72%]">
              <img alt="" className="h-full w-full object-contain" src={img2} />
            </div>
            <div className="absolute left-[calc(50%+32.5px)] top-[calc(50%+137px)] h-[152px] w-[152px] -translate-x-1/2 -translate-y-1/2">
              <img alt="" className="h-full w-full object-contain" src={img3} />
            </div>
            <div className="absolute left-[calc(50%+117.5px)] top-[calc(50%+47px)] h-9 w-9 -translate-x-1/2 -translate-y-1/2">
              <img alt="" className="h-full w-full object-contain" src={img4} />
            </div>

            {/* Texture Overlay */}
            <div className="absolute left-1/2 top-1/2 h-[487px] w-[974px] -translate-x-1/2 -translate-y-1/2 mix-blend-color-dodge">
              <img alt="" className="h-full w-full object-cover" src={img5} />
            </div>

            {/* Top Color Bar */}
            <div className="absolute left-0 top-0 h-[68px] w-full" />
          </div>

          {/* Divider Line - Hidden on mobile */}
          <div className="absolute right-0 top-1/2 hidden h-[392px] w-0 -translate-y-1/2 lg:block">
            <div className="flex h-full w-full items-center justify-center">
              <div className="rotate-90">
                <img alt="" className="h-full w-full" src={img7} />
              </div>
            </div>
          </div>

          {/* Top Border Line - Hidden on mobile */}
          <div className="absolute left-0 top-[68px] hidden h-0 w-full lg:block">
            <img alt="" className="h-full w-full" src={img9} />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-1 flex-col gap-8 px-5 py-10 sm:gap-[30px] sm:px-5 sm:py-10">
            {/* Header with Title and Stars */}
            <div className="flex items-center justify-between">
              <h2 className="font-bold leading-normal text-[#2c2a29] text-xl sm:text-2xl lg:text-[24px]">
                Intip Keseruan Lainnya Di Sini
              </h2>
              {/* Star Icons - Hidden on mobile */}
              <div className="hidden items-center gap-[5px] sm:flex">
                <img alt="" className="h-6 w-6" src={img8} />
                <img alt="" className="h-6 w-6" src={img8} />
                <img alt="" className="h-6 w-6" src={img8} />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-4 sm:gap-[15px]">
              {/* Badge */}
              <div className="flex w-fit items-center justify-center rounded-[10px] bg-[#fde8e9] px-[10px] py-[10px]">
                <span className="font-medium leading-normal tracking-[0.14px] text-[#ed1c24] text-sm">
                  Bukan Main
                </span>
              </div>

              {/* Title and Description */}
              <div className="flex flex-col gap-2 sm:gap-[10px]">
                <h3 className="font-bold leading-normal text-[#2c2a29] text-2xl sm:text-3xl lg:text-[32px]">
                  Enaknya Gimana, Gimana Enaknya
                </h3>
                <p className="font-medium leading-[25px] text-[#2c2a29] text-sm sm:text-base lg:text-base">
                  Temuin inspirasi biar jadi gak seenaknya lewat konten yang bisa lo nikmatin di sini!
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-[5px] rounded-[10px] bg-[#ed1c24] px-10 py-[15px] transition-opacity hover:opacity-90 sm:w-auto sm:px-10"
            >
              <div className="relative h-6 w-6 shrink-0">
                <img alt="Arrow" className="h-full w-full" src={imgArrowRight} />
              </div>
              <span className="font-black capitalize leading-normal text-white text-base">
                Cek Sekarang
              </span>
            </button>
          </div>
        </div>

        {/* Right Panel - Image Carousel */}
        <div className="relative h-auto w-full overflow-hidden lg:w-[697px] lg:flex-shrink-0">
          {/* Main Image */}
          <div className="relative h-full w-full">
            <img
              alt="Campaign"
              className="h-full w-full object-cover"
              src={img6}
            />

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center transition-opacity hover:opacity-80 sm:left-2 lg:left-[9.21px]"
              aria-label="Previous slide"
            >
              <img alt="" className="h-full w-full" src={imgVuesaxBulkArrowSquareLeft} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center transition-opacity hover:opacity-80 sm:right-2 lg:right-[9.21px]"
              aria-label="Next slide"
            >
              <img alt="" className="h-full w-full" src={imgVuesaxBulkArrowSquareRight} />
            </button>

            {/* Slider Indicators */}
            <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2">
              <div className="flex items-center gap-[4.604px] rounded-[8.552px] bg-black/10 px-[8.552px] py-[8.552px] backdrop-blur-[34.209px]">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-[4.604px] rounded-[5px] transition-opacity ${
                      index === currentSlide
                        ? 'w-[18.415px] bg-white opacity-100'
                        : 'w-[4.604px] bg-white opacity-20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

