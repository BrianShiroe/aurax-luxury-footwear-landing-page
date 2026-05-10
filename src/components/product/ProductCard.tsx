import React from 'react';
import { motion } from 'motion/react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';
import { formatCurrency, cn } from '../../lib/utils';
import { Heart, Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer relative"
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F9F9FB] rounded-sm shadow-sm group-hover:shadow-xl transition-all duration-700">
        <div className="absolute inset-0">
          <motion.img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out"
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              opacity: isHovered && product.images[1] ? 0 : 1 
            }}
          />
          {product.images[1] && (
            <motion.img
              src={product.images[1]}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1.05 : 1
              }}
            />
          )}
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isFeatured && (
            <span className="bg-white/90 backdrop-blur-md text-[8px] uppercase tracking-[0.25em] font-bold px-3 py-1.5 shadow-sm border border-gray-100">
              Featured
            </span>
          )}
          {product.category === 'Limited Edition' && (
            <span className="bg-black text-white text-[8px] uppercase tracking-[0.25em] font-bold px-3 py-1.5 shadow-md">
              Rare
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button 
          className={cn(
            "absolute top-4 right-4 p-2.5 bg-white shadow-sm border border-gray-100 rounded-full transition-all duration-500",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}
          onClick={(e) => {
            e.stopPropagation();
            // Wishlist logic
          }}
        >
          <Heart className="w-3.5 h-3.5 text-black" />
        </button>

        {/* Quick Add Overlay */}
        <div 
          className={cn(
            "absolute bottom-0 left-0 w-full p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10",
            "bg-gradient-to-t from-black/20 to-transparent"
          )}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product, product.sizes[0], product.colors[0]);
            }}
            className="w-full bg-white/90 backdrop-blur-md text-black py-4 text-[10px] uppercase font-bold tracking-[0.3em] flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all duration-300"
          >
            <Plus className="w-3 h-3" />
            Quick Add
          </button>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-start">
        <div className="flex flex-col gap-1.5">
          <span className="text-[9px] uppercase tracking-[0.3em] text-black/40 font-bold">
            {product.category}
          </span>
          <h3 className="text-sm font-medium tracking-tight text-black group-hover:italic transition-all">
            {product.name}
          </h3>
          <div className="flex gap-1.5 mt-1">
            {product.colors.map((color, i) => (
              <span 
                key={i} 
                className="w-2.5 h-2.5 border border-black/10 rounded-full" 
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        <p className="text-sm font-medium tracking-tighter text-black/80 font-mono">
          {formatCurrency(product.price)}
        </p>
      </div>
    </motion.div>
  );
};
