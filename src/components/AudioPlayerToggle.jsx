import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayerToggle({ autoStart = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [usingFallbackSynth, setUsingFallbackSynth] = useState(false);
  
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const synthTimerRef = useRef(null);
  const masterGainRef = useRef(null);

  // Ethereal romantic chord progression (Hz): Dmaj9 -> F#m7 -> Bm9 -> Gadd9
  const chords = [
    [146.83, 220.00, 277.18, 369.99], // D3, A3, C#4, F#4
    [185.00, 220.00, 277.18, 369.99], // F#3, A3, C#4, F#4
    [123.47, 185.00, 220.00, 293.66], // B2, F#3, A3, D4
    [196.00, 246.94, 293.66, 369.99]  // G3, B3, D4, F#4
  ];

  // Synthesize soft romantic pad + piano notes if MP3 is missing
  const playSynthChord = (freqs, duration = 6.5) => {
    if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
    const ctx = audioCtxRef.current;
    
    freqs.forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(550, ctx.currentTime);

      const now = ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.035, now + 2.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGainRef.current || ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    });
  };

  const startSynthLoop = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
      masterGainRef.current = audioCtxRef.current.createGain();
      masterGainRef.current.gain.setValueAtTime(0.18, audioCtxRef.current.currentTime);
      masterGainRef.current.connect(audioCtxRef.current.destination);
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    let chordIdx = 0;
    playSynthChord(chords[chordIdx]);

    synthTimerRef.current = setInterval(() => {
      chordIdx = (chordIdx + 1) % chords.length;
      playSynthChord(chords[chordIdx], 6.5);
    }, 6000);
  };

  const stopSynthLoop = () => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
  };

  // Start music (tries HTML5 MP3 first, falls back to Synth)
  const startMusic = async () => {
    if (audioRef.current) {
      try {
        audioRef.current.volume = 0.18;
        await audioRef.current.play();
        setIsPlaying(true);
        setUsingFallbackSynth(false);
      } catch (err) {
        // If MP3 file is not found or fails to load, use synthesizer fallback cleanly
        startSynthLoop();
        setIsPlaying(true);
        setUsingFallbackSynth(true);
      }
    } else {
      startSynthLoop();
      setIsPlaying(true);
      setUsingFallbackSynth(true);
    }
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopSynthLoop();
    setIsPlaying(false);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  // Trigger autoStart when user clicks "Enter" on intro modal
  useEffect(() => {
    if (autoStart) {
      startMusic();
    }
  }, [autoStart]);

  // Smooth scroll volume management
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = scrollPos / (docHeight || 1);

      let targetVol = 0.18; // Default standard volume

      // Soft & intimate volume near final letter (bottom 25%)
      if (scrollRatio > 0.75) {
        targetVol = 0.12;
      } else if (scrollRatio > 0.4 && scrollRatio < 0.7) {
        // Slightly fuller volume during emotional core sections
        targetVol = 0.22;
      }

      if (audioRef.current && !usingFallbackSynth) {
        audioRef.current.volume = targetVol;
      }
      if (masterGainRef.current && audioCtxRef.current) {
        masterGainRef.current.gain.setTargetAtTime(targetVol, audioCtxRef.current.currentTime, 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [usingFallbackSynth]);

  return (
    <>
      {/* HTML5 Audio element pointing to local MP3 asset */}
      <audio
        ref={audioRef}
        src="/audio/romantic-instrumental.mp3"
        loop
        preload="auto"
        onError={() => {
          // Silent fallback setup
        }}
      />

      {/* Top-Right Fixed Music Controls */}
      <div
        style={{
          position: 'fixed',
          top: '20px',
          right: '24px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <button
          onClick={toggleMusic}
          aria-label="Toggle romantic soundtrack"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '9999px',
            background: isPlaying ? 'rgba(230, 200, 148, 0.14)' : 'rgba(18, 22, 32, 0.8)',
            border: '1px solid rgba(230, 200, 148, 0.25)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            color: isPlaying ? 'var(--accent-gold-light)' : 'var(--text-secondary)',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            boxShadow: isPlaying ? '0 0 20px rgba(230, 200, 148, 0.2)' : '0 4px 15px rgba(0,0,0,0.4)',
            transition: 'all 0.3s ease'
          }}
        >
          {isPlaying ? (
            <>
              <Volume2 size={15} className="text-gold" />
              <span>♫ Music</span>
              <span
                style={{
                  display: 'flex',
                  gap: '2px',
                  alignItems: 'flex-end',
                  height: '11px',
                  marginLeft: '2px'
                }}
              >
                <span className="eq-bar" style={{ animationDelay: '0s' }}></span>
                <span className="eq-bar" style={{ animationDelay: '0.2s' }}></span>
                <span className="eq-bar" style={{ animationDelay: '0.4s' }}></span>
              </span>
            </>
          ) : (
            <>
              <VolumeX size={15} />
              <span>♫ Paused</span>
            </>
          )}
        </button>

        <style>{`
          .eq-bar {
            width: 2px;
            height: 100%;
            background: var(--accent-gold);
            animation: eqWave 1.2s ease-in-out infinite alternate;
          }
          @keyframes eqWave {
            0% { height: 3px; }
            100% { height: 11px; }
          }
        `}</style>
      </div>
    </>
  );
}
