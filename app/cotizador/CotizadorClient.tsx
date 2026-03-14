'use client'

import dynamic from 'next/dynamic'

// Carga diferida: jsPDF y el wizard solo se bundlean cuando el usuario visita /cotizador
const QuoteWizard = dynamic(() => import('@/components/cotizador/QuoteWizard'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-24 text-charcoal/40 text-sm">
      Cargando cotizador...
    </div>
  ),
})

export default function CotizadorClient() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-charcoal px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">Herramienta gratuita</p>
          <h1 className="font-serif text-3xl sm:text-4xl text-white mb-3">Pre-cotizador</h1>
          <p className="text-white/60 max-w-xl">
            Obtén un estimado de precio para persianas y cortinas a la medida.
            Ingresa tus datos, selecciona el producto y descarga tu pre-cotización en PDF.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-xs text-white/40">
            <span>✓ Incluye instalación</span>
            <span>✓ Incluye IVA</span>
            <span>✓ Descarga en PDF</span>
            <span>✓ Vigencia 15 días</span>
          </div>
        </div>
      </div>

      {/* Wizard */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <QuoteWizard />
      </div>

      {/* Disclaimer */}
      <div className="max-w-5xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-xl p-5 border border-gray-100 text-xs text-charcoal/50 leading-relaxed">
          <p className="font-semibold text-charcoal/70 mb-1">Nota importante</p>
          <p>
            Esta pre-cotización es un estimado basado en las medidas proporcionadas y puede variar según
            acabados específicos, condiciones de instalación y ajustes por visita técnica. La cotización
            final se confirma después de la medición en sitio. Vigencia: 15 días sujeto a cambio de precios
            del proveedor. Para confirmar tu proyecto, contacta a tu asesor de Ambienta Interiorismo.
          </p>
        </div>
      </div>
    </div>
  )
}
