import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckoutForm } from '../components/checkout/CheckoutForm';
import { CheckoutSummary } from '../components/checkout/CheckoutSummary';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, totalPrice } = useCart();
  const [step] = useState(1);

  const handleBack = () => {
    navigate(-1); // Changed to -1 to return to the previous page (Shop or Product)
  };

  if (cart.length === 0) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-[0.3em] italic text-black/20">Bag is empty</h2>
            <button 
              onClick={handleBack} 
              className="bg-black text-white px-10 py-5 text-[10px] uppercase font-black tracking-[0.2em] cursor-pointer hover:scale-105 transition-transform"
            >
              Return to Shop
            </button>
        </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-20 md:pt-32 pb-20 md:pb-32">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Mobile: Summary moves to top or bottom? Standard UX puts summary at bottom on mobile */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-1 order-2 lg:order-1">
             <CheckoutForm onBack={handleBack} step={step} />
          </div>
          <div className="w-full lg:w-[400px] order-1 lg:order-2">
             <CheckoutSummary cart={cart} totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};