'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Film } from '@/data/films'

export default function FilmCard({ film }: { film: Film }) {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const closeModal = useCallback(() => setGalleryOpen(false), [])

  const nextImage = useCallback(() => {
    setGalleryIndex(i => (i + 1) % film.gallery.length)
  }, [film.gallery.length])

  const prevImage = useCallback(() => {
    setGalleryIndex(i => (i - 1 + film.gallery.length) % film.gallery.length)
  }, [film.gallery.length])

  useEffect(() => {
    if (!galleryOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [galleryOpen, closeModal, nextImage, prevImage])

  return (
    <>
      <button
        type="button"
        className="group text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cinema-accent rounded-xl"
        onClick={() => { setGalleryIndex(0); setGalleryOpen(true) }}
        aria-label={`View ${film.title}`}
      >
        <div className="relative rounded-xl overflow-hidden bg-cinema-card border border-cinema-border transition-all duration-300 group-hover:border-cinema-accent/30 group-hover:shadow-2xl group-hover:shadow-black/50">
          <div className="aspect-[2/3]">
            <img
              src={film.poster}
              alt={`${film.title} poster`}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-cinema-accent/20 text-cinema-accent border border-cinema-accent/30 mb-2">
              {film.type}
            </span>
            <h3 className="text-white font-bold text-base md:text-lg leading-tight">{film.title}</h3>
            {film.year && <p className="text-cinema-muted text-xs mt-1">{film.year}</p>}
          </div>
        </div>
      </button>

      {galleryOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${film.title} gallery`}
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-cinema-accent transition-colors z-10"
            onClick={closeModal}
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>

          {film.gallery.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-cinema-accent transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); prevImage() }}
                aria-label="Previous image"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-cinema-accent transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); nextImage() }}
                aria-label="Next image"
              >
                <ChevronRight size={36} />
              </button>
            </>
          )}

          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={film.gallery[galleryIndex]}
              alt={`${film.title} - image ${galleryIndex + 1}`}
              className="w-full rounded-lg shadow-2xl max-h-[80vh] object-contain mx-auto"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-bold">{film.title}</h3>
              <p className="text-cinema-muted text-sm mt-1">{film.description}</p>
              {film.gallery.length > 1 && (
                <p className="text-cinema-muted text-xs mt-2">{galleryIndex + 1} / {film.gallery.length}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
