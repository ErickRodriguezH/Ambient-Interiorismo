import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface PageHeroProps {
  title: string
  subtitle?: string
  description: string
  imageSrc: string
  imageAlt: string
  accent?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function PageHero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref = '/cotizador',
}: PageHeroProps) {
  return (
    <section className="relative min-h-[55vh] flex items-end pb-16 overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover opacity-45"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/20" />
      </div>

      <div className="relative z-10 px-8 max-w-3xl">
        {subtitle && (
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">{subtitle}</p>
        )}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-white/70 text-lg leading-relaxed max-w-xl">
          {description}
        </p>
        {ctaLabel && (
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-gold text-charcoal px-6 py-3 rounded-lg font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors group mt-8"
          >
            {ctaLabel}
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        )}
      </div>
    </section>
  )
}
