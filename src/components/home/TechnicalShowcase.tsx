import React from 'react';

// CRITICAL: The "export" keyword must be here for the build to find it
export const TechnicalShowcase: React.FC = () => {
  return (
    <section className="py-20 md:py-40 px-6 md:px-12 bg-black text-white">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
        
        {/* TEXT CARD */}
        <div className="flex flex-col justify-center bg-[#0A0A0A] p-8 md:p-20 rounded-3xl border border-white/10">
          <div className="space-y-4 md:space-y-6">
            <span className="text-white/40 text-[10px] uppercase tracking-[0.6em] font-bold">Engineering Specs</span>
            <h3 className="text-2xl md:text-5xl font-bold tracking-tighter leading-[1.2] md:leading-[1.1]">
              BUILT FOR <br className="hidden md:block" /> PERFORMANCE
            </h3>
            <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-xl">
              Every AURAX silhouette is developed over 18 months, undergoing rigorous stress testing.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8 pt-8 md:pt-12">
            <div className="border-l border-white/20 pl-4 md:pl-6">
              <span className="text-xl md:text-3xl font-mono block mb-1 md:mb-2">-15%</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/40">Weight reduction</span>
            </div>
            <div className="border-l border-white/20 pl-4 md:pl-6">
              <span className="text-xl md:text-3xl font-mono block mb-1 md:mb-2">+42%</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/40">Energy return</span>
            </div>
          </div>
        </div>

        {/* IMAGE CARD */}
        <div className="relative group cursor-crosshair bg-[#0A0A0A] rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center p-8 md:p-20 min-h-[350px] md:min-h-[600px]">
          <div className="absolute inset-0 border border-white/[0.03] rounded-full scale-110 animate-[spin_40s_linear_infinite]" />
          
          <div className="relative z-10 w-full aspect-square overflow-hidden rounded-xl">
            {/* Primary Image */}
            <img 
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000" 
              alt="Technical Detail" 
              className="w-full h-full object-cover grayscale invert scale-90 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-110"
            />
            {/* Hover Image */}
            <img 
              src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000" 
              alt="Technical" 
              className="absolute inset-0 w-full h-full object-cover grayscale invert scale-110 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};