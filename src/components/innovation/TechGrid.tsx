import React from 'react';
import { motion } from 'motion/react';

const technologies = [
  { title: 'EVO-SOLE', desc: 'Proprietary carbon-infused polymer for 42% more energy return.' },
  { title: 'AURAX-KNIT', desc: 'Sustainably sourced technical fibers that adapt to your foot’s unique topography.' },
  { title: 'T-STABILITY', desc: 'Architectural heel counters provides tectonic stability during high-impact motion.' }
];

export const TechGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-40">
      {technologies.map((tech, i) => (
        <motion.div 
           key={tech.title}
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: i * 0.1 }}
           className="p-12 border border-white/10 hover:border-white/30 transition-colors"
        >
          <h3 className="text-2xl font-bold mb-6 italic">{tech.title}</h3>
          <p className="text-white/40 text-sm leading-relaxed">{tech.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};
