import { CONTACT, PROJECT, SITE, DISCLAIMER } from '../data/project';
import type { FAQ } from '../data/faqs';
import type { PageSEO } from '../data/seo';

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const LISTING_ID = `${SITE.url}/#listing`;
const PLACE_ID = `${SITE.url}/#place`;
const AGENT_ID = `${SITE.url}/#agent`;

function stripContext<T extends Record<string, unknown>>(node: T): T {
  const { '@context': _, ...rest } = node;
  return rest as T;
}

/** Merge schema nodes into a single @graph document (best for entity linking). */
export function toGraph(nodes: object[]): object {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.map((n) => stripContext(n as Record<string, unknown>)),
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Hawthorne East Village VIP Sales',
    alternateName: SITE.brand,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/images/1780773913252_Hawthrone-East-Village-logo.webp`,
      width: 600,
      height: 200,
    },
    image: `${SITE.url}/images/1780773913252_hero_community_picture.webp`,
    description:
      'Authorized independent VIP sales team for Hawthorne East Village by Mattamy Homes in Milton, Ontario. Priority access to pricing, floor plans, and incentives.',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Halton Region, Ontario, Canada',
    },
    knowsAbout: [
      'Hawthorne East Village Milton',
      'Mattamy Homes pre-construction',
      'Milton new homes',
      'Halton Region real estate',
      'Pre-construction townhomes',
      'Pre-construction detached homes',
    ],
    ...(CONTACT.email ? { email: CONTACT.email } : {}),
  };
}

export function realEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': AGENT_ID,
    name: CONTACT.name,
    description: DISCLAIMER.notOfficial,
    url: `${SITE.url}/register/`,
    areaServed: {
      '@type': 'City',
      name: PROJECT.city,
      containedInPlace: { '@type': 'AdministrativeArea', name: PROJECT.region },
    },
    parentOrganization: { '@id': ORG_ID },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.name,
    alternateName: 'Hawthorne East Village Milton by Mattamy Homes',
    url: SITE.url,
    description:
      'Official VIP registration site for Hawthorne East Village — pre-construction townhomes and detached homes in Milton, Ontario by Mattamy Homes.',
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-CA',
    potentialAction: {
      '@type': 'RegisterAction',
      name: 'VIP Registration — Hawthorne East Village',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/register/`,
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
    },
  };
}

export function placeSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': PLACE_ID,
    name: `${PROJECT.name} — ${PROJECT.city}`,
    description: `Pre-construction community by ${PROJECT.builder} at ${PROJECT.address.street}, ${PROJECT.city}, ${PROJECT.province}.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: PROJECT.address.street,
      addressLocality: PROJECT.address.city,
      addressRegion: PROJECT.address.province,
      postalCode: PROJECT.address.postalCode,
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: PROJECT.geo.latitude,
      longitude: PROJECT.geo.longitude,
    },
    hasMap: `https://maps.google.com/maps?q=${PROJECT.geo.latitude},${PROJECT.geo.longitude}`,
    amenityFeature: PROJECT.amenities.map((a) => ({
      '@type': 'LocationFeatureSpecification',
      name: a,
      value: true,
    })),
    containedInPlace: {
      '@type': 'City',
      name: PROJECT.city,
      containedInPlace: { '@type': 'AdministrativeArea', name: PROJECT.region },
    },
  };
}

export function listingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['RealEstateListing', 'Product'],
    '@id': LISTING_ID,
    name: `${PROJECT.name} — Pre-Construction Homes in ${PROJECT.city}`,
    description: `${PROJECT.name} is a pre-construction master-planned community by ${PROJECT.builder} in ${PROJECT.city}, ${PROJECT.province}, Canada. Home types include freehold village townhomes, rear lane townhomes, and detached homes from ${PROJECT.sizes.min.toLocaleString()} to ${PROJECT.sizes.max.toLocaleString()} ${PROJECT.sizes.unit}. Starting from $${PROJECT.priceRange.low.toLocaleString()} CAD.`,
    url: SITE.url,
    image: [
      `${SITE.url}/images/1780773913252_hero_community_picture.webp`,
      `${SITE.url}/images/1780773913253_townhomes.jpg`,
      `${SITE.url}/images/1780773913251_2_car_garage_detached.webp`,
    ],
    brand: { '@type': 'Brand', name: PROJECT.builder },
    category: 'Pre-Construction New Homes',
    address: {
      '@type': 'PostalAddress',
      streetAddress: PROJECT.address.street,
      addressLocality: PROJECT.address.city,
      addressRegion: PROJECT.address.province,
      postalCode: PROJECT.address.postalCode,
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: PROJECT.geo.latitude,
      longitude: PROJECT.geo.longitude,
    },
    containedInPlace: { '@id': PLACE_ID },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'CAD',
      lowPrice: PROJECT.priceRange.low,
      highPrice: PROJECT.priceRange.high,
      offerCount: PROJECT.homeTypes.length,
      availability: 'https://schema.org/PreOrder',
      url: `${SITE.url}/prices/`,
    },
    numberOfRooms: { '@type': 'QuantitativeValue', minValue: 2, maxValue: 5 },
    floorSize: {
      '@type': 'QuantitativeValue',
      minValue: PROJECT.sizes.min,
      maxValue: PROJECT.sizes.max,
      unitCode: 'FTK',
    },
    developer: {
      '@type': 'Organization',
      name: PROJECT.builder,
      description: PROJECT.builderNote,
    },
    dateModified: '2026-06-07',
  };
}

