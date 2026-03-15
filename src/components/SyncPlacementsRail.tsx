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
