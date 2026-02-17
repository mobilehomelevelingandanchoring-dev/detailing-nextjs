import { Sparkles } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const paintCorrectionStockport: ServicePageData = {
  slug: 'paint-correction',
  name: 'Paint Correction Stockport',
  seo: {
    title: 'Paint Correction Stockport | Swirl Mark Removal | SRV Detailing',
    description: 'Professional paint correction in Stockport. Machine polishing to remove swirl marks, scratches and oxidation. Locally based, 22+ years experience.',
    keywords: ['paint correction stockport', 'swirl mark removal stockport', 'machine polishing stockport', 'car scratch removal stockport'],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-detailing/paint-correction',
  },
  icon: Sparkles,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Paint Correction', href: '/stockport/car-detailing/paint-correction' },
  ],
  heroTitle: 'Paint Correction in Stockport',
  heroDescription: 'Multi-stage machine polishing to remove swirl marks, scratches and oxidation. Restore your paintwork to showroom condition.',
  contentSections: [
    {
      type: 'text',
      heading: 'Professional Paint Correction in Stockport',
      body: 'Paint correction uses professional machine polishers and compounds to remove surface defects from your clear coat. Swirl marks from car washes, light scratches from daily use, and oxidation from UV and weather are all corrected through controlled polishing. The result is perfectly flat, defect-free paintwork with maximum gloss and depth.',
    },
    {
      type: 'process',
      heading: 'Our Process',
      items: [
        'Full decontamination wash and clay bar treatment',
        'Paint depth readings to ensure safe polishing margins',
        'Cutting stage with medium compound to level defects',
        'Finishing stage with fine polish for maximum clarity',
        'IPA wipe-down to reveal true correction results',
        'Apply protection — sealant, wax or ceramic coating',
      ],
    },
  ],
  faqs: [
    { question: 'How much does paint correction cost in Stockport?', answer: 'Single-stage correction starts from £250, multi-stage from £400. Final price depends on vehicle size and paint condition.' },
    { question: 'Can you correct my car at my home?', answer: 'Yes. Our mobile unit has professional lighting and all the equipment needed for paint correction on your driveway.' },
  ],
  relatedLinks: [
    { label: 'Ceramic Coating Stockport', href: '/stockport/car-detailing/ceramic-coating' },
    { label: 'Stockport Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Detailing Prices', href: '/stockport/car-detailing/prices' },
    { label: 'Headlight Restoration', href: '/stockport/car-detailing/headlight-restoration' },
  ],
  schemaPrice: '250',
};
