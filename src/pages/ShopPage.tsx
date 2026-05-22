import React, { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ProductCard } from "../components/product/ProductCard";
import { FilterGroup } from "../components/shop/FilterGroup";
import { PRODUCTS } from "../constants";
import { Product } from "../types";

const PRICE_MAP: Record<string, [number, number]> = {
  low: [0, 500],
  mid: [500, 1000],
  high: [1000, Infinity],
};

// Map hex codes to human-readable names for the sidebar UI
const COLOR_NAME_MAP: Record<string, string> = {
  "#FFFFFF": "White",
  "#F5F5F7": "Off-White",
  "#111111": "Black",
  "#000000": "Black",
  "#C0C0C0": "Silver",
  "#E0E0E0": "Light Grey",
  "#D4D4D8": "Grey",
  "#3B82F6": "Blue",
  "#71717A": "Dark Grey",
  "#45332E": "Brown",
};

export const ShopPage: React.FC<{ onProductClick: (p: Product) => void }> = ({ onProductClick }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. DYNAMIC FILTERS: Extract unique values from PRODUCTS
  const filterConfig = useMemo(() => {
    const colorSet = new Set<string>();
    const sizeSet = new Set<string>();

    PRODUCTS.forEach((p) => {
      p.colors.forEach((c) => colorSet.add(c.toUpperCase()));
      p.sizes.forEach((s) => sizeSet.add(s));
    });

    return [
      {
        title: "Colour",
        key: "colour",
        items: Array.from(colorSet).map((hex) => ({
          label: COLOR_NAME_MAP[hex] || hex.replace("#", ""),
          value: hex.toLowerCase(),
        })),
      },
      {
        title: "Size",
        key: "size",
        items: Array.from(sizeSet).sort((a, b) => Number(a) - Number(b)).map((s) => ({ label: s, value: s })),
      },
      {
        title: "Price Range",
        key: "price",
        items: [
          { label: "Under 500 AED", value: "low" },
          { label: "500 – 1000 AED", value: "mid" },
          { label: "Over 1000 AED", value: "high" },
        ],
      },
    ];
  }, []);

  const handleFilterSelect = (key: string, value: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (newParams.get(key) === value) newParams.delete(key);
      else newParams.set(key, value);
      return newParams;
    });
  };

  const filteredProducts = useMemo(() => {
    const category = searchParams.get("category")?.toLowerCase();
    const type = searchParams.get("type")?.toLowerCase();
    const search = searchParams.get("search")?.toLowerCase();
    const price = searchParams.get("price");
    const colour = searchParams.get("colour")?.toLowerCase();
    const size = searchParams.get("size");

    return PRODUCTS.filter((product) => {
      // Header Filters
      if (category === "new" && !product.isNew) return false;
      if (category === "sale" && !product.onSale) return false;
      if (category && !["new", "sale"].includes(category) && product.category.toLowerCase() !== category) return false;
      if (type && product.subType?.toLowerCase() !== type) return false;
      if (search && !`${product.name} ${product.description}`.toLowerCase().includes(search)) return false;
      
      // Sidebar Filters
      if (price && PRICE_MAP[price]) {
        const [min, max] = PRICE_MAP[price];
        if (product.price < min || product.price > max) return false;
      }
      
      // Exact match for dynamic hex codes (using toLowerCase for comparison)
      if (colour && !product.colors.some((c) => c.toLowerCase() === colour)) return false;
      
      if (size && !product.sizes.includes(size)) return false;

      return true;
    });
  }, [searchParams]);

  const activeLabel = useMemo(() => {
    const cat = searchParams.get("category") || searchParams.get("type");
    return cat ? cat.toUpperCase() : "CATALOGUE";
  }, [searchParams]);

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
          <p className="text-[10px] font-mono mt-4 text-black/40 uppercase">INDEX COUNT: {filteredProducts.length} UNITS</p>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={searchParams.toString()}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onClick={() => {
                onProductClick(product);
                navigate(`/product/${product.id}`, { state: { product } });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }} />
            ))}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};