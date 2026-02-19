import React from 'react';
import { motion } from 'framer-motion';

const WhyNow: React.FC = () => {
  return (
    <div className="w-full max-w-6xl text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">TIMING</span>
        <h2 className="text-4xl md:text-6xl font-display text-white uppercase mb-16">Why Now?</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-brand-surface p-8 rounded-full aspect-square flex flex-col items-center justify-center border border-white/5 hover:border-brand-mink/50 transition-colors"
        >
          <h3 className="text-xl font-display font-bold text-white mb-4">Tech Explosion</h3>
          <p className="text-sm text-brand-polar/70 font-mono leading-relaxed px-4">
            Golf tech is booming, but hardware is stagnant. Players have data, but no gear to match it.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-brand-mink p-8 rounded-full aspect-square flex flex-col items-center justify-center shadow-[0_0_50px_rgba(255,34,76,0.3)] transform scale-110 z-10"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-4">Production Reality</h3>
          <p className="text-sm text-white/90 font-mono leading-relaxed px-4 font-bold">
            3D printing in steel is no longer theory. It is cost-effective, scalable, and superior.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-brand-surface p-8 rounded-full aspect-square flex flex-col items-center justify-center border border-white/5 hover:border-brand-mink/50 transition-colors"
        >
          <h3 className="text-xl font-display font-bold text-white mb-4">Consumer Shift</h3>
          <p className="text-sm text-brand-polar/70 font-mono leading-relaxed px-4">
            Golfers want to own their performance. They are tired of blaming off-the-rack gear.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyNow;