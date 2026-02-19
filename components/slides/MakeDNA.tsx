import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Settings, Factory, Flag, ArrowRight, Activity, ScanLine, Crosshair, Play, X, ExternalLink } from 'lucide-react';

const MakeDNA: React.FC = () => {
  const [showLiveDemo, setShowLiveDemo] = useState(false);
  const DASHBOARD_URL = "https://frontend-seven-iota-56.vercel.app/dashboard";

  const PHASES = [
    {
      id: 'phase-1',
      label: 'Data',
      sub: 'ANALYSIS',
      icon: BarChart3,
      color: 'text-brand-blue',
      borderColor: 'border-brand-blue',
      glow: 'group-hover:shadow-[0_0_40px_rgba(45,106,255,0.4)]',
      bg: 'bg-brand-blue/10',
      position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2', // Top
      details: ['Trackman Input', 'Biometric Scan', 'Impact Mapping'],
      stat: '1.2k pts'
    },
    {
      id: 'phase-2',
      label: 'Design',
      sub: 'CONFIG',
      icon: Settings,
      color: 'text-brand-mink',
      borderColor: 'border-brand-mink',
      glow: 'group-hover:shadow-[0_0_40px_rgba(255,34,76,0.4)]',
      bg: 'bg-brand-mink/10',
      position: 'top-1/2 right-0 translate-x-1/2 -translate-y-1/2', // Right
      details: ['Parametric CAD', 'AI Optimization', 'Variable Face'],
      stat: 'Generative'
    },
    {
      id: 'phase-3',
      label: 'Build',
      sub: 'DELIVERY',
      icon: Factory,
      color: 'text-brand-green',
      borderColor: 'border-brand-green',
      glow: 'group-hover:shadow-[0_0_40px_rgba(29,179,109,0.4)]',
      bg: 'bg-brand-green/10',
      position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2', // Bottom
      details: ['MoldJet™ Print', '17-4PH Steel', '99.8% Density'],
      stat: '48 Hours'
    },
    {
      id: 'phase-4',
      label: 'Play',
      sub: 'TRAINING',
      icon: Flag,
      color: 'text-brand-amber',
      borderColor: 'border-brand-amber',
      glow: 'group-hover:shadow-[0_0_40px_rgba(245,166,35,0.4)]',
      bg: 'bg-brand-amber/10',
      position: 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2', // Left
      details: ['Arccos Link', 'Smart Caddie', 'Re-Fit Trigger'],
      stat: 'Live Feed'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col relative">
      
      {/* Header Area */}
      <div className="flex justify-between items-start z-30 pointer-events-none">
        <div className="pointer-events-auto">
           <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-2 block">THE CORE ENGINE</span>
           <h2 className="text-4xl md:text-5xl font-display text-white uppercase">The Data Flywheel</h2>
           <p className="text-brand-polar/50 font-mono text-xs mt-2 max-w-md">
             It's not a line. It's a loop. Every shot hit with a MAKE club feeds data back into the system, making the next generation smarter.
           </p>
        </div>
        
        {/* Toggle Button */}
        <button 
           onClick={() => setShowLiveDemo(!showLiveDemo)}
           className={`pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${showLiveDemo ? 'bg-white text-black border-white' : 'bg-brand-surface border-brand-mink/50 text-brand-mink hover:bg-brand-mink hover:text-white'}`}
        >
           {showLiveDemo ? (
              <>
                <X className="w-4 h-4" /> Close Demo
              </>
           ) : (
              <>
                <Play className="w-4 h-4 fill-current" /> Launch Live Dashboard
              </>
           )}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow relative flex items-center justify-center min-h-[500px]">
        <AnimatePresence mode="wait">
          
          {showLiveDemo ? (
            /* LIVE IFRAME VIEW */
            <motion.div 
               key="live"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               className="absolute inset-0 bg-white rounded-xl overflow-hidden border border-white/20 shadow-2xl z-40 mt-8"
            >
               <div className="absolute top-4 right-4 z-10">
                  <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" className="bg-black/10 hover:bg-black/20 text-black p-2 rounded-full backdrop-blur block">
                     <ExternalLink className="w-4 h-4" />
                  </a>
               </div>
               <iframe 
                  src={DASHBOARD_URL}
                  className="w-full h-full border-0"
                  title="Make DNA Dashboard"
               />
            </motion.div>
          ) : (
            /* CIRCULAR LOOP VIEW */
            <motion.div 
              key="loop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex items-center justify-center"
            >
                {/* --- DESKTOP CIRCULAR LAYOUT --- */}
                <div className="hidden lg:block relative w-[500px] h-[500px]">
                    
                    {/* Static Orbit Rings */}
                    <div className="absolute inset-0 rounded-full border border-white/5"></div>
                    <div className="absolute inset-24 rounded-full border border-white/5 border-dashed opacity-30"></div>
                    
                    {/* Animated Data Stream Ring */}
                    <div className="absolute inset-0 rounded-full border border-transparent border-t-white/10 border-l-white/5 animate-[spin_10s_linear_infinite]"></div>

                    {/* Central Hub - MAKE DNA */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#0A0A0A] border border-white/10 flex flex-col items-center justify-center z-10 shadow-2xl relative overflow-hidden group">
                        
                        {/* Inner Gradients & Effects */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-40"></div>
                        
                        {/* Rotating Core Ring */}
                        <div className="absolute inset-8 rounded-full border border-dashed border-white/10 animate-[spin_30s_linear_infinite]"></div>
                        
                        <div className="relative z-20 text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                            <Activity className="w-4 h-4 text-brand-mink animate-pulse" />
                            <span className="text-brand-polar/40 font-mono text-[10px] uppercase tracking-widest">CORE SYSTEM</span>
                        </div>
                        <h3 className="text-4xl font-display font-bold text-white tracking-tighter mb-1">MAKE DNA</h3>
                        <div className="h-px w-12 bg-white/20 mx-auto my-2"></div>
                        <span className="text-white/30 font-mono text-[9px] uppercase tracking-wider">VERSION 2.1.0</span>
                        </div>
                    </div>

                    {/* Phase Nodes */}
                    {PHASES.map((phase, index) => (
                        <motion.div
                        key={phase.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`absolute ${phase.position} z-20 cursor-pointer group`}
                        >
                        {/* Connection Line to Center */}
                        <div className={`absolute -z-10 bg-gradient-to-r from-transparent via-${phase.borderColor.replace('border-', '')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500
                            ${index === 0 ? 'h-32 w-px top-full left-1/2 -translate-x-1/2 bg-gradient-to-b' : ''}
                            ${index === 1 ? 'w-32 h-px right-full top-1/2 -translate-y-1/2 bg-gradient-to-l' : ''}
                            ${index === 2 ? 'h-32 w-px bottom-full left-1/2 -translate-x-1/2 bg-gradient-to-t' : ''}
                            ${index === 3 ? 'w-32 h-px left-full top-1/2 -translate-y-1/2 bg-gradient-to-r' : ''}
                        `}></div>

                        {/* The Node Circle */}
                        <div className={`w-32 h-32 rounded-full bg-[#121212] border border-white/10 group-hover:border-white/30 transition-all duration-300 relative flex flex-col items-center justify-center ${phase.glow} shadow-2xl`}>
                            
                            {/* Outer Ring Animation on Hover */}
                            <div className={`absolute inset-0 rounded-full border-2 ${phase.borderColor} opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110 group-hover:scale-100`}></div>

                            {/* Icon & Label */}
                            <phase.icon className={`w-6 h-6 ${phase.color} mb-2`} />
                            <div className={`font-display font-bold text-lg text-white`}>{phase.label}</div>
                            <div className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{phase.sub}</div>

                            {/* Stat Badge */}
                            <div className="absolute -top-3 bg-[#1C1C1E] border border-white/10 px-2 py-0.5 rounded text-[9px] font-mono text-white/60 uppercase tracking-wider">
                                {phase.stat}
                            </div>
                        </div>
                        
                        {/* Tech Details Card (Hover) */}
                        <div className={`absolute w-48 bg-[#1C1C1E]/95 backdrop-blur border border-white/10 p-4 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30
                            ${index === 0 ? 'top-0 left-full ml-6 -translate-y-1/4' : ''}
                            ${index === 1 ? 'top-full left-1/2 -translate-x-1/2 mt-6' : ''}
                            ${index === 2 ? 'bottom-0 right-full mr-6 translate-y-1/4' : ''}
                            ${index === 3 ? 'bottom-full left-1/2 -translate-x-1/2 mb-6' : ''}
                        `}>
                            <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                                <ScanLine className={`w-3 h-3 ${phase.color}`} />
                                <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest">MODULE SPECS</span>
                            </div>
                            <ul className="space-y-2">
                                {phase.details.map((detail, i) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-brand-polar/80">
                                    <Crosshair className="w-3 h-3 text-white/20 mt-0.5 shrink-0" />
                                    {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        </motion.div>
                    ))}

                    {/* Directional Flow Arrows */}
                    <div className="absolute top-[15%] right-[15%] text-white/5 group-hover:text-white/20 transition-colors"><ArrowRight className="w-8 h-8 rotate-45" /></div>
                    <div className="absolute bottom-[15%] right-[15%] text-white/5 group-hover:text-white/20 transition-colors"><ArrowRight className="w-8 h-8 rotate-[135deg]" /></div>
                    <div className="absolute bottom-[15%] left-[15%] text-white/5 group-hover:text-white/20 transition-colors"><ArrowRight className="w-8 h-8 rotate-[225deg]" /></div>
                    <div className="absolute top-[15%] left-[15%] text-white/5 group-hover:text-white/20 transition-colors"><ArrowRight className="w-8 h-8 rotate-[315deg]" /></div>

                </div>

                {/* --- MOBILE LAYOUT: STACKED TIMELINE (Visible < lg) --- */}
                <div className="lg:hidden w-full px-4 max-w-sm mt-12">
                    <div className="relative border-l border-white/10 ml-8 space-y-12 py-8">
                        {PHASES.map((phase, index) => (
                            <div key={phase.id} className="relative pl-12">
                                {/* Timeline Node */}
                                <div className={`absolute -left-6 top-0 w-12 h-12 rounded-full bg-[#1C1C1E] border ${phase.borderColor} flex items-center justify-center z-10 shadow-lg`}>
                                    <phase.icon className={`w-5 h-5 ${phase.color}`} />
                                </div>
                                
                                {/* Card */}
                                <div className="bg-[#1C1C1E] border border-white/5 p-5 rounded-lg active:scale-95 transition-transform">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className={`text-xl font-display font-bold text-white`}>{phase.label}</h3>
                                        <span className="text-[9px] font-mono bg-white/5 px-2 py-1 rounded text-white/40">{phase.sub}</span>
                                    </div>
                                    <ul className="space-y-1 mb-3">
                                        {phase.details.slice(0, 2).map((d, i) => (
                                        <li key={i} className="text-xs text-white/60 flex items-center gap-2">
                                            <div className={`w-1 h-1 rounded-full bg-${phase.borderColor.split('-')[1]}-500`}></div>
                                            {d}
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MakeDNA;