import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Play, CheckSquare, Square } from 'lucide-react';
import { SlideDefinition, SlideContextData } from '../types';

interface SetupScreenProps {
  slides: SlideDefinition[];
  selectedSlides: string[];
  toggleSlide: (id: string) => void;
  contextData: SlideContextData;
  setContextData: (data: SlideContextData) => void;
  startPresentation: () => void;
}

const SetupScreen: React.FC<SetupScreenProps> = ({
  slides,
  selectedSlides,
  toggleSlide,
  contextData,
  setContextData,
  startPresentation
}) => {
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContextData({ ...contextData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-polar flex flex-col md:flex-row">
      {/* Left Panel: Context */}
      <div className="w-full md:w-1/3 p-8 border-r border-white/10 flex flex-col justify-center bg-brand-surface/50">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-brand-mink rounded-sm flex items-center justify-center font-display font-bold text-white">M</div>
            <h1 className="text-2xl font-display font-bold">Pitch Setup</h1>
          </div>
          <p className="text-sm text-white/50 font-mono">Configure your narrative for specific stakeholders.</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-brand-mink mb-2">Recipient / Investor</label>
            <input 
              type="text" 
              name="investorName"
              value={contextData.investorName}
              onChange={handleInputChange}
              className="w-full bg-brand-black border border-white/20 p-3 rounded text-white focus:border-brand-mink focus:outline-none transition-colors"
              placeholder="e.g. Anders at Dormy"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-brand-mink mb-2">Meeting Purpose</label>
            <input 
              type="text" 
              name="meetingPurpose"
              value={contextData.meetingPurpose}
              onChange={handleInputChange}
              className="w-full bg-brand-black border border-white/20 p-3 rounded text-white focus:border-brand-mink focus:outline-none transition-colors"
              placeholder="e.g. Strategic Partnership"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-brand-mink mb-2">Valuation (Pre)</label>
              <input 
                type="text" 
                name="valuation"
                value={contextData.valuation}
                onChange={handleInputChange}
                className="w-full bg-brand-black border border-white/20 p-3 rounded text-white focus:border-brand-mink focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-brand-mink mb-2">Ask Amount</label>
              <input 
                type="text" 
                name="askAmount"
                value={contextData.askAmount}
                onChange={handleInputChange}
                className="w-full bg-brand-black border border-white/20 p-3 rounded text-white focus:border-brand-mink focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        <button 
          onClick={startPresentation}
          className="mt-12 w-full bg-brand-mink text-white font-display font-bold uppercase py-4 rounded hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
        >
          <Play className="w-5 h-5 fill-current" /> Start Presentation
        </button>
      </div>

      {/* Right Panel: Slide Picker */}
      <div className="w-full md:w-2/3 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-display uppercase">Slide Deck ({selectedSlides.length} selected)</h2>
          <div className="text-xs font-mono text-white/40">Drag to reorder (Coming Soon)</div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {slides.map((slide, idx) => {
            const isSelected = selectedSlides.includes(slide.id);
            return (
              <div 
                key={slide.id}
                onClick={() => toggleSlide(slide.id)}
                className={`p-4 rounded border cursor-pointer flex items-center gap-4 transition-all ${isSelected ? 'bg-white/5 border-brand-mink/50' : 'bg-transparent border-white/5 opacity-50'}`}
              >
                <div className={`text-brand-mink`}>
                  {isSelected ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5" />}
                </div>
                <div className="font-mono text-xs text-white/30 w-8">{(idx + 1).toString().padStart(2, '0')}</div>
                <div className="font-display font-bold text-lg flex-grow">{slide.title}</div>
                {isSelected && <div className="w-2 h-2 bg-brand-mink rounded-full animate-pulse"></div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetupScreen;