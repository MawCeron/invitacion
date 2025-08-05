import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set wedding date - March 14th, 2026
    const weddingDate = new Date('2026-03-14T17:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-slide-up">
          <div className="flex justify-center mb-6">
            <Clock className="w-8 h-8 text-accent-gold" />
          </div>
          
          <h2 className="text-elegant text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cuenta Regresiva al Amor Eterno
          </h2>
          
          <p className="text-script text-2xl text-primary mb-12">
            El gran día se acerca
          </p>
          
          {/* Countdown Display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {timeUnits.map((unit, index) => (
              <div key={unit.label} className="romantic-card p-6 hover-lift">
                <div className="text-elegant text-4xl md:text-5xl font-bold text-primary mb-2">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="text-muted-foreground font-medium uppercase tracking-wide">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;