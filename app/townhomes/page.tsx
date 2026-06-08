import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABand } from '@/components/CTABand';
import { GatedDownload } from '@/components/GatedDownload';
import { PageSchema } from '@/components/PageSchema';
import { buildMetadata } from '@/lib/metadata';
import { pages } from '@/src/data/seo';
import { PROJECT, formatPrice } from '@/src/data/project';

const seo = pages.townhomes;

export const metadata = buildMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  ogImage: seo.ogImage,
  keywords: ['Hawthorne East Village townhomes', 'Milton freehold townhomes', 'Mattamy townhomes Milton'],
});

export default function TownhomesPage() {
  return (
    <>
      <PageSchema
        seo={seo}
        breadcrumbs={[{ name: 'Townhomes', path: '/townhomes/' }]}
        includeProducts
      />
      <section className="section-pad bg-forest-dark text-cream">
        <div className="container-narrow">
          <Breadcrumbs items={[{ name: 'Townhomes', path: '/townhomes/' }]} />
          <h1 className="font-display text-4xl font-bold text-gold sm:text-5xl">{seo.h1}</h1>
          <p className="mt-4 max-w-3xl text-lg text-cream/90">
            Hawthorne East Village offers freehold Village townhomes and common-element Rear Lane townhomes in
            Milton — Halton Region freehold and low-rise living by Mattamy Homes.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-narrow grid gap-10 lg:grid-cols-2">
          <article className="rounded-lg border bg-white p-8">
            <h2 className="text-2xl text-forest-dark">Village Townhomes</h2>
            <p className="mt-3 text-forest-mid">{PROJECT.homeTypes[0].description}</p>
            <ul className="mt-4 space-y-2 text-sm font-medium">
              <li>From {formatPrice(PROJECT.homeTypes[0].priceFrom)}*</li>
              <li>{PROJECT.homeTypes[0].beds} bed · {PROJECT.homeTypes[0].baths} bath</li>
              <li>
                {PROJECT.homeTypes[0].sizeMin.toLocaleString()} – {PROJECT.homeTypes[0].sizeMax.toLocaleString()} sq ft
              </li>
              <li>Freehold ownership</li>
            </ul>
          </article>
          <article className="rounded-lg border bg-white p-8">
            <h2 className="text-2xl text-forest-dark">Rear Lane Townhomes</h2>
            <p className="mt-3 text-forest-mid">{PROJECT.homeTypes[1].description}</p>
            <ul className="mt-4 space-y-2 text-sm font-medium">
              <li>From {formatPrice(PROJECT.homeTypes[1].priceFrom)}*</li>
              <li>{PROJECT.homeTypes[1].beds} bed · {PROJECT.homeTypes[1].baths} bath</li>
              <li>
                {PROJECT.homeTypes[1].sizeMin.toLocaleString()} – {PROJECT.homeTypes[1].sizeMax.toLocaleString()} sq ft
              </li>
              <li>Common-element with rear garage access</li>
            </ul>
          </article>
        </div>
        <div className="container-narrow mt-8 grid gap-8 md:grid-cols-2">
          <img
            src="/images/1780773913253_townhomes.jpg"
            alt="Hawthorne East Village Milton village townhomes by Mattamy Homes"
            width={800}
            height={600}
            loading="lazy"
            className="w-full rounded-lg object-cover shadow-sm"
          />
          <img
            src="/images/1780773913252_townhomes_3_storey.jpeg"
            alt="Hawthorne East Village Milton rear lane townhomes by Mattamy Homes"
            width={800}
            height={600}
            loading="lazy"
            className="w-full rounded-lg object-cover shadow-sm"
          />
        </div>
        <p className="container-narrow mt-4 text-xs text-forest-mid">*Starting from, subject to change. E&OE.</p>
        <div className="container-narrow mt-8 flex flex-wrap gap-4">
          <GatedDownload
            buttonLabel="Get Townhome Pricing"
            modalTitle="Hawthorne East Village Townhome VIP Package"
            formType="townhomes"
          />
          <Link href="/floor-plans/" className="btn-outline">
            View Floor Plans
          </Link>
        </div>
      </section>

      <CTABand />
    </>
  );
}
