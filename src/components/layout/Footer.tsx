import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 md:pt-32 pb-10 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20 md:mb-32">
          
          {/* Brand Info */}
          <div className="space-y-6 md:space-y-8">
            <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tighter italic cursor-pointer">AURAX</Link>
            <p className="text-black/50 text-xs md:text-sm leading-relaxed max-w-xs font-medium">
              Defining the interface between engineering precision and kinetic motion. Luxury footwear developed for the modern nomad.
            </p>
            <div className="flex gap-4 md:gap-6">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all duration-500">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-black mb-6 md:mb-8">Navigation</h3>
            <ul className="space-y-4">
              {[
                { name: 'Shop All', path: '/shop' },
                { name: 'Featured', path: '/featured' },
                { name: 'Collections', path: '/collections' },
                { name: 'Innovation', path: '/innovation' },
                { name: 'Story', path: '/story' }
              ].map(item => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-black/40 hover:text-black text-sm flex items-center group transition-colors cursor-pointer font-bold uppercase tracking-widest text-[11px]"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5 group-hover:translate-y-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-black mb-6 md:mb-8">Support</h3>
            <ul className="space-y-4">
              {['Order Status', 'Shipping', 'Returns', 'Payment', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-black/40 hover:text-black text-[11px] font-bold uppercase tracking-widest transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Journal Signup */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-black mb-6 md:mb-8">Journal</h3>
            <p className="text-xs md:text-sm text-black/50 mb-6 leading-relaxed font-medium">
              Join the laboratory. Exclusive access to limited edition drops and future releases.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-gray-50 border-none px-5 py-4 text-xs focus:ring-1 focus:ring-black transition-all outline-none rounded-none"
              />
              <button 
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] uppercase font-black tracking-widest border-b-2 border-black h-fit pb-0.5 hover:italic transition-all"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar & Credits */}
        <div className="pt-10 border-t border-black/5 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-black/30 font-bold font-mono">
                © 2026 AURAX DESIGN LABS. ALL RIGHTS RESERVED.
              </p>
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-black/40 font-bold">
                Developed by <a href="https://github.com/brianshiroe" className="text-black hover:italic transition-all">brianshiroe</a> / Brian Haw
              </p>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[9px] md:text-[10px] uppercase tracking-widest font-black">
              <a href="#" className="hover:text-black text-black/30 transition-colors">Privacy</a>
              <a href="#" className="hover:text-black text-black/30 transition-colors">Terms</a>
              <a href="#" className="hover:text-black text-black/30 transition-colors">Dubai, UAE</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};