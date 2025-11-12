import styles from './PageFourHeader.module.css'

interface NavigationItem {
  label: string
  href: string
}

interface PageFourHeaderProps {
  brandName: string
  navItems: NavigationItem[]
}

export function PageFourHeader({ brandName, navItems }: PageFourHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#">
          <span className={styles.brandIcon} aria-hidden="true">
            <svg
              className={styles.iconGraphic}
              viewBox="0 0 32 32"
              role="img"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="noteGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
              <rect fill="url(#noteGradient)" height="32" rx="12" width="32" />
              <path
                d="M20.5 8.5v10.43a3.68 3.68 0 0 1-1.65 3.1 4.06 4.06 0 0 1-2.25.67c-1.73 0-3.12-1.05-3.12-2.69s1.39-2.69 3.12-2.69a3.59 3.59 0 0 1 1.55.36v-5.53l-3.74.92v6.74a3.68 3.68 0 0 1-1.65 3.1 4.06 4.06 0 0 1-2.25.67c-1.73 0-3.12-1.05-3.12-2.69s1.39-2.69 3.12-2.69a3.59 3.59 0 0 1 1.55.36V8.5a.75.75 0 0 1 .57-.73l5.24-1.3a.75.75 0 0 1 .93.73Z"
                fill="#f5f3ff"
              />
            </svg>
          </span>
          <span className={styles.brandName}>{brandName}</span>
        </a>
        <nav aria-label="Primary" className={styles.navigation}>
          {navItems.map((item) => (
            <a className={styles.navigationLink} href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}



