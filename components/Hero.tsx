'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center justify-center pt-16 text-center px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Tag */}
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-purple-400 border border-purple-500/30 px-4 py-1.5 rounded-full bg-purple-500/[0.07] mb-6">
            Frontend Developer &amp; Graphic Designer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.25)}
          className="font-head font-extrabold leading-[1.05] tracking-tight mb-4 text-slate-100"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}
        >
          Chinonso{' '}
          <span className="text-purple-400">Ariel</span>
          <br />
          <span className="text-slate-300" style={{ fontSize: 'clamp(1.6rem, 4vw, 3.2rem)' }}>
            Onyemauchechukwu
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-slate-400 font-light tracking-wide mb-4"
          style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)' }}
        >
          Digital Communication Specialist · Geomatics Engineering Student @ UNIBEN
        </motion.p>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.55)}
          className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed text-sm md:text-base"
        >
          I combine technical skills and creative design to build visually engaging,
          user-focused digital experiences that communicate ideas clearly and effectively.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.7)}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            onClick={scrollToProjects}
            className="btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects ↓
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            className="btn-outline"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Let&apos;s Connect
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          {...fadeUp(0.9)}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-amber-DEFAULT to-transparent"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-[10px] tracking-[0.2em] uppercase text-slate-500">Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
