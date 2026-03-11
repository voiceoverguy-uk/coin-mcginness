'use client'

import { useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import type { Award } from '@/data/awards'

function ResultBadge({ result }: { result: Award['result'] }) {
  const colors = {
    Winner: 'bg-cinema-gold/20 text-cinema-gold border-cinema-gold/30',
    Nominee: 'bg-white/10 text-white border-white/20',
    'Official Selection': 'bg-white/5 text-cinema-muted border-cinema-border',
  }
  return (
    <span className={`inline-block px-2 py-0.5 text-[10px] md:text-xs font-semibold uppercase tracking-wider rounded border ${colors[result]}`}>
      {result}
    </span>
  )
}

export function AwardCardSmall({ award }: { award: Award }) {
  const [showModal, setShowModal] = useState(false)
  const closeModal = useCallback(() => setShowModal(false), [])

  useEffect(() => {
    if (!showModal) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [showModal, closeModal])

  return (
    <>
      <button
        type="button"
        className="group text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cinema-gold rounded-xl"
        onClick={() => setShowModal(true)}
        aria-label={`View ${award.title} - ${award.festival}`}
      >
        <div className="relative rounded-xl overflow-hidden bg-cinema-card border border-cinema-border transition-all duration-300 group-hover:border-cinema-gold/30 group-hover:shadow-xl group-hover:shadow-black/50">
          <div className="aspect-[4/3]">
            <img
              src={award.image}
              alt={`${award.title} - ${award.festival}`}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <ResultBadge result={award.result} />
            <h3 className="text-white font-semibold text-sm mt-2 leading-tight">{award.category}</h3>
            {award.project && (
              <p className="text-cinema-gold text-xs mt-1">{award.project}</p>
            )}
            <p className="text-cinema-muted text-xs mt-1 line-clamp-1">{award.festival}</p>
          </div>
        </div>
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${award.title} - ${award.festival}`}
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-cinema-gold transition-colors z-10"
            onClick={closeModal}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={award.image}
              alt={`${award.title} - ${award.festival}`}
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4">
              <ResultBadge result={award.result} />
              <h3 className="text-white text-xl font-semibold mt-2">{award.category}</h3>
              {award.project && (
                <p className="text-cinema-gold mt-1">{award.project}</p>
              )}
              <p className="text-cinema-muted text-sm mt-1">{award.festival}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export function AwardCardLarge({ award }: { award: Award }) {
  const [showModal, setShowModal] = useState(false)
  const closeModal = useCallback(() => setShowModal(false), [])

  useEffect(() => {
    if (!showModal) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [showModal, closeModal])

  return (
    <>
      <button
        type="button"
        className="group text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cinema-gold rounded-xl"
        onClick={() => setShowModal(true)}
        aria-label={`View ${award.title} - ${award.festival}`}
      >
        <div className="relative rounded-xl overflow-hidden bg-cinema-card border border-cinema-border transition-all duration-300 group-hover:border-cinema-gold/30 group-hover:shadow-2xl group-hover:shadow-black/50">
          <div className="aspect-[3/4]">
            <img
              src={award.image}
              alt={`${award.title} - ${award.festival}`}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <ResultBadge result={award.result} />
            <h3 className="text-white font-bold text-base md:text-lg mt-2 leading-tight">{award.category}</h3>
            {award.project && (
              <p className="text-cinema-gold text-sm mt-1 font-medium">{award.project}</p>
            )}
            <p className="text-cinema-muted text-sm mt-1">{award.festival}</p>
          </div>
        </div>
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${award.title} - ${award.festival}`}
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-cinema-gold transition-colors z-10"
            onClick={closeModal}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={award.image}
              alt={`${award.title} - ${award.festival}`}
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4">
              <ResultBadge result={award.result} />
              <h3 className="text-white text-xl font-semibold mt-2">{award.category}</h3>
              {award.project && (
                <p className="text-cinema-gold mt-1">{award.project}</p>
              )}
              <p className="text-cinema-muted text-sm mt-1">{award.festival}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
