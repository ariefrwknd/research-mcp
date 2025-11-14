import clsx from 'clsx'

type ResponsiveNavbarProps = {
  className?: string
}

const NAV_LINKS: Array<{ label: string; path?: string; isActive?: boolean }> = [
  { label: 'Database', isActive: true, path:"/" },
  { label: 'Responsive', path: "/responsive" },
  { label: 'Visual Plan' },
  { label: 'Report' },
  { label: 'Administration' },
]

const AVATAR_SRC =
  'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFRUUiIC8+CiAgICA8L3N2Zz4='

export function ResponsiveNavbar({ className }: ResponsiveNavbarProps) {
  return (
    <header className={clsx('bg-white shadow-sm', className)}>
      <div className="relative mx-auto flex h-16 w-full max-w-[1440px] items-center px-6 md:px-8">
        <a className="flex items-center gap-3" href="/" aria-label="Go to home">
          <span className="inline-flex h-[38px] w-[43px] items-center justify-center rounded-md bg-neutral-900">
            <svg
              aria-hidden="true"
              className="h-8 w-8 text-white"
              viewBox="0 0 32 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 11.5 15.2 2a2 2 0 0 1 2.6 0L29 11.5a2 2 0 0 1 .7 1.5V24a2 2 0 0 1-2 2h-7.5a2 2 0 0 1-2-2v-5.5a1 1 0 0 0-1-1h-3.4a1 1 0 0 0-1 1V24a2 2 0 0 1-2 2H4.4A2.4 2.4 0 0 1 2 23.6V13a2 2 0 0 1 .7-1.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.24em] text-neutral-800 sm:inline">
            Summit
          </span>
        </a>

        <nav className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 transform xl:pointer-events-auto xl:flex xl:items-center">
          <div className="flex items-center rounded-full border border-neutral-200 bg-white p-1 shadow-[0_1px_4px_rgba(15,23,42,0.08)]">
            <button
              type="button"
              className="flex items-center gap-3 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors"
              aria-current="page"
              onClick={() => {
                  window.location.pathname = '/'
                }}
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m4 10 7.29-6.56a1 1 0 0 1 1.34 0L20 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.5 9v10a1 1 0 0 0 1 1H10v-4.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V20h3.5a1 1 0 0 0 1-1V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Database</span>
            </button>
            {NAV_LINKS.filter((link) => !link.isActive).map((link) => (
              <button
                key={link.label}
                type="button"
                className="rounded-full px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
                onClick={() => {
                  window.location.pathname = '/responsive'
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <button
            type="button"
            className="hidden size-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 transition-colors hover:bg-neutral-100 md:inline-flex"
            aria-label="View notifications"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 10a6 6 0 0 0-12 0c0 5-2 6-2 6h16s-2-1-2-6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.73 20a2 2 0 0 1-3.46 0"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <img
            alt="Daniel Scott"
            className="hidden size-10 rounded-full border border-neutral-200 object-cover md:block"
            src={AVATAR_SRC}
          />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 transition-colors hover:bg-neutral-100 xl:hidden"
            aria-label="Open navigation menu"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

