import React from 'react';
import { motion } from 'framer-motion';

const SwingDNA: React.FC = () => {
  const swings = [
    {
      name: "Rory M.",
      desc: "Traditional / Neutral",
      image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Swing/Rory.png",
      borderColor: "border-brand-blue",
      textColor: "text-brand-blue"
    },
    {
      name: "Matthew W.",
      desc: "Dynamic / Loop",
      image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Swing/Matthew%20Wolff.png",
      borderColor: "border-brand-amber",
      textColor: "text-brand-amber"
    },
    {
      name: "Mårten E.",
      desc: "Steep / Compressing",
      image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Swing/Marten%20Eker.png",
      borderColor: "border-brand-mink",
      textColor: "text-brand-mink"
    }
  ];

  return (
    <div className="w-full max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">THE EVIDENCE</span>
        <h2 className="text-4xl md:text-5xl font-display text-white uppercase">We Are All Unique.</h2>
        <p className="text-brand-polar/60 font-mono text-sm mt-4">
          Same handicap. Same height. Completely different DNA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {swings.map((swing, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (idx * 0.2) }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className={`w-full aspect-[4/5] bg-gradient-to-b from-brand-surface to-brand-black rounded-xl border border-white/5 relative p-4 mb-6 overflow-hidden transition-all duration-500 group-hover:border-opacity-100 ${swing.borderColor} border-opacity-30`}>
               {/* Glow Effect */}
               <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-${swing.textColor.split('-')[1]}-500 blur-xl`}></div>
               
               <img 
                 src={swing.image} 
                 alt={swing.name} 
                 className="w-full h-full object-contain object-bottom relative z-10 drop-shadow-2xl filter grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               
               <div className={`absolute bottom-4 left-4 text-[10px] font-mono ${swing.textColor} bg-brand-black/80 backdrop-blur px-2 py-1 rounded border border-white/10 z-20`}>
                 PATH: {swing.desc.toUpperCase()}
               </div>
            </div>
            <h3 className="text-2xl font-display text-white">{swing.name}</h3>
            <p className="text-xs text-brand-polar/50 font-mono mt-2">{swing.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center border-t border-white/10 pt-8">
         <p className="text-lg text-brand-polar/80">
            Why should these three players use the exact same iron head? <br/>
            <span className="text-brand-mink font-bold">They shouldn't.</span>
         </p>
      </div>
    </div>
  );
};

export default SwingDNA;