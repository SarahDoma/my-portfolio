import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const projects = [
  {
    num: '01',
    title: 'Aye Water Website',
    desc: "Designed and built a custom website using JavaScript to enhance the company's online presence and improve user engagement.",
    tags: ['React', 'Tailwind CSS', 'Node'],
    github: 'https://github.com/SarahDoma/aye-waterr.git',
    live: 'https://aye-waterr.vercel.app/',
    comingSoon: false,
    images: ['/src/assets/aye-water.png'], 
  },
  {
    num: '02',
    title: 'Internship Application Portal',
    desc: 'Collaborated with a team to develop an Internship Application Portal, focusing primarily on frontend development using React.js, Tailwind CSS, and Material UI.',
    tags: ['React', 'Tailwind CSS', 'Node', 'Material UI'],
    github: null,
    live: 'https://applicationportal.vercel.app/',
    comingSoon: false,
    images: ['/src/assets/nnpc.png'],
  },
  {
    num: '03',
    title: 'Electricity Prediction Application',
    desc: 'A machine learning powered application for predicting electricity usage patterns.',
    tags: ['React', 'Tailwind CSS', 'Python'],
    github: 'https://github.com/SarahDoma/fyp-frontend.git',
    live: 'https://fyp-frontend-three-pi.vercel.app/',
    comingSoon: false,
    images: ['/src/assets/electra.png'],
  },
    {
    num: '04',
    title: 'Flux',
    desc: 'An interactive particle system with three physics modes (Flow, Orbit, Burst). Real-time controls for particle count, speed, radius, and trail effects',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/SarahDoma/generative-art.git',
    live: 'https://generative-art-kohl.vercel.app/',
    comingSoon: false,
    images: ['/src/assets/flux.png'],
  },
    {
    num: '05',
    title: 'Time Block',
    desc: 'A drag-and-drop time blocking calendar with customizable categories and productivity stats. Create custom block types, save templates, and track Deep Work vs Meeting balance.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/SarahDoma/time-block.git',
    live: 'https://time-block-green.vercel.app/',
    comingSoon: false,
    images: ['/src/assets/timeblock.png'],
  },
  {
    num: '06',
    title: 'FuelDey',
    desc: 'Description of your design work.',
    tags: ['Figma', 'UI/UX'],
    github: null,
    live: 'https://www.figma.com/design/3MqhHwNSmBfeDH7sQ1BRyk/FuelDey2?node-id=0-1&t=JiyZTs9C9avN23t3-1',
    comingSoon: false,
    images: [
      '/src/assets/uiux-1.png', '/src/assets/uiux-2.png'],
  },
    {
    num: '07',
    title: 'Cognito',
    desc: 'Description of your design work.',
    tags: ['Figma', 'UI/UX'],
    github: null,
    live: 'https://www.figma.com/design/bP2HNLKcQKlbkYcsk41uCu/Cognito?node-id=0-1&t=9qbeud0CsgVwMDDo-1',
    comingSoon: false,
    images: [
      '/src/assets/cognito.png', '/src/assets/Frame 1.png', '/src/assets/Frame 3.png', '/src/assets/Frame 4.png', '/src/assets/Frame 5.png', '/src/assets/Frame 6.png'],
  },
]

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)

  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length)
  const next = () => setCurrent(i => (i + 1) % images.length)

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backgroundColor: 'rgba(10,15,44,0.95)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          style={{ fontSize: '1.5rem', lineHeight: 1, background: 'none', border: 'none', cursor: 'pointer' }}
        >
          ✕
        </button>

        {/* Counter */}
        {images.length > 1 && (
          <div
            className="absolute top-6 left-1/2 -translate-x-1/2 text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Syne', sans-serif" }}
          >
            {current + 1} / {images.length}
          </div>
        )}

        {/* Image */}
        <motion.div
  key={current}
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.25 }}
  className="relative mx-16"
  onClick={e => e.stopPropagation()}
  style={{ width: '75vw', height: '75vh' }}
>
  <img
    src={images[current]}
    alt={`Preview ${current + 1}`}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      borderRadius: '16px',
      boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
    }}
  />
</motion.div>

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full transition-all"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', color: '#fff' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full transition-all"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', color: '#fff' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setCurrent(i) }}
                className="rounded-full transition-all"
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  backgroundColor: i === current ? '#1a3cff' : 'rgba(255,255,255,0.3)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

// ── Project Card ──────────────────────────────────────────
function ProjectCard({ project, index, onImageClick }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const hasImages = project.images && project.images.length > 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{ backgroundColor: '#ffffff', border: '1px solid #e2e4f0' }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(26,60,255,0.12)'
        e.currentTarget.style.borderColor = 'rgba(26,60,255,0.25)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = '#e2e4f0'
      }}
    >
      {/* ── Image preview (clickable) ── */}
      {hasImages && (
        <div
          className="relative w-full h-48 overflow-hidden cursor-zoom-in"
          onClick={() => onImageClick(project.images, 0)}
        >
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Image count badge */}
          {project.images.length > 1 && (
            <div
              className="absolute bottom-3 right-3 flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(10,15,44,0.75)', color: '#fff', backdropFilter: 'blur(4px)' }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              {project.images.length}
            </div>
          )}

          {/* Expand hint overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: 'rgba(26,60,255,0.15)' }}
          >
            <div
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: '#1a3cff' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
                <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
              </svg>
              View {project.images.length > 1 ? `${project.images.length} images` : 'image'}
            </div>
          </div>
        </div>
      )}

      {/* ── Card content ── */}
      <div className="p-8">
        {/* Ghost number */}
        <span
          className="absolute top-4 right-6 font-extrabold text-6xl leading-none select-none"
          style={{ fontFamily: "'Syne', sans-serif", color: 'rgba(26,60,255,0.07)' }}
        >
          {project.num}
        </span>

        <h3
          className="font-bold text-lg mb-3 pr-12 leading-tight"
          style={{ fontFamily: "'Syne', sans-serif", color: '#0a0f2c' }}
        >
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed mb-6" style={{ color: '#5a5f7a' }}>
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.comingSoon && (
            <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(245,200,66,0.1)', color: '#a07800', border: '1px solid rgba(245,200,66,0.3)' }}>
              Coming Soon
            </span>
          )}
          {project.tags.map((tag) => (
            <span key={tag}
              className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(26,60,255,0.07)', color: '#1a3cff', border: '1px solid rgba(26,60,255,0.15)' }}>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {[
            ...(project.github ? [{ label: 'GitHub', href: project.github }] : []),
            ...(project.live ? [{ label: 'Live', href: project.live }] : []),
          ].map(link => (
            <a key={link.label} href={link.href}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full transition-all"
              style={{ color: '#1a3cff', border: '1.5px solid rgba(26,60,255,0.25)' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1a3cff'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a3cff' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── Projects Section ──────────────────────────────────────
export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [lightbox, setLightbox] = useState(null) // { images, index }

  return (
    <section id="projects" className="relative z-10" style={{ backgroundColor: '#f4f3ef', padding: '6rem 4rem' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-baseline gap-4 mb-14"
      >
        <span className="font-bold text-xs tracking-widest uppercase" style={{ fontFamily: "'Syne', sans-serif", color: '#1a3cff' }}>01</span>
        <h2 className="font-extrabold tracking-tighter" style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0a0f2c' }}>Projects</h2>
        <div className="flex-1 h-px ml-4 self-center" style={{ backgroundColor: '#e2e4f0' }} />
      </motion.div>

      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {projects.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            onImageClick={(images, index) => setLightbox({ images, index })}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}