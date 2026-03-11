import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/showreels', label: 'Showreels' },
  { href: '/film', label: 'Film' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-cinema-darker border-t border-cinema-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              Colin McGinness
            </h3>
            <p className="text-sm text-cinema-muted tracking-widest uppercase">
              Composer
            </p>
            <p className="text-sm text-cinema-muted mt-4 leading-relaxed">
              Music for film, television, trailers and global sync placements.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cinema-muted hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-cinema-muted hover:text-white transition-colors"
              >
                IMDb
              </a>
              <a
                href="#"
                className="block text-sm text-cinema-muted hover:text-white transition-colors"
              >
                YouTube
              </a>
              <a
                href="#"
                className="block text-sm text-cinema-muted hover:text-white transition-colors"
              >
                Spotify
              </a>
              <a
                href="#"
                className="block text-sm text-cinema-muted hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-cinema-border text-center">
          <p className="text-sm text-cinema-muted">
            &copy; {new Date().getFullYear()} Colin McGinness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
