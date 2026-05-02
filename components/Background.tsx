'use client'

import { motion } from 'framer-motion'

export default function Background() {
  return (
    <>
      {/* Fixed gradient canvas */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,158,11,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(30,60,120,0.18) 0%, transparent 60%),
            linear-gradient(160deg, #070B14 0%, #0D1424 60%, #070B14 100%)
          `,
        }}
      />

      {/* Animated orb 1 — amber top-right */}
      <motion.div
        className="fixed pointer-events-none z-0 rounded-full"
        style={{
          width: 500,
          height: 500,
          top: -150,
          right: -100,
          background: 'rgba(245,158,11,0.05)',
          filter: 'blur(80px)',
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated orb 2 — blue bottom-left */}
      <motion.div
        className="fixed pointer-events-none z-0 rounded-full"
        style={{
          width: 400,
          height: 400,
          bottom: -100,
          left: -80,
          background: 'rgba(30,60,140,0.10)',
          filter: 'blur(80px)',
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          delay: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </>
  )
}
