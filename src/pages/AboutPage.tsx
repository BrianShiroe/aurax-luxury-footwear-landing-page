import React from "react";
import { motion } from "motion/react";

export const AboutPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="max-w-[1200px] mx-auto pt-32 pb-20 px-6"
    >
      {/* Hero Section */}
      <header className="mb-32">
        <h1 className="text-[12vw] md:text-[8rem] font-bold tracking-tighter uppercase leading-[0.9] mb-12">
          AURAX <br/> ARCHITECTS
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <p className="text-xl md:text-3xl font-light tracking-tight text-neutral-500">
            Engineered for the intersection of structural precision and human movement.
          </p>
          <div className="h-64 overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop" 
              alt="Industrial design" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </header>

      <section className="space-y-32">
        {/* Philosophy with Image */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="h-[500px] overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1490644658840-3f2e3f8c8625?q=80&w=1000&auto=format&fit=crop" 
              alt="Architecture" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div>
            <h2 className="text-xs font-black tracking-[0.3em] uppercase mb-8 text-neutral-400">Our Philosophy</h2>
            <h3 className="text-4xl font-bold tracking-tight mb-6">Functional Architecture.</h3>
            <p className="text-neutral-600 leading-relaxed mb-6">
              At AURAX, we treat every silhouette as a study in equilibrium. We believe that footwear is the most intimate form of architecture—a structure that must support, protect, and enhance the body in motion. 
            </p>
            <p className="text-neutral-600 leading-relaxed">
              We reject the industry's focus on seasonal trends. Instead, we obsess over the physics of the gait, the density of materials, and the minimalist aesthetic that persists long after the noise of fashion fades.
            </p>
          </div>
        </div>

        {/* Engineering Deep Dive */}
        <div className="bg-neutral-50 p-12 md:p-20 rounded-sm">
          <h2 className="text-xs font-black tracking-[0.3em] uppercase mb-12 text-neutral-400 text-center">Kinetic Engineering</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Material Science", body: "We source high-modulus fibers and aerospace-grade polymers to achieve weight-to-strength ratios previously unseen in consumer footwear." },
              { title: "Energy Return", body: "Our proprietary foam chassis acts as a mechanical spring, converting impact energy into forward momentum." },
              { title: "Urban Adaptability", body: "Designed for the concrete landscape, our outsoles feature multi-directional lug patterns for superior grip on variable terrain." }
            ].map((pillar) => (
              <div key={pillar.title} className="border-l border-black pl-6">
                <h4 className="font-bold mb-4 uppercase">{pillar.title}</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Section */}
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs font-black tracking-[0.3em] uppercase mb-8 text-neutral-400">The Mission</h2>
            <p className="text-2xl font-light leading-snug">
              To build a tool, not an accessory. We provide the foundation for those who navigate the world with intent, focus, and relentless momentum.
            </p>
          </div>
          <div className="h-[400px] overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1518005020951-ecc89d45a400?q=80&w=1000&auto=format&fit=crop" 
              alt="Urban landscape" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <footer className="mt-32 py-20 border-t border-neutral-100 text-center">
        <p className="text-4xl md:text-5xl font-serif italic text-neutral-900 mb-8">
          "The most beautiful object is one that works perfectly."
        </p>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
          AURAX LABS // EST. 2026
        </p>
      </footer>
    </motion.div>
  );
};