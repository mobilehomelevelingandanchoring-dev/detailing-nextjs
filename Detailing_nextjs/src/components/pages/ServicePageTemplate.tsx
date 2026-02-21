import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { HeroSection } from '@/components/shared/HeroSection';
import { ServiceImageBlock } from '@/components/shared/ServiceImageBlock';
import { ContentSections } from '@/components/shared/ContentSections';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { CtaSection } from '@/components/shared/CtaSection';
import { InternalLinkBlock } from '@/components/shared/InternalLinkBlock';
import { generateServiceSchema } from '@/lib/schema';
import type { ServicePageData } from '@/data/types';

interface ServicePageTemplateProps {
  data: ServicePageData;
  location: string;
}

export function ServicePageTemplate({ data, location }: ServicePageTemplateProps) {
  const serviceSchema = generateServiceSchema({
    name: data.name,
    description: data.seo.description,
    url: data.seo.canonical.replace('https://www.srvdetailing.co.uk', ''),
    price: data.schemaPrice,
    areaServed: location,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <SchemaMarkup schemas={[serviceSchema]} />

      <HeroSection
        breadcrumbs={data.breadcrumbs}
        title={data.heroTitle}
        description={data.heroDescription}
        badge="Professional Service"
      />

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/*
          ServiceImageBlock sits between the hero and the body copy.
          It is below the fold on most devices, so priority=false (lazy load).
          imageKey from data overrides auto-selection when set.
          caption gives humans (and Google) extra context without stuffing alt text.
        */}
        <ServiceImageBlock
          location={location}
          service={data.name}
          imageKey={data.imageKey}
          priority={false}
          caption={`${data.name} — serving ${location} and surrounding areas`}
          className="mb-16"
        />

        <ContentSections sections={data.contentSections} />
        <FaqAccordion faqs={data.faqs} />
        <InternalLinkBlock links={data.relatedLinks} />
        <CtaSection serviceName={data.name} />
      </main>

      <Footer />
    </div>
  );
}
