'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Background from '@/components/Background'

interface Design {
  id: string
  title: string
  url: string
  date: string
}

export default function DesignsPage() {
  const [designs, setDesigns] = useState<Design[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Design | null>(null)

  useEffect(() => {
    fetch('/api/designs')
      .then(r => r.json())
      .then(data => { setDesigns(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />
      <section className="relative z-10 pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">Creative Works</span>
            <h2 className="section-title text-slate-100">
              Design <span style={{color:'#A855F7'}}>Gallery</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              A collection of graphic design works including flyers, posters, brand identity and more.
            </p>
          </div>

          {loading && (
            <div className="text-center text-slate-500 py-20">Loading designs...</div>
          )}

          {!loading && designs.length === 0 && (
            <div className="text-center text-slate-500 py-20">
              No designs yet. Check back soon!
            </div>
          )}

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {designs.map((design, i) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card overflow-hidden break-inside-avoid cursor-pointer group"
                onClick={() => setSelected(design)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={design.url}
                    alt={design.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                    <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                      <p className="text-white text-xs font-semibold truncate">{design.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-2xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selected.url}
              alt={selected.title}
              className="w-full rounded-2xl object-contain max-h-[80vh]"
            />
            <p className="text-white text-center mt-4 font-semibold">{selected.title}</p>
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </main>
  )
}
