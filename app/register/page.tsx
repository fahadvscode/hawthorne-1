import { PageSchema } from '@/components/PageSchema';
import { LeadForm } from '@/components/LeadForm';
import { buildMetadata } from '@/lib/metadata';
import { pages } from '@/src/data/seo';

const seo = pages.register;

export const metadata = buildMetadata({
  title: seo.title,
  description: seo.description,
  path: seo.path,
  ogImage: seo.ogImage,
  keywords: ['Hawthorne East Village registration', 'VIP registration Milton', 'Mattamy Homes VIP access'],
});

export default function RegisterPage() {
  return (
    <>
      <PageSchema seo={seo} breadcrumbs={[{ name: 'VIP Registration', path: '/register/' }]} />
      <section className="section-pad">
        <div className="container-narrow mx-auto max-w-xl text-center">
          <h1 className="font-display text-4xl font-bold text-forest-dark">{seo.h1}</h1>
          <p className="mt-4 text-forest-mid">
            Priority access to Hawthorne East Village pricing, floor plans, deposit schedules, and incentives.
            Our team will contact you shortly after registration.
          </p>
        </div>
        <div className="container-narrow mx-auto mt-10 max-w-lg rounded-lg border bg-white p-8 shadow-lg">
          <LeadForm
            id="register-form"
            variant="register"
            formType="register"
            ctaLabel="Complete VIP Registration"
          />
          <p className="mt-6 text-center text-xs text-forest-mid">
            We do not represent Mattamy Homes. Your information is sent securely to our authorized VIP sales
            team.
          </p>
        </div>
      </section>
    </>
  );
}
