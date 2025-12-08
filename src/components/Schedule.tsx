import React from 'react';
import { Clock, Heart, Beer, UtensilsCrossed, Music, PartyPopper } from 'lucide-react';

const Schedule = () => {
  const events = [
    {
      time: '4.30 PM',
      title: 'Ceremonia Civil',
      description: 'El "Sí, Acepto"',
      icon: Heart
    },
    {
      time: '5:00 PM',
      title: 'Recepción',
      description: 'Cervezas de bienvenida',
      icon: Beer
    },
    {
      time: '6.00 PM',
      title: 'Cena',
      description: '¡A disfrutar la comida!',
      icon: UtensilsCrossed
    },
    {
      time: '7:00 PM',
      title: 'Baile de los Novios',
      description: 'Al menos lo intentaremos',
      icon: Music
    },
    {
      time: '7:30 PM',
      title: '¡Empieza la Fiesta!',
      description: 'A darlo todo en la pista',
      icon: PartyPopper
    } 
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <Clock className="w-8 h-8 text-accent-gold" />
          </div>
          
          <h2 className="text-elegant text-4xl md:text-5xl font-bold text-foreground mb-4">
            Horario del Día
          </h2>
          
          <p className="text-script text-2xl text-primary mb-6">
            Programa de Eventos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div 
                key={index}
                className="romantic-card p-6 hover-lift text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-elegant text-xl font-semibold text-foreground mb-1">
                      {event.title}
                    </h3>
                    <p className="text-primary font-bold text-sm mb-2">
                      {event.time}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
