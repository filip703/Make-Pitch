import React, { useState, useEffect, useCallback } from 'react';
import SlideLayout from './components/SlideLayout';
import SetupScreen from './components/SetupScreen';
import AuthScreen from './components/AuthScreen';
import { SlideDefinition, SlideContextData } from './types';
import { decodeState } from './utils/share';

// Slide Imports - Ensure strictly matches filenames for Vercel (Case Sensitive)
import Hero from './components/slides/Hero';
import Cover from './components/slides/Cover';
import Mission from './components/slides/Mission';
import Problem from './components/slides/Problem';
import SwingDNA from './components/slides/SwingDNA';
import Concept from './components/slides/Concept';
import GhostMap from './components/slides/GhostMap';
import MakeDNA from './components/slides/MakeDNA';
import Configurator from './components/slides/Configurator';
import SaaS from './components/slides/SaaS';
import Traction from './components/slides/Traction';
import Technology from './components/slides/Technology';
import Product from './components/slides/Product';
import ProductXRay from './components/slides/ProductXRay';
import Market from './components/slides/Market';
import Business from './components/slides/Business';
import ProfitSimulator from './components/slides/ProfitSimulator';
import Financials from './components/slides/Financials';
import Roadmap from './components/slides/Roadmap';
import WhyMakeGolf from './components/slides/WhyMakeGolf'; 
import ObjectionKiller from './components/slides/ObjectionKiller';
import Team from './components/slides/Team';
import Ask from './components/slides/Ask';
import WhyNow from './components/slides/WhyNow';
import OutroVideo from './components/slides/OutroVideo';

// Define all available slides
const ALL_SLIDES: SlideDefinition[] = [
  { id: 'hero', title: 'Teaser', component: Hero, defaultChecked: true },
  { id: 'cover', title: 'Cover', component: Cover, defaultChecked: true },
  { id: 'mission', title: 'Mission & Truth', component: Mission, defaultChecked: true },
  { id: 'problem', title: 'The Problem', component: Problem, defaultChecked: true },
  { id: 'swingdna', title: 'Unique DNA', component: SwingDNA, defaultChecked: true },
  { id: 'whynow', title: 'Why Now?', component: WhyNow, defaultChecked: true },
  { id: 'concept', title: 'The Concept', component: Concept, defaultChecked: true },
  { id: 'ghostmap', title: 'Digital Logistics', component: GhostMap, defaultChecked: true },
  { id: 'makedna', title: 'MAKE DNA (AI Engine)', component: MakeDNA, defaultChecked: true },
  { id: 'configurator', title: 'User Experience', component: Configurator, defaultChecked: true },
  { id: 'tech', title: 'Technology & Partners', component: Technology, defaultChecked: true },
  { id: 'traction', title: 'Traction & Timeline', component: Traction, defaultChecked: true },
  { id: 'product', title: 'The Hardware', component: Product, defaultChecked: false },
  { id: 'productxray', title: 'X-Ray Tech Reveal', component: ProductXRay, defaultChecked: true },
  { id: 'saas', title: 'B2B/SaaS Model', component: SaaS, defaultChecked: true },
  { id: 'market', title: 'Market Opportunity', component: Market, defaultChecked: true },
  { id: 'business', title: 'Business Model', component: Business, defaultChecked: true },
  { id: 'profit', title: 'Profit Simulator', component: ProfitSimulator, defaultChecked: true },
  { id: 'financials', title: 'Financial Highlights', component: Financials, defaultChecked: true },
  { id: 'roadmap', title: 'Roadmap', component: Roadmap, defaultChecked: true },
  { id: 'whymakegolf', title: 'Competitive Advantage', component: WhyMakeGolf, defaultChecked: true },
  { id: 'objections', title: 'Objection Killer', component: ObjectionKiller, defaultChecked: true },
  { id: 'team', title: 'The Team', component: Team, defaultChecked: true },
  { id: 'ask', title: 'The Ask', component: Ask, defaultChecked: true },
  { id: 'outro', title: 'Brand Video', component: OutroVideo, defaultChecked: true }
];

