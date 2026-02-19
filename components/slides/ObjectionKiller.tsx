import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Check, ShieldCheck } from 'lucide-react';

const ObjectionKiller: React.FC = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  const cards = [
    {
      id: 0,
      fear: "Is it legal?",
      sub: "REGULATION",
      truth: "100% R&A CONFORMING",
      desc: "We don't change the face legality. We change the mass distribution behind it. Passed Phase 1 submission.",
      icon: ShieldCheck
    },
    {
      id: 1,
      fear: "Will it break?",
      sub: "DURABILITY",
      truth: "STRONGER THAN CAST",
      desc: "Printed in 17-4PH Steel, heat treated to H900 condition. The lattice structure actually dissipates vibration better than solid steel.",
      icon: ShieldCheck
    },
    {
      id: 2,
      fear: "Too expensive?",
      sub: "ECONOMICS",
      truth: "ZERO TOOLING COST",
      desc: "Molds cost $50k each. We pay $0. We don't hold inventory. Our gross margin (68%) rivals the biggest players.",
      icon: ShieldCheck
    },
    {
      id: 3,
      fear: "Why hasn't TM done it?",
      sub: "COMPETITION",
      truth: "THEY CAN'T PIVOT",
      desc: "Their supply chain is built on 3-year cycles and massive inventory. Moving to on-demand would cannibalize their entire retail network.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="w-full max-w-7xl">
      <div className="text-center mb-12">
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">RISK ANALYSIS</span>
        <h2 className="text-4xl md:text-5xl font-display text-white uppercase">Myth vs. Reality</h2>
        <p className="text-brand-polar/60 font-mono text-sm mt-4">
            Click to declassify the answer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="h-96 w-full perspective-1000 group cursor-pointer" onClick={() => setFlipped(flipped === idx ? null : idx)}>
            <motion.div 
                className="relative w-full h-full transition-all duration-500 preserve-3d"
                animate={{ rotateY: flipped === idx ? 180 : 0 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* FRONT (THE FEAR) */}
                <div 
                    className="absolute inset-0 backface-hidden bg-[#1A1A1A] border border-brand-mink/20 p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-lg hover:border-brand-mink transition-all"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                    
                    {/* Warning Icon */}
                    <div className="mb-8">
                        <AlertTriangle className="w-16 h-16 text-brand-mink opacity-80" />
                    </div>

                    <div className="text-xs font-mono text-brand-mink uppercase mb-2 tracking-widest">{card.sub}</div>
                    
                    {/* The Question - Big and Bold - NOW RED */}
                    <h3 className="text-3xl font-display font-bold text-brand-mink uppercase leading-none mb-8">
                        "{card.fear}"
                    </h3>

                    <div className="mt-auto w-full border-t border-brand-mink/20 pt-4">
                        <span className="text-[10px] font-mono text-brand-polar/40 uppercase">Tap to Answer</span>
                    </div>
                </div>

                {/* BACK (THE TRUTH) */}
                <div 
                    className="absolute inset-0 backface-hidden bg-brand-surface p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-xl border border-brand-green/30" 
                    style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                    <div className="absolute top-4 right-4">
                        <Check className="w-6 h-6 text-brand-green" />
                    </div>

                    <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green">
                        <card.icon className="w-6 h-6" />
                    </div>

                    <div className="text-xs font-mono text-brand-green uppercase mb-2 tracking-widest">VERIFIED FACT</div>
                    
                    <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">{card.truth}</h3>
                    
                    <p className="text-sm text-brand-polar/80 leading-relaxed font-light">
                        {card.desc}
                    </p>
                </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectionKiller;