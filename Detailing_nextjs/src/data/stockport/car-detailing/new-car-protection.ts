import { Car } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const newCarProtectionStockport: ServicePageData = {
  slug: 'new-car-protection',
  name: 'New Car Protection Stockport',
  seo: {
    title: 'New Car Protection Stockport | Ceramic Coating New Cars | SRV Detailing',
    description: 'Professional new car protection in Stockport. Ceramic coating for new vehicles. Protect your investment from day one. Locally based.',
    keywords: ['new car protection stockport', 'ceramic coating new car stockport', 'new car ceramic coating', 'new car paint protection'],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-detailing/new-car-protection',
  },
  icon: Car,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Detailing', href: '/stockport/car-detailing' },
    { label: 'New Car Protection', href: '/stockport/car-detailing/new-car-protection' },
  ],
  heroTitle: 'New Car Protection in Stockport',
  heroDescription: 'Protect your brand new vehicle from day one with ceramic coating and paint protection. Preserve that showroom finish for years.',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Protect a New Car?',
      body: 'New paintwork is at its most vulnerable. Without protection, road salt, bird droppings, tree sap and UV exposure begin degrading the finish from the first drive home. Ceramic coating applied within the first few weeks provides years of defence — and your paint is in perfect condition to coat without needing correction first.',
    },
    {
      type: 'list',
      heading: 'New Car Protection Includes',
      items: [
        'Decontamination wash to remove dealer prep residue and transport film adhesive',
        'Paint inspection for any dealer-inflicted defects (buffer trails, marring)',
        'Light polish if needed to remove any minor dealer damage',
        'Ceramic coating application for long-term paint protection',
        'Interior fabric or leather protection',
        'Wheel coating for easier cleaning',
      ],
    },
  ],
  faqs: [
    { question: 'How soon after buying should I protect my new car?', answer: 'Ideally within the first 1–2 weeks. The sooner the better — before the paint picks up any defects that would need correcting first.' },
    { question: 'Is dealer paint protection worth it?', answer: 'Dealer "paint protection" is often an overpriced sealant applied carelessly. A professional ceramic coating from a specialist provides far superior protection at a better price.' },
  ],
  relatedLinks: [
    { label: 'Ceramic Coating Stockport', href: '/stockport/car-detailing/ceramic-coating' },
    { label: 'Stockport Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Detailing Prices', href: '/stockport/car-detailing/prices' },
  ],
  schemaPrice: '300',
};
