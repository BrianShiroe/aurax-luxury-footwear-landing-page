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
    navigate('/');
  };

  if (cart.length === 0) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest italic">Bag is empty</h2>
            <button onClick={handleBack} className="bg-black text-white px-8 py-4 text-[10px] uppercase font-bold tracking-widest cursor-pointer">Return to Shop</button>
        </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-32">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          <CheckoutForm onBack={handleBack} step={step} />
          <CheckoutSummary cart={cart} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};
