import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';

interface SlideLayoutProps {
  children: React.ReactNode;
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
  exitPresentation: () => void;
  title?: string;
  investorName?: string;
  partnerLogo?: string | null;
  isPrintMode?: boolean;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  children, 
  currentSlide, 
  totalSlides, 
  nextSlide, 
  prevSlide,
  exitPresentation,
  title,
  investorName,
  partnerLogo,
  isPrintMode = false
}) => {
  
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className={`relative h-screen w-full bg-brand-black text-brand-polar overflow-hidden flex flex-col ${isPrintMode ? 'print:h-screen print:w-screen print:overflow-hidden' : ''}`}>
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

      {/* Top Bar */}
      <header className="absolute top-0 left-0 w-full p-6 z-50 flex justify-between items-center border-b border-white/5 bg-brand-black/50 backdrop-blur-sm">
        <div className="flex items-center gap-4 cursor-pointer" onClick={!isPrintMode ? exitPresentation : undefined}>
          <img 
            src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Logo/MAKE_ICONxWORDMARK_MINK.png" 
            alt="MAKE GOLF" 
            className="h-6 md:h-8 object-contain"
          />
          {partnerLogo && (
            <>
              <div className="h-6 w-px bg-white/20"></div>
              <img 
                src={partnerLogo} 
                alt="Partner" 
                className="h-6 md:h-8 object-contain opacity-80 filter grayscale hover:grayscale-0 transition-all"
              />
            </>
          )}
        </div>
        
        {investorName && (
          <div className="hidden md:flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <div className="w-1.5 h-1.5 bg-brand-mink rounded-full animate-pulse"></div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">Prepared for {investorName}</span>
          </div>
        )}

        <div className="flex items-center gap-4">
          <div className="text-xs font-mono text-white/40 hidden md:block">
             {title || 'Confidential'}
          </div>
          {!isPrintMode && (
            <button onClick={exitPresentation} className="text-white/20 hover:text-white transition-colors print:hidden">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow relative z-10 flex items-center justify-center p-6 md:p-12">
        {isPrintMode ? (
          // In print mode, no AnimatePresence to avoid layout shifts, just render children
          children
        ) : (
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        )}
      </main>

      {/* Bottom Bar / Navigation */}
      <footer className="absolute bottom-0 left-0 w-full z-50 bg-brand-black border-t border-white/5">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/5">
          <div 
            className="h-full bg-brand-mink transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-6 flex justify-between items-center">
          <div className="font-mono text-xs text-white/30">
            SLIDE {currentSlide + 1} <span className="text-brand-mink">/</span> {totalSlides}
          </div>

          <div className="flex gap-4 print:hidden">
            {!isPrintMode && (
              <>
                <button 
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className={`p-2 rounded-full border ${currentSlide === 0 ? 'border-white/5 text-white/10 cursor-not-allowed' : 'border-white/20 text-white hover:bg-white/10 hover:border-brand-mink'} transition-all`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  disabled={currentSlide === totalSlides - 1}
                  className={`p-2 rounded-full border ${currentSlide === totalSlides - 1 ? 'border-white/5 text-white/10 cursor-not-allowed' : 'border-white/20 text-white hover:bg-white/10 hover:border-brand-mink'} transition-all`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SlideLayout;