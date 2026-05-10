import React from 'react';
import { motion } from 'motion/react';

export const TechnicalShowcase: React.FC = () => {
  return (
    <section className="py-40 px-6 md:px-12 bg-black text-white">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-12">
              <span className="text-white/40 text-[10px] uppercase tracking-[0.6em] font-bold">Engineering Specs</span>
              <h3 className="text-7xl font-bold tracking-tighter leading-none">BUILT FOR <br />PERFORMANCE</h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl">
                  Every AURAX silhouette is developed over 18 months, undergoing rigorous stress testing across extreme climates and terrains.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="border-l border-white/20 pl-6">
                      <span className="text-3xl font-mono block mb-2">-15%</span>
                      <span className="text-[9px] uppercase tracking-widest text-white/40">Weight reduction</span>
                  </div>
                  <div className="border-l border-white/20 pl-6">
                      <span className="text-3xl font-mono block mb-2">+42%</span>
                      <span className="text-[9px] uppercase tracking-widest text-white/40">Energy return</span>
                  </div>
              </div>
          </div>
          <div className="relative group cursor-crosshair">
              <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-white/5 rounded-full"
              />
              <div className="relative z-10 w-full aspect-square overflow-hidden">
                <motion.img 
                    src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000" 
                    alt="Technical" 
                    className="w-full h-full object-contain filter grayscale invert transition-all duration-700 ease-out group-hover:scale-110"
                    animate={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                />
                <motion.img 
                    src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000" 
                    alt="Technical Detail" 
                    className="absolute inset-0 w-full h-full object-contain filter grayscale invert scale-110 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-100"
                    transition={{ duration: 0.4 }}
                />
              </div>
          </div>
      </div>
    </section>
  );
};