export function globalSchemaGraph() {
  return toGraph([
    organizationSchema(),
    realEstateAgentSchema(),
    websiteSchema(),
    placeSchema(),
    listingSchema(),
  ]);
}

export function webPageSchema(seo: PageSEO, options?: { speakable?: boolean }) {
  const url = seo.path === '/' ? `${SITE.url}/` : `${SITE.url}${seo.path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: seo.title,
    headline: seo.h1,
    description: seo.description,
    inLanguage: 'en-CA',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': LISTING_ID },
    primaryImageOfPage: seo.ogImage
      ? { '@type': 'ImageObject', url: `${SITE.url}${seo.ogImage}` }
      : undefined,
    ...(options?.speakable
      ? {
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2', '.prose-lead', 'p'],
          },
        }
      : {}),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function homeTypesItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${PROJECT.name} Home Types`,
    description: 'Available pre-construction home types at Hawthorne East Village Milton.',
    numberOfItems: PROJECT.homeTypes.length,
    itemListElement: PROJECT.homeTypes.map((ht, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: ht.name,
      url: `${SITE.url}${ht.slug}`,
      item: {
        '@type': 'Product',
        name: `${PROJECT.name} — ${ht.name}`,
        description: ht.description,
        url: `${SITE.url}${ht.slug}`,
        brand: { '@type': 'Brand', name: PROJECT.builder },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'CAD',
          price: ht.priceFrom,
          priceValidUntil: '2026-12-31',
          availability: 'https://schema.org/PreOrder',
          url: `${SITE.url}/register/`,
        },
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'Bedrooms', value: ht.beds },
          { '@type': 'PropertyValue', name: 'Bathrooms', value: ht.baths },
          {
            '@type': 'PropertyValue',
            name: 'Size',
            value: `${ht.sizeMin.toLocaleString()} – ${ht.sizeMax.toLocaleString()} sq ft`,
          },
        ],
      },
    })),
  };
}

export function productOffersSchema() {
  return PROJECT.homeTypes.map((ht) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${PROJECT.name} — ${ht.name}`,
    description: ht.description,
    url: `${SITE.url}${ht.slug}`,
    sku: ht.id,
    category: 'Pre-Construction New Home',
    brand: { '@type': 'Brand', name: PROJECT.builder },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'CAD',
      lowPrice: ht.priceFrom,
      highPrice: ht.priceTo,
      availability: 'https://schema.org/PreOrder',
      url: `${SITE.url}/register/`,
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Bedrooms', value: ht.beds },
      { '@type': 'PropertyValue', name: 'Bathrooms', value: ht.baths },
      {
        '@type': 'PropertyValue',
        name: 'Square Footage',
        value: `${ht.sizeMin.toLocaleString()} – ${ht.sizeMax.toLocaleString()} sq ft`,
      },
    ],
  }));
}

export function schoolsItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Schools near ${PROJECT.name}`,
    itemListElement: PROJECT.schools.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s,
    })),
  };
}

type PageSchemaOptions = {
  seo: PageSEO;
  faqs?: FAQ[];
  breadcrumbs?: { name: string; path: string }[];
  includeHomeTypes?: boolean;
  includeProducts?: boolean;
  includeSchools?: boolean;
  speakable?: boolean;
};

/** Build a complete @graph for a page — WebPage + page-specific schemas. */
export function pageSchemaGraph(options: PageSchemaOptions) {
  const { seo, faqs, breadcrumbs, includeHomeTypes, includeProducts, includeSchools, speakable } =
    options;

  const nodes: object[] = [webPageSchema(seo, { speakable })];

  if (breadcrumbs?.length) {
    nodes.push(
      breadcrumbSchema([
        { name: 'Home', url: `${SITE.url}/` },
        ...breadcrumbs.map((b) => ({ name: b.name, url: `${SITE.url}${b.path}` })),
      ]),
    );
  }

  if (faqs?.length) nodes.push(faqSchema(faqs));
  if (includeHomeTypes) nodes.push(homeTypesItemListSchema());
  if (includeProducts) nodes.push(...productOffersSchema());
  if (includeSchools) nodes.push(schoolsItemListSchema());

  return toGraph(nodes);
}
