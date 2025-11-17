const NAV_ITEMS = ['Home', 'Inspirasi', 'Ajak Temen', 'Menu']

const user = {
  name: 'Ranggal',
  points: '8.250',
}

export function AMildMissionsHeader() {
  return (
    <header className="flex flex-col gap-4 rounded-2xl bg-white/90 p-4 shadow-sm backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ed1c24] text-2xl font-black uppercase text-white">a</div>
          <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#2c2a29]">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                type="button"
                className="rounded-full border border-[#f0f0f0] px-4 py-2 transition-colors hover:border-[#ed1c24] hover:text-[#ed1c24]"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#2c2a29]">
          <div className="hidden items-center gap-2 rounded-full border border-[#f0f0f0] px-4 py-2 sm:flex">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffe4e6] text-[#ed1c24] font-bold">
              {user.name.at(0)}
            </div>
            <span>Hi, {user.name}</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#f0f0f0] px-4 py-2">
            <span className="text-[#ed1c24]">{user.points}</span>
            <span>Points</span>
          </div>
          <button
            type='button'
            className="rounded-full border border-[#ed1c24] px-4 py-2 text-[#ed1c24] transition-colors hover:bg-[#ed1c24] hover:text-white"
          >
            Share
          </button>
        </div>
      </div>
    </header>
  )
}

