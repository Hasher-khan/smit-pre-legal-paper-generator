import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Everything you need to know about LegalGen AI pre-legal document creation, safety, and jurisdiction compliance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-white text-base hover:text-indigo-300 transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-indigo-400 shrink-0 transition-transform duration-200 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
