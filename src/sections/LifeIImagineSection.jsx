import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { Car, Flame, Gauge, Sparkles } from 'lucide-react';

export default function LifeIImagineSection() {
  const cars = [
    { title: 'Supercars', tag: 'Pure Passion', desc: 'V12 engines, sleek aerodynamics, track power.' },
    { title: 'Sports Coupe', tag: 'Daily Thrill', desc: 'Agile handling, twin-turbo growl, mountain roads.' },
    { title: 'Luxury SUV', tag: 'Comfort & Style', desc: 'Plush leather interiors, effortless cruising.' },
    { title: 'Grand Tourer', tag: 'Cross-Country', desc: 'Smooth long-distance continent crossing.' }
  ];

  return (
    <section id="the-life-i-imagine" className="section-container">
      <SectionHeader
        badge="07. Aspirations"
        title="The Life I Imagine."
        subtitle="Maybe someday..."
      />

      <GlassCard className="text-center mb-12">
        <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'rgba(230, 200, 148, 0.1)', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
          <Car size={28} />
        </div>

        <h3 className="font-serif text-gold" style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>
          "I know you like cars."
        </h3>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.3rem', color: 'var(--text-primary)', lineHeight: '1.8', maxWidth: '680px', margin: '0 auto 1.5rem' }}>
          So if one day you look at a car and tell me:<br />
          <span className="text-gradient-rose font-serif" style={{ fontSize: '1.5rem', fontWeight: 600 }}>"I want this car,"</span><br /><br />
          I want to be the person who responds without hesitation:<br />
          <span className="text-gold font-serif" style={{ fontSize: '1.5rem', fontWeight: 600 }}>"Okay. Which one?"</span>
        </p>

        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
          Supercar. Sports car. Luxury car. Anything that makes you stop and stare.<br />
          <strong style={{ color: 'var(--text-primary)' }}>Your dream garage should not stay a dream just because it looked too expensive.</strong>
        </p>
      </GlassCard>

      <div className="grid-2 mb-10">
        {cars.map((car, idx) => (
          <GlassCard key={idx} delay={idx * 0.1} style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span className="glass-chip">{car.tag}</span>
              <Gauge size={18} className="text-gold" />
            </div>
            <h4 className="font-serif text-gold" style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>
              {car.title}
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
              {car.desc}
            </p>
          </GlassCard>
        ))}
      </div>

      <div className="text-center">
        <p className="text-muted font-serif" style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
          "I want to build a life where the things you once called impossible become things we work toward together."
        </p>
      </div>
    </section>
  );
}
