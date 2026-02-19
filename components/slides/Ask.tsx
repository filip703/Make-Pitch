import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { SlideContextData } from '../../types';

const Ask: React.FC<{ context: SlideContextData }> = ({ context }) => {
  return (
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
      >
         <div className="flex items-center gap-3 mb-4">
             <span className="text-brand-mink font-mono text-xs uppercase tracking-widest block">THE INVESTMENT</span>
             {context.meetingPurpose && (
                <span className="text-brand-polar/40 font-mono text-xs uppercase tracking-widest block border-l border-white/10 pl-3">
                   {context.meetingPurpose}
                </span>
             )}
         </div>

         <h2 className="text-5xl md:text-7xl font-display text-white mb-8 uppercase leading-none">
            Join The<br/>Revolution.
         </h2>
         <p className="text-lg text-brand-polar/70 font-light leading-relaxed mb-8">
            We are raising capital to move founders to full-time, accelerate GTM activities, and commercialize the MAKEr platform.
         </p>
         
         <div className="space-y-4">
            <div className="flex items-center gap-4 text-white">
               <div className="w-6 h-6 rounded-full bg-brand-mink/20 flex items-center justify-center text-brand-mink">
                  <Check className="w-4 h-4" />
               </div>
               <span className="font-display uppercase text-lg">Secure Founders Full-Time</span>
            </div>
            <div className="flex items-center gap-4 text-white">
               <div className="w-6 h-6 rounded-full bg-brand-mink/20 flex items-center justify-center text-brand-mink">
                  <Check className="w-4 h-4" />
               </div>
               <span className="font-display uppercase text-lg">Market Expansion (EU)</span>
            </div>
            <div className="flex items-center gap-4 text-white">
               <div className="w-6 h-6 rounded-full bg-brand-mink/20 flex items-center justify-center text-brand-mink">
                  <Check className="w-4 h-4" />
               </div>
               <span className="font-display uppercase text-lg">R&D: Platform & Production</span>
            </div>
         </div>

         {context.investorName && (
            <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-xs font-mono text-brand-polar/40 mb-2 uppercase tracking-widest">Prepared For</p>
                <p className="text-2xl font-display text-white">{context.investorName}</p>
            </div>
         )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-brand-surface border border-white/10 p-10 rounded-2xl relative shadow-2xl"
      >
         <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-mink/10 rounded-full blur-2xl"></div>
         
         <div className="text-center">
            <div className="text-sm font-mono text-brand-polar/40 uppercase mb-2">Target Raise</div>
            <div className="text-6xl font-display font-bold text-white mb-2">{context.askAmount}</div>
            <div className="text-xs font-mono text-brand-mink uppercase mb-8">Pre-Money: {context.valuation}</div>
         </div>

         <div className="border-t border-white/10 pt-8 mt-4 grid grid-cols-2 gap-4">
            <div className="bg-brand-black p-4 rounded border border-white/5">
               <div className="text-xl font-display text-white mb-1">Team</div>
               <div className="text-[10px] font-mono text-white/40 uppercase">Full-time ops</div>
            </div>
            <div className="bg-brand-black p-4 rounded border border-white/5">
               <div className="text-xl font-display text-white mb-1">GTM</div>
               <div className="text-[10px] font-mono text-white/40 uppercase">Marketing & Sales</div>
            </div>
            <div className="bg-brand-black p-4 rounded border border-white/5">
               <div className="text-xl font-display text-white mb-1">Dev</div>
               <div className="text-[10px] font-mono text-white/40 uppercase">Software & R&D</div>
            </div>
            <div className="bg-brand-black p-4 rounded border border-white/5">
               <div className="text-xl font-display text-white mb-1">IP</div>
               <div className="text-[10px] font-mono text-white/40 uppercase">Legal & Structure</div>
            </div>
         </div>

         <div className="mt-8">
            <button className="w-full bg-brand-mink text-white font-display font-bold uppercase py-4 rounded hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
               Contact Mårten <ArrowRight className="w-4 h-4" />
            </button>
         </div>
      </motion.div>

    </div>
  );
};

export default Ask;