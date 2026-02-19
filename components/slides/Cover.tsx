import React from 'react';
import { motion } from 'framer-motion';
import { SlideContextData } from '../../types';

const Cover: React.FC<{ context: SlideContextData }> = ({ context }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="w-full max-w-5xl text-center"
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-3 border border-brand-mink/30 bg-brand-mink/10 px-4 py-2 rounded-full mb-8"
      >
        <span className="w-2 h-2 bg-brand-mink rounded-full animate-pulse"></span>
        <span className="text-brand-mink font-mono text-xs uppercase tracking-[0.2em]">
          {context.meetingPurpose || 'Investment Opportunity'}
        </span>
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-white mb-8 uppercase leading-[0.9]"
      >
        Golf Deserves<br/>
        <span className="text-brand-mink">Better.</span>
      </motion.h1>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl md:text-2xl text-brand-polar/60 font-light font-sans max-w-2xl mx-auto leading-relaxed"
      >
        <p className="mb-4">
          Redefining premium golf clubs through data, design, and 3D printing.
        </p>
        {context.investorName && (
          <p className="text-sm font-mono text-brand-mink mt-8">
            Prepared exclusively for {context.investorName}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Cover;