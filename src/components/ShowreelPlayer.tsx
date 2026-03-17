'use client'

import { useState } from 'react'

interface ShowreelPlayerProps {
  youtubeId: string
  title: string
  customThumbnail?: string
}

export default function ShowreelPlayer({ youtubeId, title, customThumbnail }: ShowreelPlayerProps) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
    )
  }

  const thumbnailSrc = customThumbnail || `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`

  return (
    <button
      type="button"
      className="relative w-full aspect-video group cursor-pointer"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title}`}
    >
      <img
        src={thumbnailSrc}
        alt={title}
        className="w-full h-full object-cover"
        onError={(e) => {
          if (!customThumbnail) {
            const target = e.target as HTMLImageElement
            target.src = `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`
          }
        }}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-110">
        <svg viewBox="0 0 68 48" className="w-[68px] h-[48px]" aria-hidden="true">
          <path
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.64 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
            fill="#FF0000"
          />
          <path d="M45 24L27 14v20" fill="white" />
        </svg>
      </div>
    </button>
  )
}
