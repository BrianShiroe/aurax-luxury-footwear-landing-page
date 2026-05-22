import React from "react";
import { motion } from "motion/react";

export const JoinUsPage: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto pt-40 pb-20 px-6">
      <h1 className="text-[12vw] md:text-[6rem] font-bold tracking-tighter uppercase mb-16">Join the Labs</h1>
      <p className="text-2xl font-light mb-20 text-neutral-500">We are looking for individuals who view the world as a structural problem waiting to be solved.</p>
      
      <div className="grid md:grid-cols-2 gap-16 mb-24">
        <div>
          <h2 className="font-bold mb-4">Engineering Excellence</h2>
          <p className="text-sm text-neutral-500 leading-relaxed">Join a team of designers, engineers, and visionaries working to redefine the limits of kinetic movement.</p>
        </div>
        <div>
          <h2 className="font-bold mb-4">Work With Intent</h2>
          <p className="text-sm text-neutral-500 leading-relaxed">No hierarchy for the sake of it. Just data, design, and execution.</p>
        </div>
      </div>

      <div className="border-t border-neutral-100 pt-16">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-neutral-400">Open Positions</h3>
        {["Senior Footwear Engineer", "Material Scientist", "Digital Architect"].map((job) => (
          <div key={job} className="flex justify-between items-center py-6 border-b border-neutral-100">
            <span className="font-bold">{job}</span>
            <button className="text-xs font-bold uppercase underline">Apply</button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};