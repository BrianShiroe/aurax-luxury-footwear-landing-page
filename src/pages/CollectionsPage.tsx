import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

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
    <div className="bg-white min-h-screen pt-24 md:pt-40 pb-20 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Responsive Header: Uses vw units for fluid mobile scaling */}
        <header className="mb-16 md:mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[14vw] md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-black"
          >
            THE <br className="md:hidden" />
            <span className="italic text-black/10">COLLECTIONS</span>
          </motion.h1>
        </header>

        <div className="space-y-24 md:space-y-64">
          {collections.map((col, i) => (
            <motion.div 
              key={col.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-12 lg:gap-32",
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              )}
            >
              {/* Image Container: Optimized aspect ratio for mobile scroll flow */}
              <div className="w-full lg:w-3/5 aspect-[16/10] md:aspect-video bg-gray-50 overflow-hidden relative group">
                <img 
                  src={col.image} 
                  alt={col.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale" 
                />
                <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
                <div className="absolute top-4 left-4 md:top-8 md:left-8 font-mono text-[10px] md:text-xs tracking-widest text-white/50 bg-black/20 backdrop-blur-sm px-2 py-1 rounded">
                  {`VOL_0${i + 1}`}
                </div>
              </div>

              {/* Text & Action: Left-aligned on mobile for better readability */}
              <div className="w-full lg:w-2/5 space-y-5 md:space-y-10 px-2 md:px-0">
                <div className="space-y-2 md:space-y-4">
                  <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-black text-black/30 block">
                    Available Worldwide
                  </span>
                  <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-tight">
                    {col.title}
                  </h2>
                </div>
                
                <p className="text-sm md:text-xl text-black/50 leading-relaxed font-medium max-w-md">
                  {col.desc}
                </p>

                {/* Mobile-optimized button: Larger touch area with flex-wrap prevention */}
                <Link 
                  to="/shop" 
                  className="inline-flex items-center gap-4 md:gap-6 group pt-4"
                >
                  <div className="relative">
                    <span className="text-[10px] md:text-[12px] uppercase tracking-[0.3em] font-black pb-1.5 block whitespace-nowrap">
                      Shop Collection
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black scale-x-100 group-hover:scale-x-50 transition-transform duration-500 origin-left" />
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 border border-black/10 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Footer Link: Clean signature transition */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 md:mt-64 text-center border-t border-black/5 pt-16 md:pt-24"
        >
          <Link 
            to="/story" 
            className="group inline-flex flex-col items-center gap-4"
          >
            <span className="text-[9px] uppercase tracking-[0.6em] text-black/30 font-bold group-hover:text-black transition-colors">
              Direct Inquiry
            </span>
            <span className="text-3xl md:text-5xl font-black tracking-tighter uppercase group-hover:italic transition-all">
              Contact us
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};