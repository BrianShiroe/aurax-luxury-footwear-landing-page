import React from 'react';
import { Hero } from '../components/home/Hero';
import { Collections } from '../components/home/Collections';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { Mission } from '../components/home/Mission';
import { Campaign } from '../components/home/Campaign';
import { TechnicalShowcase } from '../components/home/TechnicalShowcase';
import { Product } from '../types';

interface HomePageProps {
  onProductClick: (product: Product) => void;
  onNavigate: (view: 'shop' | 'collections' | 'innovation' | 'story') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onProductClick, onNavigate }) => {
  return (
    <main className="bg-white min-h-screen">
      <Hero onNavigate={onNavigate} />
      <Mission />
      <Collections onNavigate={onNavigate} />
      <FeaturedProducts 
        onProductClick={onProductClick} 
        onNavigate={onNavigate}
      />
      <Campaign />
      <TechnicalShowcase />
    </main>
  );
};
