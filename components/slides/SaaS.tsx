import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Users, Shield } from 'lucide-react';

const SaaS: React.FC = () => {
  return (
    <div className="w-full max-w-6xl text-center">
      <div className="mb-16">
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">B2B STRATEGY</span>
        <h2 className="text-4xl md:text-5xl font-display text-white uppercase">Golf As A Service</h2>
        <p className="text-brand-polar/60 font-mono text-sm mt-4 max-w-2xl mx-auto">
          We empower partners (Fitters & Pros) to sell high-margin custom hardware without inventory risk.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-brand-surface p-8 rounded-xl border border-white/5 hover:border-brand-mink/30 transition-colors text-left"
         >
            <div className="w-12 h-12 bg-brand-black rounded-lg flex items-center justify-center mb-6 text-brand-blue">
               <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display text-white mb-2">The Partner Portal</h3>
            <p className="text-sm text-brand-polar/60 mb-6">
               Fitters get a dedicated login to upload client data, visualize designs, and manage orders.
            </p>
            <div className="text-[10px] font-mono text-brand-blue uppercase tracking-widest border-t border-white/5 pt-4">
               No Inventory Required
            </div>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-brand-surface p-8 rounded-xl border border-white/5 hover:border-brand-mink/30 transition-colors text-left"
         >
            <div className="w-12 h-12 bg-brand-black rounded-lg flex items-center justify-center mb-6 text-brand-mink">
               <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display text-white mb-2">MAKEr Pro License</h3>
            <p className="text-sm text-brand-polar/60 mb-6">
               Subscription tier for pros giving access to advanced biomechanical analysis tools and "Re-Fit Triggers".
            </p>
            <div className="text-[10px] font-mono text-brand-mink uppercase tracking-widest border-t border-white/5 pt-4">
               Recurring Revenue
            </div>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-brand-surface p-8 rounded-xl border border-white/5 hover:border-brand-mink/30 transition-colors text-left"
         >
            <div className="w-12 h-12 bg-brand-black rounded-lg flex items-center justify-center mb-6 text-brand-green">
               <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display text-white mb-2">Plug & Play</h3>
            <p className="text-sm text-brand-polar/60 mb-6">
               Compatible with existing launch monitors (Trackman, Foresight, Quad). No new hardware needed for the fitter.
            </p>
            <div className="text-[10px] font-mono text-brand-green uppercase tracking-widest border-t border-white/5 pt-4">
               Zero CapEx for Partners
            </div>
         </motion.div>
      </div>
    </div>
  );
};

export default SaaS;