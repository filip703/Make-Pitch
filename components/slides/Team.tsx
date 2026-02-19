import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../../types';

const Team: React.FC = () => {
  const members: TeamMember[] = [
    {
      name: "Mårten Eker",
      role: "CEO // Founder",
      hcp: "+3.2",
      background: "Ex-Tour Player & Engineer. 15 years in concept design/architecture. Built the core generative algorithm. Solves problems others ignore.",
      image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/marten.png"
    },
    {
      name: "Filip Hector",
      role: "VP // CCO",
      hcp: "6.2",
      background: "GTM & Ops Expert. CEO at Nonius Nordics. Experience scaling businesses bridging engineering and user experience.",
      image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/filip.png" 
    },
    {
      name: "Erik Paulsson",
      role: "Investor // GTM",
      hcp: "16.9",
      background: "Strategic Vision. Exit with Bruce (80M SEK). Enterprise Account Exec at Braze. London-based.",
      image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/erik.png" 
    }
  ];

  return (
    <div className="w-full max-w-6xl">
      <div className="text-center mb-16">
        <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">THE TEAM</span>
        <h2 className="text-4xl md:text-5xl font-display text-white uppercase">Engineers & Athletes</h2>
        <p className="text-brand-polar/50 font-mono text-xs mt-2">WE BUILD WHAT INCUMBENTS CANNOT</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {members.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2 }}
            className="group"
          >
            <div className="aspect-square overflow-hidden rounded-lg mb-6 border border-white/10 relative bg-brand-surface">
               <img 
                 src={member.image} 
                 alt={member.name} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               
               <div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur px-2 py-1 rounded border border-white/10 text-[10px] font-mono text-white">
                 HCP: {member.hcp}
               </div>
            </div>
            
            <div className="mb-4">
              <div className="text-xs font-mono text-brand-mink uppercase mb-1">{member.role}</div>
              <div className="text-2xl font-display text-white">{member.name}</div>
            </div>
            
            <p className="text-xs text-brand-polar/60 font-light leading-relaxed border-t border-white/10 pt-4">
               {member.background}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;