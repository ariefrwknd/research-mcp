// Asset imports
import imgTexture011 from '../../../assets/8b440187d7293602ab762b3f8f4e555c4b7640d8.png'
import imgAssetUbEdited1 from '../../../assets/6e50805427d2d97de5de285411eb859836589ecf.png'
import imgGroup from '../../../assets/d4c3d877bf190f1f9e9bf70070086f3ca5162464.svg'
import imgGroup1 from '../../../assets/91acf7846eaf13235bfe8bb4aca6f738058dba96.svg'
import imgGroup2 from '../../../assets/dbc7f493ecdadecb0d07bd38f6d6fed32a1b89fd.svg'
import imgGroup3 from '../../../assets/1fb51fb5c4cecc1e9f0697739a7402fe4bf82b8c.svg'
import imgGroup4 from '../../../assets/ae97d9f96db5c1a40c56b885a85c75a0778d5565.svg'
import imgGroup5 from '../../../assets/dfb57be3f6254c9c4c6e5700edbf603f30c652c3.svg'

type MgmProps = {
  className?: string
}

export function Mgm({ className }: MgmProps) {
  return (
    <div className={`relative w-full overflow-hidden rounded-[15px] border border-[#e6e6e6] ${className || ''}`}>
      {/* Background Container */}
      <div className="relative flex min-h-[196px] w-full flex-col gap-4 rounded-[10px] bg-white p-4 sm:h-[196px] sm:flex-row sm:items-center sm:gap-0 sm:p-0">
        {/* White Background */}
        <div className="absolute inset-0 rounded-[10px] bg-white" />

        {/* Texture Overlay */}
        <div className="absolute left-1/2 top-1/2 hidden h-[486px] w-full -translate-x-1/2 -translate-y-1/2 mix-blend-exclusion opacity-50 sm:block">
          <img
            alt=""
            className="h-full w-full object-cover"
            src={imgTexture011}
          />
        </div>

        {/* Decorative Batik Patterns - Hidden on mobile, visible on larger screens */}
        <div className="absolute hidden sm:block">
          {/* Top Right Batik 1 */}
          <div className="absolute right-[10.81px] top-[17px]">
            <div className="flex h-[56.742px] w-[75.979px] items-center justify-center">
              <div className="rotate-180 opacity-20">
                <img alt="" className="h-full w-full object-contain" src={imgGroup3} />
              </div>
            </div>
          </div>

          {/* Top Right Batik 2 */}
          <div className="absolute right-[10.81px] top-[89.82px]">
            <div className="flex h-[28.573px] w-[57.142px] items-center justify-center">
              <div className="rotate-180 opacity-20">
                <img alt="" className="h-full w-full object-contain" src={imgGroup4} />
              </div>
            </div>
          </div>

          {/* Top Right Small Batik */}
          <div className="absolute right-[45.66px] top-[117px]">
            <div className="flex h-[18.831px] w-[37.66px] items-center justify-center">
              <div className="rotate-180 opacity-20">
                <img alt="" className="h-full w-full object-contain" src={imgGroup5} />
              </div>
            </div>
          </div>

          {/* Left Side Batik Patterns */}
          <div className="absolute left-[86px] top-[146.85px]">
            <div className="flex h-[37.396px] w-[50.074px] items-center justify-center">
              <div className="rotate-180 opacity-20">
                <img alt="" className="h-full w-full object-contain" src={imgGroup1} />
              </div>
            </div>
          </div>

          <div className="absolute left-[45.65625px] top-[117px]">
            <div className="flex h-[18.831px] w-[37.66px] items-center justify-center">
              <div className="rotate-180 opacity-20">
                <img alt="" className="h-full w-full object-contain" src={imgGroup5} />
              </div>
            </div>
          </div>

          {/* Bottom Left Batik Patterns */}
          <div className="absolute bottom-[-78.377px] left-[253px]">
            <div className="h-[78.377px] w-[104.948px] opacity-25">
              <img alt="" className="h-full w-full object-contain" src={imgGroup} />
            </div>
          </div>

          <div className="absolute bottom-[-33.446px] left-[186px]">
            <div className="h-[33.446px] w-[66.888px] opacity-25">
              <img alt="" className="h-full w-full object-contain" src={imgGroup2} />
            </div>
          </div>
        </div>

        {/* Treasure Chest Illustration - Left Side */}
        <div className="relative z-10 h-[100px] w-[100px] shrink-0 sm:absolute sm:left-[47px] sm:top-[23px] sm:h-[149px] sm:w-[164px]">
          <div className="flex h-full w-full items-center justify-center">
            <div className="rotate-180 scale-y-[-100%]">
              <img
                alt="Treasure Chest"
                className="h-full w-full object-contain"
                src={imgAssetUbEdited1}
              />
            </div>
          </div>
        </div>

        {/* Content Section - Right Side */}
        <div className="relative z-10 flex flex-1 flex-col gap-4 sm:absolute sm:left-[253px] sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:gap-5">
          {/* Text Content */}
          <div className="flex min-w-0 flex-col gap-[5px]">
            {/* Heading */}
            <div className="flex items-center">
              <span className="font-bold leading-normal text-[#ed1c24] text-sm sm:text-base lg:text-lg">
                Extra
              </span>
              <span className="font-bold leading-normal text-[#ed1c24] text-sm sm:text-base lg:text-lg">
                {' '}
                Poin!!
              </span>
            </div>

            {/* Main Title */}
            <h2 className="min-w-0 font-bold leading-normal text-[#2c2a29] text-base sm:text-lg lg:text-[24px]">
              Ajak temen lo bergabung di Amild.id dan dapatkan EXTRA POIN & Exclusive Merchandise.
            </h2>

            {/* Description */}
            <p className="min-w-0 font-medium leading-[25px] text-[#413f3e] text-xs sm:text-sm lg:text-base">
              Pastikan temen lo perokok dewasa berusia 18+ dan belum pernah terdaftar di Amild.id
              ya!
            </p>
          </div>

          {/* CTA Button */}
          <button
            type="button"
            className="flex w-full md:w-fit items-center justify-center gap-[5px] rounded-[10px] bg-[#ed1c24] px-5 py-[10px] transition-opacity hover:opacity-90 sm:w-auto sm:px-5"
          >
            <span className="font-black capitalize leading-[20px] text-white text-sm">
              Undang Teman Sekarang!
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

