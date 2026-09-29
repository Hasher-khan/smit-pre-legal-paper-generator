import React from 'react';
import { DOCUMENT_TYPES } from '../data/documentTemplates';
import { FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TemplateExplorer({ onSelectTemplate }) {
  return (
    <section id="templates" className="py-24 relative bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Pre-Legal Document Templates</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Legal Paper Template Library.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Select a template below to open the generator form pre-configured with jurisdiction-aware rules.
          </p>
        </div>

        {/* Template Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCUMENT_TYPES.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                    {doc.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                  <span>{doc.title}</span>
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {doc.description}
                </p>

                {/* Standard Rules */}
                <div className="mb-6 pt-4 border-t border-slate-800">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Included Clauses:
                  </div>
                  <ul className="space-y-1.5">
                    {doc.defaultClauses.slice(0, 3).map((clause, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span className="truncate">{clause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectTemplate(doc.id)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-indigo-600 text-white font-semibold text-sm transition-all duration-200 group-hover:shadow-lg group-hover:shadow-indigo-600/30"
              >
                <span>Use {doc.shortCode} Template</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
