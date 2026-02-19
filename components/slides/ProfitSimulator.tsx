import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Package, ArrowRight, AlertOctagon } from 'lucide-react';

const ProfitSimulator: React.FC = () => {
  const [volume, setVolume] = useState(100);
  const PRICE_PER_SET = 18000; // SEK
  
  // Make Golf Metrics
  const makeRevenue = volume * PRICE_PER_SET;
  const makeInventory = 0;
  
  // Traditional OEM Metrics (Hypothetical)
  // Assuming they must pre-produce 1.5x what they sell to have stock availability
  const traditionalInventoryCost = (volume * 1.5) * (PRICE_PER_SET * 0.4); 

  // Calculate bar heights (normalized)
  const maxVal = 25000000; // Max visual cap
  
  return (
    <div className="w-full max-w-6xl">
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Controls */}
          <div className="lg:col-span-4">
             <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">THE PROFIT SIMULATOR</span>
             <h2 className="text-4xl md:text-5xl font-display text-white uppercase mb-6">Scale Without<br/>The Weight.</h2>
             <p className="text-brand-polar/70 font-light leading-relaxed mb-8">
                Every traditional OEM faces the "Inventory Trap". To sell more, they must buy more stock months in advance. We broke the loop.
             </p>

             <div className="bg-brand-surface border border-white/10 p-8 rounded-xl mb-8">
                <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-mono text-white uppercase">Annual Sets Sold</label>
                    <span className="text-2xl font-display font-bold text-brand-mink">{volume}</span>
                </div>
                <input 
                    type="range" 
                    min="50" 
                    max="1000" 
                    step="10"
                    value={volume}
                    onChange={(e) => setVolume(parseInt(e.target.value))}
                    className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer accent-brand-mink hover:accent-white transition-all"
                />
             </div>

             <div className="flex gap-4 text-xs font-mono text-brand-polar/40">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-brand-mink/20 border border-brand-mink"></div> Make Golf
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white/10 border border-white/20"></div> Traditional OEM
                </div>
             </div>
          </div>

          {/* Visualization */}
          <div className="lg:col-span-8 bg-black/50 border border-white/10 p-8 rounded-xl h-[500px] relative overflow-hidden flex items-end justify-around">
             
             {/* Background Grid */}
             <div className="absolute inset-0 z-0 opacity-20" style={{ 
                backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                backgroundSize: '40px 40px'
             }}></div>

             {/* COLUMN 1: TRADITIONAL OEM */}
             <div className="relative z-10 flex flex-col items-center justify-end h-full w-1/3 opacity-50 hover:opacity-100 transition-opacity duration-300">
                <div className="mb-4 text-center">
                    <h3 className="text-white font-display uppercase text-lg mb-1">Legacy Brand</h3>
                    <div className="text-[10px] font-mono text-red-400 flex items-center gap-1 justify-center"><AlertOctagon className="w-3 h-3" /> HIGH RISK</div>
                </div>

                {/* Stacked Bar */}
                <div className="w-24 relative flex flex-col justify-end h-full">
                    {/* Revenue */}
                    <motion.div 
                        className="w-full bg-white/10 border border-white/20 rounded-t-sm flex items-center justify-center text-xs font-bold text-white/50"
                        animate={{ height: `${(makeRevenue / maxVal) * 100}%` }}
                    >
                        Rev
                    </motion.div>
                    {/* Inventory Cost (The Problem) */}
                    <motion.div 
                        className="w-full bg-red-900/30 border border-red-500/50 flex items-center justify-center text-[10px] text-red-300"
                        animate={{ height: `${(traditionalInventoryCost / maxVal) * 100}%` }}
                    >
                        Stock
                    </motion.div>
                </div>
                <div className="mt-4 text-center">
                    <div className="text-xl font-display font-bold text-white">{(traditionalInventoryCost / 1000000).toFixed(1)}M</div>
                    <div className="text-[10px] font-mono text-white/40 uppercase">Capital Locked</div>
                </div>
             </div>

             {/* VS ARROW */}
             <div className="text-white/20">
                <ArrowRight className="w-8 h-8" />
             </div>

             {/* COLUMN 2: MAKE GOLF */}
             <div className="relative z-10 flex flex-col items-center justify-end h-full w-1/3">
                <div className="mb-4 text-center">
                    <h3 className="text-brand-mink font-display uppercase text-xl font-bold mb-1">Make Golf</h3>
                    <div className="text-[10px] font-mono text-brand-green flex items-center gap-1 justify-center"><TrendingUp className="w-3 h-3" /> SCALABLE</div>
                </div>

                {/* Stacked Bar */}
                <div className="w-24 relative flex flex-col justify-end h-full">
                    {/* Revenue (Same) */}
                    <motion.div 
                        className="w-full bg-brand-mink border border-brand-mink rounded-t-sm flex items-center justify-center text-xs font-bold text-white shadow-[0_0_20px_rgba(255,34,76,0.3)]"
                        animate={{ height: `${(makeRevenue / maxVal) * 100}%` }}
                    >
                        Rev
                    </motion.div>
                    {/* Inventory Cost (ZERO) */}
                    <motion.div 
                        className="w-full bg-transparent border-t-2 border-brand-green h-0 relative"
                        animate={{ height: 2 }}
                    >
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-brand-green font-mono whitespace-nowrap">0 SEK INV</div>
                    </motion.div>
                </div>

                <div className="mt-4 text-center">
                    <div className="text-xl font-display font-bold text-brand-green">0 kr</div>
                    <div className="text-[10px] font-mono text-white/40 uppercase">Capital Locked</div>
                </div>
             </div>

          </div>
       </div>
    </div>
  );
};

export default ProfitSimulator;