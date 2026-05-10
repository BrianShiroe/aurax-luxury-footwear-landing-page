import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
// 1. IMPORT the new page
import { FeaturedPage } from './pages/FeaturedPage'; 
import { Product } from './types';
import { motion, AnimatePresence } from 'motion/react';

const AppContent: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  
  const location = useLocation();
  const state = location.state as { product?: Product } | null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // 2. OPTIONAL: Add to dark page logic if the featured page has a black background
  const isDarkPage = location.pathname === '/innovation' || location.pathname === '/featured';

  return (
    <div className="relative font-sans text-black overflow-x-hidden">
      <Navbar 
        onOpenCart={() => setIsCartOpen(true)} 
        isDarkPage={isDarkPage}
      />
      
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage onProductClick={setCurrentProduct} />} />
              <Route path="/shop" element={<ShopPage onProductClick={setCurrentProduct} />} />
              
              {/* 3. REGISTER the new route */}
              <Route path="/featured" element={<FeaturedPage />} />
              
              <Route path="/product/:id" element={<ProductPage product={state?.product || currentProduct} />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/innovation" element={<InnovationPage />} />
              <Route path="/story" element={<StoryPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>

            {location.pathname !== '/checkout' && <Footer />}
          </motion.div>
        </AnimatePresence>
      </main>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
      />
      
      {!isCartOpen && location.pathname !== '/checkout' && (
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          className="fixed bottom-6 right-6 z-40 md:hidden"
        >
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