export function OneuxImage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-red-600 text-2xl font-bold text-white">
              A
            </div>
            <nav className="hidden items-center gap-6 md:flex">
              <a href="/" className="text-sm font-medium text-neutral-900 hover:text-red-600">
                Home
              </a>
              <a href="/inspirasi" className="text-sm font-medium text-neutral-900 hover:text-red-600">
                Inspirasi
              </a>
              <a href="/ajak-teman" className="text-sm font-medium text-neutral-900 hover:text-red-600">
                Ajak Teman
              </a>
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-medium text-neutral-900 hover:text-red-600"
                >
                  Menu
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-4 md:flex">
              <span className="text-sm text-neutral-700">Hi, Rangga!</span>
              <div className="flex items-center gap-1 rounded bg-red-50 px-3 py-1.5">
                <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h4a2 2 0 012 2v6a2 2 0 01-2 2h-4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold text-red-600">5.250 Points</span>
              </div>
              <div className="flex items-center gap-1 rounded bg-neutral-100 px-3 py-1.5">
                <svg className="h-4 w-4 text-neutral-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h4a2 2 0 012 2v6a2 2 0 01-2 2h-4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold text-neutral-700">Silver</span>
                <svg className="h-4 w-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {/* Mobile menu button */}
            <button
              type="button"
              className="rounded p-2 text-neutral-600 hover:bg-neutral-100 md:hidden"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Graphic */}
          <div className="relative flex-shrink-0 bg-red-600 lg:w-1/2">
            <div className="relative h-[400px] w-full sm:h-[500px] lg:h-screen lg:max-h-[calc(100vh-80px)]">
              {/* Back Button */}
              <button
                type="button"
                className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Kembali</span>
              </button>

              {/* Musical Instruments Graphic */}
              <div className="relative h-full w-full overflow-hidden">
                {/* Acoustic Guitar */}
                <div className="absolute bottom-[15%] left-[20%] opacity-70">
                  <svg className="h-24 w-24 text-white sm:h-32 sm:w-32 lg:h-40 lg:w-40" viewBox="0 0 100 100">
                    <path
                      d="M30 80 Q30 20 50 20 Q70 20 70 80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="50" cy="80" r="8" fill="currentColor" opacity="0.5" />
                    <rect x="45" y="20" width="10" height="15" fill="currentColor" opacity="0.3" />
                  </svg>
                </div>

                {/* Electric Guitar (V-shaped) */}
                <div className="absolute right-[25%] top-[20%] opacity-70">
                  <svg className="h-32 w-32 text-white sm:h-40 sm:w-40 lg:h-48 lg:w-48" viewBox="0 0 100 100">
                    <path
                      d="M50 10 L20 90 L50 70 L80 90 Z"
                      fill="currentColor"
                      opacity="0.6"
                      style={{
                        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
                      }}
                    />
                    <rect x="47" y="10" width="6" height="40" fill="currentColor" opacity="0.8" />
                  </svg>
                </div>

                {/* Drum Kit Elements */}
                <div className="absolute left-[10%] top-[30%] opacity-60">
                  <svg className="h-20 w-20 text-white sm:h-28 sm:w-28 lg:h-36 lg:w-36" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.3" />
                  </svg>
                </div>

                <div className="absolute right-[15%] bottom-[25%] opacity-60">
                  <svg className="h-28 w-28 text-white sm:h-36 sm:w-36 lg:h-44 lg:w-44" viewBox="0 0 100 100">
                    <ellipse cx="50" cy="50" rx="30" ry="20" fill="none" stroke="currentColor" strokeWidth="2" />
                    <ellipse cx="50" cy="50" rx="20" ry="12" fill="currentColor" opacity="0.3" />
                  </svg>
                </div>

                {/* Amplifier */}
                <div className="absolute left-[5%] top-[10%] opacity-70">
                  <svg className="h-24 w-24 text-white sm:h-32 sm:w-32 lg:h-40 lg:w-40" viewBox="0 0 100 100">
                    <rect x="20" y="30" width="60" height="40" fill="currentColor" opacity="0.5" />
                    <rect x="25" y="35" width="50" height="30" fill="currentColor" opacity="0.8" />
                    <circle cx="40" cy="50" r="3" fill="currentColor" />
                    <circle cx="50" cy="50" r="3" fill="currentColor" />
                    <circle cx="60" cy="50" r="3" fill="currentColor" />
                  </svg>
                </div>

                {/* Halftone pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Event Listing */}
          <div className="flex-1 bg-white p-6 sm:p-8 lg:p-12">
            <div className="mx-auto max-w-2xl">
              {/* Section Title */}
              <h1 className="mb-6 text-3xl font-bold text-neutral-900 sm:text-4xl">All Event</h1>

              {/* Search and Filter Bar */}
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Masukkan Lokasi"
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3 pr-12 text-sm focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-20"
                  />
                  <div className="absolute right-3 top-1/2 flex -translate-y-1/2 gap-2">
                    <button
                      type="button"
                      className="text-red-600 transition-colors hover:text-red-700"
                      aria-label="Search"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="text-red-600 transition-colors hover:text-red-700"
                      aria-label="Filter"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Time Filters */}
              <div className="mb-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
                >
                  Next Closest
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  This Week
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  This Month
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  This Year
                </button>
              </div>

              {/* Featured Event */}
              <div className="mb-8 rounded-lg border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-col lg:flex-row">
                  {/* Event Details */}
                  <div className="flex-1 p-6">
                    <div className="mb-4 text-sm font-medium text-neutral-600">
                      Min, 10 Agustus 2025 · 12.00 WIB
                    </div>
                    <h2 className="mb-4 text-2xl font-bold text-neutral-900">
                      Soundstream, Cara Nonton Konser Baru dengan Konsep Seru!
                    </h2>
                    <div className="mb-4 text-sm text-neutral-700">Carnaval Ancol, Jakarta.</div>

                    <div className="mb-4 flex flex-wrap gap-4">
                      <div>
                        <div className="mb-1 text-xs font-medium text-neutral-500">Jarak dari Lokasi Lo</div>
                        <div className="text-base font-semibold text-blue-600">2.5 Km</div>
                      </div>
                      <div>
                        <div className="mb-1 text-xs font-medium text-neutral-500">Estimasi Sampai</div>
                        <div className="text-base font-semibold text-red-600">15 Menit (Mobil)</div>
                      </div>
                    </div>
                  </div>

                  {/* Event Poster */}
                  <div className="relative w-full overflow-hidden rounded-b-lg lg:rounded-b-none lg:rounded-r-lg lg:w-80">
                    <div className="aspect-[3/4] w-full bg-gradient-to-br from-neutral-100 to-neutral-200">
                      {/* Placeholder for poster image */}
                      <div className="flex h-full flex-col justify-between p-6">
                        <div className="text-center">
                          <div className="mb-2 text-3xl font-bold text-neutral-900">SOUND STREAM</div>
                          <div className="mb-4 text-sm text-neutral-700">Vira Talisa · Iga Massardi · Sal Priadi · Hondo</div>
                        </div>
                        <div className="space-y-2 text-center text-xs text-neutral-600">
                          <div>Sabtu 1 Agustus 2020 Jam 21:00 WIB</div>
                          <div className="font-semibold">Tiket: Rp. 45.000</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex h-6 w-6 items-center justify-center rounded bg-neutral-800 text-xs font-bold text-white">
                            18+
                          </div>
                          <div className="flex gap-2">
                            <div className="h-4 w-4 rounded bg-neutral-300" />
                            <div className="h-4 w-4 rounded bg-neutral-300" />
                            <div className="h-4 w-4 rounded bg-neutral-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Footer Links */}
          <div className="mb-6 flex flex-wrap gap-4 text-sm">
            <a href="/terms" className="text-neutral-600 hover:text-red-600">
              Syarat & Ketentuan
            </a>
            <a href="/privacy" className="text-neutral-600 hover:text-red-600">
              Kebijakan Privasi
            </a>
            <a href="/smoking" className="text-neutral-600 hover:text-red-600">
              Perihal Merokok
            </a>
            <a href="/settings" className="text-neutral-600 hover:text-red-600">
              Pengaturan Akun
            </a>
            <a href="/help" className="text-neutral-600 hover:text-red-600">
              Bantuan
            </a>
            <a href="/cookies" className="text-neutral-600 hover:text-red-600">
              Pemberitahuan Kuki
            </a>
            <a href="/sitemap" className="text-neutral-600 hover:text-red-600">
              Sitemap
            </a>
          </div>

          {/* Copyright */}
          <div className="mb-6 text-xs text-neutral-500">
            ©2025 Amild.id Website ini ditujukan untuk perokok dewasa berusia 21+ dan berdomisili di Indonesia.
          </div>

          {/* Warning Section */}
          <div className="flex flex-col gap-4 rounded-lg bg-neutral-50 p-6 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-full bg-neutral-300" />
            </div>
            <div className="flex-1 text-xs leading-relaxed text-neutral-900">
              <p className="mb-2 font-bold uppercase">
                PERHATIAN: KARENA MEROKOK, SAYA TERKENA KANKER TENGGOROKAN. LAYANAN BERHENTI MEROKOK (0800-177-6565)
                DILARANG MENJUAL DAN MEMBERI KEPADA ORANG DI BAWAH USIA 21 TAHUN DAN PEREMPUAN HAMIL
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-600 text-2xl font-bold text-white">
                21+
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

