import type { Metadata } from 'next'
import { films } from '@/data/films'
import FilmCard from '@/components/FilmCard'

export const metadata: Metadata = {
  title: 'Film Scores',
  description: 'Original scores for Girl Next (3× festival winner), The Quantum Devil, Sacrilege, Angel\'s Tide and more. Composer for independent and commercial cinema.',
  openGraph: {
    title: 'Film Scores | Colin McGinness Composer',
    description: 'Original scores for Girl Next (3× festival winner), The Quantum Devil, Sacrilege, Angel\'s Tide and more. Composer for independent and commercial cinema.',
  },
}

export default function FilmPage() {
  const filmsWithSoundcloud = films.filter(f => f.soundcloudEmbed)

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <p className="text-cinema-accent font-medium tracking-widest uppercase text-sm mb-3">
            Film
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Film Composition
          </h1>
          <p className="text-cinema-muted mt-4 text-lg max-w-2xl leading-relaxed">
            Selected feature films and screen projects featuring original music by Colin McGinness.
          </p>
        </div>

        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scroll-rail">
          {films.map((film) => (
            <div key={film.slug} className="flex-shrink-0 w-[160px] sm:w-[180px] md:w-[200px]">
              <FilmCard film={film} />
              {film.trailerUrl && (
                <a
                  href={film.trailerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 mt-2 px-3 py-1.5 text-xs text-cinema-muted hover:text-white transition-colors rounded-md border border-cinema-border hover:border-cinema-accent/50 bg-cinema-card/50"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
                  </svg>
                  View Trailer
                </a>
              )}
            </div>
          ))}
        </div>

        {filmsWithSoundcloud.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Film Soundtracks</h2>
            <p className="text-cinema-muted mb-8">Listen to original film scores composed by Colin McGinness</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filmsWithSoundcloud.map((film) => (
                <div
                  key={film.slug}
                  className="rounded-xl bg-cinema-card border border-cinema-border overflow-hidden"
                >
                  <div className="flex items-center gap-4 p-4 pb-0">
                    <img
                      src={film.poster}
                      alt={film.title}
                      className="w-16 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-white font-bold text-lg">{film.title}</h3>
                      <p className="text-cinema-muted text-sm mt-1">Original Soundtrack</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <iframe
                      width="100%"
                      height="300"
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src={film.soundcloudEmbed}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
