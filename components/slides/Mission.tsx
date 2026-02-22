import React from 'react';
import { motion } from 'framer-motion';

const Mission: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-6 block">OUR MISSION</span>
        
        <h2 className="text-3xl md:text-5xl font-display text-white uppercase leading-tight mb-12">
          The industry isn't broken. <br/>
          <span className="text-brand-mink">It's just limited by molds.</span>
        </h2>

        <div className="border-l-2 border-brand-mink pl-8 space-y-6">
          <p className="text-xl text-brand-polar/80 font-light leading-relaxed">
            For decades, manufacturers have done their best to fit millions of unique swings into three or four standard "buckets." It was the only way to scale.
          </p>
          <p className="text-xl text-brand-polar/80 font-light leading-relaxed">
            But technology has moved on. We don't need to guess anymore. We analyse your swing data, and we 3D print clubs that fit <span className="text-white font-medium">you</span>.
          </p>
          <p className="text-xl text-brand-polar/80 font-light leading-relaxed">
            No stock inventory. No compromises. Just golf the way it should be played.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full md:w-1/2 h-[400px] md:h-[600px] relative rounded-2xl overflow-hidden border border-white/10"
      >
         <img 
            src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/A_diverse_group_of_young_golfers_walking_together_across_a_mi_5c70cc2a-1299-4750-9512-40e159e1e73f_1.png" 
            alt="Future of Golf"
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
         <div className="absolute bottom-6 left-6">
            <div className="text-white font-display text-2xl uppercase">The New Generation</div>
            <div className="text-brand-polar/60 font-mono text-xs">Diverse. Data-Driven. Demanding.</div>
         </div>
      </motion.div>
    </div>
  );
};

export default Mission;