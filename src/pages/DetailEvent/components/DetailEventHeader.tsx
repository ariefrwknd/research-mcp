import imgRectangle1 from '../assets/8cd2e290fb0a2555c3380c1e942eec96d32ca637.png'
import imgAvatarM1Full from '../assets/0ca13429f6931a08d0decdde0cc72cfcd7a9e32b.png'
import imgImgReward from '../assets/9e533011365393d49d7691826a8ab469d8d1ea0e.png'
import img1 from '../assets/3b2116a79434f01ad424126895a015b49e09128b.png'
import img2 from '../assets/45d4bd0d6984129eb2c6db11bd6167cc4d99719f.png'
import img4 from '../assets/11e35f827dbad97e67610ec314a1f3ac90516e14.svg'
import img5 from '../assets/4360f318ec953ba3650fd8a1d852580fdc11fe08.svg'
import img6 from '../assets/311fe442e5f2cc1fc4aa3233a58cb7269c5d0abc.svg'
import img7 from '../assets/b8247ff7f8f8913717959ef9977c1ab1de688cb3.svg'
import img from '../assets/c8f583f00b2420395d281cfb64e8b5c6d9aed89d.svg'
import imgVector from '../assets/7eb34409ee9eea142ab6889cd7d8973a8720ecb2.svg'
import img3 from '../assets/ebd7cbae41aa9df5cc313fcbfbf6089c703f2baf.svg'

export function DetailEventHeader() {
  return (
    <header className="sticky top-0 z-50 h-[72px] w-full bg-white shadow-[0px_12px_24px_0px_rgba(0,0,0,0.02)]">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 md:px-6 lg:px-[15px]">
        {/* Left Side - Logo and Navigation */}
        <div className="flex items-center gap-4 lg:gap-[73px]">
          {/* Logo */}
          <div className="flex h-[40px] w-[58px] items-center justify-center overflow-hidden">
            <div className="relative h-[39.22px] w-[35.66px]">
              <img
                alt="Amild Logo"
                className="absolute inset-0 h-full w-full object-cover"
                src={imgRectangle1}
              />
            </div>
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden items-center gap-[15px] lg:flex">
            <button
              type="button"
              className="flex items-center gap-[5px] rounded-[10px] px-[10px] py-[10px] text-sm font-medium text-[#6b6969] transition-colors hover:bg-neutral-50"
            >
              <img alt="Home Icon" className="h-5 w-5" src={img4} />
              <span className="leading-[20px]">Home</span>
            </button>
            
            <button
              type="button"
              className="flex items-center gap-[5px] rounded-[10px] px-[10px] py-[10px] text-sm font-medium text-[#6b6969] transition-colors hover:bg-neutral-50"
            >
              <img alt="Inspirasi Icon" className="h-5 w-5" src={img5} />
              <span className="leading-[20px]">Inspirasi</span>
            </button>
            
            <button
              type="button"
              className="flex items-center gap-[5px] rounded-[10px] px-[10px] py-[10px] text-sm font-medium text-[#6b6969] transition-colors hover:bg-neutral-50"
            >
              <div className="relative h-5 w-5">
                <img alt="Ajak Teman Icon" className="h-5 w-5" src={img6} />
                <img
                  alt=""
                  className="absolute left-1/2 top-1/2 h-[16.675px] w-[14.158px] -translate-x-1/2 -translate-y-1/2"
                  src={img7}
                />
              </div>
              <span className="leading-[20px]">Ajak Teman</span>
            </button>
            
            <button
              type="button"
              className="flex items-center gap-[5px] rounded-[10px] px-[10px] py-[10px] text-sm font-medium text-[#6b6969] transition-colors hover:bg-neutral-50"
            >
              <img alt="Menu Icon" className="h-5 w-5" src={img} />
              <span className="leading-[20px]">Menu</span>
              <img alt="Arrow Down" className="h-[13.2px] w-[13.2px]" src={imgVector} />
            </button>
          </nav>
        </div>
        
        {/* Right Side - User Profile */}
        <div className="hidden items-center gap-[15px] lg:flex">
          {/* User Pic & Nick Name */}
          <div className="flex items-center gap-[5px]">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-white">
              <img
                alt="User Avatar"
                className="absolute left-1/2 top-1/2 h-[145.125px] w-[67.5px] -translate-x-1/2 -translate-y-1/2 object-cover"
                src={imgAvatarM1Full}
              />
            </div>
            <p className="text-sm leading-normal text-[#2c2a29]">
              <span className="font-medium">Hi,</span>{' '}
              <span className="font-bold">Rangga!</span>
            </p>
          </div>
          
          {/* Divider */}
          <div className="h-6 w-px rotate-90 bg-neutral-200" />
          
          {/* Current EXP */}
          <div className="flex items-center gap-[5px] rounded-[10px] bg-white px-[5px] py-[5px]">
            <div className="relative h-5 w-5 shrink-0">
              <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 shadow-[0px_1.389px_5.556px_0px_rgba(206,0,0,0.6)]">
                <img
                  alt="Reward Icon"
                  className="absolute left-[7.14%] top-[7.14%] h-[85.71%] w-[85.71%]"
                  src={imgImgReward}
                />
              </div>
            </div>
            <p className="text-sm font-bold leading-[20px] text-[#2c2a29]">5.250 Points</p>
          </div>
          
          {/* Current Tier */}
          <div className="flex items-center gap-[5px] rounded-[10px] bg-white px-[5px] py-[5px] pl-[5px] pr-[10px]">
            <div className="relative h-5 w-5 shrink-0 overflow-hidden">
              <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                <div className="absolute inset-[-10%]">
                  <div
                    className="absolute inset-[-10%] mix-blend-color"
                    style={{
                      backgroundColor: '#cadfff',
                      maskImage: `url('${img1}')`,
                      maskSize: '48px 48px',
                      WebkitMaskImage: `url('${img1}')`,
                      WebkitMaskSize: '48px 48px',
                    }}
                  >
                    <img
                      alt="Tier"
                      className="absolute inset-0 h-full w-full object-cover"
                      src={img2}
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm font-bold leading-[20px] text-[#2c2a29]">Silver</p>
          </div>
          
          {/* Chevron */}
          <button
            type="button"
            className="flex items-center justify-center rounded-[10px] bg-neutral-100 p-[5px]"
          >
            <div className="relative h-5 w-5">
              <img alt="Chevron" className="h-full w-full" src={img3} />
            </div>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg p-2 text-neutral-700 lg:hidden"
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

