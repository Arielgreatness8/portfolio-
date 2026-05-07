'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

interface Project {
  title: string
  description: string
  techStack: string[]
  liveLink: string
  githubLink: string
  emoji: string
  gradient: string
}

const PROJECTS: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description:
      'A responsive animated portfolio built with React and Framer Motion featuring glassmorphism UI and scroll-triggered animations. Designed to showcase work and communicate skills effectively.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
    liveLink: 'https://wa.me/2348086514056?text=Hello%20I%20came%20from%20your%20portfolio',
    githubLink: 'https://github.com/Arielgreatness8',
    emoji: '🌟',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    title: 'Landing Page Design',
    description:
      'A modern responsive landing page with clean UI design and smooth animations, focused on user engagement and conversion. Emphasizes strong visual hierarchy and call-to-action placement.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveLink: 'https://wa.me/2348086514056?text=Hello%20I%20came%20from%20your%20portfolio',
    githubLink: 'https://github.com/Arielgreatness8',
    emoji: '🚀',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -6 }}
      className="glass-card overflow-hidden flex flex-col group"
    >
      {/* Thumbnail */}
      <div
        className={`w-full h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
      >
        <motion.span
          className="text-6xl select-none z-10"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {project.emoji}
        </motion.span>

        {/* Sheen overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/60" />

        {/* Animated glow on hover */}
        <motion.div
          className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-head font-bold text-lg text-slate-100 mb-3 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full border border-purple-500/30 text-purple-400 bg-purple-500/[0.07]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 text-center py-2.5 rounded-lg bg-purple-500 text-navy text-xs font-bold tracking-widest uppercase transition-colors hover:bg-amber-dark"
          >
            Live Demo ↗
          </motion.a>
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 text-center py-2.5 rounded-lg border border-white/10 text-slate-400 text-xs font-semibold tracking-widest uppercase transition-all hover:border-purple-500 hover:text-purple-400"
          >
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-4">
          <span className="section-label">My Work</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="text-center mb-14">
          <h2 className="section-title text-slate-100">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
