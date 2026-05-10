import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Play, X } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onNavigate: (view: 'shop' | 'innovation') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col lg:flex-row pt-20 overflow-hidden bg-white">
      {/* Background 3D Layer - Full width but blob aligned right */}
      <div className="absolute inset-0 pointer-events-none opacity-40 lg:opacity-80">
        <HeroVisual />
      </div>

      {/* Left: Editorial Content */}
      <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-24 flex flex-col justify-between relative z-10 order-2 lg:order-1 bg-white/10 lg:bg-transparent">
        <div className="mt-12 lg:mt-0">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[11px] uppercase tracking-[0.3em] text-black/40 mb-8 lg:mb-12 block font-bold"
          >
            New Arrival / Series I
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[14vw] lg:text-[110px] leading-[0.85] font-bold tracking-tighter mb-8 lg:mb-12 text-brand-black"
            >
              THE<br />AURAX<br />SHIFT
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="max-w-xs text-base leading-relaxed text-black/50 mb-8 lg:mb-12 italic font-serif"
          >
            Engineered for the modern nomad. A synthesis of high-performance kinetics and Scandinavian brutalist architecture.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 lg:gap-6"
          >
            <button 
              onClick={() => onNavigate('shop')}
              className="w-full sm:w-auto group relative overflow-hidden bg-brand-black text-white px-10 lg:px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-bold transition-all shadow-xl hover:shadow-2xl cursor-pointer"
            >
              <span className="relative z-10">Shop Collection</span>
              <motion.div 
                className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" 
              />
            </button>
            <button 
              onClick={() => setIsVideoModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-4 border border-gray-200 text-brand-black px-10 lg:px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-gray-50 transition-all group cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center bg-brand-black/5 group-hover:bg-brand-black group-hover:text-white rounded-full transition-colors">
                <Play className="w-2.5 h-2.5 fill-current" />
              </div>
              The Film
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mt-16 lg:mt-auto"
        >
          <div className="flex flex-col">
            <span className="text-[20px] md:text-[24px] lg:text-[28px] font-light tracking-tighter">0.42</span>
            <span className="text-[9px] uppercase tracking-widest text-black/30 font-bold">Weight (kg)</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] md:text-[24px] lg:text-[28px] font-light tracking-tighter">100%</span>
            <span className="text-[9px] uppercase tracking-widest text-black/30 font-bold">Carbon Neutral</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] md:text-[24px] lg:text-[28px] font-light tracking-tighter">EVO-2</span>
            <span className="text-[9px] uppercase tracking-widest text-black/30 font-bold">Sole Tech</span>
          </div>
        </motion.div>
      </div>

      {/* Right: Visual Showcase (Now purely for the 3D Kinetic Visual) */}
      <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-0 relative flex items-center justify-center overflow-hidden order-1 lg:order-2">
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6"
          >
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video relative"
            >
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Badge */}
      <motion.div 
        initial={{ y: 100, x: '-50%' }}
        animate={{ y: 0, x: '-50%' }}
        transition={{ delay: 2, type: 'spring' }}
        className="fixed bottom-12 left-1/2 flex items-center gap-4 px-8 py-4 bg-white border border-brand-gray-border shadow-2xl rounded-full z-40"
      >
        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-black/80">Live Drop: Only 42 pairs remaining</span>
      </motion.div>
    </section>
  );
};

