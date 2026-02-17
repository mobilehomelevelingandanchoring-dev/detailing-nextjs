import { Star } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const fullValetStockport: ServicePageData = {
  slug: 'full-valet',
  name: 'Full Valet Stockport',
  seo: {
    title: 'Full Valet Stockport | Complete Car Valeting | SRV Detailing',
    description: 'Professional full valet in Stockport. Complete interior and exterior cleaning, 3–4 hours. Locally based, 22+ years experience.',
    keywords: ['full valet stockport', 'car valeting stockport', 'full car valet stockport', 'complete car clean stockport'],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-valeting/full-valet',
  },
  icon: Star,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Valeting', href: '/stockport/car-valeting' },
    { label: 'Full Valet', href: '/stockport/car-valeting/full-valet' },
  ],
  heroTitle: 'Full Valet in Stockport',
  heroDescription: 'Our most comprehensive valeting package. 3–4 hours of meticulous interior and exterior cleaning delivered to your Stockport door.',
  contentSections: [
    {
      type: 'list',
      heading: 'Full Valet Includes',
      items: [
        'Exterior hand wash with two-bucket method',
        'Wheel and tyre cleaning with dressing',
        'Full interior vacuum — seats, carpets, boot',
        'Dashboard, console and trim cleaning',
        'Upholstery treatment (fabric shampoo or leather wipe)',
        'All glass cleaned inside and out',
        'Wax or sealant protection',
        'Air freshener',
      ],
    },
  ],
  faqs: [
    { question: 'How long does a full valet take?', answer: '3–4 hours for a standard vehicle. Larger or heavily soiled vehicles may take longer.' },
    { question: 'How often should I get a full valet?', answer: 'Every 2–3 months is ideal for maintaining your car\'s appearance and value.' },
  ],
  relatedLinks: [
    { label: 'Mini Valet', href: '/stockport/car-valeting/mini-valet' },
    { label: 'Interior Valeting', href: '/stockport/car-valeting/interior-valeting' },
    { label: 'Stockport Car Valeting', href: '/stockport/car-valeting' },
    { label: 'Valeting Prices', href: '/stockport/car-valeting/prices' },
  ],
  schemaPrice: '120',
};
