import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const socials = [
  { name: 'GitHub', href: 'https://github.com/SarahDoma' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/saratu-doma-0a1a62312?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
]

export default function Contact() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const leftInView = useInView(leftRef, { once: true, margin: '-80px' })
  const rightInView = useInView(rightRef, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="relative z-10 bg-[#f4f3ef] py-16 md:py-24 px-6 md:px-16">
      <div className="grid gap-12 md:gap-16 items-center md:grid-cols-2">

        {/* Left */}
        <div ref={leftRef} className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-extrabold leading-none tracking-tighter mb-6"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#0a0f2c' }}
          >
            Let's create<br />
            something <span style={{ color: '#1a3cff' }}>awesome</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base leading-relaxed mb-8 max-w-md mx-auto md:mx-0"
            style={{ color: '#5a5f7a' }}
          >
            I'm currently open to new opportunities. Whether you have a project
            in mind, a role to fill, or just want to say hi — my inbox is always open.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex gap-4 flex-wrap justify-center md:justify-start"
          >
            <a href="mailto:saratudoma@gmail.com"
              className="inline-flex items-center gap-2 text-white font-medium text-sm px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: '#1a3cff', boxShadow: '0 4px 20px rgba(26,60,255,0.3)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email me
            </a>
            <a href="tel:+2348133057362"
              className="inline-flex items-center gap-2 font-medium text-sm px-8 py-3.5 rounded-full border transition-all"
              style={{ color: '#0a0f2c', borderColor: '#e2e4f0', backgroundColor: 'transparent' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5 19.79 19.79 0 0 1 1.61 2.9 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.14 6.14l1.62-1.62a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Phone me
            </a>
          </motion.div>
        </div>

        {/* Right */}
        <div ref={rightRef} className="flex flex-col gap-6 items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={rightInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
              style={{ backgroundColor: 'rgba(26,60,255,0.08)', border: '1px solid rgba(26,60,255,0.15)' }}>
              📍
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold mb-0.5" style={{ color: '#8b8fa8' }}>Location</p>
              <p className="text-sm font-medium" style={{ color: '#0a0f2c' }}>Abuja, Nigeria</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={rightInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-3 flex-wrap justify-center md:justify-start"
          >
            {socials.map((s) => (
              <a key={s.name} href={s.href}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full transition-all"
                style={{ color: '#0a0f2c', border: '1.5px solid #e2e4f0' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0a0f2c'; e.currentTarget.style.color = '#f4f3ef' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0a0f2c' }}
              >
                {s.name}
              </a>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}