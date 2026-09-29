import React from 'react';
import { ShieldCheck, Award, CheckCircle, Users } from 'lucide-react';

export default function SocialProof() {
  const logos = [
    { name: 'Apex Founders', tag: 'YC Backed' },
    { name: 'Nexus SaaS Inc', tag: 'Series A' },
    { name: 'VentureScale', tag: 'Studio' },
    { name: 'FreelanceGuild', tag: '10k+ Members' },
    { name: 'OmniLegal AI', tag: 'Tech Partner' },
    { name: 'CloudCraft Labs', tag: 'Bootstrapped' },
  ];

  return (
    <section className="py-10 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <p className="text-center text-xs uppercase tracking-widest font-semibold text-slate-400 mb-8">
          Trusted by founders, freelancers, agencies, and small businesses worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-center opacity-85">
          {logos.map((logo, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-indigo-500/40 transition-all duration-200 group"
            >
              <span className="font-bold text-sm text-slate-300 group-hover:text-white transition-colors">
                {logo.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {logo.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Metrics Banner */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-800/50">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
            <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">45,000+</div>
              <div className="text-xs text-slate-400">Pre-Legal Drafts Generated</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
            <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">99.4%</div>
              <div className="text-xs text-slate-400">Clause Alignment Score</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/60">
            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">&lt; 3 Mins</div>
              <div className="text-xs text-slate-400">Average Turnaround Time</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
