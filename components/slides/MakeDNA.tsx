import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, ArrowRight, CheckCircle, Database, Play, X, ExternalLink } from 'lucide-react';

const MakeDNA: React.FC = () => {
  const [showLiveDemo, setShowLiveDemo] = useState(false);
  const DASHBOARD_URL = "https://frontend-seven-iota-56.vercel.app/dashboard";

  return (
    <div className="w-full max-w-6xl h-full flex flex-col">
      
      {/* Header Area */}
      <div className="flex justify-between items-end mb-8 shrink-0">
        <div>
           <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-2 block">PROPRIETARY TECHNOLOGY</span>
           <h2 className="text-4xl md:text-5xl font-display text-white uppercase">The Brain: MAKE DNA</h2>
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
            /* STATIC SCHEMATIC VIEW */
            <motion.div 
              key="static"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col md:flex-row gap-8 items-stretch h-full"
            >
                {/* LEFT: INPUT */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="w-full md:w-1/4 bg-brand-surface border border-white/5 rounded-xl p-6 flex flex-col justify-between"
                >
                   <div>
                      <Database className="w-8 h-8 text-brand-blue mb-4" />
                      <h3 className="text-xl font-display text-white mb-2">1. Input Data</h3>
                      <ul className="text-xs font-mono text-brand-polar/60 space-y-2">
                         <li>• Trackman Launch Data</li>
                         <li>• Biometrics</li>
                         <li>• Impact Location</li>
                         <li>• Player Preference</li>
                      </ul>
                   </div>
                   <div className="text-[10px] text-brand-polar/30 font-mono mt-4">RAW JSON STREAM</div>
                </motion.div>

                {/* MIDDLE: THE ENGINE */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.2 }}
                   className="w-full md:w-1/2 bg-brand-black border border-brand-mink/30 rounded-xl p-8 relative overflow-hidden flex flex-col justify-center items-center shadow-[0_0_50px_rgba(255,34,76,0.15)]"
                >
                   <div className="absolute inset-0 bg-grid opacity-20"></div>
                   <div className="w-32 h-32 rounded-full border-2 border-brand-mink flex items-center justify-center mb-6 relative z-10 bg-brand-black">
                      <Network className="w-16 h-16 text-brand-mink" />
                   </div>
                   <h3 className="text-3xl font-display text-white mb-2 relative z-10">AI Optimization</h3>
                   <p className="text-center text-sm text-brand-polar/70 max-w-xs relative z-10 mb-6">
                      Our algorithm adjusts Center of Gravity (CoG), MOI, Offset, and Sole Geometry to neutralize the player's specific miss-pattern.
                   </p>
                   
                   <div className="flex gap-4 relative z-10">
                      <div className="bg-brand-green/10 text-brand-green px-3 py-1 rounded text-[10px] font-mono border border-brand-green/20 flex items-center gap-2">
                         <CheckCircle className="w-3 h-3" /> Physics Check
                      </div>
                      <div className="bg-brand-green/10 text-brand-green px-3 py-1 rounded text-[10px] font-mono border border-brand-green/20 flex items-center gap-2">
                         <CheckCircle className="w-3 h-3" /> R&A Compliant
                      </div>
                   </div>
                </motion.div>

                {/* RIGHT: OUTPUT */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full md:w-1/4 bg-brand-surface border border-white/5 rounded-xl p-6 flex flex-col justify-between"
                >
                   <div>
                      <ArrowRight className="w-8 h-8 text-brand-green mb-4" />
                      <h3 className="text-xl font-display text-white mb-2">3. Production</h3>
                      <ul className="text-xs font-mono text-brand-polar/60 space-y-2">
                         <li>• STEP/CAD File</li>
                         <li>• Lattice Generation</li>
                         <li>• Printer Instructions</li>
                         <li>• QC Parameters</li>
                      </ul>
                   </div>
                   <div className="text-[10px] text-brand-polar/30 font-mono mt-4">READY TO PRINT</div>
                </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MakeDNA;