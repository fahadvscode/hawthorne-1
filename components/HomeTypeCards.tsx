import Link from 'next/link';
import { PROJECT, formatPrice } from '@/src/data/project';

const cards = [
  {
    title: 'Village Townhomes',
    desc: 'Freehold village-style townhomes with front street appeal.',
    href: '/townhomes/',
    price: PROJECT.homeTypes[0].priceFrom,
    size: '1,348–1,800 sq ft',
    image: '/images/1780773913253_townhomes.jpg',
    alt: 'Hawthorne East Village Milton freehold village townhome elevation by Mattamy Homes',
  },
  {
    title: 'Rear Lane Townhomes',
    desc: 'Common-element rear lane townhomes with private rear garage access.',
    href: '/townhomes/',
    price: PROJECT.homeTypes[1].priceFrom,
    size: '1,500–2,000 sq ft',
    image: '/images/1780773913252_townhomes_3_storey.jpeg',
    alt: 'Hawthorne East Village Milton rear lane townhome by Mattamy Homes',
  },
  {
    title: 'Detached Homes',
    desc: 'Single and double-car garage detached homes up to 2,777 sq ft.',
    href: '/detached/',
    price: PROJECT.homeTypes[2].priceFrom,
    size: '1,800–2,777 sq ft',
    image: '/images/1780773913251_2_car_garage_detached.webp',
    alt: 'Hawthorne East Village Milton detached home elevation by Mattamy Homes',
  },
];

export function HomeTypeCards() {
  return (
    <section className="section-pad" aria-labelledby="home-types-heading">
      <div className="container-narrow">
        <h2 id="home-types-heading" className="mb-4 text-3xl text-forest-dark">
          Hawthorne East Village Home Types
        </h2>
        <p className="prose-lead mb-10 max-w-3xl">
          Choose from freehold village townhomes, rear lane townhomes, and detached homes — all by Mattamy
          Homes in Milton, Ontario.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-lg border border-forest-mid/15 bg-white shadow-sm"
            >
              <img
                src={card.image}
                alt={card.alt}
                width={400}
                height={260}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl text-forest-dark">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm text-forest-mid">{card.desc}</p>
                <ul className="mt-4 space-y-1 text-sm font-medium text-forest-dark">
                  <li>From {formatPrice(card.price)}*</li>
                  <li>{card.size}</li>
                </ul>
                <Link href={card.href} className="mt-6 text-sm font-semibold text-forest-accent hover:underline">
                  View details →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-forest-mid/80">*Starting from, subject to change. E&OE.</p>
      </div>
    </section>
  );
}
