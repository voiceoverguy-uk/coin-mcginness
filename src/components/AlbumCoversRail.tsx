'use client'

import { useState, useEffect } from 'react'
import ScrollRail from '@/components/ScrollRail'
import { albumCovers } from '@/data/albumCovers'
import type { AlbumCover } from '@/data/albumCovers'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function AlbumCard({ cover, index }: { cover: AlbumCover; index: number }) {
  const inner = (
    <div className="relative rounded-lg overflow-hidden bg-cinema-card transition-all duration-300 group-hover:scale-[1.05] group-hover:shadow-xl group-hover:shadow-black/50">
      <div className="aspect-square">
        <img
          src={cover.src}
          alt={cover.alt}
          className="w-full h-full object-cover"
          loading={index < 8 ? 'eager' : 'lazy'}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex items-end p-3">
        <p className="text-white text-xs font-medium leading-tight line-clamp-2">{cover.title}</p>
      </div>
    </div>
  )

  if (cover.href) {
    return (
      <a
        href={cover.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 w-[200px] sm:w-[220px] md:w-[260px] group focus:outline-none focus-visible:ring-2 focus-visible:ring-cinema-accent rounded-lg"
        aria-label={`Listen to ${cover.title}`}
      >
        {inner}
      </a>
    )
  }

  return (
    <div
      className="flex-shrink-0 w-[200px] sm:w-[220px] md:w-[260px] group rounded-lg"
      aria-label={cover.title}
    >
      {inner}
    </div>
  )
}

export default function AlbumCoversRail() {
  const [covers, setCovers] = useState<AlbumCover[]>(albumCovers)

  useEffect(() => {
    setCovers(shuffle(albumCovers))
  }, [])

  return (
    <div>
      <ScrollRail className="gap-4 pb-4">
        {covers.map((cover, i) => (
          <AlbumCard key={cover.src} cover={cover} index={i} />
        ))}
      </ScrollRail>
    </div>
  )
}
