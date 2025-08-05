import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Inter, Lato, Roboto } from "next/font/google" // Import Roboto
import "./globals.css"
import { ThemeProviderFixed } from "@/components/theme-provider-fixed"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" }) // Updated weight
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-roboto" }) // Define Roboto

export const metadata: Metadata = {
  title: "Incuora Landing Page",
  description: "Informative website landing page for Incuora.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-inter: ${inter.style.fontFamily};
  --font-lato: ${lato.style.fontFamily};
  --font-roboto: ${roboto.style.fontFamily};
}
        `}</style>
      </head>
      <body className={`${inter.variable} ${lato.variable} ${roboto.variable} scroll-smooth`}>
        <ThemeProviderFixed attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProviderFixed>
      </body>
    </html>
  )
}
