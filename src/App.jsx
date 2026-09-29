import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import TemplateExplorer from './components/TemplateExplorer';
import Footer from './components/Footer';
import Header from './components/Header';
import GeneratorContainer from './components/Generator/GeneratorContainer';

export default function App() {
  const [view, setView] = useState('landing'); // 'landing' | 'generator'
  const [currentStep, setCurrentStep] = useState(1);
  const [preselectedDocId, setPreselectedDocId] = useState(null);

  const generatorRef = useRef(null);

  const handleStartGenerator = (docId = null) => {
    if (docId) {
      setPreselectedDocId(docId);
    }
    setView('generator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setView('landing');
    setPreselectedDocId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetGenerator = () => {
    if (generatorRef.current) {
      generatorRef.current.reset();
    }
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white flex flex-col justify-between">
      
      {/* Dynamic Header depending on View */}
      {view === 'landing' ? (
        <Navbar onStartGenerator={() => handleStartGenerator()} />
      ) : (
        <Header 
          currentStep={currentStep} 
          isGeneratorActive={true}
          onReset={handleResetGenerator}
          onGoHome={handleGoHome}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-grow">
        {view === 'landing' ? (
          <div>
            {/* Landing Page Hero Section */}
            <Hero onStartGenerator={() => handleStartGenerator()} />

            {/* Core Features Grid */}
            <FeaturesGrid />

            {/* Template Explorer Gallery */}
            <TemplateExplorer onSelectTemplate={(docId) => handleStartGenerator(docId)} />
          </div>
        ) : (
          <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            {/* Main Legal Paper Generator Workstation */}
            <GeneratorContainer 
              ref={generatorRef}
              preselectedDocId={preselectedDocId}
              onStepChange={(step) => setCurrentStep(step)}
            />
          </div>
        )}
      </main>

      {/* Footer with Legal Disclaimer */}
      <Footer onStartGenerator={() => handleStartGenerator()} />

    </div>
  );
}
