import React from 'react';
import { Quote } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <Quote className="w-12 h-12 text-accent-gold" />
          </div>
          
          <blockquote className="text-elegant text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
            "Lo pensamos, lo meditamos, lo analizamos... y finalmente dijimos: ¡Si lo vamos a hacer, hay que hacerlo ya!"
          </blockquote>
          
          <cite className="text-script text-xl text-primary">
            - Lucy & Maw
          </cite>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;