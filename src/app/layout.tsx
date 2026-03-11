import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Colin McGinness - Composer for Film, Television and Trailers',
  description: 'Explore the work of Colin McGinness, a composer creating music for film, television, trailers, documentaries and global sync placements.',
  openGraph: {
    title: 'Colin McGinness - Composer for Film, Television and Trailers',
    description: 'Explore the work of Colin McGinness, a composer creating music for film, television, trailers, documentaries and global sync placements.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cinema-dark text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
