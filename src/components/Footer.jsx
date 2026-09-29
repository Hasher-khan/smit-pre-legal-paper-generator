import React from 'react';
import { Scale, ShieldCheck, FileText, Mail } from 'lucide-react';

export default function Footer({ onStartGenerator }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/80 mt-8">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <Scale className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                LegalGen <span className="text-indigo-400">AI</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              A free tool to help founders, freelancers, and small businesses create basic pre-legal document drafts quickly and easily.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>No account needed. Completely free.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-sm uppercase tracking-wider">Quick Links</h3>
            <div className="space-y-2.5">
              {[
                { label: 'Features', id: 'features' },
                { label: 'Templates', id: 'templates' },
                { label: 'How It Works', id: 'how-it-works' },
              ].map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={onStartGenerator}
                className="block text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors"
              >
                Start Creating →
              </button>
            </div>
          </div>

          {/* Documents */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-sm uppercase tracking-wider">Document Types</h3>
            <div className="space-y-2.5">
              {['Non-Disclosure Agreement', 'Contractor Agreement', 'Website Terms & Privacy', 'Cease & Desist Notice', 'Founder Partnership Memo'].map((name) => (
                <div key={name} className="flex items-center gap-2 text-slate-400 text-sm">
                  <FileText className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-slate-800 pt-8 space-y-4">
          <div className="bg-slate-900/60 border border-amber-600/20 rounded-xl p-4 text-xs text-slate-400 leading-relaxed">
            <strong className="text-amber-400">Legal Disclaimer:</strong> LegalGen AI generates pre-legal draft templates for informational and drafting assistance purposes only. These documents are <strong className="text-slate-300">not legal advice</strong> and do not create an attorney-client relationship. Please have all documents reviewed by a licensed attorney in your jurisdiction before signing or relying on them for any legal purpose.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>© {currentYear} LegalGen AI. Free pre-legal document drafting tool.</div>
            <div className="flex items-center gap-4">
              <span>Built with care for small businesses & founders.</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
