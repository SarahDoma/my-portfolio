export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5 backdrop-blur-md border-b"
      style={{ backgroundColor: 'rgba(244,243,239,0.92)', borderColor: '#e2e4f0' }}>
      <a href="#"
  className="text-xl tracking-tight"
  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: '#0a0f2c', textDecoration: 'none' }}
>
  SD<span style={{ color: '#1a3cff' }}>.</span>
</a>

      <ul className="flex gap-10 list-none items-center">
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
    </nav>
  )
}