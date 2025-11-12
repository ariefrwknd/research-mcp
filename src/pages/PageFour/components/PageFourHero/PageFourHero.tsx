import styles from './PageFourHero.module.css'

interface PageFourHeroProps {
  badge: string
  title: string
  description: string
  backgroundImageUrl: string
}

export function PageFourHero({ badge, title, description, backgroundImageUrl }: PageFourHeroProps) {
  return (
    <div className={styles.hero}>
      <div
        aria-hidden="true"
        className={styles.background}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <span className={styles.badge}>{badge}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}



