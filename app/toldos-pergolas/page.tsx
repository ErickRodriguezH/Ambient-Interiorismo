import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sun, Droplets, Wind } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import Gallery from '@/components/sections/Gallery'

const FEATURES = [
  { icon: Sun, title: 'Protección solar', desc: 'Reduce hasta un 95% la radiación UV directa en terrazas, patios y jardines.' },
  { icon: Droplets, title: 'Resistente a lluvia', desc: 'Materiales impermeables que protegen tu espacio exterior ante cualquier clima.' },
  { icon: Wind, title: 'Resistencia al viento', desc: 'Estructuras diseñadas para soportar vientos moderados sin comprometer la estética.' },
]

const TIPOS = [
  {
    title: 'Toldo Retráctil',
    desc: 'La solución más versátil para terrazas y balcones. Se extiende y recoge fácilmente, protegiendo tu espacio cuando lo necesitas y retirándose en días de buen clima.',
    beneficios: ['Operación manual o motorizada', 'Ajuste de inclinación', 'Amplia gama de telas', 'Instalación en fachada o techo'],
  },
  {
    title: 'Pérgola Bioclimática',
    desc: 'Estructura permanente con lamas orientables que regulan la entrada de luz y ventilación según tus necesidades. El punto de encuentro entre interior y exterior.',
    beneficios: ['Lamas orientables 0°–150°', 'Sensores de lluvia y viento opcionales', 'LED integrado disponible', 'Diseño arquitectónico premium'],
  },
  {
    title: 'Toldo de Brazo',
    desc: 'Ideal para ventanas y balcones. Sistema de brazos articulados que permite una extensión amplia con estructura mínima visible en fachada.',
    beneficios: ['Mínima interferencia en fachada', 'Fácil operación', 'Telas importadas resistentes a UV', 'Medidas a la medida'],
  },
]

const GALLERY_IMAGES = [
  { src: '/images/toldos/proyecto-6.jpg', alt: 'Pérgola bioclimática residencial', caption: 'Pérgola residencial' },
  { src: '/images/toldos/proyecto-1.jpg', alt: 'Toldo retráctil terraza', caption: 'Terraza con toldo' },
  { src: '/images/toldos/proyecto-2.jpg', alt: 'Toldo de brazo balcón', caption: 'Balcón cubierto' },
  { src: '/images/toldos/proyecto-3.jpg', alt: 'Pérgola jardín', caption: 'Jardín privado' },
  { src: '/images/toldos/proyecto-4.jpg', alt: 'Toldo comercial', caption: 'Aplicación comercial' },
  { src: '/images/toldos/proyecto-5.jpg', alt: 'Toldo lateral', caption: 'Protección lateral' },
]

export default function ToldosPergolaPage() {
  return (
    <div>
      <PageHero
        title="Toldos y Pérgolas"
        subtitle="Exteriores premium"
        description="Transforma tus espacios exteriores en áreas de descanso funcionales y elegantes. Materiales de alta calidad, instalación profesional y garantía incluida."
        imageSrc="/images/toldos/proyecto-6.jpg"
        imageAlt="Toldos y Pérgolas Ambienta"
      />

      {/* Features */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-2">{title}</h3>
                <p className="text-charcoal/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Soluciones</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">Nuestras líneas</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TIPOS.map((t, idx) => (
              <div key={t.title} className={`rounded-2xl p-8 ${idx === 1 ? 'bg-charcoal' : 'bg-white shadow-sm'}`}>
                <div className={`text-xs tracking-[0.25em] uppercase mb-3 ${idx === 1 ? 'text-gold' : 'text-gold'}`}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className={`font-serif text-xl mb-3 ${idx === 1 ? 'text-white' : 'text-charcoal'}`}>
                  {t.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${idx === 1 ? 'text-white/60' : 'text-charcoal/60'}`}>
                  {t.desc}
                </p>
                <ul className="space-y-2">
                  {t.beneficios.map((b) => (
                    <li key={b} className={`flex items-start gap-2 text-sm ${idx === 1 ? 'text-white/70' : 'text-charcoal/70'}`}>
                      <CheckCircle2 size={15} className="text-gold mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/toldos/banner.jpg"
            alt="Pérgola exterior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/75" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Diseño exterior</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            Materiales diversos y de alta calidad para renovar tus espacios
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Cada proyecto de toldo o pérgola se diseña y fabrica a medida, considerando
            la arquitectura del espacio, los vientos locales y el estilo visual del cliente.
          </p>
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

      {/* CTA */}
      <section className="bg-cream-dark py-16 px-6 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">
          Tu espacio exterior merece lo mejor
        </h2>
        <p className="text-charcoal/60 mb-6">
          Los toldos y pérgolas requieren visita técnica para medición exacta. Escríbenos.
        </p>
        <a
          href="https://wa.me/525573944084?text=Hola%2C%20me%20interesa%20un%20toldo%20o%20p%C3%A9rgola%20de%20Ambienta%20Interiorismo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-charcoal text-white px-8 py-4 rounded-lg font-semibold hover:bg-charcoal-light transition-colors group"
        >
          Contactar por WhatsApp
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      </section>
    </div>
  )
}
