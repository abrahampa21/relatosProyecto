import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import StoryCard from './StoryCard';
import type { Story } from '../types';
import { AnimationType } from '../types';

interface LandingPageProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ stories, onSelectStory }) => {
  const [hoveredStory, setHoveredStory] = useState<AnimationType | null>(null);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center p-4">
      <AnimatedBackground hoveredStory={hoveredStory} />
      <div className="relative z-10 text-center">
        <h2 className="font-display text-red-800 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Relatos de terror
        </h2>
      </div>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl w-full">
        {stories.map((story) => (
          <div
            key={story.id}
            onMouseEnter={() => setHoveredStory(story.animationType)}
            onMouseLeave={() => setHoveredStory(null)}
          >
            <StoryCard story={story} onSelect={onSelectStory} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 text-xs text-gray-600 z-10 animate-pulse">
        Mueve el cursor para ver las sombras...
      </div>
    </div>
  );
};

export default LandingPage;
