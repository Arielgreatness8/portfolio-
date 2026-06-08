'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Design {
  id: string
  title: string
  url: string
  date: string
}

export default function AdminPage() {
  const [auth, setAuth] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [designs, setDesigns] = useState<Design[]>([])
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState('')
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')

  const handleLogin = () => {
    if (password === '*#*#440sets') {
      setAuth(true)
      setError('')
      loadDesigns()
    } else {
      setError('Wrong password. Try again.')
    }
  }

  const loadDesigns = () => {
    fetch('/api/designs')
      .then(r => r.json())
      .then(setDesigns)
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) {
      setFile(f)
      setPreview(URL.createObjectURL(f))
    }
  }

  const handleUpload = async () => {
    if (!file || !title) { setMessage('Please add a title and image'); return }
    setUploading(true)
    setMessage('')
    const reader = new FileReader()
    reader.onload = async () => {
      const base64 = (reader.result as string).split(',')[1]
      const res = await fetch('/api/designs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          image: base64,
          filename: file.name,
          password: '*#*#440sets',
        }),
      })
      if (res.ok) {
        setMessage('Design uploaded successfully!')
        setTitle('')
        setFile(null)
        setPreview('')
        loadDesigns()
      } else {
        setMessage('Upload failed. Try again.')
      }
      setUploading(false)
    }
    reader.readAsDataURL(file)
  }

  const handleDelete = async (id: string) => {
    await fetch('/api/designs', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, password: '*#*#440sets' }),
    })
    loadDesigns()
  }

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{background:'#0A0A0F'}}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-10 w-full max-w-sm mx-6"
        >
          <div className="text-center mb-8">
            <div className="text-4xl mb-3">🔐</div>
            <h1 className="font-head font-bold text-xl text-slate-100">Admin Panel</h1>
            <p className="text-slate-500 text-sm mt-1">Enter password to continue</p>
          </div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-100 text-sm outline-none focus:border-purple-500 mb-3"
          />
          {error && <p className="text-red-400 text-xs mb-3">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-lg font-bold text-sm text-white"
            style={{background:'linear-gradient(135deg,#A855F7,#7C3AED)'}}
          >
            Login
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-6 py-10" style={{background:'#0A0A0F'}}>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-head font-bold text-2xl text-slate-100">Design Gallery Admin</h1>
          <a href="/designs" className="text-purple-400 text-sm hover:text-purple-300">View Gallery →</a>
        </div>

        {/* Upload form */}
        <div className="glass-card p-6 mb-8">
          <h2 className="font-head font-bold text-slate-100 mb-4">Upload New Design</h2>
          <input
            type="text"
            placeholder="Design title (e.g. Church Flyer 2025)"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-100 text-sm outline-none focus:border-purple-500 mb-3"
          />
          <label className="block w-full border-2 border-dashed border-purple-500/30 rounded-lg p-6 text-center cursor-pointer hover:border-purple-500/60 transition-colors mb-3">
            <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
            {preview ? (
              <img src={preview} alt="preview" className="max-h-48 mx-auto rounded-lg object-contain" />
            ) : (
              <div>
                <div className="text-3xl mb-2">📁</div>
                <p className="text-slate-400 text-sm">Tap to select image from phone</p>
              </div>
            )}
          </label>
          {message && (
            <p className={`text-sm mb-3 ${message.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </p>
          )}
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="w-full py-3 rounded-lg font-bold text-sm text-white transition-opacity"
            style={{background:'linear-gradient(135deg,#A855F7,#7C3AED)', opacity: uploading ? 0.6 : 1}}
          >
            {uploading ? 'Uploading...' : 'Upload Design'}
          </button>
        </div>

        {/* Existing designs */}
        <h2 className="font-head font-bold text-slate-100 mb-4">Your Designs ({designs.length})</h2>
        <div className="grid grid-cols-2 gap-4">
          {designs.map(d => (
            <div key={d.id} className="glass-card overflow-hidden">
              <img src={d.url} alt={d.title} className="w-full h-32 object-cover" />
              <div className="p-3">
                <p className="text-slate-200 text-xs font-semibold truncate mb-2">{d.title}</p>
                <button
                  onClick={() => handleDelete(d.id)}
                  className="text-red-400 text-xs hover:text-red-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
