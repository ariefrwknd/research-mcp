import styles from './PageThreeHeader.module.css'

export type NavigationLink = {
  href: string
  label: string
}

type PageThreeHeaderProps = {
  links: NavigationLink[]
}

export function PageThreeHeader({ links }: PageThreeHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.brandIcon} aria-hidden="true">
          <svg
            className={styles.brandGlyph}
            viewBox="0 0 32 32"
            focusable="false"
            role="img"
          >
            <defs>
              <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ad46ff" />
                <stop offset="100%" stopColor="#7b2ff7" />
              </linearGradient>
            </defs>
            <rect width="32" height="32" rx="8" fill="url(#brand-gradient)" />
            <path
              d="M12.5 9.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v11.7c0 2.43-2.17 4.8-5.2 5.62a6.3 6.3 0 0 1-5.66-1.29 2.74 2.74 0 0 1 3.62-4.1l2.74-1.33V11.5h-2.5v4.12a2.8 2.8 0 1 1-2 0Z"
              fill="#f4f4f5"
            />
          </svg>
        </div>
        <span className={styles.brandName}>Underground Waves</span>
      </div>

      <nav aria-label="Primary navigation" className={styles.navigation}>
        <ul className={styles.navList}>
          {links.map((link) => (
            <li key={link.href} className={styles.navItem}>
              <a className={styles.navLink} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}



