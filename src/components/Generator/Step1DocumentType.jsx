import React, { useState } from 'react';
import { DOCUMENT_TYPES, PROTECTIVE_TONES } from '../../data/documentTemplates';
import { Check, FileText, SlidersHorizontal, Search, Sparkles, ShieldCheck } from 'lucide-react';

export default function Step1DocumentType({ formData, updateFormData, onNext }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const selectedDoc = DOCUMENT_TYPES.find(d => d.id === formData.docType) || DOCUMENT_TYPES[0];

  // Extract unique categories
  const categories = ['All', ...new Set(DOCUMENT_TYPES.map(d => d.category))];

  // Filter templates based on search & category
  const filteredDocs = DOCUMENT_TYPES.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-slate-800">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <span>Step 1: Choose the Legal Paper You Need</span>
          </h3>
          <p className="text-slate-400 text-sm">
            Select a template below to start. Your paper will be generated in PDF format.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 ${
              selectedCategory === cat
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Document Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDocs.map((doc) => {
          const isSelected = formData.docType === doc.id;
          return (
            <div
              key={doc.id}
              onClick={() => {
                updateFormData('docType', doc.id);
                if (doc.variants && doc.variants.length > 0) {
                  updateFormData('variant', doc.variants[0].id);
                }
              }}
              className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between group ${
                isSelected
                  ? 'bg-gradient-to-b from-slate-900 to-indigo-950/60 border-indigo-500 ring-2 ring-indigo-500/30 shadow-xl shadow-indigo-500/10'
                  : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
                    {doc.category}
                  </span>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-md">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                <h4 className="font-bold text-white text-base mb-1.5 group-hover:text-indigo-300 transition-colors">
                  {doc.title}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{doc.description}</p>
              </div>

              <div className="text-[11px] text-indigo-400 flex items-center justify-between pt-3 border-t border-slate-800/80 font-mono">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>{doc.defaultClauses.length} Standard Rules</span>
                </div>
                <span className="text-slate-500 font-sans group-hover:text-indigo-300">
                  {isSelected ? 'Selected ✓' : 'Select →'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Document Variants */}
      {selectedDoc && selectedDoc.variants && selectedDoc.variants.length > 0 && (
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-lg">
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
            Choose Option for {selectedDoc.shortCode}:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {selectedDoc.variants.map((variant) => (
              <label
                key={variant.id}
                className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  formData.variant === variant.id
                    ? 'bg-indigo-950/60 border-indigo-500 text-white font-semibold shadow-md'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="docVariant"
                  value={variant.id}
                  checked={formData.variant === variant.id}
                  onChange={(e) => updateFormData('variant', e.target.value)}
                  className="accent-indigo-500"
                />
                <span className="text-xs">{variant.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Protection Level / Tone Choice */}
      <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-lg">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
          <SlidersHorizontal className="w-4 h-4 text-indigo-400" />
          <span>Protection Level & Tone</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PROTECTIVE_TONES.map((tone) => (
            <div
              key={tone.id}
              onClick={() => updateFormData('tone', tone.id)}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                formData.tone === tone.id
                  ? 'bg-indigo-950/60 border-indigo-500 text-white shadow-md'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="font-semibold text-xs text-white mb-1 flex items-center justify-between">
                <span>{tone.label}</span>
                {formData.tone === tone.id && <Check className="w-3.5 h-3.5 text-indigo-400" />}
              </div>
              <p className="text-[11px] leading-tight text-slate-400">{tone.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Step Action Button */}
      <div className="flex justify-end pt-4">
        <button
          onClick={onNext}
          className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] flex items-center gap-2"
        >
          <span>Continue to Step 2: Fill Details</span>
          <span>&rarr;</span>
        </button>
      </div>

    </div>
  );
}
