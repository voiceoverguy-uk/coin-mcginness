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
