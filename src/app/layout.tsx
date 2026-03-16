import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://colinmcginness.com'),
  title: {
    default: 'Colin McGinness | Award-Winning Film & TV Composer',
    template: '%s | Colin McGinness Composer',
  },
  description: 'Award-winning composer creating original scores for feature films, television, trailers and global sync placements. 90+ production albums. Syncs on BBC, Disney, HBO and more.',
  openGraph: {
    title: 'Colin McGinness | Award-Winning Film & TV Composer',
    description: 'Award-winning composer creating original scores for feature films, television, trailers and global sync placements. 90+ production albums. Syncs on BBC, Disney, HBO and more.',
    type: 'website',
    siteName: 'Colin McGinness - Composer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colin McGinness | Award-Winning Film & TV Composer',
    description: 'Award-winning composer creating original scores for feature films, television, trailers and global sync placements. 90+ production albums. Syncs on BBC, Disney, HBO and more.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Colin McGinness',
  jobTitle: 'Film & Television Composer',
  url: 'https://colinmcginness.com',
  sameAs: [
    'https://www.instagram.com/colinmcginnessmusic/',
    'https://www.youtube.com/@bazzaboy99',
    'https://open.spotify.com/artist/3RohZ0dNhSc7FzsnZkB1Hc',
    'https://www.linkedin.com/in/colin-mcginness-435a044b/',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-cinema-dark text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
