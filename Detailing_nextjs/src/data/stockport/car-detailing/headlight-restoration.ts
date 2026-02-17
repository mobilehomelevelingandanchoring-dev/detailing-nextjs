import { Sun } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const headlightRestorationStockport: ServicePageData = {
  slug: 'headlight-restoration',
  name: 'Headlight Restoration Stockport',
  seo: {
    title: 'Headlight Restoration Stockport | Foggy Headlight Repair | SRV Detailing',
    description: 'Professional headlight restoration in Stockport. Restore clarity to oxidised, yellowed headlights. Improve safety and MOT compliance.',
    keywords: ['headlight restoration stockport', 'foggy headlight repair stockport', 'headlight polishing stockport'],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-detailing/headlight-restoration',
  },
  icon: Sun,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Headlight Restoration', href: '/stockport/car-detailing/headlight-restoration' },
  ],
  heroTitle: 'Headlight Restoration in Stockport',
  heroDescription: 'Restore clarity to oxidised, yellowed headlights. Improve safety, appearance and MOT compliance with professional headlight polishing.',
  contentSections: [
    {
      type: 'text',
      heading: 'Headlight Restoration Service',
      body: 'Oxidised headlights reduce light output by up to 80% — a serious safety hazard and common MOT advisory. Our restoration process wet sands through progressive grits, machine polishes to full clarity, and applies a UV sealant to prevent future oxidation. Results are immediate and dramatic.',
    },
  ],
  faqs: [
    { question: 'How much does headlight restoration cost?', answer: 'From £60 per pair. Price depends on severity of oxidation.' },
    { question: 'How long do results last?', answer: 'With UV sealant, 2–3 years. With ceramic coating protection, even longer.' },
  ],
  relatedLinks: [
    { label: 'Stockport Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Paint Correction', href: '/stockport/car-detailing/paint-correction' },
    { label: 'Detailing Prices', href: '/stockport/car-detailing/prices' },
  ],
  schemaPrice: '60',
};
