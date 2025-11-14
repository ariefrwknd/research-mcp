export function DetailEventFooter() {
  return (
    <footer className="relative mt-8 min-h-[106px] w-full bg-neutral-50">
      {/* Footer Links */}
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-start justify-center gap-4 px-4 pt-6 text-center text-xs font-bold leading-[20px] text-[#646464] sm:gap-6 sm:text-sm md:gap-8 md:px-6 lg:px-[144px]">
        <p className="shrink-0">Syarat & Ketentuan</p>
        <p className="shrink-0">Kebijakan Privasi</p>
        <p className="shrink-0">Perihal Merokok</p>
        <p className="shrink-0">Pengaturan Akun</p>
        <p className="shrink-0">Bantuan</p>
        <p className="shrink-0">Hubungi Kami</p>
        <p className="shrink-0">Sitemap</p>
        <p className="shrink-0">Pengaturan Kuki</p>
      </div>
      
      {/* Copyright */}
      <div className="mx-auto mt-2 w-full bg-[#222222] px-4 py-2 text-center text-xs font-bold leading-[18px] text-white sm:text-sm sm:leading-[20px]">
        <p>
          ©2022 Amild.id Website ini ditujukan untuk perokok dewasa berusia 18+ dan berdomisili di Indonesia.
        </p>
      </div>
    </footer>
  )
}

