import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

interface NavbarProps {
  onOpenCart: () => void;
  onNavigate: (view: 'home' | 'shop' | 'collections' | 'innovation' | 'story') => void;
  isDarkPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onNavigate, isDarkPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop All', view: 'shop' as const },
    { name: 'Collections', view: 'collections' as const },
    { name: 'Innovation', view: 'innovation' as const },
    { name: 'Story', view: 'story' as const },
  ];

  const themeColors = isScrolled 
    ? 'text-brand-black' 
    : (isDarkPage ? 'text-white' : 'text-brand-black');

  const secondaryColors = isScrolled 
    ? 'text-brand-black/60' 
    : (isDarkPage ? 'text-white/60' : 'text-brand-black/60');

  const borderColors = isScrolled 
    ? 'border-brand-black' 
    : (isDarkPage ? 'border-white' : 'border-brand-black');

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full h-20 z-50 transition-all duration-500 px-6 md:px-12 flex items-center justify-between',
          isScrolled 
            ? 'bg-white/70 backdrop-blur-md border-b border-brand-gray-border' 
            : 'bg-transparent'
        )}
      >
        <button 
          onClick={() => onNavigate('home')}
          className={cn(
            "text-2xl font-bold tracking-tighter italic cursor-pointer transition-colors duration-500",
            themeColors
          )}
        >
          AURAX
        </button>
        
        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.2em] font-medium">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => onNavigate(link.view)}
              className={cn(
                "transition-all duration-500 cursor-pointer hover:text-current",
                secondaryColors
              )}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">
          <button 
            onClick={onOpenCart}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className={cn(
              "w-5 h-5 border rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-brand-black group-hover:text-white group-hover:border-brand-black",
              borderColors,
              themeColors
            )}>
              <span className="text-[8px] font-bold">{totalItems}</span>
            </div>
            <span className={cn(
              "text-[11px] uppercase tracking-widest font-semibold hidden sm:inline transition-colors duration-500",
              themeColors
            )}>
              Bag
            </span>
          </button>
          
          <button 
            className={cn("md:hidden p-2 transition-colors duration-500", themeColors)}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <span 
                className="text-2xl font-bold tracking-[0.1em] italic"
                onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }}
              >
                AURAX
              </span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className="text-4xl font-light tracking-tight hover:italic text-left transition-all"
                  onClick={() => { onNavigate(link.view); setIsMobileMenuOpen(false); }}
                >
                  {link.name}
                </button>
              ))}
            </div>
            <div className="absolute bottom-12 left-6 right-6 pt-8 border-t border-gray-100 flex justify-between uppercase text-[10px] tracking-[0.2em] font-medium text-black/40">
              <button onClick={() => setIsMobileMenuOpen(false)}>Account</button>
              <button onClick={() => setIsMobileMenuOpen(false)}>Support</button>
              <button onClick={() => setIsMobileMenuOpen(false)}>Legal</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
