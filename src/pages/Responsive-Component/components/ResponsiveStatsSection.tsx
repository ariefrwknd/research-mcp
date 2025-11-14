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

const TARGET_PATTERN =
  'repeating-linear-gradient(-45deg, rgba(250,175,0,0.85) 0px, rgba(250,175,0,0.85) 4px, rgba(250,175,0,0.35) 4px, rgba(250,175,0,0.35) 8px)'

type ActivationBar = {
  label: string
  value: number
  achievementHeight: number
  fillColor: string
  targetLineHeight: number
  overshootHeight?: number
}

const ACTIVATION_BARS = [
  {
    label: 'Audience',
    value: 1200,
    achievementHeight: 140,
    fillColor: '#0dd5ae',
    targetLineHeight: 8,
  },
  {
    label: 'CC',
    value: 1200,
    achievementHeight: 178,
    fillColor: '#0dd5ae',
    targetLineHeight: 8,
    overshootHeight: 24,
  },
  {
    label: 'ECC',
    value: 1200,
    achievementHeight: 150,
    fillColor: '#47e4c5',
    targetLineHeight: 8,
  },
  {
    label: 'PS',
    value: 1200,
    achievementHeight: 190,
    fillColor: '#73f1d9',
    targetLineHeight: 8,
  },
  {
    label: 'Engagement',
    value: 1200,
    achievementHeight: 110,
    fillColor: '#92ffea',
    targetLineHeight: 8,
    overshootHeight: 24,
  },
] satisfies ReadonlyArray<ActivationBar>

type DstPoint = {
  label: string
  achievement: number
  target: number
}

const DST_POINTS = [
  { label: 'CC', achievement: 1600, target: 1800 },
  { label: 'ECC', achievement: 950, target: 950 },
  { label: 'PS', achievement: 1600, target: 1800 },
  { label: 'VAO', achievement: 2200, target: 2500 },
  { label: 'Pack Intro', achievement: 1100, target: 1500 },
] satisfies ReadonlyArray<DstPoint>

const DST_MAX_VALUE = DST_POINTS.reduce((acc, point) => Math.max(acc, point.achievement, point.target), 0)
const DST_CHART_HEIGHT = 208
const DST_MIN_COLUMN_HEIGHT = 48

const SRC_ROWS = [
  { label: 'CC', achievement: '98/100', fillColor: '#0dd5ae' },
  { label: 'ECC', achievement: '68/100', fillColor: '#47e4c5' },
  { label: 'PS', achievement: '80/100', fillColor: '#73f1d9' },
] as const

