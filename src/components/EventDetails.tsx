import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import venuePhoto from '../assets/venue-photo.jpg';

const EventDetails = () => {

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
        
        {/* Event Details Card */}
        <div className="romantic-card p-8 max-w-2xl mx-auto text-center hover-lift animate-fade-in">
          <div className="space-y-8">
            {/* Fecha */}
            <div className="flex items-center justify-center space-x-4">
              <Calendar className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-elegant text-lg font-semibold text-foreground">Fecha</h3>
                <p className="text-muted-foreground">Sábado, 14 de Marzo, 2026</p>
              </div>
            </div>
            
            {/* Horario */}
            <div className="flex items-center justify-center space-x-4">
              <Clock className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-elegant text-lg font-semibold text-foreground">Horario</h3>
                <p className="text-muted-foreground">5:00 PM</p>
              </div>
            </div>
            
            {/* Ubicación */}
            <div className="flex items-center justify-center space-x-4">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-elegant text-lg font-semibold text-foreground">Ubicación</h3>
                <p className="text-muted-foreground">
                  Verde Olista<br />
                  Carr. Agostaderito Km 9.3<br />
                  Salto de los Salado, Aguascalientes, Ags.
                </p>
              </div>
            </div>
          </div>
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