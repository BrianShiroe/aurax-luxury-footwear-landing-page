import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ShopPage } from './pages/ShopPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { InnovationPage } from './pages/InnovationPage';
import { StoryPage } from './pages/StoryPage';
import { Product } from './types';
import { motion, AnimatePresence } from 'motion/react';

type View = 'home' | 'product' | 'checkout' | 'shop' | 'collections' | 'innovation' | 'story';

const AppContent: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [view, setView] = useState<View>('home');

  const navigateTo = (newView: View, product: Product | null = null) => {
    if (product) setCurrentProduct(product);
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsCartOpen(false);
  };

  // 1. Refactored Page Switcher
  const renderView = () => {
    switch (view) {
      case 'home':
        return <HomePage onProductClick={(p) => navigateTo('product', p)} onNavigate={navigateTo} />;
      case 'shop':
        return <ShopPage onProductClick={(p) => navigateTo('product', p)} />;
      case 'collections':
        return <CollectionsPage />;
      case 'innovation':
        return <InnovationPage />;
      case 'story':
        return <StoryPage />;
      case 'product':
        return currentProduct ? (
          <ProductPage 
            product={currentProduct} 
            onBack={() => setView('shop')} 
            onProductClick={(p) => navigateTo('product', p)} 
          />
        ) : null;
      case 'checkout':
        return <CheckoutPage onBack={() => setView('home')} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative font-sans text-black overflow-x-hidden">
      <Navbar 
        onOpenCart={() => setIsCartOpen(true)} 
        onNavigate={navigateTo}
        isDarkPage={view === 'innovation'}
      />
      
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderView()}
            {/* 2. Global Footer: No need to repeat it in every block */}
            {view !== 'checkout' && <Footer onNavigate={navigateTo} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onCheckout={() => navigateTo('checkout')}
      />
      
      {/* 3. Floating Checkout Trigger */}
      {!isCartOpen && view !== 'checkout' && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="fixed bottom-6 right-6 z-40 md:hidden">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="bg-black text-white p-6 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}