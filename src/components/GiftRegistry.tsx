import React from 'react';
import { Gift, ExternalLink } from 'lucide-react';

const GiftRegistry = () => {
  const registries = [
    {
      store: 'Target',
      description: 'Home essentials and décor',
      url: '#',
      logo: '🎯'
    },
    {
      store: 'Williams Sonoma',
      description: 'Kitchen and dining',
      url: '#',
      logo: '🍽️'
    },
    {
      store: 'Honeymoon Fund',
      description: 'Help us create memories in Italy',
      url: '#',
      logo: '✈️'
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <Gift className="w-8 h-8 text-accent-gold" />
          </div>
          
          <h2 className="text-elegant text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gift Registry
          </h2>
          
          <p className="text-script text-2xl text-primary mb-6">
            Your presence is the greatest gift
          </p>
          
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            If you'd like to honor us with a gift, we've registered at a few of our favorite places
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {registries.map((registry, index) => (
            <div 
              key={registry.store}
              className="romantic-card p-8 text-center hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{registry.logo}</div>
              
              <h3 className="text-elegant text-xl font-semibold text-foreground mb-2">
                {registry.store}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {registry.description}
              </p>
              
              <button className="button-secondary group-hover:bg-primary group-hover:text-primary-foreground">
                View Registry
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="romantic-card inline-block p-6">
            <p className="text-muted-foreground">
              💕 <em>Your love and presence mean the world to us</em> 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftRegistry;