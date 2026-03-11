'use client'

import { useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import ScrollRail from '@/components/ScrollRail'
import { tvSyncs } from '@/data/tvSyncs'
import type { TVSync } from '@/data/tvSyncs'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function TVSyncRail() {
  const [syncs, setSyncs] = useState<TVSync[]>(tvSyncs)
  const [selected, setSelected] = useState<TVSync | null>(null)

  useEffect(() => {
    setSyncs(shuffle(tvSyncs))
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
      <div>
        <ScrollRail className="gap-4 pb-4">
          {syncs.map((sync, i) => (
            <button
              key={sync.src}
              type="button"
              className="flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px] group focus:outline-none focus-visible:ring-2 focus-visible:ring-cinema-accent rounded-lg"
              onClick={() => setSelected(sync)}
              aria-label={`View ${sync.title}`}
            >
              <div className="relative rounded-lg overflow-hidden bg-cinema-card transition-all duration-300 group-hover:scale-[1.05] group-hover:shadow-xl group-hover:shadow-black/50">
                <div className="aspect-[2/3]">
                  <img
                    src={sync.src}
                    alt={sync.alt}
                    className="w-full h-full object-cover"
                    loading={i < 6 ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs font-medium leading-tight line-clamp-2">{sync.title}</p>
                </div>
              </div>
            </button>
          ))}
        </ScrollRail>
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
          <div className="max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
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
