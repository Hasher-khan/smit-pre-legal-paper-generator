import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, FileText, Globe, Lock, CheckCircle2, Zap } from 'lucide-react';

export default function Hero({ onStartGenerator }) {
  const scrollToTemplates = () => {
    document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[350px] h-[350px] bg-purple-700/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] bg-blue-600/6 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-semibold text-indigo-300 mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
          </span>
          AI-Powered Pre-Legal Document Generator
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-5xl mx-auto mb-6">
          Create Legal Documents{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
            in Minutes
          </span>{' '}
          — Not Days.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Enter your information. Choose your document type. Get a professionally formatted legal paper you can download as a PDF — instantly, for free.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onStartGenerator}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/25 hover:shadow-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5 text-base"
          >
            <Sparkles className="w-5 h-5 text-indigo-200" />
            <span>Start Creating — It's Free</span>
            <ArrowRight className="w-5 h-5 text-indigo-200 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={scrollToTemplates}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 text-base hover:text-white"
          >
            <FileText className="w-5 h-5 text-indigo-400" />
            <span>Browse Templates</span>
          </button>
        </div>

        {/* How simple it is — 3 steps */}
        <div id="how-it-works" className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
          {[
            { step: '1', icon: FileText, label: 'Choose Your Document', desc: 'NDA, Contractor Agreement, or more' },
            { step: '2', icon: Zap, label: 'Fill In Your Details', desc: 'Names, dates, and key terms only' },
            { step: '3', icon: CheckCircle2, label: 'Download as PDF', desc: 'Professional, ready-to-sign format' },
          ].map(({ step, icon: Icon, label, desc }) => (
            <div key={step} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/60 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-sm">
                {step}
              </div>
              <Icon className="w-5 h-5 text-indigo-400" />
              <div className="font-semibold text-white text-sm text-center">{label}</div>
              <div className="text-slate-400 text-xs text-center">{desc}</div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-8 border-t border-slate-800/80">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Attorney-Drafted Templates</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
            <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Multiple Jurisdictions</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
            <Lock className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Private — No Data Stored</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>PDF Export Included</span>
          </div>
        </div>

      </div>
    </section>
  );
}
