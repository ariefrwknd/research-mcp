import { memo } from 'react'

type SummaryFilter = {
  label: string
  value: string
}

type SummaryItem = {
  id: string
  label: string
  value: string
  variant: 'billboard' | 'miniBillboard' | 'baliho' | 'streetSignage' | 'image' | 'premium' | 'reach'
}

const FIGMA_SUMMARY_ART =
  'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFRUUiIC8+CiAgICA8L3N2Zz4='

const filters: SummaryFilter[] = [
  { label: 'Zone:', value: 'All' },
  { label: 'Region:', value: 'All' },
  { label: 'Area:', value: 'All' },
]

const oohItems: SummaryItem[] = [
  { id: 'billboard', label: 'Billboard', value: '48', variant: 'billboard' },
  { id: 'mini-billboard', label: 'Mini Billboard', value: '72', variant: 'miniBillboard' },
  { id: 'baliho', label: 'Baliho', value: '81', variant: 'baliho' },
  { id: 'street-signage', label: 'Street Signage', value: '106', variant: 'streetSignage' },
]

const lampHopItems: SummaryItem[] = [
  { id: 'image', label: 'LAMP/ HOP IMAGE', value: '63', variant: 'image' },
  { id: 'premium', label: 'LAMP/ HOP PREMIUM', value: '31', variant: 'premium' },
  { id: 'reach', label: 'HOP REACH', value: '90', variant: 'reach' },
]

const valueHighlightColor = '#0dd5ae'

const iconStroke = '#ffffff'

function SummaryCardIcon({ variant }: Pick<SummaryItem, 'variant'>) {
  switch (variant) {
    case 'billboard':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden focusable="false">
          <rect x="4" y="8" width="24" height="12" rx="2" ry="2" fill="none" stroke={iconStroke} strokeWidth="2" />
          <rect x="8" y="24" width="4" height="3" fill={iconStroke} />
          <rect x="20" y="24" width="4" height="3" fill={iconStroke} />
        </svg>
      )
    case 'miniBillboard':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden focusable="false">
          <rect x="9" y="9" width="14" height="12" rx="2" ry="2" fill="none" stroke={iconStroke} strokeWidth="2" />
          <rect x="6" y="22" width="2" height="6" fill={iconStroke} />
          <rect x="9" y="17" width="4" height="2" fill={iconStroke} />
        </svg>
      )
    case 'baliho':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden focusable="false">
          <rect x="11" y="7" width="10" height="16" rx="2" ry="2" fill="none" stroke={iconStroke} strokeWidth="2" />
          <rect x="14" y="24" width="4" height="4" fill={iconStroke} />
        </svg>
      )
    case 'streetSignage':
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden focusable="false">
          <rect x="4" y="10" width="24" height="8" rx="2" ry="2" fill="none" stroke={iconStroke} strokeWidth="2" />
          <rect x="8" y="20" width="4" height="8" fill={iconStroke} />
          <rect x="20" y="20" width="4" height="8" fill={iconStroke} />
        </svg>
      )
    default:
      return null
  }
}

type SummaryStatCardProps = {
  item: SummaryItem
  layout?: 'border' | 'solid'
}

const SummaryStatCard = memo(({ item, layout = 'border' }: SummaryStatCardProps) => {
  const baseClasses =
    layout === 'border'
      ? 'flex h-[90px] w-[97px] flex-col justify-between rounded-lg border border-[#707070] bg-transparent px-3 py-3'
      : 'flex h-[90px] w-[123px] flex-col justify-between rounded-lg bg-[rgba(65,65,65,0.85)] px-4 py-3 backdrop-blur-sm'

  return (
    <article className={baseClasses}>
      <div className="flex items-start justify-between text-xs font-normal text-white">
        <span className="leading-[1.1]">{item.label}</span>
        <span className="text-right text-lg font-semibold leading-none text-[var(--summary-value-color)]">
          {item.value}
        </span>
      </div>
      {layout === 'border' ? (
        <SummaryCardIcon variant={item.variant} />
      ) : (
        <span className="text-sm font-semibold uppercase leading-none text-white">{iconLabel(item.variant)}</span>
      )}
    </article>
  )
})

SummaryStatCard.displayName = 'SummaryStatCard'

function iconLabel(variant: SummaryItem['variant']) {
  switch (variant) {
    case 'image':
      return 'IMAGE'
    case 'premium':
      return 'PREMIUM'
    case 'reach':
      return 'REACH'
    default:
      return ''
  }
}

