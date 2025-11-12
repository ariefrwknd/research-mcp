import { Header } from '../../components/Header/Header'
import { Hero } from '../../components/Hero/Hero'
import { ArticleCard } from '../../components/ArticleCard/ArticleCard'
import type { ArticleMeta } from '../../components/ArticleCard/ArticleCard'
import { navigateTo } from '../../services/navigation'

import styles from './PageTwo.module.css'

const navigationLinks = [
  { href: '/', label: 'Articles' },
  { href: '#artists', label: 'Artists' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#subscribe', label: 'Subscribe' },
]

const latestStories: ArticleMeta[] = [
  {
    category: 'Features',
    readLength: '8 min read',
    title: 'The Revival of Lo-Fi Rock in 2025',
    excerpt:
      'How bedroom producers are reshaping the indie rock landscape with raw, unpolished sounds that capture authentic emotion and creative freedom.',
    author: 'By Sarah Chen',
    ctaLabel: 'Read More',
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
    ctaLabel: 'Read More',
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
    ctaLabel: 'Read More',
    imageUrl:
      'https://images.unsplash.com/photo-1521566652839-697aa473761a?auto=format&fit=crop&w=1200&q=80',
  },
]

export function PageTwo() {
  return (
    <div className={styles.page}>
      <Header links={navigationLinks} onNavigate={navigateTo} />
      <main className={styles.main}>
        <Hero
          badgeLabel="Issue #47 — November 2025"
          title="The Sound of Now"
          description="Exploring the underground music scene, one artist at a time. Discover fresh voices, raw talent, and the stories behind the songs."
          backgroundImage="https://images.unsplash.com/photo-1518895949257-7621c3c786d4?auto=format&fit=crop&w=2000&q=80"
        />

        <section
          className={styles.latestSection}
          aria-labelledby="latest-stories-heading"
          id="articles"
        >
          <div className={styles.sectionHeader}>
            <h2 id="latest-stories-heading" className={styles.sectionHeading}>
              Latest Stories
            </h2>
            <p className={styles.sectionDescription}>
              Deep dives into the artists, trends, and sounds shaping independent music today.
            </p>
          </div>
          <div className={styles.cards}>
            {latestStories.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}


