import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
  const [searchFocused, setSearchFocused] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const staticLinks = [
    { name: 'Innovation', path: '/innovation' },
    { name: 'Story', path: '/story' },
  ];

  const utilityLinks = [
    { name: 'Help', path: '/help' },
    { name: 'Join Us', path: '/join' },
    { name: 'Sign In', path: '/signin' },
  ];

  const shopCategories = [
    { name: 'New', path: '/shop?category=new' },
    { name: 'Men', path: '/shop?category=men' },
    { name: 'Women', path: '/shop?category=women' },
    { name: 'Kids', path: '/shop?category=kids' },
    { name: 'Sport', path: '/shop?category=sport' },
    { name: 'Sportswear', path: '/shop?category=sportswear' },
    { name: 'Teams', path: '/shop?category=national-teams' },
    { name: 'Sale', path: '/shop?category=sale', isSale: true },
  ];

  // Global Theme States (Tailwind v4 Compliant)
  const mainThemeText = isScrolled 
    ? 'text-black' 
    : (isDarkPage ? 'text-white' : 'text-black');

  const topThemeText = isScrolled 
    ? 'text-black/50 hover:text-black' 
    : (isDarkPage ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black');

  const categoryThemeText = isScrolled 
    ? 'text-black/70 hover:text-black' 
    : (isDarkPage ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black');

  const borderTheme = isScrolled 
    ? 'border-black/5' 
    : (isDarkPage ? 'border-white/10' : 'border-black/5');

  const iconCircleBorder = isScrolled 
    ? 'border-black' 
    : (isDarkPage ? 'border-white' : 'border-black');

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 flex flex-col',
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-black/5 shadow-xs' 
            : 'bg-transparent'
        )}
      >
        {/* ================= LAYER 1: TOP UTILITY HEADER (With Centered Tablet Search) ================= */}
        <div 
          className={cn(
            "w-full h-8 px-4 sm:px-6 xl:px-12 flex items-center justify-between border-b text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold transition-colors duration-500 select-none relative",
            borderTheme
          )}
        >
          {/* Static Pages */}
          <div className="flex items-center gap-4 sm:gap-6 z-10">
            {staticLinks.map((link) => (
              <Link key={link.name} to={link.path} className={cn("transition-colors duration-300", topThemeText)}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Absolute Centered Search Bar for Tablet Viewports only */}
          <div className="hidden md:flex lg:hidden absolute left-1/2 -translate-x-1/2 items-center w-full max-w-xs px-4 z-0">
            <div className="relative w-full">
              <input 
                type="text"
                placeholder="SEARCH CATALOGUE..."
                className={cn(
                  "w-full bg-black/[0.04] text-[8px] font-bold tracking-widest uppercase rounded-full py-1 pl-8 pr-3 outline-none transition-all placeholder-black/30 focus:bg-black/[0.07]",
                  isDarkPage && !isScrolled && "bg-white/10 text-white placeholder-white/30 border border-white/5 focus:bg-white/15"
                )}
              />
              <Search className={cn("w-3 h-3 absolute left-3 top-1/2 -translate-y-1/2 opacity-40", mainThemeText)} />
            </div>
          </div>

          {/* User Utilities */}
          <div className="flex items-center gap-3 sm:gap-5 z-10">
            {utilityLinks.map((link) => (
              <Link key={link.name} to={link.path} className={cn("transition-colors duration-300", topThemeText)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* ================= LAYER 2: INTERACTIVE COMMERCE HEADER ================= */}
        <div className="w-full h-16 xl:h-20 px-4 sm:px-6 xl:px-12 flex items-center justify-between relative">
          
          {/* Left Block: Logo */}
          <Link 
            to="/"
            className={cn(
              "text-lg sm:text-xl xl:text-2xl font-black tracking-tighter italic transition-colors duration-500 shrink-0 z-10",
              mainThemeText
            )}
          >
            AURAX
          </Link>
          
          {/* Center Block: Main Categories (Visible on Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-5 xl:gap-8 text-[10px] xl:text-[11px] uppercase tracking-[0.15em] xl:tracking-[0.2em] font-black absolute left-1/2 -translate-x-1/2 whitespace-nowrap z-0">
            {shopCategories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.path}
                className={cn(
                  "transition-colors duration-300 py-0.5",
                  categoryThemeText,
                  cat.isSale && "text-red-500 hover:text-red-600 font-extrabold"
                )}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Right Block: Interface Controls */}
          <div className="flex items-center gap-1 sm:gap-2 xl:gap-4 shrink-0 z-10">
            
            {/* Desktop Only Inline Search Workspace (Hidden below 1024px / lg breakpoint) */}
            <div className="hidden lg:flex items-center relative group">
              <input 
                type="text"
                placeholder="SEARCH SPECIFICATIONS..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={cn(
                  "bg-black/[0.03] text-[9px] font-bold tracking-widest uppercase rounded-full py-2.5 pl-10 pr-4 outline-none transition-all duration-500 placeholder-black/30 w-36",
                  searchFocused ? "w-52 bg-black/[0.05] ring-1 ring-black/10" : "group-hover:bg-black/[0.05]",
                  isDarkPage && !isScrolled && "bg-white/10 text-white placeholder-white/40 border border-white/5 focus:bg-white/15"
                )}
              />
              <Search className={cn("w-3.5 h-3.5 absolute left-4 pointer-events-none opacity-40", mainThemeText)} />
            </div>

            {/* Wishlist Core Trigger */}
            <button 
              className={cn("p-2 transition-all hover:scale-110 active:scale-95 cursor-pointer", mainThemeText)}
              aria-label="View Wishlist"
            >
              <Heart className="w-4 h-4 xl:w-4.5 xl:h-4.5 stroke-[2.5]" />
            </button>

            {/* Bag Icon interface */}
            <button 
              onClick={onOpenCart}
              className="flex items-center gap-1.5 group cursor-pointer p-2 relative"
              aria-label="Open Shopping Bag"
            >
              <div className={cn(
                "w-4.5 h-4.5 sm:w-5 sm:h-5 border rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:border-black",
                iconCircleBorder,
                mainThemeText
              )}>
                <span className="text-[8px] font-black">{totalItems}</span>
              </div>
              <span className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-black hidden xl:inline transition-colors duration-500",
                mainThemeText
              )}>
                Bag
              </span>
            </button>
            
            {/* Mobile Native Menu Trigger (Strictly handles phone screen resolutions under md breakpoint) */}
            <button 
              className={cn("p-2 transition-colors duration-500 cursor-pointer md:hidden", mainThemeText)}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Mobile Menu Overlay"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ================= LAYER 3: FULLSCREEN MOBILE OVERLAY MENU DRAWER (Mobile Only) ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.215, 0.610, 0.355, 1.000] }}
            className="fixed inset-0 z-[60] bg-white p-4 sm:p-6 flex flex-col text-black h-screen w-full select-none overflow-hidden"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex justify-between items-center h-16 mb-2 flex-shrink-0">
              <Link to="/" className="text-xl font-black tracking-tighter italic" onClick={() => setIsMobileMenuOpen(false)}>
                AURAX
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 cursor-pointer touch-manipulation">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Native Navigation Input Search Filter */}
            <div className="relative mb-5 flex-shrink-0">
              <input 
                type="text" 
                placeholder="SEARCH CATALOG..."
                className="w-full bg-gray-50 text-[11px] font-bold tracking-widest uppercase p-4 pl-12 rounded-none outline-none border-none focus:bg-gray-100 transition-colors"
              />
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-black/40" />
            </div>

            {/* Scrollable Content (Categories inside burger menu for mobile viewports) */}
            <div className="flex-1 overflow-y-auto no-scrollbar space-y-6 pb-6">
              <div className="space-y-2.5">
                <span className="text-[9px] uppercase tracking-[0.3em] text-black/30 font-black block pl-1">Shop Categories</span>
                <div className="grid grid-cols-2 gap-2">
                  {shopCategories.map((cat, idx) => (
                    <motion.div
                      key={cat.name}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.02 }}
                    >
                      <Link
                        to={cat.path}
                        className={cn(
                          "text-xs uppercase font-black tracking-wider transition-all block p-3.5 bg-gray-50/70 hover:bg-gray-100 active:bg-gray-200",
                          cat.isSale ? "text-red-500 border border-red-500/10 bg-red-50/20" : "text-black/80"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {cat.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Utility and Corporate Links */}
              <div className="pt-5 border-t border-black/5 space-y-3">
                <span className="text-[9px] uppercase tracking-[0.3em] text-black/30 font-black block pl-1">Company & Studio</span>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {[...staticLinks, ...utilityLinks].map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-xs font-bold tracking-wider uppercase text-black/70 hover:text-black active:opacity-50 transition-colors block py-2 px-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Baseline Footer */}
            <div className="pt-4 border-t border-black/5 flex-shrink-0 mt-auto">
              <div className="flex justify-between items-center uppercase text-[8px] tracking-[0.2em] font-black text-black/40">
                <span>LABORATORY MATRIX V1.0</span>
                <span className="font-mono text-black/20">DUBAI, UAE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};