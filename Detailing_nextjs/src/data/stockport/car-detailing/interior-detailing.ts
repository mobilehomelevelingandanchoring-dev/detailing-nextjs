import { CircleDot } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const interiorDetailingStockport: ServicePageData = {
  slug: 'interior-detailing',
  name: 'Interior Detailing Stockport',
  seo: {
    title: 'Interior Detailing Stockport | Deep Interior Restoration | SRV Detailing',
    description:
      'Professional interior detailing in Stockport. Steam cleaning, leather conditioning, stain removal and UV sanitisation. Locally based, 22+ years experience. All SK postcodes.',
    keywords: [
      'interior detailing stockport',
      'car interior cleaning stockport',
      'leather conditioning stockport',
      'steam cleaning car interior stockport',
      'interior restoration stockport',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-detailing/interior-detailing',
  },
  icon: CircleDot,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Detailing', href: '/stockport/car-detailing' },
    { label: 'Interior Detailing', href: '/stockport/car-detailing/interior-detailing' },
  ],
  heroTitle: 'Interior Detailing in Stockport',
  heroDescription:
    'Deep interior restoration delivered to your Stockport driveway. Steam cleaning, leather conditioning, stain removal, odour elimination and UV sanitisation — all from our locally based mobile unit.',
  contentSections: [
    {
      type: 'text',
      heading: 'What Is Interior Detailing?',
      body: 'Interior detailing is a thorough, professional-grade restoration of every surface inside your vehicle. It goes far beyond vacuuming and wiping — we use steam cleaners to sanitise fabrics, hot water extractors to remove deep-set stains, specialist leather conditioners to restore and protect hide, and UV-C sanitisation to eliminate bacteria and allergens. The result is a cabin that looks, feels and smells like new.',
    },
    {
      type: 'list',
      heading: 'What\'s Included in Our Interior Detail',
      items: [
        'Full vacuum of all carpets, seats, boot and crevices',
        'Steam cleaning of all fabric surfaces — seats, carpets, headlining, door cards',
        'Hot water extraction for deep-set stains in upholstery and carpets',
        'Leather cleaning, conditioning and UV protection on all hide surfaces',
        'Dashboard, console and trim deep clean and dressing',
        'Air vent cleaning and cabin filter sanitisation',
        'Glass and mirror cleaning inside',
        'Odour elimination using enzyme-based treatments',
        'UV-C sanitisation for bacteria and allergen removal',
      ],
    },
    {
      type: 'text',
      heading: 'Why Stockport Interiors Need Professional Attention',
      body: 'Stockport\'s wet climate means moisture is constantly tracked into vehicles — muddy footwells from country lanes in Marple, damp seat fabric, and condensation that breeds bacteria and musty odours. Family vehicles from Bramhall to Cheadle Hulme accumulate food spills, pet hair and daily wear that household products simply cannot tackle. Our commercial-grade equipment delivers results no home cleaning kit can match.',
    },
  ],
  faqs: [
    {
      question: 'How long does interior detailing take?',
      answer: 'A full interior detail typically takes 3–5 hours depending on vehicle size and condition. Heavily soiled interiors or those requiring stain removal may take longer.',
    },
    {
      question: 'Can you remove pet hair from my car?',
      answer: 'Yes. We use compressed air, specialist detailing brushes and professional vacuums to remove embedded pet hair from all fabrics. It\'s one of our most requested services across Stockport.',
    },
    {
      question: 'Will interior detailing remove stains from my seats?',
      answer: 'Most stains can be significantly reduced or completely removed using hot water extraction and specialist cleaning agents. We treat each stain individually and can tackle coffee, food, ink and most liquid spills effectively.',
    },
    {
      question: 'How much does interior detailing cost in Stockport?',
      answer: 'Interior detailing starts from £150 for a standard vehicle. Price depends on vehicle size, interior material type and overall condition. Contact us for an exact quote.',
    },
  ],
  relatedLinks: [
    { label: 'Paint Correction Stockport', href: '/stockport/car-detailing/paint-correction' },
    { label: 'Leather Conditioning Stockport', href: '/stockport/car-detailing/leather-conditioning' },
    { label: 'Interior Valeting', href: '/stockport/car-valeting/interior-valeting' },
    { label: 'Stockport Car Detailing', href: '/stockport/car-detailing' },
  ],
  schemaPrice: '150',
};
