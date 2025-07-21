import React, { useState } from 'react';
import { Heart, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const RSVPSection = () => {
  const [rsvpStatus, setRsvpStatus] = useState<'pending' | 'attending' | 'not-attending'>('pending');
  const { toast } = useToast();

  const handleRSVP = (attending: boolean) => {
    setRsvpStatus(attending ? 'attending' : 'not-attending');
    
    toast({
      title: attending ? "Thank you for your RSVP!" : "Thank you for letting us know",
      description: attending 
        ? "We can't wait to celebrate with you! 💕" 
        : "We'll miss you on our special day, but we understand.",
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
            Will You Join Us?
          </h2>
          
          <p className="text-script text-2xl text-primary mb-8">
            Your presence would make our day complete
          </p>
          
          <div className="romantic-card p-8 max-w-2xl mx-auto">
            {rsvpStatus === 'pending' ? (
              <>
                <p className="text-muted-foreground mb-8 text-lg">
                  Please let us know if you'll be able to celebrate with us
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => handleRSVP(true)}
                    className="button-primary flex items-center justify-center"
                  >
                    <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                    I Will Attend
                  </button>
                  
                  <button 
                    onClick={() => handleRSVP(false)}
                    className="button-secondary flex items-center justify-center"
                  >
                    Can't Make It
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-elegant text-2xl font-semibold text-foreground mb-2">
                  RSVP Confirmed
                </h3>
                <p className="text-muted-foreground">
                  {rsvpStatus === 'attending' 
                    ? "We're so excited to celebrate with you!"
                    : "Thank you for letting us know. We'll miss you!"
                  }
                </p>
                
                <button 
                  onClick={() => setRsvpStatus('pending')}
                  className="mt-6 text-primary hover:text-primary/80 transition-colors"
                >
                  Change Response
                </button>
              </div>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Please RSVP by May 1st, 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;