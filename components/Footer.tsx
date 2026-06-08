import Link from 'next/link';
import { CONTACT, DISCLAIMER, PROJECT } from '@/src/data/project';

const footerNav = [
  { href: '/', label: 'Home' },
  { href: '/floor-plans/', label: 'Floor Plans' },
  { href: '/prices/', label: 'Prices' },
  { href: '/townhomes/', label: 'Townhomes' },
  { href: '/detached/', label: 'Detached' },
  { href: '/location/', label: 'Location' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/register/', label: 'VIP Registration' },
];

export function Footer() {
  return (
    <footer className="bg-forest-dark text-cream">
      <div className="section-pad container-narrow">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold text-gold">{PROJECT.name}</p>
            <p className="mt-2 text-sm text-cream/80">
              Pre-construction by {PROJECT.builder} in {PROJECT.city}, {PROJECT.province}
            </p>
            <p className="mt-4 text-sm font-semibold text-cream">Authorized VIP Platinum Access</p>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-gold">Explore</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream/80 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-gold">Contact</p>
            <address className="not-italic text-sm leading-relaxed text-cream/90">
              <p>{CONTACT.name}</p>
              <p>{CONTACT.brokerage}</p>
              <p>{CONTACT.address}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-xs leading-relaxed text-cream/70">
          <p>{DISCLAIMER.preliminary}</p>
          <p className="mt-2">
            © {new Date().getFullYear()} {CONTACT.name}. All rights reserved.
          </p>
          <p className="mt-4 font-bold text-cream/90">{DISCLAIMER.notOfficial}</p>
        </div>
      </div>
    </footer>
  );
}
