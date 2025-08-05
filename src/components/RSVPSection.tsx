import React, { useState } from 'react';
import { Heart, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const RSVPSection = () => {
  const [rsvpStatus, setRsvpStatus] = useState<'pending' | 'attending' | 'not-attending'>('pending');
  const { toast } = useToast();

  const handleRSVP = (attending: boolean) => {
    setRsvpStatus(attending ? 'attending' : 'not-attending');
    
    toast({
      title: attending ? "¡Gracias por confirmar tu asistencia!" : "Gracias por avisarnos",
      description: attending 
        ? "¡No podemos esperar a celebrar contigo! 💕" 
        : "Te extrañaremos en nuestro día especial, pero lo entendemos.",
      duration: 5000,
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <Heart className="w-8 h-8 text-accent-gold" fill="currentColor" />
          </div>
          
          <h2 className="text-elegant text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Nos Acompañarás?
          </h2>
          
          <p className="text-script text-2xl text-primary mb-8">
            Tu presencia haría nuestro día aún mejor
          </p>
          
          <div className="romantic-card p-8 max-w-2xl mx-auto">
            {rsvpStatus === 'pending' ? (
              <>
                <p className="text-muted-foreground mb-8 text-lg">
                  Por favor, haznos saber si podrás celebrar con nosotros
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => handleRSVP(true)}
                    className="button-primary inline-flex items-center justify-center"
                  >
                    <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                    Asistiré
                  </button>
                  
                  <button 
                    onClick={() => handleRSVP(false)}
                    className="button-secondary inline-flex items-center justify-center"
                  >
                    No Podré Asistir
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-elegant text-2xl font-semibold text-foreground mb-2">
                  Confirmación Recibida
                </h3>
                <p className="text-muted-foreground">
                  {rsvpStatus === 'attending' 
                    ? "¡Estamos muy emocionados de celebrar contigo!"
                    : "Gracias por avisarnos. ¡Te extrañaremos!"
                  }
                </p>
                
                <button 
                  onClick={() => setRsvpStatus('pending')}
                  className="mt-6 text-primary hover:text-primary/80 transition-colors"
                >
                  Cambiar Respuesta
                </button>
              </div>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Por favor confirma antes del 1° de Febrero, 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;