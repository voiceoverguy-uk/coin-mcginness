import Link from 'next/link'
import VideoCard from '@/components/VideoCard'
import SyncCard from '@/components/SyncCard'
import FilmCard from '@/components/FilmCard'
import AlbumCoversRail from '@/components/AlbumCoversRail'
import TVSyncRail from '@/components/TVSyncRail'
import HeroShowreel from '@/components/HeroShowreel'
import { AwardCardSmall } from '@/components/AwardCard'
import { featuredAwards } from '@/data/awards'
import { films } from '@/data/films'

const showreels = [
  {
    title: 'Trailer Syncs Showreel',
    description: 'A compilation of TV and film syncs that my compositions have appeared on.',
    youtubeUrl: 'https://www.youtube.com/watch?v=xcPHE1P2RVI',
  },
  {
    title: 'Animated Syncs Showreel',
    description: 'A compilation of the animated shows and films that my music has appeared in.',
    youtubeUrl: 'https://www.youtube.com/watch?v=748HFAPqrwA',
  },
  {
    title: 'Album Covers in Motion',
    description: 'A compilation of the many production albums released over the years.',
    youtubeUrl: 'https://www.youtube.com/watch?v=-zMy-Q0ZUrQ',
  },
  {
    title: 'Composer Showcase - Film Trailers',
    description: 'A showcase of compositions featured in major film trailers.',
    youtubeUrl: 'https://www.youtube.com/watch?v=pyzJQOv2WP0',
  },
]

const syncPlacements = [
  {
    title: 'Joe Wicks: Licensed to Kill',
    caption: 'Track "Global Surveillance" appears in this Channel 4 documentary.',
    youtubeUrl: 'https://www.youtube.com/watch?v=U_QRcQPDnNQ',
  },
  {
    title: 'Jeopardy TV Spot Sync',
    caption: 'Track "No More Heroes" appears on this promo spot for Jeopardy.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nifjxRKTyWQ',
  },
  {
    title: "I'm a Celebrity, Get Me Out of Here",
    caption: '"Call For Backup" provides energy for an action-packed sequence on the UK\'s biggest reality show.',
    youtubeUrl: 'https://www.youtube.com/watch?v=LV3yhr8_-oM',
  },
  {
    title: 'Fukushima: Days That Shook The World',
    caption: 'A track from the NUCLEAR WAR album appears on this 2-part Channel 4 documentary.',
    youtubeUrl: 'https://www.youtube.com/watch?v=66G4Ws5IPsw',
  },
  {
    title: 'Dexter Resurrection - TV Promo Spot',
    caption: 'Track: "Hidden Risks"',
    youtubeUrl: 'https://www.youtube.com/watch?v=ruB_hwE5Y1k',
  },
  {
    title: 'BBC News 24 - Promo Spot',
    caption: 'Music featured on the BBC News 24 promo campaign.',
    youtubeUrl: 'https://www.youtube.com/watch?v=x98XsvSnP8c',
  },
  {
    title: 'Shark Week - Great White Reign of Terror',
    caption: '7 tracks from the INTENSITY album appear in this Discovery Channel feature.',
    youtubeUrl: 'https://www.youtube.com/watch?v=8-gDJeb44rs',
  },
]

const credits = ['Netflix', 'BBC', 'Paramount', 'CNN', 'National Geographic', 'Channel 4']

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20 pb-4">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg-logic.jpg"
            alt=""
            className="w-full h-full object-cover opacity-40"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-cinema-darker/40 via-cinema-dark/60 to-cinema-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cinema-accent/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Music for Film,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cinema-muted">
                  Television and Trailers
                </span>
              </h1>
              <p className="mt-6 text-lg text-cinema-muted leading-relaxed max-w-xl">
                A highly experienced composer with global TV, film and sync credits spanning more than two decades. Crafting cinematic scores, trailer-ready compositions and production music for the world&apos;s leading broadcasters and platforms.
              </p>
            </div>
            <HeroShowreel />
          </div>
          <div className="mt-10 pt-6 border-t border-cinema-border">
            <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
              {credits.map((credit) => (
                <span
                  key={credit}
                  className="text-cinema-muted/60 text-sm md:text-base font-semibold tracking-widest uppercase whitespace-nowrap"
                >
                  {credit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Feature Films</h2>
            <p className="text-cinema-muted mt-2">Selected film projects featuring original music composed by Colin McGinness</p>
          </div>
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scroll-rail">
            {films.slice(0, 7).map((film) => (
              <div key={film.slug} className="flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px]">
                <FilmCard film={film} />
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/film"
              className="inline-flex items-center text-white font-medium hover:text-cinema-accent transition-colors"
            >
              View All Films
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">TV Sync Placements</h2>
          <p className="text-cinema-muted mt-2">A selection of television productions featuring music by Colin McGinness</p>
        </div>
        <TVSyncRail />
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Showreels</h2>
            <p className="text-cinema-muted mt-2">Explore a selection of showreels and compilations</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {showreels.map((reel) => (
              <VideoCard key={reel.title} {...reel} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Releases</h2>
          <p className="text-cinema-muted mt-2">A selection of production music releases featuring Colin McGinness as composer</p>
        </div>
        <AlbumCoversRail />
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Selected TV & Film Syncs</h2>
            <p className="text-cinema-muted mt-2">Compositions placed across global television and film</p>
          </div>
        </div>
        <div className="pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          <div className="flex gap-4 overflow-x-auto pb-4 scroll-rail">
            {syncPlacements.map((sync) => (
              <SyncCard key={sync.title} {...sync} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Selected Awards & Recognition</h2>
            <p className="text-cinema-muted mt-2">Winner and nominee recognition for original score and composition in film and broadcast</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredAwards.map((award, i) => (
              <AwardCardSmall key={i} award={award} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/awards"
              className="inline-flex items-center text-white font-medium hover:text-cinema-gold transition-colors"
            >
              View All Awards
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <img
                src="/images/colin-mcginness.jpg"
                alt="Colin McGinness - Composer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-cinema-accent font-medium tracking-widest uppercase text-sm mb-4">
                About
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Colin McGinness</h2>
              <p className="text-cinema-muted leading-relaxed mb-6">
                Colin McGinness is a highly experienced composer whose music has featured across film, television, trailers, documentaries and global sync campaigns. With a career spanning more than two decades, his work blends cinematic scale, tension, rhythm and orchestral depth across a wide range of screen productions.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-white font-medium hover:text-cinema-accent transition-colors"
              >
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cinema-darker/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Looking for original music, trailer-ready composition or sync-friendly screen music?
          </h2>
          <p className="text-cinema-muted mb-8 text-lg">
            Get in touch to discuss your next project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-cinema-accent hover:bg-cinema-accent-hover text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cinema-accent/25 text-lg"
          >
            Contact Colin
          </Link>
        </div>
      </section>
    </>
  )
}
