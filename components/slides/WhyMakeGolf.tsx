import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, ShieldCheck, Users } from 'lucide-react';

const WhyMakeGolf: React.FC = () => {
  const advantages = [
    {
      id: 1,
      icon: Cpu,
      title: "Proprietary Tech",
      subtitle: "The MAKEr Engine",
      description: "Our core IP. Automated parametric design software that instantly converts biomechanical data into manufacturing-ready CAD files. No manual engineering required.",
      color: "text-brand-mink"
    },
    {
      id: 2,
      icon: Layers,
      title: "Zero Inventory",
      subtitle: "Digital Supply Chain",
      description: "We hold no stock. We print on demand. This eliminates the biggest risk in the golf industry (obsolescence) and frees up massive capital.",
      color: "text-brand-blue"
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "High Barrier",
      subtitle: "Defensibility",
      description: "Incumbents are locked into casting molds and 3-year product cycles. They cannot pivot to mass-customization without destroying their supply chain.",
      color: "text-brand-green"
    },
    {
      id: 4,
      icon: Users,
      title: "The Team",
      subtitle: "Unfair Experience",
      description: "A unique fusion of Tour-level golf insight, industrial design, and SaaS scaling expertise. We are the only team built to solve this problem.",
      color: "text-brand-amber"
    }
  ];

  return (
    <div className="w-full max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">INVESTMENT THESIS</span>
        <h2 className="text-4xl md:text-5xl font-display text-white uppercase">Why Make Golf?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {advantages.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="bg-brand-surface p-8 rounded-2xl border border-white/5 hover:border-brand-mink/30 transition-all group hover:bg-brand-surface/80"
          >
            <div className="flex items-start gap-6">
              <div className={`p-4 rounded-xl bg-brand-black border border-white/10 ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <item.icon className="w-8 h-8" />
              </div>
              
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-1">{item.title}</h3>
                <div className="text-xs font-mono text-brand-polar/40 uppercase mb-4 tracking-wider">{item.subtitle}</div>
                <p className="text-brand-polar/70 leading-relaxed font-light text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-lg text-white font-display uppercase">
          We are not competing on marketing. <br/>
          <span className="text-brand-mink">We are competing on physics.</span>
        </p>
      </motion.div>
    </div>
  );
};

export default WhyMakeGolf;