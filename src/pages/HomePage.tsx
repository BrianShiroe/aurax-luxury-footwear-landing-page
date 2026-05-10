import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { Collections } from '../components/home/Collections';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { Mission } from '../components/home/Mission';
import { Campaign } from '../components/home/Campaign';
import { TechnicalShowcase } from '../components/home/TechnicalShowcase';
import { Product } from '../types';

interface HomePageProps {
  onProductClick: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onProductClick }) => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-white min-h-screen">
      <Hero onNavigate={navigateTo} />
      <Mission />
      <Collections onNavigate={navigateTo} />
      <FeaturedProducts 
        onProductClick={onProductClick} 
        onNavigate={navigateTo}
      />
      <Campaign />
      <TechnicalShowcase />
    </main>
  );
};
