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
