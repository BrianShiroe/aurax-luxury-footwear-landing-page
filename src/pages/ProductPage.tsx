import React from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductInfo } from '../components/product/ProductInfo';
import { ProductRecommendations } from '../components/product/ProductRecommendations';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
  onProductClick: (product: Product) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ product, onBack, onProductClick }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (size: string, color: string, quantity: number) => {
    for (let i = 0; i < quantity; i++) {
        addToCart(product, size, color);
    }
  };

  const recommendations = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-4 mb-12 text-[10px] uppercase tracking-[0.2em] font-bold text-black/40">
           <button onClick={onBack} className="hover:text-black flex items-center gap-2 group transition-all cursor-pointer">
             <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
             Back to Shop
           </button>
           <ChevronRight className="w-3 h-3 opacity-20" />
           <span>{product.category}</span>
           <ChevronRight className="w-3 h-3 opacity-20" />
           <span className="text-black">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          <ProductGallery name={product.name} images={product.images} />
          <ProductInfo product={product} onAddToCart={handleAddToCart} />
        </div>

        <ProductRecommendations 
            recommendations={recommendations} 
            onProductClick={onProductClick} 
        />
      </div>
    </div>
  );
};
