'use client'

import { useState, useEffect, useCallback } from 'react'
import { Play, X } from 'lucide-react'

interface SyncCardProps {
  title: string
  caption?: string
  youtubeUrl: string
}

function getYouTubeId(url: string): string {
  const match = url.match(/(?:v=|\/embed\/|\/watch\?v=)([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : ''
}

export default function SyncCard({ title, caption, youtubeUrl }: SyncCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = getYouTubeId(youtubeUrl)
  const thumbnail = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`

  const closeModal = useCallback(() => setIsPlaying(false), [])

  useEffect(() => {
    if (!isPlaying) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isPlaying, closeModal])

  return (
    <>
      <button
        type="button"
        className="flex-shrink-0 w-[220px] md:w-[260px] group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cinema-accent rounded-lg"
        onClick={() => setIsPlaying(true)}
        aria-label={`Play ${title}`}
      >
        <div className="relative rounded-lg overflow-hidden bg-cinema-card transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-xl group-hover:shadow-black/50">
          <div className="aspect-video">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = `https://img.youtube.com/vi/${videoId}/default.jpg`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 rounded-full bg-cinema-accent/90 flex items-center justify-center">
                <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 px-1">
          <h4 className="text-white text-sm font-medium leading-tight line-clamp-1">{title}</h4>
          {caption && (
            <p className="text-cinema-muted text-xs mt-1 line-clamp-2 leading-relaxed">{caption}</p>
          )}
        </div>
      </button>

      {isPlaying && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Playing ${title}`}
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-cinema-accent transition-colors z-10"
            onClick={closeModal}
            aria-label="Close video"
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
          </div>
        </div>
      )}
    </>
  )
}
