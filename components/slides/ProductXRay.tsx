import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, MoveHorizontal, Info, Target } from 'lucide-react';

const ProductXRay: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Technical Hotspots that appear only when the slider reveals them
  const hotspots = [
    { x: 30, y: 40, label: 'Face Thickness', value: '2.1mm' },
    { x: 60, y: 60, label: 'Lattice Density', value: '99.8%' },
    { x: 80, y: 30, label: 'Toe Weight', value: '14g' },
  ];

  const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = 'touches' in e ? e.touches[0] : null;
    if (!touch) return;
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <div className="w-full max-w-6xl h-full flex flex-col items-center justify-center">
      <div className="flex justify-between items-end w-full max-w-4xl mb-4">
        <div>
            <span className="text-brand-mink font-mono text-xs uppercase tracking-widest mb-1 block flex items-center gap-2">
                <Scan className="w-3 h-3 animate-pulse" /> INTERNAL SCAN
            </span>
            <h2 className="text-3xl font-display text-white uppercase">The Impossible Core</h2>
        </div>
        <div className="text-right">
             <div className="text-[10px] font-mono text-white/40 uppercase">Material</div>
             <div className="text-sm font-mono text-white">17-4PH Sintered Steel</div>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full max-w-4xl aspect-[16/9] rounded-xl overflow-hidden border border-white/10 cursor-col-resize select-none shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black"
        onMouseDown={() => setIsDragging(true)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchMove={handleTouchMove}
      >
        {/* LAYER 1: The "Skin" (Exterior) */}
        <div className="absolute inset-0 bg-brand-black flex items-center justify-center">
            {/* Placeholder Image - User will update this */}
            <img 
                src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/klubbor/iron.jpeg" 
                alt="Exterior"
                className="w-full h-full object-cover scale-110"
                draggable={false}
            />
            
            {/* Overlay Text for Skin */}
            <div className="absolute top-6 right-6 bg-black/60 backdrop-blur border border-white/10 px-3 py-1 rounded text-right">
                <span className="text-xs font-mono text-white/50 block">VIEW MODE</span>
                <span className="text-sm font-display font-bold text-white">EXTERIOR SURFACE</span>
            </div>
        </div>

        {/* LAYER 2: The "Bone" (Interior X-Ray) */}
        <div 
            className="absolute inset-0 bg-black overflow-hidden border-r border-brand-mink/50"
            style={{ width: `${sliderPosition}%` }}
        >
            <div className="absolute inset-0 w-full max-w-4xl h-full flex items-center justify-center">
                 {/* The "X-Ray" Image - Heavily styled to look like a scan even with the same source image */}
                 <div className="relative w-full h-full">
                    <img 
                        src="https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/klubbor/iron.jpeg" 
                        alt="Interior"
                        className="w-full h-full object-cover scale-110"
                        style={{ filter: 'grayscale(100%) invert(100%) brightness(0.7) contrast(200%) sepia(100%) hue-rotate(-50deg) saturate(300%)' }} 
                        draggable={false}
                    />
                    
                    {/* Tech Grid Overlay */}
                    <div className="absolute inset-0 opacity-30" style={{ 
                        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 34, 76, .3) 25%, rgba(255, 34, 76, .3) 26%, transparent 27%, transparent 74%, rgba(255, 34, 76, .3) 75%, rgba(255, 34, 76, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 34, 76, .3) 25%, rgba(255, 34, 76, .3) 26%, transparent 27%, transparent 74%, rgba(255, 34, 76, .3) 75%, rgba(255, 34, 76, .3) 76%, transparent 77%, transparent)',
                        backgroundSize: '50px 50px'
                    }}></div>
                    
                    {/* Scan Lines Animation */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-mink/10 to-transparent animate-[scan_2s_linear_infinite] h-full w-full pointer-events-none"></div>

                     {/* Overlay Text for Core */}
                    <div className="absolute top-6 left-6 bg-brand-mink/20 backdrop-blur border border-brand-mink/50 px-3 py-1 rounded text-left">
                        <span className="text-xs font-mono text-brand-mink block">VIEW MODE</span>
                        <span className="text-sm font-display font-bold text-white">INTERNAL GYROID</span>
                    </div>

                    {/* Hotspots - Only visible if inside the X-Ray area */}
                    {hotspots.map((spot, idx) => (
                        <div 
                            key={idx}
                            className="absolute z-20"
                            style={{ 
                                left: `${spot.x}%`, 
                                top: `${spot.y}%`,
                                display: sliderPosition > spot.x ? 'block' : 'none'
                            }}
                        >
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="relative group cursor-pointer"
                            >
                                <div className="w-3 h-3 bg-brand-mink rounded-full animate-ping absolute inset-0"></div>
                                <div className="w-3 h-3 bg-white rounded-full relative z-10"></div>
                                {/* Tooltip */}
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 border border-brand-mink px-2 py-1 rounded whitespace-nowrap">
                                    <div className="text-[10px] font-mono text-brand-mink uppercase">{spot.label}</div>
                                    <div className="text-xs font-bold text-white">{spot.value}</div>
                                </div>
                            </motion.div>
                        </div>
                    ))}

                 </div>
            </div>
        </div>

        {/* The Slider Handle */}
        <div 
            className="absolute top-0 bottom-0 w-px bg-brand-mink cursor-col-resize z-30 shadow-[0_0_15px_rgba(255,34,76,0.8)]"
            style={{ left: `${sliderPosition}%` }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-mink rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <MoveHorizontal className="w-4 h-4 text-white" />
            </div>
        </div>

      </div>

      <div className="mt-6 flex gap-6 text-xs font-mono text-brand-polar/50 uppercase tracking-widest">
         <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-brand-mink"></div> Gyroid Lattice
         </div>
         <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-white/20"></div> Solid Polished Face
         </div>
      </div>
    </div>
  );
};

export default ProductXRay;