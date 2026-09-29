import React from 'react';
import { Scale, ShieldCheck, RefreshCw } from 'lucide-react';

export default function Header({ currentStep, onReset, isGeneratorActive, onStartGenerator, onGoHome }) {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3.5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={onGoHome || onReset}>
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 ring-1 ring-white/20">
            <Scale className="h-5.5 w-5.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-white tracking-tight">
                LegalGen <span className="text-indigo-400">AI</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-[10px] font-bold uppercase tracking-wider text-indigo-300">
                PRO GENERATOR
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Professional Pre-Legal Document Generator
            </p>
          </div>
        </div>

        {/* Generator Active Stepper Progress */}
        {isGeneratorActive && (
          <div className="flex items-center gap-2 sm:gap-4 bg-slate-900/90 px-4 py-2 rounded-2xl border border-slate-800 text-xs font-semibold">
            <div className={`flex items-center gap-1.5 ${currentStep === 1 ? 'text-indigo-400 font-bold' : currentStep > 1 ? 'text-emerald-400' : 'text-slate-500'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 1 ? 'bg-indigo-600 text-white' : currentStep > 1 ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'}`}>1</span>
              <span className="hidden sm:inline">Choose Template</span>
            </div>

            <span className="text-slate-700">&rarr;</span>

            <div className={`flex items-center gap-1.5 ${currentStep === 2 ? 'text-indigo-400 font-bold' : currentStep > 2 ? 'text-emerald-400' : 'text-slate-500'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 2 ? 'bg-indigo-600 text-white' : currentStep > 2 ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'}`}>2</span>
              <span className="hidden sm:inline">Fill Details</span>
            </div>

            <span className="text-slate-700">&rarr;</span>

            <div className={`flex items-center gap-1.5 ${currentStep === 3 ? 'text-indigo-400 font-bold' : 'text-slate-500'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 3 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>3</span>
              <span className="hidden sm:inline">Download PDF</span>
            </div>
          </div>
        )}

        {/* Top Action */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-800/40">
            <ShieldCheck className="w-4 h-4" />
            <span>100% In-Memory Privacy</span>
          </div>

          {isGeneratorActive ? (
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5 text-indigo-400" />
              <span>Start Over</span>
            </button>
          ) : (
            <button
              onClick={onStartGenerator}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md"
            >
              Get Started
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
