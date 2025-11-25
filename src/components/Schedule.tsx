import React from 'react';
import { Clock } from 'lucide-react';

const Schedule = () => {
  const events = [
    {
      time: '5:00 PM',
      title: 'Ceremonia Civil',
      description: 'Ceremonia de boda civil'
    },
    {
      time: '6:00 PM',
      title: 'Recepción',
      description: 'Cóctel de bienvenida'
    },
    {
      time: '7:30 PM',
      title: 'Cena',
      description: 'Servicio de cena'
    },
    {
      time: '9:00 PM',
      title: 'Inicio de Fiesta',
      description: '¡A bailar toda la noche!'
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
          {events.map((event, index) => (
            <div 
              key={index}
              className="romantic-card p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{event.time}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-elegant text-xl font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
