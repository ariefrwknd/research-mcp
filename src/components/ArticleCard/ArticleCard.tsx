import styles from './ArticleCard.module.css'

export type ArticleMeta = {
  category: string
  readLength: string
  title: string
  excerpt: string
  author: string
  ctaLabel: string
  imageUrl: string
}

type ArticleCardProps = {
  article: ArticleMeta
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper} aria-hidden="true">
        <img className={styles.image} src={article.imageUrl} alt="" loading="lazy" />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>{article.category}</span>
          <span className={styles.divider} aria-hidden="true">
            •
          </span>
          <span className={styles.readLength}>{article.readLength}</span>
        </div>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.excerpt}>{article.excerpt}</p>
        <div className={styles.footer}>
          <span className={styles.author}>{article.author}</span>
          <a className={styles.cta} href="#">
            {article.ctaLabel}
            <span className={styles.ctaIcon} aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  )
}



