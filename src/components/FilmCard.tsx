import Link from 'next/link'

interface FilmCardProps {
  title: string
  slug: string
}

export default function FilmCard({ title, slug }: FilmCardProps) {
  return (
    <Link href={`/film#${slug}`} className="group block">
      <div className="relative rounded-lg overflow-hidden bg-cinema-card transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-black/50">
        <div className="aspect-[2/3] flex items-center justify-center bg-gradient-to-br from-cinema-card via-cinema-border to-cinema-card">
          <div className="text-center p-4">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cinema-border flex items-center justify-center">
              <svg className="w-8 h-8 text-cinema-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </div>
            <p className="text-xs text-cinema-muted uppercase tracking-wider">Feature Film Poster</p>
            <p className="text-xs text-cinema-muted mt-1">Placeholder</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 pt-12">
          <h3 className="text-white font-semibold text-base">{title}</h3>
          <p className="text-cinema-muted text-xs mt-1">Original Score</p>
        </div>
      </div>
    </Link>
  )
}
