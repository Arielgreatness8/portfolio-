'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      let current = 'hero'
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/80 backdrop-blur-2xl border-b border-white/10 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
          className="cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/logo.png" alt="Logo" style={{height:"38px",width:"auto"}} />
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <li key={link.href}>
                <motion.a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className={`text-xs font-semibold tracking-[0.12em] uppercase transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-amber-DEFAULT' : 'text-slate-400 hover:text-amber-DEFAULT'
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="h-px bg-amber-DEFAULT mt-1 w-full"
                    />
                  )}
                </motion.a>
              </li>
            )
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-slate-400 origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5 bg-slate-400"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 bg-slate-400 origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-navy/95 backdrop-blur-2xl border-b border-white/10"
          >
            <ul className="flex flex-col list-none py-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="block px-8 py-4 text-sm font-semibold tracking-widest uppercase text-slate-400 hover:text-amber-DEFAULT transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
