import React, { useState } from 'react';
import { Play, CheckSquare, Square, Globe, Search, ArrowUp, ArrowDown, Download, Mail, Link as LinkIcon, AlertCircle, Info, X, Zap, BarChart3, Presentation } from 'lucide-react';
import { SlideDefinition, SlideContextData } from '../types';

interface SetupScreenProps {
  slides: SlideDefinition[];
  selectedSlides: string[];
  toggleSlide: (id: string) => void;
  reorderSlides?: (newOrder: string[]) => void;
  contextData: SlideContextData;
  setContextData: (data: SlideContextData) => void;
  startPresentation: () => void;
}

// Helper to scale slide for preview
const SlidePreview: React.FC<{ component: React.FC<any>; context: SlideContextData }> = ({ component: Component, context }) => {
  return (
    <div className="w-full h-full bg-brand-black relative overflow-hidden flex items-center justify-center">
       <div className="origin-center scale-[0.25] w-[400%] h-[400%] flex items-center justify-center pointer-events-none">
          <Component context={context} />
       </div>
    </div>
  );
};

const SetupScreen: React.FC<SetupScreenProps> = ({
  slides,
  selectedSlides,
  toggleSlide,
  contextData,
  setContextData,
  startPresentation
}) => {
  
  const [activeTab, setActiveTab] = useState<'context' | 'financials'>('context');
  const [logoLoading, setLogoLoading] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [showGuide, setShowGuide] = useState(true); // Default open to show instructions
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContextData({ ...contextData, [name]: value });
  };

  const getCleanDomain = (url: string) => {
    try {
      // Remove protocol
      let domain = url.replace(/(^\w+:|^)\/\//, '');
      // Remove www.
      domain = domain.replace(/^www\./, '');
      // Remove path/query params
      domain = domain.split('/')[0];
      return domain;
    } catch (e) {
      return url;
    }
  };

  const fetchLogo = async () => {
    if (!contextData.partnerWebsite) return;
    setLogoLoading(true);
    setLogoError(false);
    
    const domain = getCleanDomain(contextData.partnerWebsite);
    
    // Strategy: Try Clearbit first (Best for logos), Fallback to Google (Best for Icons/Favicons)
    const clearbitUrl = `https://logo.clearbit.com/${domain}`;
    const googleUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=256`;

    // Create a temporary image to test if Clearbit works
    const img = new Image();
    img.src = clearbitUrl;

    img.onload = () => {
        setContextData({ ...contextData, partnerLogo: clearbitUrl });
        setLogoLoading(false);
    };

    img.onerror = () => {
        // Clearbit failed, try Google
        const img2 = new Image();
        img2.src = googleUrl;
        
        img2.onload = () => {
             setContextData({ ...contextData, partnerLogo: googleUrl });
             setLogoLoading(false);
        };
        
        img2.onerror = () => {
            setLogoError(true);
            setLogoLoading(false);
        };
    };
  };

  const handleExportPDF = () => {
    window.print();
  };

  const handleEmailDeck = () => {
    const subject = `Investment Opportunity: Make Golf x ${contextData.investorName || 'Partner'}`;
    const body = `Hi,\n\nFollowing up on our conversation regarding Make Golf.\n\nAttached is the deck we reviewed.\n\nBest,\nMårten Eker\nCEO, Make Golf`;
    window.location.href = `mailto:${contextData.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="h-screen bg-[#111] text-brand-polar flex flex-col md:flex-row overflow-hidden font-sans relative">
      
      {/* --- INSTRUCTIONAL POPUP (HOW TO) --- */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="max-w-2xl w-full bg-[#151515] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
              
              {/* Popup Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-brand-black">
                 <div className="flex items-center gap-3">
                    <div className="bg-brand-mink/20 p-2 rounded text-brand-mink">
                        <Zap className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-xl font-display font-bold text-white uppercase">Make Golf PitchOS™</h3>
                        <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Instruktionsmanual</p>
                    </div>
                 </div>
                 <button onClick={() => setShowGuide(false)} className="text-white/40 hover:text-white transition-colors">
                    <X className="w-6 h-6" />
                 </button>
              </div>

              {/* Popup Content */}
              <div className="p-8 overflow-y-auto space-y-8 custom-scrollbar bg-[#111]">
                 
                 <div className="space-y-2">
                    <h4 className="text-brand-mink font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                       <Globe className="w-4 h-4" /> Steg 1: Context (Personalisering)
                    </h4>
                    <p className="text-brand-polar/80 text-sm leading-relaxed">
                       <strong>Varför?</strong> Investerare ser hundratals generiska decks. Genom att fylla i <em>"Target Entity"</em> och hämta deras logotyp via <em>"Partner Website"</em>, co-brandar systemet automatiskt hela presentationen.
                    </p>
                    <ul className="text-xs text-brand-polar/50 list-disc list-inside ml-2 space-y-1">
                       <li>Deras logotyp visas bredvid Make Golfs logotyp på alla slides (header).</li>
                       <li>Deras namn dyker upp dynamiskt i texten på Cover och Ask-sliden.</li>
                       <li>Detta bygger omedelbart förtroende och visar på professionalitet.</li>
                    </ul>
                 </div>

                 <div className="h-px bg-white/5 w-full"></div>

                 <div className="space-y-2">
                    <h4 className="text-brand-green font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                       <BarChart3 className="w-4 h-4" /> Steg 2: Financials (Siffrorna)
                    </h4>
                    <p className="text-brand-polar/80 text-sm leading-relaxed">
                       Fyll i siffrorna under fliken <em>"Financials"</em>. Dessa är inte bara anteckningar – de injiceras direkt i "The Ask" och "Financial Highlights"-slidena.
                    </p>
                    <ul className="text-xs text-brand-polar/50 list-disc list-inside ml-2 space-y-1">
                       <li><strong>Ask Amount:</strong> Hur mycket vi reser (t.ex. 5 MSEK).</li>
                       <li><strong>Valuation:</strong> Pre-money värdering (t.ex. 25 MSEK).</li>
                       <li><strong>Runway:</strong> Hur länge pengarna räcker.</li>
                    </ul>
                 </div>

                 <div className="h-px bg-white/5 w-full"></div>

                 <div className="space-y-2">
                    <h4 className="text-brand-blue font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                       <Presentation className="w-4 h-4" /> Steg 3: Presentation
                    </h4>
                    <p className="text-brand-polar/80 text-sm leading-relaxed">
                       När du klickar på <strong>"INITIALIZE DECK"</strong> startar presentationen i fullskärmsläge.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                       <div className="bg-white/5 p-3 rounded border border-white/5">
                          <span className="text-white font-bold text-xs block mb-1">Pil Höger / Space</span>
                          <span className="text-[10px] text-white/50">Nästa Slide</span>
                       </div>
                       <div className="bg-white/5 p-3 rounded border border-white/5">
                          <span className="text-white font-bold text-xs block mb-1">ESC</span>
                          <span className="text-[10px] text-white/50">Avsluta & Redigera</span>
                       </div>
                    </div>
                 </div>

              </div>

              {/* Popup Footer */}
              <div className="p-6 border-t border-white/10 bg-brand-black">
                 <button 
                    onClick={() => setShowGuide(false)}
                    className="w-full bg-brand-mink text-white font-display font-bold uppercase py-3 rounded hover:bg-white hover:text-black transition-colors"
                 >
                    Jag förstår, låt mig bygga
                 </button>
              </div>
           </div>
        </div>
      )}


      {/* --- LEFT PANEL: MISSION DATA --- */}
      <div className="w-full md:w-[400px] flex flex-col border-r border-white/5 bg-[#151515] z-20 shadow-2xl h-full">
        
        {/* Header */}
        <div className="p-6 border-b border-white/5 bg-brand-black flex-shrink-0">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(255,34,76,0.2)]">
               <img 
                 src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Logo/Make_Icon_256px.png" 
                 alt="Make Golf" 
                 className="w-full h-full object-contain"
               />
            </div>
            <div className="flex-grow">
                <div className="flex items-center gap-2">
                    <h1 className="text-lg font-display font-bold text-white leading-none">Mission Control</h1>
                    <button 
                        onClick={() => setShowGuide(true)} 
                        className="text-brand-mink hover:text-white transition-colors"
                        title="Öppna Instruktioner"
                    >
                        <Info className="w-4 h-4" />
                    </button>
                </div>
                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">v2.4.0 Stable</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/5 flex-shrink-0">
            <button 
                onClick={() => setActiveTab('context')}
                className={`flex-1 py-3 text-xs font-mono uppercase tracking-widest transition-colors ${activeTab === 'context' ? 'bg-white/5 text-brand-mink border-b-2 border-brand-mink' : 'text-white/30 hover:text-white'}`}
            >
                Context
            </button>
            <button 
                onClick={() => setActiveTab('financials')}
                className={`flex-1 py-3 text-xs font-mono uppercase tracking-widest transition-colors ${activeTab === 'financials' ? 'bg-white/5 text-brand-mink border-b-2 border-brand-mink' : 'text-white/30 hover:text-white'}`}
            >
                Financials
            </button>
        </div>

        {/* Form Area - Scrollable */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6 custom-scrollbar">
            
            {activeTab === 'context' && (
                <div className="space-y-5">
                    {/* Investor Identity */}
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <label className="text-[10px] font-mono uppercase text-brand-mink mb-3 block flex justify-between">
                            Target Entity <Globe className="w-3 h-3 opacity-50" />
                        </label>
                        <div className="space-y-3">
                            <input 
                                type="text" name="investorName" value={contextData.investorName} onChange={handleInputChange}
                                className="w-full bg-black border border-white/10 p-2 text-sm rounded text-white focus:border-brand-mink focus:outline-none placeholder:text-white/10 font-display"
                                placeholder="Investor / Company Name"
                            />
                            
                            {/* Website Fetcher */}
                            <div className="flex gap-2 relative">
                                <input 
                                    type="text" name="partnerWebsite" value={contextData.partnerWebsite} onChange={handleInputChange}
                                    className="w-full bg-black border border-white/10 p-2 text-sm rounded text-white focus:border-brand-mink focus:outline-none placeholder:text-white/10 font-mono"
                                    placeholder="dormy.se"
                                />
                                <button 
                                    onClick={fetchLogo}
                                    disabled={!contextData.partnerWebsite || logoLoading}
                                    className="bg-white/10 hover:bg-white/20 text-white p-2 rounded border border-white/10 disabled:opacity-50 transition-colors"
                                    title="Auto-fetch Logo"
                                >
                                    {logoLoading ? <div className="w-4 h-4 border-2 border-white/50 border-t-transparent rounded-full animate-spin"></div> : <Search className="w-4 h-4" />}
                                </button>
                            </div>
                            
                            {/* Logo URL Override / Display */}
                            <div className="relative">
                                <div className="flex items-center gap-2 mb-1">
                                    <LinkIcon className="w-3 h-3 text-white/30" />
                                    <label className="text-[9px] font-mono uppercase text-white/30">Direct Logo URL (Optional)</label>
                                </div>
                                <input 
                                    type="text" name="partnerLogo" value={contextData.partnerLogo || ''} onChange={handleInputChange}
                                    className="w-full bg-black/50 border border-white/5 p-2 text-xs rounded text-white/60 focus:border-brand-mink focus:text-white focus:outline-none font-mono"
                                    placeholder="https://..."
                                />
                            </div>

                            {/* Status Display */}
                            {logoError && (
                                <div className="flex items-center gap-2 text-brand-mink text-[10px] font-mono">
                                    <AlertCircle className="w-3 h-3" /> Could not fetch auto-logo. Paste URL above.
                                </div>
                            )}

                            {contextData.partnerLogo && !logoError && (
                                <div className="flex items-center gap-3 bg-black/50 p-2 rounded border border-white/10 mt-2">
                                    <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center p-1">
                                        <img src={contextData.partnerLogo} alt="Logo" className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <span className="text-[10px] text-green-500 font-mono">Logo Loaded</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">Meeting Objective</label>
                            <input 
                                type="text" name="meetingPurpose" value={contextData.meetingPurpose} onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:border-brand-mink focus:outline-none transition-colors"
                                placeholder="e.g. Series A Lead"
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">Contact Email</label>
                            <input 
                                type="email" name="contactEmail" value={contextData.contactEmail} onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:border-brand-mink focus:outline-none transition-colors"
                                placeholder="investor@fund.com"
                            />
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'financials' && (
                <div className="space-y-5">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 space-y-4">
                        <label className="text-[10px] font-mono uppercase text-brand-mink mb-2 block">Deal Structure</label>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="text-[9px] text-white/30 uppercase block mb-1">Pre-Money Val</span>
                                <input 
                                    type="text" name="valuation" value={contextData.valuation} onChange={handleInputChange}
                                    className="w-full bg-black border border-white/10 p-2 text-sm rounded text-white font-mono text-right"
                                />
                            </div>
                            <div>
                                <span className="text-[9px] text-white/30 uppercase block mb-1">Ask Amount</span>
                                <input 
                                    type="text" name="askAmount" value={contextData.askAmount} onChange={handleInputChange}
                                    className="w-full bg-black border border-white/10 p-2 text-sm rounded text-white font-mono text-right"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                         <div>
                            <label className="block text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">Monthly Burn</label>
                            <input 
                                type="text" name="burnRate" value={contextData.burnRate} onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:border-brand-mink focus:outline-none transition-colors font-mono"
                                placeholder="e.g. 450k SEK"
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">Current Runway</label>
                            <input 
                                type="text" name="runway" value={contextData.runway} onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:border-brand-mink focus:outline-none transition-colors font-mono"
                                placeholder="e.g. 8 Months"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Export Actions */}
            <div className="pt-6 border-t border-white/10 mt-6">
                <label className="text-[10px] font-mono uppercase text-white/30 mb-3 block">Post-Meeting Actions</label>
                <div className="grid grid-cols-2 gap-3">
                    <button onClick={handleExportPDF} className="flex items-center justify-center gap-2 bg-[#222] hover:bg-[#333] border border-white/10 rounded py-3 text-xs font-bold text-white transition-colors">
                        <Download className="w-3 h-3" /> PDF Export
                    </button>
                    <button onClick={handleEmailDeck} className="flex items-center justify-center gap-2 bg-[#222] hover:bg-[#333] border border-white/10 rounded py-3 text-xs font-bold text-white transition-colors">
                        <Mail className="w-3 h-3" /> Email Link
                    </button>
                </div>
            </div>

        </div>

        {/* Launch Button */}
        <div className="p-6 bg-brand-black border-t border-white/10 flex-shrink-0">
            <button 
                onClick={startPresentation}
                className="w-full bg-brand-mink text-white font-display font-bold uppercase py-4 rounded hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,34,76,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-0.5"
            >
                <Play className="w-5 h-5 fill-current" /> Initialize Deck
            </button>
        </div>
      </div>

      {/* --- RIGHT PANEL: DECK ARCHITECTURE --- */}
      <div className="flex-grow bg-[#0A0A0A] overflow-hidden flex flex-col relative h-full">
         
         {/* Top Bar */}
         <div className="h-16 border-b border-white/5 flex justify-between items-center px-8 bg-[#0A0A0A]/90 backdrop-blur z-10 flex-shrink-0">
            <div className="flex items-center gap-4">
                <h2 className="text-sm font-display font-bold text-white uppercase tracking-wide">Deck Architecture</h2>
                <span className="bg-brand-surface border border-white/10 text-white/50 px-2 py-0.5 rounded text-[10px] font-mono">
                    {selectedSlides.length} Slides Active
                </span>
            </div>
            <div className="text-[10px] font-mono text-white/30">
                DRAG & DROP DISABLED (USE CONTROLS)
            </div>
         </div>

         {/* Grid Canvas - SCROLLABLE */}
         <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-20">
                {slides.map((slide, idx) => {
                    const isSelected = selectedSlides.includes(slide.id);
                    // Determine index in selected array for numbering
                    const selectionIndex = selectedSlides.indexOf(slide.id);
                    
                    return (
                        <div 
                           key={slide.id}
                           className={`relative group rounded-xl border-2 transition-all duration-300 overflow-hidden flex flex-col ${isSelected ? 'border-brand-mink/50 bg-[#151515] shadow-2xl' : 'border-white/5 bg-[#111] opacity-60 grayscale'}`}
                        >
                           {/* Header */}
                           <div className="p-3 flex justify-between items-center border-b border-white/5 bg-[#191919]">
                               <div className="flex items-center gap-3">
                                   <button onClick={() => toggleSlide(slide.id)} className="text-white/50 hover:text-brand-mink transition-colors">
                                       {isSelected ? <CheckSquare className="w-4 h-4 text-brand-mink" /> : <Square className="w-4 h-4" />}
                                   </button>
                                   <span className={`text-sm font-display font-bold ${isSelected ? 'text-white' : 'text-white/40'}`}>
                                       {isSelected ? (selectionIndex + 1).toString().padStart(2, '0') : '--'} // {slide.title}
                                   </span>
                               </div>
                           </div>

                           {/* Preview Window */}
                           <div className="aspect-video w-full bg-black relative">
                                <div className="absolute inset-0 z-0">
                                   <SlidePreview component={slide.component} context={contextData} />
                                </div>
                                {/* Overlay to prevent interaction with slide during setup */}
                                <div className="absolute inset-0 z-10 bg-transparent" />
                                
                                {!isSelected && (
                                    <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-[1px] flex items-center justify-center">
                                        <div className="bg-black border border-white/10 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-white/50">
                                            Skipped
                                        </div>
                                    </div>
                                )}
                           </div>

                           {/* Controls Footer */}
                           {isSelected && (
                               <div className="p-2 border-t border-white/5 flex justify-between items-center bg-[#191919]">
                                   <div className="text-[9px] font-mono text-white/20 uppercase pl-2">
                                       ID: {slide.id}
                                   </div>
                                   <div className="flex gap-1">
                                       <button className="p-1.5 hover:bg-white/10 rounded text-white/40 hover:text-white" title="Move Up">
                                            <ArrowUp className="w-3 h-3" />
                                       </button>
                                       <button className="p-1.5 hover:bg-white/10 rounded text-white/40 hover:text-white" title="Move Down">
                                            <ArrowDown className="w-3 h-3" />
                                       </button>
                                   </div>
                               </div>
                           )}
                        </div>
                    );
                })}
            </div>
         </div>

      </div>

    </div>
  );
};

export default SetupScreen;