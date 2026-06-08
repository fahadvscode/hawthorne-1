import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABand } from '@/components/CTABand';
import { GatedDownload } from '@/components/GatedDownload';
import { PageSchema } from '@/components/PageSchema';
import { buildMetadata } from '@/lib/metadata';
import { pages } from '@/src/data/seo';
import { PROJECT, formatPrice } from '@/src/data/project';

const seo = pages.detached;

export const metadata = buildMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  ogImage: seo.ogImage,
  keywords: ['Hawthorne East Village detached', 'Milton detached homes', 'Mattamy detached Milton'],
});

export default function DetachedPage() {
  return (
    <>
      <PageSchema
        seo={seo}
        breadcrumbs={[{ name: 'Detached Homes', path: '/detached/' }]}
        includeProducts
      />
      <section className="section-pad bg-forest-dark text-cream">
        <div className="container-narrow">
          <Breadcrumbs items={[{ name: 'Detached Homes', path: '/detached/' }]} />
          <h1 className="font-display text-4xl font-bold text-gold sm:text-5xl">{seo.h1}</h1>
          <p className="mt-4 max-w-3xl text-lg text-cream/90">
            Detached homes at Hawthorne East Village Milton include single-car and double-car garage models
            from approximately {formatPrice(1022990)}, with footprints up to 2,777 square feet.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-narrow grid gap-10 lg:grid-cols-2">
          <article className="rounded-lg border bg-white p-8">
            <h2 className="text-2xl text-forest-dark">Single-Car Garage Detached</h2>
            <p className="mt-3 text-forest-mid">{PROJECT.homeTypes[2].description}</p>
            <ul className="mt-4 space-y-2 text-sm font-medium">
              <li>From {formatPrice(PROJECT.homeTypes[2].priceFrom)}*</li>
              <li>{PROJECT.homeTypes[2].beds} bed · up to {PROJECT.homeTypes[2].sizeMax.toLocaleString()} sq ft</li>
            </ul>
          </article>
          <article className="rounded-lg border bg-white p-8">
            <h2 className="text-2xl text-forest-dark">Double-Car Garage Detached</h2>
            <p className="mt-3 text-forest-mid">{PROJECT.homeTypes[3].description}</p>
            <ul className="mt-4 space-y-2 text-sm font-medium">
              <li>From {formatPrice(PROJECT.homeTypes[3].priceFrom)}*</li>
              <li>Up to {PROJECT.homeTypes[3].sizeMax.toLocaleString()} sq ft · {PROJECT.homeTypes[3].baths} bath</li>
            </ul>
          </article>
        </div>
        <div className="container-narrow mt-8 grid gap-8 md:grid-cols-2">
          <img
            src="/images/1780773913252_detached_single_car.jpg"
            alt="Hawthorne East Village Milton single garage detached home elevation by Mattamy Homes"
            width={800}
            height={600}
            loading="lazy"
            className="w-full rounded-lg object-cover shadow-sm"
          />
          <img
            src="/images/1780773913251_2_car_garage_detached.webp"
            alt="Hawthorne East Village Milton double garage detached home elevation by Mattamy Homes"
            width={800}
            height={600}
            loading="lazy"
            className="w-full rounded-lg object-cover shadow-sm"
          />
        </div>
        <div className="container-narrow mt-8 flex flex-wrap gap-4">
          <GatedDownload
            buttonLabel="Get Detached Pricing"
            modalTitle="Hawthorne East Village Detached VIP Package"
            formType="detached"
          />
          <Link href="/prices/" className="btn-outline">
            View All Prices
          </Link>
        </div>
      </section>

      <CTABand />
    </>
  );
}
