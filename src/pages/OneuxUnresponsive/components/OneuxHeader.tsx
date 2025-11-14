import imgRectangle from '../assets/8cd2e290fb0a2555c3380c1e942eec96d32ca637.png'
import imgAvatarM1Full from '../assets/0ca13429f6931a08d0decdde0cc72cfcd7a9e32b.png'
import imgImgReward from '../assets/9e533011365393d49d7691826a8ab469d8d1ea0e.png'
import img1 from '../assets/3b2116a79434f01ad424126895a015b49e09128b.png'
import img2 from '../assets/45d4bd0d6984129eb2c6db11bd6167cc4d99719f.png'
import img3 from '../assets/11e35f827dbad97e67610ec314a1f3ac90516e14.svg'
import img4 from '../assets/ebd7cbae41aa9df5cc313fcbfbf6089c703f2baf.svg'
import img5 from '../assets/4360f318ec953ba3650fd8a1d852580fdc11fe08.svg'
import img6 from '../assets/311fe442e5f2cc1fc4aa3233a58cb7269c5d0abc.svg'
import img7 from '../assets/b8247ff7f8f8913717959ef9977c1ab1de688cb3.svg'
import imgVector from '../assets/7eb34409ee9eea142ab6889cd7d8973a8720ecb2.svg'
import img from '../assets/c8f583f00b2420395d281cfb64e8b5c6d9aed89d.svg'

export function OneuxHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0px_12px_24px_0px_rgba(0,0,0,0.02)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <div className="flex h-10 w-[58px] shrink-0 items-center overflow-hidden">
            <div className="relative h-full w-[35.662px]">
              <img alt="Amild Logo" className="h-full w-full object-cover" src={imgRectangle} />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-2 lg:flex lg:gap-[15px]">
            <button className="flex items-center gap-[5px] rounded-[10px] px-[10px] py-[10px] transition-colors hover:bg-neutral-100">
              <img alt="" className="h-5 w-5" src={img4} />
              <span className="font-medium leading-5 text-[#6b6969] text-sm">Home</span>
            </button>
            <button className="flex items-center gap-[5px] rounded-[10px] px-[10px] py-[10px] transition-colors hover:bg-neutral-100">
              <img alt="" className="h-5 w-5" src={img5} />
              <span className="font-medium leading-5 text-[#6b6969] text-sm">Inspirasi</span>
            </button>
            <button className="flex items-center gap-[5px] rounded-[10px] px-[10px] py-[10px] transition-colors hover:bg-neutral-100">
              <div className="relative h-5 w-5 overflow-hidden">
                <img alt="" className="h-full w-full" src={img6} />
                <div className="absolute left-1/2 top-1/2 h-[16.675px] w-[14.158px] -translate-x-1/2 -translate-y-1/2">
                  <img alt="" className="h-full w-full" src={img7} />
                </div>
              </div>
              <span className="font-medium leading-5 text-[#6b6969] text-sm">Ajak Teman</span>
            </button>
            <button className="flex h-10 items-center gap-[5px] rounded-[10px] px-[10px] py-[10px] transition-colors hover:bg-neutral-100">
              <div className="relative h-5 w-5 shrink-0">
                <img alt="" className="h-full w-full" src={img} />
              </div>
              <span className="font-medium leading-5 text-[#6b6969] text-sm">Menu</span>
              <div className="h-[7.7px] w-[13.2px] shrink-0">
                <img alt="" className="h-full w-full" src={imgVector} />
              </div>
            </button>
          </nav>

          {/* User Info */}
          <div className="flex items-center gap-2 lg:gap-[10px]">
            <div className="hidden items-center gap-[5px] lg:flex">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-white">
                <img alt="User Avatar" className="h-full w-full object-cover" src={imgAvatarM1Full} />
              </div>
              <p className="text-sm leading-5 text-[#2c2a29]">
                <span className="font-medium">Hi,</span> <span className="font-bold">Rangga!</span>
              </p>
            </div>
            <div className="hidden h-6 w-[1px] rotate-90 bg-neutral-200 lg:block" />
            <div className="flex items-center gap-[5px]">
              <div className="flex items-center gap-[5px] rounded-[10px] bg-white px-[5px] py-[5px]">
                <div className="relative h-5 w-5 shrink-0">
                  <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 shadow-[0px_1.389px_5.556px_0px_rgba(206,0,0,0.6)]">
                    <img alt="" className="h-full w-full" src={imgImgReward} />
                  </div>
                </div>
                <p className="font-bold leading-5 text-[#2c2a29] text-sm">5.250 Points</p>
              </div>
              <div className="flex items-center gap-[5px] rounded-[10px] bg-white pl-[5px] pr-[10px] py-[5px]">
                <div className="relative h-5 w-5 shrink-0 overflow-hidden">
                  <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute inset-[-10%]">
                      <div className="absolute inset-[-10%]" style={{ maskImage: `url('${img1}')` }}>
                        <img alt="" className="h-full w-full object-cover" src={img2} />
                      </div>
                      <div
                        className="absolute inset-[-10%] bg-[#cadfff] mix-blend-color"
                        style={{ maskImage: `url('${img1}')` }}
                      />
                    </div>
                  </div>
                </div>
                <p className="font-bold leading-5 text-[#2c2a29] text-sm">Silver</p>
              </div>
              <button className="flex items-center rounded-[10px] bg-neutral-100 p-[5px] transition-colors hover:bg-neutral-200">
                <div className="relative h-5 w-5 shrink-0 overflow-hidden">
                  <div className="absolute inset-[37.5%_20.83%_33.33%_20.83%]">
                    <img alt="" className="h-full w-full" src={img3} />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

