import React from 'react';

export const LabShowcase: React.FC = () => {
  return (
    <div className="h-[70vh] w-full overflow-hidden relative">
       <img 
         src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=2000" 
         className="w-full h-full object-cover grayscale opacity-50"
         alt="Labs"
       />
       <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white">Future / Archives</h2>
       </div>
    </div>
  );
};
