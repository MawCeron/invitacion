import React from 'react';
import { useSearchParams } from 'react-router-dom';
import WeddingHero from '@/components/WeddingHero';
import CountdownTimer from '@/components/CountdownTimer';
import QuoteSection from '@/components/QuoteSection';
import EventDetails from '@/components/EventDetails';
import Schedule from '@/components/Schedule';
import DressCode from '@/components/DressCode';
import RSVPSection from '@/components/RSVPSection';
import GiftRegistry from '@/components/GiftRegistry';
import MusicPlayer from '@/components/MusicPlayer';
import WeddingFooter from '@/components/WeddingFooter';

const Index = () => {
  const [searchParams] = useSearchParams();
  const invitadoId = searchParams.get('invitado');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <WeddingHero />
      
      {/* Countdown Timer */}
      <CountdownTimer />
      
      {/* Quote Section */}
      <QuoteSection />
      
      {/* Event Details */}
      <EventDetails />
      
      {/* Schedule */}
      <Schedule />
      
      {/* Dress Code */}
      <DressCode />
      
      {/* RSVP Section */}
      <RSVPSection invitadoId={invitadoId} />
      
      {/* Gift Registry */}
      <GiftRegistry />
      
      {/* Footer */}
      <WeddingFooter />
    </div>
  );
};

export default Index;
