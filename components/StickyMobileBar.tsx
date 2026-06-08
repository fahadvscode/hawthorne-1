import Link from 'next/link';

export function StickyMobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-forest-mid/30 bg-forest-dark p-2 shadow-lg md:hidden"
      role="navigation"
      aria-label="Mobile call to action"
    >
      <Link href="/register/" className="btn-gold flex-1 rounded-md text-sm">
        Get VIP Access
      </Link>
    </div>
  );
}
