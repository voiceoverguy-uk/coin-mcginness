import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About - Colin McGinness | Composer',
  description: 'Learn about Colin McGinness, a composer with over two decades of experience creating music for film, television, trailers, documentaries and global sync placements.',
  openGraph: {
    title: 'About - Colin McGinness | Composer',
    description: 'Learn about Colin McGinness, a composer with over two decades of experience creating music for film, television, trailers, documentaries and global sync placements.',
  },
}

const broadcasters = [
  'Netflix', 'BBC', 'Paramount', 'CNN', 'National Geographic',
  'Channel 4', 'Discovery Channel', 'Sky', 'ITV', 'Amazon Prime',
]

const highlights = [
  { label: 'Years of Experience', value: '20+' },
  { label: 'Production Albums', value: '50+' },
  { label: 'Global Sync Placements', value: '500+' },
  { label: 'Feature Film Scores', value: '5+' },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-cinema-accent font-medium tracking-widest uppercase text-sm mb-3">
            About
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Colin McGinness
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-cinema-card via-cinema-border to-cinema-card flex items-center justify-center sticky top-28">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-cinema-border flex items-center justify-center">
                  <svg className="w-10 h-10 text-cinema-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-sm text-cinema-muted uppercase tracking-wider">Colin Portrait</p>
                <p className="text-xs text-cinema-muted mt-1">Placeholder</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Biography</h2>
              <div className="space-y-4 text-cinema-muted leading-relaxed">
                <p>
                  Colin McGinness is a highly experienced composer whose music has featured across film, television, trailers, documentaries and global sync campaigns. With a career spanning more than two decades, his work blends cinematic scale, tension, rhythm and orchestral depth across a wide range of screen productions.
                </p>
                <p>
                  His compositions have been placed with some of the world&apos;s most recognised broadcasters and platforms, including Netflix, BBC, Paramount, CNN, National Geographic, Channel 4, Discovery Channel, and many more. From intense trailer music to nuanced dramatic underscore, his versatility as a composer has made his music a trusted choice for music supervisors, editors and production teams worldwide.
                </p>
                <p>
                  Beyond sync placements, Colin has composed original scores for multiple feature films, bringing emotional depth and sonic identity to independent and commercial cinema. His production music catalogue spans dozens of albums, each crafted to serve the specific needs of screen music across drama, action, thriller, documentary and beyond.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Experience</h2>
              <div className="space-y-4 text-cinema-muted leading-relaxed">
                <p>
                  Colin&apos;s work covers a broad spectrum of screen music disciplines. He has composed for feature films, television series, documentaries, animated productions, trailers, promotional campaigns and advertising. His ability to move between genres and formats has established him as a go-to composer for productions that demand both quality and reliability.
                </p>
                <p>
                  Whether creating large-scale orchestral scores, hybrid electronic compositions or tension-driven thriller underscore, Colin brings a consistent level of craft and professionalism to every project.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="bg-cinema-card border border-cinema-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">{item.value}</div>
                  <div className="text-xs text-cinema-muted mt-1 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Selected Broadcasters & Platforms</h2>
              <div className="flex flex-wrap gap-3">
                {broadcasters.map((name) => (
                  <span
                    key={name}
                    className="px-4 py-2 bg-cinema-card border border-cinema-border rounded-lg text-sm text-cinema-muted"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-cinema-accent hover:bg-cinema-accent-hover text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cinema-accent/25"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
