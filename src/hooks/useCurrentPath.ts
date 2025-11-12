import { useEffect, useState } from 'react'

const getPathname = () => {
  if (typeof window === 'undefined') {
    return '/'
  }

  return window.location.pathname || '/'
}

export function useCurrentPath() {
  const [path, setPath] = useState<string>(getPathname)

  useEffect(() => {
    const handlePopState = () => {
      setPath(getPathname())
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return path
}




