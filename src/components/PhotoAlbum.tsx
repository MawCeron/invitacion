import React from 'react';
import { Camera, Upload, Eye } from 'lucide-react';

const PhotoAlbum = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <Camera className="w-8 h-8 text-accent-gold" />
          </div>
          
          <h2 className="text-elegant text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comparte Nuestros Recuerdos
          </h2>
          
          <p className="text-script text-2xl text-primary mb-6">
            Captura cada momento memorable
          </p>
          
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ayúdanos a preservar la magia de este día especial compartiendo tus fotos y videos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Upload Photos */}
          <div className="romantic-card p-8 text-center hover-lift">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-elegant text-2xl font-semibold text-foreground mb-4">
              Subir Fotos
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Comparte tus momentos favoritos de nuestra celebración
            </p>
            
            <button className="button-primary inline-flex items-center justify-center">
              <Upload className="w-5 h-5 mr-2" />
              Agregar Fotos
            </button>
          </div>
          
          {/* View Album */}
          <div className="romantic-card p-8 text-center hover-lift">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            
            <h3 className="text-elegant text-2xl font-semibold text-foreground mb-4">
              Ver Álbum
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Navega por todos los hermosos recuerdos compartidos por nuestros invitados
            </p>
            
            <button className="button-secondary inline-flex items-center justify-center">
              <Eye className="w-5 h-5 mr-2" />
              Ver Galería
            </button>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="romantic-card p-6 mt-12 max-w-3xl mx-auto">
          <h4 className="text-elegant text-lg font-semibold text-foreground mb-4 text-center">
            Guías para Compartir Fotos
          </h4>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <p className="mb-2">📱 <strong>Compatible con celulares:</strong> Usa el enlace del álbum en tu teléfono</p>
              <p className="mb-2">📸 <strong>Todos los formatos bienvenidos:</strong> Fotos, videos y boomerangs</p>
            </div>
            <div>
              <p className="mb-2">❤️ <strong>Mantén la elegancia:</strong> Solo contenido familiar</p>
              <p>⚡ <strong>Sube cuando quieras:</strong> Antes, durante y después de la boda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoAlbum;