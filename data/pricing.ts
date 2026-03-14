// ============================================================
// AMBIENTA INTERIORISMO — DATOS DE PRECIOS
// Fuente: COTIZADOR.xlsx
// Regla aplicada: precio_final = precio_excel + 50 MXN
// ============================================================

const MARKUP = 50 // Incremento fijo sobre todos los precios del Excel

// ── PERSIANAS ───────────────────────────────────────────────

export interface PersianaModel {
  id: string
  modelo: string
  categoria: string
  precioM2: number // precio final (Excel + 50)
  anchoMax: number // metros
  tipo: 'sheer-translucida' | 'sheer-dimout' | 'enrollable-translucida' | 'enrollable-blackout' | 'panel-japones'
}

export const PERSIANAS: PersianaModel[] = [
  // SHEER TRASLÚCIDA
  { id: 'duo-basic', modelo: 'DUO BASIC', categoria: 'Sheer Traslúcida', precioM2: 690 + MARKUP, anchoMax: 2.5, tipo: 'sheer-translucida' },
  { id: 'basic-xl', modelo: 'BASIC XL', categoria: 'Sheer Traslúcida', precioM2: 699 + MARKUP, anchoMax: 3, tipo: 'sheer-translucida' },
  { id: 'wood-line', modelo: 'WOOD LINE', categoria: 'Sheer Traslúcida', precioM2: 950 + MARKUP, anchoMax: 2.6, tipo: 'sheer-translucida' },
  { id: 'duo-celebrity', modelo: 'DUO CELEBRITY', categoria: 'Sheer Traslúcida', precioM2: 1080 + MARKUP, anchoMax: 2.5, tipo: 'sheer-translucida' },
  { id: 'dense-woodlook', modelo: 'DENSE WOODLOOK', categoria: 'Sheer Traslúcida', precioM2: 1080 + MARKUP, anchoMax: 2.8, tipo: 'sheer-translucida' },
  { id: 'duo-bright', modelo: 'DUO BRIGHT', categoria: 'Sheer Traslúcida', precioM2: 1100 + MARKUP, anchoMax: 2.85, tipo: 'sheer-translucida' },
  { id: 'duo-terra', modelo: 'DUO TERRA', categoria: 'Sheer Traslúcida', precioM2: 1100 + MARKUP, anchoMax: 3, tipo: 'sheer-translucida' },
  { id: 'duo-radiance', modelo: 'DUO RADIANCE', categoria: 'Sheer Traslúcida', precioM2: 1750 + MARKUP, anchoMax: 3, tipo: 'sheer-translucida' },
  { id: 'sheer-advantage', modelo: 'SHEER ADVANTAGE', categoria: 'Sheer Traslúcida', precioM2: 1550 + MARKUP, anchoMax: 3, tipo: 'sheer-translucida' },

  // SHEER DIM OUT
  { id: 'duo-dimout', modelo: 'DUO DIM OUT', categoria: 'Sheer Dim Out', precioM2: 1450 + MARKUP, anchoMax: 3, tipo: 'sheer-dimout' },
  { id: 'genius-dimout', modelo: 'GENIUS DIM OUT', categoria: 'Sheer Dim Out', precioM2: 1750 + MARKUP, anchoMax: 2.8, tipo: 'sheer-dimout' },
  { id: 'dimout-woods', modelo: 'DIM OUT WOODS', categoria: 'Sheer Dim Out', precioM2: 1650 + MARKUP, anchoMax: 3, tipo: 'sheer-dimout' },
  { id: 'glam-dimout', modelo: 'GLAM DIM OUT', categoria: 'Sheer Dim Out', precioM2: 1750 + MARKUP, anchoMax: 3, tipo: 'sheer-dimout' },
  { id: 'royal-dimout', modelo: 'ROYAL DIM OUT', categoria: 'Sheer Dim Out', precioM2: 1550 + MARKUP, anchoMax: 2.8, tipo: 'sheer-dimout' },
  { id: 'lino-dimout', modelo: 'LINO DIM OUT', categoria: 'Sheer Dim Out', precioM2: 1590 + MARKUP, anchoMax: 3, tipo: 'sheer-dimout' },
  { id: 'brave-dimout', modelo: 'BRAVE DIM OUT', categoria: 'Sheer Dim Out', precioM2: 1650 + MARKUP, anchoMax: 2.8, tipo: 'sheer-dimout' },

  // ENROLLABLE TRASLÚCIDA
  { id: 'fl-long-beach', modelo: 'FL LONG BEACH', categoria: 'Enrollable Traslúcida', precioM2: 550 + MARKUP, anchoMax: 2.5, tipo: 'enrollable-translucida' },
  { id: 'fl-ipanema', modelo: 'FL IPANEMA', categoria: 'Enrollable Traslúcida', precioM2: 550 + MARKUP, anchoMax: 2.5, tipo: 'enrollable-translucida' },
  { id: 'fl-budelli', modelo: 'FL BUDELLI', categoria: 'Enrollable Traslúcida', precioM2: 550 + MARKUP, anchoMax: 2.5, tipo: 'enrollable-translucida' },
  { id: 'fl-sidney', modelo: 'FL SIDNEY', categoria: 'Enrollable Traslúcida', precioM2: 650 + MARKUP, anchoMax: 3, tipo: 'enrollable-translucida' },
  { id: 'screen-basic', modelo: 'SCREEN BASIC', categoria: 'Enrollable Screen', precioM2: 690 + MARKUP, anchoMax: 2.5, tipo: 'enrollable-translucida' },
  { id: 'screen-soft', modelo: 'SCREEN SOFT', categoria: 'Enrollable Screen', precioM2: 690 + MARKUP, anchoMax: 2.5, tipo: 'enrollable-translucida' },
  { id: 'screen-one', modelo: 'SCREEN ONE', categoria: 'Enrollable Screen', precioM2: 690 + MARKUP, anchoMax: 2.5, tipo: 'enrollable-translucida' },
  { id: 'screen-milan', modelo: 'SCREEN MILAN', categoria: 'Enrollable Screen', precioM2: 950 + MARKUP, anchoMax: 2.5, tipo: 'enrollable-translucida' },
  { id: 'screen-zero', modelo: 'SCREEN ZERO', categoria: 'Enrollable Screen', precioM2: 1100 + MARKUP, anchoMax: 3, tipo: 'enrollable-translucida' },

  // ENROLLABLE BLACKOUT
  { id: 'bo-long-beach', modelo: 'BO LONG BEACH', categoria: 'Enrollable Blackout', precioM2: 690 + MARKUP, anchoMax: 2.5, tipo: 'enrollable-blackout' },
  { id: 'bo-montreal', modelo: 'BO MONTREAL', categoria: 'Enrollable Blackout', precioM2: 690 + MARKUP, anchoMax: 2.5, tipo: 'enrollable-blackout' },
  { id: 'bo-ipanema', modelo: 'BO IPANEMA', categoria: 'Enrollable Blackout', precioM2: 800 + MARKUP, anchoMax: 2.5, tipo: 'enrollable-blackout' },
  { id: 'bo-texture', modelo: 'BO TEXTURE', categoria: 'Enrollable Blackout', precioM2: 790 + MARKUP, anchoMax: 2.6, tipo: 'enrollable-blackout' },
  { id: 'bo-ohio', modelo: 'BO OHIO', categoria: 'Enrollable Blackout', precioM2: 810 + MARKUP, anchoMax: 2.5, tipo: 'enrollable-blackout' },
  { id: 'bo-500', modelo: 'BO 500', categoria: 'Enrollable Blackout', precioM2: 950 + MARKUP, anchoMax: 2.5, tipo: 'enrollable-blackout' },
  { id: 'bo-budelii', modelo: 'BO BUDELII', categoria: 'Enrollable Blackout', precioM2: 790 + MARKUP, anchoMax: 2.5, tipo: 'enrollable-blackout' },
  { id: 'bo-luxury', modelo: 'BO LUXURY', categoria: 'Enrollable Blackout', precioM2: 950 + MARKUP, anchoMax: 3, tipo: 'enrollable-blackout' },
  { id: 'bo-sidney', modelo: 'BO SIDNEY', categoria: 'Enrollable Blackout', precioM2: 990 + MARKUP, anchoMax: 3, tipo: 'enrollable-blackout' },
  { id: 'bo-galaxy', modelo: 'BO GALAXY', categoria: 'Enrollable Blackout', precioM2: 950 + MARKUP, anchoMax: 3, tipo: 'enrollable-blackout' },
  { id: 'bo-stylus', modelo: 'BO STYLUS', categoria: 'Enrollable Blackout', precioM2: 890 + MARKUP, anchoMax: 3, tipo: 'enrollable-blackout' },

  // PANEL JAPONÉS
  { id: 'pj-fl-long-beach', modelo: 'FL LONG BEACH', categoria: 'Panel Japonés', precioM2: 990 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-fl-ipanema', modelo: 'FL IPANEMA', categoria: 'Panel Japonés', precioM2: 990 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-fl-budelli', modelo: 'FL BUDELLI', categoria: 'Panel Japonés', precioM2: 990 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-fl-sidney', modelo: 'FL SIDNEY', categoria: 'Panel Japonés', precioM2: 1100 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-screen-basic', modelo: 'SCREEN BASIC', categoria: 'Panel Japonés', precioM2: 750 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-screen-soft', modelo: 'SCREEN SOFT', categoria: 'Panel Japonés', precioM2: 750 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-screen-one', modelo: 'SCREEN ONE', categoria: 'Panel Japonés', precioM2: 999 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-screen-milan', modelo: 'SCREEN MILAN', categoria: 'Panel Japonés', precioM2: 1150 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-screen-zero', modelo: 'SCREEN ZERO', categoria: 'Panel Japonés', precioM2: 1230 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-bo-long-beach', modelo: 'BO LONG BEACH', categoria: 'Panel Japonés', precioM2: 990 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-bo-ipanema', modelo: 'BO IPANEMA', categoria: 'Panel Japonés', precioM2: 999 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-bo-texture', modelo: 'BO TEXTURE', categoria: 'Panel Japonés', precioM2: 1100 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-bo-ohio', modelo: 'BO OHIO', categoria: 'Panel Japonés', precioM2: 1050 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-bo-budelii', modelo: 'BO BUDELII', categoria: 'Panel Japonés', precioM2: 1100 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-bo-luxury', modelo: 'BO LUXURY', categoria: 'Panel Japonés', precioM2: 1250 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-bo-sidney', modelo: 'BO SIDNEY', categoria: 'Panel Japonés', precioM2: 1200 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-bo-galaxy', modelo: 'BO GALAXY', categoria: 'Panel Japonés', precioM2: 1280 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
  { id: 'pj-bo-stylus', modelo: 'BO STYLUS', categoria: 'Panel Japonés', precioM2: 1150 + MARKUP, anchoMax: 99, tipo: 'panel-japones' },
]

// ── CORTINAS ────────────────────────────────────────────────

export interface CortinaModel {
  id: string
  modelo: string
  categoria: 'Tergal' | 'Blackout'
  precioMonyo: number  // precio final (Excel + 50)
  precioRiplefold: number // precio final (Excel + 50)
}

export const CORTINAS: CortinaModel[] = [
  // TERGAL
  { id: 'terra', modelo: 'TERRA', categoria: 'Tergal', precioMonyo: 1020 + MARKUP, precioRiplefold: 1190 + MARKUP },
  { id: 'lino', modelo: 'LINO', categoria: 'Tergal', precioMonyo: 1150 + MARKUP, precioRiplefold: 1280 + MARKUP },
  { id: 'chiffon', modelo: 'CHIFFON', categoria: 'Tergal', precioMonyo: 980 + MARKUP, precioRiplefold: 1040 + MARKUP },
  { id: 'voile', modelo: 'VOILE', categoria: 'Tergal', precioMonyo: 980 + MARKUP, precioRiplefold: 1040 + MARKUP },
  { id: 'line', modelo: 'LINÉ', categoria: 'Tergal', precioMonyo: 1060 + MARKUP, precioRiplefold: 1140 + MARKUP },
  { id: 'lusso', modelo: 'LUSSO', categoria: 'Tergal', precioMonyo: 1760 + MARKUP, precioRiplefold: 1990 + MARKUP },
  { id: 'gauze', modelo: 'GAUZE', categoria: 'Tergal', precioMonyo: 980 + MARKUP, precioRiplefold: 1050 + MARKUP },
  { id: 'serenade', modelo: 'SERENADE', categoria: 'Tergal', precioMonyo: 1420 + MARKUP, precioRiplefold: 1650 + MARKUP },
  { id: 'lunet', modelo: 'LUNET', categoria: 'Tergal', precioMonyo: 1150 + MARKUP, precioRiplefold: 1320 + MARKUP },
  { id: 'sundown', modelo: 'SUNDOWN', categoria: 'Tergal', precioMonyo: 1210 + MARKUP, precioRiplefold: 1340 + MARKUP },
  { id: 'galaga', modelo: 'GALAGA', categoria: 'Tergal', precioMonyo: 1180 + MARKUP, precioRiplefold: 1350 + MARKUP },

  // BLACKOUT
  { id: 'nightfail', modelo: 'NIGHTFAIL', categoria: 'Blackout', precioMonyo: 1420 + MARKUP, precioRiplefold: 1560 + MARKUP },
  { id: 'stones', modelo: 'STONES', categoria: 'Blackout', precioMonyo: 1785 + MARKUP, precioRiplefold: 1960 + MARKUP },
  { id: 'madeiras', modelo: 'MADEIRAS', categoria: 'Blackout', precioMonyo: 1790 + MARKUP, precioRiplefold: 1960 + MARKUP },
  { id: 'tulum', modelo: 'TULUM', categoria: 'Blackout', precioMonyo: 1760 + MARKUP, precioRiplefold: 2240 + MARKUP },
  { id: 'drift', modelo: 'DRIFT', categoria: 'Blackout', precioMonyo: 2260 + MARKUP, precioRiplefold: 2520 + MARKUP },
]

// ── ADICIONALES PERSIANAS ───────────────────────────────────

export const ADICIONALES_PERSIANAS = {
  fasciaCuadrada: { nombre: 'Facia Cuadrada con Forro', precio: 315 + MARKUP, unidad: 'ml' },
  fasciaRedonda: { nombre: 'Facia Redonda', precio: 273 + MARKUP, unidad: 'ml' },
  tapasDuos: { nombre: 'Tapas Duos p/Soporte', precio: 252 + MARKUP, unidad: 'juego' },
  canaletas: { nombre: 'Canaletas', precio: 294 + MARKUP, unidad: 'ml' },
  motorRecargable25: { nombre: 'Motor Recargable 25mm', precio: 3465 + MARKUP, unidad: 'pieza' },
  motorRecargable35: { nombre: 'Motor Recargable 35mm', precio: 7350 + MARKUP, unidad: 'pieza' },
  motorWifi35: { nombre: 'Motor WiFi 35mm', precio: 3780 + MARKUP, unidad: 'pieza' },
  motorWifi45: { nombre: 'Motor WiFi 45mm', precio: 5145 + MARKUP, unidad: 'pieza' },
  controlMono: { nombre: 'Control Monocanal', precio: 720 + MARKUP, unidad: 'pieza' },
  controlMulti: { nombre: 'Control Multicanal', precio: 880 + MARKUP, unidad: 'pieza' },
}

export const ADICIONALES_CORTINAS = {
  cortineroRiplefold1: { nombre: 'Cortinero Riplefold 1 Hoja', precio: 999 + MARKUP, unidad: 'pieza' },
  cortineroRiplefold2: { nombre: 'Cortinero Riplefold 2 Hojas', precio: 1100 + MARKUP, unidad: 'pieza' },
  cortineroMonyo: { nombre: 'Cortinero Plits / Moño', precio: 820 + MARKUP, unidad: 'pieza' },
  motorBaterias: { nombre: 'Motor Cortinero Baterías', precio: 6240 + MARKUP, unidad: 'pieza' },
  motorCortinero: { nombre: 'Motor Cortinero', precio: 4000 + MARKUP, unidad: 'pieza' },
  controlMono: { nombre: 'Control Monocanal', precio: 720 + MARKUP, unidad: 'pieza' },
  controlMulti: { nombre: 'Control Multicanal', precio: 880 + MARKUP, unidad: 'pieza' },
}

// ── INSTALACIÓN ─────────────────────────────────────────────
// Costo de instalación por ventana/pieza (basado en MEDIDAS sheet)
export const INSTALACION_DEFAULT = 350 // MXN por pieza

// ── CÁLCULO ─────────────────────────────────────────────────

export interface QuoteItem {
  id: string
  tipo: 'persiana' | 'cortina'
  producto: string
  modelo: string
  acabado?: string
  ancho: number
  alto: number
  cantidad: number
  m2: number
  precioM2: number
  precioBlindTotal: number
  instalacion: number
  totalItem: number
}

export interface QuoteResult {
  items: QuoteItem[]
  subtotal: number
  iva: number
  total: number
}

export function calcularPrecioM2(ancho: number, alto: number): number {
  return parseFloat((ancho * alto).toFixed(4))
}

export function calcularItem(params: {
  tipo: 'persiana' | 'cortina'
  producto: string
  modelo: string
  acabado?: string
  ancho: number
  alto: number
  cantidad: number
  precioM2: number
  instalacion?: number
}): QuoteItem {
  const m2 = calcularPrecioM2(params.ancho, params.alto)
  const instalacion = params.instalacion ?? INSTALACION_DEFAULT
  const precioBlindTotal = m2 * params.precioM2 * params.cantidad
  const totalItem = precioBlindTotal + instalacion * params.cantidad

  return {
    id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    tipo: params.tipo,
    producto: params.producto,
    modelo: params.modelo,
    acabado: params.acabado,
    ancho: params.ancho,
    alto: params.alto,
    cantidad: params.cantidad,
    m2,
    precioM2: params.precioM2,
    precioBlindTotal,
    instalacion: instalacion * params.cantidad,
    totalItem,
  }
}

export function calcularCotizacion(items: QuoteItem[]): QuoteResult {
  const subtotal = items.reduce((sum, item) => sum + item.totalItem, 0)
  const iva = parseFloat((subtotal * 0.16).toFixed(2))
  const total = parseFloat((subtotal + iva).toFixed(2))
  return { items, subtotal, iva, total }
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
  }).format(amount)
}

// Agrupación de persianas por tipo para el selector
export const PERSIANA_TIPOS = [
  { value: 'sheer-translucida', label: 'Sheer Traslúcida', desc: 'Filtra la luz suavemente manteniendo privacidad' },
  { value: 'sheer-dimout', label: 'Sheer Dim Out', desc: 'Semi-oscurecimiento con vista exterior' },
  { value: 'enrollable-translucida', label: 'Enrollable Traslúcida / Screen', desc: 'Minimalista, permite paso de luz y privacidad' },
  { value: 'enrollable-blackout', label: 'Enrollable Blackout', desc: 'Oscurecimiento total, ideal para descanso' },
  { value: 'panel-japones', label: 'Panel Japonés', desc: 'Elegante y moderno, para grandes ventanales' },
]
