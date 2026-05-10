import React from 'react';
import { motion } from 'motion/react';
import { ProductCard } from '../components/product/ProductCard';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Product } from '../types';
import { cn } from '../lib/utils';

interface ShopPageProps {
  onProductClick: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
          >
            SHOP <span className="italic text-black/10">ALL</span>
          </motion.h1>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 border-b border-gray-100 pb-8">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-[10px] uppercase tracking-[0.3em] font-bold transition-all",
                  activeCategory === cat ? "text-black italic underline underline-offset-8" : "text-black/30 hover:text-black"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} onClick={onProductClick} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
