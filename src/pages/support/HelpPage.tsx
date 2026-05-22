import React from "react";
import { motion } from "motion/react";

export const HelpPage: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto pt-40 pb-20 px-6">
      <h1 className="text-5xl font-bold tracking-tighter uppercase mb-12">Support & FAQ</h1>
      
      <div className="space-y-12">
        {[
          { q: "Shipping & Delivery", a: "Orders are processed within 24 hours. Domestic delivery takes 2-3 business days. International shipping varies by region." },
          { q: "Returns & Exchanges", a: "We accept returns on unworn items within 30 days of receipt. Use the portal in your account dashboard." },
          { q: "Technical Specs", a: "For inquiries regarding material composition or sizing guides, refer to our product-specific engineering sheets." }
        ].map((item, i) => (
          <div key={i} className="border-b border-neutral-100 pb-8">
            <h3 className="font-bold mb-4">{item.q}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
        
        <div className="bg-neutral-50 p-8 rounded-sm">
          <h3 className="font-bold mb-2">Still need assistance?</h3>
          <p className="text-sm text-neutral-600 mb-4">Our engineering support team is available 24/7.</p>
          <a href="mailto:support@aurax.com" className="text-xs font-black uppercase underline tracking-[0.2em]">Contact Labs</a>
        </div>
      </div>
    </motion.div>
  );
};