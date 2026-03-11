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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {films.map((film) => (
            <FilmCard key={film.slug} film={film} />
          ))}
        </div>
      </div>
    </div>
  )
}
