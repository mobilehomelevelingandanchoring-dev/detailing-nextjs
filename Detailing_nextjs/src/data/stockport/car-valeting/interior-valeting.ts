import { CheckCircle } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const interiorValetingStockport: ServicePageData = {
  slug: 'interior-valeting',
  name: 'Interior Valeting Stockport',
  seo: {
    title: 'Interior Valeting Stockport | Deep Interior Clean | SRV Detailing',
    description: 'Professional interior valeting in Stockport. Deep vacuum, upholstery cleaning, dashboard detailing. Locally based, mobile service.',
    keywords: ['interior valeting stockport', 'car interior cleaning stockport', 'interior car clean stockport'],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-valeting/interior-valeting',
  },
  icon: CheckCircle,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Valeting', href: '/stockport/car-valeting' },
    { label: 'Interior Valeting', href: '/stockport/car-valeting/interior-valeting' },
  ],
  heroTitle: 'Interior Valeting in Stockport',
  heroDescription: 'Deep interior cleaning for your vehicle\'s cabin. Vacuuming, upholstery treatment, dashboard detailing and odour removal.',
  contentSections: [
    {
      type: 'list',
      heading: 'What\'s Included',
      items: [
        'Full vacuum — seats, carpets, mats, boot',
        'Upholstery shampoo or leather clean',
        'Dashboard and trim cleaning',
        'Air vent detailing',
        'Glass cleaned inside',
        'Air freshener',
      ],
    },
  ],
  faqs: [
    { question: 'How long does interior valeting take?', answer: '1.5–2.5 hours depending on vehicle size and condition.' },
    { question: 'Can you remove stains?', answer: 'Yes. We use specialist stain removers and hot water extraction for fabric upholstery.' },
  ],
  relatedLinks: [
    { label: 'Full Valet', href: '/stockport/car-valeting/full-valet' },
    { label: 'Exterior Valeting', href: '/stockport/car-valeting/exterior-valeting' },
    { label: 'Stockport Car Valeting', href: '/stockport/car-valeting' },
  ],
  schemaPrice: '80',
};
