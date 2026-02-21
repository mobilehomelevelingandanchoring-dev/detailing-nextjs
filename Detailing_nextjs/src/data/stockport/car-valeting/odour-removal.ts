import { Wind } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const odourRemovalStockport: ServicePageData = {
  slug: 'odour-removal',
  name: 'Car Odour Removal Stockport',
  seo: {
    title: 'Car Odour Removal Stockport | Smell Elimination | SRV Detailing',
    description:
      'Professional car odour removal in Stockport. Permanently eliminate smoke, pet, food and damp smells. Deep cleaning and ozone treatment — mobile service to all SK postcodes.',
    keywords: [
      'car odour removal stockport',
      'smoke smell car stockport',
      'car smell removal stockport',
      'ozone treatment car stockport',
      'car deodorising stockport',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-valeting/odour-removal',
  },
  icon: Wind,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Valeting', href: '/stockport/car-valeting' },
    { label: 'Odour Removal', href: '/stockport/car-valeting/odour-removal' },
  ],
  heroTitle: 'Car Odour Removal in Stockport',
  heroDescription:
    'Permanently eliminate stubborn smells from your vehicle — smoke, pet odours, food, damp and more. Professional deep cleaning and ozone treatment, delivered to your Stockport door.',
  contentSections: [
    {
      type: 'text',
      heading: 'How We Eliminate Car Odours',
      body: 'Masking a smell with an air freshener does not work — the odour source remains and returns within days. Our approach is to identify and eliminate the source. We deep clean all surfaces where odour-causing bacteria hide — seats, carpets, headliner, air vents and hidden areas beneath floor mats. For severe cases, we use an ozone generator that chemically neutralises odour molecules throughout the cabin. The result is a genuinely fresh interior, not a covered-up one.',
    },
    {
      type: 'list',
      heading: 'Common Odours We Treat',
      items: [
        'Cigarette and vape smoke — deeply embedded in headliner, seats and the air conditioning system',
        'Pet odours — from hair, saliva, dander and accidents',
        'Food and drink spills — coffee, milk, takeaway and children\'s snacks',
        'Damp and musty smells — from wet carpets, blocked drains or water leak damage',
        'Vomit and biological — enzyme treatment and deep sanitisation',
      ],
    },
    {
      type: 'text',
      heading: 'Why Stockport Vehicles Need Professional Odour Treatment',
      body: 'Stockport\'s wet climate means damp is a constant issue — moisture tracked in on footwear from country walks in Marple or Bramhall, condensation from cold mornings, and wet dogs after walks on Woodbank Park or Lyme Park all contribute to musty interiors. In confined spaces like a car cabin, bacteria multiply quickly. Our commercial-grade enzyme treatments and ozone generators tackle the problem at source, delivering a result no supermarket spray can match.',
    },
  ],
  faqs: [
    {
      question: 'Can you remove cigarette smoke smell completely?',
      answer: 'In most cases, yes. Smoke is one of the hardest odours because it permeates every surface including the headliner and air conditioning system. We use a combination of deep cleaning, enzyme treatment and ozone to tackle it from every angle. Heavily smoked vehicles may require a second treatment.',
    },
    {
      question: 'What is ozone treatment?',
      answer: 'Ozone (O3) is a powerful oxidising agent that breaks down odour-causing molecules at a chemical level. We run an ozone generator inside the sealed vehicle for 30–60 minutes. It leaves no residue and is completely safe once ventilated. It reaches areas that physical cleaning cannot, including inside air conditioning ducts.',
    },
    {
      question: 'How long does odour removal take?',
      answer: '2–4 hours including deep clean and ozone treatment. Severe cases — heavy smokers or long-term pet use — may require a second session a few days later.',
    },
    {
      question: 'How much does car odour removal cost in Stockport?',
      answer: 'Odour removal starts from £70 for a standard vehicle. Price depends on severity and whether ozone treatment is required. Contact us for an exact quote — we are locally based and can often offer a prompt appointment.',
    },
  ],
  relatedLinks: [
    { label: 'Interior Valeting Stockport', href: '/stockport/car-valeting/interior-valeting' },
    { label: 'Pet Hair Removal Stockport', href: '/stockport/car-valeting/pet-hair-removal' },
    { label: 'Upholstery Cleaning Stockport', href: '/stockport/car-valeting/upholstery-cleaning' },
    { label: 'Car Valeting Stockport', href: '/stockport/car-valeting' },
  ],
  schemaPrice: '70',
};
