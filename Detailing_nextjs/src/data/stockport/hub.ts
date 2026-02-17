import { Car, Sparkles } from 'lucide-react';
import type { LocationHubData } from '@/data/types';

export const stockportHub: LocationHubData = {
  slug: 'stockport',
  name: 'Stockport',
  seo: {
    title: 'Car Detailing & Valeting Stockport | Mobile Service | SRV Detailing',
    description:
      'Professional mobile car detailing and valeting in Stockport. Ceramic coating, paint correction, full valets and more. Based locally with 22+ years experience.',
    keywords: [
      'car detailing stockport',
      'car valeting stockport',
      'mobile car detailing stockport',
      'ceramic coating stockport',
      'car cleaning stockport',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
  ],
  heroTitle: 'Professional Car Detailing & Valeting in Stockport',
  heroDescription:
    'SRV Detailing is based in Stockport — your local mobile car care specialist. From ceramic coatings and paint correction to full valets and interior deep cleans, we deliver 22+ years of expertise to your door.',
  introText:
    'As a Stockport-based business, we know the local area inside out. Our mobile unit covers every SK postcode including Bramhall, Cheadle, Marple, Hazel Grove, Heaton Moor, Edgeley, Reddish and the town centre. We bring professional car detailing and valeting directly to your home or workplace — no need to drive anywhere.',
  pillars: [
    {
      name: 'Car Detailing',
      description: 'Restoration-grade paint correction, ceramic coatings, and deep protection for enthusiasts and luxury vehicles.',
      href: '/stockport/car-detailing',
      icon: Sparkles,
    },
    {
      name: 'Car Valeting',
      description: 'Professional maintenance cleaning — full valets, mini valets, interior and exterior packages.',
      href: '/stockport/car-valeting',
      icon: Car,
    },
  ],
  areas: [
    { name: 'Bramhall', slug: 'bramhall', href: '/stockport/areas/bramhall' },
    { name: 'Cheadle', slug: 'cheadle', href: '/stockport/areas/cheadle' },
    { name: 'Marple', slug: 'marple', href: '/stockport/areas/marple' },
    { name: 'Hazel Grove', slug: 'hazel-grove', href: '/stockport/areas/hazel-grove' },
    { name: 'Heaton Moor', slug: 'heaton-moor', href: '/stockport/areas/heaton-moor' },
    { name: 'Edgeley', slug: 'edgeley', href: '/stockport/areas/edgeley' },
    { name: 'Reddish', slug: 'reddish', href: '/stockport/areas/reddish' },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'Your Local Stockport Car Care Specialist',
      body: 'SRV Detailing is based right here in Stockport — Globe House, Globe Lane, Dukinfield, SK16 4RG. That means short travel times, flexible scheduling and genuine local knowledge. We understand Stockport\'s tree-lined residential streets, the specific challenges of SK postcode parking, and what local car owners need to keep their vehicles in top condition.',
    },
    {
      type: 'list',
      heading: 'Why Choose SRV Detailing in Stockport',
      items: [
        'Locally based in Stockport — minimal travel time to your location',
        '22+ years of professional experience',
        'Fully equipped mobile unit with own water and power',
        'Covering all SK postcodes — Bramhall, Cheadle, Marple, Hazel Grove and more',
        'Available 7 days a week',
        'Fully insured with specialist vehicle-in-care coverage',
      ],
    },
  ],
  faqs: [
    {
      question: 'Where are you based in Stockport?',
      answer: 'We\'re based at Globe House, Globe Lane, Dukinfield, SK16 4RG. We\'re a mobile service, so we come to you — but being Stockport-based means we\'re always close by.',
    },
    {
      question: 'Which Stockport areas do you cover?',
      answer: 'We cover all of Stockport including Bramhall, Cheadle, Cheadle Hulme, Marple, Hazel Grove, Heaton Moor, Heaton Chapel, Edgeley, Reddish, Bredbury, Woodley and the town centre.',
    },
    {
      question: 'Do you also cover Manchester?',
      answer: 'Yes. We serve all of Greater Manchester as well as Stockport. Visit our Manchester page for details on services across the wider Manchester area.',
    },
    {
      question: 'How do I book in Stockport?',
      answer: 'Call us on 07375 759686 or use our online contact form. Being local, we can often accommodate same-day or next-day bookings for Stockport customers.',
    },
  ],
};
