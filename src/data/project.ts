export const SITE = {
  name: 'Hawthorne East Village Milton',
  domain: 'hawthorneeastvillagemilton.com',
  url: 'https://hawthorneeastvillagemilton.com',
  brand: 'Sold by Fahad',
  agent: 'Fahad Javed Real Estate',
} as const;

export const PROJECT = {
  name: 'Hawthorne East Village',
  builder: 'Mattamy Homes',
  builderNote:
    'Mattamy Homes has been building communities across North America since 1978 and is one of the largest privately owned homebuilders on the continent.',
  city: 'Milton',
  region: 'Halton Region',
  province: 'Ontario',
  country: 'Canada',
  status: 'Pre-construction (released in phases)',
  occupancy: 'TBD by phase — confirm with VIP registration',
  address: {
    street: '433 Steeles Ave E',
    area: 'Louis St. Laurent Ave / Fourth Line / Steeles Ave E area',
    city: 'Milton',
    province: 'ON',
    postalCode: 'L9T',
  },
  geo: {
    latitude: 43.5183,
    longitude: -79.8774,
  },
  sizes: { min: 1348, max: 2777, unit: 'sq ft' },
  priceRange: { low: 719990, high: 1376990, currency: 'CAD' },
  lastUpdated: 'June 2026',
  homeTypes: [
    {
      id: 'village-townhomes',
      name: 'Village Townhomes',
      slug: '/townhomes/',
      description: 'Freehold village-style townhomes with front-facing street appeal.',
      beds: '2–4',
      baths: '2–3',
      sizeMin: 1348,
      sizeMax: 1800,
      priceFrom: 719990,
      priceTo: 739990,
    },
    {
      id: 'rear-lane-townhomes',
      name: 'Rear Lane Townhomes',
      slug: '/townhomes/',
      description: 'Common-element rear lane townhomes with private rear garage access.',
      beds: '3–4',
      baths: '2–3',
      sizeMin: 1500,
      sizeMax: 2000,
      priceFrom: 749990,
      priceTo: 849990,
    },
    {
      id: 'detached-single',
      name: 'Single-Car Garage Detached',
      slug: '/detached/',
      description: 'Detached single-family homes with single-car garage configurations.',
      beds: '3–5',
      baths: '2–4',
      sizeMin: 1800,
      sizeMax: 2400,
      priceFrom: 1022990,
      priceTo: 1200000,
    },
    {
      id: 'detached-double',
      name: 'Double-Car Garage Detached',
      slug: '/detached/',
      description: 'Larger detached homes with double-car garage and premium finishes.',
      beds: '4–5',
      baths: '3–5',
      sizeMin: 2200,
      sizeMax: 2777,
      priceFrom: 1150000,
      priceTo: 1376990,
    },
  ],
  deposit: {
    summary:
      'Typical Mattamy pre-construction deposit structures are paid in installments over the construction period. Exact amounts and due dates vary by phase and must be confirmed at VIP registration.',
    typical: [
      'Initial deposit on signing (amount varies by phase)',
      'Additional installments during construction',
      'Balance on closing',
    ],
  },
  incentives:
    'Limited VIP incentives may be available for early registrants. Incentives change frequently and are subject to builder approval — register for current details.',
  amenities: [
    'Highway 401 & 407 access',
    'Milton GO Station',
    'Milton District Hospital',
    'Parks & conservation (Rattlesnake Point, Hilton Falls)',
    'Planned elementary school',
    'Outlet shopping & retail',
  ],
  schools: [
    'Halton District School Board — highly rated elementary and secondary schools',
    'Catholic District School Board options',
    'Milton Education Village — Wilfrid Laurier University & Conestoga College joint campus (planned)',
  ],
} as const;

export const CONTACT = {
  name: 'Fahad Javed',
  title: 'Sales Representative',
  brokerage: 'Century 21 Property Zone Realty Inc.',
  address: '600 Matheson Blvd W, Unit 5, Mississauga, ON',
  email: 'fahad@fahadsold.com',
  phone: '647-898-1739',
  phoneTel: '+16478981739',
  web: 'https://fahadsold.com',
  webLabel: 'fahadsold.com',
} as const;

export const DISCLAIMER = {
  marketed:
    'Marketed by Fahad Javed, Sales Representative, Century 21 Property Zone Realty Inc.',
  notOfficial:
    'This is not the official website of the builder/developer. We do not represent Mattamy Homes.',
  preliminary:
    'All renderings, pricing, sizes, and incentives are preliminary, for illustration only, and subject to change without notice. E&OE.',
} as const;

export function formatPrice(n: number): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    maximumFractionDigits: 0,
  }).format(n);
}
