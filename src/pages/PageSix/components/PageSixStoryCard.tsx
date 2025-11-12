type PageSixStoryCardProps = {
  imageUrl: string
  category: string
  readLength: string
  title: string
  excerpt: string
  author: string
  ctaLabel: string
  href: string
}

const clockIconPath =
  'M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 12 2.25Zm0 17.5a7.75 7.75 0 1 1 7.75-7.75 7.76 7.76 0 0 1-7.75 7.75Zm.75-12.25h-1.5v5l4.25 2.55.75-1.23-3.5-2.07Z'

export function PageSixStoryCard({
  imageUrl,
  category,
  readLength,
  title,
  excerpt,
  author,
  ctaLabel,
  href,
}: PageSixStoryCardProps) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-border bg-surface shadow-card">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          alt=""
          src={imageUrl}
          className="size-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6 pb-6 pt-6">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          <span className="tracking-[0.2em]">{category}</span>
          <span aria-hidden className="text-base text-border">
            •
          </span>
          <span className="flex items-center gap-2 tracking-[0.2em] text-xs font-medium text-text-muted">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="size-3 text-text-muted"
              fill="currentColor"
              focusable="false"
            >
              <path d={clockIconPath} />
            </svg>
            <span className="tracking-normal uppercase">{readLength}</span>
          </span>
        </div>

        <h3 className="text-2xl font-semibold leading-tight tracking-[0.01em] text-white">
          {title}
        </h3>
        <p className="text-base leading-6 text-text-secondary">{excerpt}</p>

        <div className="mt-auto flex items-center justify-between text-sm text-text-muted">
          <span>{author}</span>
          <a
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-white"
          >
            {ctaLabel}
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              className="size-4"
              fill="currentColor"
              focusable="false"
            >
              <path d="M11.293 4.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586l-2.293-2.293a1 1 0 0 1 0-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

