import styles from './PageFiveHero.module.css'

export interface PageFiveHeroProps {
  badge: string
  title: string
  description: string
  backgroundImageUrl: string
}

export function PageFiveHero({
  badge,
  title,
  description,
  backgroundImageUrl,
}: PageFiveHeroProps) {
  return (
    <section className={styles.hero}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        aria-hidden="true"
      >
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <span className={styles.badge}>{badge}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
}




