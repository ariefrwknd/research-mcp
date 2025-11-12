const isBrowser = typeof window !== 'undefined'

export function navigateTo(path: string) {
  if (!isBrowser || !path) {
    return
  }

  if (window.location.pathname === path) {
    return
  }

  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}




