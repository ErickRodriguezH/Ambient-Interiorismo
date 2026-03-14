import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import Gallery from '@/components/sections/Gallery'

const SUBCATEGORIAS = [
  {
    id: 'papel-tapiz',
    title: 'Papel Tapiz',
    desc: 'Transforma cualquier pared con texturas, patrones y colores que van desde lo clásico hasta lo más contemporáneo. Instalación limpia y profesional sin necesidad de pintura.',
    img: '/images/pisos/papel-tapiz.jpg',
    images: [
      { src: '/images/pisos/papel-tapiz.jpg', alt: 'Papel tapiz instalado', caption: 'Papel tapiz premium' },
    ],
  },
  {
    id: 'lambrin',
    title: 'Lambrín',
    desc: 'Revestimiento de madera para paredes que aporta calidez, textura y carácter a cualquier espacio. Ideal para salas, estudios, habitaciones y pasillos.',
    img: '/images/pisos/lambrin.jpg',
    images: [
      { src: '/images/pisos/lambrin.jpg', alt: 'Lambrín de madera en pared', caption: 'Lambrín residencial' },
    ],
  },
  {
    id: 'madera',
    title: 'Acabados en Madera',
    desc: 'Recubrimientos, pisos flotantes y revestimientos de madera natural y laminada. Calidez y durabilidad para habitaciones, salas y áreas comunes.',
    img: '/images/pisos/madera.jpg',
    images: [
      { src: '/images/pisos/madera-2.jpg', alt: 'Piso de madera laminada', caption: 'Madera laminada' },
    ],
  },
  {
    id: 'cocina',
    title: 'Acabados en Cocina',
    desc: 'Renovación completa de cocinas con materiales de alta calidad: pisos, backsplash, revestimientos de pared y más. Funcionalidad y estética en perfecta armonía.',
    img: '/images/pisos/cocina-1.jpg',
    images: [
      { src: '/images/pisos/cocina-1.jpg', alt: 'Renovación de cocina', caption: 'Cocina renovada' },
      { src: '/images/pisos/cocina-2.jpg', alt: 'Acabados cocina premium', caption: 'Acabados premium' },
    ],
  },
]

export default function PisosInteriorismoPage() {
  return (
    <div>
      <PageHero
        title="Pisos e Interiorismo"
        subtitle="Acabados de interior"
        description="Renovamos habitaciones, cocinas y áreas comunes con materiales de alta calidad. Papel tapiz, lambrín, madera y acabados que crean ambientes únicos."
        imageSrc="/images/pisos/madera.jpg"
        imageAlt="Pisos e Interiorismo Ambienta"
        ctaLabel="Solicitar presupuesto"
        ctaHref="https://wa.me/525573944084"
      />

      {/* Intro */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-charcoal/60 text-lg leading-relaxed">
            Transformamos habitaciones, lugares comunes y cocinas con materiales diversos y de alta calidad
            para renovarlos, creando experiencias de diseño de interiores personalizados que reflejan
            el estilo único de cada cliente.
          </p>
        </div>
      </section>

      {/* Subcategorías */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {SUBCATEGORIAS.map((sub, idx) => (
            <div key={sub.id} id={sub.id}>
              <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-10`}>
                {/* Image */}
                <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg img-hover-zoom">
                  <Image
                    src={sub.img}
                    alt={sub.title}
                    fill
                    className="object-cover transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
                    {String(idx + 1).padStart(2, '0')} · Acabado
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mb-4">{sub.title}</h2>
                  <p className="text-charcoal/60 leading-relaxed mb-6">{sub.desc}</p>
                  <a
                    href="https://wa.me/525573944084"
                    className="inline-flex items-center gap-2 border border-charcoal text-charcoal px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-charcoal hover:text-white transition-colors group"
                  >
                    Solicitar información
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Sub-gallery if multiple images */}
              {sub.images.length > 1 && (
                <Gallery images={sub.images} columns={2} />
              )}

              {idx < SUBCATEGORIAS.length - 1 && (
                <hr className="mt-20 border-gray-100" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-charcoal py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Nuestro proceso</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">
            De la idea a la realidad
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { num: '01', title: 'Consulta', desc: 'Visitamos tu espacio y entendemos tu visión y necesidades.' },
              { num: '02', title: 'Propuesta', desc: 'Diseñamos una solución con materiales y acabados a tu medida.' },
              { num: '03', title: 'Instalación', desc: 'Ejecutamos el proyecto con precisión y cuidado profesional.' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-gold font-serif text-4xl mb-3">{step.num}</div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* CTA */}
      <section className="bg-cream-dark py-16 px-6 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">
          Renueva tu espacio hoy
        </h2>
        <p className="text-charcoal/60 mb-6">
          Los proyectos de interiorismo requieren visita técnica. Contáctanos para una consulta gratuita.
        </p>
        <a
          href="https://wa.me/525573944084?text=Hola%2C%20me%20interesa%20un%20proyecto%20de%20interiorismo%20con%20Ambienta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-charcoal text-white px-8 py-4 rounded-lg font-semibold hover:bg-charcoal-light transition-colors group"
        >
          Hablar con un asesor
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      </section>
    </div>
  )
}
