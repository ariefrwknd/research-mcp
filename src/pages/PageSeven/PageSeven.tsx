import { navigateTo } from '../../services/navigation'
import { PageSevenNavbar } from './components/PageSevenNavbar'
import { PageSevenHero } from './components/PageSevenHero'
import { PageSevenStories } from './components/PageSevenStories'

const navigationLinks = [
  { href: '/', label: 'Articles' },
  { href: '/artists', label: 'Artists' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/subscribe', label: 'Subscribe' },
]

const heroContent = {
  badgeLabel: 'Issue #47 — November 2025',
  title: 'The Sound of Now',
  description:
    'Exploring the underground music scene, one artist at a time. Discover fresh voices, raw talent, and the stories behind the songs.',
  backgroundImage:
    'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=2000&q=80',
}

const featuredStories = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80',
    category: 'Features',
    readLength: '8 min read',
    title: 'The Revival of Lo-Fi Rock in 2025',
    excerpt:
      'How bedroom producers are reshaping the indie rock landscape with raw, unpolished sounds that capture authentic emotion and creative freedom.',
    author: 'By Sarah Chen',
    ctaLabel: 'Read More',
    href: '/stories/lofi-revival',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1446058784161-3b224f1779a5?auto=format&fit=crop&w=1200&q=80',
    category: 'Culture',
    readLength: '12 min read',
    title: 'Inside the DIY Venue Revolution',
    excerpt:
      'A deep dive into the underground spaces keeping live music alive, from warehouse shows to converted basements that have become cultural hubs.',
    author: 'By Marcus Johnson',
    ctaLabel: 'Read More',
    href: '/stories/diy-venues',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1521566652839-697aa473761a?auto=format&fit=crop&w=1200&q=80',
    category: 'Opinion',
    readLength: '6 min read',
    title: "Vinyl's Unexpected Comeback",
    excerpt:
      "Why physical media matters more than ever in the streaming era. Exploring the tactile experience and ritual of record collecting in modern music culture.",
    author: 'By Emily Rodriguez',
    ctaLabel: 'Read More',
    href: '/stories/vinyl-comeback',
  },
]

export function PageSeven() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text-primary">
      <PageSevenNavbar brandLabel="UNDERGROUND WAVES" links={navigationLinks} onNavigate={navigateTo} />
      <main className="flex-1">
        <PageSevenHero {...heroContent} />
        <PageSevenStories
          heading="Latest Stories"
          description="Deep dives into the artists, trends, and sounds shaping independent music today."
          stories={featuredStories}
        />
      </main>
    </div>
  )
}


