import React, { useState, useEffect } from 'react';
import { Scale, Sparkles, FileText, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar({ onStartGenerator }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-slate-950/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Brand */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
              <Scale className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-extrabold text-white text-lg tracking-tight">
              LegalGen <span className="text-indigo-400">AI</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollTo('features')} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Features</button>
            <button onClick={() => scrollTo('templates')} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Templates</button>
            <button onClick={() => scrollTo('how-it-works')} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">How It Works</button>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onStartGenerator}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-indigo-600/30 hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              Get Started Free
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-xl border-b border-slate-800 px-4 pb-6 pt-2 space-y-1">
          <button onClick={() => scrollTo('features')} className="block w-full text-left py-3 text-slate-300 hover:text-white text-sm font-medium border-b border-slate-800/50">Features</button>
          <button onClick={() => scrollTo('templates')} className="block w-full text-left py-3 text-slate-300 hover:text-white text-sm font-medium border-b border-slate-800/50">Templates</button>
          <button onClick={() => scrollTo('how-it-works')} className="block w-full text-left py-3 text-slate-300 hover:text-white text-sm font-medium border-b border-slate-800/50">How It Works</button>
          <button
            onClick={() => { onStartGenerator(); setMobileOpen(false); }}
            className="w-full mt-3 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all"
          >
            Get Started Free →
          </button>
        </div>
      )}
    </nav>
  );
}
