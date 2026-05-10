import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    title: 'Performance',
    subtitle: 'Elite Engineering',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000',
    color: '#F9F9FB'
  },
  {
    title: 'Minimal',
    subtitle: 'Pure Form',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=1000',
    color: '#FFFFFF'
  },
  {
    title: 'Limited',
    subtitle: 'Rare Archives',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000',
    hoverImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1000',
    color: '#F2F2F2'
  }
];

interface CollectionsProps {
  onNavigate: (view: 'collections' | 'shop') => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#F9F9FB]">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((col, index) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onNavigate('shop')}
            className="group relative h-[600px] overflow-hidden cursor-pointer rounded-sm"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0">
              <motion.img 
                src={col.image} 
                alt={col.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                style={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
              <motion.img 
                src={col.hoverImage} 
                alt={`${col.title} hover`}
                className="absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-105"
                transition={{ duration: 0.4 }}
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            {/* Content */}
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60 mb-2 block translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                {col.subtitle}
              </span>
              <h3 className="text-4xl font-bold tracking-tight text-white mb-6 uppercase">
                {col.title}
              </h3>
              
              <button 
                onClick={(e) => { e.stopPropagation(); onNavigate('shop'); }}
                className="flex items-center gap-3 text-white text-[10px] uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100 cursor-pointer"
              >
                Explore Collection
                <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all" />
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Glass Card Accent */}
            <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="w-4 h-4 text-white transform -rotate-45" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
