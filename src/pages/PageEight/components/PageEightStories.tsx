import { PageEightStoryCard } from './PageEightStoryCard'

export type PageEightStory = {
  imageUrl: string
  category: string
  readLength: string
  title: string
  excerpt: string
  author: string
  ctaLabel: string
  href: string
  content: string
}

type PageEightStoriesProps = {
  heading: string
  description: string
  stories: PageEightStory[]
  onSelectStory?: (story: PageEightStory) => void
}

export function PageEightStories({ heading, description, stories, onSelectStory }: PageEightStoriesProps) {
  return (
    <section className="bg-black px-6 py-16 sm:px-8 md:px-10 md:py-20">
      <div className="mx-auto flex w-full max-w-[1329px] flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-[36px] font-normal leading-[40px] tracking-[0.15px] text-white sm:text-[44px] sm:leading-[48px] sm:tracking-[0.25px] md:text-[48px] md:leading-[48px] md:tracking-[0.3516px]">
            {heading}
          </h2>
          <p className="max-w-[660px] text-lg leading-[28px] tracking-[-0.02em] text-text-secondary">{description}</p>
        </div>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:gap-8 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0 md:snap-none xl:grid-cols-3">
          {stories.map((story) => (
            <div key={story.title} className="min-w-[280px] flex-1 snap-center md:min-w-0">
              <PageEightStoryCard
                imageUrl={story.imageUrl}
                category={story.category}
                readLength={story.readLength}
                title={story.title}
                excerpt={story.excerpt}
                author={story.author}
                ctaLabel={story.ctaLabel}
                onSelect={() => onSelectStory?.(story)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


