import React from 'react';
import { motion } from 'framer-motion';

const Product: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* Visual Side */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-1/2 h-full relative min-h-[400px] md:min-h-auto rounded-xl overflow-hidden border border-white/5"
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Close_up_macro_photography_of_a_white_golf_ball_sitting_in_de_cf861217-edbd-4f0e-9134-ecdae962d62a_3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
        
        {/* Tech Specs Overlay */}
        <div className="absolute bottom-8 left-8">
           <div className="space-y-2">
              <div className="bg-black/80 backdrop-blur px-3 py-1 rounded border border-white/10 inline-block text-[10px] font-mono text-white/80">
                 MAT: 17-4PH STAINLESS STEEL
              </div>
              <div className="bg-black/80 backdrop-blur px-3 py-1 rounded border border-white/10 inline-block text-[10px] font-mono text-white/80">
                 DENS: 99.8% SINTERED
              </div>
              <div className="bg-black/80 backdrop-blur px-3 py-1 rounded border border-white/10 inline-block text-[10px] font-mono text-brand-mink">
                 STRUCT: GYROID LATTICE CORE
              </div>
           </div>
        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full md:w-1/2 flex flex-col justify-center pl-0 md:pl-16 pt-8 md:pt-0"
      >
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4">HARDWARE</span>
        <h2 className="text-4xl lg:text-5xl font-display text-white mb-6 uppercase">
          Impossible to Cast.<br/>Perfect to Play.
        </h2>
        <p className="text-lg text-brand-polar/60 font-light mb-8 leading-relaxed">
          Traditional manufacturing requires molds that limit geometry. 
          By using Tritone MoldJet technology, we print internal lattice structures 
          that redistribute mass to the extreme perimeter.
        </p>

        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
           <div>
              <div className="text-3xl font-display text-white mb-1">48h</div>
              <div className="text-xs font-mono text-brand-polar/40 uppercase">Production Time</div>
           </div>
           <div>
              <div className="text-3xl font-display text-white mb-1">0%</div>
              <div className="text-xs font-mono text-brand-polar/40 uppercase">Inventory Risk</div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Product;