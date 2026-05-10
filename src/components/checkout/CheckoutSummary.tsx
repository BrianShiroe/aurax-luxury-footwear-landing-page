import React from 'react';
import { ShieldCheck, CreditCard } from 'lucide-react';
import { CartItem } from '../../types';
import { formatCurrency } from '../../lib/utils';

interface CheckoutSummaryProps {
  cart: CartItem[];
  totalPrice: number;
}

export const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({ cart, totalPrice }) => {
  return (
    <div className="w-full lg:w-[400px] space-y-8 h-fit lg:sticky lg:top-32">
       <div className="bg-[#F9F9FB] p-6 md:p-10 space-y-8 rounded-sm">
          <h3 className="text-lg md:text-xl font-black tracking-tighter uppercase">Order Summary</h3>
          
          <div className="space-y-6 max-h-[300px] md:max-h-[400px] overflow-y-auto pr-2 no-scrollbar">
              {cart.map(item => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 md:gap-6 group">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white overflow-hidden rounded-sm flex-shrink-0 border border-gray-100">
                          <img src={item.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.name} />
                      </div>
                      <div className="flex-1 space-y-1">
                          <h4 className="text-[10px] md:text-[11px] font-black uppercase truncate leading-tight">{item.name}</h4>
                          <p className="text-[8px] md:text-[9px] text-black/40 uppercase tracking-widest">Size {item.selectedSize} / Qty {item.quantity}</p>
                          <p className="text-[10px] md:text-[11px] font-mono font-bold pt-1">{formatCurrency(item.price)}</p>
                      </div>
                  </div>
              ))}
          </div>

          <div className="pt-6 border-t border-black/5 space-y-3">
              <div className="flex justify-between text-[9px] md:text-[10px] tracking-widest text-black/40 uppercase font-bold">
                  <span>Subtotal</span>
                  <span className="font-mono">{formatCurrency(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-[9px] md:text-[10px] tracking-widest text-emerald-600 uppercase font-bold">
                  <span>Express Shipping</span>
                  <span className="font-mono">FREE</span>
              </div>
              <div className="pt-4 flex justify-between text-xl md:text-2xl font-black tracking-tighter uppercase">
                  <span>Total</span>
                  <span className="font-mono">{formatCurrency(totalPrice)}</span>
              </div>
          </div>

          <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-black text-black/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500/50" />
                  SSL SECURED ENCRYPTION
              </div>
              <div className="flex items-center gap-3 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-black text-black/30">
                  <CreditCard className="w-3.5 h-3.5" />
                  PCI COMPLIANT PAYMENTS
              </div>
          </div>
       </div>
    </div>
  );
};