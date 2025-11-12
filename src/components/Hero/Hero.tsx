import type { CSSProperties } from 'react'
import clsx from 'clsx'

import styles from './Hero.module.css'

type HeroProps = {
  badgeLabel: string
  title: string
  description: string
  backgroundImage: string
  className?: string
}

export function Hero({
  badgeLabel,
  title,
  description,
  backgroundImage,
  className,
}: HeroProps) {
  return (
    <section
      className={clsx(styles.hero, className)}
      style={{ '--hero-image': `url("${backgroundImage}")` } as CSSProperties}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.badge}>{badgeLabel}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
}

