import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, MousePointer, Eye, ExternalLink } from 'lucide-react';

const Configurator: React.FC = () => {
  const CONFIGURATOR_URL = "https://configurator.modelup3d.com/?projectId=oa1oRJb3&token=eyJhbGciOiJIUzI1NiJ9.eyJ2NW4iOjEsImlkIjoxMzQsInA3ZCI6Im9hMW9SSmIzIiwicDlzIjpbImM1ZSIsInJfYzE1YSJdfQ.p-s501nEeYwHvyH2JJUYuSlk5f9rJZ2HbQC58p8DIXc&configurationState=a_29b5d105-ab7f-4511-a8cb-c81eb0f33f2c_7b8382fc-47a7-48ec-bfab-87daf3482240_0_e3685a61-0488-495b-af0a-03f4cd28662b_34.9_5310300e-e063-415e-b008-c54613d8a961_61_1e4aac43-e484-48ef-9549-2d54d4a16715_0_8ce09785-357e-48fb-ae65-422003074fef_77.4_cc947572-79b1-4736-bc9b-90b11a73713a_55.1_bc5871e7-3961-46c3-8fe0-1122e8586405_30.1_c5e62c30-a479-45a4-9879-c828067b840e_4.5_cdf62d42-b88d-4add-9487-21806bcbfe05_9.12_1c129292-ed94-48ea-ae88-309cd2291f1f_32.6_82434f86-8f4a-49bb-be3b-455c356e69bf_9.6_a38a92bf-cdb6-4ea1-b50d-2d108dd75062_14.789_52436bbd-9b9c-46f6-973f-0584ea52d3fe_1.6_b18d42ba-b806-41f9-8702-55359170f28d_2.5_c72f9f2b-c110-492a-851e-3395391883d0_-2.4_480f42a1-ddae-41bd-9d8f-73a47b8c9232_42.7_c0182fe3-ceab-4e11-9249-1ec1a765f0f0_23_22fc43a3-85ce-46b3-9d1f-75422eaf7da0_22.7_d7ae2c3c-6620-4717-b85f-6336c42303fe_14.7_8f9802f1-a672-403a-824e-620e4e93207f_0.436_67832bf3-3810-4db8-8a9d-fe7eb8f8a507_6_e458d1ce-50a5-43b2-9dd0-6297e8325ef5_1.49_14449719-d773-43bd-9741-17ce40106734_2_5e4e18a0-7ddf-4dca-abc3-ebc14804c910_10_c352805c-4369-4674-b1a8-c644bcea716e_2_6c8655d4-2130-4b0e-adea-e9a9b0bd3f3c_1.7_86cd5747-0513-4e1f-aef3-77f323c08da6_3_7c9e3dc2-4ee3-490f-af5a-1e033113ac98_0.45_groove+extend_0_76f64105-1ed0-476d-8fe9-8a0d735dfb25_1.11_1400e927-5c58-40be-9c6b-2fe1cb4e9315_0.955";

  return (
    <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 items-center h-[600px]">
      <div className="w-full md:w-1/3 flex flex-col justify-center">
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">USER EXPERIENCE</span>
        <h2 className="text-4xl font-display text-white uppercase mb-6">
          Your Club.<br/>Your Rules.
        </h2>
        <p className="text-base text-brand-polar/70 font-light leading-relaxed mb-8">
          The Make Configurator allows players to visualize their data-driven design. 
          Adjust aesthetics, finish, and engravings while the engine locks the performance parameters.
        </p>

        <div className="space-y-6">
           <div className="flex gap-4">
              <div className="mt-1"><Sliders className="w-5 h-5 text-brand-mink" /></div>
              <div>
                 <h4 className="font-display font-bold text-white text-sm">Parametric Control</h4>
                 <p className="text-xs text-brand-polar/50 font-mono">Loft, Lie, Offset, and Blade Length visualization.</p>
              </div>
           </div>
           <div className="flex gap-4">
              <div className="mt-1"><Eye className="w-5 h-5 text-brand-blue" /></div>
              <div>
                 <h4 className="font-display font-bold text-white text-sm">Real-time Rendering</h4>
                 <p className="text-xs text-brand-polar/50 font-mono">See the exact grind and finish before it prints.</p>
              </div>
           </div>
           <div className="flex gap-4">
              <div className="mt-1"><MousePointer className="w-5 h-5 text-brand-green" /></div>
              <div>
                 <h4 className="font-display font-bold text-white text-sm">Direct Order</h4>
                 <p className="text-xs text-brand-polar/50 font-mono">One click to send to our German manufacturing hub.</p>
              </div>
           </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full md:w-2/3 h-full"
      >
         {/* Live Configurator Iframe */}
         <div className="w-full h-full bg-brand-surface rounded-lg overflow-hidden shadow-2xl relative border border-white/10 group">
            <iframe 
               src={CONFIGURATOR_URL}
               className="w-full h-full border-0"
               title="3D Configurator"
               allow="fullscreen"
            ></iframe>

            {/* Hint overlay that disappears on hover/interaction */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none flex items-center justify-center group-hover:opacity-0 transition-opacity duration-500">
               <div className="bg-black/60 backdrop-blur px-6 py-3 rounded-full border border-white/10 flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                  <span className="text-white font-mono text-xs uppercase tracking-widest">Live Interactive Demo</span>
               </div>
            </div>

            {/* External Link Button */}
            <div className="absolute top-4 right-4 z-20">
               <a 
                  href={CONFIGURATOR_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-black/80 text-white p-2 rounded hover:bg-brand-mink transition-colors"
                  title="Open in new tab"
               >
                  <ExternalLink className="w-4 h-4" />
               </a>
            </div>
         </div>
      </motion.div>
    </div>
  );
};

export default Configurator;