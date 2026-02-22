import React from 'react';
import { motion } from 'framer-motion';
import { SlideContextData } from '../../types';

const Cover: React.FC<{ context: SlideContextData }> = ({ context }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="w-full h-full absolute inset-0 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/cinematic_sunrise_over_a_perfectly_maintained_golf_landscape__57e39375-a295-4c14-942c-c7bbda17b160_2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 max-w-5xl px-6">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 border border-white/20 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-brand-mink rounded-full animate-pulse"></span>
          <span className="text-brand-mink font-mono text-xs uppercase tracking-[0.2em]">
            {context.meetingPurpose || 'Investment Opportunity'}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-white mb-8 uppercase leading-[0.9] drop-shadow-2xl"
        >
          Golf Deserves<br/>
          <span className="text-brand-mink">Better.</span>
        </motion.h1>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-white/80 font-light font-sans max-w-2xl mx-auto leading-relaxed drop-shadow-md"
        >
          <p className="mb-4">
            Redefining premium golf clubs through data, design, and 3D printing.
          </p>
          {context.investorName && (
            <p className="text-sm font-mono text-brand-mink mt-8 bg-black/40 inline-block px-4 py-2 rounded border border-brand-mink/20 backdrop-blur-sm">
              Prepared exclusively for {context.investorName}
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Cover;