import Link from 'next/link';
import { LeadForm } from './LeadForm';

interface HeroProps {
  h1: string;
  subtitle: string;
  showForm?: boolean;
}

export function Hero({ h1, subtitle, showForm = true }: HeroProps) {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-forest-dark text-cream">
      <picture className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src="/images/1780773913252_hero_community_picture.webp"
          alt="Hawthorne East Village Milton new home community by Mattamy Homes pre-construction"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </picture>
      <div
        className="absolute inset-0 bg-forest-dark/70 sm:bg-transparent sm:bg-gradient-to-r sm:from-forest-dark/95 sm:via-forest-dark/80 sm:to-forest-dark/40"
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10 grid gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:items-center lg:py-24">
        <div className="lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1.5 text-sm font-bold text-gold backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            Register Now for VIP Access
          </div>
          <h1 className="text-balance font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/90 sm:text-xl">{subtitle}</p>

          <ul className="mt-8 space-y-3 text-base font-medium text-cream/90 sm:text-lg">
            <li className="flex items-center gap-3">
              <svg className="h-6 w-6 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Freehold Townhomes & Detached Homes
            </li>
            <li className="flex items-center gap-3">
              <svg className="h-6 w-6 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Priority Pricing & Floor Plans
            </li>
            <li className="flex items-center gap-3">
              <svg className="h-6 w-6 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Exclusive VIP Incentives
            </li>
          </ul>

          {!showForm && (
            <Link href="/register/" className="btn-gold mt-10 inline-flex px-8 py-4 text-lg">
              Get VIP Pricing & Floor Plans
            </Link>
          )}
        </div>

        {showForm && (
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border-t-4 border-gold bg-white p-6 shadow-2xl sm:p-8">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-forest-accent px-4 py-1 text-sm font-bold text-white shadow-md">
                Limited Time Access
              </div>
              <div className="mb-6 mt-2 text-center">
                <h2 className="text-2xl font-bold text-forest-dark">VIP Registration</h2>
                <p className="mt-1 text-sm text-forest-mid">Get floor plans & pricing instantly</p>
              </div>
              <LeadForm id="hero-form" variant="hero" formType="hero" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
