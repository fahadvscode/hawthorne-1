import Link from 'next/link';
import { ThankYouTracking } from '@/components/ThankYouTracking';
import { buildMetadata } from '@/lib/metadata';
import { pages } from '@/src/data/seo';

export const metadata = buildMetadata({
  title: pages.thankYou.title,
  description: pages.thankYou.description,
  path: pages.thankYou.path,
  ogImage: pages.thankYou.ogImage,
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <>
      <ThankYouTracking />
      <section className="section-pad">
        <div className="container-narrow mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold text-forest-dark">{pages.thankYou.h1}</h1>
          <p className="mt-4 text-lg text-forest-mid">
            Your VIP registration for Hawthorne East Village Milton has been received. Our team will contact
            you within the next few minutes with your package.
          </p>

          <div className="mt-10 rounded-lg border border-gold/40 bg-white p-8 text-left">
            <h2 className="text-xl font-semibold text-forest-dark">Your VIP Package</h2>
            <p className="mt-2 text-sm text-forest-mid">
              Download links below are placeholders — our team will send the current price list and floor
              plans directly.
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/prices/" className="font-semibold text-forest-accent hover:underline">
                  Hawthorne East Village price overview →
                </Link>
              </li>
              <li>
                <Link href="/floor-plans/" className="font-semibold text-forest-accent hover:underline">
                  Floor plans & home sizes →
                </Link>
              </li>
            </ul>
          </div>

          <h2 className="mt-10 text-xl font-semibold text-forest-dark">What Happens Next?</h2>
          <ol className="mt-4 space-y-3 text-left text-forest-mid">
            <li>1. Our team reviews your registration and preferred home type.</li>
            <li>2. You receive a call or text at the number you provided.</li>
            <li>3. Current pricing, floor plans, and incentive details are shared for your phase.</li>
          </ol>
        </div>
      </section>
    </>
  );
}
