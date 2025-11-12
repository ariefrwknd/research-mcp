import { PageNineStoryCard } from './PageNineStoryCard'

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

type PageNineStoriesProps = {
  heading: string
  description: string
  stories: Story[]
}

export function PageNineStories({ heading, description, stories }: PageNineStoriesProps) {
  return (
    <section className="bg-black px-6 py-16 sm:px-8 md:px-10 md:py-20">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-semibold leading-[1.2] tracking-[0.015em] text-white sm:text-[44px] sm:leading-[1.1] md:text-[48px] md:leading-[1.1]">
            {heading}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">{description}</p>
        </div>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:gap-8 md:grid md:grid-cols-2 md:gap-10 md:overflow-visible md:pb-0 md:snap-none xl:grid-cols-3">
          {stories.map((story) => (
            <div key={story.title} className="min-w-[280px] flex-1 snap-center md:min-w-0">
              <PageNineStoryCard {...story} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


