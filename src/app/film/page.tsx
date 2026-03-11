import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Film - Colin McGinness | Composer',
  description: 'Feature film scores composed by Colin McGinness. Original music for Sacrilege, Girl Next, The Quantum Devil, The Dark Side of Society and Angel\'s Tide.',
  openGraph: {
    title: 'Film - Colin McGinness | Composer',
    description: 'Feature film scores composed by Colin McGinness.',
  },
}

const films = [
  {
    title: 'Sacrilege',
    slug: 'sacrilege',
    year: '',
    description: 'Original score composed for this feature film. Full details, soundtrack information and trailer to be added.',
  },
  {
    title: 'Girl Next',
    slug: 'girl-next',
    year: '',
    description: 'Original score composed for this feature film. Full details, soundtrack information and trailer to be added.',
  },
  {
    title: 'The Quantum Devil',
    slug: 'the-quantum-devil',
    year: '',
    description: 'Original score composed for this feature film. Full details, soundtrack information and trailer to be added.',
  },
  {
    title: 'The Dark Side of Society',
    slug: 'the-dark-side-of-society',
    year: '',
    description: 'Original score composed for this feature film. Full details, soundtrack information and trailer to be added.',
  },
  {
    title: "Angel's Tide",
    slug: 'angels-tide',
    year: '',
    description: 'Original score composed for this feature film. Full details, soundtrack information and trailer to be added.',
  },
]

export default function FilmPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-cinema-accent font-medium tracking-widest uppercase text-sm mb-3">
            Film
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Feature Film Scores
          </h1>
          <p className="text-cinema-muted mt-3 text-lg max-w-2xl">
            Original scores composed for feature films. Each project reflects a unique sonic identity crafted to serve the story.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {films.map((film) => (
            <div key={film.slug} id={film.slug} className="group">
              <div className="relative rounded-xl overflow-hidden bg-cinema-card border border-cinema-border transition-all duration-300 group-hover:border-cinema-accent/30 group-hover:shadow-xl group-hover:shadow-black/50">
                <div className="aspect-[2/3] flex items-center justify-center bg-gradient-to-br from-cinema-card via-cinema-border/30 to-cinema-card">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cinema-border flex items-center justify-center">
                      <svg className="w-8 h-8 text-cinema-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <p className="text-xs text-cinema-muted uppercase tracking-wider">Feature Film Poster</p>
                    <p className="text-xs text-cinema-muted mt-1">Placeholder</p>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-white">{film.title}</h2>
                  <p className="text-cinema-muted text-sm mt-2 leading-relaxed">{film.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
