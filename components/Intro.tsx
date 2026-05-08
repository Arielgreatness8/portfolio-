'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Intro() {
  const [show, setShow] = useState(false)
  const [exit, setExit] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const count = parseInt(localStorage.getItem('caevo_intro_count') || '0')
    if (count < 5) {
      setShow(true)
      localStorage.setItem('caevo_intro_count', String(count + 1))
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) { clearInterval(interval); return 100 }
          return p + 2
        })
      }, 80)
      const timer = setTimeout(() => setExit(true), 4500)
      return () => { clearInterval(interval); clearTimeout(timer) }
    }
  }, [])

  if (!show) return null

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#000000' }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(168,85,247,0.5)`,
              }}
              animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.img
              src="/logo-full.png"
              alt="CAEVO"
              style={{ width: '220px', height: '220px', objectFit: 'contain' }}
              animate={{
                filter: [
                  'drop-shadow(0 0 20px rgba(168,85,247,0.4))',
                  'drop-shadow(0 0 50px rgba(168,85,247,0.9))',
                  'drop-shadow(0 0 20px rgba(168,85,247,0.4))',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
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

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-3 text-xs tracking-[0.3em] uppercase"
            style={{ color: 'rgba(168,85,247,0.7)' }}
          >
            Design • Technology • Vision
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2"
            style={{ width: '200px' }}
          >
            <div style={{ height: '1.5px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
              <div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: 'linear-gradient(to right, #A855F7, #6D28D9)',
                  borderRadius: '999px',
                  transition: 'width 0.1s linear',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
