import type { Story } from '../StoriesSection/StoriesSection'
import styles from './StoryCard.module.css'

interface StoryCardProps {
  story: Story
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          alt={story.imageAlt}
          className={styles.image}
          loading="lazy"
          src={story.imageUrl}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.metaRow}>
          <span className={styles.category} style={{ color: story.categoryColor }}>
            {story.category}
          </span>
          <span aria-hidden="true" className={styles.separator}>
            •
          </span>
          <span className={styles.readTime}>
            <svg
              aria-hidden="true"
              className={styles.readTimeIcon}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" fill="none" r="6.75" stroke="#52525c" strokeWidth="1.5" />
              <path
                d="M8 4.75v3.22l2.25 1.52"
                fill="none"
                stroke="#52525c"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            <span className={styles.readTimeText}>{story.readTime}</span>
          </span>
        </div>
        <h3 className={styles.heading}>{story.title}</h3>
        <p className={styles.summary}>{story.description}</p>
        <div className={styles.footer}>
          <span className={styles.author}>By {story.author}</span>
          <a className={styles.link} href={story.href}>
            {story.linkLabel}
            <svg
              aria-hidden="true"
              className={styles.linkIcon}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4.75h5.25V10"
                fill="none"
                stroke="#c27aff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                d="M10.9 5.1 5.5 10.5"
                fill="none"
                stroke="#c27aff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}



