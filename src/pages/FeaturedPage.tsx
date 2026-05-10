import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturedPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      id: '01',
      title: 'THE PHANTOM SERIES',
      category: 'Limited Drop',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000',
      description: 'Triple-black engineering meets kinetic energy return. Developed for low-light urban environments.'
    },
    {
      id: '02',
      title: 'KINETIC ARCHIVE',
      category: 'Editorial',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000',
      description: 'A deep dive into the silhouettes that defined our first year of architectural exploration.'
    }
  ];

  return (
    <main className="bg-white pt-24 md:pt-40 pb-20 px-6 md:px-12 selection:bg-black selection:text-white">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-40"
        >
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-[1px] w-12 bg-black/20" />
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] text-black/40 font-black">
              Laboratory / Curated
            </span>
          </div>
          <h1 className="text-[15vw] md:text-[10vw] font-black tracking-tighter uppercase leading-[0.85] text-black">
            FEATURED <br /> 
            <span className="italic text-black/10 transition-colors hover:text-black/20">EDITIONS</span>
          </h1>
        </motion.div>

        {/* Features List */}
        <div className="grid grid-cols-1 gap-32 md:gap-64">
          {features.map((item, idx) => (
            <motion.section 
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-24 items-start md:items-center`}
            >
              {/* Image Container: Taller on mobile for better focus */}
              <div className="w-full md:w-3/5 overflow-hidden bg-gray-50 aspect-[3/4] md:aspect-video relative group border border-black/5">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 grayscale" 
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-6 left-6 md:top-10 md:left-10 text-white z-10 font-mono text-3xl md:text-5xl font-light opacity-30">
                  {item.id}
                </div>
              </div>
              
              {/* Content Box */}
              <div className="w-full md:w-2/5 space-y-6 md:space-y-10 px-2 md:px-0">
                <div className="space-y-4">
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black text-black/40 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                    {item.category}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
                    {item.title}
                  </h2>
                </div>
                
                <p className="text-black/60 text-sm md:text-lg leading-relaxed font-medium max-w-sm">
                  {item.description}
                </p>
                
                <Link 
                  to="/shop" 
                  className="inline-flex items-center gap-6 group"
                >
                  <div className="relative">
                    <span className="text-[11px] md:text-[12px] uppercase tracking-[0.3em] font-black pb-2 block">
                      Explore Drop
                    </span>
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-100 group-hover:scale-x-50 transition-transform duration-500 origin-left" />
                  </div>
                  <div className="p-3 border border-black/10 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 md:mt-64 text-center border-t border-black/5 pt-20"
        >
          <Link to="/shop" className="text-[8vw] md:text-[4vw] font-black tracking-tighter hover:italic transition-all uppercase">
            View All Archives
          </Link>
        </motion.div>
      </div>
    </main>
  );
};