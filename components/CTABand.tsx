import Link from 'next/link';

export function CTABand() {
  return (
    <section className="section-pad bg-forest-dark text-cream">
      <div className="container-narrow text-center">
        <h2 className="font-display text-3xl font-semibold text-gold sm:text-4xl">
          Register for Hawthorne East Village VIP Access
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/90">
          Priority pricing, floor plans, deposit schedules, and incentive details — before public launch.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/register/" className="btn-gold min-w-[200px]">
            VIP Registration
          </Link>
        </div>
      </div>
    </section>
  );
}
