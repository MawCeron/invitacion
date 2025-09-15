import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import MakeYouFeelMyLove from '@/assets/MakeYouFeelMyLove.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Intentar reproducir automáticamente
      audio.play().catch(() => {
        // Si falla (ej. política del navegador), mantener el estado en false
        setIsPlaying(false);
      });

      // Eventos para sincronizar el estado
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);

      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="romantic-card p-4 flex items-center space-x-3 bg-card/95 backdrop-blur-sm">
        <audio ref={audioRef} loop>
          <source src={MakeYouFeelMyLove} type="audio/mpeg" />
        </audio>
        
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>
        
        <button
          onClick={toggleMute}
          className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-muted-foreground" />
          ) : (
            <Volume2 className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
        
        <div className="text-sm text-muted-foreground">
          <div className="font-medium">Make You Feel My Love</div>
          <div className="text-xs">Adele</div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;