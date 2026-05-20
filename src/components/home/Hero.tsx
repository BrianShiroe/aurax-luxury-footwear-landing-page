import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X } from "lucide-react";

interface HeroProps {
  onNavigate: (view: "shop" | "innovation") => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);

  // Automatically hide the badge 5 seconds after it initialises
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadge(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col lg:flex-row pt-16 md:pt-20 overflow-hidden bg-white">
      {/* Visual Showcase - Top on Mobile, Right on Desktop */}
      <div className="w-full lg:w-1/2 flex-1 relative flex items-center justify-center py-10 lg:py-0 overflow-hidden order-1 lg:order-2 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: -5 }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          className="relative w-full max-w-[300px] md:max-w-[450px] lg:max-w-none lg:w-[110%] flex justify-center"
        >
          <img
            src="/images/pair-of-colorful-sports-shoes-for-active-lifestyle-no-background-png.png"
            alt="Aurax Series I Shoe"
            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-20"
          />
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-black/5 blur-[80px] md:blur-[120px] rounded-full -z-10 scale-125 md:scale-150 opacity-40" />
        </motion.div>
      </div>

      {/* Editorial Content - Bottom on Mobile, Left on Desktop */}
      <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-24 flex flex-col justify-between relative z-10 order-2 lg:order-1">
        <div className="mt-4 lg:mt-0">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-black/40 mb-6 md:mb-10 block font-bold"
          >
            New Arrival / Series I
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[14vw] md:text-[16vw] lg:text-[110px] leading-[0.85] font-bold tracking-tighter mb-8 lg:mb-12 text-black"
            >
              THE
              <br />
              AURAX
              <br />
              SHIFT
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="max-w-xs text-xs md:text-base leading-relaxed text-black/50 mb-8 lg:mb-12 italic font-serif"
          >
            Engineered for the modern nomad. A synthesis of high-performance kinetics and Scandinavian brutalist
            architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 lg:gap-6"
          >
            <button
              onClick={() => onNavigate("shop")}
              className="w-full sm:w-auto group relative overflow-hidden bg-black text-white px-10 py-4 md:py-5 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold transition-all shadow-xl hover:shadow-2xl cursor-pointer"
            >
              <span className="relative z-10">Shop Collection</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>

            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-4 border border-black/10 text-black px-10 py-4 md:py-5 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-black/5 transition-all group cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center bg-black/5 group-hover:bg-black group-hover:text-white rounded-full transition-colors">
                <Play className="w-2.5 h-2.5 fill-current" />
              </div>
              The Film
            </button>
          </motion.div>
        </div>

        {/* Specs Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-3 gap-8 md:gap-16 mt-12 lg:mt-auto border-t border-black/5 pt-8"
        >
          <div className="flex flex-col">
            <span className="text-[18px] lg:text-[28px] font-light tracking-tighter">0.42</span>
            <span className="text-[8px] lg:text-[9px] uppercase tracking-widest text-black/30 font-bold">
              Weight (kg)
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[18px] lg:text-[28px] font-light tracking-tighter">100%</span>
            <span className="text-[8px] lg:text-[9px] uppercase tracking-widest text-black/30 font-bold">Neutral</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[18px] lg:text-[28px] font-light tracking-tighter">EVO-2</span>
            <span className="text-[8px] lg:text-[9px] uppercase tracking-widest text-black/30 font-bold">
              Sole Tech
            </span>
          </div>
        </motion.div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video bg-black"
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

      {/* Floating Badge - Managed with AnimatePresence for clean unmounting */}
      <AnimatePresence>
        {showBadge && (
          <motion.div
            initial={{ y: 100, x: "-50%" }}
            animate={{ y: 0, x: "-50%" }}
            exit={{ y: 150, x: "-50%", opacity: 0 }}
            transition={{
              initial: { type: "spring", delay: 2 }, // ❌ This is incorrect
              exit: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
            className="fixed bottom-6 lg:bottom-12 left-1/2 flex items-center gap-3 px-6 py-3 bg-white border border-black/5 shadow-2xl rounded-full z-40 whitespace-nowrap scale-90 md:scale-100"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black text-black/80">
              Live Drop: Only 42 pairs remaining
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
