import { useState } from 'react'

import { LoyaltyTeaser } from './LoyaltyTeaser'

// Asset imports
import imgRectangle from '../../../assets/8cd2e290fb0a2555c3380c1e942eec96d32ca637.png'
import imgHome from '../../../assets/4360f318ec953ba3650fd8a1d852580fdc11fe08.svg'
import imgInspirasi from '../../../assets/7eb34409ee9eea142ab6889cd7d8973a8720ecb2.svg'
import imgAjakTeman from '../../../assets/311fe442e5f2cc1fc4aa3233a58cb7269c5d0abc.svg'
import imgAjakTemanOverlay from '../../../assets/b8247ff7f8f8913717959ef9977c1ab1de688cb3.svg'
import imgMenuLine from '../../../assets/ad89dbf8f0269c861f09cada152bf2925cdacb25.svg'
import imgMenuChevron from '../../../assets/9acf5b5de7b09a212089daf6c9b6753a4ab82b9d.svg'

type HeaderProps = {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] bg-white shadow-[0px_12px_24px_0px_rgba(0,0,0,0.02)] ${className || ''}`}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Section: Logo and Navigation */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Logo */}
          <div className="h-10 w-[58px] shrink-0 overflow-hidden">
            <div className="relative h-full w-[35.662px]">
              <img
                alt="Amild Logo"
                className="h-full w-full object-contain"
                src={imgRectangle}
              />
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden items-center gap-4 md:flex md:gap-[15px]">
            {/* Home */}
            <button
              type="button"
              className="flex items-center gap-[5px] rounded-[10px] p-[10px] transition-colors hover:bg-neutral-50"
            >
              <img alt="Home" className="h-5 w-5" src={imgHome} />
              <span className="font-medium leading-[20px] text-[#6b6969] text-sm">Home</span>
            </button>

            {/* Inspirasi */}
            <button
              type="button"
              className="flex items-center gap-[5px] rounded-[10px] p-[10px] transition-colors hover:bg-neutral-50"
            >
              <img alt="Inspirasi" className="h-5 w-5" src={imgInspirasi} />
              <span className="font-medium leading-[20px] text-[#6b6969] text-sm">Inspirasi</span>
            </button>

            {/* Ajak Teman */}
            <button
              type="button"
              className="flex items-center gap-[5px] rounded-[10px] p-[10px] transition-colors hover:bg-neutral-50"
            >
              <div className="relative h-5 w-5">
                <img alt="Ajak Teman" className="h-full w-full" src={imgAjakTeman} />
                <img
                  alt=""
                  className="absolute left-1/2 top-1/2 h-[16.675px] w-[14.158px] -translate-x-1/2 -translate-y-1/2"
                  src={imgAjakTemanOverlay}
                />
              </div>
              <span className="font-medium leading-[20px] text-[#6b6969] text-sm">Ajak Teman</span>
            </button>

            {/* Menu */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-[5px] rounded-[10px] p-[10px] transition-colors hover:bg-neutral-50"
            >
              <img alt="Menu" className="h-5 w-5" src={imgMenuLine} />
              <span className="font-medium leading-[20px] text-[#6b6969] text-sm">Menu</span>
              <img alt="" className="h-[7.7px] w-[13.2px]" src={imgMenuChevron} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-[5px] rounded-[10px] p-2 md:hidden"
            aria-label="Toggle menu"
          >
            <img alt="Menu" className="h-5 w-5" src={imgMenuLine} />
          </button>
        </div>

        {/* Right Section: User Info - Hidden on mobile, shown on tablet+ */}
        <div className="hidden md:flex">
          <LoyaltyTeaser />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-white shadow-lg md:hidden">
          <nav className="flex flex-col border-t border-neutral-200">
            <button
              type="button"
              className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3 text-left"
            >
              <img alt="Home" className="h-5 w-5" src={imgHome} />
              <span className="font-medium text-[#6b6969] text-sm">Home</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3 text-left"
            >
              <img alt="Inspirasi" className="h-5 w-5" src={imgInspirasi} />
              <span className="font-medium text-[#6b6969] text-sm">Inspirasi</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3 text-left"
            >
              <div className="relative h-5 w-5">
                <img alt="Ajak Teman" className="h-full w-full" src={imgAjakTeman} />
                <img
                  alt=""
                  className="absolute left-1/2 top-1/2 h-[16.675px] w-[14.158px] -translate-x-1/2 -translate-y-1/2"
                  src={imgAjakTemanOverlay}
                />
              </div>
              <span className="font-medium text-[#6b6969] text-sm">Ajak Teman</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

