import type { Metadata } from 'next'
import ShowreelPlayer from '@/components/ShowreelPlayer'

export const metadata: Metadata = {
  title: 'Showreels - Colin McGinness | Composer',
  description: 'Watch showreels from composer Colin McGinness, featuring film scores, trailer syncs, animated syncs and production album compilations.',
  openGraph: {
    title: 'Showreels - Colin McGinness | Composer',
    description: 'Watch showreels from composer Colin McGinness, featuring film scores, trailer syncs, animated syncs and production album compilations.',
  },
}

const showreels = [
  {
    title: 'Film Score Showreel',
    description: 'A showcase of original film scores composed for feature films and screen productions. This reel presents a selection of dramatic, atmospheric and action-driven compositions created for independent and commercial cinema.',
    youtubeId: 'I0fR1Z1G0fs',
  },
  {
    title: 'Trailer Syncs - Colin McGinness Showreel',
    description: 'A compilation of TV and film syncs that my compositions have appeared on. From high-energy trailer spots to dramatic promotional campaigns across global networks.',
    youtubeId: 'xcPHE1P2RVI',
  },
  {
    title: 'Animated Syncs - Colin McGinness Showreel',
    description: 'A compilation of the animated shows and films that my music has appeared in. Covering a range of styles from playful to dramatic across international animated productions.',
    youtubeId: '748HFAPqrwA',
  },
  {
    title: 'Production Music Showreel',
    description: '',
    youtubeId: 'Cv-NxLHCNtc',
  },
  {
    title: 'Colin McGinness Showreel',
    description: '',
    youtubeId: 'wGsmoao33WU',
  },
]

export default function ShowreelsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-cinema-accent font-medium tracking-widest uppercase text-sm mb-3">
            Showreels
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Watch the Showreels
          </h1>
          <p className="text-cinema-muted mt-3 text-lg max-w-2xl">
            A curated selection of showreels showcasing compositions across film, television, trailers and production music.
          </p>
        </div>

        <div className="space-y-16">
          {showreels.map((reel) => (
            <div key={reel.youtubeId} className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-cinema-border">
              <ShowreelPlayer
                youtubeId={reel.youtubeId}
                title={reel.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
