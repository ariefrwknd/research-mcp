import { useCallback } from 'react'
import type { KeyboardEvent } from 'react'

type PageEightStoryCardProps = {
  imageUrl: string
  category: string
  readLength: string
  title: string
  excerpt: string
  author: string
  ctaLabel: string
  onSelect?: () => void
}

const clockIconPath =
  'M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 12 2.25Zm0 17.5a7.75 7.75 0 1 1 7.75-7.75 7.76 7.76 0 0 1-7.75 7.75Zm.75-12.25h-1.5v5l4.25 2.55.75-1.23-3.5-2.07Z'

const arrowIconPath =
  'M11.293 4.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586l-2.293-2.293a1 1 0 0 1 0-1.414Z'

export function PageEightStoryCard({
  imageUrl,
  category,
  readLength,
  title,
  excerpt,
  author,
  ctaLabel,
  onSelect,
}: PageEightStoryCardProps) {
  const handleClick = useCallback(() => {
    onSelect?.()
  }, [onSelect])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        onSelect?.()
      }
    },
    [onSelect],
  )

  return (
    <article
      className="flex h-full w-full cursor-pointer flex-col overflow-hidden border border-border bg-muted transition-transform hover:-translate-y-1 focus-visible:-translate-y-1"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Read story: ${title}`}
    >
      <div className="relative h-48 w-full overflow-hidden sm:h-[200px]">
        <img alt="" src={imageUrl} className="size-full object-cover" loading="lazy" />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6 pb-6 pt-6 sm:gap-4">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.6px] text-primary">
          <span className="tracking-[0.6px]">{category}</span>
          <span aria-hidden className="text-base text-zinc-600">
            •
          </span>
          <span className="flex items-center gap-2 text-xs font-normal tracking-[0.2px] text-text-muted">
            <svg aria-hidden viewBox="0 0 24 24" className="size-3" fill="currentColor" focusable="false">
              <path d={clockIconPath} />
            </svg>
            <span className="tracking-[0.2px]">{readLength}</span>
          </span>
        </div>

        <h3 className="text-[24px] font-normal leading-[32px] tracking-[0.0703px] text-white">{title}</h3>
        <p className="text-base leading-6 tracking-[-0.02em] text-text-secondary sm:text-lg sm:leading-7">
          {excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between text-sm text-text-muted">
          <span>{author}</span>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onSelect?.()
            }}
            className="inline-flex items-center gap-2 text-sm font-medium tracking-[-0.1504px] text-primary transition-colors hover:text-white"
          >
            {ctaLabel}
            <svg aria-hidden viewBox="0 0 20 20" className="size-4" fill="currentColor" focusable="false">
              <path d={arrowIconPath} />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}


