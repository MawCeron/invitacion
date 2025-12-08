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
            Gracias por ser parte de nuestra historia
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            No podemos esperar a celebrar este nuevo capítulo de nuestras vidas con ustedes.
          </p>
          
          {/* Couple Signature */}
          <div className="romantic-card inline-block p-8">
            <p className="text-script text-3xl text-primary">
              Con todo nuestro amor,
            </p>
            <p className="text-elegant text-2xl font-semibold text-foreground mt-2">
              Lucy & Maw
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-2">
              ¿Preguntas? Puedes contactarnos para aclararlas.
            </p>
            <p className="text-xs text-muted-foreground">
              14 de Marzo, 2026 • Verde Olista Terraza y Jardín
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WeddingFooter;