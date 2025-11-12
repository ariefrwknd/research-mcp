import { PageThreeHeader } from './components/PageThreeHeader'
import type { NavigationLink } from './components/PageThreeHeader'
import { PageThreeHero } from './components/PageThreeHero'
import { StoryCard, type Story } from './components/StoryCard'

import styles from './PageThree.module.css'

const navigationLinks: NavigationLink[] = [
  { href: '/', label: 'Articles' },
  { href: '#artists', label: 'Artists' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#subscribe', label: 'Subscribe' },
]

const stories: Story[] = [
  {
    category: 'Features',
    readLength: '8 min read',
    title: 'The Revival of Lo-Fi Rock in 2025',
    excerpt:
      'How bedroom producers are reshaping the indie rock landscape with raw, unpolished sounds that capture authentic emotion and creative freedom.',
    author: 'By Sarah Chen',
    readMoreHref: '#read-more-lofi',
    imageUrl:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Culture',
    readLength: '12 min read',
    title: 'Inside the DIY Venue Revolution',
    excerpt:
      'A deep dive into the underground spaces keeping live music alive, from warehouse shows to converted basements that have become cultural hubs.',
    author: 'By Marcus Johnson',
    readMoreHref: '#read-more-diy',
    imageUrl:
      'https://images.unsplash.com/photo-1446058784161-3b224f1779a5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Opinion',
    readLength: '6 min read',
    title: "Vinyl's Unexpected Comeback",
    excerpt:
      'Why physical media matters more than ever in the streaming era. Exploring the tactile experience and ritual of record collecting in modern music culture.',
    author: 'By Emily Rodriguez',
    readMoreHref: '#read-more-vinyl',
    imageUrl:
      'https://images.unsplash.com/photo-1521566652839-697aa473761a?auto=format&fit=crop&w=1200&q=80',
  },
]

export function PageThree() {
  return (
    <div className={styles.page}>
      <PageThreeHeader links={navigationLinks} />
      <main className={styles.main}>
        <PageThreeHero
          badgeLabel="Issue #47 — November 2025"
          title="The Sound of Now"
          description="Exploring the underground music scene, one artist at a time. Discover fresh voices, raw talent, and the stories behind the songs."
          backgroundImage="https://images.unsplash.com/photo-1518895949257-7621c3c786d4?auto=format&fit=crop&w=2000&q=80"
        />

        <section
          className={styles.latestSection}
          aria-labelledby="latest-stories-heading"
        >
          <div className={styles.sectionHeader}>
            <h2 id="latest-stories-heading" className={styles.sectionTitle}>
              Latest Stories
            </h2>
            <p className={styles.sectionDescription}>
              Deep dives into the artists, trends, and sounds shaping independent
              music today.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {stories.map((story) => (
              <StoryCard key={story.title} story={story} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}



