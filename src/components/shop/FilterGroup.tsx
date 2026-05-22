import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FilterGroupProps {
  title: string;
  items: { label: string; value: string }[];
  onSelect: (value: string) => void;
  activeValue: string | null;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({ title, items, onSelect, activeValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-100 py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-3 text-[9px] font-black tracking-[0.2em] uppercase text-black hover:text-red-500 transition-colors cursor-pointer"
      >
        {title}
        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="filter-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <ul className="space-y-3 pb-4">
              {items.map((item) => {
                const isActive = activeValue === item.value;
                return (
                  <li key={item.value}>
                    <button
                      onClick={() => onSelect(item.value)}
                      className="group flex items-center gap-3 w-full text-left cursor-pointer"
                    >
                      <div className={`w-4 h-4 border flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'bg-black border-black' : 'border-neutral-300 group-hover:border-black'
                      }`}>
                        <Check
                          className={`w-3 h-3 text-white transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                          strokeWidth={4}
                        />
                      </div>
                      <span className={`text-[11px] font-bold uppercase transition-colors ${
                        isActive ? 'text-black' : 'text-neutral-500 group-hover:text-black'
                      }`}>
                        {item.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};