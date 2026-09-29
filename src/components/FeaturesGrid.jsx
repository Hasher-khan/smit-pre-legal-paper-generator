import React from 'react';
import { Compass, Sliders, ShieldCheck, Download, Clock, Globe } from 'lucide-react';

const FEATURES = [
  {
    icon: Compass,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    title: 'Jurisdiction Matching',
    description: 'Choose from US states, UK, Canada, India, Singapore, and more. The document automatically reflects the correct governing law.'
  },
  {
    icon: Sliders,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    title: 'Custom Clause Builder',
    description: 'Enter your own scope, terms, and special instructions. Each clause in the document is filled with your real information.'
  },
  {
    icon: Download,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    title: 'Instant PDF Download',
    description: 'Click one button to download a professionally formatted PDF. You can also copy the text or print directly from the browser.'
  },
  {
    icon: ShieldCheck,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    title: 'Attorney-Reviewed Templates',
    description: 'Every template is built using standard legal clauses. NDAs, Contractor Agreements, Cease & Desist, and more.'
  },
  {
    icon: Clock,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    title: 'Ready in Under 3 Minutes',
    description: 'Fill in the simple form and your document is generated instantly. No waiting, no sign-up required.'
  },
  {
    icon: Globe,
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    title: 'Completely Private',
    description: 'All processing happens inside your browser. We never store, send, or see your data. Your information stays with you.'
  }
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 mb-4">
            Why LegalGen AI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Everything you need to create a legal document
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto">
            We built the simplest way to create legal documents. No complicated legal jargon. No expensive hourly billing. Just fill in your details and go.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon: Icon, color, bg, border, title, description }, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50 hover:-translate-y-0.5"
            >
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${bg} border ${border} mb-4`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="font-bold text-white text-base mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
