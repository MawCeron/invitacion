import React from 'react';
import { Heart } from 'lucide-react';
import coupleImage from '../assets/couple-silhouette.jpg';

const WeddingHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${coupleImage})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Decorative Hearts */}
          <div className="flex justify-center mb-8">
            <Heart className="w-8 h-8 text-accent-gold animate-romantic-pulse mx-2" />
            <Heart className="w-6 h-6 text-primary mt-1 animate-romantic-pulse mx-2" fill="currentColor" />
            <Heart className="w-8 h-8 text-accent-gold animate-romantic-pulse mx-2" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-elegant text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-4">
            Sarah & James
          </h1>
          
          {/* Romantic Script */}
          <p className="text-script text-3xl md:text-4xl text-primary mb-8">
            are getting married
          </p>
          
          {/* Wedding Date */}
          <div className="romantic-card inline-block px-12 py-6 mb-8">
            <p className="text-elegant text-2xl md:text-3xl font-semibold text-foreground">
              June 15th, 2024
            </p>
            <p className="text-muted-foreground text-lg mt-2">
              Save the Date
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-gentle-bounce mt-12">
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-romantic-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingHero;