import React, { useEffect } from 'react';
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

  // Ensure scroll starts at top on initial mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (view: string) => {
    // If your navigateTo logic uses specific keys like 'shop' or 'collections', 
    // ensure the routing paths match your App.tsx setup.
    const path = view === 'shop' ? '/shop' : `/${view}`;
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-white min-h-screen selection:bg-black selection:text-white">
      {/* Hero Section: The primary entry point */}
      <Hero onNavigate={() => handleNavigation('shop')} />
      
      {/* Mission: Brand philosophy and architectural statement */}
      <Mission />
      
      {/* Collections: Category-based navigation cards */}
      <Collections onNavigate={() => handleNavigation('shop')} />
      
      {/* Featured Products: Direct e-commerce interaction */}
      <FeaturedProducts 
        onProductClick={onProductClick} 
        onNavigate={() => handleNavigation('shop')}
      />
      
      {/* Campaign: High-impact editorial visuals */}
      <Campaign />
      
      {/* Technical Showcase: Deep dive into engineering specs */}
      <TechnicalShowcase />
    </main>
  );
};