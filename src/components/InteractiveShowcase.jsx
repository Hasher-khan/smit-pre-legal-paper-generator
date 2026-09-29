import React, { useState } from 'react';
import { Sparkles, Eye, Code, ArrowRight, ShieldCheck, Check, Layers, RefreshCw } from 'lucide-react';

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState('nda');
  const [demoInputs, setDemoInputs] = useState({
    partyA: 'Acme Software Corp',
    partyB: 'DevCraft Labs LLC',
    jurisdiction: 'California, USA',
    duration: '24 Months',
    scope: 'Exclusive SaaS algorithm & proprietary database schema evaluation.'
  });

  const handleInputChange = (field, value) => {
    setDemoInputs(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="showcase" className="py-20 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
            <Eye className="w-3.5 h-3.5" />
            <span>Interactive Live Engine Demo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            See Raw Input Transform into Structured Legal Power.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Test the live engine below. Change the raw business parameters on the left to see how clauses and jurisdictional references instantly restructure on the right.
          </p>
        </div>

        {/* Preset Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('nda')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'nda'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Non-Disclosure Agreement (NDA)
          </button>
          <button
            onClick={() => setActiveTab('contractor')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'contractor'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Independent Contractor
          </button>
          <button
            onClick={() => setActiveTab('cd')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'cd'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Cease & Desist Demand
          </button>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Raw Inputs */}
          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-indigo-400" />
                <span className="font-bold text-white text-base">Raw User Input Parameters</span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                Step Intake Sync
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Disclosing Party (Party A)
              </label>
              <input
                type="text"
                value={demoInputs.partyA}
                onChange={(e) => handleInputChange('partyA', e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Receiving Party (Party B)
              </label>
              <input
                type="text"
                value={demoInputs.partyB}
                onChange={(e) => handleInputChange('partyB', e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Governing Law
                </label>
                <select
                  value={demoInputs.jurisdiction}
                  onChange={(e) => handleInputChange('jurisdiction', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none transition-colors"
                >
                  <option value="California, USA">California, USA</option>
                  <option value="Delaware, USA">Delaware, USA</option>
                  <option value="New York, USA">New York, USA</option>
                  <option value="England & Wales">England & Wales</option>
                  <option value="Ontario, Canada">Ontario, Canada</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                  Term / Duration
                </label>
                <select
                  value={demoInputs.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none transition-colors"
                >
                  <option value="12 Months">12 Months</option>
                  <option value="24 Months">24 Months</option>
                  <option value="36 Months">36 Months</option>
                  <option value="Indefinite / Perpetual">Indefinite</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                Custom Purpose / Particulars
              </label>
              <textarea
                rows={3}
                value={demoInputs.scope}
                onChange={(e) => handleInputChange('scope', e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
              />
            </div>

            <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-800/40 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 animate-pulse" />
              <p className="text-xs text-indigo-200">
                AI Engine maps parameters into structured contractual clauses with zero manual editing required.
              </p>
            </div>
          </div>

          {/* Right Panel: Live Transformed Document Preview */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-200 font-legal relative overflow-hidden min-h-[500px]">
            
            {/* Stamp Overlay */}
            <div className="absolute top-6 right-6 border-2 border-indigo-600/30 text-indigo-700 text-[10px] font-mono tracking-widest font-extrabold px-3 py-1 rounded rotate-6 uppercase pointer-events-none">
              LIVE PRE-LEGAL DRAFT
            </div>

            <div className="space-y-4">
              <div className="text-center pb-4 border-b border-slate-200">
                <div className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold mb-1">
                  [STRUCTURED LEGAL PREVIEW]
                </div>
                <h3 className="text-xl font-bold font-serif-header text-slate-900 uppercase">
                  {activeTab === 'nda' && 'MUTUAL NON-DISCLOSURE AGREEMENT'}
                  {activeTab === 'contractor' && 'INDEPENDENT CONTRACTOR SERVICES AGREEMENT'}
                  {activeTab === 'cd' && 'DEMAND LETTER TO CEASE AND DESIST'}
                </h3>
              </div>

              {/* Document Recitals */}
              <div className="text-sm leading-relaxed text-slate-800 space-y-3">
                <p>
                  THIS AGREEMENT is made effective as of <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-sans text-xs font-semibold">Today's Date</span>, by and between:
                </p>
                
                <p className="pl-4 border-l-2 border-indigo-500 bg-slate-50 py-2 px-3 rounded text-slate-900 font-medium">
                  1. <strong className="text-indigo-950 bg-indigo-100 px-1 py-0.5 rounded font-sans text-xs">{demoInputs.partyA || '[PARTY A]'}</strong> ("Disclosing Party"); and<br/>
                  2. <strong className="text-indigo-950 bg-indigo-100 px-1 py-0.5 rounded font-sans text-xs">{demoInputs.partyB || '[PARTY B]'}</strong> ("Receiving Party").
                </p>

                <p className="italic text-slate-600 text-xs">
                  WHEREAS, Disclosing Party agrees to share proprietary information for the sole purpose of: <span className="bg-purple-100 text-purple-950 px-1.5 py-0.5 rounded font-sans not-italic font-semibold">{demoInputs.scope}</span>.
                </p>
              </div>

              {/* Clauses Section */}
              <div className="pt-2 space-y-3 border-t border-slate-200">
                <div className="font-bold text-xs font-sans uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <span>1. CONFIDENTIALITY & OBLIGATIONS</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold">Enforceable</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Receiving Party shall hold all Confidential Information in strict confidence for a term of <span className="bg-emerald-100 text-emerald-950 font-sans px-1.5 py-0.5 rounded font-bold">{demoInputs.duration}</span> from the Effective Date. Receiving Party shall not disclose or use such information except for the expressly permitted purpose.
                </p>

                <div className="font-bold text-xs font-sans uppercase tracking-wider text-slate-700 pt-2">
                  <span>2. GOVERNING LAW & JURISDICTION</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  This Agreement shall be governed by, construed, and enforced strictly in accordance with the substantive laws of <span className="bg-blue-100 text-blue-950 font-sans px-1.5 py-0.5 rounded font-bold">{demoInputs.jurisdiction}</span>, without regard to its principles of conflict of laws.
                </p>
              </div>

              {/* Signature Blocks */}
              <div className="pt-6 border-t border-slate-300 grid grid-cols-2 gap-6 text-xs font-sans">
                <div>
                  <div className="font-bold text-slate-900 mb-4">DISCLOSING PARTY</div>
                  <div className="border-b border-slate-400 mb-1 py-1 text-slate-600 font-mono text-[11px]">By: [Authorized Signature]</div>
                  <div className="text-slate-500 font-medium">Name: {demoInputs.partyA}</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-4">RECEIVING PARTY</div>
                  <div className="border-b border-slate-400 mb-1 py-1 text-slate-600 font-mono text-[11px]">By: [Authorized Signature]</div>
                  <div className="text-slate-500 font-medium">Name: {demoInputs.partyB}</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
