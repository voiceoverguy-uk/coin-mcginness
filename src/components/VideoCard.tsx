'use client'

import { useState, useEffect, useCallback } from 'react'
import { Play, X } from 'lucide-react'

interface VideoCardProps {
  title: string
  description?: string
  youtubeUrl: string
  aspectRatio?: 'video' | 'poster'
}

function getYouTubeId(url: string): string {
  const match = url.match(/(?:v=|\/embed\/|\/watch\?v=)([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : ''
}

export default function VideoCard({ title, description, youtubeUrl, aspectRatio = 'video' }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = getYouTubeId(youtubeUrl)
  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

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
        className="group relative rounded-lg overflow-hidden bg-cinema-card cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/50 text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cinema-accent"
        onClick={() => setIsPlaying(true)}
        aria-label={`Play ${title}`}
      >
        <div className={aspectRatio === 'poster' ? 'aspect-[2/3]' : 'aspect-video'}>
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-cinema-accent group-hover:scale-110">
              <Play className="w-6 h-6 text-white ml-1" fill="white" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-sm md:text-base leading-tight">{title}</h3>
          {description && (
            <p className="text-cinema-muted text-xs md:text-sm mt-1 line-clamp-2">{description}</p>
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
