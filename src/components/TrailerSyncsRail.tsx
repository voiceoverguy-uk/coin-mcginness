'use client'

import { useState, useCallback, useEffect } from 'react'
import { X } from 'lucide-react'
import ScrollRail from '@/components/ScrollRail'
import { trailerSyncs } from '@/data/trailerSyncs'
import type { TrailerSync } from '@/data/trailerSyncs'

export default function TrailerSyncsRail() {
  const [selected, setSelected] = useState<TrailerSync | null>(null)

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
          {trailerSyncs.map((sync, i) => (
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
              </div>
              <p className="mt-2 px-1 text-cinema-muted text-xs leading-tight line-clamp-2 text-left">{sync.title}</p>
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
