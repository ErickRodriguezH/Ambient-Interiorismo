'use client'

import { useState } from 'react'

const WA_NUMBER = '525573944084'
const WA_MESSAGE = encodeURIComponent(
  '¡Hola, Felipe! Visité su sitio web y me gustaría recibir más información sobre sus productos y servicios de Ambienta Interiorismo.'
)

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Contáctanos por WhatsApp"
    >
      {/* Tooltip label */}
      <span
        className={`
          bg-charcoal text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg
          transition-all duration-300 whitespace-nowrap
          ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'}
        `}
      >
        ¿Tienes dudas? Escríbenos
      </span>

      {/* Button */}
      <div className="relative">
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
          <WhatsAppIcon />
        </div>
      </div>
    </a>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2.003C6.49 2.003 2 6.49 2 12.003c0 1.768.467 3.459 1.328 4.944L2 22.003l5.19-1.31A9.94 9.94 0 0012.004 22c5.514 0 10.004-4.487 10.004-10S17.518 2.003 12.004 2.003zm0 18.23a8.207 8.207 0 01-4.188-1.15l-.3-.179-3.083.779.807-3.003-.196-.31a8.208 8.208 0 01-1.269-4.367c0-4.545 3.697-8.242 8.242-8.242 4.546 0 8.243 3.697 8.243 8.242-.001 4.546-3.698 8.23-8.256 8.23z" />
    </svg>
  )
}
