import React, { useState, useEffect } from 'react';
import { RavenIcon, GlowingCatEyesIcon, ApeIcon, DevilIcon } from './icons';
import { AnimationType } from '../types';

interface AnimatedBackgroundProps {
    hoveredStory: AnimationType | null;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ hoveredStory }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const parallax = (factor: number) => {
        if (typeof window === 'undefined') return {};
        const x = (mousePos.x - window.innerWidth / 2) * factor;
        const y = (mousePos.y - window.innerHeight / 2) * factor;
        return { transform: `translate(${x}px, ${y}px)` };
    };

    const renderStoryAnimation = () => {
        const commonClass = "absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out pointer-events-none";
        
        return (
            <>
                <div className={`${commonClass} ${hoveredStory === AnimationType.Raven ? 'opacity-30' : 'opacity-0'}`} style={parallax(0.05)}>
                    <RavenIcon className="w-64 h-64 text-black" />
                </div>
                <div className={`${commonClass} ${hoveredStory === AnimationType.BlackCat ? 'opacity-80' : 'opacity-0'}`} style={parallax(0.03)}>
                    <GlowingCatEyesIcon className="w-80 h-80 text-yellow-300" />
                </div>
                <div className={`${commonClass} ${hoveredStory === AnimationType.Morgue ? 'opacity-20' : 'opacity-0'}`} style={parallax(0.06)}>
                    <ApeIcon className="w-72 h-72 text-black" />
                </div>
                <div className={`${commonClass} ${hoveredStory === AnimationType.Belfry ? 'opacity-25' : 'opacity-0'}`} style={parallax(0.04)}>
                    <DevilIcon className="w-64 h-64 text-red-900" />
                </div>
            </>
        );
    }

    return (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-black overflow-hidden pointer-events-none">
            {/* Layer 1: Farthest back - Mist */}
            <div
                className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fog.png')] opacity-10"
                style={{ ...parallax(0.01), backgroundSize: '300px 300px' }}
            ></div>

            {/* Layer 2: Subtle moon glow */}
            <div
                className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gray-700 rounded-full opacity-5 blur-3xl"
                style={parallax(0.02)}
            ></div>
            
            {/* Layer 3: Floating dust motes */}
            {[...Array(30)].map((_, i) => (
                <div
                    key={`mote-${i}`}
                    className="absolute rounded-full bg-gray-600 opacity-20"
                    style={{
                        width: `${Math.random() * 2 + 1}px`,
                        height: `${Math.random() * 2 + 1}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        ...parallax((Math.random() * 0.04) + 0.01)
                    }}
                />
            ))}
            
            {/* Layer 4: Interactive Story Animations */}
            {renderStoryAnimation()}

            {/* Vignette effect */}
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>
        </div>
    );
};

export default AnimatedBackground;
