import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Users, Zap, Globe } from 'lucide-react';

const Business: React.FC = () => {
  const streams = [
    {
      title: "Direct to Consumer",
      icon: ShoppingBag,
      desc: "Global shipping via make.golf. Users upload data, visualize design, and order custom sets.",
      tag: "CORE REVENUE"
    },
    {
      title: "Partner Network",
      icon: Users,
      desc: "B2B2C. Pro shops & fitters use our platform to sell. We handle manufacturing & fulfillment.",
      tag: "SCALE ENGINE"
    },
    {
      title: "MAKEr SaaS",
      icon: Zap,
      desc: "Subscription for fitting professionals to access advanced biomechanical analysis tools & re-fit triggers.",
      tag: "RECURRING"
    }
  ];

  return (
    <div className="w-full max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">BUSINESS MODEL</span>
          <h2 className="text-4xl md:text-5xl font-display text-white uppercase leading-tight mb-6">
            Hybrid Efficiency.<br/>Zero Inventory.
          </h2>
          <p className="text-lg text-brand-polar/70 font-light leading-relaxed mb-8">
            Unlike traditional OEMs, we hold no finished inventory. Every club is sold before it is made.
            We leverage a digital supply chain to deliver bespoke hardware at scale.
          </p>
          
          <div className="flex items-center gap-4 bg-brand-surface p-4 rounded-lg border border-white/5 w-fit">
             <Globe className="w-5 h-5 text-brand-mink" />
             <div className="text-sm font-mono text-brand-polar">Targeting 50+ Partner Locations by 2027</div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          {streams.map((stream, idx) => (
            <motion.div
              key={idx}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.15 }}
              className="bg-brand-black border border-white/10 p-6 rounded-xl hover:border-brand-mink/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <stream.icon className="w-24 h-24 text-white" />
              </div>

              <div className="flex items-start gap-4 relative z-10">
                 <div className="p-3 bg-brand-surface rounded-lg border border-white/5 text-brand-mink">
                    <stream.icon className="w-6 h-6" />
                 </div>
                 <div>
                    <div className="flex items-center gap-3 mb-1">
                       <h3 className="text-xl font-display font-bold text-white">{stream.title}</h3>
                       <span className="text-[9px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/60 uppercase tracking-wide">{stream.tag}</span>
                    </div>
                    <p className="text-sm text-brand-polar/60 font-mono leading-relaxed max-w-sm">
                       {stream.desc}
                    </p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Business;