const MAKE_PIN = '1245';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMode, setAuthMode] = useState<'make' | 'investor'>('make');
  const [authError, setAuthError] = useState<string | undefined>();
  const [pendingInvestorData, setPendingInvestorData] = useState<{context: SlideContextData, slides: string[]} | null>(null);

  const [mode, setMode] = useState<'setup' | 'present'>('setup');
  const [selectedSlideIds, setSelectedSlideIds] = useState<string[]>(
    ALL_SLIDES.filter(s => s.defaultChecked).map(s => s.id)
  );
  
  const [contextData, setContextData] = useState<SlideContextData>({
    investorName: '',
    partnerWebsite: '',
    partnerLogo: null,
    meetingPurpose: '',
    valuation: '25 MSEK',
    askAmount: '3-5 MSEK',
    burnRate: '450k SEK',
    runway: '8 Months',
    contactEmail: '',
    language: 'en'
  });

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Check for URL data on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const data = params.get('data');
    if (data) {
      const decoded = decodeState(data);
      if (decoded) {
        setPendingInvestorData(decoded);
        setAuthMode('investor');
      }
    }
  }, []);

  const handleUnlock = (pin: string) => {
    setAuthError(undefined);

    if (authMode === 'make') {
      if (pin === MAKE_PIN) {
        setIsAuthenticated(true);
        setMode('setup');
      } else {
        setAuthError('Invalid Admin PIN');
      }
    } else {
      // Investor Mode
      if (!pendingInvestorData) {
        setAuthError('No presentation data found.');
        return;
      }

      const requiredPin = pendingInvestorData.context.investorPin;
      
      if (requiredPin && pin !== requiredPin) {
        setAuthError('Invalid Access Code');
        return;
      }

      // Success - Load data
      setContextData(pendingInvestorData.context);
      setSelectedSlideIds(pendingInvestorData.slides);
      setIsAuthenticated(true);
      setMode('present'); // Jump straight to presentation
    }
  };

  // Filter slides based on selection for the presentation
  const activeSlides = ALL_SLIDES.filter(s => selectedSlideIds.includes(s.id));

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex(prev => Math.min(prev + 1, activeSlides.length - 1));
  }, [activeSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex(prev => Math.max(prev - 1, 0));
  }, []);

  const toggleSlide = (id: string) => {
    if (selectedSlideIds.includes(id)) {
      setSelectedSlideIds(selectedSlideIds.filter(sid => sid !== id));
    } else {
      // Maintain order based on ALL_SLIDES index
      const newSelection = [...selectedSlideIds, id];
      const sortedSelection = newSelection.sort((a, b) => {
        const indexA = ALL_SLIDES.findIndex(s => s.id === a);
        const indexB = ALL_SLIDES.findIndex(s => s.id === b);
        return indexA - indexB;
      });
      setSelectedSlideIds(sortedSelection);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (mode !== 'present') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        // Only allow escape to setup if we are in MAKE mode (or if we want investors to see the grid?)
        // The user request implies investors just "see their generated prospect".
        // Maybe we should disable ESC for investors? 
        // "om man är investerare och ska kolla på sitt genererade prospect"
        // Usually investors shouldn't edit.
        if (authMode === 'make') {
           setMode('setup');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, mode, authMode]);

  // Get current slide component
  const CurrentSlideComponent = activeSlides[currentSlideIndex].component;

  if (!isAuthenticated) {
    return (
      <AuthScreen 
        mode={authMode} 
        setMode={setAuthMode} 
        onUnlock={handleUnlock} 
        error={authError}
        hasInvestorData={!!pendingInvestorData}
        language={pendingInvestorData?.context.language || 'en'}
      />
    );
  }

  return (
    <>
      {/* 
        ========================================
        NORMAL VIEW (Screen)
        ========================================
      */}
      <div className="print:hidden h-full">
        {mode === 'setup' ? (
          <SetupScreen 
            slides={ALL_SLIDES}
            selectedSlides={selectedSlideIds}
            toggleSlide={toggleSlide}
            contextData={contextData}
            setContextData={setContextData}
            startPresentation={() => {
              setCurrentSlideIndex(0);
              setMode('present');
            }}
          />
        ) : (
          <SlideLayout
            currentSlide={currentSlideIndex}
            totalSlides={activeSlides.length}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            exitPresentation={() => {
                if (authMode === 'make') setMode('setup');
            }}
            title={activeSlides[currentSlideIndex].title}
            investorName={contextData.investorName}
            partnerLogo={contextData.partnerLogo}
            isInvestorMode={authMode === 'investor'}
          >
            <CurrentSlideComponent context={contextData} />
          </SlideLayout>
        )}
      </div>

      {/* 
        ========================================
        PRINT VIEW (PDF Export)
        Hidden on screen, Visible only in Print
        ========================================
      */}
      <div className="hidden print:block fixed inset-0 z-[9999] bg-[#191919]">
        {activeSlides.map((slide, index) => {
          const SlideComponent = slide.component;
          return (
            <div key={slide.id} className="w-screen h-screen break-after-page page-break relative overflow-hidden bg-[#191919]">
              <SlideLayout
                currentSlide={index}
                totalSlides={activeSlides.length}
                nextSlide={() => {}}
                prevSlide={() => {}}
                exitPresentation={() => {}}
                title={slide.title}
                investorName={contextData.investorName}
                partnerLogo={contextData.partnerLogo}
                isPrintMode={true}
              >
                <SlideComponent context={contextData} />
              </SlideLayout>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;