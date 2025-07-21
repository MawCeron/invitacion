import React from 'react';
import { Heart } from 'lucide-react';

const WeddingFooter = () => {
  return (
    <footer className="py-16 px-4 romantic-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Decorative Hearts */}
          <div className="flex justify-center mb-8">
            <Heart className="w-6 h-6 text-accent-gold mx-2" fill="currentColor" />
            <Heart className="w-8 h-8 text-primary mx-2" fill="currentColor" />
            <Heart className="w-6 h-6 text-accent-gold mx-2" fill="currentColor" />
          </div>
          
          {/* Main Message */}
          <h2 className="text-script text-4xl md:text-5xl text-primary mb-6">
            Thank you for being part of our love story
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Your love, support, and presence mean everything to us. We can't wait to celebrate 
            this new chapter of our lives with you.
          </p>
          
          {/* Couple Signature */}
          <div className="romantic-card inline-block p-8">
            <p className="text-script text-3xl text-primary">
              With all our love,
            </p>
            <p className="text-elegant text-2xl font-semibold text-foreground mt-2">
              Sarah & James
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-2">
              Questions? Contact us at{' '}
              <a href="mailto:sarahandjames@wedding.com" className="text-primary hover:text-primary/80 transition-colors">
                sarahandjames@wedding.com
              </a>
            </p>
            <p className="text-xs text-muted-foreground">
              Wedding Website • June 15th, 2024 • Rose Garden Manor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WeddingFooter;