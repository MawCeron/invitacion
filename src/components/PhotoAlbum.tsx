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
            Share Our Memories
          </h2>
          
          <p className="text-script text-2xl text-primary mb-6">
            Capture every beautiful moment
          </p>
          
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Help us preserve the magic of our special day by sharing your photos and videos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Upload Photos */}
          <div className="romantic-card p-8 text-center hover-lift">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-elegant text-2xl font-semibold text-foreground mb-4">
              Upload Photos
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Share your favorite moments from our celebration
            </p>
            
            <button className="button-primary">
              <Upload className="w-5 h-5 mr-2" />
              Add Photos
            </button>
          </div>
          
          {/* View Album */}
          <div className="romantic-card p-8 text-center hover-lift">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            
            <h3 className="text-elegant text-2xl font-semibold text-foreground mb-4">
              View Album
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Browse through all the wonderful memories shared by our guests
            </p>
            
            <button className="button-secondary">
              <Eye className="w-5 h-5 mr-2" />
              View Gallery
            </button>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="romantic-card p-6 mt-12 max-w-3xl mx-auto">
          <h4 className="text-elegant text-lg font-semibold text-foreground mb-4 text-center">
            Photo Sharing Guidelines
          </h4>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <p className="mb-2">📱 <strong>Mobile friendly:</strong> Use the album link on your phone</p>
              <p className="mb-2">📸 <strong>All formats welcome:</strong> Photos, videos, and boomerangs</p>
            </div>
            <div>
              <p className="mb-2">❤️ <strong>Keep it classy:</strong> Family-friendly content only</p>
              <p>⚡ <strong>Upload anytime:</strong> Before, during, and after the wedding</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoAlbum;