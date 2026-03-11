'use client'

import { useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
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

export default function AlbumCoversRail() {
  const [covers, setCovers] = useState<AlbumCover[]>(albumCovers)
  const [selected, setSelected] = useState<AlbumCover | null>(null)

  useEffect(() => {
    setCovers(shuffle(albumCovers))
  }, [])

  const closeModal = useCallback(() => setSelected(null), [])

  useEffect(() => {
    if (!selected) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [selected, closeModal])

  return (
    <>
      <div className="pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
        <div className="flex gap-4 overflow-x-auto pb-4 scroll-rail">
          {covers.map((cover, i) => (
            <button
              key={cover.src}
              type="button"
              className="flex-shrink-0 w-[200px] sm:w-[220px] md:w-[260px] group focus:outline-none focus-visible:ring-2 focus-visible:ring-cinema-accent rounded-lg"
              onClick={() => setSelected(cover)}
              aria-label={`View ${cover.title}`}
            >
              <div className="relative rounded-lg overflow-hidden bg-cinema-card transition-all duration-300 group-hover:scale-[1.05] group-hover:shadow-xl group-hover:shadow-black/50">
                <div className="aspect-square">
                  <img
                    src={cover.src}
                    alt={cover.alt}
                    className="w-full h-full object-cover"
                    loading={i < 8 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>
              <p className="mt-2 px-1 text-cinema-muted text-xs leading-tight line-clamp-1 text-left">{cover.title}</p>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-cinema-accent transition-colors z-10"
            onClick={closeModal}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div className="max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selected.src}
              alt={selected.alt}
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-lg font-medium">{selected.title}</p>
          </div>
        </div>
      )}
    </>
  )
}
