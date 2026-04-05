import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admission', href: '#admission' },
  { label: 'News & Events', href: '#news-events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-[#2F7A4D] bg-[#1F5E3B]/95 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-4 py-4 md:px-6">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            aria-label="Go to St. Mary Academy home section"
            className="flex items-center gap-3 text-base font-bold text-white md:text-lg"
          >
            <img
              src="/badge.jpeg"
              alt="St. Mary Academy Secondary School official badge logo"
              className="h-12 w-12 rounded-full border border-white/80 bg-white object-cover shadow-sm sm:h-14 sm:w-14 md:h-16 md:w-16"
            />
            <span>St. Mary Academy</span>
          </a>
          <ul className="hidden gap-4 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="text-white transition hover:text-[#4CAF50]" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-md border border-white/40 p-2 text-white md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              {menuOpen ? (
                <path d="M18.3 5.7a1 1 0 0 0-1.4 0L12 10.6 7.1 5.7A1 1 0 0 0 5.7 7.1l4.9 4.9-4.9 4.9a1 1 0 1 0 1.4 1.4l4.9-4.9 4.9 4.9a1 1 0 0 0 1.4-1.4L13.4 12l4.9-4.9a1 1 0 0 0 0-1.4z" />
              ) : (
                <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <ul className="mt-3 space-y-2 rounded-lg border border-[#2F7A4D]/30 bg-[#174B30] p-3 text-sm font-medium md:hidden">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="block rounded-md px-2 py-2 text-white transition hover:bg-[#2F7A4D]"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Navbar
