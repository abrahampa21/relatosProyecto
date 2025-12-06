import React, { useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import StoryCard from "./StoryCard";
import type { Story } from "../types";
import { AnimationType } from "../types";

interface LandingPageProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({
  stories,
  onSelectStory,
}) => {
  const [hoveredStory, setHoveredStory] = useState<AnimationType | null>(null);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center p-4"
      id="relatos"
    >
      <AnimatedBackground hoveredStory={hoveredStory} />
      <div className="relative z-10 text-center">
        <h2 className="font-display text-red-800 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          Relatos de terror
        </h2>
      </div>
      <div
        className="
            relative z-10 
            flex gap-6 w-full overflow-x-auto px-1 pb-4 
            snap-x snap-mandatory 
            sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:px-0
          "
      >
        {stories.map((story) => (
          <div
            data-aos="zoom-in"
            key={story.id}
            className="snap-start min-w-[100%] sm:min-w-0"
            onMouseEnter={() => setHoveredStory(story.animationType)}
            onMouseLeave={() => setHoveredStory(null)}
          >
            <StoryCard story={story} onSelect={onSelectStory} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 text-xm text-gray-100 z-10 animate-pulse">
        <span className="hidden sm:inline">Mueve el cursor para ver las sombras...</span>
        <span className="inline sm:hidden text-xs">Deslízate sobre la sección para ver cada card</span>
      </div>
    </div>
  );
};

export default LandingPage;
