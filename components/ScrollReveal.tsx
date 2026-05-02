'use client'

import { useRef, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'scale'
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const getInitial = () => {
    switch (direction) {
      case 'left':  return { opacity: 0, x: -40 }
      case 'right': return { opacity: 0, x: 40 }
      case 'scale': return { opacity: 0, scale: 0.92 }
      default:      return { opacity: 0, y: 30 }
    }
  }

  const getAnimate = () => {
    if (isInView) {
      return direction === 'left' || direction === 'right'
        ? { opacity: 1, x: 0 }
        : direction === 'scale'
        ? { opacity: 1, scale: 1 }
        : { opacity: 1, y: 0 }
    }
    return getInitial()
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={getAnimate()}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
