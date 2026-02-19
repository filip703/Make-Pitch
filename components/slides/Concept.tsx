import React from 'react';
import { motion } from 'framer-motion';
import { PackageX, Database, ArrowRight } from 'lucide-react';

const Concept: React.FC = () => {
  return (
    <div className="w-full max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">THE SHIFT</span>
        <h2 className="text-4xl md:text-6xl font-display text-white uppercase leading-none">
          From Inventory<br/>To <span className="text-brand-mink">Intelligence.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
        {/* OLD WAY */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-brand-surface/30 p-8 rounded-2xl border border-white/5 grayscale opacity-60"
        >
          <div className="flex items-center gap-4 mb-6">
            <PackageX className="w-8 h-8 text-white" />
            <h3 className="text-2xl font-display font-bold text-white uppercase">Legacy Golf</h3>
          </div>
          <ul className="space-y-4 font-mono text-sm text-brand-polar/60">
            <li className="flex gap-3">
              <span className="text-red-500">×</span> Built for the "Average" (Standardized)
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">×</span> Massive Inventory Risk (Overproduction)
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">×</span> Long Supply Chains (90% Asia)
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">×</span> Marketing-driven Performance
            </li>
          </ul>
        </motion.div>

        {/* ARROW */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-brand-black p-2 rounded-full border border-white/10">
          <ArrowRight className="w-6 h-6 text-white" />
        </div>

        {/* NEW WAY */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-brand-surface p-8 rounded-2xl border border-brand-mink/30 shadow-[0_0_50px_rgba(255,34,76,0.1)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-3 bg-brand-mink text-white font-mono text-[10px] font-bold uppercase rounded-bl-lg">
            The Make Way
          </div>
          <div className="flex items-center gap-4 mb-6">
            <Database className="w-8 h-8 text-brand-mink" />
            <h3 className="text-2xl font-display font-bold text-white uppercase">Digital Warehouse</h3>
          </div>
          <ul className="space-y-4 font-mono text-sm text-brand-polar">
            <li className="flex gap-3">
              <span className="text-brand-green">✓</span> <span className="text-white font-bold">100% Custom</span> (Your Data = Your Club)
            </li>
            <li className="flex gap-3">
              <span className="text-brand-green">✓</span> <span className="text-white font-bold">Zero Inventory</span> (Printed on Demand)
            </li>
            <li className="flex gap-3">
              <span className="text-brand-green">✓</span> <span className="text-white font-bold">Local Production</span> (EU/Scandinavia)
            </li>
            <li className="flex gap-3">
              <span className="text-brand-green">✓</span> <span className="text-white font-bold">Physics-driven</span> Performance
            </li>
          </ul>
        </motion.div>
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-12 text-brand-polar/50 font-mono text-xs max-w-2xl mx-auto"
      >
        We don't guess what you need. We mathematically generate the perfect tool for your biomechanics.
      </motion.p>
    </div>
  );
};

export default Concept;