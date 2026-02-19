import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, ShieldCheck, Factory } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">TECHNOLOGY & PARTNERS</span>
        <h2 className="text-4xl md:text-5xl font-display text-white uppercase leading-none mb-6">
          Proprietary Logic.<br/>Industrial Scale.
        </h2>
        <p className="text-brand-polar/70 font-light leading-relaxed mb-8">
          We own the IP for the configuration engine, but we leverage world-class industrial partners for execution. This keeps us lean and scalable.
        </p>

        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="mt-1"><Cpu className="w-6 h-6 text-brand-mink" /></div>
            <div>
              <h4 className="text-white font-display font-bold mb-1">MAKEr Engine (Owned IP)</h4>
              <p className="text-xs text-brand-polar/50 font-mono">
                Parametric modeling software. Automatically generates valid STEP files from input data. Beta live with 40 testers.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="mt-1"><Factory className="w-6 h-6 text-brand-blue" /></div>
            <div>
              <h4 className="text-white font-display font-bold mb-1">Production Ecosystem</h4>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="bg-white/5 p-3 rounded border border-white/10">
                  <div className="text-white font-bold text-sm">Tritone</div>
                  <div className="text-[10px] text-white/40">MoldJet™ Printing</div>
                </div>
                <div className="bg-white/5 p-3 rounded border border-white/10">
                  <div className="text-white font-bold text-sm">Plasmotion</div>
                  <div className="text-[10px] text-white/40">Smart Polishing</div>
                </div>
                <div className="bg-white/5 p-3 rounded border border-white/10">
                  <div className="text-white font-bold text-sm">Oerlikon</div>
                  <div className="text-[10px] text-white/40">PVD Coating</div>
                </div>
                <div className="bg-white/5 p-3 rounded border border-white/10">
                  <div className="text-white font-bold text-sm">R&A</div>
                  <div className="text-[10px] text-white/40">Conforming Rules</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-full flex flex-col gap-4"
      >
        <div className="bg-brand-surface p-6 rounded-xl border border-white/10">
           <div className="text-xs font-mono text-brand-mink mb-2 uppercase">Capacity</div>
           <div className="text-4xl font-display font-bold text-white mb-1">10,000</div>
           <div className="text-xs text-brand-polar/60">Clubs per year / printer</div>
        </div>
        
        <div className="bg-brand-surface p-6 rounded-xl border border-white/10">
           <div className="text-xs font-mono text-brand-green mb-2 uppercase">Material</div>
           <div className="text-4xl font-display font-bold text-white mb-1">17-4PH</div>
           <div className="text-xs text-brand-polar/60">Stainless Steel (99.8% Density)</div>
        </div>

        <div className="bg-brand-surface p-6 rounded-xl border border-white/10">
           <div className="text-xs font-mono text-brand-blue mb-2 uppercase">Logic</div>
           <div className="text-4xl font-display font-bold text-white mb-1">AI-Driven</div>
           <div className="text-xs text-brand-polar/60">Geometry optimized for impact location</div>
        </div>
      </motion.div>

    </div>
  );
};

export default Technology;