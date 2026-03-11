import type { Metadata } from 'next'
import { wins, nominations, selections } from '@/data/awards'
import { AwardCardLarge, AwardCardSmall } from '@/components/AwardCard'

export const metadata: Metadata = {
  title: 'Awards & Recognition - Colin McGinness | Composer',
  description: 'Awards, nominations and festival recognition for composer Colin McGinness, including wins at Barcelona, Anatolia and Beyond the Curve International Film Festivals.',
  openGraph: {
    title: 'Awards & Recognition - Colin McGinness | Composer',
    description: 'Awards, nominations and festival recognition for composer Colin McGinness.',
  },
}

export default function AwardsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-cinema-gold font-medium tracking-widest uppercase text-sm mb-3">
            Recognition
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Awards & Recognition
          </h1>
          <p className="text-cinema-muted mt-4 text-lg max-w-2xl leading-relaxed">
            Selected wins, nominations and festival recognition for Colin McGinness&apos;s work in film and broadcast composition.
          </p>
        </div>

        {wins.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Featured Wins</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wins.map((award, i) => (
                <AwardCardLarge key={i} award={award} />
              ))}
            </div>
          </section>
        )}

        {nominations.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Nominations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {nominations.map((award, i) => (
                <AwardCardLarge key={i} award={award} />
              ))}
            </div>
          </section>
        )}

        {selections.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Festival Recognition</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {selections.map((award, i) => (
                <AwardCardSmall key={i} award={award} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
