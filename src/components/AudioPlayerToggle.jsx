import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayerToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  // Ethereal ambient chord frequencies (Hz): Dmaj9 / F#m7 / Bm9 / Gadd9
  const chords = [
    [146.83, 220.00, 277.18, 369.99], // D3, A3, C#4, F#4
    [185.00, 220.00, 277.18, 369.99], // F#3, A3, C#4, F#4
    [123.47, 185.00, 220.00, 293.66], // B2, F#3, A3, D4
    [196.00, 246.94, 293.66, 369.99]  // G3, B3, D4, F#4
  ];

  const playChord = (freqs, duration = 6) => {
    if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
    const ctx = audioCtxRef.current;
    
    freqs.forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Lowpass filter for soft warm acoustic tone
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, ctx.currentTime);

      // Envelope: soft fade in and out
      const now = ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.04, now + 2); // Soft volume
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    });
  };

  const startAmbientLoop = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    let chordIndex = 0;
    playChord(chords[chordIndex]);

    timerRef.current = setInterval(() => {
      chordIndex = (chordIndex + 1) % chords.length;
      playChord(chords[chordIndex], 6);
    }, 5500);
  };

  const stopAmbientLoop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.suspend();
    }
  };

  const toggleAudio = () => {
    if (!isPlaying) {
      startAmbientLoop();
      setIsPlaying(true);
    } else {
      stopAmbientLoop();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientLoop();
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 99,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      <button
        onClick={toggleAudio}
        aria-label="Toggle ambient music"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 18px',
          borderRadius: '9999px',
          background: isPlaying ? 'rgba(230, 200, 148, 0.15)' : 'rgba(20, 25, 36, 0.75)',
          border: '1px solid rgba(230, 200, 148, 0.25)',
          backdropFilter: 'blur(16px)',
          color: isPlaying ? '#e6c894' : '#c4bdae',
          fontSize: '0.85rem',
          cursor: 'pointer',
          boxShadow: isPlaying ? '0 0 20px rgba(230, 200, 148, 0.2)' : '0 4px 15px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease'
        }}
      >
        {isPlaying ? (
          <>
            <Volume2 size={16} className="text-gold" />
            <span style={{ fontWeight: 500 }}>Ambient Sound</span>
            <span
              style={{
                display: 'flex',
                gap: '2px',
                alignItems: 'flex-end',
                height: '12px',
                marginLeft: '4px'
              }}
            >
              <span className="wave-bar" style={{ animationDelay: '0s' }}></span>
              <span className="wave-bar" style={{ animationDelay: '0.2s' }}></span>
              <span className="wave-bar" style={{ animationDelay: '0.4s' }}></span>
            </span>
          </>
        ) : (
          <>
            <VolumeX size={16} />
            <span>Music Off</span>
          </>
        )}
      </button>

      <style>{`
        .wave-bar {
          width: 2px;
          height: 100%;
          background: #e6c894;
          animation: wave 1.2s ease-in-out infinite alternate;
        }
        @keyframes wave {
          0% { height: 3px; }
          100% { height: 12px; }
        }
      `}</style>
    </div>
  );
}
