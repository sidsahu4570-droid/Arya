import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // We construct a soft ambient Web Audio synthesizer fallback so audio ALWAYS works out-of-the-box without needing external assets!
  const audioCtxRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5);
      }
      setIsPlaying(false);
    } else {
      // Try playing audio file if available, or generate soft ambient tone
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Fallback to Web Audio romantic synth chord
          startAmbientSynth();
          setIsPlaying(true);
        });
      } else {
        startAmbientSynth();
        setIsPlaying(true);
      }
    }
  };

  const startAmbientSynth = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 2);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Soft romantic warm pentatonic chord frequencies (A3, C#4, E4, G#4)
      const freqs = [220, 277.18, 329.63, 415.30];
      freqs.forEach((freq) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = freq;
        const pGain = ctx.createGain();
        pGain.gain.value = 0.25;
        osc.connect(pGain);
        pGain.connect(masterGain);
        osc.start();
      });
    } catch (e) {
      console.log('Audio init fallback', e);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} loop preload="none" src="/romantic-instrumental.mp3" />
      <button
        onClick={toggleAudio}
        aria-label="Toggle romantic music"
        className={`flex items-center gap-3 px-4 py-2.5 rounded-full border transition-all duration-300 shadow-md ${
          isPlaying
            ? 'bg-[#FFFFFF] border-[#C86D7C] text-[#9B3B52] shadow-[#C86D7C]/20 scale-105'
            : 'bg-[#FAF7F2]/90 border-[#E2B2BB] text-[#584F4C] hover:border-[#C86D7C]'
        }`}
      >
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F8EBEF] text-[#C86D7C]">
          {isPlaying ? <Volume2 size={14} className="animate-pulse" /> : <VolumeX size={14} />}
        </span>

        <span className="text-xs font-medium tracking-wide font-sans-jakarta">
          {isPlaying ? '♪ playing ambient' : '♪ play music'}
        </span>

        {isPlaying && (
          <div className="flex items-end gap-[2px] h-3.5 ml-1">
            <span className="w-[2.5px] bg-[#C86D7C] h-full animate-[bounce_1s_infinite_100ms] rounded-full"></span>
            <span className="w-[2.5px] bg-[#C86D7C] h-2/3 animate-[bounce_1s_infinite_300ms] rounded-full"></span>
            <span className="w-[2.5px] bg-[#C86D7C] h-4/5 animate-[bounce_1s_infinite_200ms] rounded-full"></span>
          </div>
        )}
      </button>
    </div>
  );
}
