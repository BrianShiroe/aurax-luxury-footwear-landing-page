import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleProductNavigation = (product: Product) => {
    // 1. Update legacy context state
    onProductClick(product);
    
    // 2. Trigger URL navigation and pass product in router state
    navigate(`/product/${product.id}`, { state: { product } });
    
    // 3. Ensure window starts at the top of the details page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <header className="mb-16 md:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[12vw] md:text-8xl font-bold tracking-tighter mb-8 md:mb-12"
          >
            SHOP <span className="italic text-black/10">ALL</span>
          </motion.h1>
          
          {/* Scrollable categories on mobile for better UX */}
          <div className="flex flex-row overflow-x-auto no-scrollbar md:flex-wrap gap-x-8 gap-y-4 border-b border-gray-100 pb-6 md:pb-8">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold transition-all whitespace-nowrap",
                  activeCategory === cat ? "text-black italic underline underline-offset-8" : "text-black/30 hover:text-black"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Responsive Grid: 1 column on mobile, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 md:gap-y-20">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <ProductCard 
                product={product} 
                onClick={() => handleProductNavigation(product)} 
              />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-40 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-bold">
              No architectural pieces found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};