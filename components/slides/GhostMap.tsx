import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Printer, Truck, User, Wifi, CheckCircle2, Server, Globe } from 'lucide-react';

const GhostMap: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Cycle through the logistics steps to simulate a live process
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 'capture',
      icon: User,
      label: 'Input',
      loc: 'Stockholm, SE',
      status: 'RECEIVING DATA...',
      desc: 'Fitter uploads launch monitor data.'
    },
    {
      id: 'process',
      icon: Server,
      label: 'Core Logic',
      loc: 'AWS (Frankfurt)',
      status: 'GENERATING MESH...',
      desc: 'AI Engine adapts geometry to bio-mechanics.'
    },
    {
      id: 'print',
      icon: Printer,
      label: 'Production',
      loc: 'Tritone Hub (Berlin)',
      status: 'SINTERING METAL...',
      desc: 'Printed in 17-4PH Steel. 99.8% Density.'
    },
    {
      id: 'ship',
      icon: Truck,
      label: 'Delivery',
      loc: 'Direct to Customer',
      status: 'DISPATCHED',
      desc: 'Polished, shafted, and shipped within 48h.'
    }
  ];

  return (
    <div className="w-full h-full flex gap-8 items-center justify-center p-4">
      
      {/* LEFT: The Dashboard / Log */}
      <div className="w-1/3 h-[500px] flex flex-col justify-between">
        <div>
            <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-2 block animate-pulse">
                LIVE OPS // SYSTEM ACTIVE
            </span>
            <h2 className="text-4xl font-display text-white uppercase mb-4 leading-none">
                The Ghost<br/>Factory
            </h2>
            <p className="text-brand-polar/60 font-mono text-xs leading-relaxed mb-8">
                We replaced the warehouse with a server. Inventory exists only as code until the moment of purchase.
            </p>
        </div>

        {/* Status Log */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-4 font-mono text-xs h-full overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10"></div>
            <div className="space-y-4 pt-4">
                {steps.map((step, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: activeStep === idx ? 1 : 0.3, x: activeStep === idx ? 10 : 0 }}
                        className={`flex items-start gap-3 ${activeStep === idx ? 'text-white' : 'text-white/30'}`}
                    >
                        <div className={`mt-1 w-2 h-2 rounded-full ${activeStep === idx ? 'bg-brand-mink animate-ping' : 'bg-white/20'}`}></div>
                        <div>
                            <div className="font-bold uppercase mb-1">{step.status}</div>
                            <div className="text-[10px]">{step.loc}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>

      {/* RIGHT: The Visual Map */}
      <div className="w-2/3 aspect-video bg-[#080808] rounded-xl border border-white/10 relative overflow-hidden shadow-2xl">
        
        {/* Background Grid & World Map Hint */}
        <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
        }}></div>
        <Globe className="absolute -right-20 -bottom-20 w-96 h-96 text-white/5" />

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full z-0">
            {/* Draw lines between nodes */}
            <line x1="150" y1="250" x2="300" y2="150" stroke="#333" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="300" y1="150" x2="500" y2="250" stroke="#333" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="500" y1="250" x2="700" y2="250" stroke="#333" strokeWidth="2" strokeDasharray="5,5" />

            {/* Animated Data Packets */}
            <AnimatePresence>
                {activeStep === 0 && (
                    <motion.circle cx="150" cy="250" r="4" fill="#FF224C"
                        animate={{ cx: 300, cy: 150 }} transition={{ duration: 1, ease: "linear" }}
                    />
                )}
                {activeStep === 1 && (
                    <motion.circle cx="300" cy="150" r="4" fill="#2D6AFF"
                        animate={{ cx: 500, cy: 250 }} transition={{ duration: 1, ease: "linear" }}
                    />
                )}
                {activeStep === 2 && (
                    <motion.circle cx="500" cy="250" r="4" fill="#1DB36D"
                        animate={{ cx: 700, cy: 250 }} transition={{ duration: 1, ease: "linear" }}
                    />
                )}
            </AnimatePresence>
        </svg>

        {/* Nodes */}
        {/* Node 1: Input */}
        <div className={`absolute top-[250px] left-[150px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-500 ${activeStep === 0 ? 'scale-110 opacity-100' : 'opacity-50'}`}>
            <div className={`w-12 h-12 rounded-full bg-[#111] border flex items-center justify-center mb-2 ${activeStep === 0 ? 'border-brand-mink text-brand-mink shadow-[0_0_20px_rgba(255,34,76,0.5)]' : 'border-white/20 text-white/20'}`}>
                <User className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-mono uppercase bg-black px-2 rounded border border-white/10">Stockholm</div>
        </div>

        {/* Node 2: Cloud */}
        <div className={`absolute top-[150px] left-[300px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-500 ${activeStep === 1 ? 'scale-110 opacity-100' : 'opacity-50'}`}>
             <div className={`w-16 h-16 rounded-full bg-[#111] border flex items-center justify-center mb-2 ${activeStep === 1 ? 'border-brand-blue text-brand-blue shadow-[0_0_30px_rgba(45,106,255,0.5)]' : 'border-white/20 text-white/20'}`}>
                <Database className="w-6 h-6" />
            </div>
            <div className="text-[10px] font-mono uppercase bg-black px-2 rounded border border-white/10">AWS Cloud</div>
        </div>

        {/* Node 3: Printer */}
        <div className={`absolute top-[250px] left-[500px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-500 ${activeStep === 2 ? 'scale-110 opacity-100' : 'opacity-50'}`}>
            <div className={`w-12 h-12 rounded-full bg-[#111] border flex items-center justify-center mb-2 ${activeStep === 2 ? 'border-brand-green text-brand-green shadow-[0_0_20px_rgba(29,179,109,0.5)]' : 'border-white/20 text-white/20'}`}>
                <Printer className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-mono uppercase bg-black px-2 rounded border border-white/10">Frankfurt</div>
        </div>

        {/* Node 4: Customer */}
        <div className={`absolute top-[250px] left-[700px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-500 ${activeStep === 3 ? 'scale-110 opacity-100' : 'opacity-50'}`}>
            <div className={`w-12 h-12 rounded-full bg-[#111] border flex items-center justify-center mb-2 ${activeStep === 3 ? 'border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.5)]' : 'border-white/20 text-white/20'}`}>
                <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-mono uppercase bg-black px-2 rounded border border-white/10">Customer</div>
        </div>

      </div>
    </div>
  );
};

export default GhostMap;