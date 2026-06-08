import type { Metadata } from 'next';
import { SITE } from '@/src/data/project';

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage = '/images/1780773913252_hero_community_picture.webp',
  noindex = false,
  keywords = [],
}: PageMetaInput): Metadata {
  const canonical =
    path === '/' ? `${SITE.url}/` : `${SITE.url}${path.endsWith('/') ? path : `${path}/`}`;
  const fullOg = ogImage.startsWith('http') ? ogImage : `${SITE.url}${ogImage}`;

  const defaultKeywords = [
    'Hawthorne East Village',
    'Hawthorne East Village Milton',
    'Mattamy Homes Milton',
    'Milton new homes',
    'Milton pre-construction',
    'Halton Region new homes',
  ];

  return {
    title,
    description,
    keywords: [...new Set([...defaultKeywords, ...keywords])],
    alternates: {
      canonical,
      languages: { 'en-CA': canonical },
      types: { 'text/plain': `${SITE.url}/llms.txt` },
    },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      images: [{ url: fullOg, width: 1200, height: 630, alt: title }],
      locale: 'en_CA',
      siteName: SITE.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullOg],
    },
    other: {
      'geo.region': 'CA-ON',
      'geo.placename': 'Milton',
      'geo.position': '43.4939;-79.8519',
      ICBM: '43.4939, -79.8519',
    },
  };
}

