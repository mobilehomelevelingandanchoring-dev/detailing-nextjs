import type { FaqTopicData } from '@/data/types';

export const faqTopicsData: FaqTopicData[] = [
  {
    slug: 'car-detailing',
    title: 'Car Detailing FAQ',
    seo: {
      title: 'Car Detailing FAQ | Common Questions Answered | SRV Detailing',
      description:
        'Frequently asked questions about car detailing. Paint correction, ceramic coating, costs, timing and more — answered by professionals.',
      keywords: ['car detailing faq', 'car detailing questions', 'detailing frequently asked questions'],
      canonical: 'https://www.srvdetailing.co.uk/faq/car-detailing',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Car Detailing', href: '/faq/car-detailing' },
    ],
    heroTitle: 'Car Detailing FAQ',
    heroDescription: 'Everything you want to know about professional car detailing — answered clearly by our experienced team.',
    faqs: [
      { question: 'What is car detailing?', answer: 'Car detailing is a professional-grade restoration and protection process. It goes far beyond a regular wash to include paint correction (machine polishing), protective coatings (ceramic coating or sealant), and deep interior restoration. The goal is to return your vehicle to — or exceed — showroom condition.' },
      { question: 'How long does car detailing take?', answer: 'A full exterior detail typically takes 6–10 hours depending on the vehicle\'s size and paint condition. Interior detailing takes 3–5 hours. A comprehensive detail covering both can take 1–2 full days.' },
      { question: 'How much does car detailing cost?', answer: 'Prices vary by service. A single-stage paint correction starts from £250. A full detail with multi-stage correction and ceramic coating ranges from £500 to £1,500+. The final cost depends on vehicle size, paint condition and the protection level chosen.' },
      { question: 'How often should I get my car detailed?', answer: 'For most vehicles, a full exterior detail once or twice per year is sufficient. If you have a ceramic coating, annual maintenance detailing keeps it performing at its best. Between details, regular valeting maintains the finish.' },
      { question: 'Is car detailing worth the money?', answer: 'Yes. Professional detailing protects your paintwork from environmental damage, maintains resale value, and keeps your car looking its best. A ceramic coating that lasts 5+ years works out cheaper per year than frequent waxing.' },
      { question: 'Can detailing remove scratches?', answer: 'Paint correction can remove or significantly reduce light to moderate scratches, swirl marks, water spots and oxidation. Deep scratches that have penetrated the clear coat or base coat may require touch-up paint or professional body repair.' },
      { question: 'What is the difference between detailing and valeting?', answer: 'Valeting is professional cleaning — it makes your car clean and fresh. Detailing is restoration and protection — it corrects paint defects and applies long-term coatings. Most car owners benefit from both: annual detailing with regular valeting in between.' },
      { question: 'Do I need to prepare my car before a detail?', answer: 'Just remove personal belongings from the interior. We handle everything else. If your vehicle is exceptionally dirty, a pre-wash may add time but won\'t affect the final result.' },
    ],
    relatedLinks: [
      { label: 'What Is Car Detailing?', href: '/guides/what-is-car-detailing', description: 'Complete guide' },
      { label: 'Car Detailing Manchester', href: '/manchester/car-detailing', description: 'Our detailing services' },
      { label: 'Detailing Prices', href: '/pricing/car-detailing', description: 'View pricing' },
      { label: 'Detailing vs Valeting', href: '/compare/car-detailing-vs-car-valeting', description: 'Side-by-side comparison' },
    ],
  },
  {
    slug: 'car-valeting',
    title: 'Car Valeting FAQ',
    seo: {
      title: 'Car Valeting FAQ | Common Questions Answered | SRV Detailing',
      description:
        'Frequently asked questions about car valeting. Full valets, mini valets, mobile service, costs and what to expect — answered by professionals.',
      keywords: ['car valeting faq', 'car valeting questions', 'car valet frequently asked questions'],
      canonical: 'https://www.srvdetailing.co.uk/faq/car-valeting',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Car Valeting', href: '/faq/car-valeting' },
    ],
    heroTitle: 'Car Valeting FAQ',
    heroDescription: 'Common questions about our professional car valeting services — answered by our experienced team.',
    faqs: [
      { question: 'What is included in a full valet?', answer: 'A full valet includes snow foam pre-wash, two-bucket hand wash, clay bar decontamination, full interior vacuum, upholstery cleaning, dashboard and trim detailing, all glass cleaned, wheel and tyre treatment, and wax or sealant protection. It takes 3–4 hours.' },
      { question: 'What is the difference between a mini valet and a full valet?', answer: 'A mini valet (60–90 minutes) covers exterior hand wash, interior vacuum, dashboard wipe and glass clean. A full valet (3–4 hours) adds clay bar treatment, upholstery deep clean, wax protection, wheel detailing and comprehensive interior attention.' },
      { question: 'How much does a car valet cost?', answer: 'A mini valet starts from £50 and a full valet from £120. Interior-only valeting starts from £80 and exterior-only from £65. Prices may vary slightly for larger vehicles.' },
      { question: 'How often should I valet my car?', answer: 'For most vehicles, a full valet every 4–6 weeks maintains optimal appearance. Between full valets, a fortnightly mini valet keeps things fresh. Cars with ceramic coatings need less frequent valeting.' },
      { question: 'Do you offer mobile valeting?', answer: 'Yes. Our fully equipped mobile unit comes to your home, workplace or any convenient location across Manchester and Stockport. We carry our own water supply and power — no electricity or water needed from you.' },
      { question: 'Is hand washing safer than a car wash?', answer: 'Yes. Automatic car washes use spinning brushes and recycled water that cause swirl marks and scratches. Our two-bucket hand wash method with clean microfibre mitts and pH-neutral shampoo cleans safely without damaging your paintwork.' },
      { question: 'Can you remove pet hair from my car?', answer: 'Yes. We use specialist tools and techniques to remove pet hair from seats, carpets, headlining and boot areas. Our pet hair removal service is thorough and effective even for heavily embedded hair.' },
      { question: 'What if it rains on the day of my valet?', answer: 'Light rain doesn\'t affect our work. For heavy rain, we may reschedule the exterior elements and still complete interior work. We always communicate proactively about weather-related changes.' },
    ],
    relatedLinks: [
      { label: 'What Is Car Valeting?', href: '/guides/what-is-car-valeting', description: 'Complete guide' },
      { label: 'Car Valeting Manchester', href: '/manchester/car-valeting', description: 'Our valeting services' },
      { label: 'Valeting Prices', href: '/pricing/car-valeting', description: 'View pricing' },
      { label: 'Full Valet vs Mini Valet', href: '/compare/full-valet-vs-mini-valet', description: 'Compare packages' },
    ],
  },
  {
    slug: 'ceramic-coating',
    title: 'Ceramic Coating FAQ',
    seo: {
      title: 'Ceramic Coating FAQ | Common Questions Answered | SRV Detailing',
      description:
        'Frequently asked questions about ceramic coating. Durability, cost, maintenance, application process and more — answered by certified professionals.',
      keywords: ['ceramic coating faq', 'ceramic coating questions', 'ceramic coating frequently asked questions'],
      canonical: 'https://www.srvdetailing.co.uk/faq/ceramic-coating',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Ceramic Coating', href: '/faq/ceramic-coating' },
    ],
    heroTitle: 'Ceramic Coating FAQ',
    heroDescription: 'Everything you need to know about ceramic coating — from preparation to maintenance — answered by our certified team.',
    faqs: [
      { question: 'What is ceramic coating?', answer: 'Ceramic coating is a liquid polymer applied to your vehicle\'s exterior that chemically bonds with the factory paint to create a permanent or semi-permanent layer of protection. It provides exceptional hydrophobic properties, UV protection, chemical resistance and a deep, glossy finish.' },
      { question: 'How long does ceramic coating last?', answer: 'Professional-grade ceramic coatings last 2–7+ years depending on the product and maintenance. Consumer-grade spray coatings last weeks to months. Our coatings come with manufacturer warranties and last a minimum of 3 years with proper care.' },
      { question: 'How much does ceramic coating cost?', answer: 'Professional ceramic coating typically costs £400–£1,200+ depending on the vehicle size and the level of paint correction required beforehand. The coating itself is only part of the process — thorough decontamination and paint correction are essential for the best results.' },
      { question: 'Does ceramic coating prevent scratches?', answer: 'Ceramic coating provides a degree of scratch resistance and makes the surface harder, but it is not scratch-proof. It will resist light wash marring and minor abrasion. For impact protection from stone chips, paint protection film (PPF) is the better option.' },
      { question: 'Do I still need to wash my car after ceramic coating?', answer: 'Yes, but washing becomes much easier and less frequent. Dirt and contaminants don\'t bond to the surface as readily, so a simple rinse often removes most debris. When washing is needed, use pH-neutral shampoo and avoid automatic car washes.' },
      { question: 'Can ceramic coating be applied to a new car?', answer: 'Absolutely — and it\'s the ideal time. New paint is in the best condition for coating. We still carry out a thorough decontamination and light polish to ensure perfect adhesion and remove any dealer-applied compounds or transport contamination.' },
      { question: 'What preparation is needed before ceramic coating?', answer: 'The vehicle undergoes a thorough decontamination wash, clay bar treatment, iron fallout removal, and paint correction (machine polishing) to remove all defects. Ceramic coating locks in whatever is underneath it, so the paint must be as close to perfect as possible before application.' },
    ],
    relatedLinks: [
      { label: 'Ceramic Coating Explained', href: '/guides/ceramic-coating-explained', description: 'Full guide' },
      { label: 'Ceramic Coating Manchester', href: '/manchester/car-detailing/ceramic-coating', description: 'Our service' },
      { label: 'Ceramic Coating vs Wax', href: '/compare/ceramic-coating-vs-wax', description: 'Compare options' },
      { label: 'Ceramic Coating vs PPF', href: '/compare/ceramic-coating-vs-ppf', description: 'Compare protection' },
    ],
  },
  {
    slug: 'pricing',
    title: 'Pricing FAQ',
    seo: {
      title: 'Car Detailing & Valeting Pricing FAQ | SRV Detailing',
      description:
        'Frequently asked questions about our car detailing and valeting prices. Transparent pricing, no hidden costs, no call-out fees.',
      keywords: ['car detailing pricing faq', 'car valeting cost questions', 'detailing pricing questions'],
      canonical: 'https://www.srvdetailing.co.uk/faq/pricing',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Pricing', href: '/faq/pricing' },
    ],
    heroTitle: 'Pricing FAQ',
    heroDescription: 'Transparent answers to common pricing questions. No hidden costs, no surprises.',
    faqs: [
      { question: 'Do you charge call-out fees for mobile services?', answer: 'No. We are locally based in Dukinfield and cover all of Manchester and Stockport without call-out fees. Our prices are the same whether we come to you or you come to us.' },
      { question: 'Why do prices vary by vehicle size?', answer: 'Larger vehicles require more product, more time, and more effort to complete to the same standard. An SUV takes roughly 30–50% longer than a small hatchback. Our pricing reflects this honestly rather than quoting one price and adding extras.' },
      { question: 'Are there any hidden costs?', answer: 'No. We provide a clear quote before starting any work. If we discover something during the process that would add cost (e.g. heavy contamination requiring extra correction), we\'ll discuss it with you before proceeding.' },
      { question: 'Do you offer package deals or discounts?', answer: 'Yes. We offer multi-service packages and maintenance plans that provide better value than individual bookings. Regular customers also benefit from loyalty pricing. Contact us for a personalised quote.' },
      { question: 'What payment methods do you accept?', answer: 'We accept cash, bank transfer, and all major debit and credit cards. Payment is due upon completion of the service.' },
      { question: 'Is a deposit required?', answer: 'For standard services, no deposit is needed. For large bookings (multi-day details, fleet work), we may request a small deposit to secure your date. This is always discussed upfront.' },
    ],
    relatedLinks: [
      { label: 'Pricing Hub', href: '/pricing', description: 'View all pricing' },
      { label: 'Detailing Prices', href: '/pricing/car-detailing', description: 'Detailing packages' },
      { label: 'Valeting Prices', href: '/pricing/car-valeting', description: 'Valeting packages' },
      { label: 'Book Now', href: '/booking', description: 'Get your quote' },
    ],
  },
  {
    slug: 'booking',
    title: 'Booking FAQ',
    seo: {
      title: 'Booking FAQ | How to Book Car Detailing & Valeting | SRV Detailing',
      description:
        'Frequently asked questions about booking car detailing and valeting. How to book, cancellations, scheduling and what to expect on the day.',
      keywords: ['book car detailing', 'book car valet', 'car detailing booking questions'],
      canonical: 'https://www.srvdetailing.co.uk/faq/booking',
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Booking', href: '/faq/booking' },
    ],
    heroTitle: 'Booking FAQ',
    heroDescription: 'Everything you need to know about booking our services — from scheduling to what happens on the day.',
    faqs: [
      { question: 'How do I book a service?', answer: 'You can book through our website booking form, by phone, or via WhatsApp/text. We\'ll confirm your date, time, service details and price before your appointment.' },
      { question: 'How far in advance should I book?', answer: 'We recommend booking 3–7 days in advance for standard services. For large details or ceramic coating work, 1–2 weeks\' notice helps us schedule the time needed. We do accommodate last-minute requests when possible.' },
      { question: 'Can I cancel or reschedule?', answer: 'Yes. We ask for at least 24 hours\' notice for cancellations or reschedules. This allows us to offer the slot to another customer. Same-day cancellations may incur a small fee for large bookings.' },
      { question: 'What happens on the day?', answer: 'We\'ll arrive at the agreed time and location. We\'ll inspect the vehicle with you, confirm the work to be done, and agree on any additional items. You\'re free to leave us to work — we don\'t need you to be present the entire time.' },
      { question: 'Do you work weekends?', answer: 'Yes. We work 7 days a week to accommodate your schedule. Weekend slots are popular, so we recommend booking early for Saturday or Sunday appointments.' },
      { question: 'What areas do you cover?', answer: 'We cover all of Greater Manchester and Stockport, including all M and SK postcodes. We are based in Dukinfield, giving us quick access to Manchester city centre, Stockport, Trafford, Sale, Altrincham and surrounding areas.' },
    ],
    relatedLinks: [
      { label: 'Book Now', href: '/booking', description: 'Book your service' },
      { label: 'Contact Us', href: '/contact', description: 'Get in touch' },
      { label: 'Manchester Areas', href: '/manchester/areas', description: 'Areas we cover' },
      { label: 'Stockport Areas', href: '/stockport/areas', description: 'Stockport coverage' },
    ],
  },
];

export function getFaqTopicBySlug(slug: string): FaqTopicData | undefined {
  return faqTopicsData.find((t) => t.slug === slug);
}

export function getAllFaqTopicSlugs(): string[] {
  return faqTopicsData.map((t) => t.slug);
}
