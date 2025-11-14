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
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 pb-12 sm:gap-6 sm:px-6 sm:pb-16 md:px-8 lg:px-12">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      <div className="relative flex min-h-[200px] items-end justify-between gap-2 overflow-hidden bg-white px-2 pb-4 pt-3 sm:min-h-[224px] sm:gap-3 sm:px-4 sm:pb-6 sm:pt-4">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.08) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-transparent" />
        <div className="relative flex h-full w-full items-end justify-between gap-2 sm:gap-4">
          {ACTIVATION_BARS.map((bar) => (
            <div key={bar.label} className="flex flex-1 flex-col items-center gap-1.5 sm:gap-2">
              <div className="relative flex h-full w-full max-w-full items-end justify-center sm:max-w-[60px]">
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
                    <span className="pt-2 text-[10px] font-semibold text-[#1f1f1f] sm:pt-3 sm:text-xs">
                      {bar.value}
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-neutral-700 sm:text-xs">{bar.label}</span>
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
      <div className="flex min-h-[200px] flex-col sm:min-h-[224px]">
        <div className="flex h-full flex-col overflow-x-auto rounded-lg border border-[#c5c5c5] bg-[#f3f3f3] px-2 py-3 sm:px-4 sm:py-5">
          <div className="flex h-full min-w-fit items-end">
            {DST_POINTS.map((point, index) => (
              <div
                key={point.label}
                className={clsx(
                  'flex h-full min-w-[60px] flex-1 flex-col items-center px-2 sm:min-w-0 sm:px-4',
                  index < DST_POINTS.length - 1 && 'border-r border-dashed border-[#bebebe]'
                )}
              >
                <div className="flex min-h-[180px] w-full items-end justify-center sm:min-h-[208px]">
                  <LinePoint 
                    achievement={point.achievement} 
                    target={point.target} 
                    maxValue={DST_MAX_VALUE}
                    chartHeight={180}
                    desktopChartHeight={DST_CHART_HEIGHT}
                  />
                </div>
                <span className="mt-2 w-full truncate text-center text-[10px] font-semibold text-neutral-600 sm:mt-3 sm:text-xs">
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
    <StatsCardContainer className="relative overflow-hidden !bg-[#1e1e1e] text-white">
      <div className="pointer-events-none absolute -left-32 bottom-[-120px] h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(255,157,0,0.6)_0%,_rgba(255,157,0,0.15)_40%,_transparent_70%)] sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0%,_transparent_70%)]" />
      <CardHeader
        title="SRC Community Activation"
        subtitle="Completeness"
        value="102%"
        supporting="+2%"
        invert
      />
      <div className="relative mt-2 flex flex-col gap-2 bg-transparent sm:mt-3">
        {SRC_ROWS.map((row) => (
          <div key={row.label} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <span className="w-full text-[10px] font-semibold uppercase tracking-tight text-white/80 sm:w-12 sm:text-xs">
              {row.label}
            </span>
            <div className="relative flex-1 h-[48px] overflow-hidden border border-[#2f2f2f] bg-[#2b2b2b] sm:h-[62px]">
              <div
                className="flex h-full items-center justify-end px-2 sm:px-3"
                style={{ width: getProgressWidth(row.achievement), backgroundColor: row.fillColor }}
              >
                <span className="text-[10px] font-bold text-[#414141] sm:text-xs">{row.achievement}</span>
              </div>
              <div className="absolute inset-y-0 right-0 w-1.5 bg-[#ff6b42] sm:w-2" />
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
    <header
      className={clsx(
        'flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4',
        invert ? 'text-white' : 'text-neutral-900'
      )}
    >
      <div className="flex-1">
        <h3 className="text-base font-bold leading-tight whitespace-pre-line sm:text-lg">{title}</h3>
      </div>
      <div className="text-left sm:text-right">
        <p className={clsx('text-xs font-medium sm:text-sm', invert ? 'text-white/80' : 'text-neutral-700')}>
          {subtitle}
        </p>
        <div className="flex items-baseline gap-2 sm:justify-end">
          {supporting ? (
            <span className="text-xs font-semibold text-[#00bf9a] sm:text-sm">{supporting}</span>
          ) : null}
          <span className="text-3xl font-medium leading-none sm:text-4xl md:text-5xl">{value}</span>
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
        'flex min-h-[21rem] flex-col gap-3 rounded-2xl bg-white p-4 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.45)] sm:gap-4 sm:p-6',
        className
      )}
    >
      {children}
    </article>
  )
}

function CardFooter({ invert }: { invert?: boolean }) {
  return (
    <footer
      className={clsx(
        'mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4',
        invert ? 'text-white' : 'text-neutral-700'
      )}
    >
      <a
        className={clsx(
          'inline-flex items-center gap-1.5 text-xs font-medium underline-offset-4 sm:gap-2 sm:text-sm',
          invert ? 'text-white underline decoration-white/50' : 'text-neutral-800 underline decoration-neutral-600/60'
        )}
        href="#"
      >
        See Details
        <ArrowIcon className={clsx('h-3 w-3 sm:h-4 sm:w-4', invert ? 'text-white' : 'text-neutral-800')} />
      </a>
      <div className="flex flex-wrap items-center gap-3 text-[10px] sm:gap-4 sm:text-xs">
        {LEGEND_ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5 sm:gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2" style={{ backgroundColor: item.color }} />
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
  chartHeight,
  desktopChartHeight,
}: {
  achievement: number
  target: number
  maxValue: number
  chartHeight: number
  desktopChartHeight: number
}) {
  const scale = (value: number, height: number) => {
    if (maxValue <= 0) return DST_MIN_COLUMN_HEIGHT
    return Math.max(Math.round((value / maxValue) * height), DST_MIN_COLUMN_HEIGHT)
  }

  // Calculate heights for mobile and desktop
  const mobileAchievementHeight = scale(achievement, chartHeight)
  const mobileTargetHeight = scale(target, chartHeight)
  const desktopAchievementHeight = scale(achievement, desktopChartHeight)
  const desktopTargetHeight = scale(target, desktopChartHeight)
  
  const mobileColumnHeight = Math.max(mobileAchievementHeight, mobileTargetHeight)
  const desktopColumnHeight = Math.max(desktopAchievementHeight, desktopTargetHeight)

  return (
    <>
      {/* Mobile version */}
      <div className="flex w-full justify-between gap-1 sm:hidden">
        <div className="flex w-px flex-col items-end justify-end" style={{ height: `${mobileColumnHeight}px` }}>
          <span className="mb-1.5 text-[10px] font-semibold text-neutral-700">{formatK(achievement)}</span>
          <div className="relative w-full bg-[#3dddbe]" style={{ height: `${mobileAchievementHeight}px` }}>
            <span className="absolute -top-1 left-1/2 inline-flex size-2.5 -translate-x-1/2 rounded-full border border-white bg-[#3dddbe] shadow-md" />
          </div>
        </div>
        <div className="flex w-px flex-col items-end justify-end" style={{ height: `${mobileColumnHeight}px` }}>
          <span className="mb-1.5 text-[10px] font-semibold text-[#ff6b42]">{formatK(target)}</span>
          <div className="relative w-full bg-[#ff6b42]" style={{ height: `${mobileTargetHeight}px` }}>
            <span className="absolute -top-1 left-1/2 inline-flex size-2.5 -translate-x-1/2 rounded-full border border-white bg-[#ff6b42] shadow-md" />
          </div>
        </div>
      </div>
      {/* Desktop version */}
      <div className="hidden w-full justify-between gap-2 sm:flex">
        <div className="flex w-px flex-col items-end justify-end" style={{ height: `${desktopColumnHeight}px` }}>
          <span className="mb-2 text-xs font-semibold text-neutral-700">{formatK(achievement)}</span>
          <div className="relative w-full bg-[#3dddbe]" style={{ height: `${desktopAchievementHeight}px` }}>
            <span className="absolute -top-1.5 left-1/2 inline-flex size-3 -translate-x-1/2 rounded-full border border-white bg-[#3dddbe] shadow-md" />
          </div>
        </div>
        <div className="flex w-px flex-col items-end justify-end" style={{ height: `${desktopColumnHeight}px` }}>
          <span className="mb-2 text-xs font-semibold text-[#ff6b42]">{formatK(target)}</span>
          <div className="relative w-full bg-[#ff6b42]" style={{ height: `${desktopTargetHeight}px` }}>
            <span className="absolute -top-1.5 left-1/2 inline-flex size-3 -translate-x-1/2 rounded-full border border-white bg-[#ff6b42] shadow-md" />
          </div>
        </div>
      </div>
    </>
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

