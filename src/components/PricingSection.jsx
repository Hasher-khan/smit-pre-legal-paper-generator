import React from 'react';
import { Check, Sparkles, ArrowRight, Shield } from 'lucide-react';

export default function PricingSection({ onStartGenerator }) {
  const plans = [
    {
      name: 'Free Trial',
      price: '$0',
      period: 'forever',
      description: 'Perfect for quick individual contract drafts and single NDAs.',
      popular: false,
      features: [
        '3 Pre-Legal Documents / Month',
        'Standard US & UK Jurisdiction Schemas',
        'Markdown & Text File Export',
        'Persistent Legal Safeguard Warnings',
        'In-Memory Client Privacy'
      ],
      buttonText: 'Start Free Draft',
      buttonVariant: 'secondary'
    },
    {
      name: 'Pro Founder',
      price: '$29',
      period: 'per month',
      description: 'For startups, agencies, and active freelancers needing frequent agreements.',
      popular: true,
      features: [
        'Unlimited Pre-Legal Document Generations',
        'All 50 US States + 25 Global Jurisdictions',
        'Custom Clause Risk & Scope Scanner',
        'Instant Single-Click Print to PDF',
        'Protective Tone Customization (Strict / Balanced)',
        'Priority AI Drafting Speed'
      ],
      buttonText: 'Launch Pro Generator',
      buttonVariant: 'primary'
    },
    {
      name: 'Legal Studio',
      price: '$89',
      period: 'per month',
      description: 'For growing businesses and advisory firms managing multiple client accounts.',
      popular: false,
      features: [
        'Everything in Pro Founder',
        'Custom Company Branding Header Logos',
        'Team Collaboration & Draft Shares',
        'Bulk Batch Document Export',
        'Dedicated Attorney Review Handoff Format'
      ],
      buttonText: 'Contact Studio Team',
      buttonVariant: 'secondary'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900/40 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Transparent SaaS Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Affordable Legal-Tech for Every Growth Stage.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Save thousands in billable attorney hours on initial draft structuring. Upgrade whenever your business scales.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-slate-900 border-2 border-indigo-500 shadow-2xl shadow-indigo-600/20 -translate-y-2'
                  : 'bg-slate-950 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular Choice
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-xs mb-6 min-h-[36px]">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-slate-400 text-xs">{plan.period}</span>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-800 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onStartGenerator}
                className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  plan.buttonVariant === 'primary'
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                }`}
              >
                <span>{plan.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
