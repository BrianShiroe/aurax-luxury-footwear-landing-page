import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductRecommendationsProps {
  recommendations: Product[];
  onProductClick: (product: Product) => void;
}

export const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({ recommendations, onProductClick }) => {
  return (
    <section className="mt-48">
        <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-bold tracking-tighter uppercase">Complete <span className="italic text-black/20">The Look</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {recommendations.map(p => (
               <ProductCard key={p.id} product={p} onClick={onProductClick} />
            ))}
        </div>
    </section>
  );
};
