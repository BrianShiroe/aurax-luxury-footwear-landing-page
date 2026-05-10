import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: 'Performance',
    subtitle: 'Elite Engineering',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Minimal',
    subtitle: 'Pure Form',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Limited',
    subtitle: 'Rare Archives',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1000',
  }
];

interface CollectionsProps {
  onNavigate: (view: 'collections' | 'shop') => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#F9F9FB]">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {collections.map((col, index) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onNavigate('shop')}
            className="group relative h-[450px] md:h-[600px] overflow-hidden cursor-pointer rounded-xl bg-gray-200"
          >
            {/* Optimized Background Image Layer */}
            <div className="absolute inset-0">
              {/* Default Image */}
              <img 
                src={col.image} 
                alt={col.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-110"
              />
              {/* Hover Image */}
              <img 
                src={col.hoverImage} 
                alt={`${col.title} hover`}
                className="absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-100"
              />
            </div>
            
            {/* Dynamic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            
            {/* Content Container */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-white/70 mb-2 block translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                {col.subtitle}
              </span>
              
              {/* Reduced size: 2xl on mobile, 4xl on desktop */}
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4 md:mb-6 uppercase">
                {col.title}
              </h3>
              
              <button 
                onClick={(e) => { e.stopPropagation(); onNavigate('shop'); }}
                className="flex items-center gap-3 text-white text-[9px] md:text-[10px] uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100"
              >
                Explore
                <div className="w-6 h-[1px] bg-white group-hover:w-10 transition-all" />
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>

            {/* Top Right Accent - Hidden on small mobile to reduce clutter */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white transform -rotate-45" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};