'use client'

import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Arielgreatness8',
    icon: '⚙️',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/onyemauchechukwu-chinonso-ariel-582042341',
    icon: '💼',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2348086514056?text=Hello%20I%20came%20from%20your%20portfolio',
    icon: '💬',
  },
  {
    label: 'Email',
    href: 'mailto:arielgreatness8@gmail.com',
    icon: '✉️',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title text-slate-100">
            Let&apos;s Work{' '}
            <span className="text-amber-DEFAULT">Together</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-12">
            Have a project in mind? Need a frontend developer or graphic designer?
            I&apos;m always open to new opportunities, collaborations, and creative conversations.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.div
            className="glass-card p-10 md:p-14"
            whileHover={{ boxShadow: '0 0 60px rgba(245,158,11,0.08)' }}
          >
            {/* Email CTA */}
            <p className="text-slate-500 text-xs tracking-widest uppercase mb-3">
              Reach me directly at
            </p>
            <motion.a
              href="mailto:arielgreatness8@gmail.com"
              className="inline-block font-head font-semibold text-lg md:text-xl text-amber-DEFAULT mb-10 border-b border-amber-DEFAULT/30 pb-1 hover:border-amber-DEFAULT transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              arielgreatness8@gmail.com
            </motion.a>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-slate-600 text-xs tracking-widest uppercase">Or find me on</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 justify-center">
              {SOCIAL_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-400 text-sm font-medium hover:border-amber-DEFAULT hover:text-amber-DEFAULT hover:bg-amber-DEFAULT/[0.05] transition-all duration-200"
                >
                  <span className="text-base">{link.icon}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
