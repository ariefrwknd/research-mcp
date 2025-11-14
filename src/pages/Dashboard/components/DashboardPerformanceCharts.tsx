import { memo } from 'react'

const detailIconPath =
  'M5.437 5.25h6.563a.75.75 0 0 1 0 1.5H7.06l11.22 11.22a.75.75 0 0 1-1.06 1.06L6 7.81v4.94a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75h.187Z'

const gridPattern =
  'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGRkYiIC8+CiAgICA8L3N2Zz4='

const diagonalPattern =
  'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCA3IDciCiAgICAgIHdpZHRoPSI3IiBoZWlnaHQ9IjciCiAgICA+CiAgICAgIDxwYXRoIGQ9Ik03IDBMMCA3IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMSIgLz4KICAgIDwvc3ZnPg=='

const activationBars = [
  { label: 'Audience', value: '1200', height: 141, color: '#00bf9a', targetStripe: false },
  { label: 'CC', value: '2180', height: 253, color: '#0dd5ae', targetStripe: true },
  { label: 'ECC', value: '1540', height: 171, color: '#47e4c5', targetStripe: false },
  { label: 'PS', value: '1870', height: 212, color: '#73f1d9', targetStripe: false },
  { label: 'Engagement Participant', value: '1050', height: 120, color: '#92ffea', targetStripe: true },
] as const

const dstColumns = [
  { label: 'CC', achievement: '1.6K', achievementHeight: 185, targetHeight: 209 },
  { label: 'ECC', achievement: '1.8K', achievementHeight: 209, targetHeight: 246 },
  { label: 'PS', achievement: '950', achievementHeight: 146, targetHeight: 164 },
  { label: 'VAO', achievement: '1.6K', achievementHeight: 185, targetHeight: 209 },
  { label: 'Pack Introduction', achievement: '1.5K', achievementHeight: 188, targetHeight: 255 },
] as const

const communityRows = [
  { label: 'CC', value: '98/100', width: '95%', accentWidth: '5%' },
  { label: 'ECC', value: '68/100', width: '68%', accentWidth: '32%' },
  { label: 'PS', value: '80/100', width: '82%', accentWidth: '18%' },
] as const

type LegendProps = {
  tone?: 'light' | 'dark'
}

function ChartLegend({ tone = 'light' }: LegendProps) {
  const textColor = tone === 'dark' ? 'text-[#d6d6d6]' : 'text-[#414141]'

  return (
    <div className="flex items-center gap-4 text-xs font-normal">
      <div className={`flex items-center gap-2 ${textColor}`}>
        <span className="size-2 rounded bg-[#3dddbe]" />
        <span>Achievement</span>
      </div>
      <div className={`flex items-center gap-2 ${textColor}`}>
        <span className="size-2 rounded bg-[#ff6b42]" />
        <span>Target</span>
      </div>
    </div>
  )
}

type CardHeaderProps = {
  title: string
  completeness: string
  subtitle?: string
  tone?: 'light' | 'dark'
}

function CardHeader({ title, completeness, subtitle, tone = 'light' }: CardHeaderProps) {
  const textColor = tone === 'dark' ? 'text-white' : 'text-[#1e1e1e]'
  const secondaryText = tone === 'dark' ? 'text-[#a9a9a9]' : 'text-[#1e1e1e]'

  return (
    <header className="flex items-start justify-between gap-6">
      <div className={`flex flex-col gap-1 ${textColor}`}>
        <p className="text-xl font-semibold">{title}</p>
        {subtitle ? <p className="text-sm text-[#0dd5ae]">{subtitle}</p> : null}
      </div>
      <div className="flex flex-col items-end">
        <p className={`text-sm font-medium tracking-tight ${secondaryText}`}>Completeness</p>
        <p className={`text-right font-semibold ${textColor}`}>
          <span className="text-[48px] leading-none">{completeness}</span>
        </p>
      </div>
    </header>
  )
}

function DetailLink({ tone = 'light' }: LegendProps) {
  const textColor = tone === 'dark' ? 'text-[#f6f6f6]' : 'text-[#1e1e1e]'

  return (
    <a
      href="#"
      className={`flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline ${textColor}`}
    >
      See Details
      <svg aria-hidden viewBox="0 0 24 24" className="size-4" focusable="false" fill="currentColor">
        <path d={detailIconPath} />
      </svg>
    </a>
  )
}

