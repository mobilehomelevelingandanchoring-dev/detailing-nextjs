import { Car } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const exteriorValetingStockport: ServicePageData = {
  slug: 'exterior-valeting',
  name: 'Exterior Valeting Stockport',
  seo: {
    title: 'Exterior Valeting Stockport | Professional Hand Wash | SRV Detailing',
    description: 'Professional exterior valeting in Stockport. Safe hand wash, wheel cleaning, wax protection. Scratch-free methods, mobile service.',
    keywords: ['exterior valeting stockport', 'hand car wash stockport', 'exterior car clean stockport'],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-valeting/exterior-valeting',
  },
  icon: Car,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Valeting', href: '/stockport/car-valeting' },
    { label: 'Exterior Valeting', href: '/stockport/car-valeting/exterior-valeting' },
  ],
  heroTitle: 'Exterior Valeting in Stockport',
  heroDescription: 'Safe, scratch-free exterior cleaning. Hand wash, wheel care, tyre dressing and wax protection — the way your car should be washed.',
  contentSections: [
    {
      type: 'list',
      heading: 'What\'s Included',
      items: [
        'Snow foam pre-wash',
        'Two-bucket hand wash with pH-neutral shampoo',
        'Wheel and tyre cleaning and dressing',
        'Hand drying with plush microfibre towels',
        'Spray wax or sealant protection',
        'Glass and mirror cleaning',
      ],
    },
  ],
  faqs: [
    { question: 'How long does an exterior valet take?', answer: '1–1.5 hours for a standard vehicle.' },
    { question: 'Is hand washing safer than a car wash?', answer: 'Yes. Our two-bucket method with clean mitts avoids the scratching caused by dirty car wash brushes.' },
  ],
  relatedLinks: [
    { label: 'Full Valet', href: '/stockport/car-valeting/full-valet' },
    { label: 'Interior Valeting', href: '/stockport/car-valeting/interior-valeting' },
    { label: 'Stockport Car Valeting', href: '/stockport/car-valeting' },
  ],
  schemaPrice: '65',
};
