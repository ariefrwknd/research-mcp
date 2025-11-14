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

const LAMP_HOP_METRICS: Array<{ label: string; value: number }> = [
  { label: 'IMAGE', value: 63 },
  { label: 'PREMIUM', value: 31 },
  { label: 'REACH', value: 90 },
]

export function ResponsiveSummarySection() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-6 py-10 md:px-10 lg:px-16">
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
      <div className="overflow-hidden rounded-2xl bg-neutral-900 p-6 text-white shadow-lg lg:p-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="max-w-xs space-y-4">
            <h2 className="text-2xl font-semibold">Touchpoint Summary</h2>
            <p className="text-sm text-neutral-400">{SUMMARY_DESCRIPTION}</p>
          </div>
          <div className="flex flex-1 flex-col gap-6 lg:flex-row">
            <SummaryCard
              title="OOH"
              icon={<PinboardIcon className="h-6 w-6 text-[#00d1bd]" />}
              latestUpdate={LATEST_UPDATE}
              className="bg-white/5"
            >
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                {OOH_METRICS.map((metric) => (
                  <MetricCard key={metric.label} label={metric.label} value={metric.value} />
                ))}
              </div>
            </SummaryCard>
            <SummaryCard
              title="LAMP/ HOP"
              icon={<PinboardIcon className="h-6 w-6 text-[#00d1bd]" />}
              latestUpdate={LATEST_UPDATE}
              className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-[#f59f0b]"
            >
              <GradientOrnaments />
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
                {LAMP_HOP_METRICS.map((metric) => (
                  <LampMetricCard key={metric.label} label={metric.label} value={metric.value} />
                ))}
              </div>
            </SummaryCard>
          </div>
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
    <article
      className={clsx('relative flex flex-1 flex-col gap-6 rounded-xl border border-white/10 p-5', className)}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-lg font-semibold">
          {icon}
          <span>{title}</span>
        </div>
        <span className="text-xs text-neutral-300">{latestUpdate}</span>
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
    <div className="flex flex-1 flex-col gap-4 rounded-lg border border-white/20 bg-white/10 p-4">
      <div className="flex items-center justify-between text-sm text-white">
        <span>{label}</span>
        <BillboardIcon className="h-6 w-6 text-white" />
      </div>
      <span className="text-right text-xl font-semibold text-[#0dd5ae]">{value}</span>
    </div>
  )
}

function LampMetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-black/30 p-4 text-white backdrop-blur-sm">
      <span className="text-xs uppercase tracking-[0.1em] text-neutral-300">{label}</span>
      <span className="text-right text-2xl font-semibold text-[#0dd5ae]">{value}</span>
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
      <rect x="4" y="5" width="24" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 23v4M24 23v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

function GradientOrnaments() {
  return (
    <>
      <div className="pointer-events-none absolute -right-10 top-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-6 right-12 h-20 w-20 rounded-full border border-white/30" />
    </>
  )
}

