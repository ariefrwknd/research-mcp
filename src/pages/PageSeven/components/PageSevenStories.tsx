import { PageSevenStoryCard } from './PageSevenStoryCard'

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

type PageSevenStoriesProps = {
  heading: string
  description: string
  stories: Story[]
}

export function PageSevenStories({ heading, description, stories }: PageSevenStoriesProps) {
  return (
    <section className="bg-black px-6 py-20 sm:px-10">
      <div className="mx-auto flex w-full max-w-[1329px] flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="max-w-[320px] text-4xl font-semibold leading-[48px] tracking-[0.02em] text-white sm:text-[48px] sm:tracking-[0.3516px]">
            {heading}
          </h2>
          <p className="max-w-[660px] text-base leading-7 text-text-secondary sm:text-lg sm:leading-[28px] sm:tracking-[-0.4395px]">
            {description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {stories.map((story) => (
            <PageSevenStoryCard key={story.title} {...story} />
          ))}
        </div>
      </div>
    </section>
  )
}


