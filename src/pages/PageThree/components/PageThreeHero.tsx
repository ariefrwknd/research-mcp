import styles from './PageThreeHero.module.css'

type PageThreeHeroProps = {
  badgeLabel: string
  title: string
  description: string
  backgroundImage: string
}

export function PageThreeHero({
  badgeLabel,
  title,
  description,
  backgroundImage,
}: PageThreeHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="page-three-hero-heading">
      <div
        className={styles.heroBackground}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="presentation"
        aria-hidden="true"
      />

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <span className={styles.badge}>{badgeLabel}</span>
        <h1 id="page-three-hero-heading" className={styles.title}>
          {title}
        </h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
}



