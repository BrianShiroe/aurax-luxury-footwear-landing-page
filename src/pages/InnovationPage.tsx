import React from 'react';
import { InnovationHero } from '../components/innovation/InnovationHero';
import { TechGrid } from '../components/innovation/TechGrid';
import { LabShowcase } from '../components/innovation/LabShowcase';

export const InnovationPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <InnovationHero />
        <TechGrid />
        <LabShowcase />
      </div>
    </div>
  );
};
