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
    <div className="w-full lg:w-[400px] space-y-12 h-fit lg:sticky lg:top-32">
       <div className="bg-[#F9F9FB] p-8 md:p-12 space-y-10 rounded-sm">
          <h3 className="text-xl font-bold tracking-tight uppercase">Order Summary</h3>
          
          <div className="space-y-8 max-h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-200">
              {cart.map(item => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6 group">
                      <div className="w-20 h-20 bg-white overflow-hidden rounded-sm flex-shrink-0 border border-gray-100">
                          <img src={item.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.name} />
                      </div>
                      <div className="flex-1 space-y-1">
                          <h4 className="text-[12px] font-bold uppercase truncate group-hover:italic transition-all">{item.name}</h4>
                          <p className="text-[9px] text-black/40 uppercase tracking-widest">Qty: {item.quantity} / Size {item.selectedSize}</p>
                          <p className="text-[11px] font-mono font-medium pt-2">{formatCurrency(item.price)}</p>
                      </div>
                  </div>
              ))}
          </div>

          <div className="pt-8 border-t border-gray-200 space-y-4">
              <div className="flex justify-between text-xs tracking-widest text-black/40 uppercase">
                  <span>Subtotal</span>
                  <span className="font-mono">{formatCurrency(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-xs tracking-widest text-black/40 uppercase">
                  <span>Express Shipping</span>
                  <span className="font-mono">FREE</span>
              </div>
              <div className="flex justify-between text-xs tracking-widest text-black/40 uppercase">
                  <span>Tax</span>
                  <span className="font-mono">$0.00</span>
              </div>
              <div className="pt-4 flex justify-between text-2xl font-bold tracking-tight uppercase">
                  <span>Total</span>
                  <span className="font-mono">{formatCurrency(totalPrice)}</span>
              </div>
          </div>

          <div className="space-y-4 pt-6">
              <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest font-bold text-black/40">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  SSL SECURED ENCRYPTION
              </div>
              <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest font-bold text-black/40">
                  <CreditCard className="w-4 h-4" />
                  PCI COMPLIANT PAYMENTS
              </div>
          </div>
       </div>
    </div>
  );
};
