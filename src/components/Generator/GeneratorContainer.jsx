import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import Step1DocumentType from './Step1DocumentType';
import Step2DynamicForm from './Step2DynamicForm';
import Step3OutputDashboard from './Step3OutputDashboard';
import PersistentWarningBox from './PersistentWarningBox';
import { generateLegalDocumentContent } from '../../data/documentTemplates';
import { Sparkles, ShieldCheck } from 'lucide-react';

const GeneratorContainer = forwardRef(({ preselectedDocId, onStepChange }, ref) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    if (onStepChange) {
      onStepChange(currentStep);
    }
  }, [currentStep, onStepChange]);

  const [formData, setFormData] = useState({
    docType: preselectedDocId || 'nda',
    variant: 'mutual',
    tone: 'balanced',
    partyA: {
      name: '',
      entityType: 'Corporation (Inc / Corp)',
      address: ''
    },
    partyB: {
      name: '',
      entityType: 'Individual Person / Freelancer',
      address: ''
    },
    jurisdiction: 'US-DE',
    terms: {
      effectiveDate: new Date().toISOString().split('T')[0],
      duration: '2 Years (24 Months)',
      noticePeriod: '14 Days',
      rate: '$5,000 fixed fee',
      deadline: '7 Business Days',
      equityA: '50',
      equityB: '50',
      customScope: ''
    },
    customClauses: ''
  });

  const updateFormData = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleGenerate = () => {
    // Generate document content immediately so data is ready
    const generated = generateLegalDocumentContent(formData);
    setDocumentData(generated);
    setIsGenerating(true);
    setCurrentStep(3);

    // Short drafting animation indicator
    setTimeout(() => {
      setIsGenerating(false);
    }, 1200);
  };

  useImperativeHandle(ref, () => ({
    reset: () => {
      setCurrentStep(1);
      setDocumentData(null);
      setFormData({
        docType: 'nda',
        variant: 'mutual',
        tone: 'balanced',
        partyA: { name: '', entityType: 'Corporation (Inc / Corp)', address: '' },
        partyB: { name: '', entityType: 'Individual Person / Freelancer', address: '' },
        jurisdiction: 'US-DE',
        terms: {
          effectiveDate: new Date().toISOString().split('T')[0],
          duration: '2 Years (24 Months)',
          noticePeriod: '14 Days',
          rate: '$5,000 fixed fee',
          deadline: '7 Business Days',
          equityA: '50',
          equityB: '50',
          customScope: ''
        },
        customClauses: ''
      });
    }
  }));

  return (
    <section id="generator" className="py-4 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Generator Card Container */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden backdrop-blur-xl">
          
          {/* Subtle Ambient Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Section Heading & Stepper Bar */}
          <div className="space-y-6 pb-6 border-b border-slate-800">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Professional Contract Workstation</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Pre-Legal Document Generator
                </h2>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Client Memory Encrypted</span>
              </div>
            </div>

            {/* Clickable Stepper Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
              <div 
                onClick={() => setCurrentStep(1)}
                className={`cursor-pointer p-3.5 rounded-xl border text-center transition-all ${
                  currentStep === 1
                    ? 'bg-indigo-600/20 border-indigo-500 text-white font-bold shadow-md'
                    : currentStep > 1
                    ? 'bg-slate-900 border-slate-700 text-slate-300'
                    : 'bg-slate-900/50 border-slate-800 text-slate-500'
                }`}
              >
                <div className="text-[10px] uppercase font-mono tracking-wider opacity-75">Step 1</div>
                <div className="text-xs sm:text-sm font-semibold truncate">1. Choose Template</div>
              </div>

              <div 
                onClick={() => { if (currentStep >= 2) setCurrentStep(2); }}
                className={`p-3.5 rounded-xl border text-center transition-all ${
                  currentStep === 2
                    ? 'bg-indigo-600/20 border-indigo-500 text-white font-bold shadow-md'
                    : currentStep > 2
                    ? 'bg-slate-900 border-slate-700 text-slate-300 cursor-pointer'
                    : 'bg-slate-900/50 border-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                <div className="text-[10px] uppercase font-mono tracking-wider opacity-75">Step 2</div>
                <div className="text-xs sm:text-sm font-semibold truncate">2. Enter Details</div>
              </div>

              <div 
                className={`p-3.5 rounded-xl border text-center transition-all ${
                  currentStep === 3
                    ? 'bg-indigo-600/20 border-indigo-500 text-white font-bold shadow-md'
                    : 'bg-slate-900/50 border-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                <div className="text-[10px] uppercase font-mono tracking-wider opacity-75">Step 3</div>
                <div className="text-xs sm:text-sm font-semibold truncate">3. Preview & PDF</div>
              </div>
            </div>

          </div>

          {/* Render Active Step Component */}
          {currentStep === 1 && (
            <Step1DocumentType
              formData={formData}
              updateFormData={updateFormData}
              onNext={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 2 && (
            <Step2DynamicForm
              formData={formData}
              updateFormData={updateFormData}
              onBack={() => setCurrentStep(1)}
              onGenerate={handleGenerate}
            />
          )}

          {currentStep === 3 && (
            <Step3OutputDashboard
              documentData={documentData}
              isGenerating={isGenerating}
              onBackToForm={() => setCurrentStep(2)}
              onRegenerate={handleGenerate}
            />
          )}

          {/* Persistent Warning Box inside Generator container (Steps 1 & 2) */}
          {currentStep !== 3 && (
            <div className="pt-4 border-t border-slate-900">
              <PersistentWarningBox />
            </div>
          )}

        </div>

      </div>
    </section>
  );
});

export default GeneratorContainer;
