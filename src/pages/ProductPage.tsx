import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductInfo } from '../components/product/ProductInfo';
import { ProductRecommendations } from '../components/product/ProductRecommendations';

interface ProductPageProps {
  product?: Product | null;
}

export const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
        <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest italic">Product not found</h2>
        <button onClick={() => navigate('/shop')} className="bg-black text-white px-8 py-4 text-[10px] uppercase font-bold tracking-widest cursor-pointer">Return to Shop</button>
      </div>
    );
  }

  const handleAddToCart = (size: string, color: string, quantity: number) => {
    for (let i = 0; i < quantity; i++) {
        addToCart(product, size, color);
    }
  };

  const handleBack = () => {
    navigate('/shop');
  };

  const handleProductClick = (prod: Product) => {
    navigate(`/product/${prod.id}`, { state: { product: prod } });
  };

  const recommendations = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-4 mb-12 text-[10px] uppercase tracking-[0.2em] font-bold text-black/40">
           <button onClick={handleBack} className="hover:text-black flex items-center gap-2 group transition-all cursor-pointer">
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
            onProductClick={handleProductClick} 
        />
      </div>
    </div>
  );
};
