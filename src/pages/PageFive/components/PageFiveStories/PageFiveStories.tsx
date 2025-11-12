import { PageFiveStoryCard } from './components/PageFiveStoryCard/PageFiveStoryCard'
import styles from './PageFiveStories.module.css'

export interface PageFiveStory {
  id: string
  category: string
  categoryColor: string
  readTime: string
  title: string
  description: string
  author: string
  linkLabel: string
  href: string
  imageUrl: string
  imageAlt: string
}

export interface PageFiveStoriesProps {
  title: string
  description: string
  stories: PageFiveStory[]
}

export function PageFiveStories({
  title,
  description,
  stories,
}: PageFiveStoriesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.grid}>
        {stories.map((story) => (
          <PageFiveStoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  )
}




