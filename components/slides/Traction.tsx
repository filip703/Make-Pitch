import React from 'react';
import { motion } from 'framer-motion';
import { TimelineEvent } from '../../types';

const Traction: React.FC = () => {
  const events: TimelineEvent[] = [
    { year: '2021', title: 'Inception', desc: 'First idea. Meeting with Digital Metal. Company registered.', status: 'done' },
    { year: '2022', title: 'Proof of Concept', desc: 'First 4 prototypes (Sandvik). UIC Startup Accelerator. First Iron printed.', status: 'done' },
    { year: '2023', title: 'Validation', desc: 'Production Angels. First customer batch. 63 course record with prototype putter.', status: 'done' },
    { year: '2024', title: 'Pilot Phase', desc: 'Beta live with 40 testers. 70+ clubs printed. Partners: Custom Clubs & Gofstix.', status: 'done' },
    { year: '2025', title: 'Optimization', desc: 'R&A compliance tests. Automation of MAKEr platform. Supply chain secured.', status: 'current' },
    { year: '2026', title: 'Commercial Launch', desc: 'V1.0 Launch. Scale B2B2C partners. Target: 1000 clubs.', status: 'future' },
  ];

  return (
    <div className="w-full max-w-6xl">
      <div className="text-center mb-12">
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">TRACTION</span>
        <h2 className="text-4xl md:text-5xl font-display text-white uppercase">Execution, Not Just Ideas.</h2>
      </div>

      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden md:block"></div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className={`relative flex flex-col ${idx % 2 === 0 ? 'md:justify-end md:pb-12' : 'md:justify-start md:pt-12'} h-64`}
            >
              {/* Dot on line */}
              <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 z-10 hidden md:block
                ${event.status === 'done' ? 'bg-brand-mink border-brand-mink' : 
                  event.status === 'current' ? 'bg-brand-black border-brand-mink animate-pulse' : 
                  'bg-brand-black border-white/20'}`}
              ></div>

              <div className="bg-brand-surface border border-white/10 p-4 rounded-lg hover:border-brand-mink/50 transition-colors">
                <div className="text-brand-mink font-display font-bold text-xl mb-1">{event.year}</div>
                <div className="text-white font-bold text-xs uppercase mb-2">{event.title}</div>
                <p className="text-brand-polar/60 font-mono text-[10px] leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-4 text-center">
         <div>
            <div className="text-3xl font-display font-bold text-white">4 Years</div>
            <div className="text-xs font-mono text-brand-polar/40 uppercase">R&D Investment</div>
         </div>
         <div>
            <div className="text-3xl font-display font-bold text-white">100%</div>
            <div className="text-xs font-mono text-brand-polar/40 uppercase">IP Ownership</div>
         </div>
         <div>
            <div className="text-3xl font-display font-bold text-white">Verified</div>
            <div className="text-xs font-mono text-brand-polar/40 uppercase">Production Chain</div>
         </div>
      </div>
    </div>
  );
};

export default Traction;