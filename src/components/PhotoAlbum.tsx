import React from 'react';
import { Camera, Upload, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const PhotoAlbum = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <Camera className="w-8 h-8 text-accent-gold" />
          </div>

          <h2 className="text-elegant text-4xl md:text-5xl font-bold text-foreground mb-4">
            Álbum Compartido
          </h2>

          <p className="text-script text-2xl text-primary mb-6">
            Captura cada momento memorable
          </p>

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ayúdanos a preservar la magia de este día especial compartiendo tus fotos y videos
          </p>
        </div>

        {/* Upload Photos */}
        <div className="romantic-card p-6 mt-12 max-w-3xl mx-auto text-center hover-lift">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Camera className="w-8 h-8 text-primary" />
          </div>

          <p className="text-muted-foreground mb-6">
            Sube tus fotos favoritas y mira las que capturaron nuestros seres queridos.
          </p>

          <Link to="/album" className="button-primary inline-flex items-center justify-center">
            <Eye className="w-5 h-5 mr-2" />
            Ir al Álbum
          </Link>
        </div>

        {/* Instructions */}
        <div className="romantic-card p-6 mt-12 max-w-3xl mx-auto bg-accent/20 border-l-4 border-accent">
          <h4 className="text-elegant text-lg font-semibold text-foreground mb-4 text-center">
            Guías para Compartir Fotos
          </h4>

          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <p className="mb-2">📱 <strong>Compatible con celulares:</strong> Usa el enlace del álbum en tu teléfono o utiliza el código QR</p>
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