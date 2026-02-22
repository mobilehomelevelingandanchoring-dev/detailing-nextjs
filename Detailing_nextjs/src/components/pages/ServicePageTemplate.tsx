import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { HeroSection } from '@/components/shared/HeroSection';
import { ServiceImageBlock } from '@/components/shared/ServiceImageBlock';
import { ContentSections } from '@/components/shared/ContentSections';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { CtaSection } from '@/components/shared/CtaSection';
import { RelatedContent } from '@/components/shared/RelatedContent';
import { generateServiceSchema, generateLocalBusinessSchema } from '@/lib/schema';
import { inferClusterId } from '@/lib/linkClusters';
import { BUSINESS_NAME } from '@/data/constants';
import type { ServicePageData } from '@/data/types';

interface ServicePageTemplateProps {
  data: ServicePageData;
  location: string;
}

export function ServicePageTemplate({ data, location }: ServicePageTemplateProps) {
  // Derive topical cluster from canonical URL for automatic cross-linking
  const clusterId = inferClusterId(data.seo.canonical);
  const currentHref = data.seo.canonical.replace('https://www.srvdetailing.co.uk', '');

  // Service schema — describes the specific service offered on this page
  const serviceSchema = generateServiceSchema({
    name: data.name,
    description: data.seo.description,
    url: data.seo.canonical.replace('https://www.srvdetailing.co.uk', ''),
    price: data.schemaPrice,
    areaServed: location,
  });

  // LocalBusiness schema — reinforces the local entity signal for this location
  const localBusinessSchema = generateLocalBusinessSchema({
    name: `${BUSINESS_NAME} — ${data.name} in ${location}`,
    url: data.seo.canonical.replace('https://www.srvdetailing.co.uk', ''),
    description: data.seo.description,
    areaServed: [location, 'Greater Manchester', 'Stockport'],
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      {/*
        Schema output order:
          1. Service          — rendered here
          2. LocalBusiness    — rendered here
          3. ImageObject      — rendered inside ServiceImageBlock
          4. FAQPage          — rendered inside FaqAccordion
          5. BreadcrumbList   — rendered inside HeroSection > Breadcrumbs
      */}
      <SchemaMarkup schemas={[serviceSchema, localBusinessSchema]} />

      <HeroSection
        breadcrumbs={data.breadcrumbs}
        title={data.heroTitle}
        description={data.heroDescription}
        badge="Professional Service"
      />

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/*
          ServiceImageBlock:
          - lazy loaded (below fold) so priority=false
          - imageKey from data overrides auto-selection when explicitly set
          - caption adds human-readable context without inflating alt text
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
        {/*
          RelatedContent uses topical cluster auto-linking when a clusterId is
          available (derived from canonical URL), falling back to explicit
          relatedLinks. showCrossLinks adds pillar-to-pillar links below the grid
          (e.g. Car Detailing → Car Valeting, → Manchester Areas).
        */}
        {clusterId ? (
          <RelatedContent
            clusterId={clusterId}
            currentHref={currentHref}
            showCrossLinks
            title="Related Services"
          />
        ) : (
          <RelatedContent links={data.relatedLinks} title="Related Services" />
        )}
        <CtaSection serviceName={data.name} />
      </main>

      <Footer />
    </div>
  );
}
