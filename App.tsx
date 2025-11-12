
import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import StoryReader from './components/StoryReader';
import { stories } from './data/stories';
import type { Story } from './types';

const App: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isFading, setIsFading] = useState(false);

  const handleSelectStory = (story: Story) => {
    setIsFading(true);
    setTimeout(() => {
      setSelectedStory(story);
      window.scrollTo(0, 0);
      setIsFading(false);
    }, 500);
  };

  const handleGoBack = () => {
    setIsFading(true);
    setTimeout(() => {
      setSelectedStory(null);
      setIsFading(false);
    }, 500);
  };

  useEffect(() => {
    document.body.style.overflow = selectedStory ? 'auto' : 'hidden';
    return () => {
        document.body.style.overflow = 'auto';
    };
  }, [selectedStory]);


  return (
    <main className="bg-black text-gray-300 min-h-screen">
      <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {selectedStory ? (
          <StoryReader story={selectedStory} onGoBack={handleGoBack} />
        ) : (
          <LandingPage stories={stories} onSelectStory={handleSelectStory} />
        )}
      </div>
    </main>
  );
};

export default App;
   