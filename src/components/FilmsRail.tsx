'use client'

import { useState, useEffect } from 'react'
import ScrollRail from '@/components/ScrollRail'
import FilmCard from '@/components/FilmCard'
import { films } from '@/data/films'
import type { Film } from '@/data/films'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function FilmsRail() {
  const [shuffled, setShuffled] = useState<Film[]>(films)

  useEffect(() => {
    setShuffled(shuffle(films))
  }, [])

  return (
    <ScrollRail className="gap-4 md:gap-6 pb-4">
      {shuffled.slice(0, 7).map((film) => (
        <div key={film.slug} className="flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px]">
          <FilmCard film={film} />
        </div>
      ))}
    </ScrollRail>
  )
}
