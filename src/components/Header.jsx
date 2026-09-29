import React, { useState } from 'react';
import { Scale, ShieldCheck, RefreshCw, Home, ChevronRight } from 'lucide-react';

export default function Header({ currentStep, onReset, isGeneratorActive, onGoHome }) {
  const steps = [
    { num: 1, label: 'Choose Template' },
    { num: 2, label: 'Fill Details' },
    { num: 3, label: 'Download PDF' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand */}
          <button
            onClick={onGoHome}
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-md">
              <Scale className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-extrabold text-white text-lg tracking-tight hidden sm:block">
              LegalGen <span className="text-indigo-400">AI</span>
            </span>
          </button>

          {/* Step Progress */}
          {isGeneratorActive && (
            <div className="flex items-center gap-1 sm:gap-2">
              {steps.map((step, idx) => (
                <React.Fragment key={step.num}>
                  <div className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    currentStep === step.num
                      ? 'bg-indigo-600/20 border border-indigo-500/50 text-indigo-300'
                      : currentStep > step.num
                      ? 'text-emerald-400'
                      : 'text-slate-500'
                  }`}>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                      currentStep === step.num
                        ? 'bg-indigo-600 text-white'
                        : currentStep > step.num
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-500'
                    }`}>
                      {currentStep > step.num ? '✓' : step.num}
                    </span>
                    <span className="hidden sm:inline">{step.label}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <ChevronRight className={`w-3.5 h-3.5 ${currentStep > step.num ? 'text-emerald-500/50' : 'text-slate-700'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Right Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden md:flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Private & Secure</span>
            </div>
            <button
              onClick={onGoHome}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all"
              title="Back to Home"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Home</span>
            </button>
            <button
              onClick={onReset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all"
              title="Start Over"
            >
              <RefreshCw className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Start Over</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
