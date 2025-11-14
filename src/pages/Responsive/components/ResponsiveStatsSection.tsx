import clsx from 'clsx'
import type { ReactNode } from 'react'

type StatLegendItem = {
  label: string
  color: string
}

const LEGEND_ITEMS: StatLegendItem[] = [
  { label: 'Achievement', color: '#3dddbe' },
  { label: 'Target', color: '#ff6b42' },
]

const ACTIVATION_BARS = [
  { label: 'Audience', value: 1200, height: 140, highlight: false },
  { label: 'CC', value: 1200, height: 190, highlight: true },
  { label: 'ECC', value: 1200, height: 160, highlight: false },
  { label: 'PS', value: 1200, height: 200, highlight: true },
  { label: 'Engagement', value: 1200, height: 120, highlight: false },
] as const

const DST_POINTS = [
  { label: 'CC', achievement: 1600, target: 1800 },
  { label: 'ECC', achievement: 950, target: 950 },
  { label: 'PS', achievement: 1600, target: 1800 },
  { label: 'VAO', achievement: 2200, target: 2500 },
  { label: 'Pack Intro', achievement: 1100, target: 1500 },
] as const

const SRC_ROWS = [
  { label: 'CC', achievement: '98/100' },
  { label: 'ECC', achievement: '68/100' },
  { label: 'PS', achievement: '80/100' },
] as const

export function ResponsiveStatsSection() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-16 md:px-10 lg:px-16">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <ActivationStatsCard />
        <DstStatsCard />
        <SrcStatsCard />
      </div>
    </section>
  )
}

