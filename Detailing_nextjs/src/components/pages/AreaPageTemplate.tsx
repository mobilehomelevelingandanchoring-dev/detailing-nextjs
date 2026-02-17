import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { HeroSection } from '@/components/shared/HeroSection';
import { ContentSections } from '@/components/shared/ContentSections';
import { FaqAccordion } from '@/components/shared/FaqAccordion';
import { CtaSection } from '@/components/shared/CtaSection';
import { InternalLinkBlock } from '@/components/shared/InternalLinkBlock';
import { generateAreaSchema } from '@/lib/schema';
import type { AreaPageData } from '@/data/types';

interface AreaPageTemplateProps {
  data: AreaPageData;
}

export function AreaPageTemplate({ data }: AreaPageTemplateProps) {
  const areaSchema = generateAreaSchema({
    name: data.name,
    url: data.seo.canonical.replace('https://www.srvdetailing.co.uk', ''),
    description: data.seo.description,
    latitude: data.coordinates.latitude,
    longitude: data.coordinates.longitude,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <SchemaMarkup schemas={[areaSchema]} />

      <HeroSection
        breadcrumbs={data.breadcrumbs}
        title={data.heroTitle}
        description={data.heroDescription}
        badge={`Serving ${data.name}`}
      />

      <main className="max-w-7xl mx-auto px-4 py-16">
        {data.postcodeAreas.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Postcodes We Cover
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.postcodeAreas.map((postcode) => (
                <span
                  key={postcode}
                  className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg"
                >
                  {postcode}
                </span>
              ))}
            </div>
          </section>
        )}

        <ContentSections sections={data.contentSections} />
        <FaqAccordion faqs={data.faqs} />
        <InternalLinkBlock links={data.relatedLinks} />
        <CtaSection serviceName={`Car Care in ${data.name}`} />
      </main>

      <Footer />
    </div>
  );
}
