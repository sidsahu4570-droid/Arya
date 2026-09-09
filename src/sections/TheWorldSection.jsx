import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function TheWorldSection() {
  const locations = [
    {
      name: 'Monaco',
      tag: 'The Supercar Capital',
      description: 'Especially Monaco. Because I already know exactly what would happen there: You\'d look at the cars. I\'d look at you looking at the cars. And yes, we\'d probably spend half the trip talking about which one we\'d take home. 😂'
    },
    {
      name: 'Paris',
      tag: 'Sunsets & Cafes',
      description: 'Walking through quiet streets, sipping coffee, and watching the lights come on.'
    },
    {
      name: 'Tokyo',
      tag: 'Neon & Serenity',
      description: 'Spontaneous late-night ramen, quiet shrines, and neon-lit avenues.'
    },
    {
      name: 'Switzerland',
      tag: 'Snow & Solitude',
      description: 'Fresh mountain air, wooden chalets, and scenic train rides through the Alps.'
    },
    {
      name: 'Italy',
      tag: 'Amalfi Coast Drives',
      description: 'Driving along coastal cliffs with the sea breeze and endless authentic pasta dates.'
    },
    {
      name: 'Dubai',
      tag: 'Desert & Skyline',
      description: 'Stargazing in the calm desert under midnight skies and city lights.'
    },
    {
      name: 'Maldives',
      tag: 'Crystal Waters',
      description: 'Overwater bungalows, ocean sunsets, and absolute peace.'
    }
  ];

  return (
    <section id="the-world" className="section-container">
      <SectionHeader
        badge="destinations"
        title="Then We'll Go."
        subtitle="The places waiting for us across the world."
      />

      {/* Monaco Romantic Travel Spotlight */}
      <div
        className="glass-card mb-12"
        style={{
          background: '#fffdfc',
          borderColor: 'var(--accent-rose)'
        }}
      >
        <span className="handwritten-note mb-2" style={{ fontSize: '1.45rem', color: 'var(--accent-rose)' }}>
          Special Spotlight: Monaco 🇲🇨
        </span>
        <h3 className="font-serif text-gradient-rose" style={{ fontSize: '2rem', marginBottom: '0.75rem', fontWeight: 400 }}>
          Monaco
        </h3>
        <p className="font-serif text-subtitle" style={{ fontSize: '1.3rem', color: 'var(--text-deep)', lineHeight: 1.85, margin: 0 }}>
          "Because I already know exactly what would happen there:<br />
          <strong className="text-rose font-serif" style={{ fontSize: '1.45rem' }}>You'd look at the cars. I'd look at you looking at the cars.</strong><br />
          And yes, we'd probably spend half the trip talking about which one we'd take home."
        </p>
      </div>

      {/* Romantic Destination Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
        {locations.map((loc, idx) => (
          <div
            key={idx}
            style={{
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              background: '#fffdfc',
              border: '1px solid rgba(217, 107, 131, 0.2)',
              boxShadow: '0 10px 30px rgba(100, 40, 55, 0.05)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
              <h4 className="font-serif text-gradient-rose" style={{ fontSize: '1.35rem', margin: 0, fontWeight: 500 }}>
                {loc.name}
              </h4>
              <span className="handwritten-note" style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
                {loc.tag}
              </span>
            </div>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-body)', margin: 0, lineHeight: 1.65 }}>
              {loc.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
