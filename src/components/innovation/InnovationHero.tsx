import React from 'react';
import { motion } from 'motion/react';

export const InnovationHero: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-[10px] uppercase tracking-[0.6em] font-bold text-white/40 block mb-8"
      >
        Laboratory 001
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-12"
      >
        PRECISION <br />
        <span className="text-white/20 italic">ENGINEERING</span>
      </motion.h1>
      <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-24">
        At AURAX, we don't just design shoes. We engineer interfaces for human movement. Every curve is calculated, every material is tested in extreme conditions.
      </p>
    </div>
  );
};
