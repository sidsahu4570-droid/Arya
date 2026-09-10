import React from 'react';
import ScrollProgress from './components/ScrollProgress';
import BackgroundEffect from './components/BackgroundEffect';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TimelineSection from './components/TimelineSection';
import VibesSection from './components/VibesSection';
import NoticeSection from './components/NoticeSection';
import SpaceSection from './components/SpaceSection';
import FoodSection from './components/FoodSection';
import LittleThingsSection from './components/LittleThingsSection';
import DreamsSection from './components/DreamsSection';
import TravelSection from './components/TravelSection';
import FamilySection from './components/FamilySection';
import ConflictSection from './components/ConflictSection';
import DrinkSection from './components/DrinkSection';
import SafetySection from './components/SafetySection';
import WantSection from './components/WantSection';
import FutureSection from './components/FutureSection';
import LetterSection from './components/LetterSection';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen paper-grain selection:bg-[#F8EBEF] selection:text-[#9B3B52]">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Ambient Canvas Particle Overlay */}
      <BackgroundEffect />

      {/* Floating Navigation Header */}
      <Navigation />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero />
        <TimelineSection />
        <VibesSection />
        <NoticeSection />
        <SpaceSection />
        <FoodSection />
        <LittleThingsSection />
        <DreamsSection />
        <TravelSection />
        <FamilySection />
        <ConflictSection />
        <DrinkSection />
        <SafetySection />
        <WantSection />
        <FutureSection />
        <LetterSection />
        <ClosingSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
