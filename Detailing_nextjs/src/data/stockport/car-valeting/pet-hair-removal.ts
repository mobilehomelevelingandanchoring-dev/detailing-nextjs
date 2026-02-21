import { Scissors } from 'lucide-react';
import type { ServicePageData } from '@/data/types';

export const petHairRemovalStockport: ServicePageData = {
  slug: 'pet-hair-removal',
  name: 'Pet Hair Removal Stockport',
  seo: {
    title: 'Pet Hair Removal Stockport | Car Pet Hair Cleaning | SRV Detailing',
    description:
      'Specialist pet hair removal from car interiors in Stockport. Compressed air, rubber detailing brushes and professional extraction to remove every strand. Mobile service to all SK postcodes.',
    keywords: [
      'pet hair removal car stockport',
      'dog hair car cleaning stockport',
      'pet hair car interior stockport',
      'mobile pet hair removal stockport',
      'cat hair car cleaning stockport',
    ],
    canonical: 'https://www.srvdetailing.co.uk/stockport/car-valeting/pet-hair-removal',
  },
  icon: Scissors,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Stockport', href: '/stockport' },
    { label: 'Car Valeting', href: '/stockport/car-valeting' },
    { label: 'Pet Hair Removal', href: '/stockport/car-valeting/pet-hair-removal' },
  ],
  heroTitle: 'Pet Hair Removal in Stockport',
  heroDescription:
    'Specialist extraction of pet hair from car seats, carpets and every crevice — delivered to your Stockport driveway. We use compressed air, rubber detailing brushes and professional vacuums to remove every strand.',
  contentSections: [
    {
      type: 'text',
      heading: 'Why Pet Hair Is So Difficult to Remove',
      body: 'Pet hair embeds itself into fabric weave, wedges into seat stitching and clings to carpet fibres through static charge. Standard vacuuming only removes surface hair — the deeper strands require specialist techniques. Our pet hair removal process uses compressed air to lift embedded hair from crevices, rubber detailing brushes to pull it from fabric, and professional high-powered extraction to finish. Stockport families with dogs, cats or other pets regularly use this service before selling a vehicle or restoring a car to a cleaner standard.',
    },
    {
      type: 'process',
      heading: 'Our Pet Hair Removal Process',
      items: [
        'Compressed air blast to loosen embedded hair from fabric weave, seat stitching and tight crevices',
        'Rubber brush agitation across all fabric seats and carpets to pull stubborn hair to the surface',
        'High-powered vacuum extraction of all loosened hair',
        'Lint roller finishing pass on all fabric surfaces',
        'Optional odour neutralisation added for pet smells',
      ],
    },
    {
      type: 'text',
      heading: 'Mobile Service Across All Stockport Postcodes',
      body: 'We are based in Dukinfield, just minutes from Bramhall, Cheadle Hulme, Hazel Grove, Marple, Reddish and Stockport town centre. Our van carries all the equipment needed — no hosepipe or power supply required from you. We come to your driveway, workplace or any convenient location across all SK postcodes.',
    },
  ],
  faqs: [
    {
      question: 'Can you get all pet hair out?',
      answer: 'We remove 95–99% of visible pet hair. Some deeply embedded strands in worn or heavily used fabric may remain, but the difference is dramatic. We will always be honest about what to expect before we start.',
    },
    {
      question: 'Do you also remove pet odours?',
      answer: 'We can add odour neutralisation using enzyme-based treatments to any pet hair removal service. See our dedicated odour removal page for full details on the process.',
    },
    {
      question: 'How long does pet hair removal take?',
      answer: 'Typically 1–2 hours depending on severity. Heavy cases — long-haired breeds, multiple pets, or a heavily used boot — may take longer. We will give you an estimate when we assess the vehicle.',
    },
    {
      question: 'How much does pet hair removal cost in Stockport?',
      answer: 'Pet hair removal starts from £60 for a standard hatchback. Price depends on vehicle size and severity. Contact us for an exact quote — we can often provide a same-day or next-day appointment.',
    },
  ],
  relatedLinks: [
    { label: 'Interior Valeting Stockport', href: '/stockport/car-valeting/interior-valeting' },
    { label: 'Odour Removal Stockport', href: '/stockport/car-valeting/odour-removal' },
    { label: 'Upholstery Cleaning Stockport', href: '/stockport/car-valeting/upholstery-cleaning' },
    { label: 'Full Valet Stockport', href: '/stockport/car-valeting/full-valet' },
  ],
  schemaPrice: '60',
};
