import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ambienta Interiorismo — Transformamos Espacios',
  description:
    'Persianas, cortinas, mica inteligente, toldos, pérgolas, pisos y acabados de interiorismo en CDMX. Diseños premium a la medida.',
  keywords: 'persianas, cortinas, interiorismo, mica inteligente, toldos, pérgolas, pisos, CDMX',
  openGraph: {
    title: 'Ambienta Interiorismo',
    description: 'Transformamos espacios creando experiencias de diseño de interiores personalizados.',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <div className="main-layout">
          <Sidebar />
          <main className="main-content">
            {children}
          </main>
        </div>
        <WhatsAppButton />
      </body>
    </html>
  )
}
