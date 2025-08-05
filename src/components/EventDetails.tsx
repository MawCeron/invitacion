import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import venuePhoto from '../assets/venue-photo.jpg';

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      title: 'Fecha',
      info: 'Sábado, 15 de Junio, 2024'
    },
    {
      icon: Clock,
      title: 'Horario',
      info: 'Ceremonia: 4:00 PM\nRecepción: 6:00 PM'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      info: 'Jardín de Rosas Manor\n123 Vineyard Lane\nNapa Valley, CA'
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-elegant text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Cuándo y Dónde?
          </h2>
          <p className="text-script text-2xl text-primary">
            Toda la información importante
          </p>
        </div>
        
        {/* Venue Photo */}
        <div className="mb-16 animate-fade-in">
          <div className="romantic-card overflow-hidden">
            <img 
              src={venuePhoto} 
              alt="Venue" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {details.map((detail, index) => {
            const IconComponent = detail.icon;
            
            return (
              <div 
                key={detail.title}
                className="romantic-card p-8 text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-elegant text-xl font-semibold text-foreground mb-4">
                  {detail.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {detail.info}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Map/Directions Button */}
        <div className="text-center mt-12">
          <button className="button-primary inline-flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            Obtener Direcciones
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;