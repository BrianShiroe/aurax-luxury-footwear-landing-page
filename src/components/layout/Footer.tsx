import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'shop' | 'collections' | 'innovation' | 'story') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white pt-24 pb-16 px-6 md:px-12 border-t border-gray-50">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <button onClick={() => onNavigate('home')} className="text-3xl font-bold tracking-widest italic cursor-pointer">AURAX</button>
            <p className="text-black/50 text-sm leading-relaxed max-w-xs">
              Defining the interface between engineering precision and athletic motion. Luxury engineered for the modern athlete.
            </p>
            <div className="flex gap-6">
              <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-3 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black mb-8">Navigation</h3>
            <ul className="space-y-4">
              {[
                { name: 'Shop All', view: 'shop' as const },
                { name: 'Featured', view: 'home' as const },
                { name: 'Collections', view: 'collections' as const },
                { name: 'Innovation', view: 'innovation' as const },
                { name: 'Story', view: 'story' as const }
              ].map(item => (
                <li key={item.name}>
                  <button 
                    onClick={() => onNavigate(item.view)}
                    className="text-black/50 hover:text-black text-sm flex items-center group transition-colors cursor-pointer"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black mb-8">Support</h3>
            <ul className="space-y-4">
              {['Order Status', 'Shipping & Delivery', 'Returns', 'Payment Options', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href="#" className="text-black/50 hover:text-black text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black mb-8">Journal</h3>
            <p className="text-sm text-black/50 mb-6 leading-relaxed">
              Sign up for exclusive access to limited edition drops and future releases.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-gray-50 border-none px-6 py-4 text-sm focus:ring-1 focus:ring-black transition-all outline-none"
              />
              <button 
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] uppercase font-bold tracking-widest border-b border-black h-fit pb-0.5 hover:italic transition-all"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-black/30 font-medium font-mono">
            © 2026 AURAX DESIGN LABS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-black text-black/30 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black text-black/30 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-black text-black/30 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
