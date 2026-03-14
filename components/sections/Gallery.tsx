'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

interface GalleryProps {
  images: { src: string; alt: string; caption?: string }[]
  columns?: 2 | 3 | 4
}

export default function Gallery({ images, columns = 3 }: GalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox((i) => (i !== null ? (i - 1 + images.length) % images.length : null))
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % images.length : null))

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  }[columns]

  return (
    <>
      <div className={`grid ${gridCols} gap-4`}>
        {images.map((img, idx) => (
          <button
            key={idx}
            className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
            onClick={() => setLightbox(idx)}
            aria-label={`Ver imagen: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn
                size={28}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium">{img.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            <X size={22} />
          </button>

          <button
            className="absolute left-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Anterior"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            {images[lightbox].caption && (
              <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
                <p className="text-white/70 text-sm">{images[lightbox].caption}</p>
              </div>
            )}
          </div>

          <button
            className="absolute right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Siguiente"
          >
            <ChevronRight size={28} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === lightbox ? 'bg-gold w-4' : 'bg-white/40'}`}
                onClick={(e) => { e.stopPropagation(); setLightbox(i) }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
