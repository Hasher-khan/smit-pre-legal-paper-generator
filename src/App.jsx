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
    setPreselectedDocId(docId);
    setView('generator');
    setCurrentStep(1);
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      
      {/* Navigation */}
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

      {/* Page Content */}
      <main className="flex-grow">
        {view === 'landing' ? (
          <div>
            <Hero onStartGenerator={() => handleStartGenerator()} />
            <FeaturesGrid />
            <TemplateExplorer onSelectTemplate={(docId) => handleStartGenerator(docId)} />
          </div>
        ) : (
          <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <GeneratorContainer 
              ref={generatorRef}
              preselectedDocId={preselectedDocId}
              onStepChange={(step) => setCurrentStep(step)}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onStartGenerator={() => handleStartGenerator()} />

    </div>
  );
}
