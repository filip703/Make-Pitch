import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Volume1 } from 'lucide-react';

const OutroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Auto-play muted on mount to capture attention, let user unmute
    if (videoRef.current) {
        videoRef.current.muted = true;
        setIsMuted(true);
        videoRef.current.play().then(() => {
            setIsPlaying(true);
        }).catch(err => console.log("Autoplay blocked", err));
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
      if (!newMuted && volume === 0) {
        setVolume(1);
        videoRef.current.volume = 1;
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
      if (newVol === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const width = bounds.width;
    const percentage = x / width;
    videoRef.current.currentTime = percentage * videoRef.current.duration;
  };

  return (
    <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center overflow-hidden group">
      
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover opacity-90"
        src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Video/Make%20brand%20video.mp4"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        playsInline
        click-to-play="true"
        onClick={togglePlay}
      />

      {/* Gradient Overlay for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-60"></div>

      {/* Centered Play Button (Visible when paused) */}
      {!isPlaying && (
        <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={togglePlay}
            className="absolute z-20 w-24 h-24 bg-brand-mink/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform cursor-pointer shadow-[0_0_50px_rgba(255,34,76,0.5)]"
        >
            <Play className="w-10 h-10 text-white fill-current ml-1" />
        </motion.button>
      )}

      {/* 
        CONTROLS REPOSITIONED:
        Moved to bottom-right and lifted (bottom-24) to clear the slide deck footer navigation.
        Z-Index increased to 60 to ensure it sits on top of the layout footer.
      */}
      <div className="absolute bottom-24 right-6 md:right-12 z-[60] w-full max-w-sm">
         <div className="flex flex-col gap-3 bg-[#191919]/90 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl">
            
            {/* Top Row: Title & Status */}
            <div className="flex justify-between items-center mb-1">
                <div className="text-xs font-mono text-white/50 uppercase tracking-widest">
                    Brand Video
                </div>
                <div className="text-[10px] font-mono text-brand-mink uppercase animate-pulse">
                    {isPlaying ? 'Playing' : 'Paused'}
                </div>
            </div>

            {/* Middle Row: Progress Bar */}
            <div 
                className="w-full h-2 bg-white/10 rounded-full cursor-pointer relative overflow-hidden group/bar"
                onClick={handleSeek}
            >
                <div className="absolute inset-y-0 left-0 bg-brand-mink w-0 transition-all duration-100" style={{ width: `${progress}%` }}></div>
                <div className="absolute inset-y-0 left-0 w-full h-full opacity-0 group-hover/bar:opacity-20 bg-white transition-opacity"></div>
            </div>

            {/* Bottom Row: Play & Volume Controls */}
            <div className="flex items-center justify-between pt-1">
                <button onClick={togglePlay} className="hover:text-brand-mink transition-colors text-white focus:outline-none flex items-center gap-2">
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                    <span className="text-xs font-bold font-display uppercase hidden sm:inline-block">{isPlaying ? 'Pause' : 'Play'}</span>
                </button>

                <div className="h-4 w-px bg-white/10 mx-2"></div>

                <div className="flex items-center gap-3 flex-grow justify-end">
                    <button onClick={toggleMute} className="hover:text-brand-mink transition-colors text-white focus:outline-none">
                        {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : volume < 0.5 ? <Volume1 className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                    
                    <div className="w-24 flex items-center">
                        <input 
                            type="range" 
                            min="0" 
                            max="1" 
                            step="0.05" 
                            value={isMuted ? 0 : volume}
                            onChange={handleVolumeChange}
                            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-mink"
                        />
                    </div>
                </div>
            </div>

         </div>
      </div>
    </div>
  );
};

export default OutroVideo;