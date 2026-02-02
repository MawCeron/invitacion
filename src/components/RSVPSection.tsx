import React, { useState, useEffect } from 'react';
import { Heart, CheckCircle, Loader2, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

// Período de confirmación cerrado
const RSVP_CLOSED = true;

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
            Confirmación de Asistencia
          </h2>
          
          <p className="text-script text-2xl text-primary mb-8">
            Gracias por ser parte de este día especial
          </p>

          <p className="text-sm text-muted-foreground mt-4 mb-8">
            Con cariño les compartimos que nuestra boda será un evento solo para adultos, esperamos puedan acompañarnos y agradecemos mucho su comprensión.
          </p>

          <div className="romantic-card p-8 max-w-2xl mx-auto">
            {/* Nombre del invitado y lugares */}
            <p className="text-xl font-semibold text-foreground mb-6">
              {invitado.nombre} ({getLugaresText(invitado.lugares_asignados)})
            </p>

            {/* Período de confirmación cerrado */}
            <div className="text-center">
              <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-elegant text-xl font-semibold text-foreground mb-2">
                Período de Confirmación Cerrado
              </h3>
              {invitado.respuesta ? (
                <p className="text-muted-foreground">
                  Tu respuesta registrada: <span className="font-semibold text-primary">
                    {invitado.respuesta === 'asistire' ? '¡Asistirás! 💕' : 'No podrás asistir'}
                  </span>
                </p>
              ) : (
                <p className="text-muted-foreground">
                  El período para confirmar asistencia ha finalizado.
                </p>
              )}
              <p className="text-sm text-muted-foreground mt-4">
                Si tienes alguna duda, por favor contacta directamente a los novios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
