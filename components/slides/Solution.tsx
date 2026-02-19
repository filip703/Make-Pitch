import React from 'react';
import { motion } from 'framer-motion';
import { Scan, Cpu, Printer, Trophy } from 'lucide-react';

const Solution: React.FC = () => {
  const steps = [
    {
      id: 'step1',
      icon: Scan,
      title: "1. Capture",
      desc: "Fitters use Trackman/Quad to capture unique swing DNA. Attack angle, path, closure rate.",
      color: "text-brand-blue"
    },
    {
      id: 'step2',
      icon: Cpu,
      title: "2. Generate",
      desc: "Our MAKEr AI engine translates data into a CAD file. Geometry adapts to neutralize misses.",
      color: "text-brand-mink"
    },
    {
      id: 'step3',
      icon: Printer,
      title: "3. Construct",
      desc: "Printed in 17-4PH Steel using MoldJet™. Polished & coated by partners. 48h turnaround.",
      color: "text-brand-green"
    },
    {
      id: 'step4',
      icon: Trophy,
      title: "4. Perform",
      desc: "The player receives equipment that physically cannot fight their swing. Better golf.",
      color: "text-brand-amber"
    }
  ];

  return (
    <div className="w-full max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">THE PROCESS</span>
        <h2 className="text-4xl md:text-5xl font-display text-white uppercase">MAKE DNA</h2>
        <p className="text-brand-polar/60 font-mono text-sm mt-4">
          How we empower fitters to become club designers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-brand-blue via-brand-mink to-brand-green opacity-30 z-0"></div>

        {steps.map((step, idx) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-brand-black border border-white/10 p-6 rounded-xl relative z-10 group hover:border-brand-mink/30 transition-colors"
          >
            <div className={`w-12 h-12 bg-brand-surface rounded-full border border-white/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 ${step.color}`}>
              <step.icon className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-display font-bold text-white mb-3 text-center">{step.title}</h3>
            <p className="text-xs text-brand-polar/60 font-mono leading-relaxed text-center">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 bg-brand-surface/50 border border-white/5 p-6 rounded-lg flex items-center justify-center gap-6"
      >
        <div className="text-right hidden md:block">
          <div className="text-white font-display font-bold">The "Sticky" Loop</div>
          <div className="text-[10px] font-mono text-brand-polar/50">Why partners love us</div>
        </div>
        <div className="h-10 w-px bg-white/10 hidden md:block"></div>
        <p className="text-sm text-brand-polar/80 italic max-w-lg">
          "We don't just sell a club. We sell a system that learns. As the player improves, the data changes, and the next club is updated. High retention, high LTV."
        </p>
      </motion.div>
    </div>
  );
};

export default Solution;