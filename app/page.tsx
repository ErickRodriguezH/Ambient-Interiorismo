import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Shield, Clock, Palette } from 'lucide-react'

const CATEGORIES = [
  {
    href: '/persianas',
    title: 'Persianas',
    subtitle: 'Enrollables, Screen & Panel Japonés',
    img: '/images/persianas/tipo-blackout.jpg',
    desc: 'Control de luz, privacidad y estilo en un solo producto. Desde blackout hasta traslúcidas.',
    accent: '#C9A96E',
  },
  {
    href: '/cortinas',
    title: 'Cortinas',
    subtitle: 'Tergal, Blackout & acabados premium',
    img: '/images/cortinas/portada.jpg',
    desc: 'Elegancia textil para transformar cualquier espacio. Acabados moño y riplefold disponibles.',
    accent: '#B8860B',
  },
  {
    href: '/mica-inteligente',
    title: 'Mica Inteligente',
    subtitle: 'Tecnología de privacidad al instante',
    img: '/images/mica/proyecto-1.jpg',
    desc: 'Lámina inteligente que pasa de transparente a opaco con solo presionar un botón.',
    accent: '#4A90D9',
  },
  {
    href: '/toldos-pergolas',
    title: 'Toldos y Pérgolas',
    subtitle: 'Espacios exteriores funcionales',
    img: '/images/toldos/proyecto-6.jpg',
    desc: 'Soluciones para exteriores que combinan funcionalidad con diseño de alto impacto.',
    accent: '#6B8E5A',
  },
  {
    href: '/pisos-interiorismo',
    title: 'Pisos e Interiorismo',
    subtitle: 'Papel tapiz, lambrín, madera y más',
    img: '/images/pisos/madera.jpg',
    desc: 'Acabados de alta calidad: papel tapiz, lambrín, madera y renovaciones de cocina y baño.',
    accent: '#8B6F5E',
  },
]

const VALUES = [
  { icon: Star, label: 'Calidad Premium', desc: 'Materiales de primera selección en cada proyecto' },
  { icon: Palette, label: 'Diseño Personalizado', desc: 'Cada espacio es único y lo tratamos así' },
  { icon: Shield, label: 'Garantía', desc: '1 año en persianas, 2 años en motores' },
  { icon: Clock, label: 'Atención Oportuna', desc: 'Respuesta rápida y entrega puntual' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-charcoal">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/persianas/tipo-blackout.jpg"
            alt="Ambienta Interiorismo hero"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-charcoal/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="font-serif text-white text-4xl font-bold tracking-widest">AMBIENTA</p>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mt-1">Interiorismo</p>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Transformamos
            <br />
            <span className="italic text-gold">espacios</span>
            <br />
            en experiencias
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Diseño de interiores personalizado con materiales de alta calidad.
            Persianas, cortinas, toldos, pisos y acabados premium en CDMX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative group/tip">
              <Link
                href="/cotizador"
                className="bg-gold text-charcoal px-8 py-4 rounded-lg font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Obtén tu Pre-cotización
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              {/* Tooltip */}
              <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 rounded-lg bg-charcoal/95 border border-white/15 px-3 py-2 text-center text-xs text-white/80 opacity-0 group-hover/tip:opacity-100 transition-opacity duration-200">
                Por el momento solo disponible para persianas y cortinas
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-charcoal/95" />
              </div>
            </div>
            <a
              href="https://wa.me/525573944084"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 text-white px-8 py-4 rounded-lg font-medium text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-200"
            >
              Contactar asesor
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Explora</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-bounce" />
        </div>
      </section>

      {/* ── MISIÓN ───────────────────────────────────────── */}
      <section className="py-20 px-8 max-w-5xl mx-auto text-center">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Nuestra esencia</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mb-6">
          Creamos espacios únicos y funcionales
        </h2>
        <p className="text-charcoal/60 text-lg leading-relaxed max-w-3xl mx-auto">
          En Ambienta nos dedicamos a crear espacios únicos y funcionales que reflejen
          la personalidad y estilo de nuestros clientes. Ofrecemos soluciones de
          interiorismo innovadoras y sostenibles que mejoran la calidad de vida
          a través del diseño.
        </p>
      </section>

      {/* ── CATEGORÍAS ───────────────────────────────────── */}
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Lo que ofrecemos</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">Nuestros productos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 img-hover-zoom">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-serif text-xl font-medium">{cat.title}</span>
                  <p className="text-white/70 text-xs mt-0.5">{cat.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-charcoal/60 text-sm leading-relaxed">{cat.desc}</p>
                <div className="flex items-center gap-1.5 mt-4 text-gold text-sm font-medium group-hover:gap-2.5 transition-all">
                  Ver colección
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* ── VALORES ──────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Por qué elegirnos</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">Nuestros valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center group">
                <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center mx-auto mb-4 group-hover:bg-gold transition-colors duration-300">
                  <Icon size={22} className="text-gold group-hover:text-charcoal transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-2">{label}</h3>
                <p className="text-charcoal/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className="py-20 px-6 bg-cream-dark text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mb-4">
          ¿Listo para transformar
          <span className="text-gold italic"> tu espacio</span>?
        </h2>
        <p className="text-charcoal/60 mb-8 text-lg max-w-xl mx-auto">
          Habla con nuestros asesores o genera tu pre-cotización en segundos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/cotizador"
            className="bg-charcoal text-white px-8 py-4 rounded-lg font-semibold tracking-wide hover:bg-charcoal-light transition-colors"
          >
            Pre-cotizar ahora
          </Link>
          <a
            href="https://wa.me/525573944084"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-charcoal text-charcoal px-8 py-4 rounded-lg font-semibold tracking-wide hover:bg-charcoal hover:text-white transition-colors"
          >
            WhatsApp: 55 7394 4084
          </a>
        </div>
        <p className="text-charcoal/40 text-sm mt-6">
          Asesor: Felipe Rodríguez Salazar
        </p>
      </section>
    </div>
  )
}
