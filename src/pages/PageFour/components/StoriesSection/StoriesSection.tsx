import { StoryCard } from '../StoryCard/StoryCard'
import styles from './StoriesSection.module.css'

export interface Story {
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

interface StoriesSectionProps {
  title: string
  description: string
  stories: Story[]
}

export function StoriesSection({ title, description, stories }: StoriesSectionProps) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.grid}>
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  )
}



