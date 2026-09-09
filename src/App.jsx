import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import StarfieldCanvas from './components/StarfieldCanvas';
import AudioPlayerToggle from './components/AudioPlayerToggle';
import ScrollProgress from './components/ScrollProgress';
import HeadphonesIntroModal from './components/HeadphonesIntroModal';

// Import CSS
import './styles/global.css';
import './styles/typography.css';
import './styles/glassmorphism.css';

// Import All 17 Sections
import HeroSection from './sections/HeroSection';
import HowItStartedSection from './sections/HowItStartedSection';
import VibesMatterSection from './sections/VibesMatterSection';
import ThingsINoticeSection from './sections/ThingsINoticeSection';
import YourFreedomSection from './sections/YourFreedomSection';
import FoodAndCareSection from './sections/FoodAndCareSection';
import LittleThingsSection from './sections/LittleThingsSection';
import LifeIImagineSection from './sections/LifeIImagineSection';
import TheWorldSection from './sections/TheWorldSection';
import MyFamilySection from './sections/MyFamilySection';
import AngrySection from './sections/AngrySection';
import DrinkingSection from './sections/DrinkingSection';
import SafetySection from './sections/SafetySection';
import WhatIReallyWantSection from './sections/WhatIReallyWantSection';
import FutureChaptersSection from './sections/FutureChaptersSection';
import FinalLetterSection from './sections/FinalLetterSection';
import ClosingMomentSection from './sections/ClosingMomentSection';

export default function App() {
  const [showIntroModal, setShowIntroModal] = useState(true);
  const [autoStartAudio, setAutoStartAudio] = useState(false);

  const handleEnterExperience = () => {
    setShowIntroModal(false);
    setAutoStartAudio(true);
  };

  return (
    <main style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Headphones Intro Modal */}
      <AnimatePresence>
        {showIntroModal && (
          <HeadphonesIntroModal onEnter={handleEnterExperience} />
        )}
      </AnimatePresence>

      {/* Background Starfield Canvas */}
      <StarfieldCanvas />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Top-Right Audio Player Controls */}
      <AudioPlayerToggle autoStart={autoStartAudio} />

      {/* Main Experience Flow (17 Sections) */}
      <HeroSection />
      <HowItStartedSection />
      <VibesMatterSection />
      <ThingsINoticeSection />
      <YourFreedomSection />
      <FoodAndCareSection />
      <LittleThingsSection />
      <LifeIImagineSection />
      <TheWorldSection />
      <MyFamilySection />
      <AngrySection />
      <DrinkingSection />
      <SafetySection />
      <WhatIReallyWantSection />
      <FutureChaptersSection />
      <FinalLetterSection />
      <ClosingMomentSection />

      {/* Minimal Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '2.5rem 1rem',
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          borderTop: '1px solid rgba(230, 200, 148, 0.08)',
          position: 'relative',
          zIndex: 2
        }}
      >
        <p className="font-serif" style={{ fontSize: '1rem', color: 'var(--accent-gold-light)' }}>
          Made with care by Siddharth for Arya • {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
