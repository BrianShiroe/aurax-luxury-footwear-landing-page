import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ProductCard } from '../components/product/ProductCard';
import { FilterGroup } from '../components/shop/FilterGroup';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

export const ShopPage: React.FC<{ onProductClick: (p: Product) => void }> = ({ onProductClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Expanded Filter Configuration
  const filterConfig = [
    { 
      title: "Gender", key: "gender", 
      items: [{label: "Men", value: "men"}, {label: "Women", value: "women"}, {label: "Unisex", value: "unisex"}] 
    },
    { 
      title: "Colour", key: "colour", 
      items: [{label: "Black", value: "black"}, {label: "White", value: "white"}, {label: "Grey", value: "grey"}, {label: "Blue", value: "blue"}] 
    },
    { 
      title: "Price Range", key: "price", 
      items: [{label: "Under 500 AED", value: "low"}, {label: "500 - 1000 AED", value: "mid"}, {label: "Over 1000 AED", value: "high"}] 
    },
    { 
      title: "Shoe Size", key: "size", 
      items: [{label: "40", value: "40"}, {label: "41", value: "41"}, {label: "42", value: "42"}, {label: "43", value: "43"}] 
    },
    { 
      title: "Technology", key: "tech", 
      items: [{label: "Dri-FIT", value: "dri-fit"}, {label: "GORE-TEX", value: "gore-tex"}, {label: "Air Zoom", value: "zoom"}] 
    },
    { 
      title: "Fit", key: "fit", 
      items: [{label: "Loose", value: "loose"}, {label: "Standard", value: "standard"}, {label: "Slim", value: "slim"}] 
    },
    { 
      title: "Surface", key: "surface", 
      items: [{label: "Road", value: "road"}, {label: "Trail", value: "trail"}, {label: "Track", value: "track"}] 
    }
  ];

  const handleFilterSelect = (key: string, value: string) => {
    const params = new URLSearchParams(location.search);
    if (params.get(key) === value) params.delete(key);
    else params.set(key, value);
    navigate(`/shop?${params.toString()}`);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Add your business logic here using searchParams.get('key')
      return true; 
    });
  }, [location.search]);

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-[1700px] mx-auto flex gap-16 items-start">
      
      {/* SIDEBAR: Sticky and Scrollable */}
      <aside className="hidden md:block w-64 flex-shrink-0 sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-hide">
        <div className="mb-8 pb-8 border-b border-neutral-100 flex justify-between items-center">
            <h2 className="text-[10px] font-black tracking-[0.2em] uppercase">Filters</h2>
            <button 
              onClick={() => navigate('/shop')} 
              className="text-[8px] font-bold uppercase underline hover:text-red-500 transition-colors"
            >
              Reset
            </button>
        </div>

        <div className="space-y-1">
          {filterConfig.map(group => (
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

      {/* MAIN GRID */}
      <main className="flex-1">
        <header className="mb-16 border-b border-neutral-100 pb-8">
          <h1 className="text-7xl font-bold tracking-tighter uppercase">CATALOGUE</h1>
          <p className="text-[10px] font-mono mt-4 text-black/40 uppercase">INDEX COUNT: {filteredProducts.length} UNITS</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <ProductCard 
                product={product} 
                onClick={() => onProductClick(product)} 
              />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};