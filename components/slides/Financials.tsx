import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, DollarSign, Target } from 'lucide-react';

const Financials: React.FC = () => {
  return (
    <div className="w-full max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">FINANCIAL HIGHLIGHTS</span>
        <h2 className="text-4xl md:text-5xl font-display text-white uppercase">Unit Economics</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
         {/* Gross Margin */}
         <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-brand-surface border border-white/10 p-6 rounded-xl text-center"
         >
            <div className="w-12 h-12 rounded-full bg-brand-mink/10 flex items-center justify-center mx-auto mb-4 text-brand-mink">
               <PieChart className="w-6 h-6" />
            </div>
            <div className="text-4xl font-display font-bold text-white mb-2">68%</div>
            <div className="text-xs font-mono text-brand-polar/50 uppercase tracking-widest">Gross Margin</div>
            <div className="mt-4 text-[10px] text-brand-polar/40 border-t border-white/5 pt-3">
               Driven by additive mfg & zero inventory model.
            </div>
         </motion.div>

         {/* AOV */}
         <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-brand-surface border border-white/10 p-6 rounded-xl text-center"
         >
            <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4 text-brand-green">
               <DollarSign className="w-6 h-6" />
            </div>
            <div className="text-4xl font-display font-bold text-white mb-2">$1,850</div>
            <div className="text-xs font-mono text-brand-polar/50 uppercase tracking-widest">Average Order Value</div>
            <div className="mt-4 text-[10px] text-brand-polar/40 border-t border-white/5 pt-3">
               Full iron set (7 clubs) + custom fitting fee.
            </div>
         </motion.div>

         {/* LTV:CAC */}
         <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-brand-surface border border-white/10 p-6 rounded-xl text-center"
         >
            <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4 text-brand-blue">
               <Target className="w-6 h-6" />
            </div>
            <div className="text-4xl font-display font-bold text-white mb-2">4:1</div>
            <div className="text-xs font-mono text-brand-polar/50 uppercase tracking-widest">LTV / CAC Ratio</div>
            <div className="mt-4 text-[10px] text-brand-polar/40 border-t border-white/5 pt-3">
               High retention via yearly re-fit & wedge replacement.
            </div>
         </motion.div>

         {/* Growth */}
         <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-brand-surface border border-white/10 p-6 rounded-xl text-center"
         >
            <div className="w-12 h-12 rounded-full bg-brand-amber/10 flex items-center justify-center mx-auto mb-4 text-brand-amber">
               <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-4xl font-display font-bold text-white mb-2">24mo</div>
            <div className="text-xs font-mono text-brand-polar/50 uppercase tracking-widest">Runway Goal</div>
            <div className="mt-4 text-[10px] text-brand-polar/40 border-t border-white/5 pt-3">
               Targeting break-even at 500 sets/year.
            </div>
         </motion.div>
      </div>

      {/* Projection Graph Mockup */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.5 }}
         className="bg-brand-black border border-white/10 rounded-xl p-8 relative overflow-hidden"
      >
         <div className="flex justify-between items-end mb-6">
            <div>
               <h3 className="text-xl font-display font-bold text-white">Revenue Projection</h3>
               <p className="text-xs font-mono text-brand-polar/50">Conservative estimate based on current partner pipeline.</p>
            </div>
            <div className="flex gap-4">
               <div className="flex items-center gap-2 text-[10px] font-mono text-brand-polar/60">
                  <div className="w-2 h-2 rounded-full bg-brand-mink"></div> Direct
               </div>
               <div className="flex items-center gap-2 text-[10px] font-mono text-brand-polar/60">
                  <div className="w-2 h-2 rounded-full bg-brand-blue"></div> Partner
               </div>
            </div>
         </div>
         
         {/* Simplified Bar Visualization */}
         <div className="flex items-end justify-between h-32 gap-4">
            {[20, 35, 55, 80, 120, 180, 260, 400].map((h, i) => (
               <div key={i} className="w-full flex flex-col justify-end h-full gap-1">
                  <motion.div 
                     initial={{ height: 0 }}
                     animate={{ height: `${h * 0.3}%` }}
                     transition={{ duration: 1, delay: i * 0.1 }}
                     className="w-full bg-brand-blue opacity-50 rounded-sm"
                  ></motion.div>
                  <motion.div 
                     initial={{ height: 0 }}
                     animate={{ height: `${h * 0.7}%` }}
                     transition={{ duration: 1, delay: i * 0.1 }}
                     className="w-full bg-brand-mink rounded-sm"
                  ></motion.div>
                  <div className="text-[9px] font-mono text-center text-brand-polar/30 mt-2">Q{i + 1}</div>
               </div>
            ))}
         </div>
      </motion.div>
    </div>
  );
};

export default Financials;