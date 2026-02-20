import React, { useState } from 'react';
import { Play, CheckSquare, Square, Globe, Search, ArrowUp, ArrowDown, Download, Mail, Link as LinkIcon, AlertCircle, Info, X, Zap, BarChart3, Presentation, Lock, Share2, Copy, Check } from 'lucide-react';
import { SlideDefinition, SlideContextData } from '../types';
import { generateShareLink } from '../utils/share';

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

const translations = {
  en: {
    missionControl: 'Mission Control',
    context: 'Context',
    financials: 'Financials',
    share: 'Share',
    targetEntity: 'Target Entity',
    investorNamePlaceholder: 'Investor / Company Name',
    websitePlaceholder: 'dormy.se',
    logoUrl: 'Direct Logo URL (Optional)',
    logoLoaded: 'Logo Loaded',
    meetingObjective: 'Meeting Objective',
    contactEmail: 'Contact Email',
    dealStructure: 'Deal Structure',
    preMoneyVal: 'Pre-Money Val',
    askAmount: 'Ask Amount',
    monthlyBurn: 'Monthly Burn',
    currentRunway: 'Current Runway',
    investorSecurity: 'Investor Security',
    investorPin: 'Investor PIN Code',
    pinDesc: 'Set a unique PIN for this investor. They will need this code to access the presentation link.',
    shareLink: 'Share Link',
    generateLink: 'Generate Secure Link',
    linkDesc: 'This link contains all current context data and slide selection.',
    postMeeting: 'Post-Meeting Actions',
    pdfExport: 'PDF Export',
    emailLink: 'Email Link',
    initialize: 'Initialize Deck',
    deckArch: 'Deck Architecture',
    slidesActive: 'Slides Active',
    dragDrop: 'DRAG & DROP DISABLED (USE CONTROLS)',
    guide: {
      title: 'Make Golf PitchOS™',
      subtitle: 'Instruction Manual',
      step1: 'Step 1: Context (Personalization)',
      step1Desc: 'Why? Investors see hundreds of generic decks. By filling in "Target Entity" and fetching their logo via "Partner Website", the system automatically co-brands the entire presentation.',
      step1List: [
        'Their logo appears next to Make Golf\'s logo on all slides (header).',
        'Their name appears dynamically in the text on Cover and Ask slides.',
        'This builds immediate trust and shows professionalism.'
      ],
      step2: 'Step 2: Financials (The Numbers)',
      step2Desc: 'Fill in the numbers under the "Financials" tab. These are not just notes – they are injected directly into "The Ask" and "Financial Highlights" slides.',
      step2List: [
        'Ask Amount: How much we are raising (e.g. 5 MSEK).',
        'Valuation: Pre-money valuation (e.g. 25 MSEK).',
        'Runway: How long the money lasts.'
      ],
      step3: 'Step 3: Presentation',
      step3Desc: 'When you click "INITIALIZE DECK", the presentation starts in full-screen mode.',
      nextSlide: 'Next Slide',
      exit: 'Exit & Edit',
      understand: 'I understand, let me build'
    }
  },
  sv: {
    missionControl: 'Mission Control',
    context: 'Kontext',
    financials: 'Finansiellt',
    share: 'Dela',
    targetEntity: 'Målföretag / Investerare',
    investorNamePlaceholder: 'Investerare / Företagsnamn',
    websitePlaceholder: 'dormy.se',
    logoUrl: 'Direkt Logo URL (Valfritt)',
    logoLoaded: 'Logotyp Laddad',
    meetingObjective: 'Mötesmål',
    contactEmail: 'Kontakt Email',
    dealStructure: 'Affärsstruktur',
    preMoneyVal: 'Pre-Money Värdering',
    askAmount: 'Investeringsbelopp',
    monthlyBurn: 'Månatlig Burn Rate',
    currentRunway: 'Nuvarande Runway',
    investorSecurity: 'Investerarsäkerhet',
    investorPin: 'Investerare PIN-kod',
    pinDesc: 'Ange en unik PIN för denna investerare. De behöver denna kod för att komma åt länken.',
    shareLink: 'Dela Länk',
    generateLink: 'Generera Säker Länk',
    linkDesc: 'Denna länk innehåller all nuvarande kontextdata och slide-val.',
    postMeeting: 'Åtgärder efter möte',
    pdfExport: 'PDF Export',
    emailLink: 'Maila Länk',
    initialize: 'Starta Presentation',
    deckArch: 'Presentationens Arkitektur',
    slidesActive: 'Slides Aktiva',
    dragDrop: 'DRAG & DROP INAKTIVERAT (ANVÄND KONTROLLER)',
    guide: {
      title: 'Make Golf PitchOS™',
      subtitle: 'Instruktionsmanual',
      step1: 'Steg 1: Kontext (Personalisering)',
      step1Desc: 'Varför? Investerare ser hundratals generiska decks. Genom att fylla i "Target Entity" och hämta deras logotyp via "Partner Website", co-brandar systemet automatiskt hela presentationen.',
      step1List: [
        'Deras logotyp visas bredvid Make Golfs logotyp på alla slides (header).',
        'Deras namn dyker upp dynamiskt i texten på Cover och Ask-sliden.',
        'Detta bygger omedelbart förtroende och visar på professionalitet.'
      ],
      step2: 'Steg 2: Finansiellt (Siffrorna)',
      step2Desc: 'Fyll i siffrorna under fliken "Financials". Dessa är inte bara anteckningar – de injiceras direkt i "The Ask" och "Financial Highlights"-slidena.',
      step2List: [
        'Ask Amount: Hur mycket vi reser (t.ex. 5 MSEK).',
        'Valuation: Pre-money värdering (t.ex. 25 MSEK).',
        'Runway: Hur länge pengarna räcker.'
      ],
      step3: 'Steg 3: Presentation',
      step3Desc: 'När du klickar på "INITIALIZE DECK" startar presentationen i fullskärmsläge.',
      nextSlide: 'Nästa Slide',
      exit: 'Avsluta & Redigera',
      understand: 'Jag förstår, låt mig bygga'
    }
  }
};

