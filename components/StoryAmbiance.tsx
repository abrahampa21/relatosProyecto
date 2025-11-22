import React from "react";
import { AnimationType } from "../types";
// FIX: The BlackCatIcon component was used but not imported.
import {
  RavenIcon,
  GlowingCatEyesIcon,
  ApeIcon,
  DevilIcon,
  FeatherIcon,
  BloodyHandprintIcon,
  BlackCatIcon,
} from "./icons";

interface StoryAmbianceProps {
  animationType: AnimationType;
  scrollProgress: number;
}

const StoryAmbiance: React.FC<StoryAmbianceProps> = ({
  animationType,
  scrollProgress,
}) => {
  const RavenAmbiance = () => (
    <>
      {/* Flying Ravens */}
      <div
        className="fixed top-[10%] -left-24 w-20 h-20 text-gray-900 transition-transform duration-[4000ms] ease-in-out"
        style={{
          transform: `translateX(${
            scrollProgress > 20 ? "120vw" : "0"
          }) rotate(15deg)`,
          opacity: 0.8,
        }}
      >
        <RavenIcon />
      </div>
      <div
        className="fixed top-[60%] -right-24 w-24 h-24 text-gray-900 transition-transform duration-[5000ms] ease-out"
        style={{
          transform: `translateX(${
            scrollProgress > 60 ? "-120vw" : "0"
          }) rotate(-25deg)`,
        }}
      >
        <RavenIcon />
      </div>
      {/* Fading "Nevermore" text */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-8xl text-red-900/50 transition-opacity duration-1000"
        style={{ opacity: scrollProgress > 45 && scrollProgress < 55 ? 1 : 0 }}
      >
        Nevermore
      </div>
      {/* Falling Feathers */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="fixed w-4 h-4 text-black transition-transform duration-[3000ms] ease-linear"
          style={{
            top: "-5%",
            left: `${10 + i * 20}%`,
            transform: `translateY(${
              scrollProgress > 15 * (i + 1) ? "105vh" : "0"
            }) rotate(${i * 30}deg)`,
            transitionDelay: `${i * 200}ms`,
          }}
        >
          <FeatherIcon />
        </div>
      ))}
    </>
  );

  const BlackCatAmbiance = () => (
    <>
      {/* Glowing Eyes */}
      <div
        className="fixed top-1/4 right-8 w-24 h-24 transition-opacity duration-1000"
        style={{
          opacity: scrollProgress > 30 && scrollProgress < 50 ? 0.7 : 0,
        }}
      >
        <GlowingCatEyesIcon />
      </div>
      <div
        className="fixed bottom-1/4 left-8 w-24 h-24 transition-opacity duration-1000"
        style={{
          opacity: scrollProgress > 70 && scrollProgress < 90 ? 0.7 : 0,
        }}
      >
        <GlowingCatEyesIcon />
      </div>

      {/* Scratch marks */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 transition-all duration-300"
        style={{
          opacity: scrollProgress > 55 && scrollProgress < 58 ? 1 : 0,
          transform: `scale(${
            scrollProgress > 55 && scrollProgress < 58 ? 1.2 : 1
          }) rotate(-15deg)`,
        }}
      >
        <div className="absolute w-full h-1 bg-red-500 rounded-full top-1/3 -rotate-12" />
        <div className="absolute w-full h-1 bg-red-500 rounded-full top-1/2" />
        <div className="absolute w-full h-1 bg-red-500 rounded-full top-2/3 rotate-12" />
      </div>
      {/* Darting cat silhouette */}
      <div
        className="fixed bottom-0 -left-32 w-24 h-24 text-black transition-transform duration-500 ease-in"
        style={{
          transform: `translateX(${
            scrollProgress > 85 && scrollProgress < 90 ? "120vw" : "0"
          })`,
        }}
      >
        <BlackCatIcon />
      </div>
    </>
  );

  const MorgueAmbiance = () => (
    <>
      {/* Looming Ape Shadow */}
      <div
        className="fixed inset-0 flex items-center justify-center transition-opacity duration-2000"
        style={{
          opacity: scrollProgress > 60 && scrollProgress < 75 ? 0.15 : 0,
        }}
      >
        <ApeIcon className="w-[50vw] h-[50vh] text-black" />
      </div>
      {/* Bloody Handprint */}
      <div
        className="fixed top-1/4 right-10 w-24 h-24 text-red-800 transition-opacity duration-1000"
        style={{
          opacity: scrollProgress > 25 && scrollProgress < 35 ? 0.6 : 0,
        }}
      >
        <BloodyHandprintIcon />
      </div>
      {/* Flashing blood stains */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(139, 0, 0, 0.3) 0%, transparent 20%)",
          opacity: scrollProgress > 40 && scrollProgress < 45 ? 1 : 0,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at 80% 70%, rgba(139, 0, 0, 0.2) 0%, transparent 15%)",
          opacity: scrollProgress > 80 && scrollProgress < 85 ? 1 : 0,
        }}
      />
    </>
  );

  const BelfryAmbiance = () => (
    <>
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-48 w-2 bg-gray-700"
        style={{
          transformOrigin: "top center",
          animation:
            scrollProgress > 10 ? `swing 4s ease-in-out infinite` : "none",
        }}
      >
        <style>
          {`
                @keyframes swing {
                    0% { transform: rotate(15deg); }
                    50% { transform: rotate(-15deg); }
                    100% { transform: rotate(15deg); }
                }
                `}
        </style>
        <div className="absolute -bottom-12 -left-5 w-12 h-12">
          <DevilIcon className="text-red-800" />
        </div>
      </div>
      <div className="fixed inset-0 flex items-center justify-center">
        {[...Array(13)].map((_, i) => (
          <div
            key={i}
            className="absolute font-display text-5xl text-gray-500 transition-all duration-700 ease-out"
            style={{
              opacity: scrollProgress > 65 && scrollProgress < 75 ? 0 : 1,
              transform: `
                            rotate(${
                              scrollProgress > 65 && scrollProgress < 75
                                ? (i * 27.6 - 90) * 3
                                : i * 27.6 - 90
                            }deg) 
                            translateY(${
                              scrollProgress > 65 && scrollProgress < 75
                                ? "40vh"
                                : "0"
                            })
                            scale(${
                              scrollProgress > 65 && scrollProgress < 75 ? 2 : 0
                            })
                        `,
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </>
  );

  const renderAmbiance = () => {
    switch (animationType) {
      case AnimationType.Raven:
        return <RavenAmbiance />;
      case AnimationType.BlackCat:
        return <BlackCatAmbiance />;
      case AnimationType.Morgue:
        return <MorgueAmbiance />;
      case AnimationType.Belfry:
        return <BelfryAmbiance />;
      default:
        return null;
    }
  };

  return (
    <div className="pointer-events-none z-0 fixed inset-0">
      {renderAmbiance()}
    </div>
  );
};

export default StoryAmbiance;
