import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

interface NavbarProps {
  onOpenCart: () => void;
  isDarkPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, isDarkPage }) => {
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
    { name: 'Shop All', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'Innovation', path: '/innovation' },
    { name: 'Story', path: '/story' },
  ];

  // Refined Color Logic
  const themeColors = isScrolled 
    ? 'text-black' 
    : (isDarkPage ? 'text-white' : 'text-black');

  const secondaryColors = isScrolled 
    ? 'text-black/60' 
    : (isDarkPage ? 'text-white/60' : 'text-black/60');

  const borderColors = isScrolled 
    ? 'border-black' 
    : (isDarkPage ? 'border-white' : 'border-black');

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full h-16 md:h-20 z-50 transition-all duration-500 px-6 md:px-12 flex items-center justify-between',
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg border-b border-black/5' 
            : 'bg-transparent'
        )}
      >
        <Link 
          to="/"
          className={cn(
            "text-xl md:text-2xl font-bold tracking-tighter italic cursor-pointer transition-colors duration-500",
            themeColors
          )}
        >
          AURAX
        </Link>
        
        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.2em] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "transition-all duration-500 cursor-pointer hover:opacity-50",
                secondaryColors
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={onOpenCart}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className={cn(
              "w-5 h-5 border rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:border-black",
              borderColors,
              themeColors
            )}>
              <span className="text-[8px] font-bold">{totalItems}</span>
            </div>
            <span className={cn(
              "text-[10px] md:text-[11px] uppercase tracking-widest font-semibold hidden sm:inline transition-colors duration-500",
              themeColors
            )}>
              Bag
            </span>
          </button>
          
          <button 
            className={cn("p-2 transition-colors duration-500", themeColors)}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white p-6 flex flex-col"
          >
            <div className="flex justify-between items-center h-16 mb-12">
              <Link 
                to="/"
                className="text-xl font-bold tracking-tighter italic"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AURAX
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-4xl font-bold tracking-tighter uppercase hover:italic"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-10 flex flex-col gap-8">
              <div className="h-[1px] bg-black/5 w-full" />
              <div className="flex justify-between uppercase text-[9px] tracking-[0.2em] font-bold text-black/40">
                <button onClick={() => setIsMobileMenuOpen(false)}>Account</button>
                <button onClick={() => setIsMobileMenuOpen(false)}>Support</button>
                <button onClick={() => setIsMobileMenuOpen(false)}>Dubai, UAE</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};