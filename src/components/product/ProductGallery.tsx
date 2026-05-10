import React from 'react';
import { motion } from 'motion/react';

interface ProductGalleryProps {
  name: string;
  images: string[];
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ name, images }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="aspect-square bg-gray-50 overflow-hidden cursor-zoom-in"
          >
            <img src={img} alt={`${name} showcase-${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
          </motion.div>
        ))}
      </div>
      {/* Technical Detail Banner */}
      <div className="bg-black text-white p-12 flex flex-col justify-center gap-8">
         <h3 className="text-3xl font-bold tracking-tight uppercase">Master Crafted</h3>
         <p className="text-white/60 text-sm leading-relaxed max-w-sm">Every pair is hand-inspected in our Zurich lab, ensuring tectonic stability and material integrity that exceeds aerospace standards.</p>
         <div className="flex gap-4">
            <div className="w-12 h-[1px] bg-white self-center" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Lab Serial No. 042-X</span>
         </div>
      </div>
    </div>
  );
};
