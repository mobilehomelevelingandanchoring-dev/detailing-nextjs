import { Armchair } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const upholsteryCleaningStockport: ServicePageData = {
  slug: 'upholstery-cleaning',
  name: 'Upholstery Cleaning Stockport',
  seo: {
    title: 'Car Upholstery Cleaning Stockport | Seat & Carpet Cleaning | SRV Detailing',
    description:
      'Professional car upholstery cleaning in Stockport. Hot water extraction for fabric seats and carpets. Stain removal and deep sanitisation — mobile service to all SK postcodes.',
    keywords: [
      'upholstery cleaning car stockport',
      'car seat cleaning stockport',
      'carpet cleaning car stockport',
      'fabric seat stain removal stockport',
      'hot water extraction car stockport',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-valeting/upholstery-cleaning',
  },
  icon: Armchair,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Valeting', href: '/stockport/car-valeting' },
    { label: 'Upholstery Cleaning', href: '/stockport/car-valeting/upholstery-cleaning' },
  ],
  heroTitle: 'Car Upholstery Cleaning in Stockport',
  heroDescription:
    'Deep cleaning for fabric seats, carpets and mats — delivered to your Stockport driveway. Hot water extraction removes embedded dirt, stains and bacteria for a fresh, hygienic interior.',
  contentSections: [
    {
      type: 'text',
      heading: 'Professional Hot Water Extraction',
      body: 'Our upholstery cleaning uses a professional hot water extraction machine — the same technology used by commercial carpet cleaners, adapted for vehicle interiors. Hot water and specialist cleaning solution is injected deep into fabric fibres, then immediately extracted along with dissolved dirt, stains and bacteria. The result is dramatically cleaner, fresher fabric that dries within a few hours. It is far more effective than steam alone or any household spray and wipe approach.',
    },
    {
      type: 'list',
      heading: 'What We Clean',
      items: [
        'Fabric seats — front, rear and third row',
        'Floor carpets and removable mats',
        'Boot carpet and boot lining',
        'Door card fabric inserts',
        'Headliner spot cleaning where needed',
      ],
    },
    {
      type: 'text',
      heading: 'Common Causes in Stockport Vehicles',
      body: 'Family vehicles across Stockport accumulate years of staining from children\'s food and drinks, muddy footwells from country walks in Marple, Woodbank Park or Lyme Park, and coffee spills on daily commutes. Pet owners frequently book this service alongside our pet hair removal treatment. Our hot water extraction process tackles deep-set staining that vacuuming and surface cleaning leave behind — and we come to you, so there is no need to leave your driveway.',
    },
  ],
  faqs: [
    {
      question: 'How long do seats take to dry after cleaning?',
      answer: 'Typically 2–4 hours in warm weather, 4–8 hours in colder conditions. We extract as much moisture as possible during the process and can use air movers to speed drying if needed.',
    },
    {
      question: 'Can you remove old or set-in stains?',
      answer: 'Most stains respond well to hot water extraction, including coffee, food, mud and most liquids. Old or set-in stains like permanent ink or dye transfer may not come out completely — we will always be honest about expectations before we start.',
    },
    {
      question: 'Is hot water extraction safe for all fabric types?',
      answer: 'Yes. We adjust water temperature and pressure for different fabric types including Alcantara, suede and wool blends. We always test in a hidden area first before treating the full seat.',
    },
    {
      question: 'How much does upholstery cleaning cost in Stockport?',
      answer: 'Upholstery cleaning starts from £80 for a standard hatchback. Price depends on vehicle size and the number of surfaces being treated. Contact us for an exact quote — we are locally based and can often book at short notice.',
    },
  ],
  relatedLinks: [
    { label: 'Interior Valeting Stockport', href: '/stockport/car-valeting/interior-valeting' },
    { label: 'Pet Hair Removal Stockport', href: '/stockport/car-valeting/pet-hair-removal' },
    { label: 'Leather Conditioning Stockport', href: '/stockport/car-detailing/leather-conditioning' },
    { label: 'Car Valeting Stockport', href: '/stockport/car-valeting' },
  ],
  schemaPrice: '80',
};
