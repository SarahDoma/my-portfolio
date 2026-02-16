import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGit, FaGithub, FaFigma } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss} from 'react-icons/si'
import { VscVscode } from "react-icons/vsc";
import { MdDesignServices } from 'react-icons/md'

const row1 = [
  { name: 'HTML',        icon: <FaHtml5 />,            color: '#e34f26' },
  { name: 'CSS',         icon: <FaCss3Alt />,           color: '#1572b6' },
  { name: 'JavaScript',  icon: <SiJavascript />,        color: '#f7df1e' },
  { name: 'React',       icon: <FaReact />,             color: '#61dafb' },
  { name: 'Tailwind CSS',icon: <SiTailwindcss />,       color: '#38bdf8' },
  { name: 'Node.js',     icon: <FaNodeJs />,            color: '#6cc24a' },
]

const row2 = [
  { name: 'Python',   icon: <FaPython />,            color: '#3776ab' },
  { name: 'Git',      icon: <FaGit />,               color: '#f05032' },
  { name: 'GitHub',   icon: <FaGithub />,            color: '#ffffff' },
  { name: 'Figma',    icon: <FaFigma />,             color: '#a259ff' },
  { name: 'VS Code',  icon: <VscVscode />,           color: '#007acc' },
  { name: 'UI/UX',    icon: <MdDesignServices />,    color: '#f5c842' },
]

function MarqueeRow({ items, direction = 'left', speed = 30 }) {
  const doubled = [...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden py-2">
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0a0f2c, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0a0f2c, transparent)' }}
      />

      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl shrink-0 transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = `${skill.color}18`
              e.currentTarget.style.borderColor = `${skill.color}55`
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = `0 8px 30px ${skill.color}30`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Icon — colored on hover via wrapper */}
            <span
              className="text-xl transition-colors duration-300 flex items-center"
              style={{ color: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.color = skill.color}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >
              {skill.icon}
            </span>

            <span
              className="text-sm font-semibold whitespace-nowrap"
              style={{ fontFamily: "'Syne', sans-serif", color: 'rgba(255,255,255,0.85)' }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative z-10 overflow-hidden" style={{ backgroundColor: '#0a0f2c', padding: '6rem 0' }}>

      {/* Background glow blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: '#1a3cff' }} />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-15"
        style={{ backgroundColor: '#f5c842' }} />

      {/* Section header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-baseline gap-4 mb-14 px-16"
      >
        <span className="font-bold text-xs tracking-widest uppercase"
          style={{ fontFamily: "'Syne', sans-serif", color: '#f5c842' }}>02</span>
        <h2 className="font-extrabold tracking-tighter"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f4f3ef' }}>
          Skills
        </h2>
        <div className="flex-1 h-px ml-4 self-center" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
      </motion.div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col gap-4"
      >
        <MarqueeRow items={row1} direction="left" speed={25} />
        <MarqueeRow items={row2} direction="right" speed={20} />
      </motion.div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-14 text-xs tracking-widest uppercase"
        style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'Syne', sans-serif" }}
      >
        Always learning · Always building
      </motion.p>
    </section>
  )
}