import React from 'react';
import { motion } from 'motion/react';

export const Campaign: React.FC = () => {
  return (
    <section className="h-screen relative overflow-hidden group">
      <div className="absolute inset-0">
        <motion.img 
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=2000" 
          alt="Campaign" 
          className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-110"
          animate={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
        <motion.img 
          src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&q=80&w=2000" 
          alt="Campaign Hover" 
          className="absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-700 ease-out opacity-0 group-hover:opacity-60 group-hover:scale-105"
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white text-[12px] font-bold uppercase tracking-[0.8em] mb-12"
        >
          ARCHIVE 001 / CORE
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-7xl md:text-[12vw] font-black text-white leading-none tracking-tighter"
        >
          SILENCE <span className="italic text-white/30">MOTION</span>
        </motion.h2>
        <button className="mt-16 bg-white text-brand-black px-16 py-6 text-[11px] uppercase font-bold tracking-[0.4em] hover:bg-brand-black hover:text-white transition-all duration-500 shadow-2xl cursor-pointer">
          Read The Journal
        </button>
      </div>
    </section>
  );
};
