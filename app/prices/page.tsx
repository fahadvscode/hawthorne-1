import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQSection } from '@/components/FAQSection';
import { CTABand } from '@/components/CTABand';
import { GatedDownload } from '@/components/GatedDownload';
import { PageSchema } from '@/components/PageSchema';
import { buildMetadata } from '@/lib/metadata';
import { pages } from '@/src/data/seo';
import { priceFaqs } from '@/src/data/faqs';
import { PROJECT, formatPrice } from '@/src/data/project';

const seo = pages.prices;

export const metadata = buildMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  ogImage: seo.ogImage,
  keywords: seo.keywords,
});

export default function PricesPage() {
  return (
    <>
      <PageSchema
        seo={seo}
        faqs={priceFaqs}
        breadcrumbs={[{ name: 'Prices', path: '/prices/' }]}
        includeProducts
      />
      <section className="section-pad bg-forest-dark text-cream">
        <div className="container-narrow">
          <Breadcrumbs items={[{ name: 'Prices', path: '/prices/' }]} />
          <h1 className="font-display text-4xl font-bold text-gold sm:text-5xl">{seo.h1}</h1>
          <p className="mt-4 max-w-3xl text-lg text-cream/90">
            Hawthorne East Village prices start from approximately {formatPrice(PROJECT.priceRange.low)} for
            village townhomes and {formatPrice(1022990)} for detached homes, up to approximately{' '}
            {formatPrice(PROJECT.priceRange.high)} for select larger models. All pricing is subject to change
            by phase.
          </p>
          <p className="mt-2 text-sm text-gold/90">Last updated: {PROJECT.lastUpdated}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-narrow">
          <h2 className="mb-6 text-2xl text-forest-dark">Price Table by Home Type</h2>
          <div className="overflow-x-auto rounded-lg border border-forest-mid/20 bg-white">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="bg-forest-dark text-cream">
                <tr>
                  <th className="px-4 py-3">Home Type</th>
                  <th className="px-4 py-3">Size (approx.)</th>
                  <th className="px-4 py-3">Starting From*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest-mid/10">
                {PROJECT.homeTypes.map((ht, i) => (
                  <tr key={ht.id} className={i % 2 === 0 ? 'bg-cream/30' : undefined}>
                    <td className="px-4 py-3 font-medium">{ht.name}</td>
                    <td className="px-4 py-3">
                      {ht.sizeMin.toLocaleString()} – {ht.sizeMax.toLocaleString()} sq ft
                    </td>
                    <td className="px-4 py-3 font-semibold text-forest-accent">{formatPrice(ht.priceFrom)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-forest-mid">*Starting from, subject to change without notice. E&OE.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <GatedDownload
              buttonLabel="Download Full Price List"
              modalTitle="Hawthorne East Village VIP Price List"
              formType="full-price-list"
            />
            <Link href="/register/" className="btn-outline">
              VIP Registration
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-narrow max-w-3xl">
          <h2 className="mb-4 text-2xl text-forest-dark">Deposit Structure</h2>
          <p className="leading-relaxed text-forest-mid">{PROJECT.deposit.summary}</p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-forest-mid">
            {PROJECT.deposit.typical.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <Link href="/register/" className="font-semibold text-forest-accent hover:underline">
              Register for your phase-specific deposit schedule →
            </Link>
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-narrow max-w-3xl">
          <h2 className="mb-4 text-2xl text-forest-dark">Current Incentives</h2>
          <p className="leading-relaxed text-forest-mid">{PROJECT.incentives}</p>
        </div>
      </section>

      <FAQSection faqs={priceFaqs} heading="Hawthorne East Village Pricing FAQ" id="prices-faq" />
      <CTABand />
    </>
  );
}
