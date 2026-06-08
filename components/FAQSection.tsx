import Link from 'next/link';
import type { FAQ } from '@/src/data/faqs';

interface FAQSectionProps {
  faqs: FAQ[];
  heading?: string;
  id?: string;
}

export function FAQSection({
  faqs,
  heading = 'Frequently Asked Questions',
  id = 'faq',
}: FAQSectionProps) {
  return (
    <section className="section-pad" aria-labelledby={`${id}-heading`}>
      <div className="container-narrow">
        <h2 id={`${id}-heading`} className="mb-8 text-3xl text-forest-dark">
          {heading}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item rounded-lg border border-forest-mid/15 bg-white">
              <summary className="flex items-center justify-between gap-4 px-5 py-4 font-semibold text-forest-dark">
                <span>{faq.question}</span>
                <svg
                  className="faq-chevron h-5 w-5 shrink-0 text-gold transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-forest-mid/10 px-5 pb-4 pt-2 leading-relaxed text-forest-mid">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
        <p className="mt-6 text-sm">
          <Link href="/faq/" className="font-semibold text-forest-accent hover:underline">
            View all Hawthorne East Village FAQs →
          </Link>
        </p>
      </div>
    </section>
  );
}
