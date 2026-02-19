import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../../types';
import { Quote } from 'lucide-react';

const Team: React.FC = () => {
  const members: TeamMember[] = [
    {
      name: "Mårten Eker",
      role: "CEO // Founder",
      hcp: "+3.2",
      background: "Ex-Tour Player & Engineer. 15 years in concept design. Built the core generative algorithm.",
      image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/marten.png"
    },
    {
      name: "Filip Hector",
      role: "VP // CCO",
      hcp: "6.2",
      background: "GTM & Ops Expert. CEO at Nonius Nordics. Experience scaling businesses bridging engineering and UX.",
      image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/filip.png" 
    },
    {
      name: "Erik Paulsson",
      role: "Investor // GTM",
      hcp: "16.9",
      background: "Strategic Vision. Exit with Bruce (80M SEK). Enterprise Account Exec at Braze.",
      image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/erik.png" 
    }
  ];

  return (
    <div className="w-full max-w-7xl h-full flex flex-col md:flex-row gap-12 items-center">
      
      {/* LEFT: The "Why" / Manifesto */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-1/3 flex flex-col justify-center"
      >
         <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-4 block">WHO WE ARE</span>
         <h2 className="text-5xl font-display text-white uppercase mb-8 leading-none">
            Engineers.<br/>Athletes.<br/>Rebels.
         </h2>
         
         <div className="relative pl-6 border-l-2 border-brand-mink/30">
            <Quote className="absolute -top-2 -left-3 w-6 h-6 text-brand-mink bg-brand-black p-1" />
            <p className="text-brand-polar/80 text-lg font-light leading-relaxed italic mb-6">
               "We are tired of the 'good enough' standard in golf. We are a team of players and engineers who believe that if the technology exists to make something perfect, we have a moral obligation to build it."
            </p>
            <div className="text-sm font-mono text-brand-polar/40 uppercase">
               — The Make Manifesto
            </div>
         </div>

         <div className="mt-12 space-y-4">
             <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-white/20"></div>
                <div className="text-xs font-mono text-white/60 uppercase">Stockholm, Sweden (HQ)</div>
             </div>
             <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-white/20"></div>
                <div className="text-xs font-mono text-white/60 uppercase">Founded 2021</div>
             </div>
         </div>
      </motion.div>

      {/* RIGHT: Larger Team Cards */}
      <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="group relative h-[450px] rounded-xl overflow-hidden border border-white/10 bg-brand-surface"
          >
             {/* Full Height Image */}
             <img 
               src={member.image} 
               alt={member.name} 
               className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
             />
             
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>

             {/* Content */}
             <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-end mb-2">
                    <div className="text-xs font-mono text-brand-mink uppercase tracking-wider mb-1">{member.role}</div>
                    <div className="bg-white/10 backdrop-blur px-2 py-0.5 rounded text-[9px] font-mono text-white/80 border border-white/10">HCP {member.hcp}</div>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-4 leading-none">{member.name}</h3>
                
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-xs text-brand-polar/70 leading-relaxed border-t border-white/10 pt-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                        {member.background}
                    </p>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;