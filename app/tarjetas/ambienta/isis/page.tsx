import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import type { Metadata } from 'next'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Isis Jiménez — Ambienta Interiorismo',
  description: 'Tarjeta de contacto digital · Diseño de Interiores CDMX · Persianas, Cortinas, Smart Film, Toldos, Pisos.',
}

export default function TarjetaIsisPage() {
  return (
    <div
      className={`${cormorant.variable} ${montserrat.variable}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflowY: 'auto',
        background: '#111010',
        backgroundImage:
          'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.04) 0%, transparent 50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '48px 24px 64px',
        gap: '48px',
        fontFamily: 'var(--font-montserrat), sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 420,
          animation: 'floatIn 0.9s cubic-bezier(0.22,1,0.36,1) both',
          position: 'relative',
        }}
      >
        <style>{`
          @keyframes floatIn {
            from { opacity: 0; transform: translateY(40px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulseGlow {
            from { opacity: 0.6; }
            to   { opacity: 1; }
          }
          .card-glow-i::before {
            content: '';
            position: absolute;
            inset: -20px;
            background: radial-gradient(ellipse at center, rgba(201,168,76,0.15) 0%, transparent 70%);
            border-radius: 24px;
            pointer-events: none;
            animation: pulseGlow 3s ease-in-out infinite alternate;
          }
          .service-tag-i:hover {
            color: #C9A84C !important;
            border-color: rgba(201,168,76,0.5) !important;
            background: rgba(201,168,76,0.05) !important;
          }
          .contact-item-i:hover { transform: translateX(4px); }
          .contact-item-i:hover .contact-icon-i {
            background: rgba(201,168,76,0.15) !important;
            border-color: #C9A84C !important;
          }
        `}</style>

        <div className="card-glow-i" style={{ position: 'relative' }}>
          <div
            style={{
              background: '#1c1b1b',
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid rgba(201,168,76,0.2)',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.8), 0 30px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)',
              position: 'relative',
            }}
          >
            {/* top gold line */}
            <div
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: 3,
                background: 'linear-gradient(90deg, transparent, #C9A84C, #E2C87A, #C9A84C, transparent)',
              }}
            />

            {/* header */}
            <div style={{ padding: '36px 36px 24px', borderBottom: '1px solid rgba(201,168,76,0.12)', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 20 }}>
                <div
                  style={{
                    width: 52, height: 52,
                    background: 'linear-gradient(135deg, #8a6f2e, #C9A84C)',
                    borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 16px rgba(201,168,76,0.3)',
                  }}
                >
                  <svg viewBox="0 0 28 28" fill="none" width={28} height={28}>
                    <path d="M4 14L14 5L24 14" stroke="#111" strokeWidth="1.8" strokeLinecap="round" />
                    <rect x="9" y="14" width="10" height="9" stroke="#111" strokeWidth="1.6" />
                    <rect x="12" y="18" width="4" height="5" fill="#111" />
                    <rect x="16" y="9" width="4" height="4" stroke="#111" strokeWidth="1.2" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 32, fontWeight: 600, color: '#F2EDE4', letterSpacing: 4, lineHeight: 1, textTransform: 'uppercase' }}>
                    Ambienta
                  </div>
                  <div style={{ fontSize: 9, color: '#C9A84C', letterSpacing: 3, textTransform: 'uppercase', marginTop: 5 }}>
                    Transforma tu espacio · Refleja tu estilo
                  </div>
                </div>
              </div>

              <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 20, fontWeight: 300, fontStyle: 'italic', color: '#F2EDE4', letterSpacing: 1 }}>
                Isis Jiménez
              </div>
              <div style={{ fontSize: 9, fontWeight: 600, color: '#C9A84C', letterSpacing: 3, textTransform: 'uppercase', marginTop: 3 }}>
                Asesora · Diseño de Interiores
              </div>
            </div>

            {/* services strip */}
            <div style={{ background: '#2a2828', padding: '14px 36px', display: 'flex', gap: 6, flexWrap: 'wrap', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
              {['Persianas', 'Cortinas', 'Smart Film', 'Toldos', 'Pisos', 'Madera', 'Papel Tapiz', 'Pasto Sintético'].map((s) => (
                <span key={s} className="service-tag-i" style={{ fontSize: 7.5, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: '#9a9080', padding: '4px 8px', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 3, transition: 'all 0.25s', cursor: 'default' }}>
                  {s}
                </span>
              ))}
            </div>

            {/* contact section */}
            <div style={{ padding: '24px 36px 30px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* whatsapp */}
              <a className="contact-item-i" href="https://wa.me/5255173204660" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', transition: 'transform 0.2s' }}>
                <div className="contact-icon-i" style={{ width: 38, height: 38, borderRadius: 8, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.25s' }}>
                  <svg viewBox="0 0 24 24" width={18} height={18} fill="#C9A84C">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: 8, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: '#9a9080', display: 'block' }}>Tel / WhatsApp</span>
                  <span style={{ fontSize: 14, color: '#F2EDE4', display: 'block', marginTop: 2, fontFamily: 'var(--font-cormorant), serif', letterSpacing: 0.5 }}>55 1732 0466</span>
                </div>
              </a>

              {/* website */}
              <a className="contact-item-i" href="https://ambient-interiorismo.vercel.app" target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', transition: 'transform 0.2s' }}>
                <div className="contact-icon-i" style={{ width: 38, height: 38, borderRadius: 8, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.25s' }}>
                  <svg viewBox="0 0 24 24" width={18} height={18} fill="#C9A84C">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: 8, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: '#9a9080', display: 'block' }}>Sitio Web</span>
                  <span style={{ fontSize: 14, color: '#F2EDE4', display: 'block', marginTop: 2, fontFamily: 'var(--font-cormorant), serif', letterSpacing: 0.5 }}>ambient-interiorismo.vercel.app</span>
                </div>
              </a>
            </div>

            {/* footer */}
            <div style={{ padding: '14px 36px', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(201,168,76,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 8, letterSpacing: 2, textTransform: 'uppercase', color: '#9a9080', fontStyle: 'italic', fontFamily: 'var(--font-cormorant), serif' }}>
                Innovación · Calidad · Integridad
              </span>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#8a6f2e' }} />
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A84C' }} />
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#8a6f2e' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
