import imgEllipse from '../assets/af14a94aae6afa2dd8d6e1ee92cdfd25c8ab6129.svg'
import imgAssetImg from '../assets/3d797c371631ce8060ba2cabcb6d1dd53093f3ee.png'

export function OneuxFooter() {
  return (
    <footer className="mt-auto">
      {/* Footer Links */}
      <div className="border-t border-neutral-200 bg-white py-6">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-bold leading-4 text-[#6b6a69] sm:gap-6 md:justify-start">
            <a href="#" className="transition-colors hover:text-[#ed1c24]">
              Syarat & Ketentuan
            </a>
            <a href="#" className="transition-colors hover:text-[#ed1c24]">
              Kebijakan Privasi
            </a>
            <a href="#" className="transition-colors hover:text-[#ed1c24]">
              Perihal Merokok
            </a>
            <a href="#" className="transition-colors hover:text-[#ed1c24]">
              Pengaturan Akun
            </a>
            <a href="#" className="transition-colors hover:text-[#ed1c24]">
              Bantuan
            </a>
            <a href="#" className="transition-colors hover:text-[#ed1c24]">
              Pemberitahuan Kuki
            </a>
            <a href="#" className="transition-colors hover:text-[#ed1c24]">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#2c2a2a] py-3">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold leading-4 text-white">
            ©2025 Amild.id Website ini ditujukan untuk perokok dewasa berusia 21+ dan berdomisili di Indonesia.
          </p>
        </div>
      </div>

      {/* Health Warning */}
      <div className="border-t border-[#e4e4e4] bg-white py-4">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
            <div className="relative h-[46px] w-[82px] shrink-0">
              <img alt="" className="h-full w-full object-cover" src={imgAssetImg} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="mb-2 font-semibold leading-[1.5] text-[#010101] text-xs tracking-[0.12px]">PERHATIAN:</p>
              <p className="mb-1 font-semibold leading-[1.5] text-[#010101] text-xs tracking-[0.12px]">
                KARENA MEROKOK, SAYA TERKENA KANKER TENGGOROKAN. LAYANAN BERHENTI MEROKOK (0800-177-6565)
              </p>
              <p className="font-semibold leading-[1.5] text-[#010101] text-xs tracking-[0.12px]">
                DILARANG MENJUAL DAN MEMBERI KEPADA ORANG DI BAWAH USIA 21 TAHUN DAN PEREMPUAN HAMIL
              </p>
            </div>
            <div className="relative h-[46px] w-[46px] shrink-0">
              <img alt="21+" className="h-full w-full" src={imgEllipse} />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold leading-[1.5] text-[#010101] text-lg tracking-[0.18px]">
                21<span className="font-normal">+</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

