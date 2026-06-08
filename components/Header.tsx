'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/floor-plans/', label: 'Floor Plans' },
  { href: '/prices/', label: 'Prices' },
  { href: '/townhomes/', label: 'Townhomes' },
  { href: '/detached/', label: 'Detached' },
  { href: '/location/', label: 'Location' },
  { href: '/faq/', label: 'FAQ' },
];

export function Header() {
  const currentPath = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-forest-mid/10 bg-white/95 text-forest-dark shadow-sm backdrop-blur-sm">
      <div className="container-narrow flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-3 leading-tight"
          aria-label="Hawthorne East Village Milton — Home"
        >
          <img
            src="/images/1780773913252_Hawthrone-East-Village-logo.webp"
            alt="Hawthorne East Village Logo"
            className="h-10 w-auto object-contain sm:h-12"
          />
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold text-forest-dark sm:text-xl">
              Hawthorne East Village
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-forest-accent">
              VIP Access · Milton
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition-colors hover:text-forest-accent ${
                currentPath.startsWith(item.href) ? 'text-forest-accent' : 'text-forest-mid'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/register/" className="btn-gold text-xs sm:text-sm">
            Get VIP Access
          </Link>
        </div>
      </div>
    </header>
  );
}
