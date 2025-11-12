import styles from './PageFiveHeader.module.css'

export interface PageFiveHeaderProps {
  brandName: string
  navItems: Array<{ label: string; href: string }>
}

export function PageFiveHeader({ brandName, navItems }: PageFiveHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.brandIcon} aria-hidden="true">
          <MusicNoteIcon />
        </span>
        <span className={styles.brandName}>{brandName}</span>
      </div>
      <nav aria-label="Primary">
        <ul className={styles.navList}>
          {navItems.map(({ label, href }) => (
            <li className={styles.navItem} key={label}>
              <a className={styles.navLink} href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function MusicNoteIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      role="img"
      viewBox="0 0 18 18"
      width="18"
    >
      <path
        d="M12.75 2.25 5.625 3.937v8.794a2.25 2.25 0 1 0 1.5 2.118v-6.18l4.5-.998v4.838a2.25 2.25 0 1 0 1.5 2.12V2.25Z"
        fill="currentColor"
      />
    </svg>
  )
}




