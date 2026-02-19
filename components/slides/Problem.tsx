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
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">THE CHALLENGE</span>
        <h2 className="text-5xl md:text-6xl font-display text-white mb-6 uppercase leading-tight">
          One Size Fits<br/>None.
        </h2>
        <p className="text-xl text-brand-polar/70 font-light leading-relaxed mb-8">
          Traditional manufacturing is a miracle of scale, but a limitation for performance. 
          When you cast metal, you have to lock in the geometry for thousands of units.
        </p>
        <div className="border-l-2 border-brand-mink pl-6 py-2">
            <p className="text-2xl text-white font-display uppercase">90% of golfers</p>
            <p className="text-sm font-mono text-brand-polar/50">Are adapting their swing to the club, rather than the club adapting to them.</p>
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
             <h3 className="text-xl font-display text-white mb-2">Unique Swing DNA</h3>
             <p className="text-sm text-brand-polar/60 font-mono">
                Every player prints a unique biometric signature on the ball. Attack angle, path, and closure rate are like fingerprints.
             </p>
        </div>

        {/* Card 2 */}
        <div className="bg-brand-surface p-8 rounded-xl border border-brand-mink/30 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Box className="w-16 h-16 text-brand-mink" />
             </div>
             <div className="absolute top-4 right-4">
                <XCircle className="w-6 h-6 text-brand-mink" />
             </div>
             <h3 className="text-xl font-display text-white mb-2">Standard Hardware</h3>
             <p className="text-sm text-brand-polar/60 font-mono">
                Retail clubs offer limited adjustability (hosels or weights). They cannot change the fundamental center of mass or sole geometry to suit the player.
             </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Problem;