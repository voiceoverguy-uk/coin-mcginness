'use client'

import { useState, useEffect } from 'react'
import ScrollRail from '@/components/ScrollRail'
import SyncCard from '@/components/SyncCard'

interface SyncPlacement {
  title: string
  caption: string
  youtubeUrl: string
  musicHref?: string
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const syncPlacements: SyncPlacement[] = [
  {
    title: 'Formula 1',
    caption: 'Music featured in Formula 1 coverage.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ElQ6a4eefS0',
    musicHref: 'https://w.bmg.com/gegkn',
  },
  {
    title: 'Joe Wicks: Licensed to Kill',
    caption: 'Track "Global Surveillance" appears in this Channel 4 documentary.',
    youtubeUrl: 'https://www.youtube.com/watch?v=U_QRcQPDnNQ',
    musicHref: 'https://w.bmg.com/gdcim',
  },
  {
    title: 'Jeopardy TV Spot Sync',
    caption: 'Track "No More Heroes" appears on this promo spot for Jeopardy.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nifjxRKTyWQ',
    musicHref: 'https://w.bmg.com/gbpr9',
  },
  {
    title: "I'm a Celebrity, Get Me Out of Here",
    caption: '"Call For Backup" provides energy for an action-packed sequence on the UK\'s biggest reality show.',
    youtubeUrl: 'https://www.youtube.com/watch?v=LV3yhr8_-oM',
    musicHref: 'https://w.bmg.com/gdg9j',
  },
  {
    title: 'Fukushima: Days That Shook The World',
    caption: 'A track from the NUCLEAR WAR album appears on this 2-part Channel 4 documentary.',
    youtubeUrl: 'https://www.youtube.com/watch?v=66G4Ws5IPsw',
    musicHref: 'https://w.bmg.com/gegzq',
  },
  {
    title: 'Dexter Resurrection - TV Promo Spot',
    caption: 'Track: "Hidden Risks"',
    youtubeUrl: 'https://www.youtube.com/watch?v=ruB_hwE5Y1k',
    musicHref: 'https://w.bmg.com/gegzv',
  },
  {
    title: 'BBC News 24 - Promo Spot',
    caption: 'Music featured on the BBC News 24 promo campaign.',
    youtubeUrl: 'https://www.youtube.com/watch?v=x98XsvSnP8c',
    musicHref: 'https://w.bmg.com/gdqbb',
  },
  {
    title: 'Shark Week - Great White Reign of Terror',
    caption: '7 tracks from the INTENSITY album appear in this Discovery Channel feature.',
    youtubeUrl: 'https://www.youtube.com/watch?v=8-gDJeb44rs',
    musicHref: 'https://hrvst.co/wh/gegzw',
  },
  {
    title: 'Snowflake Mountain',
    caption: 'Music featured in the Netflix reality series.',
    youtubeUrl: 'https://youtu.be/e7t_Syn48Ic',
    musicHref: 'https://w.bmg.com/gehvu',
  },
  {
    title: 'Bar Rescue',
    caption: 'Music featured in Bar Rescue.',
    youtubeUrl: 'https://youtu.be/1DsZbHoNIWA',
    musicHref: 'https://w.bmg.com/gehvw',
  },
  {
    title: 'Hunted',
    caption: 'Music featured in Hunted.',
    youtubeUrl: 'https://youtu.be/UlvOJfpZVnI',
    musicHref: 'https://w.bmg.com/gehvz',
  },
  {
    title: 'Celebrity Apprentice',
    caption: 'Music featured in Celebrity Apprentice.',
    youtubeUrl: 'https://youtu.be/g5VX2f6mBjg',
    musicHref: 'https://w.bmg.com/gehv2',
  },
  {
    title: 'Secrets of the Supercars',
    caption: 'Music featured in Secrets of the Supercars.',
    youtubeUrl: 'https://youtu.be/eLkC3nlXK60',
    musicHref: 'https://w.bmg.com/gehv3',
  },
  {
    title: 'Commando',
    caption: 'Music featured in Commando.',
    youtubeUrl: 'https://youtu.be/ilpIZP_PYf8',
    musicHref: 'https://w.bmg.com/gehz7',
  },
  {
    title: 'Last Woman on Earth',
    caption: 'Music featured in Last Woman on Earth.',
    youtubeUrl: 'https://youtu.be/vVWsOo4No_I',
    musicHref: 'https://w.bmg.com/gehz4',
  },
  {
    title: 'Yellowstone',
    caption: 'Music featured in Yellowstone.',
    youtubeUrl: 'https://youtu.be/sGvkJV8Uooc',
    musicHref: 'https://w.bmg.com/gcetw',
  },
  {
    title: 'Nancy Drew',
    caption: 'Music featured in Nancy Drew.',
    youtubeUrl: 'https://youtu.be/vyws4xB7ko8',
    musicHref: 'https://links.universalproductionmusic.com/voo2ea',
  },
  {
    title: 'Welcome to Murdertown',
    caption: 'Music featured in Welcome to Murdertown.',
    youtubeUrl: 'https://youtu.be/CwZxmoOTZp0',
    musicHref: 'https://links.universalproductionmusic.com/ej6h89',
  },
  {
    title: 'Miracle Workers',
    caption: 'Music featured in Miracle Workers.',
    youtubeUrl: 'https://youtu.be/yxGqgQtxSmI',
    musicHref: 'https://w.bmg.com/geh0s',
  },
  {
    title: 'Nothing Lasts Forever',
    caption: 'Music featured in Nothing Lasts Forever.',
    youtubeUrl: 'https://youtu.be/v38y_cpoKXQ',
    musicHref: 'https://w.bmg.com/geh0o',
  },
  {
    title: 'Web of Make Believe',
    caption: 'Music featured in Web of Make Believe.',
    youtubeUrl: 'https://youtu.be/zaTy2F5YYOY',
    musicHref: 'https://w.bmg.com/geh0p',
  },
  {
    title: 'Next Level Chef',
    caption: 'Music featured in Next Level Chef.',
    youtubeUrl: 'https://youtu.be/FOTN3D_mwFw',
    musicHref: 'https://w.bmg.com/geh0t',
  },
]

export default function SyncPlacementsRail() {
  const [placements, setPlacements] = useState<SyncPlacement[]>(syncPlacements)

  useEffect(() => {
    setPlacements(shuffle(syncPlacements))
  }, [])

  return (
    <ScrollRail className="gap-4 pb-4">
      {placements.map((sync) => (
        <SyncCard key={sync.title} {...sync} />
      ))}
    </ScrollRail>
  )
}
