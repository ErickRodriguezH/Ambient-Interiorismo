import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap, Eye, EyeOff, Thermometer, Shield, Wifi } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import Gallery from '@/components/sections/Gallery'
import MicaVideoCarousel from '@/components/sections/MicaVideoCarousel'

const BENEFICIOS = [
  {
    icon: Eye,
    title: 'Transparencia al instante',
    desc: 'Pasa de vidrio transparente a opaco en milisegundos. Control total de privacidad con solo presionar un botón o comando de voz.',
  },
  {
    icon: Shield,
    title: 'Privacidad garantizada',
    desc: 'Cuando está activada, la lámina bloquea el 98% de la visión exterior, manteniendo la privacidad total en cualquier espacio.',
  },
  {
    icon: Thermometer,
    title: 'Control solar',
    desc: 'Reduce el paso de calor solar hasta un 78%, contribuyendo al ahorro energético y manteniendo temperaturas confortables.',
  },
  {
    icon: Zap,
    title: 'Bajo consumo',
    desc: 'Opera con voltaje de 60V AC, con un consumo mínimo de energía. Compatible con sistemas de domótica y automatización del hogar.',
  },
  {
    icon: Wifi,
    title: 'Automatizable',
    desc: 'Integración con sistemas inteligentes para control remoto, programación horaria y comandos de voz con Alexa o Google Home.',
  },
  {
    icon: EyeOff,
    title: 'Proyección incluida',
    desc: 'La superficie opaca puede usarse como pantalla de proyección para presentaciones, cine en casa o reuniones de negocio.',
  },
]

const GALLERY_IMAGES = [
  { src: '/images/mica/proyecto-1.jpg',      alt: 'Mica inteligente en oficina',     caption: 'Oficina corporativa' },
  { src: '/images/mica/instalacion-lab.jpg', alt: 'Mica inteligente en laboratorio', caption: 'Instalación comercial' },
]

const SPECS = [
  { label: 'Voltaje de operación', value: '60V AC' },
  { label: 'Consumo energético', value: '< 5W/m²' },
  { label: 'Tiempo de respuesta', value: '< 10ms' },
  { label: 'Vida útil', value: '+20 años' },
  { label: 'Grosor de lámina', value: '0.4 mm' },
  { label: 'Temperatura de operación', value: '-20°C a +70°C' },
  { label: 'Reducción de calor solar', value: 'Hasta 78%' },
  { label: 'Bloqueo de UV', value: '99.9%' },
]

const APLICACIONES = [
  'Oficinas corporativas y salas de juntas',
  'Residencias y suites de lujo',
  'Consultorios médicos y dentales',
  'Hoteles y spas de alta gama',
  'Ventanas y mamparas de baño',
  'Divisiones internas de espacios',
  'Escaparates comerciales',
  'Automóviles y transporte premium',
]

export default function MicaInteligentePage() {
  return (
    <div>
      <PageHero
        title="Mica Inteligente"
        subtitle="Tecnología premium"
        description="La lámina de privacidad inteligente que revoluciona tus espacios. De transparente a opaco al instante, con solo presionar un botón."
        imageSrc="/images/mica/proyecto-1.jpg"
        imageAlt="Mica Inteligente Ambienta"
        ctaLabel="Solicitar información"
        ctaHref="https://wa.me/525573944084"
      />

      {/* Intro tecnológica */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">¿Qué es?</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mb-6">
            Privacidad al instante, diseño sin límites
          </h2>
          <p className="text-charcoal/60 text-lg leading-relaxed">
            La mica inteligente (Smart Film) es una lámina de cristal líquido que cambia de estado
            —de transparente a opaco— mediante una corriente eléctrica de bajo voltaje. Es la
            solución perfecta para quienes buscan privacidad instantánea sin sacrificar luminosidad
            ni apertura visual en sus espacios.
          </p>
        </div>
      </section>

      {/* Video section */}
      <section className="bg-charcoal py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">En acción</p>
            <h2 className="font-serif text-3xl text-white">Mira cómo funciona</h2>
            <p className="text-white/50 mt-2 text-sm">
              La tecnología PDLC (Polymer Dispersed Liquid Crystal) en tiempo real
            </p>
          </div>

          <MicaVideoCarousel />

          <div className="text-center mt-10">
            <a
              href="https://wa.me/525573944084"
              className="inline-block border border-gold text-gold px-6 py-3 rounded-lg text-sm font-medium hover:bg-gold hover:text-charcoal transition-colors"
            >
              Solicitar demostración presencial
            </a>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Por qué elegirla</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">Beneficios clave</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFICIOS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
                  <Icon size={22} className="text-gold group-hover:text-charcoal transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-2">{title}</h3>
                <p className="text-charcoal/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especificaciones técnicas */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Técnico</p>
            <h2 className="font-serif text-3xl text-charcoal">Especificaciones</h2>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {SPECS.map((s, idx) => (
                <div
                  key={s.label}
                  className={`flex justify-between items-center px-6 py-4 ${
                    idx % 2 === 0 ? '' : 'sm:border-l border-gray-100'
                  } border-b border-gray-100 last:border-b-0`}
                >
                  <span className="text-charcoal/60 text-sm">{s.label}</span>
                  <span className="font-semibold text-charcoal text-sm">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Usos</p>
            <h2 className="font-serif text-3xl text-charcoal">Aplicaciones principales</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {APLICACIONES.map((a) => (
              <div key={a} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                <span className="text-charcoal/70 text-sm">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Portafolio</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">Instalaciones realizadas</h2>
          </div>
          <Gallery images={GALLERY_IMAGES} columns={2} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 px-6 text-center">
        <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Tecnología de punta</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
          ¿Te interesa la mica inteligente?
        </h2>
        <p className="text-white/60 mb-8 max-w-xl mx-auto">
          Este producto requiere visita técnica para cotización exacta. Contáctanos y nuestros asesores
          te brindarán toda la información y un presupuesto personalizado.
        </p>
        <a
          href="https://wa.me/525573944084?text=Hola%2C%20me%20interesa%20la%20mica%20inteligente%20de%20Ambienta%20Interiorismo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#20BD5A] transition-colors group"
        >
          Contactar por WhatsApp
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      </section>
    </div>
  )
}
