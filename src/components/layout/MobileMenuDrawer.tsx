import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { shopCategories, staticLinks, utilityLinks } from './menuData';

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({ isOpen, onClose }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const toggleAccordion = (name: string) => {
    setExpandedCategory(expandedCategory === name ? null : name);
  };

  // Mobile handler to route into the search parameter landscape
  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      (e.target as HTMLInputElement).blur();
      onClose(); // Auto-closes the drawer layout upon navigation search submission
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.215, 0.610, 0.355, 1.000] }}
      className="fixed inset-0 z-[60] bg-white p-4 sm:p-6 flex flex-col text-black h-screen w-full select-none overflow-hidden"
    >
      {/* Top Bar inside Overlay */}
      <div className="flex justify-between items-center h-16 mb-2 flex-shrink-0">
        <Link to="/" className="text-xl font-black tracking-tighter italic" onClick={onClose}>
          AURAX
        </Link>
        <button onClick={onClose} className="p-2 cursor-pointer touch-manipulation">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Input Search Filter */}
      <div className="relative mb-5 flex-shrink-0">
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearchSubmit}
          placeholder="SEARCH CATALOG..."
          className="w-full bg-gray-50 text-[11px] font-bold tracking-widest uppercase p-4 pl-12 rounded-none outline-none border-none focus:bg-gray-100 transition-colors"
        />
        <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-black/40" />
      </div>

      {/* Scrollable Navigation Tree */}
      <div className="flex-1 overflow-y-auto no-scrollbar space-y-6 pb-6">
        <div className="space-y-1.5">
          <span className="text-[9px] uppercase tracking-[0.3em] text-black/30 font-black block pl-1 mb-2">Shop Categories</span>
          
          <div className="flex flex-col gap-1">
            {shopCategories.map((cat, idx) => {
              const isExpanded = expandedCategory === cat.name;

              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.02 }}
                  className="w-full border-b border-black/[0.03]"
                >
                  {cat.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleAccordion(cat.name)}
                        className={cn(
                          "w-full text-xs uppercase font-black tracking-wider flex items-center justify-between p-4 bg-gray-50/50 text-left",
                          cat.isSale ? "text-red-500" : "text-black/80"
                        )}
                      >
                        <span>{cat.name}</span>
                        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300 stroke-[3]", isExpanded && "rotate-180")} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden bg-gray-50/20 px-4"
                          >
                            {cat.groups?.map((group) => (
                              <div key={group.title} className="py-3">
                                <span className="text-[9px] font-black tracking-widest text-neutral-900 uppercase block mb-2 pb-0.5 border-b border-black/5">
                                  {group.title}
                                </span>
                                <div className="flex flex-col gap-2 pl-1">
                                  {group.items.map((item) => (
                                    <Link
                                      key={item.name}
                                      to={item.path}
                                      onClick={onClose}
                                      className="text-[11px] uppercase font-bold tracking-wide py-1 block text-black/60 hover:text-black"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={cat.path}
                      className={cn(
                        "text-xs uppercase font-black tracking-wider block p-4 bg-gray-50/50",
                        cat.isSale ? "text-red-500 bg-red-50/10" : "text-black/80"
                      )}
                      onClick={onClose}
                    >
                      {cat.name}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Company & Studio Links */}
        <div className="pt-5 border-t border-black/5 space-y-3">
          <span className="text-[9px] uppercase tracking-[0.3em] text-black/30 font-black block pl-1">Company & Studio</span>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            {[...staticLinks, ...utilityLinks].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs font-bold tracking-wider uppercase text-black/70 hover:text-black active:opacity-50 transition-colors block py-2 px-1"
                onClick={onClose}
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
  );
};