import React from 'react';
import WeddingHero from '@/components/WeddingHero';
import CountdownTimer from '@/components/CountdownTimer';
import QuoteSection from '@/components/QuoteSection';
import EventDetails from '@/components/EventDetails';
import DressCode from '@/components/DressCode';
import RSVPSection from '@/components/RSVPSection';
import GiftRegistry from '@/components/GiftRegistry';
import PhotoAlbum from '@/components/PhotoAlbum';
import MusicPlayer from '@/components/MusicPlayer';
import WeddingFooter from '@/components/WeddingFooter';

const Index = () => {
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
      
      {/* Dress Code */}
      <DressCode />
      
      {/* RSVP Section */}
      <RSVPSection />
      
      {/* Gift Registry */}
      <GiftRegistry />
      
      {/* Photo Album */}
      <PhotoAlbum />
      
      {/* Footer */}
      <WeddingFooter />
      
      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
};

export default Index;
