import clsx from 'clsx'
import type { ReactNode } from 'react'

const SUMMARY_TITLE = '# Dashboard'
const SUMMARY_DESCRIPTION =
  'This includes all stages of the customer journey: before, during, and after a purchase.'
const LATEST_UPDATE = 'Latest Data Update: 30/10/2025 09.00'

const OOH_METRICS: Array<{ label: string; value: number }> = [
  { label: 'Billboard', value: 48 },
  { label: 'Mini Billboard', value: 72 },
  { label: 'Baliho', value: 81 },
  { label: 'Street Signage', value: 106 },
]

const LAMP_HOP_METRICS: Array<{ category: string; label: string; value: number }> = [
  { category: 'LAMP/ HOP', label: 'IMAGE', value: 63 },
  { category: 'LAMP/ HOP', label: 'PREMIUM', value: 31 },
  { category: 'HOP', label: 'REACH', value: 90 },
]

export function ResponsiveSummarySection() {
  return (
    <section className="mx-auto flex w-full flex-1 flex-col gap-6 px-6 py-10 md:px-10 lg:px-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 md:text-[2rem]">{SUMMARY_TITLE}</h1>
        <div className="flex flex-wrap items-center gap-3">
          <CircleButton ariaLabel="Refresh filters">
            <RefreshIcon />
          </CircleButton>
          <PillButton label="Zone" value="All" />
          <PillButton label="Region" value="All" />
          <PillButton label="Area" value="All" />
          <CircleButton ariaLabel="Search dashboard">
            <SearchIcon />
          </CircleButton>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-[16px] bg-black p-4 text-white">
        <div className="pointer-events-none absolute bottom-0 right-0 h-[214px] w-[401px] bg-[radial-gradient(circle_at_bottom_right,_rgba(245,159,11,0.6)_0%,_rgba(245,159,11,0.2)_30%,_transparent_60%)]" />
        <div className="relative flex flex-wrap gap-4">
          <div className="flex min-w-[326px] flex-1 flex-col gap-6 rounded-[8px] p-4">
            <h2 className="text-2xl font-semibold text-white">Touchpoint Summary</h2>
            <p className="max-w-[220px] text-sm leading-[21px] text-[#707070] tracking-[-0.238px]">
              {SUMMARY_DESCRIPTION}
            </p>
          </div>
          <SummaryCard
            title="OOH"
            icon={<PinboardIcon className="h-6 w-6 text-[#00d1bd]" />}
            latestUpdate={LATEST_UPDATE}
            className="min-w-[295px] flex-1 bg-neutral-700"
          >
            <div className="flex flex-wrap gap-4">
              {OOH_METRICS.map((metric) => (
                <MetricCard key={metric.label} label={metric.label} value={metric.value} />
              ))}
            </div>
          </SummaryCard>
          <SummaryCard
            title="LAMP/ HOP"
            icon={<PinboardIcon className="h-6 w-6 text-[#00d1bd]" />}
            latestUpdate={LATEST_UPDATE}
            className="relative min-w-[295px] flex-1 overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(245,159,11,0.4)_0%,_rgba(245,159,11,0.1)_40%,_transparent_70%)]" />
            <div className="relative flex flex-wrap gap-4">
              {LAMP_HOP_METRICS.map((metric) => (
                <LampMetricCard
                  key={`${metric.category}-${metric.label}`}
                  category={metric.category}
                  label={metric.label}
                  value={metric.value}
                />
              ))}
            </div>
          </SummaryCard>
        </div>
      </div>
    </section>
  )
}

type SummaryCardProps = {
  title: string
  icon: ReactNode
  latestUpdate: string
  className?: string
  children: ReactNode
}

function SummaryCard({ title, icon, latestUpdate, className, children }: SummaryCardProps) {
  return (
    <article className={clsx('relative flex flex-1 flex-col gap-6 rounded-[8px] p-4', className)}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xl font-bold text-white">
          {icon}
          <span>{title}</span>
        </div>
        <span className="text-xs font-normal text-[darkgrey] tracking-[-0.204px]">{latestUpdate}</span>
      </div>
      {children}
    </article>
  )
}

type MetricCardProps = {
  label: string
  value: number
}

function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="flex min-w-[90px] flex-1 flex-col gap-4 rounded-[8px] border border-[#707070] px-2 py-3">
      <span className="text-xs font-normal leading-[21px] text-white tracking-[-0.204px]">{label}</span>
      <div className="flex items-end justify-between">
        <BillboardIcon className="h-8 w-8 shrink-0 text-white" />
        <span className="text-xl font-semibold leading-[21px] text-[#0dd5ae] tracking-[-0.34px]">{value}</span>
      </div>
    </div>
  )
}

type LampMetricCardProps = {
  category: string
  label: string
  value: number
}

function LampMetricCard({ category, label, value }: LampMetricCardProps) {
  return (
    <div
      className="flex min-w-[90px] flex-1 flex-col gap-4 rounded-[8px] px-2 pb-3 pt-2 text-white"
      style={{ backgroundColor: 'rgba(65,65,65,0.85)', backdropFilter: 'blur(2px)' }}
    >
      <div className="flex flex-col gap-0">
        <span className="text-xs font-normal leading-[21px] text-white tracking-[-0.204px]">{category}</span>
        <span className="text-base font-semibold leading-[21px] text-white tracking-[-0.272px]">{label}</span>
      </div>
      <div className="flex items-center justify-end">
        <span className="text-xl font-semibold leading-[21px] text-[#0dd5ae] tracking-[-0.34px]">{value}</span>
      </div>
    </div>
  )
}

type CircleButtonProps = {
  children: ReactNode
  ariaLabel: string
}

function CircleButton({ children, ariaLabel }: CircleButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-400 bg-white text-neutral-900 shadow-sm transition hover:bg-neutral-100"
    >
      {children}
    </button>
  )
}

type PillButtonProps = {
  label: string
  value: string
}

function PillButton({ label, value }: PillButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-neutral-500 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
    >
      <span>{label}:</span>
      <span>{value}</span>
    </button>
  )
}

type IconProps = {
  className?: string
}

function PinboardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3h14a1 1 0 0 1 1 1v11h-6.5V22l-3-3-3 3v-7H4V4a1 1 0 0 1 1-1Z" />
    </svg>
  )
}

function BillboardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="28" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="5" y="16" width="4" height="11" fill="currentColor" />
      <rect x="23" y="16" width="4" height="11" fill="currentColor" />
    </svg>
  )
}

function RefreshIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? 'h-5 w-5'} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 12a8 8 0 0 1 13.657-5.657L20 8.686M20 12a8 8 0 0 1-13.657 5.657L4 15.314"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 8.686V5h-3.686M4 15.314V19h3.686" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? 'h-5 w-5'} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="m20 20-2.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}


