import { MapPin } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const mobileValetingStockport: ServicePageData = {
  slug: 'mobile-valeting',
  name: 'Mobile Valeting Stockport',
  seo: {
    title: 'Mobile Valeting Stockport | We Come to You | SRV Detailing',
    description: 'Mobile car valeting across Stockport. Fully equipped unit comes to your home or workplace. All SK postcodes. Locally based.',
    keywords: ['mobile valeting stockport', 'mobile car wash stockport', 'mobile car valet stockport', 'valeting at home stockport'],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-valeting/mobile-valeting',
  },
  icon: MapPin,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Valeting', href: '/stockport/car-valeting' },
    { label: 'Mobile Valeting', href: '/stockport/car-valeting/mobile-valeting' },
  ],
  heroTitle: 'Mobile Valeting in Stockport',
  heroDescription: 'Our fully equipped mobile unit comes to your home, office or any Stockport location. Self-contained — no water or electricity needed from you.',
  contentSections: [
    {
      type: 'text',
      heading: 'Your Local Mobile Valeting Service',
      body: 'Based in Dukinfield, we are Stockport\'s locally based mobile valeting service. Our custom-equipped van carries its own water supply, power generator and every tool needed for any valeting service. We work on your driveway, in your office car park, or wherever suits you across all SK postcodes.',
    },
    {
      type: 'list',
      heading: 'Why Choose Mobile Valeting?',
      items: [
        'No need to drive anywhere or wait around',
        'Your car is cleaned in familiar surroundings',
        'Self-contained — we don\'t need your water or electricity',
        'Available 7 days a week across all Stockport postcodes',
        'Same professional results as a fixed studio',
      ],
    },
  ],
  faqs: [
    { question: 'Do you need anything from me?', answer: 'Just access to your vehicle and ideally a driveway or parking space. We bring everything else.' },
    { question: 'What if it rains?', answer: 'Light rain doesn\'t stop us. Heavy rain may mean rescheduling the exterior work — we will always communicate proactively.' },
  ],
  relatedLinks: [
    { label: 'Full Valet', href: '/stockport/car-valeting/full-valet' },
    { label: 'Mini Valet', href: '/stockport/car-valeting/mini-valet' },
    { label: 'Stockport Car Valeting', href: '/stockport/car-valeting' },
    { label: 'Stockport Areas', href: '/stockport/areas' },
  ],
  schemaPrice: '50',
};
