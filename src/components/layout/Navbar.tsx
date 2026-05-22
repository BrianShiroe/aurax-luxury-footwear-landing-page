import React, { useState, useEffect } from 'react';
import { Search, Menu, Heart, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import { MobileMenuDrawer } from './MobileMenuDrawer';
import { shopCategories, staticLinks, utilityLinks } from './menuData';

interface NavbarProps {
  onOpenCart: () => void;
  isDarkPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCart, isDarkPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
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
    setActiveDropdown(null);
  }, [location]);

  // Dynamic Theme State Configurations
  const mainThemeText = isScrolled || activeDropdown 
    ? 'text-black' 
    : (isDarkPage ? 'text-white' : 'text-black');

  const topThemeText = isScrolled || activeDropdown 
    ? 'text-black/50 hover:text-black' 
    : (isDarkPage ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black');

  const categoryThemeText = isScrolled || activeDropdown 
    ? 'text-black/60 hover:text-black' 
    : (isDarkPage ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black');

  const borderTheme = isScrolled || activeDropdown 
    ? 'border-black/5' 
    : (isDarkPage ? 'border-white/10' : 'border-black/5');

  const iconCircleBorder = isScrolled || activeDropdown 
    ? 'border-black' 
    : (isDarkPage ? 'border-white' : 'border-black');

  return (
    <>
      <header
        onMouseLeave={() => setActiveDropdown(null)}
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 flex flex-col',
          isScrolled || activeDropdown
            ? 'bg-white/95 backdrop-blur-md border-b border-black/5 shadow-xs' 
            : 'bg-transparent'
        )}
      >
        {/* ================= LAYER 1: TOP UTILITY HEADER ================= */}
        <div className={cn("w-full h-8 px-4 sm:px-6 xl:px-12 flex items-center justify-between border-b text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold transition-colors duration-500 select-none relative", borderTheme)}>
          
          {/* Static Links + SHOP Button placement */}
          <div className="flex items-center gap-4 sm:gap-6 z-10">
            {staticLinks.map((link) => (
              <Link key={link.name} to={link.path} className={cn("transition-colors duration-300", topThemeText)}>
                {link.name}
              </Link>
            ))}
            
            {/* Dedicated SHOP Button added right after the story link */}
            <Link 
              to="/shop" 
              className="text-red-500 hover:text-red-600 font-black tracking-[0.2em] transition-colors duration-300"
            >
              SHOP
            </Link>
          </div>

          {/* Centered Search for Tablet Viewports */}
          <div className="hidden md:flex lg:hidden absolute left-1/2 -translate-x-1/2 items-center w-full max-w-xs px-4 z-0">
            <div className="relative w-full">
              <input 
                type="text"
                placeholder="SEARCH CATALOGUE..."
                className={cn(
                  "w-full bg-black/[0.04] text-[8px] font-bold tracking-widest uppercase rounded-full py-1 pl-8 pr-3 outline-none transition-all placeholder-black/30 focus:bg-black/[0.07]",
                  isDarkPage && !isScrolled && !activeDropdown && "bg-white/10 text-white placeholder-white/30 border border-white/5 focus:bg-white/15"
                )}
              />
              <Search className={cn("w-3 h-3 absolute left-3 top-1/2 -translate-y-1/2 opacity-40", mainThemeText)} />
            </div>
          </div>

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
          
          <Link to="/" className={cn("text-lg sm:text-xl xl:text-2xl font-black tracking-tighter italic transition-colors duration-500 shrink-0 z-10", mainThemeText)}>
            AURAX
          </Link>
          
          {/* Main Desktop Category Navigation links */}
          <div className="hidden md:flex items-center gap-4 xl:gap-6 text-[10px] xl:text-[11px] uppercase tracking-[0.15em] xl:tracking-[0.2em] font-black absolute left-1/2 -translate-x-1/2 whitespace-nowrap z-0">
            {shopCategories.map((cat) => (
              <div
                key={cat.name}
                className="relative py-5"
                onMouseEnter={() => {
                  if (cat.hasDropdown) setActiveDropdown(cat.name);
                  else setActiveDropdown(null);
                }}
              >
                <Link
                  to={cat.path}
                  className={cn(
                    "transition-colors duration-300 py-1 inline-flex items-center gap-1.5",
                    categoryThemeText,
                    activeDropdown === cat.name && "text-black",
                    cat.isSale && "text-red-500 hover:text-red-600 font-extrabold"
                  )}
                >
                  <span>{cat.name}</span>
                  {cat.hasDropdown && (
                    <ChevronDown className={cn("w-2.5 h-2.5 transition-transform duration-300 stroke-[3.5]", activeDropdown === cat.name && "rotate-180")} />
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Right Block: Interface Controls */}
          <div className="flex items-center gap-1 sm:gap-2 xl:gap-4 shrink-0 z-10">
            
            {/* Desktop Only Inline Search Workspace */}
            <div className="hidden lg:flex items-center relative group">
              <input 
                type="text"
                placeholder="SEARCH SPECIFICATIONS..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={cn(
                  "bg-black/[0.03] text-[9px] font-bold tracking-widest uppercase rounded-full py-2.5 pl-10 pr-4 outline-none transition-all duration-500 placeholder-black/30 w-36",
                  searchFocused ? "w-52 bg-black/[0.05] ring-1 ring-black/10" : "group-hover:bg-black/[0.05]",
                  isDarkPage && !isScrolled && !activeDropdown && "bg-white/10 text-white placeholder-white/40 border border-white/5 focus:bg-white/15"
                )}
              />
              <Search className={cn("w-3.5 h-3.5 absolute left-4 pointer-events-none opacity-40", mainThemeText)} />
            </div>

            {/* Wishlist Core Trigger */}
            <button className={cn("p-2 transition-all hover:scale-110 active:scale-95 cursor-pointer", mainThemeText)} aria-label="View Wishlist">
              <Heart className="w-4 h-4 xl:w-4.5 xl:h-4.5 stroke-[2.5]" />
            </button>

            {/* Bag Icon Interface */}
            <button onClick={onOpenCart} className="flex items-center gap-1.5 group cursor-pointer p-2 relative" aria-label="Open Shopping Bag">
              <div className={cn("w-4.5 h-4.5 sm:w-5 sm:h-5 border rounded-full flex items-center justify-center transition-all duration-500 group-hover:bg-black group-hover:text-white group-hover:border-black", iconCircleBorder, mainThemeText)}>
                <span className="text-[8px] font-black">{totalItems}</span>
              </div>
              <span className={cn("text-[10px] uppercase tracking-[0.2em] font-black hidden xl:inline transition-colors duration-500", mainThemeText)}>
                Bag
              </span>
            </button>
            
            {/* Mobile Native Menu Trigger */}
            <button className={cn("p-2 transition-colors duration-500 cursor-pointer md:hidden", mainThemeText)} onClick={() => setIsMobileMenuOpen(true)} aria-label="Open Mobile Menu Overlay">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= LAYER 2.5: DESKTOP MEGA DROPDOWN PANELS ================= */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-white border-b border-black/5 hidden md:block overflow-hidden"
            >
              <div className="w-full max-w-7xl mx-auto px-6 xl:px-12 pt-6 pb-12 grid grid-cols-4 gap-8 select-none">
                {shopCategories
                  .find((cat) => cat.name === activeDropdown)
                  ?.groups?.map((group) => (
                    <div key={group.title} className="flex flex-col space-y-4">
                      <span className="text-[10px] font-black tracking-widest text-neutral-900 uppercase block border-b border-neutral-100 pb-1">
                        {group.title}
                      </span>
                      
                      <ul className="flex flex-col space-y-2">
                        {group.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.path}
                              className={cn(
                                "text-[11px] uppercase font-bold tracking-wider transition-colors block py-0.5",
                                item.isFeatured 
                                  ? "text-black font-black border-b border-black/10 inline-block mb-1 pb-0.5" 
                                  : "text-black/60 hover:text-black"
                              )}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                {/* Editorial Information Segment Block */}
                <div className="col-span-1 bg-neutral-50 p-6 flex flex-col justify-between border border-black/[0.03]">
                  <div className="space-y-1">
                    <span className="text-[8px] font-mono tracking-widest text-black/30 uppercase block">SYSTEM BROADCAST</span>
                    <h4 className="text-[11px] font-black tracking-wider uppercase text-black">SWISS LABORATORY INSPECTION</h4>
                    <p className="text-[9px] text-black/50 leading-relaxed uppercase tracking-wide pt-1">
                      Every single output matrix component passes manual aerospace tolerance scrutiny configurations prior to distribution allocation.
                    </p>
                  </div>
                  <Link 
                    to="/innovation" 
                    className="text-[9px] font-black tracking-widest uppercase text-black underline underline-offset-4 pt-4 block hover:opacity-60 transition-opacity"
                  >
                    EXPLORE METRICS →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop Fog Curtain Filter Layer */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/10 backdrop-blur-xs z-40 pointer-events-none hidden md:block"
          />
        )}
      </AnimatePresence>

      {/* ================= LAYER 3: FULLSCREEN MOBILE OVERLAY MENU DRAWER ================= */}
      <AnimatePresence>
        <MobileMenuDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </AnimatePresence>
    </>
  );
};