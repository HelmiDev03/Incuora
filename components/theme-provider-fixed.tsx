'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProviderFixed({
  children,
  ...props
}: {
  children: React.ReactNode
  [key: string]: any
}) {
  const [mounted, setMounted] = React.useState(false)

  // Only run on client side
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Avoid hydration mismatch by only rendering the provider when mounted on client
  if (!mounted) {
    return <>{children}</>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
