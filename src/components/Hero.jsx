import { motion } from 'framer-motion'
import photo from '../assets/file.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section
      id="hero"
className="relative min-h-screen flex flex-col lg:grid lg:grid-cols-2 items-center justify-center overflow-hidden px-8 lg:px-16 pt-28 lg:pt-32 pb-16"    
>
      {/* Diagonal background strip */}
      <div className="hero-diagonal hidden lg:block" />

      {/* LEFT: Text */}
      <div className="relative z-10 w-full max-w-2xl text-center lg:text-left">
        {/* Available label */}
        <motion.div
          {...fadeUp(0.2)}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-6"
          style={{ color: '#1a3cff', backgroundColor: 'rgba(26,60,255,0.08)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#1a3cff' }} />
          Available for work
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.35)}
          className="font-extrabold leading-none tracking-tighter mb-1"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 8vw, 3.5rem)', color: '#0a0f2c' }}
        >
          Hi, I am
          <br />
          <span className="name-underline" style={{ color: '#1a3cff' }}>Saratu Doma</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          {...fadeUp(0.5)}
          className="mt-5 mb-6"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.25rem, 4vw, 2rem)', color: '#8b8fa8' }}
        >
          Front End Developer
        </motion.p>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.65)}
          className="text-sm lg:text-base leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
          style={{ color: '#4a4f6a' }}
        >
          I build clean, responsive, and user-friendly web apps using React.js and
          Tailwind CSS. I love problem-solving, tweaking layouts, and adding just
          the right touch of animation to make a website feel alive.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.8)} className="flex gap-3 lg:gap-4 flex-wrap justify-center lg:justify-start">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white font-medium text-xs lg:text-sm px-6 lg:px-8 py-3 lg:py-3.5 rounded-full transition-all hover:-translate-y-0.5"
            style={{
              backgroundColor: '#1a3cff',
              boxShadow: '0 4px 20px rgba(26,60,255,0.3)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Get in touch
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-medium text-xs lg:text-sm px-6 lg:px-8 py-3 lg:py-3.5 rounded-full border transition-all"
            style={{ color: '#0a0f2c', borderColor: '#e2e4f0', backgroundColor: 'transparent' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            View Resume
          </a>
        </motion.div>
      </div>

      {/* RIGHT: Photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="relative z-10 flex justify-center items-end mt-12 lg:mt-0"
      >
        <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-85 lg:h-125">
          <div className="photo-blob animate-morphBlob" />
          <img
            src={photo}
            alt="Saratu Doma"
            className="relative z-10 w-full h-full object-contain object-bottom"
          />
          {/* Floating badge */}
          <div
            className="absolute z-20 font-bold text-xs px-4 py-2.5 lg:px-5 lg:py-3 rounded-2xl leading-relaxed animate-float"
            style={{
              bottom: '20px',
              right: '-20px',
              backgroundColor: '#0a0f2c',
              color: '#fff',
              fontFamily: "'Syne', sans-serif",
              boxShadow: '0 8px 30px rgba(10,15,44,0.25)',
            }}
          >
            <span className="block text-base lg:text-lg" style={{ color: '#f5c842' }}>2+</span>
            Years of<br />Experience
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-xs tracking-widest uppercase z-10"
        style={{ color: '#8b8fa8' }}
      >
        <div
          className="w-px h-10 animate-scrollPulse"
          style={{ background: 'linear-gradient(to bottom, #1a3cff, transparent)' }}
        />
        Scroll
      </motion.div>
    </section>
  )
}