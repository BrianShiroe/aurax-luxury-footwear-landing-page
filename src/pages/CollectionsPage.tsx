import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: 'Performance',
    desc: 'Elite engineering for the modern athlete.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Minimal Essentials',
    desc: 'Hand-crafted purity of form and function.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Streetwear',
    desc: 'Futuristic silhouettes for the urban landscape.',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=1000',
  },
    {
    title: 'Limited Edition',
    desc: 'Exclusive collaborative drops and rare archives.',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000',
  },
];

export const CollectionsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-24 uppercase">
          THE <span className="italic text-black/10">COLLECTIONS</span>
        </h1>

        <div className="space-y-32">
          {collections.map((col, i) => (
            <motion.div 
              key={col.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-16 lg:gap-32",
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              )}
            >
              <div className="w-full lg:w-1/2 aspect-[4/5] bg-gray-50 overflow-hidden">
                <img src={col.image} alt={col.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[3s]" />
              </div>
              <div className="w-full lg:w-1/3 space-y-8">
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/40">Series 0{i + 1}</span>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">{col.title}</h2>
                <p className="text-lg text-black/60 leading-relaxed italic">{col.desc}</p>
                <button className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold pb-2 border-b border-black group transition-all">
                  Shop Collection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

import { cn } from '../lib/utils';
