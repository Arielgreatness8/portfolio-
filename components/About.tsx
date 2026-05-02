'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const STATS = [
  { num: '2+', label: 'Years Experience' },
  { num: '10+', label: 'Projects Completed' },
  { num: '5+', label: 'Skills Mastered' },
  { num: '∞', label: 'Drive to Create' },
]

export default function About() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <ScrollReveal direction="left">
            <span className="section-label">About Me</span>
            <h2 className="section-title text-slate-100">
              Crafting digital experiences that{' '}
              <span className="text-amber-DEFAULT">actually connect</span>
            </h2>
            <div className="space-y-4 text-slate-400 text-sm md:text-base leading-loose">
              <p>
                I&apos;m Chinonso Ariel Onyemauchechukwu — a Frontend Developer and Graphic
                Designer currently studying Geomatics Engineering at the University of Benin.
                My journey started with curiosity about how beautiful interfaces come to life,
                and evolved into a full-fledged passion for the intersection of technology and design.
              </p>
              <p>
                I specialize in building pixel-perfect, responsive interfaces that don&apos;t
                just look stunning — they communicate ideas with purpose. Whether it&apos;s a
                landing page, a brand identity, or a complex web application, I bring a
                designer&apos;s eye and a developer&apos;s precision to every project.
              </p>
              <p>
                My goal is to bridge the gap between engineering logic and creative expression,
                building digital products that are as functional as they are beautiful.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats grid */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="glass-card p-6 md:p-8"
              >
                <div className="font-head font-extrabold text-4xl text-amber-DEFAULT mb-1">
                  {stat.num}
                </div>
                <div className="text-xs text-slate-500 tracking-wide uppercase font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
