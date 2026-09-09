import React from 'react';
import StarfieldCanvas from './components/StarfieldCanvas';
import AudioPlayerToggle from './components/AudioPlayerToggle';
import ScrollProgress from './components/ScrollProgress';

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
  return (
    <main style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Background Romantic Sunlight Canvas */}
      <StarfieldCanvas />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Top-Right Audio Player Controls */}
      <AudioPlayerToggle />

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
          borderTop: '1px solid rgba(217, 107, 131, 0.15)',
          position: 'relative',
          zIndex: 2
        }}
      >
        <p className="font-serif" style={{ fontSize: '1rem', color: 'var(--accent-rose)' }}>
          Made with care by Siddharth for Arya • {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
