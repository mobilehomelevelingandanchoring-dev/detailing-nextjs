import { CircleDot } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const swirlMarkRemovalStockport: ServicePageData = {
  slug: 'swirl-mark-removal',
  name: 'Swirl Mark Removal Stockport',
  seo: {
    title: 'Swirl Mark Removal Stockport | Machine Polishing | SRV Detailing',
    description:
      'Professional swirl mark removal in Stockport. Machine polishing to eliminate wash swirls, fine scratches and haze. Restore perfect clarity. Locally based, all SK postcodes.',
    keywords: [
      'swirl mark removal stockport',
      'swirl marks car stockport',
      'machine polishing stockport',
      'car scratch removal stockport',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-detailing/swirl-mark-removal',
  },
  icon: CircleDot,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Swirl Mark Removal', href: '/stockport/car-detailing/swirl-mark-removal' },
  ],
  heroTitle: 'Swirl Mark Removal in Stockport',
  heroDescription:
    'Eliminate those spider-web swirl marks that ruin your paintwork in direct sunlight. Professional machine polishing at your Stockport door for a flawless, swirl-free finish.',
  contentSections: [
    {
      type: 'text',
      heading: 'What Causes Swirl Marks?',
      body: 'Swirl marks are fine circular scratches in your clear coat caused by improper washing techniques. Automated car washes with dirty brushes, using a single bucket, wiping a dirty car with a dry cloth, and even some professional valets using worn equipment all create swirls. They are most visible on dark-coloured vehicles in direct sunlight, appearing as a web of fine scratches across the whole panel.',
    },
    {
      type: 'process',
      heading: 'Our Swirl Removal Process',
      items: [
        'Full decontamination wash to create a clean working surface',
        'Paint depth gauge reading to ensure safe polishing thickness',
        'Cutting stage — machine polish with medium-cut compound to level scratches',
        'Finishing stage — fine polish to refine the surface and maximise gloss',
        'IPA wipe-down to reveal true results without polishing oils',
        'Apply protection (sealant, wax or ceramic coating) to seal the corrected finish',
      ],
    },
  ],
  faqs: [
    {
      question: 'Can all swirl marks be removed?',
      answer: 'The vast majority of swirl marks can be fully removed. Only swirls that have penetrated through the clear coat into the base paint may be impossible to correct without repainting.',
    },
    {
      question: 'Will polishing thin my clear coat?',
      answer: 'Machine polishing removes a microscopic layer of clear coat. We use a paint depth gauge to ensure there is sufficient thickness for safe correction. Modern clear coats are typically 40–60 microns — we remove 1–3 microns per correction.',
    },
    {
      question: 'How do I prevent swirl marks coming back?',
      answer: 'Use the two-bucket wash method, quality microfibre towels, and avoid automated car washes. A ceramic coating also provides a sacrificial layer that helps prevent future swirling.',
    },
  ],
  relatedLinks: [
    { label: 'Paint Correction Stockport', href: '/stockport/car-detailing/paint-correction' },
    { label: 'Ceramic Coating Stockport', href: '/stockport/car-detailing/ceramic-coating' },
    { label: 'Exterior Detailing Stockport', href: '/stockport/car-detailing/exterior-detailing' },
    { label: 'Stockport Car Detailing', href: '/stockport/car-detailing' },
  ],
  schemaPrice: '150',
};
