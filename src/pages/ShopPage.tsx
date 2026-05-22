import React, { useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ProductCard } from '../components/product/ProductCard';
import { FilterGroup } from '../components/shop/FilterGroup';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

// Price mapping
const PRICE_MAP: Record<string, [number, number]> = {
  low: [0, 500],
  mid: [500, 1000],
  high: [1000, Infinity],
};

// Colour mapping
const COLOUR_MAP: Record<string, string[]> = {
  black: ['black', '#000', '#111'],
  white: ['white', '#FFF', '#fff'],
  grey: ['grey', 'gray', '#CCC'],
  blue: ['blue', '#3B8'],
};

export const ShopPage: React.FC<{ onProductClick: (p: Product) => void }> = ({ onProductClick }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterConfig = [
    {
      title: 'Colour', key: 'colour',
      items: [
        { label: 'Black', value: 'black' }, 
        { label: 'White', value: 'white' }, 
        { label: 'Grey', value: 'grey' }, 
        { label: 'Blue', value: 'blue' }
      ],
    },
    {
      title: 'Price Range', key: 'price',
      items: [
        { label: 'Under 500 AED', value: 'low' }, 
        { label: '500 – 1000 AED', value: 'mid' }, 
        { label: 'Over 1000 AED', value: 'high' }
      ],
    },
    {
      title: 'Size', key: 'size',
      items: [
        { label: '6', value: '6' }, { label: '7', value: '7' }, 
        { label: '8', value: '8' }, { label: '9', value: '9' }, 
        { label: '10', value: '10' }, { label: '11', value: '11' }, { label: '12', value: '12' }
      ],
    },
  ];

  const handleFilterSelect = (key: string, value: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (newParams.get(key) === value) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
      return newParams;
    });
  };

  const filteredProducts = useMemo(() => {
    const category = searchParams.get('category')?.toLowerCase();
    const type = searchParams.get('type')?.toLowerCase();
    const search = searchParams.get('search')?.toLowerCase();
    const price = searchParams.get('price');
    const colour = searchParams.get('colour')?.toLowerCase();
    const size = searchParams.get('size');

    return PRODUCTS.filter((product) => {
      if (category === 'new' && !product.isNew) return false;
      if (category === 'sale' && !product.onSale) return false;
      if (category && !['new', 'sale'].includes(category) && product.category.toLowerCase() !== category) return false;
      if (type && product.subType?.toLowerCase() !== type) return false;
      if (search) {
        const haystack = `${product.name} ${product.description}`.toLowerCase();
        if (!haystack.includes(search)) return false;
      }
      if (price && PRICE_MAP[price]) {
        const [min, max] = PRICE_MAP[price];
        if (product.price < min || product.price > max) return false;
      }
      if (colour && COLOUR_MAP[colour]) {
        const targets = COLOUR_MAP[colour];
        if (!product.colors.some((c) => targets.includes(c.toLowerCase()))) return false;
      }
      if (size && !product.sizes.includes(size)) return false;

      return true;
    });
  }, [searchParams]);

  const activeLabel = useMemo(() => {
    const cat = searchParams.get('category');
    return cat ? cat.toUpperCase() : 'CATALOGUE';
  }, [searchParams]);

  const handleProductClick = (product: Product) => {
    onProductClick(product);
    navigate(`/product/${product.id}`, { state: { product } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-[1700px] mx-auto flex gap-16 items-start">
      <aside className="hidden md:block w-64 flex-shrink-0 sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-hide">
        <div className="mb-8 pb-8 border-b border-neutral-100 flex justify-between items-center">
          <h2 className="text-[10px] font-black tracking-[0.2em] uppercase">Filters</h2>
          <button onClick={() => setSearchParams({})} className="text-[8px] font-bold uppercase underline">Reset</button>
        </div>
        <div className="space-y-1">
          {filterConfig.map((group) => (
            <FilterGroup
              key={group.key}
              title={group.title}
              items={group.items}
              activeValue={searchParams.get(group.key)}
              onSelect={(val) => handleFilterSelect(group.key, val)}
            />
          ))}
        </div>
      </aside>

      <main className="flex-1">
        <header className="mb-16 border-b border-neutral-100 pb-8">
          <h1 className="text-7xl font-bold tracking-tighter uppercase">{activeLabel}</h1>
          <p className="text-[10px] font-mono mt-4 text-black/40 uppercase">
            INDEX COUNT: {filteredProducts.length} UNITS
          </p>
        </header>

        <AnimatePresence mode="wait">
          <motion.div 
            key={searchParams.toString()}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
            ))}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};