export function ResponsiveStatsSection() {
  return (
    <section className="mx-auto flex w-full flex-col gap-6 px-6 pb-16 md:px-10 lg:px-16">
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
      <div className="relative flex h-56 items-end justify-between gap-3 overflow-hidden bg-white px-4 pb-6 pt-4">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(to right, rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.08) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-transparent" />
        <div className="relative flex h-full w-full items-end justify-between gap-[18px]">
          {ACTIVATION_BARS.map((bar) => (
            <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
              <div className="relative flex h-full w-full max-w-[60px] items-end justify-center">
                <div className="flex w-full flex-col justify-end">
                  {bar.overshootHeight ? (
                    <div
                      className="w-full"
                      style={{
                        height: `${bar.overshootHeight}px`,
                        backgroundColor: '#faaf00',
                        backgroundImage: TARGET_PATTERN,
                      }}
                    />
                  ) : null}
                  <div
                    className="w-full"
                    style={{ height: `${bar.targetLineHeight}px`, backgroundColor: '#ff6b42' }}
                  />
                  <div
                    className="flex w-full flex-col items-center justify-start"
                    style={{
                      height: `${bar.achievementHeight}px`,
                      backgroundColor: bar.fillColor,
                    }}
                  >
                    <span className="pt-3 text-xs font-semibold text-[#1f1f1f]">{bar.value}</span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-neutral-700">{bar.label}</span>
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
      <div className="flex h-56 flex-col">
        <div className="flex h-full flex-col rounded-lg border border-[#c5c5c5] bg-[#f3f3f3] px-4 py-5">
          <div className="flex h-full items-end">
            {DST_POINTS.map((point, index) => (
              <div
                key={point.label}
                className={clsx(
                  'flex h-full flex-1 flex-col items-center px-4',
                  index < DST_POINTS.length - 1 && 'border-r border-dashed border-[#bebebe]'
                )}
              >
                <div className="flex h-[208px] w-full items-end justify-center">
                  <LinePoint achievement={point.achievement} target={point.target} maxValue={DST_MAX_VALUE} />
                </div>
                <span className="mt-3 w-full truncate text-center text-xs font-semibold text-neutral-600">
                  {point.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CardFooter />
    </StatsCardContainer>
  )
}

function SrcStatsCard() {
  const getProgressWidth = (achievement: string) => {
    const [achieved, total] = achievement.split('/').map(Number)
    if (!Number.isFinite(achieved) || !Number.isFinite(total) || total <= 0) {
      return '0%'
    }

    const ratio = Math.min(Math.max(achieved / total, 0), 1)
    return `${Math.round(ratio * 100)}%`
  }

  return (
    <StatsCardContainer className="relative overflow-hidden bg-[#1e1e1e] text-white">
      <div className="pointer-events-none absolute -left-32 bottom-[-120px] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(255,157,0,0.6)_0%,_rgba(255,157,0,0.15)_40%,_transparent_70%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0%,_transparent_70%)]" />
      <CardHeader
        title="SRC Community Activation"
        subtitle="Completeness"
        value="102%"
        supporting="+2%"
        invert
      />
      <div className="relative mt-3 flex flex-col gap-2 bg-transparent">
        {SRC_ROWS.map((row) => (
          <div key={row.label} className="flex items-center gap-4">
            <span className="w-12 text-xs font-semibold uppercase tracking-tight text-white/80">{row.label}</span>
            <div className="relative flex-1 h-[62px] overflow-hidden border border-[#2f2f2f] bg-[#2b2b2b]">
              <div
                className="flex h-full items-center justify-end px-3"
                style={{ width: getProgressWidth(row.achievement), backgroundColor: row.fillColor }}
              >
                <span className="text-xs font-bold text-[#414141]">{row.achievement}</span>
              </div>
              <div className="absolute inset-y-0 right-0 w-2 bg-[#ff6b42]" />
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
        <h3 className="text-lg font-bold leading-tight whitespace-pre-line">{title}</h3>
      </div>
      <div className="text-right">
        <p className={clsx('text-sm font-medium', invert ? 'text-white/80' : 'text-neutral-700')}>{subtitle}</p>
        <div className="flex items-baseline justify-end gap-2">
          {supporting ? <span className="text-sm font-semibold text-[#00bf9a]">{supporting}</span> : null}
          <span className="text-5xl font-medium leading-none">{value}</span>
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

function LinePoint({
  achievement,
  target,
  maxValue,
}: {
  achievement: number
  target: number
  maxValue: number
}) {
  const scale = (value: number) => {
    if (maxValue <= 0) return DST_MIN_COLUMN_HEIGHT
    return Math.max(Math.round((value / maxValue) * DST_CHART_HEIGHT), DST_MIN_COLUMN_HEIGHT)
  }

  const achievementHeight = scale(achievement)
  const targetHeight = scale(target)
  const columnHeight = Math.max(achievementHeight, targetHeight)

  return (
    <div className="flex w-full justify-between" style={{ height: `${columnHeight}px` }}>
      <div className="flex w-px flex-col items-center justify-end">
        <span className="mb-2 text-xs font-semibold text-neutral-700">{formatK(achievement)}</span>
        <div className="relative w-full bg-[#3dddbe]" style={{ height: `${achievementHeight}px` }}>
          <span className="absolute -top-1.5 left-1/2 inline-flex size-3 -translate-x-1/2 rounded-full border border-white bg-[#3dddbe] shadow-md" />
        </div>
      </div>
      <div className="flex w-px flex-col items-center justify-end">
        <span className="mb-2 text-xs font-semibold text-[#ff6b42]">{formatK(target)}</span>
        <div className="relative w-full bg-[#ff6b42]" style={{ height: `${targetHeight}px` }}>
          <span className="absolute -top-1.5 left-1/2 inline-flex size-3 -translate-x-1/2 rounded-full border border-white bg-[#ff6b42] shadow-md" />
        </div>
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

