import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck, Users } from 'lucide-react';

interface AuthScreenProps {
  mode: 'make' | 'investor';
  setMode: (mode: 'make' | 'investor') => void;
  onUnlock: (pin: string) => void;
  error?: string;
  hasInvestorData: boolean;
  language?: 'en' | 'sv';
}

const translations = {
  en: {
    title: 'Secure Access Terminal',
    makeTeam: 'Make Team',
    investor: 'Investor',
    adminPin: 'Admin PIN',
    accessCode: 'Access Code',
    unlock: 'Unlock',
    protected: 'Protected by Make Golf Security Layer v2.4',
    noData: 'No presentation loaded. Please use the link provided by the Make Golf team.'
  },
  sv: {
    title: 'Säker Åtkomstterminal',
    makeTeam: 'Make Team',
    investor: 'Investerare',
    adminPin: 'Admin PIN',
    accessCode: 'Åtkomstkod',
    unlock: 'Lås Upp',
    protected: 'Skyddad av Make Golf Security Layer v2.4',
    noData: 'Ingen presentation laddad. Vänligen använd länken från Make Golf-teamet.'
  }
};

const AuthScreen: React.FC<AuthScreenProps> = ({ mode, setMode, onUnlock, error, hasInvestorData, language = 'en' }) => {
  const [pin, setPin] = useState('');
  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUnlock(pin);
  };

  return (
    <div className="h-screen w-full bg-[#111] flex items-center justify-center font-sans text-white p-4">
      <div className="w-full max-w-md space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-brand-mink/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-mink/20">
            <img 
              src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Logo/Make_Icon_256px.png" 
              alt="Make Golf" 
              className="w-10 h-10 object-contain"
            />
          </div>
          <h1 className="text-3xl font-display font-bold tracking-tight">Make Golf PitchOS™</h1>
          <p className="text-white/40 font-mono text-xs uppercase tracking-widest">{t.title}</p>
        </div>

        {/* Mode Switcher */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 rounded-lg border border-white/5">
          <button
            onClick={() => { setMode('make'); setPin(''); }}
            className={`flex items-center justify-center gap-2 py-3 rounded-md text-sm font-medium transition-all ${
              mode === 'make' 
                ? 'bg-brand-mink text-white shadow-lg' 
                : 'text-white/40 hover:text-white hover:bg-white/5'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            {t.makeTeam}
          </button>
          <button
            onClick={() => { setMode('investor'); setPin(''); }}
            className={`flex items-center justify-center gap-2 py-3 rounded-md text-sm font-medium transition-all ${
              mode === 'investor' 
                ? 'bg-white text-black shadow-lg' 
                : 'text-white/40 hover:text-white hover:bg-white/5'
            }`}
          >
            <Users className="w-4 h-4" />
            {t.investor}
          </button>
        </div>

        {/* Login Form */}
        <div className="bg-[#151515] border border-white/5 rounded-xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-white/40 tracking-widest">
                {mode === 'make' ? t.adminPin : t.accessCode}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/10 focus:border-brand-mink focus:outline-none font-mono tracking-widest text-lg"
                  placeholder="••••"
                  autoFocus
                />
              </div>
            </div>

            {error && (
              <div className="text-brand-mink text-xs font-mono bg-brand-mink/10 p-3 rounded border border-brand-mink/20 flex items-center justify-center">
                {error}
              </div>
            )}

            {!hasInvestorData && mode === 'investor' && (
               <div className="text-brand-amber text-xs font-mono bg-brand-amber/10 p-3 rounded border border-brand-amber/20 text-center">
                 {t.noData}
               </div>
            )}

            <button
              type="submit"
              disabled={(!hasInvestorData && mode === 'investor') || !pin}
              className="w-full bg-white text-black font-display font-bold uppercase py-4 rounded hover:bg-brand-mink hover:text-white transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t.unlock} <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="text-center">
          <p className="text-[10px] text-white/20 font-mono">
            {t.protected}
          </p>
        </div>

      </div>
    </div>
  );
};

export default AuthScreen;
