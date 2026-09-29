import React, { useState, useEffect } from 'react';
import { Scale, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar({ onStartGenerator }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 ring-1 ring-white/20">
              <Scale className="h-5.5 w-5.5" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                LegalGen <span className="text-indigo-400">AI</span>
              </span>
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-semibold tracking-wider text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Pre-Legal Document Engine
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection('features')} className="hover:text-indigo-400 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('templates')} className="hover:text-indigo-400 transition-colors">
              Templates
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-indigo-400 transition-colors">
              How It Works
            </button>
          </div>

          {/* Essential CTA Button only - No useless buttons */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-400 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Attorney Drafted Templates</span>
            </div>

            <button
              onClick={onStartGenerator}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-indigo-200" />
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-indigo-200" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
