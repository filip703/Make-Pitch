import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Settings, Factory, Flag, Activity, ScanLine, Crosshair, Play, X, ExternalLink, Database, Cpu, Zap, Radio } from 'lucide-react';

const MakeDNA: React.FC = () => {
  const [showLiveDemo, setShowLiveDemo] = useState(false);
  const DASHBOARD_URL = "https://frontend-seven-iota-56.vercel.app/dashboard";

  // Configuration for the 4 cardinal points
  const PHASES = [
    {
      id: 'phase-1',
      label: 'DATA',
      sub: 'INPUT',
      icon: Database,
      color: 'text-brand-blue',
      borderColor: 'border-brand-blue',
      shadow: 'shadow-brand-blue/40',
      pos: 'top-0 left-1/2 -translate-x-1/2', // North
      detail: 'Swing Biometrics'
    },
    {
      id: 'phase-2',
      label: 'DESIGN',
      sub: 'LOGIC',
      icon: Cpu,
      color: 'text-brand-mink',
      borderColor: 'border-brand-mink',
      shadow: 'shadow-brand-mink/40',
      pos: 'top-1/2 right-0 -translate-y-1/2', // East
      detail: 'Parametric Logic'
    },
    {
      id: 'phase-3',
      label: 'BUILD',
      sub: 'OUTPUT',
      icon: Factory,
      color: 'text-brand-green',
      borderColor: 'border-brand-green',
      shadow: 'shadow-brand-green/40',
      pos: 'bottom-0 left-1/2 -translate-x-1/2', // South
      detail: '17-4PH Steel'
    },
    {
      id: 'phase-4',
      label: 'PLAY',
      sub: 'FEEDBACK',
      icon: Flag,
      color: 'text-brand-amber',
      borderColor: 'border-brand-amber',
      shadow: 'shadow-brand-amber/40',
      pos: 'top-1/2 left-0 -translate-y-1/2', // West
      detail: 'Performance Loop'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col relative">
      
      {/* 1. HEADER */}
      <div className="w-full flex justify-between items-start z-30 pointer-events-none mb-4 flex-shrink-0">
        <div className="pointer-events-auto">
           <div className="flex items-center gap-3 mb-2">
                <span className="text-brand-mink font-mono text-xs uppercase tracking-widest">THE CORE ENGINE</span>
                <div className="h-px w-8 bg-brand-mink/30"></div>
           </div>
           <h2 className="text-4xl md:text-5xl font-display text-white uppercase leading-none tracking-tight">
             The Data Flywheel
           </h2>
        </div>
        
        <div className="pointer-events-auto pl-8 hidden md:block">
            <button 
               onClick={() => setShowLiveDemo(!showLiveDemo)}
               className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all ${showLiveDemo ? 'bg-white text-black border-white shadow-xl' : 'bg-brand-surface/50 border-brand-mink/30 text-brand-mink hover:bg-brand-mink hover:text-white hover:border-brand-mink backdrop-blur-sm'}`}
            >
               {showLiveDemo ? (
                  <>
                    <X className="w-4 h-4" /> <span className="font-display font-bold uppercase text-sm">Close Demo</span>
                  </>
               ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" /> <span className="font-display font-bold uppercase text-sm">Launch Dashboard</span>
                  </>
               )}
            </button>
        </div>
      </div>

      {/* 2. VISUALIZATION AREA */}
      <div className="flex-grow relative flex items-center justify-center w-full overflow-hidden">
        <AnimatePresence mode="wait">
          
          {showLiveDemo ? (
            /* LIVE IFRAME VIEW */
            <motion.div 
               key="live"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               className="w-full h-full bg-white rounded-xl overflow-hidden border border-white/20 shadow-2xl z-40 relative"
            >
               <iframe 
                  src={DASHBOARD_URL}
                  className="w-full h-full border-0"
                  title="Make DNA Dashboard"
               />
            </motion.div>
          ) : (
            /* CIRCULAR ENGINE VIEW */
            <motion.div 
              key="loop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center"
            >
                {/* --- THE STAGE: Fixed Aspect Ratio Box (650px) scaled to fit --- */}
                {/* This ensures perfect geometry regardless of screen aspect ratio */}
                <div className="relative w-[650px] h-[650px] scale-[0.55] md:scale-[0.7] lg:scale-[0.9] xl:scale-100 flex-shrink-0">
                    
                    {/* A. Background Rings (Radar Style) */}
                    <div className="absolute inset-0 rounded-full border border-white/5"></div>
                    <div className="absolute inset-[15%] rounded-full border border-white/5 border-dashed opacity-50 animate-[spin_120s_linear_infinite]"></div>
                    <div className="absolute inset-[30%] rounded-full border border-white/5 opacity-30"></div>
                    
                    {/* B. The Connector Cross (The Spokes) */}
                    {/* Vertical Line (North-South) */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-brand-blue via-brand-mink to-brand-green opacity-40"></div>
                    {/* Horizontal Line (West-East) */}
                    <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-brand-amber via-brand-mink to-brand-mink opacity-40"></div>

                    {/* C. The Radar Sweep Animation */}
                    <div className="absolute inset-0 rounded-full overflow-hidden opacity-10 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 w-1/2 h-[2px] bg-white origin-left animate-[spin_4s_linear_infinite] shadow-[0_0_50px_rgba(255,255,255,0.8)]"></div>
                    </div>

                    {/* D. Central Hub (The Core) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-20">
                         <div className="relative w-full h-full rounded-full bg-[#090909] border border-white/10 flex flex-col items-center justify-center shadow-[0_0_100px_rgba(0,0,0,1)] z-20">
                            {/* Inner Ring */}
                            <div className="absolute inset-4 rounded-full border-2 border-dashed border-brand-mink/20 animate-[spin_60s_linear_infinite]"></div>
                            
                            <Activity className="w-8 h-8 text-brand-mink mb-2 animate-pulse" />
                            <h3 className="text-5xl font-display font-bold text-white tracking-tighter">DNA</h3>
                            <div className="text-[10px] font-mono text-brand-polar/40 uppercase tracking-[0.3em] mt-1">Engine v2.0</div>

                            {/* Status Indicators */}
                            <div className="absolute -bottom-8 flex gap-4">
                                <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-[9px] font-mono text-white/40">ONLINE</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
                                    <span className="text-[9px] font-mono text-white/40">SYNC</span>
                                </div>
                            </div>
                         </div>
                    </div>

                    {/* E. The 4 Nodes (Compass Points) */}
                    {PHASES.map((phase, index) => (
                        <div key={phase.id} className={`absolute ${phase.pos} z-30 group`}>
                            {/* Node Container */}
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: index * 0.1, type: "spring" }}
                                className={`
                                    relative w-28 h-28 rounded-full bg-[#111] border border-white/10 
                                    flex flex-col items-center justify-center cursor-pointer
                                    hover:border-white/50 hover:scale-110 transition-all duration-300
                                    shadow-2xl ${phase.shadow}
                                `}
                            >
                                {/* Active Ping Ring */}
                                <div className={`absolute inset-0 rounded-full border ${phase.borderColor} opacity-0 group-hover:opacity-100 group-hover:animate-ping`}></div>
                                
                                <phase.icon className={`w-6 h-6 ${phase.color} mb-1`} />
                                <div className="text-sm font-bold font-display text-white">{phase.label}</div>
                                <div className="text-[9px] font-mono text-white/40 uppercase">{phase.sub}</div>

                                {/* Hover Detail Card (Floating) */}
                                <div className={`
                                    absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                                    bg-black/90 border border-white/20 p-3 rounded w-40 z-50
                                    ${index === 0 ? 'bottom-full mb-4' : ''}
                                    ${index === 1 ? 'left-full ml-4' : ''}
                                    ${index === 2 ? 'top-full mt-4' : ''}
                                    ${index === 3 ? 'right-full mr-4' : ''}
                                `}>
                                    <div className="flex items-center gap-2 mb-1">
                                        <ScanLine className="w-3 h-3 text-white/50" />
                                        <span className="text-[9px] font-mono text-white uppercase">Module</span>
                                    </div>
                                    <div className={`text-xs text-white`}>{phase.detail}</div>
                                </div>
                            </motion.div>
                        </div>
                    ))}

                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. MOBILE VIEW (Visible only on very small screens where loop breaks) */}
      <div className="lg:hidden absolute bottom-4 left-0 w-full text-center">
         <div className="text-[10px] font-mono text-white/20 uppercase animate-pulse">
            System Logic Visualization
         </div>
      </div>
    </div>
  );
};

export default MakeDNA;