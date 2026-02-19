import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, TrendingUp } from 'lucide-react';

const Market: React.FC = () => {
  return (
    <div className="w-full max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">THE OPPORTUNITY</span>
        <h2 className="text-4xl md:text-5xl font-display text-white uppercase">A Growing Game</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-brand-surface p-8 rounded-xl border border-white/5 text-center"
        >
          <Users className="w-10 h-10 text-brand-blue mx-auto mb-4" />
          <div className="text-5xl font-display font-bold text-white mb-2">67M</div>
          <div className="text-xs font-mono uppercase text-brand-polar/50 mb-4">Golfers Worldwide (2022)</div>
          <p className="text-sm text-brand-polar/60">Growing to 76.6M by 2027. A 14% increase fueled by younger, tech-savvy players.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-brand-surface p-8 rounded-xl border border-brand-mink/20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-2 bg-brand-mink text-[10px] font-bold text-white font-mono">SAM</div>
          <TrendingUp className="w-10 h-10 text-brand-mink mx-auto mb-4" />
          <div className="text-5xl font-display font-bold text-white mb-2">10%</div>
          <div className="text-xs font-mono uppercase text-brand-polar/50 mb-4">Ambitious Golfers</div>
          <p className="text-sm text-brand-polar/60">Our core demographic: Players who want to improve and will pay for performance.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-brand-surface p-8 rounded-xl border border-white/5 text-center"
        >
          <Globe className="w-10 h-10 text-brand-green mx-auto mb-4" />
          <div className="text-5xl font-display font-bold text-white mb-2">$27B</div>
          <div className="text-xs font-mono uppercase text-brand-polar/50 mb-4">Global Equipment Market</div>
          <p className="text-sm text-brand-polar/60">Even a niche share of the premium hard-goods market represents massive value.</p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
      >
        <div className="border-t border-white/10 pt-4">
          <div className="font-display font-bold text-xl text-white">Nordics</div>
          <div className="text-xs font-mono text-brand-polar/40">86,500 Target Users</div>
        </div>
        <div className="border-t border-white/10 pt-4">
          <div className="font-display font-bold text-xl text-white">UK & EU</div>
          <div className="text-xs font-mono text-brand-polar/40">262,000 Target Users</div>
        </div>
        <div className="border-t border-white/10 pt-4">
          <div className="font-display font-bold text-xl text-white">US & Japan</div>
          <div className="text-xs font-mono text-brand-polar/40">2.8M Target Users</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Market;