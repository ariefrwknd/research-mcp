import type { MouseEvent } from 'react'

import styles from './Header.module.css'

type HeaderLink = {
  href: string
  label: string
}

type HeaderProps = {
  links: HeaderLink[]
  onNavigate?: (href: string) => void
}

export function Header({ links, onNavigate }: HeaderProps) {
  const handleLinkClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigate) {
      return
    }

    if (href.startsWith('/')) {
      event.preventDefault()
      onNavigate(href)
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.brandIcon} aria-hidden="true" />
        <span className={styles.brandLabel}>Underground Waves</span>
      </div>
      <nav aria-label="Primary navigation">
        <ul className={styles.navList}>
          {links.map(({ href, label }) => (
            <li key={label}>
              <a className={styles.navLink} href={href} onClick={handleLinkClick(href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

