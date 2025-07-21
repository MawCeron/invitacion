import React from 'react';
import { MapPin, Calendar, Clock, Shirt } from 'lucide-react';

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      title: 'Date',
      info: 'Saturday, June 15th, 2024'
    },
    {
      icon: Clock,
      title: 'Time',
      info: 'Ceremony: 4:00 PM\nReception: 6:00 PM'
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'Rose Garden Manor\n123 Vineyard Lane\nNapa Valley, CA'
    },
    {
      icon: Shirt,
      title: 'Dress Code',
      info: 'Formal Attire\nBlush & Navy Preferred'
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-elegant text-4xl md:text-5xl font-bold text-foreground mb-4">
            Wedding Details
          </h2>
          <p className="text-script text-2xl text-primary">
            All the important information
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <button className="button-primary">
            <MapPin className="w-5 h-5 mr-2" />
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;