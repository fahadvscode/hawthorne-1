import Link from 'next/link';

interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-forest-mid">
        <li>
          <Link href="/" className="hover:text-forest-accent">
            Home
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={item.path} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-forest-mid/50">
              /
            </span>
            {idx === items.length - 1 ? (
              <span className="font-medium text-ink" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-forest-accent">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
