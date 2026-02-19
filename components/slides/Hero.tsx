import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0 opacity-60"
      >
        <source src="https://cdn.prod.website-files.com/683dc60f79209a98db49aa51%2F68dacaebb04245b0c1efbe48_Make%20Header%20Waitlist-transcode.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-black/40 z-10"></div>

      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img 
            src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Logo/Make_Icon_256px.png" 
            alt="Make Icon" 
            className="w-24 h-24 mb-8 mx-auto opacity-90"
          />
          <h1 className="text-6xl md:text-9xl font-display font-bold text-white uppercase tracking-tighter mb-4">
            Make Golf
          </h1>
          <p className="text-xl md:text-2xl font-mono text-white/80 tracking-widest uppercase">
            The Club Without Excuses
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;