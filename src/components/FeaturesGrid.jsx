import React from 'react';
import { Compass, Sliders, ShieldCheck, FileCheck2, Zap, Scale, FileText } from 'lucide-react';

export default function FeaturesGrid() {
  const pillars = [
    {
      icon: Compass,
      title: 'Jurisdiction Alignment',
      subtitle: 'Localized Legal Rules',
      description: 'Automatically aligns governing law, arbitration clauses, and legal disclosures across all 50 US States, UK, EU, Canada, India, Australia, and Singapore.',
      badge: 'Core Feature',
      textColor: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      highlights: ['50 US State Statutory Alignment', 'International Arbitration Rules', 'Conflict-of-Law Provisions']
    },
    {
      icon: Sliders,
      title: 'Dynamic Intake Forms',
      subtitle: 'Customized Questions',
      description: 'Intelligent forms adapt specifically per document type—gathering exact party details, duration terms, compensation, and custom scope instructions.',
      badge: 'Smart Intake',
      textColor: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      highlights: ['Context-Aware Questions', 'Mutual & Unilateral Options', 'Custom Instructions Input']
    },
    {
      icon: FileCheck2,
      title: 'Instant PDF Export',
      subtitle: 'Official PDF Download',
      description: 'Generate and download official PDF agreements ready for review, print formatting, or electronic signing with full vector layout precision.',
      badge: 'PDF Vector Engine',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      highlights: ['One-Click PDF Vector Export', 'Print-Ready A4 & Letter Page Layout', 'Text & Markdown Formats']
    },
    {
      icon: ShieldCheck,
      title: 'Private & Secure Memory',
      subtitle: 'Zero Cloud Storage',
      description: 'Your party names, commercial terms, and trade secrets are processed strictly in client session memory and never saved to external servers.',
      badge: 'Privacy Assurance',
      textColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      highlights: ['Client In-Memory Processing', 'Zero Data Retained for AI', 'Encrypted Local Execution']
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Engineered for Professional Use</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built for Legal Accuracy and Speed.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Replace static generic templates with context-driven pre-legal drafts tailored to your exact business relationship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="group relative p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3.5 rounded-xl ${pillar.bgColor} ${pillar.textColor} ring-1 ring-white/10`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold text-slate-400 border border-slate-700">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${pillar.textColor}`}>
                  {pillar.subtitle}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {pillar.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                      <div className={`w-1.5 h-1.5 rounded-full ${pillar.textColor} bg-current`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
