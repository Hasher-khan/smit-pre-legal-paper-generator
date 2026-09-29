import React, { useState, useEffect, useRef } from 'react';
import PersistentWarningBox from './PersistentWarningBox';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { 
  Sparkles, Copy, Download, Printer, Edit3, Check, RefreshCw, 
  ShieldCheck, FileText, ArrowLeft, Eye, FileCheck2, Loader2
} from 'lucide-react';

export default function Step3OutputDashboard({ 
  documentData, 
  isGenerating, 
  onBackToForm, 
  onRegenerate 
}) {
  const [copied, setCopied] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editableDoc, setEditableDoc] = useState(documentData);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStepText, setLoadingStepText] = useState("Initializing legal drafting sequence...");
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [selectedClauseInspection, setSelectedClauseInspection] = useState(null);

  const documentRef = useRef(null);

  useEffect(() => {
    if (documentData) {
      setEditableDoc(documentData);
    }
  }, [documentData]);

  // Simulated drafting sequence animation
  useEffect(() => {
    if (isGenerating) {
      setLoadingProgress(25);
      setLoadingStepText("Applying statutory rules for jurisdiction...");
      
      const t1 = setTimeout(() => {
        setLoadingProgress(65);
        setLoadingStepText("Structuring legal recitals and defined terms...");
      }, 400);

      const t2 = setTimeout(() => {
        setLoadingProgress(100);
        setLoadingStepText("Finalizing document reference and PDF layout...");
      }, 900);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [isGenerating]);

  // Fallback active document object
  const activeDoc = editableDoc || documentData;

  if (!activeDoc && !isGenerating) {
    return (
      <div className="text-center py-12 space-y-4 bg-slate-900/90 rounded-2xl border border-slate-800 p-8">
        <p className="text-slate-300 text-sm">No document generated yet. Please enter your details in Step 2.</p>
        <button 
          onClick={onBackToForm} 
          className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-all"
        >
          &larr; Return to Step 2: Fill Details
        </button>
      </div>
    );
  }

  // Build full raw text representation
  const getFullTextDocument = () => {
    const doc = activeDoc;
    if (!doc) return "";

    let fullText = `${doc.docTitle}\nRef ID: ${doc.docRefId}\nDate: ${doc.dateStr}\n\n`;
    fullText += `--- RECITALS & PARTIES ---\n${doc.recitals}\n\n`;
    
    if (doc.definedTerms && doc.definedTerms.length > 0) {
      fullText += `--- DEFINED TERMS ---\n`;
      doc.definedTerms.forEach(dt => {
        fullText += `"${dt.term}": ${dt.definition}\n`;
      });
      fullText += `\n`;
    }

    fullText += `--- OPERATIVE CLAUSES ---\n`;
    if (doc.operativeClauses) {
      doc.operativeClauses.forEach(clause => {
        fullText += `${clause.num}\n${clause.content}\n\n`;
      });
    }

    fullText += `--- GOVERNING LAW & ARBITRATION ---\n${doc.disputeResolution}\n\n`;
    fullText += `--- EXECUTION & SIGNATURES ---\n${doc.closingText}\n\n`;
    fullText += `PARTY A: ${doc.partyA}\nBy: _______________________\n\n`;
    fullText += `PARTY B: ${doc.partyB}\nBy: _______________________\n\n`;
    fullText += `\nDisclaimer: Generated on LegalGen AI. Attorney review required prior to execution.`;
    return fullText;
  };

  const handleCopy = () => {
    const text = getFullTextDocument();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadText = (format) => {
    const text = getFullTextDocument();
    const blob = new Blob([text], { type: format === 'md' ? 'text/markdown' : 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(activeDoc?.docTitle || 'document').toLowerCase().replace(/[^a-z0-9]/g, '_')}_${activeDoc?.docRefId || 'draft'}.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Direct PDF Export using jsPDF + html2canvas
  const handleExportPdf = async () => {
    if (!documentRef.current) return;
    setIsExportingPdf(true);

    try {
      const element = documentRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save(`${(activeDoc?.docTitle || 'document').toLowerCase().replace(/[^a-z0-9]/g, '_')}_${activeDoc?.docRefId || 'draft'}.pdf`);
    } catch (err) {
      console.error('PDF Generation Error:', err);
      window.print();
    } finally {
      setIsExportingPdf(false);
    }
  };

  const handleNativePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">

      {/* Loading animation state */}
      {isGenerating ? (
        <div className="py-20 text-center space-y-6 bg-slate-900/90 rounded-3xl border border-slate-800 p-8 shadow-2xl">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20 animate-ping"></div>
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-indigo-600/40">
              <Sparkles className="w-9 h-9 animate-spin-slow" />
            </div>
          </div>

          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-xl font-bold text-white">
              Generating Legal Paper & PDF...
            </h3>
            <p className="text-xs font-mono text-indigo-300">
              {loadingStepText}
            </p>
          </div>

          <div className="max-w-md mx-auto bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800">
            <div 
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 h-full transition-all duration-300 rounded-full"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      ) : activeDoc ? (
        <>
          {/* Export & Action Toolbar */}
          <div className="no-print bg-slate-900 p-5 rounded-2xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-xl">
            
            <div className="flex items-center gap-3">
              <button
                onClick={onBackToForm}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Edit Details"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Legal Paper Ready • Ref: {activeDoc.docRefId}
                </span>
                <h3 className="text-lg font-bold text-white truncate max-w-md">
                  {activeDoc.docTitle}
                </h3>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setEditMode(!editMode)}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                  editMode
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{editMode ? 'Done Editing' : 'Edit Text'}</span>
              </button>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-indigo-400" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>

              <button
                onClick={() => handleDownloadText('txt')}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>.TXT</span>
              </button>

              <button
                onClick={handleNativePrint}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
              >
                <Printer className="w-3.5 h-3.5 text-amber-400" />
                <span>Print</span>
              </button>

              {/* PDF Export Button */}
              <button
                onClick={handleExportPdf}
                disabled={isExportingPdf}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 transition-all disabled:opacity-50 hover:scale-[1.02]"
              >
                {isExportingPdf ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Rendering PDF...</span>
                  </>
                ) : (
                  <>
                    <FileCheck2 className="w-4 h-4 text-indigo-200" />
                    <span>Download PDF Document</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Persistent Attorney Warning Notice */}
          <div className="no-print">
            <PersistentWarningBox />
          </div>

          {/* Formatted Legal Canvas (Captured for PDF and Printing) */}
          <div 
            ref={documentRef}
            id="pdf-document-canvas"
            className="bg-white text-slate-950 p-8 sm:p-14 rounded-2xl shadow-2xl border border-slate-300 font-legal print-document-only space-y-6 relative"
          >
            
            {/* Header */}
            <div className="text-center pb-6 border-b-2 border-slate-900 space-y-1">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                OFFICIAL PRE-LEGAL DRAFT • REF ID: {activeDoc.docRefId} • JURISDICTION: {activeDoc.jurisdictionName}
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold font-serif-header text-slate-900 tracking-tight uppercase pt-1">
                {activeDoc.docTitle}
              </h1>
              <div className="text-xs font-serif italic text-slate-700 pt-1">
                Executed and Effective as of {activeDoc.dateStr}
              </div>
            </div>

            {/* Recitals Section */}
            <div className="space-y-2 text-sm leading-relaxed text-slate-900">
              <h2 className="font-bold font-sans text-xs uppercase tracking-wider text-slate-800 pt-2 border-b border-slate-200 pb-1">
                RECITALS AND PARTIES
              </h2>
              {editMode ? (
                <textarea
                  rows={6}
                  value={activeDoc.recitals}
                  onChange={(e) => setEditableDoc({ ...activeDoc, recitals: e.target.value })}
                  className="w-full bg-slate-50 border border-indigo-400 p-3 rounded font-legal text-sm text-slate-900 focus:outline-none"
                />
              ) : (
                <p className="whitespace-pre-line text-slate-800">
                  {activeDoc.recitals}
                </p>
              )}
            </div>

            {/* Defined Terms Section */}
            {activeDoc.definedTerms && activeDoc.definedTerms.length > 0 && (
              <div className="space-y-3 pt-4">
                <h2 className="font-bold font-sans text-xs uppercase tracking-wider text-slate-800 pb-1 border-b border-slate-200">
                  DEFINED TERMS
                </h2>
                <div className="space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs">
                  {activeDoc.definedTerms.map((dt, idx) => (
                    <div key={idx} className="leading-relaxed">
                      <strong className="text-slate-900 font-sans font-bold text-xs uppercase tracking-wide">"{dt.term}"</strong>: {dt.definition}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Operative Clauses Section */}
            {activeDoc.operativeClauses && activeDoc.operativeClauses.length > 0 && (
              <div className="space-y-4 pt-4">
                <h2 className="font-bold font-sans text-xs uppercase tracking-wider text-slate-800 pb-1 border-b border-slate-200">
                  OPERATIVE CLAUSES AND STIPULATIONS
                </h2>

                {activeDoc.operativeClauses.map((clause, idx) => (
                  <div key={idx} className="space-y-1.5 p-3 rounded hover:bg-slate-50 transition-colors">
                    <div className="font-bold font-sans text-xs text-slate-900 flex items-center justify-between">
                      <span>{clause.num}</span>
                      <button
                        onClick={() => setSelectedClauseInspection(clause)}
                        className="no-print text-[10px] text-indigo-600 font-normal hover:underline flex items-center gap-1"
                      >
                        <Eye className="w-3 h-3" /> Audit Clause
                      </button>
                    </div>
                    {editMode ? (
                      <textarea
                        rows={3}
                        value={clause.content}
                        onChange={(e) => {
                          const updatedClauses = [...activeDoc.operativeClauses];
                          updatedClauses[idx].content = e.target.value;
                          setEditableDoc({ ...activeDoc, operativeClauses: updatedClauses });
                        }}
                        className="w-full bg-slate-50 border border-indigo-400 p-2 rounded font-legal text-xs text-slate-900 focus:outline-none"
                      />
                    ) : (
                      <p className="text-xs leading-relaxed text-slate-800">
                        {clause.content}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Governing Law & Dispute Resolution */}
            <div className="space-y-2 pt-4 border-t border-slate-200">
              <h2 className="font-bold font-sans text-xs uppercase tracking-wider text-slate-800">
                GOVERNING LAW AND ARBITRATION
              </h2>
              {editMode ? (
                <textarea
                  rows={4}
                  value={activeDoc.disputeResolution}
                  onChange={(e) => setEditableDoc({ ...activeDoc, disputeResolution: e.target.value })}
                  className="w-full bg-slate-50 border border-indigo-400 p-3 rounded font-legal text-xs text-slate-900 focus:outline-none"
                />
              ) : (
                <p className="text-xs leading-relaxed text-slate-800 whitespace-pre-line">
                  {activeDoc.disputeResolution}
                </p>
              )}
            </div>

            {/* Signature Blocks */}
            <div className="pt-10 space-y-6 border-t-2 border-slate-900">
              <p className="text-xs font-serif italic text-slate-700 text-center">
                {activeDoc.closingText}
              </p>

              <div className="grid grid-cols-2 gap-10 pt-4 text-xs font-sans">
                {/* Party A Signature */}
                <div className="space-y-4">
                  <div className="font-bold uppercase tracking-wider text-slate-900">
                    PARTY A: {activeDoc.partyA}
                  </div>
                  <div className="border-b-2 border-slate-900 pb-1 pt-8 text-slate-400 font-mono text-[10px]">
                    Authorized Signature
                  </div>
                  <div className="space-y-1 text-slate-700 text-[11px]">
                    <div>By: ___________________________</div>
                    <div>Name: {activeDoc.partyA}</div>
                    <div>Title: Authorized Signatory</div>
                    <div>Date: {activeDoc.dateStr}</div>
                  </div>
                </div>

                {/* Party B Signature */}
                <div className="space-y-4">
                  <div className="font-bold uppercase tracking-wider text-slate-900">
                    PARTY B: {activeDoc.partyB}
                  </div>
                  <div className="border-b-2 border-slate-900 pb-1 pt-8 text-slate-400 font-mono text-[10px]">
                    Authorized Signature
                  </div>
                  <div className="space-y-1 text-slate-700 text-[11px]">
                    <div>By: ___________________________</div>
                    <div>Name: {activeDoc.partyB}</div>
                    <div>Title: Authorized Signatory</div>
                    <div>Date: {activeDoc.dateStr}</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer Watermark */}
            <div className="pt-8 text-center text-[10px] text-slate-400 font-sans border-t border-slate-200 space-y-0.5">
              <div>LegalGen AI Pre-Legal Document System • Reference ID: {activeDoc.docRefId}</div>
              <div className="italic text-slate-400">Notice: Attorney review required prior to signing.</div>
            </div>

          </div>

          {/* Clause Audit Modal */}
          {selectedClauseInspection && (
            <div className="no-print fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="font-bold text-white text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Clause Enforceability Audit
                  </span>
                  <button
                    onClick={() => setSelectedClauseInspection(null)}
                    className="text-slate-400 hover:text-white text-xs font-bold px-2 py-1 bg-slate-800 rounded"
                  >
                    Close
                  </button>
                </div>

                <div>
                  <h4 className="font-bold text-indigo-300 text-xs uppercase mb-1">{selectedClauseInspection.num}</h4>
                  <p className="text-slate-300 text-xs bg-slate-950 p-3 rounded border border-slate-800 leading-relaxed mb-4">
                    {selectedClauseInspection.content}
                  </p>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <Check className="w-4 h-4" /> Enforceability Rating: High (Standard Precedent)
                    </div>
                    <p className="text-slate-400 leading-relaxed">
                      This clause adheres to established commercial precedents under {activeDoc.jurisdictionName}.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedClauseInspection(null)}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl"
                >
                  Return to Document
                </button>
              </div>
            </div>
          )}

        </>
      ) : null}

    </div>
  );
}
