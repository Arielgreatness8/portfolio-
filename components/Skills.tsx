'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const SKILLS = [
  { icon: '🌐', name: 'HTML5', level: 'Advanced', color: '#E34F26' },
  { icon: '🎨', name: 'CSS3', level: 'Advanced', color: '#1572B6' },
  { icon: '⚡', name: 'JavaScript', level: 'Proficient', color: '#F7DF1E' },
  { icon: '⚛️', name: 'React', level: 'Proficient', color: '#61DAFB' },
  { icon: '🔺', name: 'Next.js', level: 'Learning', color: '#FFFFFF' },
  { icon: '💨', name: 'Tailwind CSS', level: 'Advanced', color: '#38BDF8' },
  { icon: '🔀', name: 'Git & GitHub', level: 'Proficient', color: '#F05032' },
  { icon: '🖌️', name: 'Graphic Design', level: 'Advanced', color: '#FF9A00' },
  { icon: '📱', name: 'Responsive UI', level: 'Advanced', color: '#A78BFA' },
  { icon: '✨', name: 'Framer Motion', level: 'Learning', color: '#BB4AFF' },
]

export default function Skills() {
  const gridRef = useRef(null)
  const isInView = useInView(gridRef, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-4">
          <span className="section-label">What I Work With</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="text-center mb-14">
          <h2 className="section-title text-slate-100">
            My <span className="text-amber-DEFAULT">Skills</span>
          </h2>
        </ScrollReveal>

        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.4, 0, 0.2, 1],
              }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="glass-card p-5 text-center cursor-default group"
            >
              <span className="text-3xl mb-3 block">{skill.icon}</span>
              <div className="font-head font-bold text-sm text-slate-100 mb-1 group-hover:text-amber-DEFAULT transition-colors">
                {skill.name}
              </div>
              <div className="text-[11px] tracking-wide text-amber-DEFAULT/80 font-medium">
                {skill.level}
              </div>

              {/* Bottom glow line */}
              <motion.div
                className="h-px mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(to right, transparent, ${skill.color}60, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
