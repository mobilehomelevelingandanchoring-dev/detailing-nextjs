import { Wrench } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const engineBayDetailingStockport: ServicePageData = {
  slug: 'engine-bay-detailing',
  name: 'Engine Bay Detailing Stockport',
  seo: {
    title: 'Engine Bay Detailing Stockport | Professional Engine Clean | SRV Detailing',
    description:
      'Professional engine bay detailing in Stockport. Safe, thorough engine cleaning that restores your engine bay to showroom condition. Locally based, mobile service.',
    keywords: [
      'engine bay detailing stockport',
      'engine clean stockport',
      'engine bay cleaning stockport',
      'mobile engine clean stockport',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-detailing/engine-bay-detailing',
  },
  icon: Wrench,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Engine Bay Detailing', href: '/stockport/car-detailing/engine-bay-detailing' },
  ],
  heroTitle: 'Engine Bay Detailing in Stockport',
  heroDescription:
    'Professional engine bay cleaning and detailing across all Stockport postcodes. We safely degrease, clean and dress your engine bay to showroom condition at your door.',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Engine Bay Detailing?',
      body: 'Engine bay detailing is the professional cleaning and restoration of your vehicle\'s engine compartment. Over time, oil mist, road grime, salt and dust coat every surface under the bonnet. Stockport vehicles face winter road salting across the A6, A34 and town centre roads — this salt migrates into engine bays and accelerates corrosion. Our process safely removes this buildup without risking damage to electrical components, then dresses plastics and hoses to restore a factory-fresh appearance.',
    },
    {
      type: 'process',
      heading: 'Our Engine Bay Cleaning Process',
      items: [
        'Cover sensitive electrical components, air intake and exposed filters',
        'Apply specialist engine degreaser and agitate with detailing brushes',
        'Low-pressure rinse to safely remove all degreaser and loosened grime',
        'Dry the engine bay thoroughly with compressed air and microfibre towels',
        'Dress all plastics, hoses and covers with UV-protective dressing',
      ],
    },
  ],
  faqs: [
    {
      question: 'Is engine bay cleaning safe for my car?',
      answer: 'Yes. We cover all sensitive electrical components and use low-pressure rinsing — never a pressure washer directly on electrics. We have cleaned hundreds of engine bays without issue.',
    },
    {
      question: 'How long does engine bay detailing take?',
      answer: 'Typically 45–90 minutes depending on the level of contamination and engine complexity.',
    },
    {
      question: 'Why should I clean my engine bay?',
      answer: 'A clean engine bay makes it easier to spot leaks, improves resale value, and prevents corrosion from salt and grime buildup. It also looks fantastic for pre-sale inspections and car enthusiasts.',
    },
  ],
  relatedLinks: [
    { label: 'Exterior Detailing Stockport', href: '/stockport/car-detailing/exterior-detailing' },
    { label: 'New Car Protection', href: '/stockport/car-detailing/new-car-protection' },
    { label: 'Stockport Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Detailing Prices', href: '/stockport/car-detailing/prices' },
  ],
  schemaPrice: '80',
};
