'use client'

import { useState, useCallback, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Plus, Trash2, FileText, ChevronRight, ChevronLeft, RotateCcw, CheckCircle2 } from 'lucide-react'
import {
  PERSIANAS, CORTINAS, PERSIANA_TIPOS,
  calcularItem, calcularCotizacion, formatCurrency,
  INSTALACION_DEFAULT,
  type QuoteItem, type QuoteResult,
} from '@/data/pricing'
import QuoteResultView from './QuoteResult'

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Categoria = 'persianas' | 'cortinas'
type Step = 'categoria' | 'producto' | 'medidas' | 'resumen'

const STEPS: Step[] = ['categoria', 'producto', 'medidas', 'resumen']

const STEP_LABELS: Record<Step, string> = {
  categoria: 'Categoría',
  producto: 'Producto',
  medidas: 'Medidas',
  resumen: 'Resumen',
}

interface ItemForm {
  categoria: Categoria
  tipoPersiana: string
  modeloId: string
  acabado: 'monyo' | 'riplefold'
  ancho: string
  alto: string
  cantidad: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const EMPTY_FORM: ItemForm = {
  categoria: 'persianas',
  tipoPersiana: '',
  modeloId: '',
  acabado: 'monyo',
  ancho: '',
  alto: '',
  cantidad: '1',
}

function getPrecioM2(form: ItemForm): number {
  if (form.categoria === 'persianas') {
    return PERSIANAS.find((p) => p.id === form.modeloId)?.precioM2 ?? 0
  }
  const cortina = CORTINAS.find((c) => c.id === form.modeloId)
  if (!cortina) return 0
  return form.acabado === 'riplefold' ? cortina.precioRiplefold : cortina.precioMonyo
}

// ─── Componente interno (necesita useSearchParams) ────────────────────────────

function QuoteWizardInner() {
  const searchParams = useSearchParams()

  // Leer query params para pre-selección desde páginas de producto
  const initCategoria = (searchParams.get('categoria') as Categoria) ?? 'persianas'
  const initTipo = searchParams.get('tipo') ?? ''

  const [step, setStep] = useState<Step>(() =>
    initTipo || initCategoria !== 'persianas' ? 'producto' : 'categoria'
  )
  const [form, setForm] = useState<ItemForm>({
    ...EMPTY_FORM,
    categoria: initCategoria,
    tipoPersiana: initTipo,
  })
  const [items, setItems] = useState<QuoteItem[]>([])
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [quoteResult, setQuoteResult] = useState<QuoteResult | null>(null)
  const [justAdded, setJustAdded] = useState(false)

  // Scroll al inicio cuando se muestra el resultado
  useEffect(() => {
    if (showResult) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [showResult])

  // Modelos filtrados
  const persianasFiltradas = PERSIANAS.filter(
    (p) => !form.tipoPersiana || p.tipo === form.tipoPersiana
  )

  const modeloSeleccionado =
    form.categoria === 'persianas'
      ? PERSIANAS.find((p) => p.id === form.modeloId)
      : CORTINAS.find((c) => c.id === form.modeloId)

  const precioM2 = getPrecioM2(form)

  // Preview de precio del item actual
  const anchoNum = parseFloat(form.ancho)
  const altoNum = parseFloat(form.alto)
  const cantNum = parseInt(form.cantidad) || 1
  const previewM2 = anchoNum > 0 && altoNum > 0 ? anchoNum * altoNum : null
  const previewPrice =
    previewM2 && precioM2 > 0
      ? previewM2 * precioM2 * cantNum + INSTALACION_DEFAULT * cantNum
      : null

  // Validación por paso
  const canGoNext = useCallback((): boolean => {
    if (step === 'categoria') return true
    if (step === 'producto') return !!form.modeloId
    if (step === 'medidas') return anchoNum > 0 && altoNum > 0 && cantNum > 0
    return true
  }, [step, form.modeloId, anchoNum, altoNum, cantNum])

  const goNext = () => {
    const idx = STEPS.indexOf(step)
    if (idx < STEPS.length - 1) setStep(STEPS[idx + 1])
  }

  const goBack = () => {
    const idx = STEPS.indexOf(step)
    if (idx > 0) setStep(STEPS[idx - 1])
  }

  const addItem = () => {
    if (!modeloSeleccionado || precioM2 === 0) return

    const item = calcularItem({
      tipo: form.categoria === 'persianas' ? 'persiana' : 'cortina',
      producto: form.categoria === 'persianas' ? 'PERSIANA' : 'CORTINA',
      modelo: modeloSeleccionado.modelo,
      acabado:
        form.categoria === 'cortinas'
          ? form.acabado === 'riplefold'
            ? 'Riplefold'
            : 'Moño'
          : undefined,
      ancho: anchoNum,
      alto: altoNum,
      cantidad: cantNum,
      precioM2,
      instalacion: INSTALACION_DEFAULT,
    })

    setItems((prev) => [...prev, item])
    setJustAdded(true)
  }

  const handleAddAnother = () => {
    setForm(EMPTY_FORM)
    setStep('categoria')
    setJustAdded(false)
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const generateQuote = () => {
    const result = calcularCotizacion(items)
    setQuoteResult(result)
    setShowResult(true)
  }

  const reset = () => {
    setItems([])
    setForm(EMPTY_FORM)
    setStep('categoria')
    setShowResult(false)
    setQuoteResult(null)
    setClientName('')
    setClientPhone('')
    setJustAdded(false)
  }

  // ── Vista resultado ──────────────────────────────────────────────────────
  if (showResult && quoteResult) {
    return (
      <QuoteResultView
        result={quoteResult}
        clientName={clientName}
        clientPhone={clientPhone}
        onReset={reset}
      />
    )
  }

  // ── Estado post-agregar: confirmación clara con acciones ─────────────────
  if (justAdded) {
    return (
      <div className="space-y-6">
        {/* Confirmación */}
        <div className="bg-green-50 border border-green-200 rounded-2xl px-6 py-5 flex items-start gap-4">
          <CheckCircle2 size={22} className="text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-800">Producto agregado correctamente</p>
            <p className="text-green-700 text-sm mt-0.5">
              Ya tienes{' '}
              <span className="font-semibold">{items.length} producto{items.length !== 1 ? 's' : ''}</span>{' '}
              en tu cotización. ¿Deseas agregar otro o generar el resumen?
            </p>
          </div>
        </div>

        {/* Listado de items */}
        <ItemList items={items} onRemove={removeItem} />

        {/* Acciones principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={handleAddAnother}
            className="flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal px-6 py-4 rounded-xl font-semibold hover:bg-charcoal hover:text-white transition-colors group"
          >
            <Plus size={17} />
            Agregar otro producto
          </button>
          <button
            onClick={() => setJustAdded(false)}
            className="flex items-center justify-center gap-2 bg-charcoal text-white px-6 py-4 rounded-xl font-semibold hover:bg-charcoal-light transition-colors group"
          >
            <FileText size={17} />
            Generar cotización
            <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    )
  }

  // ── Vista principal del wizard ───────────────────────────────────────────
  return (
    <div className="space-y-6">

      {/* Items ya agregados */}
      {items.length > 0 && <ItemList items={items} onRemove={removeItem} />}

      {/* Indicador de pasos */}
      <div className="flex items-center gap-2 text-xs text-charcoal/40">
        {STEPS.map((s, i) => (
          <span key={s} className="flex items-center gap-2">
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center font-semibold text-[10px] ${
                step === s
                  ? 'bg-gold text-charcoal'
                  : STEPS.indexOf(step) > i
                  ? 'bg-charcoal text-white'
                  : 'bg-gray-200 text-charcoal/40'
              }`}
            >
              {i + 1}
            </span>
            <span className={step === s ? 'text-charcoal font-medium' : ''}>
              {STEP_LABELS[s]}
            </span>
            {i < STEPS.length - 1 && <ChevronRight size={12} className="text-charcoal/25" />}
          </span>
        ))}
      </div>

      {/* Tarjeta del paso activo */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8">

          {/* Paso 1: Categoría */}
          {step === 'categoria' && (
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-2">¿Qué producto necesitas?</h2>
              <p className="text-charcoal/50 text-sm mb-6">Selecciona la categoría del producto a cotizar.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(
                  [
                    { value: 'persianas', label: 'Persianas', desc: 'Enrollable, Screen, Sheer, Panel Japonés', emoji: '🪟' },
                    { value: 'cortinas', label: 'Cortinas', desc: 'Tergal y Blackout, acabado Moño o Riplefold', emoji: '🎭' },
                  ] as const
                ).map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() =>
                      setForm((f) => ({ ...f, categoria: opt.value, modeloId: '', tipoPersiana: '' }))
                    }
                    className={`text-left p-6 rounded-xl border-2 transition-all duration-200 ${
                      form.categoria === opt.value
                        ? 'border-gold bg-gold/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="text-3xl mb-3">{opt.emoji}</div>
                    <h3 className="font-semibold text-charcoal mb-1">{opt.label}</h3>
                    <p className="text-xs text-charcoal/50">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Paso 2: Producto */}
          {step === 'producto' && (
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-2">
                {form.categoria === 'persianas' ? 'Elige el tipo y modelo' : 'Elige modelo y acabado'}
              </h2>
              <p className="text-charcoal/50 text-sm mb-6">
                {form.categoria === 'persianas'
                  ? 'Filtra por tipo para encontrar el modelo ideal.'
                  : 'Selecciona la tela y el tipo de acabado.'}
              </p>

              {/* Filtro de tipo (persianas) */}
              {form.categoria === 'persianas' && (
                <div className="mb-6">
                  <label className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2 block">
                    Tipo de persiana
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setForm((f) => ({ ...f, tipoPersiana: '', modeloId: '' }))}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        !form.tipoPersiana
                          ? 'bg-charcoal text-white'
                          : 'bg-gray-100 text-charcoal/60 hover:bg-gray-200'
                      }`}
                    >
                      Todos
                    </button>
                    {PERSIANA_TIPOS.map((t) => (
                      <button
                        key={t.value}
                        onClick={() => setForm((f) => ({ ...f, tipoPersiana: t.value, modeloId: '' }))}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          form.tipoPersiana === t.value
                            ? 'bg-charcoal text-white'
                            : 'bg-gray-100 text-charcoal/60 hover:bg-gray-200'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Selector de acabado (cortinas) */}
              {form.categoria === 'cortinas' && (
                <div className="mb-6">
                  <label className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2 block">
                    Tipo de acabado
                  </label>
                  <div className="flex gap-3">
                    {(
                      [
                        { value: 'monyo', label: 'Moño (Pinch Pleat)', desc: 'Clásico y elegante' },
                        { value: 'riplefold', label: 'Riplefold', desc: 'Moderno y minimalista' },
                      ] as const
                    ).map((a) => (
                      <button
                        key={a.value}
                        onClick={() => setForm((f) => ({ ...f, acabado: a.value }))}
                        className={`flex-1 text-left p-4 rounded-xl border-2 transition-all ${
                          form.acabado === a.value ? 'border-gold bg-gold/5' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <p className="font-semibold text-sm text-charcoal">{a.label}</p>
                        <p className="text-xs text-charcoal/50 mt-0.5">{a.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Lista de modelos */}
              <label className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2 block">
                Modelo
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-80 overflow-y-auto pr-1">
                {(form.categoria === 'persianas' ? persianasFiltradas : CORTINAS).map((m) => {
                  const precio =
                    form.categoria === 'persianas'
                      ? (m as (typeof PERSIANAS)[0]).precioM2
                      : form.acabado === 'riplefold'
                      ? (m as (typeof CORTINAS)[0]).precioRiplefold
                      : (m as (typeof CORTINAS)[0]).precioMonyo

                  return (
                    <button
                      key={m.id}
                      onClick={() => setForm((f) => ({ ...f, modeloId: m.id }))}
                      className={`text-left px-4 py-3 rounded-xl border transition-all ${
                        form.modeloId === m.id
                          ? 'border-gold bg-gold/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-sm text-charcoal">{m.modelo}</p>
                          <p className="text-xs text-charcoal/45 mt-0.5">{m.categoria}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-semibold text-gold">{formatCurrency(precio)}</p>
                          <p className="text-[10px] text-charcoal/35">/m²</p>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Paso 3: Medidas */}
          {step === 'medidas' && (
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-2">Ingresa las medidas</h2>
              <p className="text-charcoal/50 text-sm mb-6">
                Medidas aproximadas en metros. La medición exacta se realiza en sitio.
              </p>

              {/* Modelo seleccionado */}
              {modeloSeleccionado && (
                <div className="bg-cream rounded-xl px-5 py-4 mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-charcoal/50 uppercase tracking-wide">Modelo seleccionado</p>
                    <p className="font-semibold text-charcoal">
                      {modeloSeleccionado.modelo}
                      {form.categoria === 'cortinas' && (
                        <span className="text-charcoal/50 font-normal">
                          {' '}— {form.acabado === 'riplefold' ? 'Riplefold' : 'Moño'}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-charcoal/50">Precio/m²</p>
                    <p className="font-semibold text-gold">{formatCurrency(precioM2)}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { field: 'ancho', label: 'Ancho (metros)', placeholder: 'Ej: 1.80' },
                  { field: 'alto', label: 'Alto (metros)', placeholder: 'Ej: 2.20' },
                  { field: 'cantidad', label: 'Cantidad', placeholder: '1' },
                ].map(({ field, label, placeholder }) => (
                  <div key={field}>
                    <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2">
                      {label}
                    </label>
                    <input
                      type="number"
                      min={field === 'cantidad' ? '1' : '0.1'}
                      step={field === 'cantidad' ? '1' : '0.01'}
                      placeholder={placeholder}
                      value={form[field as keyof ItemForm]}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, [field]: e.target.value }))
                      }
                      className="w-full border-2 border-gray-200 focus:border-gold rounded-xl px-4 py-3 text-charcoal outline-none transition-colors text-sm"
                    />
                  </div>
                ))}
              </div>

              {/* Vista previa del precio */}
              {previewPrice !== null && (
                <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-charcoal/60 uppercase tracking-wide">Estimado este item</p>
                      <p className="text-xs text-charcoal/40 mt-0.5">
                        {previewM2?.toFixed(2)} m² × {formatCurrency(precioM2)}/m² + instalación × {cantNum}
                      </p>
                    </div>
                    <p className="text-xl font-serif font-semibold text-charcoal">
                      {formatCurrency(previewPrice)}
                    </p>
                  </div>
                  <p className="text-[10px] text-charcoal/35 mt-2">Sin IVA. IVA del 16% se agrega en el total.</p>
                </div>
              )}
            </div>
          )}

          {/* Paso 4: Resumen antes de agregar */}
          {step === 'resumen' && modeloSeleccionado && (
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-2">Confirmar producto</h2>
              <p className="text-charcoal/50 text-sm mb-6">
                Revisa los detalles antes de agregar a la pre-cotización.
              </p>

              <div className="bg-cream rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    { label: 'Categoría', value: form.categoria.charAt(0).toUpperCase() + form.categoria.slice(1) },
                    { label: 'Modelo', value: modeloSeleccionado.modelo },
                    ...(form.categoria === 'cortinas'
                      ? [{ label: 'Acabado', value: form.acabado === 'riplefold' ? 'Riplefold' : 'Moño' }]
                      : []),
                    { label: 'Medidas', value: `${form.ancho}m × ${form.alto}m` },
                    { label: 'M²', value: `${(anchoNum * altoNum).toFixed(2)} m²` },
                    { label: 'Cantidad', value: `${form.cantidad} pieza${cantNum !== 1 ? 's' : ''}` },
                    { label: 'Precio/m²', value: formatCurrency(precioM2), gold: true },
                    { label: 'Instalación', value: formatCurrency(INSTALACION_DEFAULT * cantNum) },
                  ].map(({ label, value, gold }) => (
                    <div key={label}>
                      <p className="text-charcoal/50 text-xs mb-1">{label}</p>
                      <p className={`font-semibold ${gold ? 'text-gold' : 'text-charcoal'}`}>{value}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-charcoal">Total este producto</span>
                  <span className="text-xl font-serif font-bold text-charcoal">
                    {previewPrice !== null ? formatCurrency(previewPrice) : '—'}
                  </span>
                </div>
                <p className="text-xs text-charcoal/35">Sin IVA. IVA del 16% se agrega en el total final.</p>
              </div>
            </div>
          )}
        </div>

        {/* Barra de navegación del wizard */}
        <div className="px-6 sm:px-8 py-5 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
          {step !== 'categoria' ? (
            <button
              onClick={goBack}
              className="flex items-center gap-1.5 text-sm text-charcoal/60 hover:text-charcoal transition-colors"
            >
              <ChevronLeft size={16} />
              Atrás
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-3">
            {step !== 'resumen' ? (
              <button
                onClick={goNext}
                disabled={!canGoNext()}
                className="flex items-center gap-2 bg-charcoal text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-charcoal-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continuar
                <ChevronRight size={15} />
              </button>
            ) : (
              <button
                onClick={addItem}
                disabled={!modeloSeleccionado || precioM2 === 0}
                className="flex items-center gap-2 bg-gold text-charcoal px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-gold-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Plus size={15} />
                Agregar a cotización
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sección generar cotización (visible cuando hay items) */}
      {items.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-semibold text-charcoal mb-1">Datos del cliente (opcional)</h3>
          <p className="text-charcoal/50 text-xs mb-5">
            Para personalizar tu PDF y que podamos dar seguimiento a tu cotización.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                placeholder="Ej: María González"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full border-2 border-gray-200 focus:border-gold rounded-xl px-4 py-3 text-charcoal outline-none transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-2">
                Teléfono / WhatsApp
              </label>
              <input
                type="tel"
                placeholder="Ej: 55 1234 5678"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full border-2 border-gray-200 focus:border-gold rounded-xl px-4 py-3 text-charcoal outline-none transition-colors text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={generateQuote}
              className="flex-1 flex items-center justify-center gap-2 bg-charcoal text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-charcoal-light transition-colors group"
            >
              <FileText size={17} />
              Ver pre-cotización y descargar PDF
              <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 border border-gray-200 text-charcoal/60 px-5 py-3.5 rounded-xl font-medium hover:border-gray-300 hover:text-charcoal transition-colors text-sm"
            >
              <RotateCcw size={14} />
              Reiniciar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Sub-componente ItemList ──────────────────────────────────────────────────

function ItemList({
  items,
  onRemove,
}: {
  items: QuoteItem[]
  onRemove: (id: string) => void
}) {
  const subtotal = items.reduce((s, i) => s + i.totalItem, 0)

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="font-semibold text-charcoal mb-4 flex items-center gap-2">
        <FileText size={16} className="text-gold" />
        Productos agregados ({items.length})
      </h3>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-cream rounded-xl px-4 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-charcoal">
                {item.producto} — {item.modelo}
                {item.acabado && (
                  <span className="text-charcoal/50 font-normal"> ({item.acabado})</span>
                )}
              </p>
              <p className="text-xs text-charcoal/50 mt-0.5">
                {item.ancho}m × {item.alto}m = {item.m2.toFixed(2)} m² × {item.cantidad} pza
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold text-charcoal">{formatCurrency(item.totalItem)}</p>
              <button
                onClick={() => onRemove(item.id)}
                className="text-red-400 hover:text-red-600 transition-colors"
                aria-label={`Eliminar ${item.modelo}`}
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between text-sm font-semibold">
        <span className="text-charcoal/60">Subtotal estimado (sin IVA)</span>
        <span className="text-charcoal">{formatCurrency(subtotal)}</span>
      </div>
    </div>
  )
}

// ─── Export con Suspense (necesario para useSearchParams en App Router) ────────

export default function QuoteWizard() {
  return (
    <Suspense fallback={<div className="h-64 flex items-center justify-center text-charcoal/40">Cargando cotizador...</div>}>
      <QuoteWizardInner />
    </Suspense>
  )
}
