'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const VIDEOS = [
  '/videos/mica/video-1.mp4',
  '/videos/mica/video-2.mp4',
  '/videos/mica/video-3.mp4',
  '/videos/mica/video-4.mp4',
  '/videos/mica/video-5.mp4',
]

export default function MicaVideoCarousel() {
  const [current, setCurrent] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const thumbRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Pause all main videos except the current one
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return
      if (i !== current) v.pause()
    })
  }, [current])

  // Seek thumbnails to 0.5s so the first frame renders
  useEffect(() => {
    thumbRefs.current.forEach((v) => {
      if (!v) return
      const seek = () => { v.currentTime = 0.5 }
      if (v.readyState >= 1) {
        seek()
      } else {
        v.addEventListener('loadedmetadata', seek, { once: true })
      }
    })
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + VIDEOS.length) % VIDEOS.length)
  const next = () => setCurrent((c) => (c + 1) % VIDEOS.length)

  return (
    <div className="relative">
      {/* Main video */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black">
        <div className="relative aspect-video">
          {VIDEOS.map((src, i) => (
            <video
              key={src}
              ref={(el) => { videoRefs.current[i] = el }}
              src={src}
              controls
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                i === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Video anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-charcoal transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          aria-label="Siguiente video"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-charcoal transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Counter */}
        <div className="absolute top-3 right-3 z-20 bg-black/60 text-white/70 text-xs px-2.5 py-1 rounded-full border border-white/10">
          {current + 1} / {VIDEOS.length}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Video ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 h-2 bg-gold'
                : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-5 gap-2 mt-4">
        {VIDEOS.map((src, i) => (
          <button
            key={src}
            onClick={() => setCurrent(i)}
            className={`rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              i === current ? 'border-gold' : 'border-white/10 hover:border-white/40'
            }`}
          >
            <video
              ref={(el) => { thumbRefs.current[i] = el }}
              src={src}
              muted
              playsInline
              preload="metadata"
              className="w-full aspect-video object-cover pointer-events-none"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
