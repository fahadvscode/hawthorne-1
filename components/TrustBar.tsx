export function TrustBar() {
  return (
    <section className="border-y border-forest-mid/10 bg-white py-6" aria-label="Trust signals">
      <div className="container-narrow flex flex-wrap items-center justify-center gap-8 px-4 text-center sm:justify-between sm:text-left">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest-mid/10 text-forest-accent ring-2 ring-gold/50">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <p className="font-bold text-forest-dark">Authorized VIP Access</p>
            <p className="text-sm text-forest-mid">Priority Pricing & Floor Plans</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="max-w-xs text-sm text-forest-mid">
            Independent buyer representation — <strong>we do not represent Mattamy Homes</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
