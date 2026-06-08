import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQSection } from '@/components/FAQSection';
import { CTABand } from '@/components/CTABand';
import { PageSchema } from '@/components/PageSchema';
import { buildMetadata } from '@/lib/metadata';
import { pages } from '@/src/data/seo';
import { allFaqs } from '@/src/data/faqs';

const seo = pages.faq;

export const metadata = buildMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  ogImage: seo.ogImage,
  keywords: seo.keywords,
});

export default function FAQPage() {
  return (
    <>
      <PageSchema seo={seo} faqs={allFaqs} breadcrumbs={[{ name: 'FAQ', path: '/faq/' }]} />
      <section className="section-pad bg-forest-dark text-cream">
        <div className="container-narrow">
          <Breadcrumbs items={[{ name: 'FAQ', path: '/faq/' }]} />
          <h1 className="font-display text-4xl font-bold text-gold sm:text-5xl">{seo.h1}</h1>
          <p className="mt-4 max-w-3xl text-lg text-cream/90">
            Answers to the most common questions about Hawthorne East Village Milton — prices, deposits,
            schools, VIP registration, and more.
          </p>
        </div>
      </section>
      <FAQSection faqs={allFaqs} heading="All Questions" id="full-faq" />
      <CTABand />
    </>
  );
}
