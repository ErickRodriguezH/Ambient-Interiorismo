import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import Gallery from '@/components/sections/Gallery'

const GALLERY_IMAGES = [
  { src: '/images/cortinas/portada.jpg',       alt: 'Cortinas premium a la medida',  caption: 'Cortinas a la medida' },
  { src: '/images/cortinas/instalacion-1.jpg', alt: 'Cortinas azules en habitación', caption: 'Suite residencial' },
]

const ACABADOS = [
  {
    nombre: 'Acabado Moño (Pinch Pleat)',
    desc: 'El acabado clásico con pliegues en la parte superior que aportan volumen y elegancia atemporal. Ideal para espacios formales y tradicionales.',
    features: ['Aspecto clásico y elegante', 'Excelente caída', 'Ideal para salas y comedores', 'Gran variedad de telas'],
  },
  {
    nombre: 'Acabado Riplefold',
    desc: 'Ondas uniformes y modernas que brindan una apariencia limpia y contemporánea. La opción preferida para espacios minimalistas y de diseño actual.',
    features: ['Aspecto contemporáneo', 'Ondas uniformes y limpias', 'Ideal para espacios modernos', 'Fácil de operar'],
  },
]

const COLECCIONES = [
  { nombre: 'Tergal', desc: 'Telas traslúcidas de alta calidad que filtran la luz suavemente. Disponibles en modelos: Terra, Lino, Chiffon, Voile, Liné, Lusso, Gauze, Serenade, Lunet, Sundown y Galaga.' },
  { nombre: 'Blackout', desc: 'Oscurecimiento total para habitaciones y espacios de descanso. Modelos: Nightfail, Stones, Madeiras, Tulum y Drift. La solución perfecta para el descanso completo.' },
]

export default function CortinasPage() {
  return (
    <div>
      <PageHero
        title="Cortinas"
        subtitle="Colección premium"
        description="Elegancia textil que transforma cualquier espacio. Fabricadas a la medida con telas de primera calidad y acabados que reflejan tu personalidad."
        imageSrc="/images/cortinas/portada.jpg"
        imageAlt="Cortinas Ambienta Interiorismo"
      />

      {/* Acabados */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Estilos disponibles</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">Tipos de acabado</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACABADOS.map((a, idx) => (
              <div
                key={a.nombre}
                className={`rounded-2xl p-8 ${idx === 0 ? 'bg-white border border-gray-100 shadow-sm' : 'bg-charcoal'}`}
              >
                <h3 className={`font-serif text-xl mb-3 ${idx === 0 ? 'text-charcoal' : 'text-white'}`}>
                  {a.nombre}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${idx === 0 ? 'text-charcoal/60' : 'text-white/60'}`}>
                  {a.desc}
                </p>
                <ul className="space-y-2">
                  {a.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${idx === 0 ? 'text-charcoal/70' : 'text-white/70'}`}>
                      <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colecciones */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Líneas de producto</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">Nuestras colecciones</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COLECCIONES.map((c) => (
              <div key={c.nombre} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-10 h-0.5 bg-gold mb-4" />
                <h3 className="font-serif text-2xl text-charcoal mb-3">{c.nombre}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{c.desc}</p>
                <Link
                  href="/cotizador?categoria=cortinas"
                  className="inline-flex items-center gap-1.5 text-gold text-sm font-medium mt-5 hover:gap-2.5 transition-all group"
                >
                  Ver opciones <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Portafolio</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">Proyectos realizados</h2>
          </div>
          <Gallery images={GALLERY_IMAGES} columns={3} />
        </div>
      </section>

      {/* Info adicionales */}
      <section className="bg-charcoal py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl text-white mb-2">Accesorios y motorización</h2>
            <p className="text-white/50 text-sm">Para una experiencia completa y funcional</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            {[
              'Cortineros Riplefold 1 y 2 hojas',
              'Cortineros Plits / Moño',
              'Motor de baterías recargable',
              'Control monocanal y multicanal',
              'Kit de motorización por lienzo',
              'Instalación incluida',
            ].map((item) => (
              <div key={item} className="bg-white/8 rounded-xl p-4">
                <p className="text-white/70 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-dark py-16 px-6 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">Diseña tu cortina ideal</h2>
        <p className="text-charcoal/60 mb-6">Ingresa tus medidas y elige el modelo y acabado de tu preferencia.</p>
        <Link
          href="/cotizador?categoria=cortinas"
          className="bg-gold text-charcoal px-8 py-4 rounded-lg font-semibold tracking-wide hover:bg-gold-light transition-colors inline-flex items-center gap-2 group"
        >
          Cotizar cortinas
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </section>
    </div>
  )
}
