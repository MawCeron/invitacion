import React from 'react';
import { Shirt, Users } from 'lucide-react';

const DressCode = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <Shirt className="w-12 h-12 text-accent-gold" />
          </div>
          
          <h2 className="text-elegant text-4xl md:text-5xl font-bold text-foreground mb-4">
            Código de Vestimenta
          </h2>
          <p className="text-script text-2xl text-primary">
            ¡Queremos que luzcas increíble en cada foto!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* For Men */}
          <div className="romantic-card p-8 text-center hover-lift">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h3 className="text-elegant text-2xl font-semibold text-foreground mb-4">
              Para Ellos
            </h3>
            
            <ul className="text-muted-foreground leading-relaxed space-y-2 text-left">
              <li>• Traje formal</li>
              <li>• Camisa de vestir</li>
              <li>• Corbata o moño</li>
            </ul>
          </div>
          
          {/* For Women */}
          <div className="romantic-card p-8 text-center hover-lift">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h3 className="text-elegant text-2xl font-semibold text-foreground mb-4">
              Para Ellas
            </h3>
            
            <ul className="text-muted-foreground leading-relaxed space-y-2 text-left">
              <li>• Vestido formal o elegante</li>
              <li>• Zapatos cómodos</li>
              <li>• Accesorios discretos</li>
            </ul>
          </div>
        </div>
        
        {/* Important Note */}
        <div className="romantic-card p-6 bg-accent/20 border-l-4 border-accent">
          <p className="text-center text-foreground font-medium">
            <strong>Importante:</strong> Te pedimos amablemente evitar los tonos blanco, beige y rojo. 
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default DressCode;