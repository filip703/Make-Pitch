import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Activity, TrendingUp, Zap } from 'lucide-react';

const SwingDNA: React.FC = () => {
  const [activeSwing, setActiveSwing] = useState(0);

  const swings = [
    {
      id: 0,
      name: "Rory M.",
      title: "The Modern Power",
      stats: { path: "Neutral (+1.2°)", aoa: "Up (+3.1°)", speed: "122 mph" },
      desc: "Textbook efficiency. Needs stability through impact to harness high speed without twisting.",
      image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Swing/Rory.png",
      color: "text-brand-blue",
      bg: "bg-brand-blue"
    },
    {
      id: 1,
      name: "Matthew W.",
      title: "The Dynamic Loop",
      stats: { path: "In-to-Out (+4.5°)", aoa: "Down (-2.1°)", speed: "128 mph" },
      desc: "Extreme dynamic motion. Requires a specific center-of-gravity placement to prevent the toe from shutting down too fast.",
      image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Swing/Matthew%20Wolff.png",
      color: "text-brand-amber",
      bg: "bg-brand-amber"
    },
    {
      id: 2,
      name: "Mårten E.",
      title: "The Architect's Swing",
      isFounder: true,
      stats: { path: "Neutral (-0.5°)", aoa: "Compressing (-4.2°)", speed: "116 mph" },
      desc: "A pure ball-striker's move. Steep angle of attack requires turf interaction optimization and a higher COG for trajectory control.",
      image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Swing/Marten%20Eker.png",
      color: "text-brand-mink",
      bg: "bg-brand-mink"
    }
  ];

  return (
    <div className="w-full max-w-7xl h-full flex flex-col md:flex-row gap-8 items-center">
      
      {/* LEFT: Menu / Selector */}
      <div className="w-full md:w-1/3 flex flex-col justify-center h-full">
        <div className="mb-8">
            <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">THE EVIDENCE</span>
            <h2 className="text-4xl font-display text-white uppercase mb-4">Bio-mechanics are like fingerprints.</h2>
            <p className="text-brand-polar/60 font-mono text-sm leading-relaxed">
              Three elite players. Three completely different ways to deliver the club head. 
              <br/><br/>
              <span className="text-white">Why should they play the exact same iron?</span>
            </p>
        </div>

        <div className="space-y-3">
          {swings.map((swing, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSwing(idx)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group ${
                activeSwing === idx 
                  ? `bg-brand-surface border-${swing.color.split('-')[1]}-500/50` 
                  : 'bg-transparent border-white/5 hover:bg-white/5'
              }`}
            >
              <div className="flex justify-between items-center relative z-10">
                <div>
                    <div className={`font-display font-bold text-lg ${activeSwing === idx ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`}>
                        {swing.name}
                    </div>
                    {activeSwing === idx && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="text-xs font-mono text-brand-polar/50 uppercase mt-1"
                        >
                            {swing.title}
                        </motion.div>
                    )}
                </div>
                {swing.isFounder && (
                    <div className="bg-brand-mink/20 text-brand-mink text-[9px] font-bold px-2 py-0.5 rounded border border-brand-mink/20 uppercase tracking-widest">
                        Founder's Pick
                    </div>
                )}
                {activeSwing === idx && <ArrowRight className={`w-4 h-4 ${swing.color}`} />}
              </div>
              
              {/* Progress Bar Background for active state */}
              {activeSwing === idx && (
                  <motion.div 
                    layoutId="activeGlow"
                    className={`absolute inset-0 opacity-5 ${swing.bg}`}
                  />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT: Visualizer */}
      <div className="w-full md:w-2/3 h-[500px] md:h-[600px] relative">
        <AnimatePresence mode="wait">
            <motion.div
                key={activeSwing}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full bg-brand-surface rounded-2xl border border-white/10 relative overflow-hidden flex flex-col md:flex-row"
            >
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-full relative p-6">
                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-brand-black opacity-80`}></div>
                    <img 
                        src={swings[activeSwing].image}
                        alt={swings[activeSwing].name}
                        className="w-full h-full object-contain relative z-10"
                    />
                    
                    {/* Swing Path Graphic Overlay (Decorative) */}
                    <svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none">
                        <path 
                            d="M 50 400 Q 150 200 350 50" 
                            fill="none" 
                            stroke={activeSwing === 2 ? '#FF224C' : 'white'} 
                            strokeWidth="2" 
                            strokeDasharray="5,5"
                        />
                    </svg>
                </div>

                {/* Data Section */}
                <div className="w-full md:w-1/2 h-full p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5 bg-black/20 backdrop-blur-sm">
                    <div className={`w-12 h-12 rounded-full ${swings[activeSwing].bg}/10 flex items-center justify-center mb-6 border border-white/5`}>
                        <Activity className={`w-6 h-6 ${swings[activeSwing].color}`} />
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-2">{swings[activeSwing].title}</h3>
                    <p className="text-sm text-brand-polar/70 leading-relaxed mb-8 font-light">
                        {swings[activeSwing].desc}
                    </p>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-xs font-mono text-white/40 uppercase">Club Path</span>
                            <span className="text-sm font-mono text-white">{swings[activeSwing].stats.path}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-xs font-mono text-white/40 uppercase">Angle of Attack</span>
                            <span className="text-sm font-mono text-white">{swings[activeSwing].stats.aoa}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-xs font-mono text-white/40 uppercase">Clubhead Speed</span>
                            <span className="text-sm font-mono text-white">{swings[activeSwing].stats.speed}</span>
                        </div>
                    </div>

                    <div className="mt-8 pt-4">
                         <div className={`text-[10px] font-mono uppercase tracking-widest ${swings[activeSwing].color} flex items-center gap-2`}>
                            <Zap className="w-3 h-3" />
                            Make Optimization Detected
                         </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default SwingDNA;