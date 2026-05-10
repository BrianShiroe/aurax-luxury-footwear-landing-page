import React from 'react';
import { StoryHero } from '../components/story/StoryHero';
import { Philosophy } from '../components/story/Philosophy';

export const StoryPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <StoryHero />
        <Philosophy />
      </div>
    </div>
  );
};
