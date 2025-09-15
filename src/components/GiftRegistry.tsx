import React from 'react';
import { Gift, ExternalLink } from 'lucide-react';
import liverpoolLogo from '@/assets/liverpool.png';

const GiftRegistry = () => {
  const registries = [
    {
      store: 'Liverpool',
      description: '51764805',
      url: 'https://mesaderegalos.liverpool.com.mx/milistaderegalos/51764805',
      logo: liverpoolLogo
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
            Mesa de Regalos
          </h2>
          
          <p className="text-script text-2xl text-primary mb-6">
            Tu presencia es el mejor regalo
          </p>
          
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pero, si deseas obsequiarnos algo, no nos quejamos
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
          {registries.map((registry, index) => (
            <div 
              key={registry.store}
              className="romantic-card p-8 text-center hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <img src={registry.logo} alt="Liverpool logo" className="w-6 h-6" />
              </div>
              
              <h3 className="text-elegant text-xl font-semibold text-foreground mb-2">
                {registry.store}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {registry.description}
              </p>
              
              <a 
                href={registry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary group-hover:bg-primary group-hover:text-primary-foreground inline-flex items-center justify-center"
              >
                Ver Lista
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="romantic-card inline-block p-6">
            <p className="text-muted-foreground">
              💕 <em>Su amor y presencia significan mucho para nosotros</em> 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftRegistry;