import Link from 'next/link'
import VideoCard from '@/components/VideoCard'
import ScrollRail from '@/components/ScrollRail'
import AlbumCoversRail from '@/components/AlbumCoversRail'
import TVSyncRail from '@/components/TVSyncRail'
import TrailerSyncsRail from '@/components/TrailerSyncsRail'
import FilmsRail from '@/components/FilmsRail'
import HeroShowreel from '@/components/HeroShowreel'
import SyncPlacementsRail from '@/components/SyncPlacementsRail'
import { AwardCardSmall } from '@/components/AwardCard'
import { featuredAwards } from '@/data/awards'

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

const credits = ['Netflix', 'BBC', 'Paramount', 'CNN', 'National Geographic', 'Channel 4', 'Disney', 'HBO']

export default function Home() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-start pt-32 md:pt-40 pb-4">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg-logic.jpg"
            alt=""
            className="w-full h-full object-cover opacity-50"
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
            <div className="order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-cinema-border">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/I0fR1Z1G0fs?rel=0"
                    title="Colin McGinness - Film Score Showreel"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-32 pt-12 border-t border-cinema-border">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <HeroShowreel />
            <div className="rounded-xl overflow-hidden bg-cinema-card">
              <iframe
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A238048467&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                title="Colin McGinness - Showcase on SoundCloud"
                className="w-full aspect-video"
                scrolling="no"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-baseline justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Films</h2>
              <p className="text-cinema-muted mt-2">Selected film projects featuring original music composed by Colin McGinness</p>
            </div>
            <Link
              href="/film"
              className="inline-flex items-center text-sm text-cinema-muted hover:text-cinema-accent transition-colors whitespace-nowrap ml-4"
            >
              View All
              <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <FilmsRail />
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">TV Placements</h2>
            <p className="text-cinema-muted mt-2">A selection of television productions featuring music by Colin McGinness</p>
          </div>
          <TVSyncRail />
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Trailer Syncs</h2>
            <p className="text-cinema-muted mt-2">Music placements in major film and TV trailers</p>
          </div>
          <TrailerSyncsRail />
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Showreels</h2>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Releases</h2>
            <p className="text-cinema-muted mt-2">A selection of production music releases featuring Colin McGinness as composer</p>
          </div>
          <AlbumCoversRail />
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-baseline justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Selected TV & Film Syncs</h2>
              <p className="text-cinema-muted mt-2">Compositions placed across global television and film</p>
            </div>
            <a
              href="https://www.youtube.com/@bazzaboy99"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-cinema-muted hover:text-cinema-accent transition-colors whitespace-nowrap ml-4"
            >
              View All
              <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <SyncPlacementsRail />
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-baseline justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Awards & Recognition</h2>
              <p className="text-cinema-muted mt-2">Winner and nominee recognition for original score and composition in film and broadcast</p>
            </div>
            <Link
              href="/awards"
              className="inline-flex items-center text-sm text-cinema-muted hover:text-cinema-accent transition-colors whitespace-nowrap ml-4"
            >
              View All
              <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredAwards.map((award, i) => (
              <AwardCardSmall key={i} award={award} />
            ))}
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
