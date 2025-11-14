import { useState } from 'react'
import imgAssetBg from '../assets/3b104ccea32c0acdfd16fbb471becb2c6a69e6ba.svg'
import imgAssetBg1 from '../assets/633bb6ffcda165c019315768b02bbca2b3157a82.png'
import imgAssetBanner from '../assets/857cc81bf3dc221645ec581290af57d877115bfe.svg'
import imgAssetBanner1 from '../assets/090bfa08a68c196c9b90630c7563a3b7d9033a32.png'
import imgAssetIcon from '../assets/1896e6042e3ea88a368c6b635712ba7db87aea1e.svg'
import imgAssetIcon1 from '../assets/fd508a988decafa303c60ea9a6bd0e36ec3efafc.svg'
import imgAssetIcon2 from '../assets/65aaca85117bedda1bfe43600f14a16f10e261d8.svg'
import imgAssetImg1 from '../assets/59c66406b06b59827332357c458ae8ded3cea094.svg'
import imgAssetImg2 from '../assets/4a38033892e189ca2597a994363748077d523037.png'

type TimeFilter = 'next-closest' | 'this-week' | 'this-month' | 'this-year'

export function OneuxMainContent() {
  const [activeFilter, setActiveFilter] = useState<TimeFilter>('next-closest')

  return (
    <main className="relative">
      {/* Background Image */}
      <div className="absolute inset-x-0 top-0 h-[543px] overflow-hidden">
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            maskImage: `url('${imgAssetBg}')`,
            WebkitMaskImage: `url('${imgAssetBg}')`,
            maskSize: '1440px 543px',
            WebkitMaskSize: '1440px 543px',
          }}
        >
          <img alt="" className="h-full w-full object-cover" src={imgAssetBg1} />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Left Section - Promotional Banner */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg sm:h-[400px] lg:h-[450px] lg:w-[681px]">
            <div
              className="absolute inset-0 h-full w-full"
              style={{
                maskImage: `url('${imgAssetBanner}')`,
                WebkitMaskImage: `url('${imgAssetBanner}')`,
                maskSize: '681px 450px',
                WebkitMaskSize: '681px 450px',
              }}
            >
              <img alt="Event Banner" className="h-full w-full object-cover" src={imgAssetBanner1} />
            </div>
            {/* Back Button */}
            <button className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-[#e6e6e6] bg-white px-4 py-3 transition-colors hover:bg-neutral-50">
              <img alt="" className="h-6 w-6" src={imgAssetIcon2} />
              <span className="font-semibold leading-4 text-[#2c2a2a] text-base">Kembali</span>
            </button>
          </div>

          {/* Right Section - Event Listings */}
          <div className="flex-1 rounded-[10px] border border-gray-200 bg-[#fbfbfb] p-4 sm:p-6">
            <h2 className="mb-4 font-medium leading-normal text-[#2c2a2a] text-xl">All Event</h2>

            {/* Search and Filter */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 gap-2">
                <input
                  type="text"
                  placeholder="Masukkan Lokasi"
                  className="flex-1 rounded-bl-[8px] rounded-tl-[8px] bg-[#f2f2f2] px-3 py-2.5 text-sm leading-4 text-[#7b7b7b] placeholder:text-[#7b7b7b] focus:outline-none focus:ring-2 focus:ring-[#ed1c24]"
                />
                <button className="flex items-center justify-center rounded-br-[8px] rounded-tr-[8px] bg-[#ed1c24] p-2.5 transition-colors hover:bg-[#d0171e]">
                  <img alt="Search" className="h-6 w-6" src={imgAssetIcon} />
                </button>
              </div>
              <button className="flex items-center justify-center rounded-lg bg-[#ed1c24] p-2.5 transition-colors hover:bg-[#d0171e]">
                <img alt="Filter" className="h-6 w-6" src={imgAssetIcon1} />
              </button>
            </div>

            {/* Time Filters */}
            <div className="mb-6 flex flex-wrap gap-2">
              {[
                { id: 'next-closest' as TimeFilter, label: 'Next Closest' },
                { id: 'this-week' as TimeFilter, label: 'This Week' },
                { id: 'this-month' as TimeFilter, label: 'This Month' },
                { id: 'this-year' as TimeFilter, label: 'This Year' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-[10px] border px-4 py-2 text-sm font-medium leading-5 transition-colors ${
                    activeFilter === filter.id
                      ? 'border-[#ed1c24] bg-[#ed1c24] text-white'
                      : 'border-[#e7e7e7] bg-white text-[#737171] hover:bg-neutral-50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Event Card */}
            <div className="space-y-4">
              <div className="flex flex-col gap-4 rounded-lg bg-white p-4 md:flex-row">
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <p className="font-bold leading-5 text-[#2c2a2a] text-[13px]">Min, 10 Agustus 2025</p>
                      <div className="h-0.5 w-0.5 rounded-full bg-[#2c2a2a]" />
                      <p className="font-bold leading-5 text-[#2c2a2a] text-sm">12.00 WIB</p>
                    </div>
                    <h3 className="mb-2 font-black leading-normal text-[#2c2a2a] text-xl">
                      "Soundstream, Cara Nonton Konser Baru dengan Konsep Seru!"
                    </h3>
                    <p className="font-normal leading-4 text-[#2c2a2a] text-sm">Carnaval Ancol, Jakarta</p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div>
                      <p className="mb-1 font-normal leading-3 text-[#2c2a2a] text-xs">Jarak dari Lokasi Lo</p>
                      <p className="font-extrabold leading-4 text-[#ed1c24] text-sm">2.5 Km</p>
                    </div>
                    <div>
                      <p className="mb-1 font-normal leading-3 text-[#2c2a2a] text-xs">Estimasi Sampai</p>
                      <p className="font-extrabold leading-4 text-[#ed1c24] text-sm">15 Menit (Mobil)</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg md:h-[134px] md:w-[208px]">
                  <div
                    className="absolute inset-0 h-full w-full"
                    style={{
                      maskImage: `url('${imgAssetImg1}')`,
                      WebkitMaskImage: `url('${imgAssetImg1}')`,
                      maskSize: '208px 134px',
                      WebkitMaskSize: '208px 134px',
                    }}
                  >
                    <img alt="Event" className="h-full w-full object-cover" src={imgAssetImg2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

