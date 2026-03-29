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
  title: 'Felipe Rodríguez Salazar — FDAV Telecom',
  description: 'Tarjeta de contacto digital · Director General · FDAV Telecom · Soluciones en Telecomunicaciones.',
}

export default function TarjetaFdavPage() {
  return (
    <div
      className={`${cormorant.variable} ${montserrat.variable}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflowY: 'auto',
        background: '#120A0E',
        backgroundImage:
          'radial-gradient(ellipse at 20% 50%, rgba(155,28,53,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(155,28,53,0.05) 0%, transparent 50%)',
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
            from { opacity: 0.5; }
            to   { opacity: 1; }
          }
          .card-glow-fdav::before {
            content: '';
            position: absolute;
            inset: -20px;
            background: radial-gradient(ellipse at center, rgba(155,28,53,0.18) 0%, transparent 70%);
            border-radius: 24px;
            pointer-events: none;
            animation: pulseGlow 3s ease-in-out infinite alternate;
          }
          .service-tag-fdav:hover {
            color: #C42040 !important;
            border-color: rgba(155,28,53,0.6) !important;
            background: rgba(155,28,53,0.08) !important;
          }
          .contact-item-fdav { display:flex; align-items:center; gap:14px; text-decoration:none; transition:transform 0.2s; }
          .contact-item-fdav:hover { transform: translateX(4px); }
          .contact-icon-fdav { transition: all 0.25s; }
          .contact-item-fdav:hover .contact-icon-fdav {
            background: rgba(155,28,53,0.18) !important;
            border-color: #C42040 !important;
          }
        `}</style>

        <div className="card-glow-fdav" style={{ position: 'relative' }}>
          <div
            style={{
              background: '#1C1015',
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid rgba(155,28,53,0.25)',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.8), 0 30px 60px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.04)',
              position: 'relative',
            }}
          >
            {/* top wine line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: 'linear-gradient(90deg, transparent, #9B1C35, #C42040, #9B1C35, transparent)',
              }}
            />

            {/* header */}
            <div
              style={{
                padding: '36px 36px 24px',
                borderBottom: '1px solid rgba(155,28,53,0.15)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 20 }}>
                {/* logo mark — signal tower */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    background: 'linear-gradient(135deg, #6B1225, #9B1C35)',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 16px rgba(155,28,53,0.4)',
                  }}
                >
                  {/* Signal / telecom tower icon */}
                  <svg viewBox="0 0 28 28" fill="none" width={28} height={28}>
                    <circle cx="14" cy="16" r="2.5" fill="#F5F0F2" />
                    <path d="M9 11.5a7 7 0 0110 0" stroke="#F5F0F2" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                    <path d="M5.5 8a12 12 0 0117 0" stroke="rgba(245,240,242,0.5)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                    <line x1="14" y1="18.5" x2="14" y2="23" stroke="#F5F0F2" strokeWidth="1.6" strokeLinecap="round" />
                    <line x1="11" y1="23" x2="17" y2="23" stroke="#F5F0F2" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: 30,
                      fontWeight: 600,
                      color: '#F5F0F2',
                      letterSpacing: 5,
                      lineHeight: 1,
                      textTransform: 'uppercase',
                    }}
                  >
                    FDAV
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#F5F0F2',
                      letterSpacing: 4,
                      textTransform: 'uppercase',
                      marginTop: 3,
                      opacity: 0.85,
                    }}
                  >
                    TELECOM
                  </div>
                  <div
                    style={{
                      fontSize: 8,
                      color: '#C42040',
                      letterSpacing: 2.5,
                      textTransform: 'uppercase',
                      marginTop: 5,
                    }}
                  >
                    Conectando tu mundo
                  </div>
                </div>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 20,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: '#F5F0F2',
                  letterSpacing: 1,
                }}
              >
                Felipe Rodríguez Salazar
              </div>
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  color: '#C42040',
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  marginTop: 3,
                }}
              >
                Director General
              </div>
            </div>

            {/* services strip */}
            <div
              style={{
                background: '#261520',
                padding: '14px 36px',
                display: 'flex',
                gap: 6,
                flexWrap: 'wrap',
                borderBottom: '1px solid rgba(155,28,53,0.12)',
              }}
            >
              {['Fibra Óptica', 'Internet', 'VoIP', 'CCTV', 'Redes', 'Cableado', 'Soporte IT', 'WiFi Empresarial'].map(
                (s) => (
                  <span
                    key={s}
                    className="service-tag-fdav"
                    style={{
                      fontSize: 7.5,
                      fontWeight: 600,
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                      color: '#8A7880',
                      padding: '4px 8px',
                      border: '1px solid rgba(155,28,53,0.2)',
                      borderRadius: 3,
                      transition: 'all 0.25s',
                      cursor: 'default',
                    }}
                  >
                    {s}
                  </span>
                )
              )}
            </div>

            {/* contact section */}
            <div style={{ padding: '24px 36px 30px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* whatsapp */}
              <a
                className="contact-item-fdav"
                href="https://wa.me/5573944084"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="contact-icon-fdav"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 8,
                    background: 'rgba(155,28,53,0.1)',
                    border: '1px solid rgba(155,28,53,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg viewBox="0 0 24 24" width={18} height={18} fill="#C42040">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: 8, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: '#8A7880', display: 'block' }}>
                    Tel / WhatsApp
                  </span>
                  <span style={{ fontSize: 14, color: '#F5F0F2', display: 'block', marginTop: 2, fontFamily: 'var(--font-cormorant), serif', letterSpacing: 0.5 }}>
                    55 7394 4084
                  </span>
                </div>
              </a>

              {/* location */}
              <div className="contact-item-fdav" style={{ cursor: 'default' }}>
                <div
                  className="contact-icon-fdav"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 8,
                    background: 'rgba(155,28,53,0.1)',
                    border: '1px solid rgba(155,28,53,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#C42040" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: 8, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: '#8A7880', display: 'block' }}>
                    Ubicación
                  </span>
                  <span style={{ fontSize: 13, color: '#F5F0F2', display: 'block', marginTop: 2, fontFamily: 'var(--font-cormorant), serif', letterSpacing: 0.5 }}>
                    Ciudad de México
                  </span>
                </div>
              </div>
            </div>

            {/* footer */}
            <div
              style={{
                padding: '14px 36px',
                background: 'rgba(0,0,0,0.35)',
                borderTop: '1px solid rgba(155,28,53,0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: 8,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: '#8A7880',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-cormorant), serif',
                }}
              >
                Conectividad · Confianza · Excelencia
              </span>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#6B1225' }} />
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C42040' }} />
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#6B1225' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
