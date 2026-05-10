import React from 'react';
import { motion } from 'motion/react';

export const Campaign: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden group flex items-center justify-center">
      {/* Background Images - Optimized for Speed */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&q=80&w=2000" 
          alt="Campaign" 
          className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-110"
        />
        <img 
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=2000" 
          alt="Campaign Hover" 
          className="absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-700 ease-out opacity-0 group-hover:opacity-60 group-hover:scale-100"
        />
      </div>

      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-8">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white text-[10px] md:text-[12px] font-bold uppercase tracking-[0.6em] md:tracking-[0.8em] mb-8 md:mb-12"
        >
          ARCHIVE 001 / CORE
        </motion.span>

        {/* Reduced Size: From 7xl/12vw to 5xl/10vw */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-[10vw] font-black text-white leading-[0.9] tracking-tighter"
        >
          SILENCE <br className="md:hidden" /> 
          <span className="italic text-white/30">MOTION</span>
        </motion.h2>

        <motion.button 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 md:mt-16 bg-white text-black px-10 md:px-16 py-4 md:py-6 text-[10px] md:text-[11px] uppercase font-bold tracking-[0.3em] md:tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-500 shadow-2xl cursor-pointer"
        >
          Read The Journal
        </motion.button>
      </div>
    </section>
  );
};