const SetupScreen: React.FC<SetupScreenProps> = ({
  slides,
  selectedSlides,
  toggleSlide,
  contextData,
  setContextData,
  startPresentation
}) => {
  
  const [activeTab, setActiveTab] = useState<'context' | 'financials' | 'share'>('context');
  const [logoLoading, setLogoLoading] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [showGuide, setShowGuide] = useState(true); // Default open to show instructions
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);
  
  const t = translations[contextData.language || 'en'];

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

  const handleGenerateLink = () => {
    const link = generateShareLink(contextData, selectedSlides);
    setGeneratedLink(link);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleLanguage = () => {
    setContextData({ ...contextData, language: contextData.language === 'en' ? 'sv' : 'en' });
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
                        <h3 className="text-xl font-display font-bold text-white uppercase">{t.guide.title}</h3>
                        <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest">{t.guide.subtitle}</p>
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
                       <Globe className="w-4 h-4" /> {t.guide.step1}
                    </h4>
                    <p className="text-brand-polar/80 text-sm leading-relaxed">
                       {t.guide.step1Desc}
                    </p>
                    <ul className="text-xs text-brand-polar/50 list-disc list-inside ml-2 space-y-1">
                       {t.guide.step1List.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                 </div>

                 <div className="h-px bg-white/5 w-full"></div>

                 <div className="space-y-2">
                    <h4 className="text-brand-green font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                       <BarChart3 className="w-4 h-4" /> {t.guide.step2}
                    </h4>
                    <p className="text-brand-polar/80 text-sm leading-relaxed">
                       {t.guide.step2Desc}
                    </p>
                    <ul className="text-xs text-brand-polar/50 list-disc list-inside ml-2 space-y-1">
                       {t.guide.step2List.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                 </div>

                 <div className="h-px bg-white/5 w-full"></div>

                 <div className="space-y-2">
                    <h4 className="text-brand-blue font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                       <Presentation className="w-4 h-4" /> {t.guide.step3}
                    </h4>
                    <p className="text-brand-polar/80 text-sm leading-relaxed">
                       {t.guide.step3Desc}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                       <div className="bg-white/5 p-3 rounded border border-white/5">
                          <span className="text-white font-bold text-xs block mb-1">Space / &rarr;</span>
                          <span className="text-[10px] text-white/50">{t.guide.nextSlide}</span>
                       </div>
                       <div className="bg-white/5 p-3 rounded border border-white/5">
                          <span className="text-white font-bold text-xs block mb-1">ESC</span>
                          <span className="text-[10px] text-white/50">{t.guide.exit}</span>
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
                    {t.guide.understand}
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
                    <h1 className="text-lg font-display font-bold text-white leading-none">{t.missionControl}</h1>
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
            
            {/* Language Toggle */}
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2 py-1 bg-white/5 hover:bg-white/10 rounded border border-white/10 text-[10px] font-mono uppercase text-white/50 hover:text-white transition-colors"
            >
                <Globe className="w-3 h-3" />
                {contextData.language === 'en' ? 'EN' : 'SV'}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/5 flex-shrink-0">
            <button 
                onClick={() => setActiveTab('context')}
                className={`flex-1 py-3 text-xs font-mono uppercase tracking-widest transition-colors ${activeTab === 'context' ? 'bg-white/5 text-brand-mink border-b-2 border-brand-mink' : 'text-white/30 hover:text-white'}`}
            >
                {t.context}
            </button>
            <button 
                onClick={() => setActiveTab('financials')}
                className={`flex-1 py-3 text-xs font-mono uppercase tracking-widest transition-colors ${activeTab === 'financials' ? 'bg-white/5 text-brand-mink border-b-2 border-brand-mink' : 'text-white/30 hover:text-white'}`}
            >
                {t.financials}
            </button>
            <button 
                onClick={() => setActiveTab('share')}
                className={`flex-1 py-3 text-xs font-mono uppercase tracking-widest transition-colors ${activeTab === 'share' ? 'bg-white/5 text-brand-mink border-b-2 border-brand-mink' : 'text-white/30 hover:text-white'}`}
            >
                {t.share}
            </button>
        </div>

        {/* Form Area - Scrollable */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6 custom-scrollbar">
            
            {activeTab === 'context' && (
                <div className="space-y-5">
                    {/* Investor Identity */}
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <label className="text-[10px] font-mono uppercase text-brand-mink mb-3 block flex justify-between">
                            {t.targetEntity} <Globe className="w-3 h-3 opacity-50" />
                        </label>
                        <div className="space-y-3">
                            <input 
                                type="text" name="investorName" value={contextData.investorName} onChange={handleInputChange}
                                className="w-full bg-black border border-white/10 p-2 text-sm rounded text-white focus:border-brand-mink focus:outline-none placeholder:text-white/10 font-display"
                                placeholder={t.investorNamePlaceholder}
                            />
                            
                            {/* Website Fetcher */}
                            <div className="flex gap-2 relative">
                                <input 
                                    type="text" name="partnerWebsite" value={contextData.partnerWebsite} onChange={handleInputChange}
                                    className="w-full bg-black border border-white/10 p-2 text-sm rounded text-white focus:border-brand-mink focus:outline-none placeholder:text-white/10 font-mono"
                                    placeholder={t.websitePlaceholder}
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
                                    <label className="text-[9px] font-mono uppercase text-white/30">{t.logoUrl}</label>
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
                                    <span className="text-[10px] text-green-500 font-mono">{t.logoLoaded}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div>
                            <label className="block text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">{t.meetingObjective}</label>
                            <input 
                                type="text" name="meetingPurpose" value={contextData.meetingPurpose} onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:border-brand-mink focus:outline-none transition-colors"
                                placeholder="e.g. Series A Lead"
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">{t.contactEmail}</label>
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
                        <label className="text-[10px] font-mono uppercase text-brand-mink mb-2 block">{t.dealStructure}</label>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="text-[9px] text-white/30 uppercase block mb-1">{t.preMoneyVal}</span>
                                <input 
                                    type="text" name="valuation" value={contextData.valuation} onChange={handleInputChange}
                                    className="w-full bg-black border border-white/10 p-2 text-sm rounded text-white font-mono text-right"
                                />
                            </div>
                            <div>
                                <span className="text-[9px] text-white/30 uppercase block mb-1">{t.askAmount}</span>
                                <input 
                                    type="text" name="askAmount" value={contextData.askAmount} onChange={handleInputChange}
                                    className="w-full bg-black border border-white/10 p-2 text-sm rounded text-white font-mono text-right"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                         <div>
                            <label className="block text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">{t.monthlyBurn}</label>
                            <input 
                                type="text" name="burnRate" value={contextData.burnRate} onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:border-brand-mink focus:outline-none transition-colors font-mono"
                                placeholder="e.g. 450k SEK"
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">{t.currentRunway}</label>
                            <input 
                                type="text" name="runway" value={contextData.runway} onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:border-brand-mink focus:outline-none transition-colors font-mono"
                                placeholder="e.g. 8 Months"
                            />
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'share' && (
                <div className="space-y-5">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 space-y-4">
                        <label className="text-[10px] font-mono uppercase text-brand-mink mb-2 block flex items-center gap-2">
                            <Lock className="w-3 h-3" /> {t.investorSecurity}
                        </label>
                        <div>
                            <span className="text-[9px] text-white/30 uppercase block mb-1">{t.investorPin}</span>
                            <input 
                                type="text" name="investorPin" value={contextData.investorPin || ''} onChange={handleInputChange}
                                className="w-full bg-black border border-white/10 p-2 text-sm rounded text-white font-mono tracking-widest"
                                placeholder="e.g. 9988"
                            />
                            <p className="text-[9px] text-white/30 mt-2">
                                {t.pinDesc}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 space-y-4">
                        <label className="text-[10px] font-mono uppercase text-brand-mink mb-2 block flex items-center gap-2">
                            <Share2 className="w-3 h-3" /> {t.shareLink}
                        </label>
                        
                        <button 
                            onClick={handleGenerateLink}
                            className="w-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase py-3 rounded border border-white/10 transition-colors"
                        >
                            {t.generateLink}
                        </button>

                        {generatedLink && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                                <div className="relative">
                                    <input 
                                        readOnly
                                        value={generatedLink}
                                        className="w-full bg-black border border-white/10 p-2 text-[10px] rounded text-white/60 font-mono pr-10"
                                    />
                                    <button 
                                        onClick={copyToClipboard}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                                    >
                                        {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                                    </button>
                                </div>
                                <p className="text-[9px] text-white/30">
                                    {t.linkDesc}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Export Actions */}
            <div className="pt-6 border-t border-white/10 mt-6">
                <label className="text-[10px] font-mono uppercase text-white/30 mb-3 block">{t.postMeeting}</label>
                <div className="grid grid-cols-2 gap-3">
                    <button onClick={handleExportPDF} className="flex items-center justify-center gap-2 bg-[#222] hover:bg-[#333] border border-white/10 rounded py-3 text-xs font-bold text-white transition-colors">
                        <Download className="w-3 h-3" /> {t.pdfExport}
                    </button>
                    <button onClick={handleEmailDeck} className="flex items-center justify-center gap-2 bg-[#222] hover:bg-[#333] border border-white/10 rounded py-3 text-xs font-bold text-white transition-colors">
                        <Mail className="w-3 h-3" /> {t.emailLink}
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
                <Play className="w-5 h-5 fill-current" /> {t.initialize}
            </button>
        </div>
      </div>

      {/* --- RIGHT PANEL: DECK ARCHITECTURE --- */}
      <div className="flex-grow bg-[#0A0A0A] overflow-hidden flex flex-col relative h-full">
         
         {/* Top Bar */}
         <div className="h-16 border-b border-white/5 flex justify-between items-center px-8 bg-[#0A0A0A]/90 backdrop-blur z-10 flex-shrink-0">
            <div className="flex items-center gap-4">
                <h2 className="text-sm font-display font-bold text-white uppercase tracking-wide">{t.deckArch}</h2>
                <span className="bg-brand-surface border border-white/10 text-white/50 px-2 py-0.5 rounded text-[10px] font-mono">
                    {selectedSlides.length} {t.slidesActive}
                </span>
            </div>
            <div className="text-[10px] font-mono text-white/30">
                {t.dragDrop}
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