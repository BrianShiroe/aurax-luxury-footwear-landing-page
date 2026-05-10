import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
import { PRODUCTS } from './constants';
import { Product } from './types';
import { motion, AnimatePresence } from 'motion/react';

type View = 'home' | 'product' | 'checkout' | 'shop' | 'collections' | 'innovation' | 'story';

const AppContent: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [view, setView] = useState<View>('home');

  // Unified navigation handler
  const navigateTo = (newView: View, product: Product | null = null) => {
    if (product) setCurrentProduct(product);
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsCartOpen(false);
  };

  return (
    <div className="relative font-sans text-black overflow-x-hidden">
      <Navbar 
        onOpenCart={() => setIsCartOpen(true)} 
        onNavigate={(v) => navigateTo(v)}
        isDarkPage={view === 'innovation'}
      />
      
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HomePage 
              onProductClick={(p) => navigateTo('product', p)} 
              onNavigate={(v) => navigateTo(v)}
            />
            <Footer onNavigate={(v) => navigateTo(v)} />
          </motion.div>
        )}

        {view === 'shop' && (
          <motion.div
            key="shop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ShopPage onProductClick={(p) => navigateTo('product', p)} />
            <Footer onNavigate={(v) => navigateTo(v)} />
          </motion.div>
        )}

        {view === 'collections' && (
          <motion.div
            key="collections"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CollectionsPage />
            <Footer onNavigate={(v) => navigateTo(v)} />
          </motion.div>
        )}

        {view === 'innovation' && (
          <motion.div
            key="innovation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <InnovationPage />
            <Footer onNavigate={(v) => navigateTo(v)} />
          </motion.div>
        )}

        {view === 'story' && (
          <motion.div
            key="story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <StoryPage />
            <Footer onNavigate={(v) => navigateTo(v)} />
          </motion.div>
        )}

        {view === 'product' && currentProduct && (
          <motion.div
            key="product"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          >
            <ProductPage 
              product={currentProduct} 
              onBack={() => setView('shop')} 
              onProductClick={(p) => navigateTo('product', p)}
            />
            <Footer onNavigate={(v) => navigateTo(v)} />
          </motion.div>
        )}

        {view === 'checkout' && (
          <motion.div
            key="checkout"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <CheckoutPage onBack={() => setView('home')} />
            <Footer onNavigate={(v) => navigateTo(v)} />
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onCheckout={() => navigateTo('checkout')}
      />
      
      {/* Floating Checkout Trigger (Mobile) */}
      {!isCartOpen && view !== 'checkout' && (
        <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-6 right-6 z-40 md:hidden"
        >
            <button 
                onClick={() => setIsCartOpen(true)}
                className="bg-black text-white p-6 rounded-full shadow-2xl flex items-center justify-center"
            >
                <div className="relative">
                    <span className="sr-only">Cart</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </div>
            </button>
        </motion.div>
      )}

      {/* Global Cursor (Optional/Luxury) */}
      <div className="hidden lg:block fixed w-8 h-8 pointer-events-none z-[9999] mix-blend-difference">
         <motion.div 
            className="w-full h-full border border-white rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
         />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}
