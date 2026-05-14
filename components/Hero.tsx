'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
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
      className="relative z-10 min-h-screen flex items-center justify-center pt-16 text-center"
      style={{ padding: '80px 24px 40px', overflowX: 'hidden' }}
    >
      <div style={{ maxWidth: '680px', width: '100%', margin: '0 auto' }}>

        {/* Badge */}
        <motion.div {...fadeUp(0.1)}>
          <span
            style={{
              display: 'inline-block',
              fontSize: 'clamp(9px, 2vw, 11px)',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#A855F7',
              border: '1px solid rgba(168,85,247,0.3)',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(168,85,247,0.07)',
              marginBottom: '20px',
              whiteSpace: 'nowrap',
            }}
          >
            Frontend Developer &amp; Graphic Designer
          </span>
        </motion.div>

        {/* Name */}
        <motion.div {...fadeUp(0.25)}>
          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              marginBottom: '12px',
              color: '#F1F5F9',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            <span style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)', display: 'block' }}>
              Chinonso{' '}
              <span style={{ color: '#A855F7' }}>Ariel</span>
            </span>
            <span
              style={{
                fontSize: 'clamp(1rem, 4vw, 2rem)',
                color: '#94A3B8',
                fontWeight: 700,
                display: 'block',
                marginTop: '4px',
                letterSpacing: '0',
              }}
            >
              Onyemauchechukwu
            </span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.p
          {...fadeUp(0.4)}
          style={{
            fontSize: 'clamp(0.78rem, 2.5vw, 1rem)',
            color: '#64748B',
            fontWeight: 400,
            letterSpacing: '0.03em',
            marginBottom: '12px',
            lineHeight: 1.6,
          }}
        >
          Digital Communication Specialist · Geomatics Engineering Student @ UNIBEN
        </motion.p>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.55)}
          style={{
            fontSize: 'clamp(0.82rem, 2.2vw, 0.97rem)',
            color: '#475569',
            lineHeight: 1.8,
            marginBottom: '32px',
            maxWidth: '520px',
            margin: '0 auto 32px',
          }}
        >
          I combine technical skills and creative design to build visually engaging,
          user-focused digital experiences that communicate ideas clearly and effectively.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fadeUp(0.7)}
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #A855F7, #7C3AED)',
              color: '#fff',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(0.72rem, 2vw, 0.85rem)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: 'clamp(10px, 2vw, 14px) clamp(20px, 4vw, 32px)',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 24px rgba(168,85,247,0.35)',
              whiteSpace: 'nowrap',
            }}
          >
            View Projects ↓
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              color: '#CBD5E1',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(0.72rem, 2vw, 0.85rem)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: 'clamp(10px, 2vw, 14px) clamp(20px, 4vw, 32px)',
              borderRadius: '8px',
              border: '1px solid rgba(168,85,247,0.25)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Let&apos;s Connect
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          {...fadeUp(0.9)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <motion.div
            style={{
              width: '1px',
              height: '36px',
              background: 'linear-gradient(to bottom, #A855F7, transparent)',
            }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span
            style={{
              fontSize: '9px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#334155',
            }}
          >
            Scroll
          </span>
        </motion.div>

      </div>
    </section>
  )
}
