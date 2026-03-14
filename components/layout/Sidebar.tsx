'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronRight, Phone } from 'lucide-react'

const NAV_ITEMS = [
  { href: '/', label: 'Inicio', emoji: '🏠' },
  { href: '/persianas', label: 'Persianas', emoji: '🪟' },
  { href: '/cortinas', label: 'Cortinas', emoji: '🎭' },
  { href: '/mica-inteligente', label: 'Mica Inteligente', emoji: '✨' },
  { href: '/toldos-pergolas', label: 'Toldos y Pérgolas', emoji: '⛱' },
  { href: '/pisos-interiorismo', label: 'Pisos e Interiorismo', emoji: '🛋' },
] as const

export default function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Cierra el sidebar al cambiar de ruta
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const closeMenu = () => setOpen(false)

  return (
    <>
      {/* Botón hamburguesa (solo mobile) */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-charcoal text-white p-2.5 rounded-lg shadow-lg"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay (solo mobile, cierra el sidebar al hacer click fuera) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`sidebar bg-charcoal flex flex-col ${open ? 'open' : ''}`}
        aria-label="Menú principal"
      >
        {/* Logo / Marca */}
        <div className="p-6 border-b border-white/10">
          <Link href="/" onClick={closeMenu} className="block group">
            <p className="font-serif text-white text-xl font-bold tracking-wider group-hover:text-gold/90 transition-colors">
              AMBIENTA
            </p>
            <p className="text-gold text-[11px] tracking-[0.25em] uppercase mt-1">
              Interiorismo
            </p>
          </Link>
        </div>

        {/* Navegación */}
        <nav className="flex-1 py-6 px-3 overflow-y-auto">
          <p className="text-white/30 text-[10px] uppercase tracking-widest px-3 mb-3">
            Nuestros productos
          </p>

          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      isActive
                        ? 'bg-gold text-charcoal'
                        : 'text-white/70 hover:text-white hover:bg-white/8'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-base">{item.emoji}</span>
                      {item.label}
                    </span>
                    <ChevronRight
                      size={14}
                      className={`transition-transform ${
                        isActive
                          ? 'text-charcoal'
                          : 'text-white/30 group-hover:translate-x-0.5'
                      }`}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

        </nav>

        {/* Pie del sidebar */}
        <div className="p-5 border-t border-white/10">
          <a
            href="https://wa.me/525573944084"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-xs"
          >
            <Phone size={12} />
            <span>55 7394 4084</span>
          </a>
          <p className="text-white/25 text-xs mt-1">Felipe Rodríguez Salazar</p>
        </div>
      </aside>
    </>
  )
}
