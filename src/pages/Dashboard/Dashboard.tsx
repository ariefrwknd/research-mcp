import { navigateTo } from '../../services/navigation'
import { DashboardNavbar } from './components/DashboardNavbar'
import { DashboardSummarySection } from './components/DashboardSummarySection'
import { DashboardPerformanceCharts } from './components/DashboardPerformanceCharts'

const FIGMA_LOGO_SRC =
  'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFRUUiIC8+CiAgICA8L3N2Zz4='

const FIGMA_AVATAR_SRC =
  'data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFRUUiIC8+CiAgICA8L3N2Zz4='

const navigationLinks = [
  { href: '/', label: 'Database' },
  { href: '/responsive', label: 'Responsive' },
  { href: '/dashboard/visual-plan', label: 'Visual Plan' },
  { href: '/dashboard/report', label: 'Report' },
  { href: '/dashboard/administration', label: 'Administration' },
]

export function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <DashboardNavbar
        logoSrc={FIGMA_LOGO_SRC}
        logoAlt="Smart brand"
        links={navigationLinks}
        avatarSrc={FIGMA_AVATAR_SRC}
        avatarAlt="Administrator"
        onNavigate={navigateTo}
      />

      <DashboardSummarySection />

      <DashboardPerformanceCharts />
    </div>
  )
}