function ActivationChart() {
  return (
    <article className="flex h-[488px] w-[458px] flex-col justify-between rounded-3xl bg-white p-8 shadow-sm">
      <CardHeader title="Activation" completeness="95%" />

      <div
        className="relative mt-8 flex h-[293px] items-end justify-between rounded-xl px-4 pb-6 pt-8"
        style={{
          backgroundImage: `url(${gridPattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '16px 16px',
        }}
      >
        {activationBars.map((bar) => (
          <div key={bar.label} className="flex w-[72px] flex-col items-center gap-4">
            <div className="relative flex w-full flex-col items-center justify-end">
              {bar.targetStripe ? (
                <span className="h-2 w-full rounded-sm bg-[#ff6b42]">
                  <span
                    className="block h-full w-full rounded-sm bg-repeat"
                    style={{ backgroundImage: `url(${diagonalPattern})`, backgroundSize: '7px 7px' }}
                  />
                </span>
              ) : (
                <span className="h-2 w-full rounded-sm bg-[#ff6b42]" />
              )}
              <span
                className="mt-1 w-full rounded-lg"
                style={{ height: `${bar.height}px`, backgroundColor: bar.color }}
              />
              <span className="absolute -top-6 right-1 text-xs font-semibold text-[#414141]">{bar.value}</span>
            </div>
            <span className="text-center text-xs font-semibold text-[#414141]">{bar.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <DetailLink />
        <ChartLegend />
      </div>
    </article>
  )
}

function DstChart() {
  return (
    <article className="flex h-[488px] w-[458px] flex-col justify-between rounded-3xl bg-white p-8 shadow-sm">
      <CardHeader title="DST" completeness="87%" />

      <div className="relative mt-8 flex h-[293px] items-end justify-between rounded-xl border border-[#e4e4e4] bg-[#fefefe] px-6 pb-6 pt-10">
        {dstColumns.map((column) => (
          <div key={column.label} className="flex w-[64px] flex-col items-center gap-4">
            <div className="relative flex h-[230px] w-[24px] items-end justify-center">
              <span
                className="absolute bottom-0 left-1/2 w-[3px] -translate-x-1/2 rounded bg-[#ff6b42]"
                style={{ height: `${column.targetHeight}px` }}
              />
              <span
                className="absolute bottom-0 left-1/2 w-[3px] -translate-x-1/2 rounded bg-[#3dddbe]"
                style={{ height: `${column.achievementHeight}px` }}
              />
              <span
                className="absolute left-1/2 size-[14px] -translate-x-1/2 rounded-full border-[3px] border-white bg-[#ff6b42]"
                style={{ bottom: `${column.targetHeight}px` }}
              />
              <span
                className="absolute left-1/2 size-[18px] -translate-x-1/2 rounded-full border-[3px] border-white bg-[#3dddbe]"
                style={{ bottom: `${column.achievementHeight}px` }}
              />
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-[#414141]">
                {column.achievement}
              </span>
            </div>
            <span className="text-center text-xs font-semibold text-[#414141]">{column.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <DetailLink />
        <ChartLegend />
      </div>
    </article>
  )
}

function CommunityChart() {
  return (
    <article className="relative flex h-[488px] w-[458px] flex-col justify-between overflow-hidden rounded-3xl bg-[#111111] p-8 text-white shadow-sm">
      <div className="pointer-events-none absolute -left-40 top-24 h-[380px] w-[380px] rounded-full border border-[#ff9b2f]/30" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full border border-[#ff9b2f]/50" />
      <CardHeader title="SRC Community Activation" completeness="102%" subtitle="+2%" tone="dark" />

      <div className="mt-10 flex flex-col gap-4">
        {communityRows.map((row) => (
          <div key={row.label} className="flex items-center gap-4">
            <span className="w-10 text-xs font-semibold text-[#cfcfcf]">{row.label}</span>
            <div className="relative h-12 flex-1 rounded-full bg-[#1e1e1e]/70">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-[#0dd5ae]"
                style={{ width: row.width }}
              >
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#0c3a2f]">
                  {row.value}
                </span>
              </div>
              <div
                className="absolute right-0 top-0 h-full rounded-r-full bg-[#ff6b42]/60"
                style={{ width: row.accentWidth }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <DetailLink tone="dark" />
        <ChartLegend tone="dark" />
      </div>
    </article>
  )
}

export const DashboardPerformanceCharts = memo(function DashboardPerformanceCharts() {
  return (
    <section aria-label="Performance charts" className="mx-auto mt-12 flex w-full max-w-[1392px] gap-6 px-6">
      <ActivationChart />
      <DstChart />
      <CommunityChart />
    </section>
  )
})


