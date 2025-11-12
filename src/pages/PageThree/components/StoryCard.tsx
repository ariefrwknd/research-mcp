import styles from './StoryCard.module.css'

export type Story = {
  category: string
  readLength: string
  title: string
  excerpt: string
  author: string
  readMoreHref: string
  imageUrl: string
}

type StoryCardProps = {
  story: Story
}

export function StoryCard({ story }: StoryCardProps) {
  const { category, readLength, title, excerpt, author, readMoreHref, imageUrl } =
    story

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper} aria-hidden="true">
        <img
          alt=""
          className={styles.image}
          src={imageUrl}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.separator} aria-hidden="true">
            •
          </span>
          <span className={styles.readLength}>{readLength}</span>
        </div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.excerpt}>{excerpt}</p>

        <div className={styles.footer}>
          <span className={styles.author}>{author}</span>
          <a className={styles.cta} href={readMoreHref}>
            Read More
            <span className={styles.ctaIcon} aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  )
}



