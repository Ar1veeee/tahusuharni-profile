import React from 'react';
import { StorySection } from './components/StorySection';
import { VisionMission } from './components/VisionMission';
import { TeamSection } from './components/TeamSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 pb-24 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 overflow-hidden">
      <div className="max-w-6xl mx-auto mt-10">

        {/* Hero Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-3">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Dari dapur kecil ke hati jutaan
          </p>
        </div>

        <StorySection />
        <VisionMission />
        <TeamSection />
      </div>
    </div>
  );
};