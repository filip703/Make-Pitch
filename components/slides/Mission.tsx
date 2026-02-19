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
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-6 block">OUR CORE</span>
        
        <h2 className="text-3xl md:text-5xl font-display text-white uppercase leading-tight mb-12">
          "Make Golf is built on a single, brutal truth: <span className="text-brand-mink">modern golf gear is a lie.</span>"
        </h2>

        <div className="border-l-2 border-brand-mink pl-8 space-y-6">
          <p className="text-xl text-brand-polar/80 font-light leading-relaxed">
            We don’t do gimmicks, stock club heads, or guesswork. We analyse your swing data, and we 3D print clubs that fit <span className="text-white font-medium">you</span>.
          </p>
          <p className="text-xl text-brand-polar/80 font-light leading-relaxed">
            Not mass-produced. Not “close enough.” <span className="text-white font-medium">You.</span>
          </p>
          <p className="text-xl text-brand-polar/80 font-light leading-relaxed">
            No noise. No hiding. Just you, the result, and golf the way it should be played.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Mission;