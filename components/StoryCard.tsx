import React from 'react';
import type { Story } from '../types';
import { AnimationType } from '../types';
import { RavenIcon, BlackCatIcon, ApeIcon, DevilIcon } from './icons';

interface StoryCardProps {
  story: Story;
  onSelect: (story: Story) => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, onSelect }) => {
  const getIcon = () => {
    switch (story.animationType) {
      case AnimationType.Raven:
        return <RavenIcon className="w-16 h-16 text-gray-500" />;
      case AnimationType.BlackCat:
        return <BlackCatIcon className="w-16 h-16 text-gray-500" />;
      case AnimationType.Morgue:
        return <ApeIcon className="w-16 h-16 text-gray-500" />;
      case AnimationType.Belfry:
        return <DevilIcon className="w-16 h-16 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 text-center cursor-pointer transform hover:scale-105 hover:border-red-800/70 hover:shadow-2xl hover:shadow-red-900/50 transition-all duration-300 ease-in-out relative overflow-hidden aspect-[3/4] flex flex-col justify-center"
      onClick={() => onSelect(story)}
    >
        <div 
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-20"
            style={{ backgroundImage: `url("${story.cardImage}")` }}
        />
        <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-10`}>
        {getIcon()}
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-200">{story.title}</h3>
        <p className="text-gray-400 italic mt-2 text-sm">"{story.tagline}"</p>
      </div>
    </div>
  );
};

export default StoryCard;
