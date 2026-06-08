import { JsonLd } from './JsonLd';
import { pageSchemaGraph } from '@/src/utils/schema';
import type { FAQ } from '@/src/data/faqs';
import type { PageSEO } from '@/src/data/seo';

interface PageSchemaProps {
  seo: PageSEO;
  faqs?: FAQ[];
  breadcrumbs?: { name: string; path: string }[];
  includeHomeTypes?: boolean;
  includeProducts?: boolean;
  includeSchools?: boolean;
  speakable?: boolean;
}

export function PageSchema({
  seo,
  faqs,
  breadcrumbs,
  includeHomeTypes,
  includeProducts,
  includeSchools,
  speakable = true,
}: PageSchemaProps) {
  return (
    <JsonLd
      data={pageSchemaGraph({
        seo,
        faqs,
        breadcrumbs,
        includeHomeTypes,
        includeProducts,
        includeSchools,
        speakable,
      })}
    />
  );
}
