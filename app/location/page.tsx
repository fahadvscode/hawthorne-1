import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTABand } from '@/components/CTABand';
import { PageSchema } from '@/components/PageSchema';
import { buildMetadata } from '@/lib/metadata';
import { pages } from '@/src/data/seo';
import { PROJECT } from '@/src/data/project';

const seo = pages.location;

export const metadata = buildMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  ogImage: seo.ogImage,
  keywords: seo.keywords,
});

export default function LocationPage() {
  return (
    <>
      <PageSchema
        seo={seo}
        breadcrumbs={[{ name: 'Location', path: '/location/' }]}
        includeSchools
      />
      <section className="section-pad bg-forest-dark text-cream">
        <div className="container-narrow">
          <Breadcrumbs items={[{ name: 'Location', path: '/location/' }]} />
          <h1 className="font-display text-4xl font-bold text-gold sm:text-5xl">{seo.h1}</h1>
          <p className="mt-4 max-w-3xl text-lg text-cream/90">
            Hawthorne East Village is located in Milton, Ontario at {PROJECT.address.street} (
            {PROJECT.address.area}), with quick access to Highways 401 and 407, Milton GO, and top Halton
            schools.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-narrow">
          <h2 className="mb-4 text-2xl text-forest-dark">Map</h2>
          <div className="aspect-video overflow-hidden rounded-lg border border-forest-mid/20 bg-forest-mid/10">
            <iframe
              title="Hawthorne East Village Milton location map"
              src={`https://maps.google.com/maps?q=${PROJECT.geo.latitude},${PROJECT.geo.longitude}&z=14&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-narrow grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl text-forest-dark">Transit & Highways</h2>
            <ul className="space-y-2 text-forest-mid">
              <li><strong>Highway 401 (~10 mins):</strong> Fast access to the broader GTA corridor.</li>
              <li><strong>Highway 407 (~7 mins):</strong> Convenient toll route across Halton and beyond.</li>
              <li><strong>Milton GO Station (~8 mins):</strong> Direct commuter rail service to Toronto Union Station.</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-2xl text-forest-dark">Healthcare & Recreation</h2>
            <ul className="space-y-2 text-forest-mid">
              <li><strong>Milton District Hospital (~6 mins):</strong> Comprehensive local healthcare.</li>
              <li><strong>Milton Sports Centre (~7 mins):</strong> Arenas, pools, and community programs.</li>
              <li><strong>Conservation Areas (~12 mins):</strong> Rattlesnake Point and Kelso for hiking and nature.</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-2xl text-forest-dark">Schools & Education</h2>
            <ul className="space-y-2 text-forest-mid">
              <li><strong>Boyne Public School (~3 mins):</strong> Highly rated local public elementary.</li>
              <li><strong>St. Francis Xavier Catholic Secondary (~4 mins):</strong> Premier Catholic high school.</li>
              <li><strong>Elsie MacGill Secondary School (~5 mins):</strong> Modern public high school facility.</li>
              <li><strong>Milton Education Village (~5 mins):</strong> Future home to Wilfrid Laurier University and Conestoga College campuses.</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-2xl text-forest-dark">Growth & Investment</h2>
            <p className="leading-relaxed text-forest-mid">
              Milton is part of Halton Region&apos;s growth plan toward ~1.1 million residents. The Milton
              Education Village brings Wilfrid Laurier University and Conestoga College to the area, anchoring
              the Toronto–Waterloo innovation corridor. New pre-construction communities like Hawthorne East
              Village benefit from infrastructure investment and commuter demand.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
