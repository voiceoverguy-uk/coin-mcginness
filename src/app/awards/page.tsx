import type { Metadata } from 'next'
import { wins, nominations } from '@/data/awards'
import { AwardCardLarge } from '@/components/AwardCard'

export const metadata: Metadata = {
  title: 'Awards & Recognition - Colin McGinness | Composer',
  description: 'Awards, nominations and festival recognition for composer Colin McGinness, including wins at Barcelona, Anatolia and Beyond the Curve International Film Festivals.',
  openGraph: {
    title: 'Awards & Recognition - Colin McGinness | Composer',
    description: 'Awards, nominations and festival recognition for composer Colin McGinness.',
  },
}

export default function AwardsPage() {
  const combinedAwards = [...wins, ...nominations]

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

        {combinedAwards.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">AWARDS</h2>
            <div className="flex gap-6 overflow-x-auto pb-4 scroll-rail">
              {combinedAwards.map((award, i) => (
                <div key={i} className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px]">
                  <AwardCardLarge award={award} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
