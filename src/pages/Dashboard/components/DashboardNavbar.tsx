import { useCallback } from 'react'
import type { MouseEvent } from 'react'

export type DashboardNavLink = {
  href: string
  label: string
}

export type DashboardNavbarProps = {
  logoSrc: string
  logoAlt?: string
  links: DashboardNavLink[]
  avatarSrc: string
  avatarAlt?: string
  onNavigate?: (href: string) => void
}

const homeIconPath =
  'M2.25 11.25 11.47 2.28a.75.75 0 0 1 1.06 0l9.22 8.97a.75.75 0 0 1-1.05 1.07l-.45-.44v8.12a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-5.5h-3.5v5.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75v-8.12l-.45.44a.75.75 0 0 1-1.05-1.07Z'

const bellIconPath =
  'M12 2.25a5.25 5.25 0 0 1 5.25 5.25v2.21c0 .62.18 1.22.53 1.73l.68 1.01A2.25 2.25 0 0 1 16.57 15H7.43a2.25 2.25 0 0 1-1.89-3.55l.68-1.01c.34-.51.53-1.11.53-1.73V7.5A5.25 5.25 0 0 1 12 2.25Zm0 19.5a3 3 0 0 1-2.95-2.47.75.75 0 0 1 .74-.88h4.42a.75.75 0 0 1 .74.88A3 3 0 0 1 12 21.75Z'

export function DashboardNavbar({
  logoSrc,
  logoAlt = 'Brand logo',
  links,
  avatarSrc,
  avatarAlt = 'Profile avatar',
  onNavigate,
}: DashboardNavbarProps) {
  const handleNavigate = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!onNavigate) {
        return
      }

      event.preventDefault()
      onNavigate(href)
    },
    [onNavigate],
  )

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="h-[38px] w-[43px] object-contain"
            draggable={false}
          />
        </div>

        <nav
          aria-label="Dashboard navigation"
          className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-1 py-1 shadow-sm"
        >
          <span className="flex h-10 w-14 items-center justify-center">
            <span className="flex size-9 items-center justify-center rounded-full bg-zinc-950 text-white">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="size-5"
                focusable="false"
                fill="currentColor"
              >
                <path d={homeIconPath} />
              </svg>
            </span>
          </span>

          <ul className="flex items-center gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => handleNavigate(event, link.href)}
                  className="rounded-full px-4 py-2 text-sm font-medium tracking-[-0.01em] text-zinc-900 transition-colors hover:bg-zinc-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="flex size-10 items-center justify-center rounded-full border border-zinc-900 text-zinc-900 transition-colors hover:bg-zinc-100"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="size-5" focusable="false" fill="currentColor">
              <path d={bellIconPath} />
            </svg>
          </button>
          <img
            src={avatarSrc}
            alt={avatarAlt}
            className="size-10 rounded-full border border-zinc-200 object-cover"
            draggable={false}
          />
        </div>
      </div>
    </header>
  )
}


