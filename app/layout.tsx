import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Where Reading Momentum Begins - Reading Horizons',
  description: 'Transform literacy outcomes with research-based reading instruction that empowers educators, engages students, and builds thriving communities.',
  icons: {
    icon: '/favi.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
