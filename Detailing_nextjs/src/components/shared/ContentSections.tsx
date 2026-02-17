import { CheckCircle } from 'lucide-react';
import type { ContentSection } from '@/data/types';

interface ContentSectionsProps {
  sections: ContentSection[];
}

export function ContentSections({ sections }: ContentSectionsProps) {
  return (
    <>
      {sections.map((section, index) => (
        <section key={index} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {section.heading}
          </h2>

          {section.body && (
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
              <p>{section.body}</p>
            </div>
          )}

          {section.type === 'list' && section.items && (
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {section.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          )}

          {section.type === 'process' && section.items && (
            <div className="space-y-4 mt-4">
              {section.items.map((step, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          )}

          {section.type === 'checklist' && section.items && (
            <div className="space-y-3 mt-4">
              {section.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  );
}
