import React from 'react';
import { DOCUMENT_TYPES } from '../data/documentTemplates';
import { FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

const CARD_COLORS = [
  { accent: 'border-t-indigo-500', iconBg: 'bg-indigo-500/10', iconColor: 'text-indigo-400', badgeBg: 'bg-indigo-500/10 text-indigo-300' },
  { accent: 'border-t-purple-500', iconBg: 'bg-purple-500/10', iconColor: 'text-purple-400', badgeBg: 'bg-purple-500/10 text-purple-300' },
  { accent: 'border-t-emerald-500', iconBg: 'bg-emerald-500/10', iconColor: 'text-emerald-400', badgeBg: 'bg-emerald-500/10 text-emerald-300' },
  { accent: 'border-t-blue-500', iconBg: 'bg-blue-500/10', iconColor: 'text-blue-400', badgeBg: 'bg-blue-500/10 text-blue-300' },
  { accent: 'border-t-amber-500', iconBg: 'bg-amber-500/10', iconColor: 'text-amber-400', badgeBg: 'bg-amber-500/10 text-amber-300' },
];

export default function TemplateExplorer({ onSelectTemplate }) {
  return (
    <section id="templates" className="py-24 relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 mb-4">
            Available Templates
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Choose the right document for your needs
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Select any template below to get started. We will guide you through the information needed to create it.
          </p>
        </div>

        {/* Template Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCUMENT_TYPES.map((doc, idx) => {
            const colors = CARD_COLORS[idx % CARD_COLORS.length];
            return (
              <div
                key={doc.id}
                className={`group relative flex flex-col bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50 hover:-translate-y-1`}
              >
                {/* Top accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r from-transparent ${colors.accent} to-transparent`} />
                
                <div className="p-6 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${colors.iconBg}`}>
                      <FileText className={`w-5 h-5 ${colors.iconColor}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider font-mono ${colors.badgeBg}`}>
                        {doc.shortCode}
                      </span>
                      {doc.popular && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-bold text-white text-base mb-2 leading-snug">{doc.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{doc.description}</p>

                  {/* Default Clauses */}
                  <div className="space-y-1.5 mb-5">
                    {doc.defaultClauses.slice(0, 3).map((clause, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{clause}</span>
                      </div>
                    ))}
                    {doc.defaultClauses.length > 3 && (
                      <div className="text-xs text-slate-500 pl-5">+ {doc.defaultClauses.length - 3} more clauses</div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onSelectTemplate(doc.id)}
                    className="group/btn w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-indigo-600 border border-slate-700 hover:border-indigo-500 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200"
                  >
                    <span>Start with this template</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-400 text-sm mb-4">Not sure which template to choose? Start from the beginning.</p>
          <button
            onClick={() => onSelectTemplate(null)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/20 transition-all hover:-translate-y-0.5"
          >
            Browse All Templates in the Generator
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
