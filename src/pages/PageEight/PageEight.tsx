import { useState } from 'react'

import { navigateTo } from '../../services/navigation'
import { PageEightNavbar } from './components/PageEightNavbar'
import { PageEightHero } from './components/PageEightHero'
import { PageEightStories, type PageEightStory } from './components/PageEightStories'
import { PageEightStoryModal } from './components/PageEightStoryModal'

const navigationLinks = [
  { href: '/', label: 'Articles' },
  { href: '/artists', label: 'Artists' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/subscribe', label: 'Subscribe' },
]

const latestStories: PageEightStory[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80',
    category: 'Features',
    readLength: '8 min read',
    title: 'The Revival of Lo-Fi Rock in 2025',
    excerpt:
      'How bedroom producers are reshaping the indie rock landscape with raw, unpolished sounds that capture authentic emotion and creative freedom.',
    author: 'By Sarah Chen',
    ctaLabel: 'Read More',
    href: '/stories/lofi-revival',
    content:
      "Bedroom producers are blurring the lines between home studios and commercial releases. With affordable gear and unrestricted creative vision, they're crafting textures that feel both nostalgic and cutting-edge. The lo-fi revival isn't about imperfection for its own sake—it's about capturing emotion before perfectionism sands it away.\n\n2025 has seen a wave of micro-labels supporting these artists, releasing limited pressings that sell out overnight. Fans crave the intimacy of these recordings, the sense that they're hearing something raw and unfiltered. It's a cultural shift toward valuing honesty over polish.",
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1446058784161-3b224f1779a5?auto=format&fit=crop&w=1600&q=80',
    category: 'Culture',
    readLength: '12 min read',
    title: 'Inside the DIY Venue Revolution',
    excerpt:
      'A deep dive into the underground spaces keeping live music alive, from warehouse shows to converted basements that have become cultural hubs.',
    author: 'By Marcus Johnson',
    ctaLabel: 'Read More',
    href: '/stories/diy-venues',
    content:
      'Warehouse venues and basement stages are rewriting the rules of live music. Organizers are building communities where artists set their own schedules, ticket prices, and door policies. These spaces are intentionally inclusive, emphasizing safety and mutual respect over profit analytics.\n\nThe revolution thrives on collaboration: lighting designers trade time with photographers, local chefs cater pop-up kitchens, and performers cross genres nightly. It is a blueprint for sustainable scenes—owned by the people who care most about the sound.',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1521566652839-697aa473761a?auto=format&fit=crop&w=1600&q=80',
    category: 'Opinion',
    readLength: '6 min read',
    title: "Vinyl's Unexpected Comeback",
    excerpt:
      'Why physical media matters more than ever in the streaming era. Exploring the tactile experience and ritual of record collecting in modern music culture.',
    author: 'By Emily Rodriguez',
    ctaLabel: 'Read More',
    href: '/stories/vinyl-comeback',
    content:
      'Vinyl refuses to fade because it offers what streams cannot: tactility, silence between tracks, and artwork large enough to live with. Collectors describe the ritual as meditative—sliding a record from its sleeve, dropping the needle, and letting side A guide the evening.\n\nPressing plants are adapting with greener materials and smaller runs tailored to niche communities. Each release becomes an artifact, a shared signal that an artist has crafted something worth cherishing beyond the algorithm.',
  },
]

export function PageEight() {
  const [selectedStory, setSelectedStory] = useState<PageEightStory | null>(null)

  const handleSelectStory = (story: PageEightStory) => {
    setSelectedStory(story)
  }

  const handleCloseModal = () => {
    setSelectedStory(null)
  }

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <PageEightNavbar brandLabel="UNDERGROUND WAVES" links={navigationLinks} onNavigate={navigateTo} />
      <main>
        <PageEightHero
          badgeLabel="Issue #47 — November 2025"
          title="The Sound of Now"
          description="Exploring the underground music scene, one artist at a time. Discover fresh voices, raw talent, and the stories behind the songs."
          backgroundImage="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=2000&q=80"
        />
        <PageEightStories
          heading="Latest Stories"
          description="Deep dives into the artists, trends, and sounds shaping independent music today."
          stories={latestStories}
          onSelectStory={handleSelectStory}
        />
      </main>
      {selectedStory && (
        <PageEightStoryModal story={selectedStory} isOpen={Boolean(selectedStory)} onClose={handleCloseModal} />
      )}
    </div>
  )
}


