import { BASE_URL, BUSINESS_NAME, PHONE, ADDRESS, GEO } from '@/data/constants';
import type { BreadcrumbItem, FaqItem } from '@/data/types';

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}

export function generateFaqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(options: {
  name: string;
  description: string;
  url: string;
  price?: string;
  areaServed?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Professional ${options.name}`,
    description: options.description,
    url: `${BASE_URL}${options.url}`,
    provider: {
      '@type': 'AutoDetailing',
      name: BUSINESS_NAME,
      telephone: PHONE,
      url: BASE_URL,
      address: { '@type': 'PostalAddress', ...ADDRESS },
    },
    areaServed: options.areaServed
      ? { '@type': 'City', name: options.areaServed }
      : {
          '@type': 'GeoCircle',
          geoMidpoint: { '@type': 'GeoCoordinates', ...GEO },
          geoRadius: '25000',
        },
    ...(options.price && {
      offers: {
        '@type': 'Offer',
        price: options.price,
        priceCurrency: 'GBP',
      },
    }),
  };
}

export function generateLocalBusinessSchema(options: {
  name: string;
  url: string;
  description: string;
  areaServed?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}${options.url}#localbusiness`,
    name: options.name,
    url: `${BASE_URL}${options.url}`,
    telephone: PHONE,
    priceRange: '££',
    description: options.description,
    address: { '@type': 'PostalAddress', ...ADDRESS },
    geo: { '@type': 'GeoCoordinates', ...GEO },
    areaServed: options.areaServed?.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
  };
}

export function generateArticleSchema(options: {
  title: string;
  description: string;
  url: string;
  publishedDate: string;
  updatedDate?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    url: `${BASE_URL}${options.url}`,
    datePublished: options.publishedDate,
    ...(options.updatedDate && { dateModified: options.updatedDate }),
    author: {
      '@type': 'Organization',
      name: options.author || BUSINESS_NAME,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      url: BASE_URL,
    },
  };
}

export function generateBlogPostingSchema(options: {
  title: string;
  description: string;
  url: string;
  publishedDate: string;
  updatedDate?: string;
  author?: string;
  articleSection?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: options.title,
    description: options.description,
    url: `${BASE_URL}${options.url}`,
    datePublished: options.publishedDate,
    ...(options.updatedDate && { dateModified: options.updatedDate }),
    ...(options.articleSection && { articleSection: options.articleSection }),
    author: {
      '@type': 'Organization',
      name: options.author || BUSINESS_NAME,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      url: BASE_URL,
    },
  };
}

export function generateImageGallerySchema(options: {
  name: string;
  description: string;
  url: string;
  images: { name: string; description: string; contentUrl: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: options.name,
    description: options.description,
    url: `${BASE_URL}${options.url}`,
    image: options.images.map((img) => ({
      '@type': 'ImageObject',
      name: img.name,
      description: img.description,
      contentUrl: img.contentUrl,
    })),
  };
}

export function generateAreaSchema(options: {
  name: string;
  url: string;
  description: string;
  latitude: string;
  longitude: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}${options.url}#localbusiness`,
    name: `${BUSINESS_NAME} — ${options.name}`,
    url: `${BASE_URL}${options.url}`,
    telephone: PHONE,
    priceRange: '££',
    description: options.description,
    address: { '@type': 'PostalAddress', ...ADDRESS },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: options.latitude,
      longitude: options.longitude,
    },
    areaServed: { '@type': 'City', name: options.name },
  };
}
