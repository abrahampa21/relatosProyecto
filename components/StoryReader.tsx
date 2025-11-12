import React, { useState, useEffect } from 'react';
import type { Story } from '../types';
import StoryAmbiance from './StoryAmbiance';

interface StoryReaderProps {
  story: Story;
  onGoBack: () => void;
}

const StoryReader: React.FC<StoryReaderProps> = ({ story, onGoBack }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const element = document.documentElement;
    const scrollTotal = element.scrollHeight - element.clientHeight;
    if (scrollTotal > 0) {
      setScrollProgress((element.scrollTop / scrollTotal) * 100);
    } else {
      setScrollProgress(100);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black pb-24 relative">
      <StoryAmbiance animationType={story.animationType} scrollProgress={scrollProgress} />
      <div 
        className="fixed top-0 left-0 h-1 bg-red-800 z-50 transition-all duration-100 ease-linear"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <button
        onClick={onGoBack}
        className="fixed top-4 left-4 z-40 bg-gray-800/50 backdrop-blur-md text-gray-300 px-4 py-2 rounded-md border border-gray-600 hover:bg-red-800 hover:border-red-700 transition-colors duration-200"
      >
        &larr; Regresar
      </button>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <header className="text-center mb-12 flex flex-col items-center">
          <div className="w-32 h-32 mb-6 border-4 border-gray-700 rounded-full overflow-hidden shadow-lg shadow-red-900/30">
            <img src={story.characterImage} alt={story.title} className="w-full h-full object-cover"/>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-red-700">{story.title}</h1>
          <p className="text-gray-400 mt-4 italic">"{story.tagline}"</p>
        </header>
        <article className="prose prose-invert prose-lg max-w-none prose-p:text-gray-300 prose-headings:text-gray-100 whitespace-pre-wrap leading-relaxed text-center">
          {story.fullText}
        </article>
      </div>
    </div>
  );
};

export default StoryReader;
