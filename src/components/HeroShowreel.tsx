'use client'

import { useState, useEffect } from 'react'

const IMAGES = Array.from({ length: 25 }, (_, i) => `/images/hero-carousel/${i + 1}.jpg`)

export default function HeroShowreel() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current)
      setFading(true)
      setCurrent(c => (c + 1) % IMAGES.length)
      setTimeout(() => {
        setPrev(null)
        setFading(false)
      }, 1000)
    }, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="order-1 lg:order-2" id="showreel">
      <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-cinema-border aspect-video">
        {prev !== null && (
          <img
            key={`prev-${prev}`}
            src={IMAGES[prev]}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: fading ? 0 : 1, transition: 'opacity 1s ease-in-out' }}
          />
        )}
        {IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Colin McGinness composer collage ${i + 1}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === current ? 1 : 0,
              transition: i === current ? 'opacity 1s ease-in-out' : 'none',
              zIndex: i === current ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3) 100%)' }} />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{ background: i === current ? '#ffffff' : 'rgba(255,255,255,0.35)' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
