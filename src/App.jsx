import React, { useState, useEffect, useRef, Suspense } from 'react';
import HeroSection from './sections/HeroSection';
import StarfieldCanvas from './components/StarfieldCanvas';
import AudioPlayerToggle from './components/AudioPlayerToggle';
import ScrollProgress from './components/ScrollProgress';

// Import CSS
import './styles/global.css';
import './styles/typography.css';
import './styles/glassmorphism.css';

// Viewport-based lazy section loader (Downloads section JS on-demand when scrolling within 600px)
function ViewportLazySection({ importFunc, minHeight = '400px' }) {
  const [Component, setComponent] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          importFunc().then((mod) => {
            setComponent(() => mod.default);
          });
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px 600px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [importFunc]);

  return (
    <div ref={containerRef} style={{ minHeight: Component ? 'auto' : minHeight }}>
      {Component ? (
        <Suspense fallback={null}>
          <Component />
        </Suspense>
      ) : null}
    </div>
  );
}

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

      {/* Below-the-fold Story Sections (JS chunks requested ON DEMAND as user scrolls down) */}
      <ViewportLazySection importFunc={() => import('./sections/HowItStartedSection')} minHeight="600px" />
      <ViewportLazySection importFunc={() => import('./sections/VibesMatterSection')} minHeight="600px" />
      <ViewportLazySection importFunc={() => import('./sections/ThingsINoticeSection')} minHeight="600px" />
      <ViewportLazySection importFunc={() => import('./sections/YourFreedomSection')} minHeight="600px" />
      <ViewportLazySection importFunc={() => import('./sections/FoodAndCareSection')} minHeight="600px" />
      <ViewportLazySection importFunc={() => import('./sections/LittleThingsSection')} minHeight="600px" />
      <ViewportLazySection importFunc={() => import('./sections/LifeIImagineSection')} minHeight="600px" />
      <ViewportLazySection importFunc={() => import('./sections/TheWorldSection')} minHeight="600px" />
      <ViewportLazySection importFunc={() => import('./sections/MyFamilySection')} minHeight="600px" />
      <ViewportLazySection importFunc={() => import('./sections/AngrySection')} minHeight="600px" />
      <ViewportLazySection importFunc={() => import('./sections/DrinkingSection')} minHeight="600px" />
      <ViewportLazySection importFunc={() => import('./sections/SafetySection')} minHeight="600px" />
      <ViewportLazySection importFunc={() => import('./sections/WhatIReallyWantSection')} minHeight="600px" />
      <ViewportLazySection importFunc={() => import('./sections/FutureChaptersSection')} minHeight="600px" />
      <ViewportLazySection importFunc={() => import('./sections/FinalLetterSection')} minHeight="600px" />
      <ViewportLazySection importFunc={() => import('./sections/ClosingMomentSection')} minHeight="600px" />
    </main>
  );
}
