import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, User, Box } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">THE PROBLEM</span>
        <h2 className="text-5xl md:text-6xl font-display text-white mb-6 uppercase leading-tight">
          The Brutal<br/>Truth.
        </h2>
        <p className="text-xl text-brand-polar/70 font-light leading-relaxed mb-8">
          The industry is built on a lie: that mass-produced, standardized equipment can perform for unique biomechanics. 
        </p>
        <div className="border-l-2 border-brand-mink pl-6 py-2">
            <p className="text-2xl text-white font-display uppercase">90% of golfers</p>
            <p className="text-sm font-mono text-brand-polar/50">Are playing clubs designed for an "average" that doesn't exist.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid gap-6"
      >
        {/* Card 1 */}
        <div className="bg-brand-surface p-8 rounded-xl border border-white/5 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <User className="w-16 h-16 text-white" />
             </div>
             <h3 className="text-xl font-display text-white mb-2">Unique Sving DNA</h3>
             <p className="text-sm text-brand-polar/60 font-mono">
                Every player has a unique attack angle, club path, and closure rate.
             </p>
        </div>

        {/* Card 2 (Bad) */}
        <div className="bg-brand-surface p-8 rounded-xl border border-brand-mink/30 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Box className="w-16 h-16 text-brand-mink" />
             </div>
             <div className="absolute top-4 right-4">
                <XCircle className="w-6 h-6 text-brand-mink" />
             </div>
             <h3 className="text-xl font-display text-white mb-2">Standard Hardware</h3>
             <p className="text-sm text-brand-polar/60 font-mono">
                Manufacturers force players into 3 rigid "flex buckets" and fixed head weights. 
                <span className="text-white block mt-2 font-bold">The player adapts to the club, instead of the club adapting to the player.</span>
             </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Problem;