import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 lg:px-16 py-5 backdrop-blur-md border-b"
      style={{ backgroundColor: 'rgba(244,243,239,0.92)', borderColor: '#e2e4f0' }}>
      <a href="#"
        className="text-xl tracking-tight"
        style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: '#0a0f2c', textDecoration: 'none' }}
      >
        SD<span style={{ color: '#1a3cff' }}>.</span>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 list-none items-center">
        {['Projects', 'Skills', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="nav-link text-sm font-medium uppercase tracking-widest transition-colors"
              style={{ color: '#0a0f2c' }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center z-50"
        aria-label="Toggle menu"
      >
        <span
          className="w-full h-0.5 transition-all duration-300"
          style={{
            backgroundColor: '#0a0f2c',
            transform: isOpen ? 'rotate(45deg) translateY(8px)' : 'none'
          }}
        />
        <span
          className="w-full h-0.5 transition-all duration-300"
          style={{
            backgroundColor: '#0a0f2c',
            opacity: isOpen ? 0 : 1
          }}
        />
        <span
          className="w-full h-0.5 transition-all duration-300"
          style={{
            backgroundColor: '#0a0f2c',
            transform: isOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
          }}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[73px] left-0 right-0 transition-all duration-300 overflow-hidden`}
        style={{
          backgroundColor: 'rgba(244,243,239,0.98)',
          borderBottom: '1px solid #e2e4f0',
          maxHeight: isOpen ? '300px' : '0',
          backdropFilter: 'blur(12px)'
        }}
      >
        <ul className="flex flex-col gap-6 list-none py-6 px-6">
          {['Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium uppercase tracking-widest transition-colors block"
                style={{ color: '#0a0f2c' }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}