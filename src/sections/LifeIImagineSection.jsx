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
        title="Your Dream Garage."
        subtitle="Maybe someday..."
      />

      <div
        style={{
          maxWidth: '780px',
          margin: '0 auto 3rem',
          textAlign: 'center'
        }}
      >
        <span className="handwritten-note" style={{ fontSize: '1.55rem', color: 'var(--accent-rose)' }}>
          ♡ "You want the car? Let's work for it."
        </span>

        <h3 className="font-serif text-gradient-rose" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', margin: '1rem 0', fontWeight: 400 }}>
          "I know you like cars."
        </h3>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.35rem', color: 'var(--text-deep)', lineHeight: 1.85, maxWidth: '680px', margin: '0 auto 1.5rem' }}>
          So if one day you look at a car and tell me:<br />
          <span className="text-rose font-serif" style={{ fontSize: '1.55rem', fontWeight: 500 }}>"I want this car,"</span><br /><br />
          I want to be the person who responds without hesitation:<br />
          <span className="text-gradient-rose font-serif" style={{ fontSize: '1.6rem', fontWeight: 500 }}>"Okay. Which one?"</span>
        </p>

        <p style={{ color: 'var(--text-body)', maxWidth: '600px', margin: '0 auto', fontSize: '1.02rem', lineHeight: 1.7 }}>
          Supercar. Sports car. Luxury car. Anything that makes you stop and stare.<br />
          <strong style={{ color: 'var(--text-deep)' }}>Your dream garage should not stay a dream just because it looked too expensive.</strong>
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {cars.map((car, idx) => (
          <div
            key={idx}
            style={{
              paddingBottom: '1rem',
              borderBottom: '1px stroke rgba(217, 107, 131, 0.15)'
            }}
          >
            <span className="handwritten-note" style={{ fontSize: '1.25rem', color: 'var(--accent-rose)' }}>♡ {car.tag}</span>
            <h4 className="font-serif text-gradient-rose" style={{ fontSize: '1.35rem', margin: '0.2rem 0 0.4rem', fontWeight: 400 }}>
              {car.title}
            </h4>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', margin: 0 }}>
              {car.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="handwritten-note" style={{ fontSize: '1.45rem', color: 'var(--accent-rose)' }}>
          "I want to build a life where the things you once called impossible become things we work toward together."
        </p>
      </div>
    </section>
  );
}
