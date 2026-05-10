import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface CheckoutFormProps {
  onBack: () => void;
  step: number;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ onBack, step }) => {
  return (
    <div className="flex-1 space-y-16">
      <div className="space-y-4">
          <button onClick={onBack} className="text-[10px] uppercase tracking-widest font-bold text-black/40 hover:text-black flex items-center gap-2 mb-8 group transition-all cursor-pointer">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Back
          </button>
          <div className="flex items-center gap-12">
             <div className={cn("flex items-center gap-3", step >= 1 ? "text-black" : "text-black/20")}>
                  <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-[10px] font-bold">1</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Shipping</span>
             </div>
             <div className="w-12 h-[1px] bg-gray-100" />
             <div className={cn("flex items-center gap-3", step >= 2 ? "text-black" : "text-black/20")}>
                  <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-[10px] font-bold">2</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Payment</span>
             </div>
          </div>
      </div>

      <section className="space-y-12">
          <h1 className="text-5xl font-bold tracking-tighter uppercase">Secure <span className="italic text-black/20">Checkout</span></h1>
          
          <div className="space-y-10">
              <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Email Address</label>
                      <input type="email" className="w-full bg-gray-50 border-none p-5 text-sm focus:ring-1 focus:ring-black outline-none" placeholder="architect@aurax.com" />
                  </div>
                  <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">First Name</label>
                      <input type="text" className="w-full bg-gray-50 border-none p-5 text-sm focus:ring-1 focus:ring-black outline-none" />
                  </div>
                  <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Last Name</label>
                      <input type="text" className="w-full bg-gray-50 border-none p-5 text-sm focus:ring-1 focus:ring-black outline-none" />
                  </div>
                  <div className="col-span-2 space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Shipping Address</label>
                       <input type="text" className="w-full bg-gray-50 border-none p-5 text-sm focus:ring-1 focus:ring-black outline-none" placeholder="123 Luxury Lane" />
                  </div>
                  <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">City</label>
                      <input type="text" className="w-full bg-gray-50 border-none p-5 text-sm focus:ring-1 focus:ring-black outline-none" />
                  </div>
                  <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Postal Code</label>
                      <input type="text" className="w-full bg-gray-50 border-none p-5 text-sm focus:ring-1 focus:ring-black outline-none" />
                  </div>
              </div>

              <button className="w-full md:w-fit bg-black text-white px-16 py-6 text-[10px] uppercase font-bold tracking-[0.4em] hover:bg-black/90 transition-all flex items-center justify-center gap-4 group cursor-pointer">
                  Proceed To Payment
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
          </div>
      </section>
    </div>
  );
};
