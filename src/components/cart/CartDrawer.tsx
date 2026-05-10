import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../lib/utils';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  const handleCheckout = () => {
    navigate('/checkout');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 w-full max-w-md h-full bg-white z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-black" />
                <h2 className="text-lg font-bold tracking-tight uppercase">Bag ({totalItems})</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-8 h-8 text-black/20" />
                  </div>
                  <p className="text-black/40 uppercase text-[10px] tracking-[0.2em] font-bold mb-8">Your bag is empty</p>
                  <button 
                    onClick={onClose}
                    className="border-b border-black text-black py-1 text-sm font-medium hover:italic transition-all"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-6 group">
                    <div className="w-24 h-24 bg-gray-50 rounded-sm overflow-hidden flex-shrink-0">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-[13px] font-bold tracking-tight uppercase group-hover:italic transition-all">{item.name}</h3>
                          <p className="text-[10px] text-black/40 uppercase tracking-widest mt-1">Size {item.selectedSize}</p>
                        </div>
                        <p className="text-[13px] font-mono font-medium">{formatCurrency(item.price)}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gray-100 rounded-px p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                            className="p-1 hover:bg-gray-50 text-black/40 hover:text-black transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-[11px] font-mono font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                            className="p-1 hover:bg-gray-50 text-black/40 hover:text-black transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                          className="text-[9px] uppercase tracking-widest text-black/40 hover:text-black border-b border-transparent hover:border-black transition-all"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 md:p-8 bg-[#F9F9FB] space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-xs tracking-widest text-black/40 uppercase">
                    <span>Subtotal</span>
                    <span>{formatCurrency(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-xs tracking-widest text-black/40 uppercase">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200 flex justify-between text-lg font-bold tracking-tight uppercase">
                    <span>Total</span>
                    <span>{formatCurrency(totalPrice)}</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-black text-white py-6 text-[10px] uppercase font-bold tracking-[0.4em] flex items-center justify-center gap-3 group hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  Secure Checkout
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[9px] text-center text-black/30 uppercase tracking-[0.1em]">
                  Complimentary shipping & returns on all orders.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
