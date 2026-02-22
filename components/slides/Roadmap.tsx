import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Repeat, Maximize } from 'lucide-react';

const Roadmap: React.FC = () => {
  const phases = [
    {
      title: "Phase 1: Launch",
      time: "0-6 Months",
      icon: Rocket,
      items: ["Beta → Pre-launch", "First paying customers", "Platform iteration", "Production validation"],
      color: "border-brand-mink"
    },
    {
      title: "Phase 2: Repeatability",
      time: "6-12 Months",
      icon: Repeat,
      items: ["Stable order flow", "Partner-driven sales", "Fitters & Pro Shops onboarding", "CAC optimization"],
      color: "border-brand-blue"
    },
    {
      title: "Phase 3: Scaling",
      time: "12-24 Months",
      icon: Maximize,
      items: ["Product expansion (Woods?)", "Market expansion (EU)", "Higher throughput", "Improved unit economics"],
      color: "border-brand-green"
    }
  ];

  return (
    <div className="w-full max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">ROADMAP</span>
        <h2 className="text-4xl md:text-5xl font-display text-white uppercase">18-24 Month Plan</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {phases.map((phase, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className={`bg-brand-surface/90 backdrop-blur-sm p-8 rounded-xl border-t-4 ${phase.color} h-full flex flex-col`}
          >
            <div className="flex justify-between items-start mb-6">
              <phase.icon className="w-8 h-8 text-white" />
              <span className="bg-white/10 text-white/70 px-2 py-1 rounded text-[10px] font-mono uppercase">{phase.time}</span>
            </div>
            
            <h3 className="text-2xl font-display font-bold text-white mb-6">{phase.title}</h3>
            
            <ul className="space-y-4 flex-grow">
              {phase.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-brand-polar/70 font-mono">
                  <span className="w-1.5 h-1.5 bg-white/20 rounded-full mt-1.5 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden opacity-20 pointer-events-none">
         <img src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/lone_walking_path_cutting_through_a_quiet_golf_landscape_at_d_1f6e71c6-fce3-4218-ace0-d0c402774167_3.png" className="w-full h-full object-cover grayscale" />
         <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default Roadmap;