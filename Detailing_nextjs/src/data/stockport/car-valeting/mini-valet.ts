import { Droplets } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const miniValetStockport: ServicePageData = {
  slug: 'mini-valet',
  name: 'Mini Valet Stockport',
  seo: {
    title: 'Mini Valet Stockport | Quick Car Clean | SRV Detailing',
    description: 'Quick mini valet in Stockport. 60–90 minute maintenance clean. Exterior wash, interior vacuum and dash wipe. Mobile service.',
    keywords: ['mini valet stockport', 'quick car clean stockport', 'car wash stockport', 'mobile mini valet'],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-valeting/mini-valet',
  },
  icon: Droplets,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Valeting', href: '/stockport/car-valeting' },
    { label: 'Mini Valet', href: '/stockport/car-valeting/mini-valet' },
  ],
  heroTitle: 'Mini Valet in Stockport',
  heroDescription: 'A quick 60–90 minute maintenance clean to keep your car fresh between full valets. Perfect for busy Stockport families.',
  contentSections: [
    {
      type: 'list',
      heading: 'Mini Valet Includes',
      items: [
        'Exterior hand wash and dry',
        'Wheel and tyre clean',
        'Interior vacuum',
        'Dashboard and console wipe',
        'Glass cleaned inside and out',
      ],
    },
  ],
  faqs: [
    { question: 'How long does a mini valet take?', answer: '60–90 minutes for a standard vehicle.' },
    { question: 'How often should I get a mini valet?', answer: 'Monthly or fortnightly for regular maintenance. It keeps your car presentable between full valets.' },
  ],
  relatedLinks: [
    { label: 'Full Valet', href: '/stockport/car-valeting/full-valet' },
    { label: 'Stockport Car Valeting', href: '/stockport/car-valeting' },
    { label: 'Valeting Prices', href: '/stockport/car-valeting/prices' },
  ],
  schemaPrice: '50',
};
