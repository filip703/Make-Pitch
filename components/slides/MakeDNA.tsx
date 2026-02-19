import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, ArrowRight, CheckCircle, Database, Play, X, ExternalLink, Scan, Cpu, Box, FileCode } from 'lucide-react';

const MakeDNA: React.FC = () => {
  const [showLiveDemo, setShowLiveDemo] = useState(false);
  const DASHBOARD_URL = "https://frontend-seven-iota-56.vercel.app/dashboard";

  const steps = [
      {
          id: 1,
          icon: Scan,
          title: "1. Capture",
          subtitle: "Raw Signal",
          desc: "We ingest data from any standard launch monitor (Trackman, Quad, Flightscope). No new hardware required for fitters.",
          color: "text-brand-blue"
      },
      {
          id: 2,
          icon: Network,
          title: "2. Generate",
          subtitle: "Parametric Logic",
          desc: "Our AI engine processes the biometrics and adjusts 14 active parameters (CoG, Offset, Sole, Inertia) to neutralize miss-patterns.",
          color: "text-brand-mink"
      },
      {
          id: 3,
          icon: Box,
          title: "3. Digital Twin",
          subtitle: "Verification",
          desc: "The system simulates mass properties and physics before a single atom is printed. Ensuring performance matches intent.",
          color: "text-brand-amber"
      },
      {
          id: 4,
          icon: FileCode,
          title: "4. Production",
          subtitle: "Manufacturing",
          desc: "A validated STEP file is sent directly to our printing partners. 17-4PH Steel. 48h turnaround.",
          color: "text-brand-green"
      }
  ];

  return (
    <div className="w-full max-w-7xl h-full flex flex-col">
      
      {/* Header Area */}
      <div className="flex justify-between items-end mb-12 shrink-0">
        <div>
           <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-2 block">PROPRIETARY TECHNOLOGY</span>
           <h2 className="text-4xl md:text-5xl font-display text-white uppercase">The Process: MAKE DNA</h2>
           <p className="text-brand-polar/50 font-mono text-xs mt-2">FROM DATA TO MATTER IN 4 STEPS</p>
        </div>
        
        {/* Toggle Button */}
        <button 
           onClick={() => setShowLiveDemo(!showLiveDemo)}
           className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${showLiveDemo ? 'bg-white text-black border-white' : 'bg-brand-surface border-brand-mink/50 text-brand-mink hover:bg-brand-mink hover:text-white'}`}
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

      <div className="relative flex-grow min-h-[400px]">
        <AnimatePresence mode="wait">
          
          {showLiveDemo ? (
            /* LIVE IFRAME VIEW */
            <motion.div 
               key="live"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.95 }}
               className="absolute inset-0 bg-white rounded-xl overflow-hidden border border-white/20 shadow-2xl"
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
            /* 4-STEP STATIC VIEW */
            <motion.div 
              key="static"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 h-full"
            >
                {steps.map((step, idx) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.15 }}
                        className="bg-brand-surface border border-white/5 p-6 rounded-xl flex flex-col relative group hover:border-brand-mink/30 transition-colors"
                    >
                        {/* Connecting Arrow (Desktop only, not on last item) */}
                        {idx < 3 && (
                            <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-white/10">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        )}

                        <div className={`w-12 h-12 rounded-lg bg-brand-black flex items-center justify-center mb-6 ${step.color} border border-white/5`}>
                            <step.icon className="w-6 h-6" />
                        </div>

                        <div className="flex-grow">
                            <h3 className="text-xl font-display font-bold text-white mb-1">{step.title}</h3>
                            <div className="text-[10px] font-mono text-brand-polar/40 uppercase tracking-widest mb-4">{step.subtitle}</div>
                            <p className="text-xs text-brand-polar/60 leading-relaxed font-mono">
                                {step.desc}
                            </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/5">
                            <div className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${step.color.replace('text-', 'bg-')}`}></div>
                                <span className="text-[9px] text-white/30 uppercase tracking-wider">Status: Ready</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MakeDNA;