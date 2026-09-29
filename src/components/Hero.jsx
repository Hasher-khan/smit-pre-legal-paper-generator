import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, FileText, Globe, Lock, CheckCircle2 } from 'lucide-react';

export default function Hero({ onStartGenerator }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs font-semibold text-indigo-300 shadow-xl mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span>Professional Pre-Legal Document Generator</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto mb-6">
          Generate Custom <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Pre-Legal Papers</span> in Minutes.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Draft structured non-disclosure agreements, contractor contracts, cease & desist notices, and website policies tailored to your jurisdiction and exported directly as PDF.
        </p>

        {/* Dual CTAs - Essential Buttons Only */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <button
            onClick={onStartGenerator}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 transition-all duration-200 transform hover:-translate-y-0.5 text-base"
          >
            <Sparkles className="w-5 h-5 text-indigo-200" />
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5 text-indigo-200" />
          </button>

          <button
            onClick={() => scrollToSection('templates')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all duration-200 text-base hover:text-white"
          >
            <FileText className="w-5 h-5 text-indigo-400" />
            <span>View Templates</span>
          </button>
        </div>

        {/* Key Feature Trust Pills (Real Features Only) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
          <div className="flex items-center justify-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Attorney-Drafted Templates</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
            <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>50 US States & Int'l Laws</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
            <Lock className="w-4 h-4 text-purple-400 shrink-0" />
            <span>100% In-Memory Privacy</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Direct Vector PDF Export</span>
          </div>
        </div>

      </div>
    </section>
  );
}
