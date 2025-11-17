// Asset imports
import imgGhwBaruPath1 from '../../../assets/de6da516c8ccc122e555734f39af802bb0ef2e53.png'
import imgVector from '../../../assets/752391651cefd7f3fb5ba91dcc60e8265f3f6168.svg'

type FooterProps = {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const footerLinks = [
    'Syarat & Ketentuan',
    'Kebijakan Privasi',
    'Perihal Merokok',
    'Pengaturan Akun',
    'Bantuan',
    'Hubungi Kami',
    'Sitemap',
    'Pengaturan Kuki',
  ]

  return (
    <footer className={`w-full bg-neutral-50 ${className || ''}`}>
      {/* Top Section - Navigation Links */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 py-6 sm:gap-6 sm:px-6 lg:gap-8 lg:px-8">
        {footerLinks.map((link, index) => (
          <button
            key={index}
            type="button"
            className="font-bold leading-[20px] text-[#646464] text-xs sm:text-sm transition-colors hover:text-[#2c2a29]"
          >
            {link}
          </button>
        ))}
      </div>

      {/* Middle Section - Copyright */}
      <div className="bg-[#222222] px-4 py-2 sm:px-4 lg:px-4">
        <p className="mx-auto max-w-7xl text-center font-bold leading-[20px] text-white text-xs sm:text-sm">
          ©2022 Amild.id Website ini ditujukan untuk perokok dewasa berusia 18+ dan berdomisili di
          Indonesia.
        </p>
      </div>

      {/* Bottom Section - Health Warning (GHW) */}
      <div className="relative h-[56px] w-full overflow-hidden bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-full rotate-180 scale-y-[-100%]">
            <img alt="" className="h-full w-full object-cover" src={imgVector} />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Left - Health Warning Image */}
          <div className="relative h-[47.236px] w-[97.395px] shrink-0 overflow-hidden sm:h-[47.236px] sm:w-[97.395px]">
            <img
              alt="Health Warning"
              className="h-full w-full object-cover"
              src={imgGhwBaruPath1}
            />
          </div>

          {/* Center - Warning Text */}
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="font-extrabold leading-[15px] text-black text-[10px] sm:text-xs">
              <span className="block">PERHATIAN:</span>
              <span className="block">KARENA MEROKOK, SAYA TERKENA KANKER TENGGOROKAN.</span>
              <span className="block">LAYANAN BERHENTI MEROKOK (0800-177-6565)</span>
            </p>
          </div>

          {/* Right - 18+ Badge and Icons */}
          <div className="relative flex shrink-0 items-center gap-2">
            {/* 18+ Badge */}
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-black">
              <span className="font-bold leading-normal text-black text-xs">18+</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

