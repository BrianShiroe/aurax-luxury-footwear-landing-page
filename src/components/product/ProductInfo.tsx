import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Ruler, Minus, Plus, ChevronRight, Heart, Truck, RefreshCw, Info } from 'lucide-react';
import { Product } from '../../types';
import { formatCurrency, cn } from '../../lib/utils';

interface ProductInfoProps {
  product: Product;
  onAddToCart: (size: string, color: string, quantity: number) => void;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [activeTab, setActiveTab] = useState<'details' | 'specs' | 'shipping'>('details');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="lg:sticky lg:top-32 h-fit space-y-12">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/30">{product.category}</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">{product.name}</h1>
          </div>
          <p className="text-2xl font-mono font-medium tracking-tighter">{formatCurrency(product.price)}</p>
        </div>

        <div className="flex items-center gap-4">
           <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-black text-black" />)}
           </div>
           <span className="text-[10px] uppercase tracking-widest font-bold text-black/40 underline decoration-black/10 cursor-pointer">48 REVIEWS</span>
        </div>

        <p className="text-lg text-black/60 leading-relaxed max-w-xl">
          {product.description}
        </p>
      </div>

      {/* Selection Area */}
      <div className="space-y-12">
        {/* Color Selection */}
        <div className="space-y-4">
          <div className="flex justify-between">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black">Select Color</span>
              <span className="text-[10px] uppercase tracking-widest text-black/40 font-mono">CODE: {selectedColor}</span>
          </div>
          <div className="flex gap-4">
            {product.colors.map(color => (
              <button 
                key={color}
                onClick={() => setSelectedColor(color)}
                className={cn(
                  "w-10 h-10 rounded-full border-2 transition-all p-0.5 cursor-pointer",
                  selectedColor === color ? "border-black scale-110 shadow-lg" : "border-transparent hover:border-gray-200"
                )}
              >
                <div className="w-full h-full rounded-full" style={{ backgroundColor: color }} />
              </button>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="space-y-4">
          <div className="flex justify-between">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black">Select Size</span>
              <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-black/40 hover:text-black transition-colors cursor-pointer">
                  <Ruler className="w-3 h-3" />
                  Size Guide
              </button>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-4 gap-3">
            {product.sizes.map(size => (
              <button 
                key={size}
                onClick={() => setSelectedSize(size)}
                className={cn(
                  "py-4 text-[11px] font-mono font-bold border transition-all duration-300 cursor-pointer",
                  selectedSize === size 
                    ? "bg-black text-white border-black shadow-xl" 
                    : "border-gray-200 text-black/40 hover:border-black hover:text-black"
                )}
              >
                US {size}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <div className="flex items-center border border-gray-200 px-4">
            <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="p-2 text-black/40 hover:text-black cursor-pointer">
               <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-12 text-center font-mono font-bold text-sm">{quantity}</span>
            <button onClick={() => setQuantity(q => q+1)} className="p-2 text-black/40 hover:text-black cursor-pointer">
               <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <button 
             onClick={() => onAddToCart(selectedSize, selectedColor, quantity)}
             className="flex-1 bg-black text-white py-6 text-[11px] uppercase font-bold tracking-[0.5em] hover:bg-black/90 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-4 group cursor-pointer"
          >
            Add To Bag
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="p-6 border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* USP List */}
        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
           <div className="flex flex-col items-center gap-3 text-center">
              <Truck className="w-4 h-4 text-black" />
              <span className="text-[8px] uppercase tracking-widest font-bold">Free Shipping</span>
           </div>
           <div className="flex flex-col items-center gap-3 text-center border-x border-gray-100">
              <RefreshCw className="w-4 h-4 text-black" />
              <span className="text-[8px] uppercase tracking-widest font-bold">14 Day returns</span>
           </div>
           <div className="flex flex-col items-center gap-3 text-center">
              <Info className="w-4 h-4 text-black" />
              <span className="text-[8px] uppercase tracking-widest font-bold">Authentic</span>
           </div>
        </div>

        {/* Tabs */}
        <div className="space-y-6">
          <div className="flex border-b border-gray-100">
            {(['details', 'specs', 'shipping'] as const).map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-6 py-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all border-b-2 cursor-pointer",
                  activeTab === tab ? "border-black text-black" : "border-transparent text-black/30 hover:text-black/60"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="min-h-[100px] text-sm text-black/60 leading-relaxed">
            <AnimatePresence mode="wait">
              {activeTab === 'details' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <ul className="space-y-3">
                     {product.details.map((d, i) => (
                       <li key={i} className="flex gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-black/10 mt-1.5" />
                         {d}
                       </li>
                     ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
