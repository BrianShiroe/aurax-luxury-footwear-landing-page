import React from 'react';
import { ArrowLeft, Lock } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CheckoutFormProps {
  onBack: () => void;
  step: number;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ onBack, step }) => {
  return (
    <div className="flex-1 space-y-12 md:space-y-16">
      {/* Progress Header */}
      <div className="space-y-6">
          <button 
            onClick={onBack} 
            className="text-[10px] uppercase tracking-widest font-black text-black/40 hover:text-black flex items-center gap-2 group transition-all cursor-pointer"
          >
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Back
          </button>
          
          <div className="flex items-center gap-8 md:gap-12">
             <div className={cn("flex items-center gap-3", step >= 1 ? "text-black" : "text-black/20")}>
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-current flex items-center justify-center text-[9px] md:text-[10px] font-bold">1</span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black">Shipping</span>
             </div>
             <div className="w-8 md:w-12 h-[1px] bg-gray-100" />
             <div className={cn("flex items-center gap-3", step >= 2 ? "text-black" : "text-black/20")}>
                  <span className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-current flex items-center justify-center text-[9px] md:text-[10px] font-bold">2</span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black">Payment</span>
             </div>
          </div>
      </div>

      <section className="space-y-10 md:space-y-12">
          <h1 className="text-[10vw] md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
            Secure <br className="md:hidden" />
            <span className="italic text-black/10 transition-colors hover:text-black/20">Checkout</span>
          </h1>
          
          <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="col-span-2 space-y-2">
                      <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-black/40">Email Address</label>
                      <input type="email" className="w-full bg-gray-50 border-none p-4 md:p-5 text-sm focus:ring-1 focus:ring-black outline-none transition-all" placeholder="architect@aurax.com" />
                  </div>
                  <div className="space-y-2">
                      <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-black/40">First Name</label>
                      <input type="text" className="w-full bg-gray-50 border-none p-4 md:p-5 text-sm focus:ring-1 focus:ring-black outline-none" />
                  </div>
                  <div className="space-y-2">
                      <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-black/40">Last Name</label>
                      <input type="text" className="w-full bg-gray-50 border-none p-4 md:p-5 text-sm focus:ring-1 focus:ring-black outline-none" />
                  </div>
                  <div className="col-span-2 space-y-2">
                       <label className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-black/40">Shipping Address</label>
                       <input type="text" className="w-full bg-gray-50 border-none p-4 md:p-5 text-sm focus:ring-1 focus:ring-black outline-none" placeholder="123 Luxury Lane" />
                  </div>
              </div>

              {/* Status Change: "In Development" */}
              <button 
                disabled
                className="w-full md:w-fit bg-black/10 text-black/40 px-12 py-6 text-[10px] uppercase font-black tracking-[0.4em] transition-all flex items-center justify-center gap-4 cursor-not-allowed border border-black/5"
              >
                  <Lock className="w-3 h-3 opacity-30" />
                  In Development
              </button>
              <p className="text-[9px] uppercase tracking-widest text-black/30 font-bold text-center md:text-left">
                Payment gateway connection is currently being architecturalized.
              </p>
          </div>
      </section>
    </div>
  );
};