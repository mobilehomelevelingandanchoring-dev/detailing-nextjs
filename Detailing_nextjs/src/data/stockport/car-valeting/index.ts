import { Star, Droplets, MapPin } from 'lucide-react';
import type { PillarPageData } from '@/data/types';

export const stockportCarValetingPillar: PillarPageData = {
  slug: 'car-valeting',
  name: 'Car Valeting in Stockport',
  seo: {
    title: 'Car Valeting Stockport | Mobile Valeting Service | SRV Detailing',
    description:
      'Professional mobile car valeting in Stockport. Full valets, mini valets, interior and exterior packages. Locally based, 22+ years experience.',
    keywords: ['car valeting stockport', 'mobile car valeting stockport', 'full valet stockport', 'car wash stockport'],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-valeting',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Valeting', href: '/stockport/car-valeting' },
  ],
  heroTitle: 'Professional Car Valeting in Stockport',
  heroDescription:
    'Your local Stockport valeting specialist. Full valets, mini valets and mobile cleaning — delivered to your door across all SK postcodes. 22+ years experience.',
  introText:
    'As Stockport\'s local mobile valeting specialist, we provide professional car cleaning across all SK postcodes — Bramhall, Cheadle, Marple, Hazel Grove, Heaton Moor and beyond. Our safe hand-wash techniques and premium products deliver results miles above any car wash, and we bring everything to your location.',
  services: [
    {
      slug: 'full-valet',
      name: 'Full Valet',
      description: 'Complete interior and exterior valet. 3–4 hours of meticulous care.',
      icon: Star,
      href: '/stockport/car-valeting/full-valet',
    },
    {
      slug: 'mini-valet',
      name: 'Mini Valet',
      description: 'Quick maintenance clean in 60–90 minutes. Perfect between full valets.',
      icon: Droplets,
      href: '/stockport/car-valeting/mini-valet',
    },
    {
      slug: 'mobile-valeting',
      name: 'Mobile Valeting',
      description: 'We come to your home, office or workplace anywhere in Stockport.',
      icon: MapPin,
      href: '/stockport/car-valeting/mobile-valeting',
    },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Car Valeting?',
      body: 'Car valeting is professional cleaning and maintenance for your vehicle. It covers thorough hand washing, interior vacuuming, upholstery treatment, dashboard detailing and protective wax application. As your local Stockport valeter, we know the area, we\'re always nearby, and we can often fit you in at short notice.',
    },
    {
      type: 'list',
      heading: 'Why Choose Us for Valeting in Stockport',
      items: [
        'Locally based — minimal travel time to your location',
        'Safe hand-wash techniques that won\'t damage your paint',
        'Premium pH-neutral products and professional equipment',
        'Available 7 days a week with flexible scheduling',
        'Regular customer discounts and standing appointments',
        'Fully insured with specialist vehicle coverage',
      ],
    },
  ],
  faqs: [
    {
      question: 'How much does a car valet cost in Stockport?',
      answer: 'Mini valets start from £50, full valets from £120. Prices vary by vehicle size. Contact us for an exact quote.',
    },
    {
      question: 'Do you come to my home in Stockport?',
      answer: 'Yes. We\'re Stockport-based so we\'re always close by. We come to your driveway, workplace or any convenient location across all SK postcodes.',
    },
    {
      question: 'Can I book a regular valeting appointment?',
      answer: 'Absolutely. Many Stockport customers book fortnightly or monthly standing appointments. Being local, we can offer priority scheduling and flexible rearrangements.',
    },
  ],
  relatedLinks: [
    { label: 'Car Detailing Stockport', href: '/stockport/car-detailing', description: 'Restoration-grade services' },
    { label: 'Manchester Car Valeting', href: '/manchester/car-valeting', description: 'Services across Manchester' },
    { label: 'Valeting Prices', href: '/pricing/car-valeting', description: 'View pricing' },
    { label: 'What Is Car Valeting?', href: '/guides/what-is-car-valeting', description: 'Complete guide' },
  ],
};
