import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function LifeIImagineSection() {
  const cars = [
    { title: 'Supercar', tag: 'A Possibility', desc: 'V12 engines, sleek aerodynamics, track power.' },
    { title: 'Sports Coupe', tag: 'If You Ever Wish', desc: 'Agile handling, twin-turbo growl, mountain roads.' },
    { title: 'Luxury SUV', tag: 'Pure Comfort', desc: 'Plush interiors, effortless cruising.' },
    { title: 'Grand Tourer', tag: 'Whatever You Love', desc: 'Smooth long-distance continent crossing.' }
  ];

  return (
    <section id="the-life-i-imagine" className="section-container">
      <SectionHeader
        badge="aspirations"
        title="Some Dreams I'd Love To Fulfil."
        subtitle="If someday..."
      />

      <div
        style={{
          maxWidth: '780px',
          margin: '0 auto 3rem',
          textAlign: 'center'
        }}
      >
        <span className="handwritten-note" style={{ fontSize: '1.55rem', color: 'var(--accent-rose)' }}>
          ♡ "I don't even know if cars are your thing."
        </span>

        <h3 className="font-serif text-gradient-rose" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.3rem)', margin: '1rem 0', fontWeight: 400 }}>
          "Maybe you love them.<br />Maybe you couldn't care less about them.<br />I honestly don't know yet."
        </h3>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.35rem', color: 'var(--text-deep)', lineHeight: 1.85, maxWidth: '680px', margin: '0 auto 1.5rem' }}>
          But if one day you point at a car and say,<br />
          <span className="text-rose font-serif" style={{ fontSize: '1.55rem', fontWeight: 500 }}>"I'd love to have that someday..."</span><br /><br />
          I'd want to be the person who says,<br />
          <span className="text-gradient-rose font-serif" style={{ fontSize: '1.6rem', fontWeight: 500 }}>"Let's make it happen."</span>
        </p>

        <p style={{ color: 'var(--text-body)', maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.75 }}>
          Supercar. Sports car. Luxury car. Or something completely unexpected.<br />
          <strong style={{ color: 'var(--text-deep)' }}>Whatever makes you genuinely happy, I'd love to help make that dream possible.</strong>
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
          "I don't pretend to know everything you like yet... I just want to be there to discover it with you."
        </p>
      </div>
    </section>
  );
}
