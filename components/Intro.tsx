'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Intro() {
  const [show, setShow] = useState(false)
  const [exit, setExit] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const seen = localStorage.getItem('caevo_intro_seen')
    if (!seen) {
      setShow(true)
      localStorage.setItem('caevo_intro_seen', 'true')

      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) { clearInterval(interval); return 100 }
          return p + 2
        })
      }, 80)

      const timer = setTimeout(() => {
        setExit(true)
      }, 4500)

      return () => {
        clearInterval(interval)
        clearTimeout(timer)
      }
    }
  }, [])

  if (!show) return null

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#000000' }}
        >
          {/* Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `rgba(168,85,247,${Math.random() * 0.6 + 0.2})`,
                  filter: 'blur(1px)',
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Light streak */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              width: '200px',
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.8), transparent)',
              top: '45%',
              left: '-200px',
            }}
            animate={{ left: ['−200px', '110%'] }}
            transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              filter: 'drop-shadow(0 0 30px rgba(168,85,247,0.5))',
            }}
          >
            <motion.div
              animate={{
                filter: [
                  'drop-shadow(0 0 20px rgba(168,85,247,0.4))',
                  'drop-shadow(0 0 45px rgba(168,85,247,0.8))',
                  'drop-shadow(0 0 20px rgba(168,85,247,0.4))',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/logo-full.png"
                alt="CAEVO"
                width={220}
                height={220}
                style={{ objectFit: 'contain' }}
                priority
              />
            </motion.div>
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
            className="mt-6 text-center"
          >
            <div
              className="tracking-[0.5em] text-3xl font-bold uppercase"
              style={{
                fontFamily: 'Syne, sans-serif',
                background: 'linear-gradient(135deg, #ffffff, #A855F7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              CAEVO
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: 'easeOut' }}
            className="mt-3 text-xs tracking-[0.3em] uppercase"
            style={{ color: 'rgba(168,85,247,0.7)' }}
          >
            Design • Technology • Vision
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2"
            style={{ width: '200px' }}
          >
            <div
              className="w-full rounded-full overflow-hidden"
              style={{ height: '1.5px', background: 'rgba(255,255,255,0.1)' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(to right, #A855F7, #6D28D9)',
                  width: `${progress}%`,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
