import React, { Suspense, lazy } from 'react';
import HeroSection from './sections/HeroSection';
import StarfieldCanvas from './components/StarfieldCanvas';
import AudioPlayerToggle from './components/AudioPlayerToggle';
import ScrollProgress from './components/ScrollProgress';

// Import CSS
import './styles/global.css';
import './styles/typography.css';
import './styles/glassmorphism.css';

// Lazily load below-the-fold story sections to ensure instant Hero render
const HowItStartedSection = lazy(() => import('./sections/HowItStartedSection'));
const VibesMatterSection = lazy(() => import('./sections/VibesMatterSection'));
const ThingsINoticeSection = lazy(() => import('./sections/ThingsINoticeSection'));
const YourFreedomSection = lazy(() => import('./sections/YourFreedomSection'));
const FoodAndCareSection = lazy(() => import('./sections/FoodAndCareSection'));
const LittleThingsSection = lazy(() => import('./sections/LittleThingsSection'));
const LifeIImagineSection = lazy(() => import('./sections/LifeIImagineSection'));
const TheWorldSection = lazy(() => import('./sections/TheWorldSection'));
const MyFamilySection = lazy(() => import('./sections/MyFamilySection'));
const AngrySection = lazy(() => import('./sections/AngrySection'));
const DrinkingSection = lazy(() => import('./sections/DrinkingSection'));
const SafetySection = lazy(() => import('./sections/SafetySection'));
const WhatIReallyWantSection = lazy(() => import('./sections/WhatIReallyWantSection'));
const FutureChaptersSection = lazy(() => import('./sections/FutureChaptersSection'));
const FinalLetterSection = lazy(() => import('./sections/FinalLetterSection'));
const ClosingMomentSection = lazy(() => import('./sections/ClosingMomentSection'));

export default function App() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Background Romantic Sunlight Canvas */}
      <StarfieldCanvas />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Top-Right Audio Player Controls */}
      <AudioPlayerToggle />

      {/* Hero Section (Renders immediately on initial load) */}
      <HeroSection />

      {/* Below-the-fold Story Sections (Lazy loaded) */}
      <Suspense fallback={null}>
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
      </Suspense>
    </main>
  );
}