export const DashboardSummarySection = memo(function DashboardSummarySection() {
  return (
    <section
      aria-labelledby="dashboard-summary-title"
      className="mx-auto w-full max-w-[1392px] px-6 pt-10 text-[#1e1e1e]"
      style={{ ['--summary-value-color' as string]: valueHighlightColor }}
    >
      <header className="flex items-center justify-between gap-6">
        <h2 id="dashboard-summary-title" className="text-[32px] font-semibold leading-none tracking-tight">
          # Dashboard
        </h2>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Refresh data"
            className="flex size-9 items-center justify-center rounded-full border border-[#1e1e1e] text-[#1e1e1e] transition-colors hover:bg-[#1e1e1e]/10"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="size-5" focusable="false" fill="currentColor">
              <path d="M4 12a8 8 0 1 1 3.4 6.54l1.2-1.6A6 6 0 1 0 6 12H3l3.5 4L10 12z" />
            </svg>
          </button>

          {filters.map((filter) => (
            <button
              key={filter.label}
              type="button"
              className="flex h-9 items-center gap-6 rounded-full border border-[#1e1e1e] px-4 text-sm font-medium tracking-[-0.01em]"
            >
              <span>{filter.label}</span>
              <span>{filter.value}</span>
            </button>
          ))}

          <button
            type="button"
            aria-label="Search dashboard"
            className="flex size-9 items-center justify-center rounded-full bg-[#1e1e1e] text-white transition-colors hover:bg-[#1e1e1e]/80"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="size-4" focusable="false" fill="currentColor">
              <path d="m20.3 18.9-3.9-3.9a7 7 0 1 0-1.4 1.4l3.9 3.9a1 1 0 0 0 1.4-1.4ZM6 11a5 5 0 1 1 10 0A5 5 0 0 1 6 11Z" />
            </svg>
          </button>
        </div>
      </header>

      <div className="relative mt-6 overflow-hidden rounded-2xl bg-[#1e1e1e] px-8 py-8">
        <img
          src={FIGMA_SUMMARY_ART}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-[-80px] top-[-80px] h-[360px] w-[360px] select-none opacity-20"
          draggable={false}
        />

        <div className="relative z-[1] flex items-stretch gap-6 text-white">
          <div className="flex w-[410px] flex-col justify-between">
            <div>
              <p className="text-2xl font-semibold leading-snug">Touchpoint Summary</p>
              <p className="mt-4 text-sm leading-6 text-[#707070]">
                This includes all stages of the customer journey: before, during, and after a purchase.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex w-[468px] flex-col gap-6 rounded-xl bg-[#2b2b2b] p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-white">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-[#0dd5ae] text-[#1e1e1e]">
                    <svg aria-hidden viewBox="0 0 24 24" className="size-5" focusable="false" fill="currentColor">
                      <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8h-2V7H6v10H4Zm4 12h8v2H8Zm5-4 5 4-5 4Z" />
                    </svg>
                  </span>
                  <span className="text-lg font-bold leading-none">OOH</span>
                </div>
                <span className="text-xs font-normal tracking-[0.08em] text-[#bdbdbd]">
                  Latest Data Update: 30/10/2025 09.00
                </span>
              </div>

              <div className="flex justify-between gap-4">
                {oohItems.map((item) => (
                  <SummaryStatCard key={item.id} item={item} layout="border" />
                ))}
              </div>
            </div>

            <div className="flex w-[434px] flex-col gap-6 rounded-xl bg-gradient-to-br from-[#2b2b2b] via-[#2b2b2b]/80 to-[#2b2b2b]/40 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-white">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-[#0dd5ae] text-[#1e1e1e]">
                    <svg aria-hidden viewBox="0 0 24 24" className="size-5" focusable="false" fill="currentColor">
                      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14H4Zm2 0v12h12V6Zm1 3h4v3H7Zm6 0h4v3h-4Zm0 5h4v3h-4Z" />
                    </svg>
                  </span>
                  <span className="text-lg font-bold leading-none">LAMP/ HOP</span>
                </div>
                <span className="text-xs font-normal tracking-[0.08em] text-[#bdbdbd]">
                  Latest Data Update: 21/10/2025 09.00
                </span>
              </div>

              <div className="flex justify-between gap-4">
                {lampHopItems.map((item) => (
                  <SummaryStatCard key={item.id} item={item} layout="solid" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})


