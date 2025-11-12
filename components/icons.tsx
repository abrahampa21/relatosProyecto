import React from 'react';

type IconProps = {
  className?: string;
};

export const RavenIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M4.46,3.38,3.05,4.79c3,3,4.42,7.25,4.19,11.53L8,16.5l.28-.28c.79-1.29,1.88-2.38,3-3.2l.28-.28,1.41,1.41-.28.28c-.52.52-1,1.08-1.42,1.69l-.28.28,1.41,1.41.28-.28c2.73-4.5,2.05-10.37-1.98-14.4l-1.41,1.41,1.42,1.42c-1.34-1.34-3.08-2.2-4.95-2.47m14.12,2.19L17.17,7c-1.56-1.56-3.61-2.6-5.83-2.95l.28-.28-1.41-1.41.28-.28c1.55-.31,3.18-.1,4.62.63l-1.42-1.42,1.41-1.41,1.42,1.42C17.92,2.77,18.8,4.1,18.58,5.57Z" />
  </svg>
);

export const BlackCatIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M15.5,5.5A1.5,1.5 0 0,0 17,4H17.5C17.78,4 18,3.78 18,3.5V3A1,1 0 0,0 17,2H15.5C14.12,2 13,3.12 13,4.5V6C13,6.55 13.45,7 14,7H15C15.55,7 16,6.55 16,6V4.5C16,5.33 15.33,6 14.5,6C13.67,6 13,5.33 13,4.5C13,3.12 14.12,2 15.5,2M8.5,2C9.88,2 11,3.12 11,4.5C11,5.33 10.33,6 9.5,6C8.67,6 8,5.33 8,4.5V6C8,6.55 8.45,7 9,7H10C10.55,7 11,6.55 11,6V4.5C11,3.12 9.88,2 8.5,2H7A1,1 0 0,0 6,3V3.5C6,3.78 6.22,4 6.5,4H7C8.17,4 9,4.67 9,5.5V3.5C9,3.22 8.78,3 8.5,3M12,22C16.32,22 20.33,19.67 22,16.23C21.3,13.38 18.1,12 12,12C5.9,12 2.7,13.38 2,16.23C3.67,19.67 7.68,22 12,22M7.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,14A1.5,1.5 0 0,1 9,15.5A1.5,1.5 0 0,1 7.5,17M16.5,17A1.5,1.5 0 0,1 15,15.5A1.5,1.5 0 0,1 16.5,14A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 16.5,17Z" />
  </svg>
);

export const ApeIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className} 
        aria-hidden="true"
    >
        <path d="M12 2C9.24 2 7 4.24 7 7V12.29C5.45 12.86 4.17 13.91 3.27 15.25C2.5 16.33 2 17.6 2 19V20H8V19C8 17.61 7.5 16.34 6.73 15.25C7.81 14.12 9.26 13.33 10.88 13.06L11 17H13L13.12 13.06C14.74 13.33 16.19 14.12 17.27 15.25C16.5 16.34 16 17.61 16 19V20H22V19C22 17.6 21.5 16.33 20.73 15.25C19.83 13.91 18.55 12.86 17 12.29V7C17 4.24 14.76 2 12 2M12 4C13.66 4 15 5.34 15 7V11H9V7C9 5.34 10.34 4 12 4Z" />
    </svg>
);

export const DevilIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className} 
        aria-hidden="true"
    >
        <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 4C14.25 4 16.17 5.17 17.42 7H6.58C7.83 5.17 9.75 4 12 4M7.91 9C8.3 8.33 9.14 8 10 8S11.7 8.33 12.09 9H7.91M16.09 9C15.7 8.33 14.86 8 14 8S12.3 8.33 11.91 9H16.09M17.42 17H6.58C7.83 18.83 9.75 20 12 20S16.17 18.83 17.42 17M18 12C18 12.38 17.95 12.75 17.85 13.11L15.73 11H8.27L6.15 13.11C6.05 12.75 6 12.38 6 12S6.05 11.25 6.15 10.89L8.27 13H15.73L17.85 10.89C17.95 11.25 18 11.62 18 12Z" />
    </svg>
);

export const GlowingCatEyesIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 40" 
        className={className} 
        aria-hidden="true"
    >
        <defs>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <ellipse cx="25" cy="20" rx="15" ry="8" fill="#ff0" filter="url(#glow)" />
        <ellipse cx="75" cy="20" rx="15" ry="8" fill="#ff0" filter="url(#glow)" />
        <path d="M18 20 Q 25 24 32 20" stroke="black" strokeWidth="3" fill="none" />
        <path d="M68 20 Q 75 24 82 20" stroke="black" strokeWidth="3" fill="none" />
    </svg>
);

export const FeatherIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className} 
        aria-hidden="true"
    >
        <path d="M12,2A9,9 0 0,0 3,11C3,14.04 4.5,16.85 7,18.5V22H9V20H11V22H13V20H15V22H17V18.5C19.5,16.85 21,14.04 21,11A9,9 0 0,0 12,2M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11Z" />
    </svg>
);

export const BloodyHandprintIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        fill="currentColor" 
        className={className} 
        aria-hidden="true"
    >
        <path d="M60 40 C 50 30, 40 40, 40 50 S 45 70, 50 70 S 60 60, 60 50 S 70 30, 60 40 Z" />
        <ellipse cx="30" cy="35" rx="5" ry="10" transform="rotate(-30 30 35)" />
        <ellipse cx="40" cy="25" rx="5" ry="12" transform="rotate(-10 40 25)" />
        <ellipse cx="55" cy="20" rx="5" ry="12" />
        <ellipse cx="70" cy="25" rx="5" ry="12" transform="rotate(10 70 25)" />
        <ellipse cx="25" cy="55" rx="10" ry="5" transform="rotate(-60 25 55)" />
    </svg>
);