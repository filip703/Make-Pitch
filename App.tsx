import React, { useState, useEffect, useCallback } from 'react';
import SlideLayout from './components/SlideLayout';
import SetupScreen from './components/SetupScreen';
import { SlideDefinition, SlideContextData } from './types';

// Slide Imports - Ensure strictly matches filenames for Vercel (Case Sensitive)
import Hero from './components/slides/Hero';
import Cover from './components/slides/Cover';
import Mission from './components/slides/Mission';
import Problem from './components/slides/Problem';
import SwingDNA from './components/slides/SwingDNA';
import Concept from './components/slides/Concept';
import MakeDNA from './components/slides/MakeDNA';
import Configurator from './components/slides/Configurator';
import SaaS from './components/slides/SaaS';
import Traction from './components/slides/Traction';
import Technology from './components/slides/Technology';
import Product from './components/slides/Product';
import Market from './components/slides/Market';
import Business from './components/slides/Business';
import Financials from './components/slides/Financials';
import Roadmap from './components/slides/Roadmap';
import WhyMakeGolf from './components/slides/WhyMakeGolf'; 
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
  { id: 'makedna', title: 'MAKE DNA (AI Engine)', component: MakeDNA, defaultChecked: true },
  { id: 'configurator', title: 'User Experience', component: Configurator, defaultChecked: true },
  { id: 'tech', title: 'Technology & Partners', component: Technology, defaultChecked: true },
  { id: 'traction', title: 'Traction & Timeline', component: Traction, defaultChecked: true },
  { id: 'product', title: 'The Hardware', component: Product, defaultChecked: false },
  { id: 'saas', title: 'B2B/SaaS Model', component: SaaS, defaultChecked: true },
  { id: 'market', title: 'Market Opportunity', component: Market, defaultChecked: true },
  { id: 'business', title: 'Business Model', component: Business, defaultChecked: true },
  { id: 'financials', title: 'Financial Highlights', component: Financials, defaultChecked: true },
  { id: 'roadmap', title: 'Roadmap', component: Roadmap, defaultChecked: true },
  { id: 'whymakegolf', title: 'Competitive Advantage', component: WhyMakeGolf, defaultChecked: true },
  { id: 'team', title: 'The Team', component: Team, defaultChecked: true },
  { id: 'ask', title: 'The Ask', component: Ask, defaultChecked: true },
  { id: 'outro', title: 'Brand Video', component: OutroVideo, defaultChecked: true }
];

const App: React.FC = () => {
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
    contactEmail: ''
  });

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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
        setMode('setup');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, mode]);

  if (mode === 'setup') {
    return (
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
    );
  }

  // Get current slide component
  const CurrentSlideComponent = activeSlides[currentSlideIndex].component;

  return (
    <SlideLayout
      currentSlide={currentSlideIndex}
      totalSlides={activeSlides.length}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
      exitPresentation={() => setMode('setup')}
      title={activeSlides[currentSlideIndex].title}
      investorName={contextData.investorName}
      partnerLogo={contextData.partnerLogo}
    >
      <CurrentSlideComponent context={contextData} />
    </SlideLayout>
  );
};

export default App;