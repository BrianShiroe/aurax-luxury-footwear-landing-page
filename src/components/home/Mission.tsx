import React from 'react';
import { motion } from 'motion/react';

export const Mission: React.FC = () => {
  return (
    <section className="py-32 md:py-60 px-6 md:px-12 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-bold tracking-tighter leading-[1.2] md:leading-[1.1] text-black"
        >
          AURAX IS THE PRODUCT OF <br className="md:hidden" />
          <span className="italic text-black/20">KINETIC</span> ENGINEERING AND ARCHITECTURAL BRUTALISM.
        </motion.p>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }} // Slightly smaller line for mobile
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:w-[120px] h-[1px] bg-black mx-auto mt-12 md:mt-16"
        />
      </div>
    </section>
  );
};