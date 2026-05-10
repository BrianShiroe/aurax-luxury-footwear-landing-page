import React from 'react';
import { motion } from 'motion/react';

export const StoryHero: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
       <div className="space-y-12">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.85]"
          >
            OUR <br /><span className="italic text-black/10">GENESIS</span>
          </motion.h1>
          <div className="space-y-8 text-lg text-black/60 leading-relaxed max-w-xl">
             <p>Founded in Stockholm with a singular vision: to destroy the boundary between athletic performance and high-fashion aesthetics.</p>
             <p>AURAX was born in a modular studio under the northern lights, where we realized that the silhouette of a shoe is as much about architecture as it is about comfort.</p>
          </div>
       </div>
       <div className="h-[80vh] bg-gray-50 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale" 
            alt="Genesis"
          />
       </div>
    </div>
  );
};
