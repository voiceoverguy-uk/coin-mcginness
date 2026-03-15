import type { Metadata } from 'next'
import { films } from '@/data/films'
import FilmCard from '@/components/FilmCard'

export const metadata: Metadata = {
  title: 'Film Composition - Colin McGinness | Composer',
  description: 'Feature film scores composed by Colin McGinness. Original music for Girl Next, Sacrilege, The Quantum Devil, Angel\'s Tide, Cash, The Dark Side of Society and The Impact.',
  openGraph: {
    title: 'Film Composition - Colin McGinness | Composer',
    description: 'Feature film scores composed by Colin McGinness.',
  },
}

export default function FilmPage() {
  const filmsWithSoundcloud = films.filter(f => f.soundcloudEmbed)

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
              {film.soundcloudUrl && (
                <a
                  href={film.soundcloudUrl}
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
                    <path d="M11.56 8.87V17h8.76c1.85 0 3.35-1.672 3.35-3.5 0-1.836-1.487-3.5-3.35-3.5-.245 0-.488.027-.728.08C19.4 8.002 17.512 6.25 15.23 6.25c-.86 0-1.66.26-2.33.71-.2.14-.34.36-.34.6v1.31zm-1.3-.2V17h.5V8.18c-.18.14-.34.3-.5.49zM8.76 10.1V17h.5V9.63c-.19.14-.35.3-.5.47zM7.26 11.32V17h.5v-5.36c-.18.1-.34.23-.5.38l-.05-.02.05-.68zM5.76 12.5V17h.5v-4.5h-.5zM4.26 13V17h.5v-3.73c-.18.06-.34.16-.5.3V13zM2.76 13.72V17h.5v-3c-.18.08-.34.2-.5.37v.35zM1.26 14.38V17h.5v-2.34c-.18.1-.34.22-.5.38v.34zM0 15.25V17h.76v-1.75H0z" />
                  </svg>
                  SoundCloud
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
