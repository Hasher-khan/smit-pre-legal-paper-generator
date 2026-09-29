import React from 'react';
import { Scale, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function Footer({ onStartGenerator }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-14 pb-10 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white shadow-lg">
                <Scale className="h-5 w-5" />
              </div>
              <span className="font-extrabold text-xl text-white">
                LegalGen <span className="text-indigo-400">AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Professional, jurisdiction-aware pre-legal document generator for business contracts and agreements.
            </p>
          </div>

          {/* Document Categories */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Legal Paper Types</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={onStartGenerator} className="hover:text-white transition-colors">Non-Disclosure Agreements (NDA)</button></li>
              <li><button onClick={onStartGenerator} className="hover:text-white transition-colors">Independent Contractor Agreements</button></li>
              <li><button onClick={onStartGenerator} className="hover:text-white transition-colors">Website Terms & Privacy Policy</button></li>
              <li><button onClick={onStartGenerator} className="hover:text-white transition-colors">Cease & Desist Warning Notices</button></li>
              <li><button onClick={onStartGenerator} className="hover:text-white transition-colors">Founder Partnership Agreements</button></li>
            </ul>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#features" className="hover:text-white transition-colors">Platform Features</a></li>
              <li><a href="#templates" className="hover:text-white transition-colors">Template Library</a></li>
              <li><button onClick={onStartGenerator} className="hover:text-white transition-colors">Launch PDF Generator</button></li>
            </ul>
          </div>

          {/* Privacy Box */}
          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-2.5">
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>In-Memory Privacy</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your party details and commercial agreements are processed in local session memory and never saved to cloud servers.
            </p>
          </div>

        </div>

        {/* Mandatory Legal Disclaimer Banner */}
        <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-900/50 text-amber-200/90 text-xs leading-relaxed mb-8 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-300 font-semibold block mb-0.5">Mandatory Legal Notice:</strong>
            Disclaimer: This tool generates pre-legal drafts and templates for informational purposes only and does not constitute formal legal advice. Always consult a licensed attorney in your jurisdiction before signing or executing binding legal agreements.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} LegalGen AI Engine • Professional Legal Paper Generator
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">All Rights Reserved</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
