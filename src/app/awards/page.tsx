import type { Metadata } from 'next'
import { wins, nominations } from '@/data/awards'
import { AwardCardLarge } from '@/components/AwardCard'

const allAwards = [...wins, ...nominations]

export const metadata: Metadata = {
  title: 'Awards & Recognition',
  description: 'Winner of Best Music in a Film at Barcelona IFF, Best Original Score at Beyond the Curve and Anatolia IFF. RTS West of England Award nominee for Sacrilege.',
  openGraph: {
    title: 'Awards & Recognition | Colin McGinness Composer',
    description: 'Winner of Best Music in a Film at Barcelona IFF, Best Original Score at Beyond the Curve and Anatolia IFF. RTS West of England Award nominee for Sacrilege.',
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

        <div className="flex gap-6 overflow-x-auto pb-4 scroll-rail mb-16">
          {allAwards.map((award, i) => (
            <div key={i} className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px]">
              <AwardCardLarge award={award} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
