import Link from 'next/link';
import { PageSchema } from '@/components/PageSchema';
import { Hero } from '@/components/Hero';
import { QuickFacts } from '@/components/QuickFacts';
import { HomeTypeCards } from '@/components/HomeTypeCards';
import { FAQSection } from '@/components/FAQSection';
import { CTABand } from '@/components/CTABand';
import { TrustBar } from '@/components/TrustBar';
import { GatedDownload } from '@/components/GatedDownload';
import { buildMetadata } from '@/lib/metadata';
import { pages } from '@/src/data/seo';
import { homeFaqs } from '@/src/data/faqs';
import { PROJECT, formatPrice } from '@/src/data/project';

const seo = pages.home;

export const metadata = buildMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  ogImage: seo.ogImage,
  keywords: seo.keywords,
});

export default function HomePage() {
  return (
    <>
      <PageSchema seo={seo} faqs={homeFaqs} includeHomeTypes speakable />
      <Hero
        h1={seo.h1}
        subtitle="New townhomes & detached homes by Mattamy Homes — register for VIP pricing, floor plans & incentives before public launch."
      />
      <TrustBar />
      <QuickFacts />

      <section className="section-pad">
        <div className="container-narrow max-w-3xl">
          <h2 className="mb-4 text-3xl text-forest-dark">New Pre-Construction Homes in Milton, Ontario</h2>
          <p className="prose-lead">
            <strong>Hawthorne East Village</strong> is a master-planned pre-construction community by{' '}
            <strong>Mattamy Homes</strong> in <strong>Milton, Ontario</strong> (Halton Region). The community
            offers freehold village townhomes, common-element rear lane townhomes, and detached homes ranging
            from approximately {PROJECT.sizes.min.toLocaleString()} to {PROJECT.sizes.max.toLocaleString()}{' '}
            square feet, with pricing starting from {formatPrice(PROJECT.priceRange.low)}.
          </p>
          <p className="mt-4 leading-relaxed text-forest-mid">
            Located at {PROJECT.address.street}, Hawthorne East Village provides access to Highway 401,
            Highway 407, Milton GO Station, and Milton District Hospital. This site is independently
            marketed by authorized real estate professionals to provide VIP buyer representation — we do not
            represent Mattamy Homes.
          </p>
        </div>
      </section>

      <HomeTypeCards />

      <section className="section-pad bg-white">
        <div className="container-narrow flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl text-forest-dark">Hawthorne East Village Prices</h2>
            <p className="mt-3 text-forest-mid">
              Village townhomes from {formatPrice(719990)}, detached from {formatPrice(1022990)}. View full
              pricing, deposit structure, and current incentives.
            </p>
            <Link href="/prices/" className="mt-4 inline-block font-semibold text-forest-accent hover:underline">
              See all Hawthorne East Village prices →
            </Link>
          </div>
          <GatedDownload
            buttonLabel="Download Price List"
            modalTitle="Download Hawthorne East Village Price List"
            formType="price-list"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-narrow">
          <h2 className="mb-4 text-3xl text-forest-dark">Location & Lifestyle</h2>
          <p className="prose-lead max-w-3xl">
            Hawthorne East Village sits in one of Milton&apos;s growth corridors with top-rated Halton schools,
            GO Transit, and the planned Milton Education Village (Wilfrid Laurier + Conestoga). Explore
            transit, amenities, and the investment story.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {PROJECT.amenities.map((a) => (
              <li key={a} className="flex items-start gap-2 text-forest-mid">
                <span className="text-gold" aria-hidden="true">✓</span>
                {a}
              </li>
            ))}
          </ul>
          <Link href="/location/" className="mt-6 inline-block font-semibold text-forest-accent hover:underline">
            Hawthorne East Village location guide →
          </Link>
        </div>
      </section>

      <section className="section-pad bg-forest-mid/10">
        <div className="container-narrow">
          <h2 className="mb-4 text-3xl text-forest-dark">Why Invest in Milton Pre-Construction?</h2>
          <p className="max-w-3xl leading-relaxed text-forest-mid">
            Halton Region is projected toward approximately 1.1 million residents, with Milton among the
            fastest-growing GTA municipalities. The Toronto–Waterloo innovation corridor, Milton Education
            Village, and major highway infrastructure support long-term housing demand. Pre-construction at
            Hawthorne East Village may offer preferential pricing and deposit structures compared to resale —
            register for details specific to your situation.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-narrow">
          <h2 className="mb-6 text-3xl text-forest-dark">Community Site Plan</h2>
          <img
            src="/images/1780773913252_sitemap.jpg"
            alt="Hawthorne East Village Milton Site Plan by Mattamy Homes"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full rounded-lg border border-forest-mid/15 shadow-sm"
          />
          <p className="mt-4 text-sm text-forest-mid">
            Site plan is illustrative and subject to change. Register for VIP access to receive the latest lot
            availability and premiums.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl text-forest-dark">Limited VIP Incentives</h2>
          <p className="mx-auto mt-4 max-w-2xl text-forest-mid">
            {PROJECT.incentives} Register now for priority access — no obligation.
          </p>
          <Link href="/register/" className="btn-gold mt-8 inline-flex">
            Register for VIP Access
          </Link>
        </div>
      </section>

      <FAQSection faqs={homeFaqs} heading="Hawthorne East Village — Top Questions" />
      <CTABand />
    </>
  );
}
