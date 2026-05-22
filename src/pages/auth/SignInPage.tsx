import React from "react";
import { motion } from "motion/react";

export const SignInPage: React.FC = () => {
  return (
    // Increased pt-40 and changed justify-center to justify-start for better header spacing
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="flex flex-col items-center justify-start min-h-screen pt-40 px-6"
    >
      <div className="w-full max-w-sm space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase tracking-tighter">Sign In</h1>
          <p className="text-[10px] text-neutral-400 mt-4 uppercase tracking-[0.3em]">Enter your credentials</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-4 border border-neutral-200 outline-none focus:border-black transition-colors" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-4 border border-neutral-200 outline-none focus:border-black transition-colors" 
          />
          <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-neutral-800 transition-colors">
            Access Account
          </button>
        </form>

        <div className="text-center space-y-6">
          <button className="text-[10px] font-bold uppercase underline tracking-widest">Forgot Password?</button>
          <p className="text-sm text-neutral-500">
            Don't have an account? <button className="font-bold text-black underline">Join Us</button>
          </p>
        </div>
      </div>
    </motion.div>
  );
};