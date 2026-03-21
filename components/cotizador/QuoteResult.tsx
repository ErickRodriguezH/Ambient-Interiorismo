'use client'

import { useRef, useState } from 'react'
import { Download, RotateCcw, CheckCircle, Phone } from 'lucide-react'
import { formatCurrency, INSTALACION_DEFAULT, type QuoteResult } from '@/data/pricing'

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface QuoteResultProps {
  result: QuoteResult
  clientName: string
  clientPhone: string
  onReset: () => void
}

// ─── Componente ───────────────────────────────────────────────────────────────

export default function QuoteResultComponent({
  result,
  clientName,
  clientPhone,
  onReset,
}: QuoteResultProps) {
  const printRef = useRef<HTMLDivElement>(null)
  const [downloading, setDownloading] = useState(false)

  // Calculados una sola vez al montar el componente
  const [quoteNum] = useState(
    () => `AMB-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`
  )
  const [today] = useState(() =>
    new Date().toLocaleDateString('es-MX', { day: '2-digit', month: 'long', year: 'numeric' })
  )
  const [expiry] = useState(() =>
    new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toLocaleDateString('es-MX', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  )

  const downloadPDF = async () => {
    setDownloading(true)
    try {
      const { default: jsPDF } = await import('jspdf')
      const doc = new jsPDF({ format: 'letter', unit: 'mm' })
      const pageW = doc.internal.pageSize.getWidth()
      const pageH = doc.internal.pageSize.getHeight()
      const margin = 20

      // ── HEADER ──────────────────────────────────────────────
      doc.setFillColor(28, 25, 23)
      doc.rect(0, 0, pageW, 40, 'F')

      doc.setTextColor(201, 169, 110)
      doc.setFontSize(18)
      doc.setFont('helvetica', 'bold')
      doc.text('AMBIENTA', margin, 18)

      doc.setFontSize(8)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(255, 255, 255)
      doc.text('INTERIORISMO', margin, 24)

      doc.setFontSize(22)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(201, 169, 110)
      doc.text('PRE-COTIZACIÓN', pageW - margin, 20, { align: 'right' })

      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(200, 200, 200)
      doc.text(`Folio: ${quoteNum}`, pageW - margin, 30, { align: 'right' })

      // ── SUBHEADER ───────────────────────────────────────────
      doc.setFillColor(250, 247, 242)
      doc.rect(0, 40, pageW, 35, 'F')

      doc.setFontSize(8)
      doc.setTextColor(100, 100, 100)
      doc.setFont('helvetica', 'bold')
      doc.text('CLIENTE', margin, 52)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(28, 25, 23)
      doc.text(clientName || 'Cliente Ambienta', margin, 58)
      if (clientPhone) {
        doc.setTextColor(100, 100, 100)
        doc.text(clientPhone, margin, 63)
      }

      doc.setFont('helvetica', 'bold')
      doc.setTextColor(100, 100, 100)
      doc.text('FECHA', pageW / 2, 52)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(28, 25, 23)
      doc.text(today, pageW / 2, 58)

      doc.setFont('helvetica', 'bold')
      doc.setTextColor(100, 100, 100)
      doc.text('VIGENCIA', pageW - margin - 40, 52)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(28, 25, 23)
      doc.text(expiry, pageW - margin - 40, 58)

      // ── TABLA ────────────────────────────────────────────────
      let y = 85
      const cols = {
        prod: margin + 2,
        desc: margin + 22,
        med: margin + 90,
        cant: margin + 120,
        pu: margin + 135,
        pt: pageW - margin - 2,
      }

      doc.setFillColor(28, 25, 23)
      doc.rect(margin, y - 6, pageW - margin * 2, 9, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8)
      doc.setTextColor(201, 169, 110)
      doc.text('PROD.', cols.prod, y)
      doc.text('DESCRIPCIÓN / MODELO', cols.desc, y)
      doc.text('MEDIDAS', cols.med, y)
      doc.text('CANT', cols.cant, y)
      doc.text('P. UNITARIO', cols.pu, y)
      doc.text('P. TOTAL', cols.pt, y, { align: 'right' })
      y += 4

      result.items.forEach((item, idx) => {
        if (idx % 2 === 0) {
          doc.setFillColor(250, 247, 242)
          doc.rect(margin, y, pageW - margin * 2, 14, 'F')
        }
        y += 5
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(8)
        doc.setTextColor(28, 25, 23)
        doc.text(item.producto, cols.prod, y)

        doc.setFont('helvetica', 'normal')
        const desc = item.modelo + (item.acabado ? ` — ${item.acabado}` : '')
        doc.text(desc.substring(0, 32), cols.desc, y)
        doc.text(`${item.ancho}m × ${item.alto}m`, cols.med, y)
        doc.text(String(item.cantidad), cols.cant, y)

        const unitPrice = item.m2 * item.precioM2 + item.instalacion / item.cantidad
        doc.text(formatCurrency(unitPrice), cols.pu, y)
        doc.text(formatCurrency(item.totalItem), cols.pt, y, { align: 'right' })

        y += 4
        doc.setFontSize(7)
        doc.setTextColor(150, 150, 150)
        doc.text(
          `${item.m2.toFixed(2)} m² × ${formatCurrency(item.precioM2)}/m² + ${formatCurrency(INSTALACION_DEFAULT)} instalación`,
          cols.desc,
          y
        )
        y += 5
      })

      y += 4

      // ── TOTALES ──────────────────────────────────────────────
      const boxX = pageW - margin - 65
      doc.setFillColor(250, 247, 242)
      doc.rect(boxX, y, 65, 32, 'F')
      doc.setDrawColor(201, 169, 110)
      doc.rect(boxX, y, 65, 32)

      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9)
      doc.setTextColor(100, 100, 100)
      doc.text('SUBTOTAL', boxX + 4, y + 8)
      doc.text('IVA (16%)', boxX + 4, y + 17)
      doc.setTextColor(28, 25, 23)
      doc.text(formatCurrency(result.subtotal), boxX + 61, y + 8, { align: 'right' })
      doc.text(formatCurrency(result.iva), boxX + 61, y + 17, { align: 'right' })

      doc.setDrawColor(201, 169, 110)
      doc.line(boxX + 4, y + 21, boxX + 61, y + 21)

      doc.setFont('helvetica', 'bold')
      doc.setFontSize(11)
      doc.setTextColor(28, 25, 23)
      doc.text('TOTAL', boxX + 4, y + 29)
      doc.setTextColor(201, 169, 110)
      doc.text(formatCurrency(result.total), boxX + 61, y + 29, { align: 'right' })

      y += 40

      // ── ANTICIPO ─────────────────────────────────────────────
      doc.setFillColor(201, 169, 110)
      doc.rect(margin, y, pageW - margin * 2, 14, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(10)
      doc.setTextColor(28, 25, 23)
      doc.text(
        `Para iniciar el trabajo se requiere un anticipo del 60%: ${formatCurrency(result.total * 0.6)}`,
        pageW / 2,
        y + 9,
        { align: 'center' }
      )
      y += 20

      // ── NOTAS ────────────────────────────────────────────────
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8)
      doc.setTextColor(28, 25, 23)
      doc.text('NOTAS Y POLÍTICAS', margin, y + 2)
      y += 7

      const notas = [
        '• Esta es una PRE-COTIZACIÓN aproximada. Los precios finales se confirman después de la medición en sitio.',
        '• La cotización incluye instalación.',
        '• Vigencia de 15 días sujeta a cambio de precios por parte del proveedor.',
        '• Se requiere el 60% de anticipo para iniciar la fabricación.',
        '• La cotización queda liquidada 48 hrs. antes de la instalación.',
        '• No hay cambios ni devoluciones.',
        '• No se fabrican persianas mayores a 3.00 m de ancho.',
        '• Garantía: 1 año en persianas, 2 años en motores, 30 días en instalación.',
      ]

      doc.setFont('helvetica', 'normal')
      doc.setFontSize(7)
      doc.setTextColor(80, 80, 80)
      notas.forEach((nota) => {
        doc.text(nota, margin, y)
        y += 5
      })

      // ── FOOTER ───────────────────────────────────────────────
      doc.setFillColor(28, 25, 23)
      doc.rect(0, pageH - 22, pageW, 22, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(9)
      doc.setTextColor(201, 169, 110)
      doc.text('AMBIENTA INTERIORISMO', margin, pageH - 12)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8)
      doc.setTextColor(200, 200, 200)
      doc.text('Asesor: Felipe Rodríguez Salazar', margin, pageH - 6)
      doc.text('Tel: 55 7394 4084', pageW / 2, pageH - 12, { align: 'center' })
      doc.text('WhatsApp disponible', pageW / 2, pageH - 6, { align: 'center' })

      doc.save(`Pre-Cotizacion-Ambienta-${quoteNum}.pdf`)
    } catch (err) {
      console.error('Error al generar PDF:', err)
    }
    setDownloading(false)
  }

  return (
    <div className="space-y-6">
      {/* Banner de éxito */}
      <div className="bg-green-50 border border-green-200 rounded-2xl px-6 py-4 flex items-center gap-3">
        <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
        <div>
          <p className="font-semibold text-green-800 text-sm">Pre-cotización generada</p>
          <p className="text-green-700 text-xs mt-0.5">
            Folio: {quoteNum} — Descarga el PDF o contáctanos para confirmar.
          </p>
        </div>
      </div>

      {/* Documento pre-cotización */}
      <div ref={printRef} className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Encabezado */}
        <div className="bg-charcoal px-8 py-6 flex items-start justify-between">
          <div>
            <p className="font-serif text-gold text-2xl font-bold tracking-wide">AMBIENTA</p>
            <p className="text-white/60 text-xs tracking-[0.2em]">INTERIORISMO</p>
          </div>
          <div className="text-right">
            <p className="text-gold font-bold text-lg">PRE-COTIZACIÓN</p>
            <p className="text-white/50 text-xs mt-1">Folio: {quoteNum}</p>
          </div>
        </div>

        {/* Datos cliente y fechas */}
        <div className="bg-cream px-8 py-4 grid grid-cols-3 gap-4 border-b border-gray-100">
          <div>
            <p className="text-xs font-semibold text-charcoal/50 uppercase tracking-wider mb-1">Cliente</p>
            <p className="text-sm font-semibold text-charcoal">{clientName || 'Cliente Ambienta'}</p>
            {clientPhone && <p className="text-xs text-charcoal/50">{clientPhone}</p>}
          </div>
          <div>
            <p className="text-xs font-semibold text-charcoal/50 uppercase tracking-wider mb-1">Fecha</p>
            <p className="text-sm text-charcoal">{today}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-charcoal/50 uppercase tracking-wider mb-1">Vigencia</p>
            <p className="text-sm text-charcoal">{expiry}</p>
          </div>
        </div>

        {/* Tabla de items */}
        <div className="px-8 py-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-charcoal text-gold">
                <th className="text-left py-2.5 px-3 font-semibold text-xs rounded-l-lg">Producto</th>
                <th className="text-left py-2.5 px-3 font-semibold text-xs">Descripción</th>
                <th className="text-center py-2.5 px-3 font-semibold text-xs">m²</th>
                <th className="text-center py-2.5 px-3 font-semibold text-xs">Cant.</th>
                <th className="text-right py-2.5 px-3 font-semibold text-xs">P. Unitario</th>
                <th className="text-right py-2.5 px-3 font-semibold text-xs rounded-r-lg">P. Total</th>
              </tr>
            </thead>
            <tbody>
              {result.items.map((item, idx) => (
                <tr
                  key={item.id}
                  className={`border-b border-gray-50 ${idx % 2 === 0 ? 'bg-cream/30' : ''}`}
                >
                  <td className="py-3 px-3 font-semibold text-charcoal text-xs">{item.producto}</td>
                  <td className="py-3 px-3 text-charcoal/70 text-xs">
                    {item.modelo}
                    {item.acabado && <span className="text-charcoal/40"> — {item.acabado}</span>}
                    <br />
                    <span className="text-charcoal/35 text-[10px]">
                      {item.ancho}m × {item.alto}m + instalación
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center text-charcoal/60 text-xs">{item.m2.toFixed(2)}</td>
                  <td className="py-3 px-3 text-center text-charcoal text-xs font-semibold">{item.cantidad}</td>
                  <td className="py-3 px-3 text-right text-charcoal text-xs">
                    {formatCurrency(item.m2 * item.precioM2 + item.instalacion / item.cantidad)}
                  </td>
                  <td className="py-3 px-3 text-right font-semibold text-charcoal text-xs">
                    {formatCurrency(item.totalItem)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totales */}
          <div className="flex justify-end mt-6">
            <div className="w-56 border border-gray-200 rounded-xl overflow-hidden">
              <div className="flex justify-between px-4 py-2.5 bg-gray-50">
                <span className="text-sm text-charcoal/60">Subtotal</span>
                <span className="text-sm font-semibold text-charcoal">{formatCurrency(result.subtotal)}</span>
              </div>
              <div className="flex justify-between px-4 py-2.5">
                <span className="text-sm text-charcoal/60">IVA (16%)</span>
                <span className="text-sm font-semibold text-charcoal">{formatCurrency(result.iva)}</span>
              </div>
              <div className="flex justify-between px-4 py-3 bg-charcoal">
                <span className="text-sm font-bold text-white">TOTAL</span>
                <span className="text-sm font-bold text-gold">{formatCurrency(result.total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Anticipo */}
        <div className="mx-8 mb-6 bg-gold rounded-xl px-6 py-4 text-center">
          <p className="text-charcoal font-bold text-sm">
            Para iniciar el trabajo se requiere un anticipo del 60% del precio total:
          </p>
          <p className="text-charcoal font-serif text-2xl font-bold mt-1">
            {formatCurrency(result.total * 0.6)}
          </p>
        </div>

        {/* Políticas */}
        <div className="px-8 pb-6">
          <p className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-3">
            Notas y políticas
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-charcoal/50">
            {[
              'Esta es una PRE-COTIZACIÓN. Los precios finales se confirman en visita técnica.',
              'La cotización incluye instalación.',
              'Vigencia: 15 días sujeto a cambio de precios del proveedor.',
              'Se requiere el 60% de anticipo para iniciar la fabricación.',
              'La cotización queda liquidada 48 hrs. antes de la instalación.',
              'No hay cambios ni devoluciones.',
              'Garantía: 1 año en persianas, 2 años en motores, 30 días en instalación.',
              'No se fabrican persianas mayores a 3.00 m de ancho.',
            ].map((policy) => (
              <div key={policy} className="flex items-start gap-1.5">
                <span className="text-gold mt-0.5 flex-shrink-0">•</span>
                {policy}
              </div>
            ))}
          </div>
        </div>

        {/* Pie */}
        <div className="bg-charcoal px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <p className="text-gold font-semibold text-sm">Ambienta Interiorismo</p>
            <p className="text-white/50 text-xs">Asesor: Felipe Rodríguez Salazar</p>
          </div>
          <div className="flex items-center gap-1.5 text-white/60 text-xs">
            <Phone size={12} />
            55 7394 4084
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={downloadPDF}
          disabled={downloading}
          className="flex-1 flex items-center justify-center gap-2.5 bg-charcoal text-white px-6 py-4 rounded-xl font-semibold hover:bg-charcoal-light transition-colors disabled:opacity-60"
        >
          <Download size={18} />
          {downloading ? 'Generando PDF...' : 'Descargar Pre-cotización (PDF)'}
        </button>
        <a
          href={(() => {
            const items = result.items.map((item) => {
              const desc = item.acabado ? `${item.modelo} — ${item.acabado}` : item.modelo
              return `• ${item.producto}: ${desc}\n  ${item.ancho}m × ${item.alto}m | Cant: ${item.cantidad} | ${formatCurrency(item.totalItem)}`
            }).join('\n')

            const msg = [
              `Hola Felipe! Generé esta pre-cotización en el sitio web de Ambienta Interiorismo:`,
              ``,
              `👤 Cliente: ${clientName || 'Sin nombre'}${clientPhone ? ` | Tel: ${clientPhone}` : ''}`,
              `📋 Folio: ${quoteNum}`,
              ``,
              `🛍 PRODUCTOS:`,
              items,
              ``,
              `💰 Subtotal: ${formatCurrency(result.subtotal)}`,
              `   IVA (16%): ${formatCurrency(result.iva)}`,
              `   TOTAL: ${formatCurrency(result.total)}`,
              ``,
              `💳 Anticipo requerido (60%): ${formatCurrency(result.total * 0.6)}`,
              ``,
              `Me gustaría confirmar esta cotización. ¿Me pueden contactar?`,
            ].join('\n')

            return `https://wa.me/525573944084?text=${encodeURIComponent(msg)}`
          })()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-4 rounded-xl font-semibold hover:bg-[#20BD5A] transition-colors text-sm"
        >
          Confirmar por WhatsApp
        </a>
        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 border border-gray-200 text-charcoal/60 px-5 py-4 rounded-xl font-medium hover:border-gray-300 hover:text-charcoal transition-colors text-sm"
        >
          <RotateCcw size={15} />
          Nueva cotización
        </button>
      </div>
    </div>
  )
}
