import { Shield } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const ceramicCoatingStockport: ServicePageData = {
  slug: 'ceramic-coating',
  name: 'Ceramic Coating Stockport',
  seo: {
    title: 'Ceramic Coating Stockport | Paint Protection | SRV Detailing',
    description: 'Professional ceramic coating in Stockport. 2 to 7+ year paint protection. Locally based with 22+ years experience. All SK postcodes.',
    keywords: ['ceramic coating stockport', 'car ceramic coating stockport', 'ceramic paint protection stockport', 'ceramic coating near me stockport'],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-detailing/ceramic-coating',
  },
  icon: Shield,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Ceramic Coating', href: '/stockport/car-detailing/ceramic-coating' },
  ],
  heroTitle: 'Ceramic Coating in Stockport',
  heroDescription: 'Long-lasting paint protection from your local Stockport detailer. 2 to 7+ year ceramic coatings applied with professional equipment at your home.',
  contentSections: [
    {
      type: 'text',
      heading: 'Your Local Ceramic Coating Specialist',
      body: 'Based in Dukinfield, we are Stockport\'s local ceramic coating specialist. Being locally based means faster response times, no travel surcharges, and deep knowledge of the environmental challenges Stockport vehicles face — from road salt on the A6 to tree sap in Bramhall\'s leafy streets.',
    },
    {
      type: 'list',
      heading: 'Ceramic Coating Packages',
      items: [
        'Entry-Level (£300–£400): 2-year protection with good hydrophobic properties',
        'Mid-Range (£500–£700): 3–4 year protection with excellent chemical resistance',
        'Premium (£800–£1,200+): 5–7+ year protection with maximum hardness and gloss',
        'All packages include paint correction and full decontamination',
      ],
    },
  ],
  faqs: [
    { question: 'Are you based in Stockport?', answer: 'Yes. We are based in Dukinfield and cover all SK postcodes. Stockport customers benefit from the shortest travel times.' },
    { question: 'How long does ceramic coating take?', answer: 'A full ceramic coating including preparation and paint correction takes 1–2 days depending on paint condition.' },
    { question: 'Do you ceramic coat new cars?', answer: 'Yes — new car protection with ceramic coating is one of our most popular services. See our new car protection page for details.' },
  ],
  relatedLinks: [
    { label: 'Paint Correction Stockport', href: '/stockport/car-detailing/paint-correction' },
    { label: 'New Car Protection', href: '/stockport/car-detailing/new-car-protection' },
    { label: 'Stockport Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Detailing Prices', href: '/stockport/car-detailing/prices' },
  ],
  schemaPrice: '300',
};
