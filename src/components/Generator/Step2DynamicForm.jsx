import React, { useState } from 'react';
import { JURISDICTIONS, DOCUMENT_TYPES } from '../../data/documentTemplates';
import { Building2, UserCheck, Calendar, MapPin, FileEdit, ArrowLeft, Sparkles, Layers, Eye, CheckCircle2 } from 'lucide-react';

export default function Step2DynamicForm({ formData, updateFormData, onBack, onGenerate }) {
  const currentDoc = DOCUMENT_TYPES.find(d => d.id === formData.docType) || DOCUMENT_TYPES[0];
  const [showLivePreview, setShowLivePreview] = useState(true);

  const handleNestedChange = (parent, field, value) => {
    updateFormData(parent, {
      ...formData[parent],
      [field]: value
    });
  };

  const handleTermsChange = (field, value) => {
    updateFormData('terms', {
      ...formData.terms,
      [field]: value
    });
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Configuring: {currentDoc.title}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
            Step 2: Enter Your Information
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Fill in the details below. Watch your paper format in real-time.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowLivePreview(!showLivePreview)}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-indigo-400" />
            <span>{showLivePreview ? 'Hide Live Preview' : 'Show Live Preview'}</span>
          </button>

          <span className="hidden sm:inline px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 font-mono text-xs border border-indigo-800">
            {formData.jurisdiction}
          </span>
        </div>
      </div>

      {/* Grid Layout: Left Inputs + Right Live Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form Inputs Column */}
        <div className={`${showLivePreview ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-6`}>
          
          {/* Party A & Party B Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Party A Card */}
            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2.5">
                <Building2 className="w-4 h-4" />
                <span>First Party (You / Your Business)</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name or Company Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Software Corp"
                  value={formData.partyA.name}
                  onChange={(e) => handleNestedChange('partyA', 'name', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Business Entity Type
                </label>
                <select
                  value={formData.partyA.entityType}
                  onChange={(e) => handleNestedChange('partyA', 'entityType', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                >
                  <option value="Corporation (Inc / Corp)">Corporation</option>
                  <option value="Limited Liability Company (LLC)">LLC</option>
                  <option value="Individual Person / Freelancer">Individual Person</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  City, State or Address
                </label>
                <input
                  type="text"
                  placeholder="e.g. San Francisco, CA"
                  value={formData.partyA.address}
                  onChange={(e) => handleNestedChange('partyA', 'address', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Party B Card */}
            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2.5">
                <UserCheck className="w-4 h-4" />
                <span>Second Party (Other Person / Business)</span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Their Name or Company Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jane Smith Solutions"
                  value={formData.partyB.name}
                  onChange={(e) => handleNestedChange('partyB', 'name', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Business Entity Type
                </label>
                <select
                  value={formData.partyB.entityType}
                  onChange={(e) => handleNestedChange('partyB', 'entityType', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                >
                  <option value="Corporation (Inc / Corp)">Corporation</option>
                  <option value="Limited Liability Company (LLC)">LLC</option>
                  <option value="Individual Person / Freelancer">Individual Person</option>
                  <option value="Partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  City, State or Address
                </label>
                <input
                  type="text"
                  placeholder="e.g. Austin, TX"
                  value={formData.partyB.address}
                  onChange={(e) => handleNestedChange('partyB', 'address', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none transition-colors"
                />
              </div>
            </div>

          </div>

          {/* Governing Law & Timing */}
          <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-4 shadow-lg">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2.5">
              <MapPin className="w-4 h-4" />
              <span>Governing State / Country Law & Dates</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  State / Country Law *
                </label>
                <select
                  value={formData.jurisdiction}
                  onChange={(e) => updateFormData('jurisdiction', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                >
                  {JURISDICTIONS.map((j) => (
                    <option key={j.code} value={j.code}>
                      {j.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={formData.terms.effectiveDate}
                  onChange={(e) => handleTermsChange('effectiveDate', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Duration / Term
                </label>
                <input
                  type="text"
                  placeholder="e.g. 24 Months or 1 Year"
                  value={formData.terms.duration}
                  onChange={(e) => handleTermsChange('duration', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Dynamic Particulars */}
          <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-4 shadow-lg">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2.5">
              <Layers className="w-4 h-4" />
              <span>Key Scope & Particulars</span>
            </div>

            {formData.docType === 'nda' && (
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Secret Information Scope
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Proprietary software code, database design, and business evaluation."
                  value={formData.terms.customScope}
                  onChange={(e) => handleTermsChange('customScope', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                />
              </div>
            )}

            {formData.docType === 'contractor' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Payment Rate / Amount
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. $5,000 fixed fee or $120/hr"
                      value={formData.terms.rate}
                      onChange={(e) => handleTermsChange('rate', e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Notice Period to Cancel
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 14 Days Notice"
                      value={formData.terms.noticePeriod}
                      onChange={(e) => handleTermsChange('noticePeriod', e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Work Description / Deliverables
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Full-stack web application development, UI design, database migration, and cloud deployment."
                    value={formData.terms.customScope}
                    onChange={(e) => handleTermsChange('customScope', e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>
            )}

            {formData.docType === 'cease_desist' && (
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Compliance Deadline
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 7 Business Days from today"
                    value={formData.terms.deadline}
                    onChange={(e) => handleTermsChange('deadline', e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Description of Violation / Copied Work
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Unauthorized copy and public distribution of proprietary code on website X."
                    value={formData.terms.customScope}
                    onChange={(e) => handleTermsChange('customScope', e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>
            )}

            {formData.docType === 'partnership_memo' && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Partner A Equity (%)
                    </label>
                    <input
                      type="text"
                      placeholder="50"
                      value={formData.terms.equityA}
                      onChange={(e) => handleTermsChange('equityA', e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Partner B Equity (%)
                    </label>
                    <input
                      type="text"
                      placeholder="50"
                      value={formData.terms.equityB}
                      onChange={(e) => handleTermsChange('equityB', e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Company Description & Profit Allocation
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Co-founding a SaaS business, building technology, and sharing profits 50/50."
                    value={formData.terms.customScope}
                    onChange={(e) => handleTermsChange('customScope', e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>
            )}

            {formData.docType === 'terms_privacy' && (
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Website Description & Rules
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Web platform providing online legal paper generation tools. Total liability capped at $100."
                  value={formData.terms.customScope}
                  onChange={(e) => handleTermsChange('customScope', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                />
              </div>
            )}
          </div>

          {/* Extra Custom Notes */}
          <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-lg">
            <div className="flex items-center gap-2 text-slate-300 font-bold text-xs uppercase tracking-wider">
              <FileEdit className="w-4 h-4 text-indigo-400" />
              <span>Extra Custom Rules (Optional)</span>
            </div>
            <textarea
              rows={2}
              placeholder="Enter any extra custom clauses or instructions..."
              value={formData.customClauses}
              onChange={(e) => updateFormData('customClauses', e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
            />
          </div>

        </div>

        {/* Right Column: Real-Time Split Preview */}
        {showLivePreview && (
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-white text-slate-900 p-6 rounded-2xl border border-slate-300 shadow-2xl font-legal text-xs space-y-4 max-h-[600px] overflow-y-auto relative">
              <div className="absolute top-4 right-4 bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-[10px] font-sans font-bold uppercase">
                Real-Time Preview
              </div>

              <div className="text-center pb-3 border-b border-slate-300">
                <div className="text-[10px] font-mono uppercase text-indigo-600 font-bold">
                  [DOCUMENT PREVIEW]
                </div>
                <h4 className="font-bold font-serif-header text-sm text-slate-900 uppercase pt-1">
                  {currentDoc.title}
                </h4>
              </div>

              <div className="space-y-2 leading-relaxed text-slate-800">
                <p>
                  THIS AGREEMENT is made effective on <span className="bg-amber-100 px-1 py-0.5 rounded font-sans text-[11px] font-semibold">{formData.terms.effectiveDate || 'Today'}</span>, by and between:
                </p>

                <div className="p-2.5 rounded bg-slate-50 border-l-2 border-indigo-500 space-y-1">
                  <div><strong>Party A:</strong> <span className="bg-indigo-100 px-1 py-0.5 rounded font-sans font-semibold">{formData.partyA.name || '[PARTY A]'}</span> ({formData.partyA.entityType})</div>
                  <div><strong>Party B:</strong> <span className="bg-indigo-100 px-1 py-0.5 rounded font-sans font-semibold">{formData.partyB.name || '[PARTY B]'}</span> ({formData.partyB.entityType})</div>
                </div>

                <div>
                  <strong>Governing Law:</strong> <span className="bg-blue-100 px-1 py-0.5 rounded font-sans font-semibold">{formData.jurisdiction}</span>
                </div>

                {formData.terms.customScope && (
                  <div className="pt-2">
                    <strong>Scope & Details:</strong>
                    <p className="bg-purple-50 p-2 rounded border border-purple-200 mt-1 italic text-slate-700">
                      "{formData.terms.customScope}"
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-300 grid grid-cols-2 gap-4 text-[10px] font-sans">
                <div>
                  <div className="font-bold">PARTY A SIGNATURE</div>
                  <div className="border-b border-slate-400 my-1 py-1 text-slate-400 font-mono">[Signature]</div>
                  <div>{formData.partyA.name || '[PARTY A]'}</div>
                </div>
                <div>
                  <div className="font-bold">PARTY B SIGNATURE</div>
                  <div className="border-b border-slate-400 my-1 py-1 text-slate-400 font-mono">[Signature]</div>
                  <div>{formData.partyB.name || '[PARTY B]'}</div>
                </div>
              </div>

            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Updates automatically as you type your information.</span>
            </div>
          </div>
        )}

      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Step 1</span>
        </button>

        <button
          onClick={onGenerate}
          className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02]"
        >
          <Sparkles className="w-4 h-4 text-indigo-200" />
          <span>Generate Legal Paper PDF &rarr;</span>
        </button>
      </div>

    </div>
  );
}
