import { PageSixStoryCard } from './PageSixStoryCard'

type Story = {
  imageUrl: string
  category: string
  readLength: string
  title: string
  excerpt: string
  author: string
  ctaLabel: string
  href: string
}

type PageSixLatestStoriesProps = {
  heading: string
  description: string
  stories: Story[]
}

export function PageSixLatestStories({ heading, description, stories }: PageSixLatestStoriesProps) {
  return (
    <section className="bg-black px-10 py-20">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-semibold leading-tight tracking-[0.015em] text-white">
            {heading}
          </h2>
          <p className="max-w-2xl text-lg leading-7 text-text-secondary">{description}</p>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          {stories.map((story) => (
            <PageSixStoryCard key={story.title} {...story} />
          ))}
        </div>
      </div>
    </section>
  )
}



