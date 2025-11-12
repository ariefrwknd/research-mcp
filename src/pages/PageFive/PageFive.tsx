import styles from './PageFive.module.css'
import { PageFiveHeader } from './components/PageFiveHeader/PageFiveHeader'
import { PageFiveHero } from './components/PageFiveHero/PageFiveHero'
import {
  PageFiveStories,
  type PageFiveStory,
} from './components/PageFiveStories/PageFiveStories'

const NAV_ITEMS = [
  { label: 'Articles', href: '#' },
  { label: 'Artists', href: '#' },
  { label: 'Reviews', href: '#' },
  { label: 'Subscribe', href: '#' },
]

const STORIES: PageFiveStory[] = [
  {
    id: 'story-1',
    category: 'Features',
    categoryColor: '#c27aff',
    readTime: '8 min read',
    title: 'The Revival of Lo-Fi Rock in 2025',
    description:
      'How bedroom producers are reshaping the indie rock landscape with raw, unpolished sounds that capture authentic emotion and creative freedom.',
    author: 'Sarah Chen',
    linkLabel: 'Read More',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1525286116112-b59af11adad1?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Woman playing guitar on stage at sunset',
  },
  {
    id: 'story-2',
    category: 'Culture',
    categoryColor: '#38bdf8',
    readTime: '12 min read',
    title: 'Inside the DIY Venue Revolution',
    description:
      'A deep dive into the underground spaces keeping live music alive, from warehouse shows to converted basements that have become cultural hubs.',
    author: 'Marcus Johnson',
    linkLabel: 'Read More',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1462965326201-d02e4f455804?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Crowd cheering at a live music venue with bright lights',
  },
  {
    id: 'story-3',
    category: 'Opinion',
    categoryColor: '#f472b6',
    readTime: '6 min read',
    title: "Vinyl's Unexpected Comeback",
    description:
      'Why physical media matters more than ever in the streaming era. Exploring the tactile experience and ritual of record collecting in modern music culture.',
    author: 'Emily Rodriguez',
    linkLabel: 'Read More',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d4?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Close-up of a vinyl record spinning on a turntable',
  },
]

export function PageFive() {
  return (
    <div className={styles.page}>
      <PageFiveHeader brandName="Underground Waves" navItems={NAV_ITEMS} />
      <main className={styles.main}>
        <PageFiveHero
          badge="Issue #47 — November 2025"
          title="The Sound of Now"
          description="Exploring the underground music scene, one artist at a time. Discover fresh voices, raw talent, and the stories behind the songs."
          backgroundImageUrl="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80"
        />
        <PageFiveStories
          title="Latest Stories"
          description="Deep dives into the artists, trends, and sounds shaping independent music today."
          stories={STORIES}
        />
      </main>
    </div>
  )
}




