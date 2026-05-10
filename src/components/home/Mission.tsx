import React from 'react';
import { motion } from 'motion/react';

export const Mission: React.FC = () => {
  return (
    <section className="py-60 px-6 md:px-12 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter-plus leading-[1.1] text-brand-black"
        >
          AURAX IS THE PRODUCT OF <span className="italic text-black/10">KINETIC</span> ENGINEERING AND ARCHITECTURAL BRUTALISM.
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '120px' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[1px] bg-brand-black mx-auto mt-16"
        />
      </div>
    </section>
  );
};
