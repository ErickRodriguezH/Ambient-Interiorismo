import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import Gallery from '@/components/sections/Gallery'

const TIPOS = [
  {
    title: 'Enrollable Blackout',
    desc: 'Control total de luz para espacios de descanso o donde requieres oscuridad completa. Propiedades de retención térmica que mantienen la calidez de tu hogar. Adaptable a cualquier tipo de decoración.',
    img: '/images/persianas/tipo-blackout.jpg',
    features: ['Oscurecimiento total', 'Retención térmica', 'Uso residencial y comercial', 'Diseño minimalista'],
    href: '/cotizador?tipo=enrollable-blackout',
  },
  {
    title: 'Enrollable Filtro Ligero',
    desc: 'Persiana de estilo minimalista ideal para permitir el paso de la luz y mantener iluminada tu habitación sin perder la privacidad. Para uso residencial y comercial, en ventanas interiores o exteriores.',
    img: '/images/persianas/tipo-filtro-ligero.jpg',
    features: ['Filtra la luz suavemente', 'Mantiene privacidad', 'Interior y exterior', 'Estética minimalista'],
    href: '/cotizador?tipo=enrollable-translucida',
  },
  {
    title: 'Enrollable Screen',
    desc: 'Tejido moderno y versátil que ofrece privacidad y reduce la iluminación filtrando rayos UV de manera natural, mientras agrega colores y texturas mediante una amplia variedad de telas.',
    img: '/images/persianas/tipo-screen.jpg',
    features: ['Filtra rayos UV', 'Amplia variedad de tejidos', 'Privacidad sin perder vista', 'Moderna y versátil'],
    href: '/cotizador?tipo=enrollable-translucida',
  },
]

const GALLERY_IMAGES = [
  { src: '/images/persianas/proyecto-1.jpg',   alt: 'Persianas screen en terraza',         caption: 'Espacio exterior' },
  { src: '/images/persianas/proyecto-1-2.jpg', alt: 'Persianas enrollables en habitación',  caption: 'Suite residencial' },
  { src: '/images/persianas/proyecto-2.jpg',   alt: 'Persiana sheer en sala de juntas',     caption: 'Sala de juntas' },
  { src: '/images/persianas/proyecto-5.jpg',   alt: 'Panel japonés translúcido',             caption: 'Panel japonés' },
]

export default function PersianaPage() {
  return (
    <div>
      <PageHero
        title="Persianas"
        subtitle="Colección premium"
        description="Control de luz, privacidad y diseño en un solo producto. Fabricadas a la medida exacta de tu ventana con los mejores materiales del mercado."
        imageSrc="/images/persianas/tipo-blackout-banner.jpg"
        imageAlt="Persianas Ambienta"
      />

      {/* Nota técnica */}
      <div className="bg-gold/10 border-l-4 border-gold px-8 py-4">
        <p className="text-sm text-charcoal/70">
          <span className="font-semibold text-charcoal">Nota:</span>{' '}
          No se fabrican persianas mayores a 3.00 m de ancho. La cotización incluye instalación.
        </p>
      </div>

      {/* Tipos de persianas */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Catálogo</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
              Tipos de persianas
            </h2>
          </div>

          <div className="space-y-16">
            {TIPOS.map((tipo, idx) => (
              <div
                key={tipo.title}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg img-hover-zoom">
                  <Image
                    src={tipo.img}
                    alt={tipo.title}
                    fill
                    className="object-cover transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal">{tipo.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed">{tipo.desc}</p>
                  <ul className="space-y-2">
                    {tipo.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-charcoal/70">
                        <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tipo.href}
                    className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-charcoal-light transition-colors group mt-2"
                  >
                    Cotizar este tipo
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sheer / Duo info card */}
      <section className="bg-charcoal py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">También disponibles</p>
          <h2 className="font-serif text-3xl text-white mb-4">Sheer & Panel Japonés</h2>
          <p className="text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
            Contamos con persiana tipo Sheer Traslúcida, Sheer Dim Out y Panel Japonés para espacios
            que requieren un acabado más decorativo y sofisticado. Pregunta por nuestro catálogo completo.
          </p>
          <Link
            href="/cotizador"
            className="inline-flex items-center gap-2 border border-gold text-gold px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gold hover:text-charcoal transition-colors group"
          >
            Ver todas las opciones en el cotizador
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Portafolio</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">Proyectos realizados</h2>
            <p className="text-charcoal/50 mt-2 max-w-xl mx-auto text-sm">
              Cada ventana, un proyecto. Aquí algunos de los espacios que hemos transformado.
            </p>
          </div>
          <Gallery images={GALLERY_IMAGES} columns={3} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-dark py-16 px-6 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">
          ¿Cuántas ventanas tienes?
        </h2>
        <p className="text-charcoal/60 mb-6">Calcula el costo aproximado en menos de 2 minutos.</p>
        <Link
          href="/cotizador?categoria=persianas"
          className="bg-gold text-charcoal px-8 py-4 rounded-lg font-semibold tracking-wide hover:bg-gold-light transition-colors inline-flex items-center gap-2 group"
        >
          Cotizar persianas
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </section>
    </div>
  )
}
