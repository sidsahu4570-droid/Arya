import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function LifeIImagineSection() {
  const cars = [
    { title: 'Supercars', tag: 'Pure Passion', desc: 'V12 engines, sleek aerodynamics, track power.' },
    { title: 'Sports Coupe', tag: 'Daily Thrill', desc: 'Agile handling, twin-turbo growl, mountain roads.' },
    { title: 'Luxury SUV', tag: 'Comfort & Style', desc: 'Plush interiors, effortless cruising.' },
    { title: 'Grand Tourer', tag: 'Cross-Country', desc: 'Smooth long-distance continent crossing.' }
  ];

  return (
    <section id="the-life-i-imagine" className="section-container">
      <SectionHeader
        badge="aspirations"
        title="The Life I Imagine."
        subtitle="Maybe someday..."
      />

      <div
        className="glass-card text-center mb-12"
        style={{
          maxWidth: '820px',
          margin: '0 auto 3rem',
          background: 'linear-gradient(135deg, rgba(50, 19, 31, 0.8) 0%, rgba(36, 13, 23, 0.9) 100%)',
          borderColor: 'rgba(231, 184, 193, 0.25)'
        }}
      >
        <span className="handwritten-note" style={{ fontSize: '1.5rem', color: 'var(--accent-blush)' }}>
          "You want the car? Let's work for it."
        </span>

        <h3 className="font-serif text-gradient-rose" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', margin: '1rem 0' }}>
          "I know you like cars."
        </h3>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', lineHeight: 1.85, maxWidth: '680px', margin: '0 auto 1.5rem' }}>
          So if one day you look at a car and tell me:<br />
          <span className="text-blush font-serif" style={{ fontSize: '1.55rem', fontWeight: 500 }}>"I want this car,"</span><br /><br />
          I want to be the person who responds without hesitation:<br />
          <span className="text-gradient-rose font-serif" style={{ fontSize: '1.6rem', fontWeight: 600 }}>"Okay. Which one?"</span>
        </p>

        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.02rem', lineHeight: 1.7 }}>
          Supercar. Sports car. Luxury car. Anything that makes you stop and stare.<br />
          <strong style={{ color: 'var(--text-primary)' }}>Your dream garage should not stay a dream just because it looked too expensive.</strong>
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
        {cars.map((car, idx) => (
          <div
            key={idx}
            style={{
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(36, 13, 23, 0.55)',
              border: '1px solid rgba(231, 184, 193, 0.15)'
            }}
          >
            <span className="handwritten-note" style={{ fontSize: '1.15rem', color: 'var(--accent-champagne)' }}>{car.tag}</span>
            <h4 className="font-serif text-gradient-rose" style={{ fontSize: '1.35rem', margin: '0.3rem 0 0.4rem', fontWeight: 500 }}>
              {car.title}
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
              {car.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="handwritten-note" style={{ fontSize: '1.4rem', color: 'var(--accent-blush)' }}>
          "I want to build a life where the things you once called impossible become things we work toward together."
        </p>
      </div>
    </section>
  );
}
