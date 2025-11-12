import { useEffect } from 'react'

type PageEightStoryModalProps = {
  isOpen: boolean
  onClose: () => void
  story: {
    title: string
    author: string
    readLength: string
    category: string
    imageUrl: string
    content: string
    href: string
  }
}

export function PageEightStoryModal({ isOpen, onClose, story }: PageEightStoryModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  const paragraphs = story.content.split('\n\n')

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
    >
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-surface shadow-2xl">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-black/40 text-text-secondary transition hover:text-text-primary"
        >
          <span aria-hidden className="text-2xl">
            ×
          </span>
        </button>

        <div className="h-64 w-full shrink-0 overflow-hidden">
          <img alt="" src={story.imageUrl} className="size-full object-cover" />
        </div>

        <div className="flex-1 overflow-y-auto px-8 pb-10 pt-8">
          <div className="mb-6 flex flex-col gap-2">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{story.category}</div>
            <h2 id="story-modal-title" className="text-3xl font-semibold leading-[1.2] text-white sm:text-4xl">
              {story.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
              <span>{story.author}</span>
              <span aria-hidden className="text-border">•</span>
              <span>{story.readLength}</span>
            </div>
          </div>

          <div className="flex flex-col gap-5 text-base leading-7 text-text-secondary">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={story.href}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-background transition hover:bg-primary-strong"
            >
              Continue Reading
              <svg aria-hidden viewBox="0 0 20 20" className="size-4" fill="currentColor" focusable="false">
                <path d="M11.293 4.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586l-2.293-2.293a1 1 0 0 1 0-1.414Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


