import React, { useState, useEffect } from 'react';
import { Heart, CheckCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Invitado {
  id: string;
  nombre: string;
  lugares_asignados: number;
  respuesta: string | null;
}

interface RSVPSectionProps {
  invitadoId: string | null;
}

const RSVPSection = ({ invitadoId }: RSVPSectionProps) => {
  const [invitado, setInvitado] = useState<Invitado | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchInvitado = async () => {
      if (!invitadoId) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('invitados')
        .select('*')
        .eq('id', invitadoId)
        .maybeSingle();

      if (error) {
        console.error('Error fetching invitado:', error);
      }

      setInvitado(data);
      setLoading(false);
    };

    fetchInvitado();
  }, [invitadoId]);

  const handleRSVP = async (attending: boolean) => {
    if (!invitado) return;

    setUpdating(true);
    const respuesta = attending ? 'asistire' : 'no_asistire';

    const { error } = await supabase
      .from('invitados')
      .update({ respuesta })
      .eq('id', invitado.id);

    setUpdating(false);

    if (error) {
      toast({
        title: "Error",
        description: "No pudimos registrar tu respuesta. Intenta de nuevo.",
        variant: "destructive",
      });
      return;
    }

    setInvitado({ ...invitado, respuesta });

    toast({
      title: attending ? "¡Gracias por confirmar tu asistencia!" : "Gracias por avisarnos",
      description: attending 
        ? "¡No podemos esperar a celebrar contigo! 💕" 
        : "Te extrañaremos en nuestro día especial, pero lo entendemos.",
      duration: 5000,
    });
  };

  const getLugaresText = (lugares: number) => {
    return lugares === 1 ? '1 lugar asignado' : `${lugares} lugares asignados`;
  };

  // Sin UUID en la URL
  if (!invitadoId) {
    return (
      <section className="py-20 px-4 romantic-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <div className="romantic-card p-8">
            <p className="text-muted-foreground">
              Por favor utiliza el enlace de invitación que te fue enviado.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Cargando
  if (loading) {
    return (
      <section className="py-20 px-4 romantic-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <div className="romantic-card p-8">
            <Loader2 className="w-8 h-8 text-primary mx-auto animate-spin" />
            <p className="text-muted-foreground mt-4">Cargando tu invitación...</p>
          </div>
        </div>
      </section>
    );
  }

  // Invitado no encontrado
  if (!invitado) {
    return (
      <section className="py-20 px-4 romantic-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <div className="romantic-card p-8">
            <p className="text-muted-foreground">
              No pudimos encontrar tu invitación. Verifica el enlace que te fue enviado.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 romantic-gradient">
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
            {/* Nombre del invitado y lugares */}
            <p className="text-xl font-semibold text-foreground mb-6">
              {invitado.nombre} ({getLugaresText(invitado.lugares_asignados)})
            </p>

            {!invitado.respuesta ? (
              <>
                <p className="text-muted-foreground mb-8 text-lg">
                  Por favor, haznos saber si podrás celebrar con nosotros
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => handleRSVP(true)}
                    disabled={updating}
                    className="button-primary inline-flex items-center justify-center disabled:opacity-50"
                  >
                    {updating ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                    )}
                    Asistiré
                  </button>
                  
                  <button 
                    onClick={() => handleRSVP(false)}
                    disabled={updating}
                    className="button-secondary inline-flex items-center justify-center disabled:opacity-50"
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
                  {invitado.respuesta === 'asistire' 
                    ? "¡Estamos muy emocionados de celebrar contigo!"
                    : "Gracias por avisarnos. ¡Te extrañaremos!"
                  }
                </p>
                
                <button 
                  onClick={() => setInvitado({ ...invitado, respuesta: null })}
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
