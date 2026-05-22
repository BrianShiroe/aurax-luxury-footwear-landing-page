import React, { useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ProductCard } from '../components/product/ProductCard';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ShopPageProps {
  onProductClick: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onProductClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Extract and Parse Search Parameters from Navbar Redirect Links
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const categoryParam = searchParams.get('category');
  const typeParam = searchParams.get('type');
  const sportParam = searchParams.get('sport');
  const collectionParam = searchParams.get('collection');
  const tagParam = searchParams.get('tag');
  const searchKeyword = searchParams.get('search');

  // 2. Perform Multi-Tiered Dynamic Catalog Optimization Filtering
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Lowercase matching values for bulletproof evaluation comparison
      const prodCat = product.category.toLowerCase();
      const prodName = product.name.toLowerCase();
      const prodDesc = product.description.toLowerCase();

      // Filter Matrix Stage A: Base Category Check
      if (categoryParam && categoryParam !== 'new' && categoryParam !== 'sale') {
        if (prodCat !== categoryParam.toLowerCase()) return false;
      }

      // Filter Matrix Stage B: Deep Technical Spec Filters
      if (typeParam && !prodCat.includes(typeParam.toLowerCase()) && !prodName.includes(typeParam.toLowerCase())) {
        return false;
      }
      if (sportParam && !prodCat.includes(sportParam.toLowerCase()) && !prodDesc.includes(sportParam.toLowerCase())) {
        return false;
      }
      if (collectionParam && !prodDesc.includes(collectionParam.toLowerCase()) && !prodName.includes(collectionParam.toLowerCase())) {
        return false;
      }
      if (tagParam && !prodDesc.includes(tagParam.toLowerCase())) {
        return false;
      }

      // Filter Matrix Stage C: Direct Keyword Index Search Matcher
      if (searchKeyword) {
        const kw = searchKeyword.toLowerCase();
        if (!prodName.includes(kw) && !prodDesc.includes(kw) && !prodCat.includes(kw)) {
          return false;
        }
      }

      return true;
    });
  }, [categoryParam, typeParam, sportParam, collectionParam, tagParam, searchKeyword]);

  // 3. Compute Structural Dynamic Header Content Typography
  const headerTypography = useMemo(() => {
    if (searchKeyword) return { title: 'SEARCH', sub: searchKeyword };
    if (collectionParam) return { title: 'COLLECTION', sub: collectionParam };
    if (sportParam) return { title: 'SPORT', sub: sportParam };
    if (typeParam) return { title: 'SILHOUETTE', sub: typeParam };
    if (categoryParam) return { title: 'SHOP', sub: categoryParam };
    return { title: 'SHOP', sub: 'ALL' };
  }, [categoryParam, typeParam, sportParam, collectionParam, searchKeyword]);

  // 4. Reset scroll index upon query mutations
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.search]);

  const handleProductNavigation = (product: Product) => {
    onProductClick(product);
    navigate(`/product/${product.id}`, { state: { product } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* ================= DYNAMIC BROADCAST HEADER ================= */}
        <header className="mb-16 md:mb-24 border-b border-neutral-100 pb-8">
          <motion.h1 
            key={location.search} // Triggers fresh animation tracking sequence on parameter change
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] md:text-7xl font-bold tracking-tighter uppercase leading-none"
          >
            {headerTypography.title} <span className="italic text-black/10 font-black">{headerTypography.sub}</span>
          </motion.h1>
          
          {/* Active filter status parameters read-out breadcrumb indicator */}
          <div className="flex items-center gap-4 mt-4 text-[8px] font-mono tracking-widest text-black/40 uppercase">
            <span>INDEX COUNT: {filteredProducts.length} UNITS</span>
            {(categoryParam || typeParam || sportParam || collectionParam || searchKeyword) && (
              <>
                <span>•</span>
                <button 
                  onClick={() => navigate('/shop')} 
                  className="text-red-500 font-bold underline underline-offset-2 hover:text-black transition-colors"
                >
                  RESET FILTERS ✕
                </button>
              </>
            )}
          </div>
        </header>

        {/* ================= RENDER GRID GRAPH LAYER ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 md:gap-y-20">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.02, 0.2), duration: 0.4 }}
            >
              <ProductCard 
                product={product} 
                onClick={() => handleProductNavigation(product)} 
              />
            </motion.div>
          ))}
        </div>

        {/* ================= VOID CONFIGURATION STATE ================= */}
        {filteredProducts.length === 0 && (
          <div className="py-40 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-black/30 font-bold">
              No architectural pieces found matching current specifications data.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};