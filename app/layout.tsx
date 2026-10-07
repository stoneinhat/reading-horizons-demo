import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Where Reading Momentum Begins - Reading Horizons',
  description: 'Transform literacy outcomes with research-based reading instruction that empowers educators, engages students, and builds thriving communities.',
  icons: {
    icon: '/favi.svg',
  },
}

const adobeFontsKit = process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {adobeFontsKit ? (
          <>
            <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
            <link rel="stylesheet" href={`https://use.typekit.net/${adobeFontsKit}.css`} />
          </>
        ) : null}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
