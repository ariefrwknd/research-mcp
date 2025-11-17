// Asset imports
import imgTshirt1 from '../../../assets/f69e72cb879da73e236b12516e602ae616eb9d9a.png'
import imgTumblr1 from '../../../assets/55319ca4b07e53c50c75e9d0f19def11a35da7ca.png'
import imgSpeaker1 from '../../../assets/945636eedc9f7550cfe6bc6053d9c1be7632f12d.png'
import imgScooter1 from '../../../assets/c4fdb6f8c0528cd2110bf9d49064bfc586d8835a.png'
import imgBrTitle from '../../../assets/ced64201f3402aa908979092e22d460e88fea6fc.png'
import imgWave from '../../../assets/1ae6363eb5a71d567d39d90366cb150525821c1d.svg'
import imgLayer1 from '../../../assets/4d20091dc1f5205c5fbd5b0f97306a2021944eea.svg'
import imgLayer2 from '../../../assets/8fe39a87678125aca1059bd0eb833f44d17538f9.svg'
import imgArrowRight from '../../../assets/354ace9cd278f29ef121bbe4b01edaa7ab032d84.svg'

type HeroProps = {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <div className={`relative w-full ${className || ''}`}>
      {/* Main Hero Container */}
      <div className="relative h-[520px] w-full overflow-hidden rounded-[15px] bg-[#cd161c] sm:h-[600px] lg:h-[520px]">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff6f7] via-[#ffeeef] via-[57.977%] to-[#ffbec0] to-[97.06%]" />

        {/* Wave Decoration at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 hidden overflow-hidden lg:block">
          <div className="flex h-[383.266px] w-full items-center justify-center">
            <div className="rotate-180 scale-y-[-100%]">
              <img alt="" className="h-full w-full object-cover" src={imgWave} />
            </div>
          </div>
        </div>

        {/* Guitar Man Decorations - Desktop Only */}
        <div className="absolute left-[147px] top-[38px] hidden lg:contents">
          {/* Background Guitar Man (semi-transparent) */}
          <div className="absolute right-[593.81px] top-[calc(50%+51.94px)] -translate-y-1/2">
            <div className="flex h-[547.885px] w-[669.186px] items-center justify-center">
              <div className="rotate-180 scale-y-[-100%] opacity-10">
                <div className="relative h-full w-full overflow-hidden">
                  <div className="absolute inset-0">
                    <img alt="" className="h-full w-full object-contain" src={imgLayer1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Foreground Guitar Man */}
          <div className="absolute bottom-[0.12px] right-[536.3px]">
            <div className="flex h-[426.317px] w-[520.703px] items-center justify-center">
              <div className="rotate-180 scale-y-[-100%]">
                <div className="relative h-full w-full overflow-hidden">
                  <div className="absolute inset-0">
                    <img alt="" className="h-full w-full object-contain" src={imgLayer2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <button
          type="button"
          className="absolute left-[15px] top-[15px] z-10 flex items-center gap-[5px] rounded-[10px] bg-white p-[10px] transition-colors hover:bg-neutral-50"
        >
          <div className="relative h-5 w-5 overflow-hidden">
            <div className="absolute inset-[25%_20.83%_25%_20.83%]">
              <img alt="Arrow" className="h-full w-full" src={imgArrowRight} />
            </div>
          </div>
          <span className="font-bold leading-normal tracking-[0.25px] text-[#2c2a29] text-xs">
            Kembali
          </span>
        </button>

        {/* Title Image - Mobile/Tablet */}
        <div className="absolute left-[30px] top-[68px] z-10 h-[120px] w-[240px] sm:left-[30px] sm:top-[68px] sm:h-[150px] sm:w-[300px] lg:hidden">
          <div className="absolute left-1/2 top-1/2 h-full w-[352.941px] -translate-x-1/2 -translate-y-1/2">
            <img
              alt="GO AHEAD CHALLENGE"
              className="h-full w-full object-contain"
              src={imgBrTitle}
            />
          </div>
        </div>

        {/* Title Image - Desktop */}
        <div className="absolute left-[30px] top-[68px] z-10 hidden h-[200px] w-[360px] lg:block">
          <div className="absolute left-1/2 top-1/2 h-full w-[352.941px] -translate-x-1/2 -translate-y-1/2">
            <img
              alt="GO AHEAD CHALLENGE"
              className="h-full w-full object-contain"
              src={imgBrTitle}
            />
          </div>
        </div>

        {/* Campaign Introduction Card */}
        <div className="absolute left-1/2 top-[55%] z-20 w-[90%] max-w-[614px] -translate-x-1/2 -translate-y-1/2 rounded-[15px] bg-[#ed1c24] px-4 py-6 shadow-lg sm:left-1/2 sm:top-1/2 sm:px-6 sm:py-8 lg:left-auto lg:right-[15px] lg:top-1/2 lg:w-[614px] lg:translate-x-0 lg:px-[25px] lg:py-[25px]">
          {/* Overlay gradient */}
          <div className="absolute inset-0 rounded-[15px] bg-gradient-to-r from-black/50 to-black/50" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-6">
            {/* Text Content */}
            <div className="flex w-full flex-col gap-4 text-white sm:gap-[15px]">
              {/* Title */}
              <h1 className="font-bold leading-tight text-white text-2xl sm:text-3xl lg:text-[32px]">
                <p className="mb-0">Yang di Nanti-Nanti, Akhirnya</p>
                <p>Balik Lagi!</p>
              </h1>

              {/* Description */}
              <p className="font-medium leading-[25px] text-white text-sm sm:text-base lg:text-base">
                Eksplor serunya kegiatan seniman dan musisi favorit lo di Go Ahead Challenge. Tonton
                semua konten dan unlock tantangan yang BUKAN MAIN buat dapetin merch eksklusif Go
                Ahead Challenge!! Kalau lo beruntung, lo juga bisa bawa pulang scooter kolaborasi
                Naufal Abshar.
              </p>
            </div>

            {/* Merchandise Images */}
            <div className="relative h-[140px] w-full overflow-hidden sm:h-[160px] lg:h-[192px]">
              {/* Merchandise Items */}
              <div className="relative mx-auto h-full w-full max-w-[563px]">
                {/* Scooter */}
                <div className="absolute left-0 top-0 z-10 h-[100px] w-[110px] sm:h-[120px] sm:w-[140px] lg:left-[109.5px] lg:h-[204.815px] lg:w-[204.815px]">
                  <img
                    alt="Scooter"
                    className="h-full w-full object-contain"
                    src={imgScooter1}
                  />
                </div>

                {/* T-Shirt */}
                <div className="absolute left-[45%] top-[12px] z-20 h-[70px] w-[80px] sm:left-[45%] sm:h-[90px] sm:w-[100px] lg:left-[273.5px] lg:h-[141.367px] lg:w-[141.367px]">
                  <img
                    alt="T-Shirt"
                    className="h-full w-full object-contain"
                    src={imgTshirt1}
                  />
                </div>

                {/* Tumbler */}
                <div className="absolute left-[55%] top-[50px] z-20 h-[45px] w-[50px] sm:left-[55%] sm:top-[60px] sm:h-[55px] sm:w-[60px] lg:left-[328.5px] lg:top-[82.57px] lg:h-[85.711px] lg:w-[85.711px]">
                  <img
                    alt="Tumbler"
                    className="h-full w-full object-contain"
                    src={imgTumblr1}
                  />
                </div>

                {/* Speaker */}
                <div className="absolute left-[62%] top-[45px] z-20 h-[50px] w-[55px] sm:left-[62%] sm:top-[55px] sm:h-[60px] sm:w-[65px] lg:left-[371.5px] lg:top-[74.3px] lg:h-[96.842px] lg:w-[96.842px]">
                  <img
                    alt="Speaker"
                    className="h-full w-full object-contain"
                    src={imgSpeaker1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

