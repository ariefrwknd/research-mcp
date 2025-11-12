import type { PageFiveStory } from '../../PageFiveStories'
import styles from './PageFiveStoryCard.module.css'

export interface PageFiveStoryCardProps {
  story: PageFiveStory
}

export function PageFiveStoryCard({ story }: PageFiveStoryCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          alt={story.imageAlt}
          className={styles.image}
          src={story.imageUrl}
          loading="lazy"
        />
        <div className={styles.imageOverlay} aria-hidden="true" />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span
            className={styles.category}
            style={{ color: story.categoryColor }}
          >
            {story.category}
          </span>
          <span aria-hidden="true" className={styles.separator}>
            •
          </span>
          <span className={styles.readTime}>
            <ClockIcon />
            {story.readTime}
          </span>
        </div>
        <h3 className={styles.title}>{story.title}</h3>
        <p className={styles.description}>{story.description}</p>
        <div className={styles.footer}>
          <span className={styles.author}>By {story.author}</span>
          <a className={styles.link} href={story.href}>
            <span>{story.linkLabel}</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  )
}

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      fill="none"
      height="16"
      role="img"
      viewBox="0 0 16 16"
      width="16"
    >
      <circle cx="8" cy="8" r="5.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 5.5V8l1.5 1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      fill="none"
      height="16"
      role="img"
      viewBox="0 0 16 16"
      width="16"
    >
      <path
        d="M6 4.75 10.25 8 6 11.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}




