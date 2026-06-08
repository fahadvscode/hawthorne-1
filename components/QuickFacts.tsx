import { PROJECT, formatPrice } from '@/src/data/project';

export function QuickFacts() {
  return (
    <section className="section-pad bg-white" aria-labelledby="quick-facts-heading">
      <div className="container-narrow">
        <h2 id="quick-facts-heading" className="mb-6 text-3xl text-forest-dark">
          Hawthorne East Village — Quick Facts
        </h2>
        <div className="overflow-x-auto rounded-lg border border-forest-mid/20">
          <table className="w-full min-w-[320px] text-left text-sm">
            <caption className="sr-only">Key facts about Hawthorne East Village Milton by Mattamy Homes</caption>
            <tbody className="divide-y divide-forest-mid/10">
              <tr className="bg-cream/50">
                <th scope="row" className="px-4 py-3 font-semibold text-forest-dark">Builder</th>
                <td className="px-4 py-3">{PROJECT.builder}</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3 font-semibold text-forest-dark">Location</th>
                <td className="px-4 py-3">
                  {PROJECT.address.area}, {PROJECT.city}, {PROJECT.province}
                </td>
              </tr>
              <tr className="bg-cream/50">
                <th scope="row" className="px-4 py-3 font-semibold text-forest-dark">Home Types</th>
                <td className="px-4 py-3">Village townhomes, rear lane townhomes, detached (single & double garage)</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3 font-semibold text-forest-dark">Sizes</th>
                <td className="px-4 py-3">
                  Approx. {PROJECT.sizes.min.toLocaleString()} – {PROJECT.sizes.max.toLocaleString()} {PROJECT.sizes.unit}
                </td>
              </tr>
              <tr className="bg-cream/50">
                <th scope="row" className="px-4 py-3 font-semibold text-forest-dark">Starting Price</th>
                <td className="px-4 py-3">From {formatPrice(PROJECT.priceRange.low)} (subject to change)</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3 font-semibold text-forest-dark">Status</th>
                <td className="px-4 py-3">{PROJECT.status}</td>
              </tr>
              <tr className="bg-cream/50">
                <th scope="row" className="px-4 py-3 font-semibold text-forest-dark">Occupancy</th>
                <td className="px-4 py-3">{PROJECT.occupancy}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-forest-mid/80">
          Last updated: {PROJECT.lastUpdated}. Pricing and availability subject to change. E&OE.
        </p>
      </div>
    </section>
  );
}
