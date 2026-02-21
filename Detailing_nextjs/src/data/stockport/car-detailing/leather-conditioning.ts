import { Armchair } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const leatherConditioningStockport: ServicePageData = {
  slug: 'leather-conditioning',
  name: 'Leather Conditioning Stockport',
  seo: {
    title: 'Leather Conditioning Stockport | Interior Leather Care | SRV Detailing',
    description:
      'Professional leather conditioning and restoration in Stockport. Clean, nourish and protect your vehicle\'s leather interior. Locally based mobile service across all SK postcodes.',
    keywords: [
      'leather conditioning stockport',
      'car leather care stockport',
      'leather restoration stockport',
      'leather cleaning car stockport',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-detailing/leather-conditioning',
  },
  icon: Armchair,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Leather Conditioning', href: '/stockport/car-detailing/leather-conditioning' },
  ],
  heroTitle: 'Leather Conditioning in Stockport',
  heroDescription:
    'Professional leather cleaning, conditioning and protection for your vehicle\'s interior. Restore suppleness, prevent cracking and maintain that premium feel — delivered to your Stockport door.',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Your Leather Needs Professional Care',
      body: 'Leather is a natural material that dries out and degrades without proper care. UV exposure through windows, body oils from contact, dye transfer from clothing, and Stockport\'s damp climate all affect leather over time. The prestige and luxury vehicles common in areas like Bramhall, Heaton Moor and Davenport Park particularly benefit from regular professional conditioning to maintain their high-quality interiors.',
    },
    {
      type: 'process',
      heading: 'Our Leather Care Process',
      items: [
        'Vacuum seats and crevices to remove loose debris',
        'Apply pH-balanced leather cleaner and agitate with soft brushes',
        'Wipe clean and inspect for stains, dye transfer or damage',
        'Apply professional leather conditioner to nourish and restore suppleness',
        'Apply leather protectant with UV inhibitors for ongoing defence',
      ],
    },
  ],
  faqs: [
    {
      question: 'How often should leather be conditioned?',
      answer: 'Every 3–6 months is ideal. Vehicles in direct sunlight or heavy use benefit from quarterly conditioning.',
    },
    {
      question: 'Can you remove dye transfer from jeans?',
      answer: 'In most cases, yes. Dye transfer from denim is one of the most common leather issues we treat. Fresh stains are easier to remove than old, set-in ones.',
    },
    {
      question: 'Do you work on all leather colours?',
      answer: 'Yes. We use colour-safe products suitable for all leather types and colours, from light cream to dark black.',
    },
  ],
  relatedLinks: [
    { label: 'Interior Detailing Stockport', href: '/stockport/car-detailing/interior-detailing' },
    { label: 'Upholstery Cleaning', href: '/stockport/car-valeting/upholstery-cleaning' },
    { label: 'Full Valet', href: '/stockport/car-valeting/full-valet' },
    { label: 'Stockport Car Detailing', href: '/stockport/car-detailing' },
  ],
  schemaPrice: '80',
};
