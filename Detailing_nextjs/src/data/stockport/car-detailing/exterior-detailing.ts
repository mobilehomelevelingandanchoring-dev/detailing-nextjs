import { Paintbrush } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const exteriorDetailingStockport: ServicePageData = {
  slug: 'exterior-detailing',
  name: 'Exterior Detailing Stockport',
  seo: {
    title: 'Exterior Detailing Stockport | Full Exterior Restoration | SRV Detailing',
    description:
      'Professional exterior detailing in Stockport. Decontamination, clay bar, machine polish and protection. Restore your paintwork to showroom condition. All SK postcodes.',
    keywords: [
      'exterior detailing stockport',
      'car exterior restoration stockport',
      'paint decontamination stockport',
      'machine polish stockport',
      'exterior car detailing stockport',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-detailing/exterior-detailing',
  },
  icon: Paintbrush,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Exterior Detailing', href: '/stockport/car-detailing/exterior-detailing' },
  ],
  heroTitle: 'Exterior Detailing in Stockport',
  heroDescription:
    'Complete exterior restoration at your Stockport door — decontamination, clay bar, machine polishing and protective sealant. Your paintwork restored to its absolute best.',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Exterior Detailing?',
      body: 'Exterior detailing is a comprehensive process that goes far beyond washing. It includes full decontamination to remove bonded iron particles and tar, clay bar treatment to smooth the surface, machine polishing to correct paint defects, and application of a protective sealant, wax or ceramic coating. The result is paintwork that looks and feels like new.',
    },
    {
      type: 'list',
      heading: 'What\'s Included',
      items: [
        'Full snow foam pre-wash and two-bucket contact wash',
        'Iron fallout removal and tar spot dissolution',
        'Clay bar decontamination to remove bonded contaminants',
        'Single or multi-stage machine polish depending on paint condition',
        'Sealant, wax or ceramic coating application for protection',
        'Wheel cleaning, tyre dressing and trim restoration',
        'Glass polishing and rain repellent application',
      ],
    },
    {
      type: 'text',
      heading: 'Stockport-Specific Paint Hazards',
      body: 'Vehicles in Stockport face a combination of urban and semi-rural paint hazards. Tree sap from the leafy streets of Bramhall and Cheadle, iron fallout from the A6 and M60 corridors, and road salt from winter gritting all bond to paintwork and cause progressive damage. Our exterior detailing process removes these contaminants safely and applies long-term protection tailored to local conditions.',
    },
  ],
  faqs: [
    {
      question: 'How long does exterior detailing take in Stockport?',
      answer: 'Typically 4–8 hours depending on vehicle size and paint condition. Multi-stage paint correction adds more time. Being locally based, we can split larger jobs across two visits if needed.',
    },
    {
      question: 'What is the difference between exterior detailing and an exterior valet?',
      answer: 'Exterior valeting is professional cleaning — wash, dry, wax. Exterior detailing adds decontamination, clay bar, machine polishing and longer-lasting protection. Detailing corrects defects; valeting maintains cleanliness.',
    },
  ],
  relatedLinks: [
    { label: 'Paint Correction Stockport', href: '/stockport/car-detailing/paint-correction' },
    { label: 'Ceramic Coating Stockport', href: '/stockport/car-detailing/ceramic-coating' },
    { label: 'Exterior Valeting', href: '/stockport/car-valeting/exterior-valeting' },
    { label: 'Stockport Car Detailing', href: '/stockport/car-detailing' },
  ],
  schemaPrice: '200',
};
