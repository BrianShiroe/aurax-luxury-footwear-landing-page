import React from 'react';
import { useNavigate } from 'react-router-dom'; // Added for routing
import { motion } from 'motion/react';
import { ProductCard } from '../product/ProductCard';
import { PRODUCTS } from '../../constants';
import { Product } from '../../types';

interface FeaturedProductsProps {
  onProductClick: (product: Product) => void;
  onNavigate: (view: 'shop') => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onProductClick, onNavigate }) => {
  const navigate = useNavigate(); // Initialize navigation hook
  const featured = PRODUCTS.filter(p => p.isFeatured).slice(0, 3);

  const handleProductNavigation = (product: Product) => {
    // 1. Set the active product in parent state (for immediate UI updates)
    onProductClick(product);
    
    // 2. Change the route to the specific product path
    // We pass the product object in 'state' so the details page loads instantly
    navigate(`/product/${product.id}`, { state: { product } });
    
    // 3. Scroll to top to ensure the user sees the product image first
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.5em] font-bold text-black/30 mb-3 md:mb-4 block"
            >
              Curated Selection
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-6xl font-bold tracking-tight text-black leading-[1.1]"
            >
              SEASON <span className="text-black/20 italic">ESSENTIALS</span>
            </motion.h2>
          </div>
          
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => onNavigate('shop')}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold border-b border-black pb-2 hover:italic transition-all cursor-pointer"
          >
            View Entire Catalog
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-24">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              {/* Updated the onClick to use our new navigation handler */}
              <ProductCard 
                product={product} 
                onClick={() => handleProductNavigation(product)} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};