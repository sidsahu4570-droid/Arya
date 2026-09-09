import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { Globe, MapPin, Compass, Sparkles, Car } from 'lucide-react';

export default function TheWorldSection() {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      name: 'Monaco',
      tag: 'The Supercar Capital',
      highlight: true,
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
      tag: 'Snow & solitude',
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
        badge="08. Destinations"
        title="Then We'll Go."
        subtitle="The places waiting for us across the world."
      />

      {/* Monaco Spotlight Card */}
      <GlassCard
        className="mb-10"
        style={{
          background: 'linear-gradient(135deg, rgba(230, 200, 148, 0.12) 0%, rgba(223, 158, 142, 0.08) 100%)',
          borderColor: 'var(--accent-gold)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
          <Car size={20} />
          <span style={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.85rem' }}>
            Special Spotlight: Monaco
          </span>
        </div>
        <h3 className="font-serif text-gradient-gold" style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>
          Monaco 🇲🇨
        </h3>
        <p className="font-serif" style={{ fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.7, margin: 0 }}>
          "Because I already know exactly what would happen there:<br />
          <strong className="text-gold">You'd look at the cars. I'd look at you looking at the cars.</strong><br />
          And yes, we'd probably spend half the trip talking about which one we'd take home."
        </p>
      </GlassCard>

      {/* Location Interactive Grid */}
      <div className="grid-3">
        {locations.map((loc, idx) => (
          <GlassCard
            key={idx}
            delay={idx * 0.08}
            onClick={() => setActiveLocation(idx)}
            style={{
              cursor: 'pointer',
              borderColor: activeLocation === idx ? 'var(--accent-gold)' : 'var(--border-glass)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <h4 className="font-serif text-gold" style={{ fontSize: '1.3rem', margin: 0 }}>
                {loc.name}
              </h4>
              <MapPin size={16} className="text-muted" />
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.6rem' }}>
              {loc.tag}
            </span>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              {loc.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