function ActivationStatsCard() {
  return (
    <StatsCardContainer>
      <CardHeader title="Activation" subtitle="Completeness" value="95%" />
      <div className="relative flex h-56 items-end justify-between gap-3 overflow-hidden rounded-2xl bg-white px-4 pb-6 pt-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.05)_1px,_transparent_1px)] bg-[size:12px_12px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-transparent" />
        <div className="relative flex h-full w-full items-end justify-between gap-2">
          {ACTIVATION_BARS.map((bar) => (
            <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
              <div className="relative flex h-full w-full max-w-[54px] items-end justify-center">
                <div
                  className={clsx(
                    'relative w-full rounded-t-md bg-[#0dd5ae] shadow-[0_6px_18px_rgba(13,213,174,0.25)]',
                    bar.highlight && 'bg-[#27f0c7]'
                  )}
                  style={{ height: `${bar.height}px` }}
                >
                  <div className="absolute -top-1 left-0 right-0 h-1.5 rounded-t-sm bg-[#faaf00]" />
                  <span className="absolute bottom-3 right-2 text-xs font-semibold text-neutral-700">{bar.value}</span>
                </div>
              </div>
              <span className="text-xs font-semibold text-neutral-600">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>
      <CardFooter />
    </StatsCardContainer>
  )
}

function DstStatsCard() {
  return (
    <StatsCardContainer>
      <CardHeader title="DST" subtitle="Completeness" value="87%" />
      <div className="flex h-56 flex-col justify-between rounded-2xl bg-white px-4 py-4">
        <div className="grid flex-1 grid-cols-5 items-end gap-4 border-b border-dashed border-neutral-300 pb-3">
          {DST_POINTS.map((point) => (
            <div key={point.label} className="flex flex-col items-center gap-2">
              <LinePoint achievement={point.achievement} target={point.target} />
              <span className="text-xs font-semibold text-neutral-600">{point.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-5 gap-4 text-xs text-neutral-500">
          {DST_POINTS.map((point) => (
            <div key={point.label} className="flex flex-col items-center">
              <span className="font-semibold text-neutral-700">{formatK(point.achievement)}</span>
              <span>{formatK(point.target)}</span>
            </div>
          ))}
        </div>
      </div>
      <CardFooter />
    </StatsCardContainer>
  )
}

function SrcStatsCard() {
  return (
    <StatsCardContainer className="bg-neutral-900 text-white">
      <CardHeader
        title="SRC Community Activation"
        subtitle="Completeness"
        value="102%"
        supporting="+2%"
        invert
      />
      <div className="relative flex flex-col gap-4 rounded-2xl bg-neutral-900 px-4 py-4">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-gradient-to-br from-transparent via-transparent to-[#ff9d00]/40" />
        {SRC_ROWS.map((row) => (
          <div key={row.label} className="flex items-center gap-4">
            <span className="w-12 text-sm font-semibold uppercase tracking-wide">{row.label}</span>
            <div className="relative flex-1 rounded-full bg-[#3b3b3b]">
              <div className="relative flex h-10 items-center justify-end rounded-full bg-[#0dd5ae]" style={{ width: '72%' }}>
                <span className="pr-4 text-sm font-bold text-neutral-800">{row.achievement}</span>
              </div>
              <div className="absolute inset-y-0 right-0 w-2 rounded-r-full bg-[#ff6b42]" />
            </div>
          </div>
        ))}
      </div>
      <CardFooter invert />
    </StatsCardContainer>
  )
}

type CardHeaderProps = {
  title: string
  subtitle: string
  value: string
  supporting?: string
  invert?: boolean
}

function CardHeader({ title, subtitle, value, supporting, invert }: CardHeaderProps) {
  return (
    <header className={clsx('flex items-start justify-between gap-4', invert ? 'text-white' : 'text-neutral-900')}>
      <div>
        <h3 className="text-lg font-bold leading-tight">{title}</h3>
      </div>
      <div className="text-right">
        <p className={clsx('text-sm font-medium', invert ? 'text-white/80' : 'text-neutral-700')}>{subtitle}</p>
        <div className="flex items-baseline justify-end gap-2">
          {supporting ? <span className="text-sm font-semibold text-[#27f0c7]">{supporting}</span> : null}
          <span className="text-4xl font-medium leading-none">{value}</span>
        </div>
      </div>
    </header>
  )
}

type StatsCardContainerProps = {
  children: ReactNode
  className?: string
}

function StatsCardContainer({ children, className }: StatsCardContainerProps) {
  return (
    <article
      className={clsx(
        'flex min-h-[21rem] flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.45)]',
        className
      )}
    >
      {children}
    </article>
  )
}

function CardFooter({ invert }: { invert?: boolean }) {
  return (
    <footer className={clsx('mt-auto flex items-center justify-between', invert ? 'text-white' : 'text-neutral-700')}>
      <a
        className={clsx(
          'inline-flex items-center gap-2 text-sm font-medium underline-offset-4',
          invert ? 'text-white underline decoration-white/50' : 'text-neutral-800 underline decoration-neutral-600/60'
        )}
        href="#"
      >
        See Details
        <ArrowIcon className={clsx(invert ? 'text-white' : 'text-neutral-800')} />
      </a>
      <div className="flex items-center gap-4 text-xs">
        {LEGEND_ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
            <span className={invert ? 'text-white/80' : 'text-neutral-600'}>{item.label}</span>
          </div>
        ))}
      </div>
    </footer>
  )
}

function LinePoint({ achievement, target }: { achievement: number; target: number }) {
  const achievementHeight = Math.max(achievement / 25, 60)
  const targetHeight = Math.max(target / 30, 80)

  return (
    <div className="relative flex h-40 w-full max-w-[60px] flex-col items-center justify-end">
      <div className="absolute bottom-0 w-px bg-neutral-300" style={{ height: `${Math.max(achievementHeight, targetHeight)}px` }} />
      <div className="relative flex w-full justify-between">
        <span
          className="relative inline-flex size-3 -translate-y-full rounded-full border border-white bg-[#3dddbe] shadow-md"
          style={{ marginBottom: `${achievementHeight}px` }}
        />
        <span
          className="relative inline-flex size-3 -translate-y-full rounded-full border border-white bg-[#ff6b42] shadow-md"
          style={{ marginBottom: `${targetHeight}px` }}
        />
      </div>
    </div>
  )
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={clsx('h-4 w-4', className)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.667 11.333 11.333 4.667M6 4.667h5.333V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function formatK(value: number) {
  return value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value.toString()
}

