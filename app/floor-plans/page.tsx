import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQSection } from '@/components/FAQSection';
import { CTABand } from '@/components/CTABand';
import { GatedDownload } from '@/components/GatedDownload';
import { PageSchema } from '@/components/PageSchema';
import { buildMetadata } from '@/lib/metadata';
import { pages } from '@/src/data/seo';
import { floorPlanFaqs } from '@/src/data/faqs';
import { PROJECT } from '@/src/data/project';

const seo = pages.floorPlans;

const gallery = [
  { name: 'Village Townhome A', beds: '2–3 bed', size: '1,348–1,550 sq ft' },
  { name: 'Village Townhome B', beds: '3–4 bed', size: '1,550–1,800 sq ft' },
  { name: 'Rear Lane Townhome', beds: '3–4 bed', size: '1,500–2,000 sq ft' },
  { name: "Detached 34'", beds: '3–4 bed', size: '1,800–2,200 sq ft' },
  { name: "Detached 38'", beds: '4–5 bed', size: '2,200–2,777 sq ft' },
  { name: "Detached 40'", beds: '4–5 bed', size: '2,400–2,777 sq ft' },
];

const galleryImages = [
  '/images/1780773913253_townhomes.jpg',
  '/images/1780773913253_townhomes.jpg',
  '/images/1780773913252_townhomes_3_storey.jpeg',
  '/images/1780773913251_2_car_garage_detached.webp',
  '/images/1780773913251_2_car_garage_detached.webp',
  '/images/1780773913251_2_car_garage_detached.webp',
];

export const metadata = buildMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  ogImage: seo.ogImage,
  keywords: ['Hawthorne East Village floor plans', 'Milton floor plans', 'Mattamy Homes floor plans'],
});

export default function FloorPlansPage() {
  return (
    <>
      <PageSchema
        seo={seo}
        faqs={floorPlanFaqs}
        breadcrumbs={[{ name: 'Floor Plans', path: '/floor-plans/' }]}
        includeHomeTypes
      />
      <section className="section-pad bg-forest-dark text-cream">
        <div className="container-narrow">
          <Breadcrumbs items={[{ name: 'Floor Plans', path: '/floor-plans/' }]} />
          <h1 className="font-display text-4xl font-bold text-gold sm:text-5xl">{seo.h1}</h1>
          <p className="mt-4 max-w-3xl text-lg text-cream/90">
            Hawthorne East Village floor plans range from approximately {PROJECT.sizes.min.toLocaleString()}{' '}
            to {PROJECT.sizes.max.toLocaleString()} square feet across townhome and detached home types by
            Mattamy Homes in Milton.
          </p>
          <p className="mt-2 text-sm text-gold/90">Last updated: {PROJECT.lastUpdated}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-narrow">
          <h2 className="mb-8 text-2xl text-forest-dark">Home Types & Size Ranges</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECT.homeTypes.map((ht) => (
              <article key={ht.id} className="rounded-lg border border-forest-mid/15 bg-white p-6">
                <h3 className="text-xl text-forest-dark">{ht.name}</h3>
                <p className="mt-2 text-sm text-forest-mid">{ht.description}</p>
                <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <dt className="font-semibold">Bedrooms</dt>
                  <dd>{ht.beds}</dd>
                  <dt className="font-semibold">Bathrooms</dt>
                  <dd>{ht.baths}</dd>
                  <dt className="font-semibold">Size</dt>
                  <dd>
                    {ht.sizeMin.toLocaleString()} – {ht.sizeMax.toLocaleString()} sq ft
                  </dd>
                </dl>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <GatedDownload
              buttonLabel="Download All Floor Plans"
              modalTitle="Hawthorne East Village Floor Plans"
              formType="floor-plans"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-narrow">
          <h2 className="mb-6 text-2xl text-forest-dark">Floor Plan Gallery</h2>
          <p className="mb-8 text-sm text-forest-mid">
            Illustrative models — confirm current availability at VIP registration.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((plan, i) => (
              <figure key={plan.name} className="overflow-hidden rounded-lg border border-forest-mid/15">
                <img
                  src={galleryImages[i]}
                  alt={`Hawthorne East Village Milton ${plan.name} floor plan placeholder by Mattamy Homes`}
                  width={400}
                  height={260}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                <figcaption className="p-4">
                  <p className="font-semibold text-forest-dark">{plan.name}</p>
                  <p className="text-sm text-forest-mid">
                    {plan.beds} · {plan.size}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={floorPlanFaqs} heading="Floor Plan FAQ" id="floor-plans-faq" />
      <CTABand />
    </>
  );
}
