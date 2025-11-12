import { useCallback } from 'react'
import type { MouseEvent } from 'react'

type NavigationLink = {
  href: string
  label: string
}

type PageSevenNavbarProps = {
  brandLabel: string
  links: NavigationLink[]
  onNavigate?: (href: string) => void
}

const musicNotePath =
  'M19.5 3.75a.75.75 0 0 0-.963-.72l-8.25 2.2a.75.75 0 0 0-.537.72V16.4a3.25 3.25 0 1 0 1.5 2.714V11.77l7.5-2.002v4.934a3.25 3.25 0 1 0 1.5 2.714V3.75Z'

export function PageSevenNavbar({ brandLabel, links, onNavigate }: PageSevenNavbarProps) {
  const handleClick = useCallback(
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
    <header className="border-b border-border bg-black/95">
      <div className="mx-auto flex h-[81px] w-full max-w-[1329px] items-center justify-between px-6 md:px-10">
        <div className="flex max-w-[220px] items-center gap-2">
          <span className="flex size-8 items-center justify-center text-primary">
            <svg aria-hidden viewBox="0 0 24 24" className="size-6" focusable="false" fill="currentColor">
              <path d={musicNotePath} />
            </svg>
          </span>
          <span className="text-base font-normal tracking-[-0.3px] text-white">{brandLabel}</span>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center text-text-secondary md:hidden"
          aria-label="Open navigation menu"
        >
          <svg aria-hidden viewBox="0 0 24 24" className="size-6" focusable="false" fill="currentColor">
            <path d="M4 7.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 7.25Zm0 4.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 4 12Zm.75 4a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H4.75Z" />
          </svg>
        </button>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href} className="min-w-max">
                <a
                  href={link.href}
                  onClick={(event) => handleClick(event, link.href)}
                  className="text-base font-normal tracking-[-0.3px] text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}


