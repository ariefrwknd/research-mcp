import type { MouseEvent } from 'react'

type NavigationLink = {
  href: string
  label: string
}

type PageSixHeaderProps = {
  brandLabel: string
  links: NavigationLink[]
  onNavigate?: (href: string) => void
}

const musicNotePath =
  'M19.5 3.75a.75.75 0 0 0-.963-.72l-8.25 2.2a.75.75 0 0 0-.537.72V16.4a3.25 3.25 0 1 0 1.5 2.714V11.77l7.5-2.002v4.934a3.25 3.25 0 1 0 1.5 2.714V3.75Z'

export function PageSixHeader({ brandLabel, links, onNavigate }: PageSixHeaderProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!onNavigate) {
      return
    }

    event.preventDefault()
    onNavigate(href)
  }

  return (
    <header className="border-b border-border bg-black/95 px-6">
      <div className="mx-auto flex h-20 w-full max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary/15 text-primary">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="size-6"
              focusable="false"
              fill="currentColor"
            >
              <path d={musicNotePath} />
            </svg>
          </span>
          <span className="text-base font-medium tracking-[0.02em] text-white">{brandLabel}</span>
        </div>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => handleClick(event, link.href)}
                  className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
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



