import { Shield, Sparkles, Car } from 'lucide-react';
import type { PillarPageData } from '@/data/types';

export const stockportCarDetailingPillar: PillarPageData = {
  slug: 'car-detailing',
  name: 'Car Detailing in Stockport',
  seo: {
    title: 'Car Detailing Stockport | Paint Correction & Ceramic Coating | SRV Detailing',
    description:
      'Professional car detailing in Stockport. Paint correction, ceramic coating, interior detailing. Locally based with 22+ years experience. Mobile service across all SK postcodes.',
    keywords: ['car detailing stockport', 'paint correction stockport', 'ceramic coating stockport', 'mobile detailing stockport'],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-detailing',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Detailing', href: '/stockport/car-detailing' },
  ],
  heroTitle: 'Professional Car Detailing in Stockport',
  heroDescription:
    'Locally based detailing specialist delivering paint correction, ceramic coatings and deep interior restoration across all Stockport areas. 22+ years experience, mobile service to your door.',
  introText:
    'As Stockport\'s local car detailing specialist, we deliver studio-quality work to your location across all SK postcodes. Our mobile unit carries professional-grade equipment — machine polishers, IR curing lamps, and premium products — so you get the same results as a dedicated detailing studio without leaving home.',
  services: [
    {
      slug: 'ceramic-coating',
      name: 'Ceramic Coating',
      description: 'Long-lasting paint protection. 2 to 7+ year packages available. Locally applied with professional equipment.',
      icon: Shield,
      href: '/stockport/car-detailing/ceramic-coating',
    },
    {
      slug: 'paint-correction',
      name: 'Paint Correction',
      description: 'Multi-stage machine polishing to remove swirl marks, scratches and oxidation.',
      icon: Sparkles,
      href: '/stockport/car-detailing/paint-correction',
    },
    {
      slug: 'new-car-protection',
      name: 'New Car Protection',
      description: 'Protect your new car from day one with ceramic coating and interior safeguarding.',
      icon: Car,
      href: '/stockport/car-detailing/new-car-protection',
    },
  ],
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Car Detailing?',
      body: 'Car detailing is a professional-grade restoration and protection process that goes far beyond standard cleaning. It includes paint correction to remove swirl marks and scratches, ceramic coating for long-term protection, and thorough interior restoration. As Stockport locals, we understand the environmental factors that affect vehicles here — tree sap from leafy residential streets, road grime from the A6 corridor, and the general wear of daily commuting.',
    },
    {
      type: 'list',
      heading: 'Why Stockport Cars Need Professional Detailing',
      items: [
        'Tree-lined residential streets in Bramhall, Cheadle and Marple deposit sap and bird droppings',
        'A6 and A34 corridor grime accumulates quickly on daily commuters',
        'Winter gritting on Stockport roads accelerates undercarriage corrosion',
        'UV exposure fades unprotected paint — even through overcast skies',
        'Multi-storey car parks in the town centre cause door dings and scratches',
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does car detailing take in Stockport?',
      answer: 'A comprehensive detail takes 6–10 hours. Paint correction alone is 4–8 hours. Being locally based, we can split larger jobs across two days if that\'s more convenient for you.',
    },
    {
      question: 'Do you come to my home in Stockport?',
      answer: 'Yes. We\'re based in Stockport so we\'re always nearby. We come to your driveway, workplace or any convenient location across all SK postcodes.',
    },
    {
      question: 'How much does car detailing cost in Stockport?',
      answer: 'Prices start from £250 for single-stage paint correction. Ceramic coating starts from £300. Full detail packages (correction + coating + interior) start from £500. Contact us for an exact quote.',
    },
  ],
  relatedLinks: [
    { label: 'Car Valeting Stockport', href: '/stockport/car-valeting', description: 'Regular maintenance cleaning' },
    { label: 'Manchester Car Detailing', href: '/manchester/car-detailing', description: 'Services across Manchester' },
    { label: 'Detailing Prices', href: '/pricing/car-detailing', description: 'View pricing' },
    { label: 'What Is Car Detailing?', href: '/guides/what-is-car-detailing', description: 'Complete guide' },
  ],
};
