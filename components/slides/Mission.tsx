import React from 'react';
import { motion } from 'framer-motion';

const Mission: React.FC = () => {
  return (
    <div className="w-full max-w-4xl text-center md:text-left">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
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
    </div>
  );
};

export default Mission;