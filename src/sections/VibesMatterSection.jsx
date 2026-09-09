import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function VibesMatterSection() {
  const vibeDiscoveries = [
    { title: 'Humour', note: 'because I want us to laugh at stupid things together.', rotate: '-1.5deg' },
    { title: 'Communication', note: 'because I want you to be able to tell me anything.', rotate: '1.2deg' },
    { title: 'Trust', note: 'because that\'s something we should build, not assume.', rotate: '-0.8deg' },
    { title: 'Comfort', note: 'silence feeling easy, never awkward.', rotate: '1.8deg' },
    { title: 'Ambition', note: 'supporting each other\'s big dreams & career goals.', rotate: '-1deg' },
    { title: 'Care', note: 'noticing the little things when life gets overwhelming.', rotate: '0.9deg' },
    { title: 'Adventure', note: 'exploring new places and spontaneous trips.', rotate: '-1.4deg' },
    { title: 'Family', note: 'respecting where we come from and who we love.', rotate: '1.1deg' },
    { title: 'Food', note: 'Indore food dates and making sure you actually eat.', rotate: '-0.9deg' },
    { title: 'Late-Night Talks', note: 'deep 2 AM conversations when the world stops.', rotate: '1.5deg' },
    { title: 'Patience', note: 'taking time to build something genuine.', rotate: '-1.2deg' },
    { title: 'Understanding', note: 'accepting each other\'s habits without judgment.', rotate: '0.8deg' }
  ];

  return (
    <section id="vibes-matter" className="section-container">
      <SectionHeader
        badge="the question that matters"
        title="You Said Vibes Matter."
        subtitle="When I asked if our age difference mattered, you answered with something I'll never forget."
      />

      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div style={{ display: 'inline-flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <span className="handwritten-note" style={{ fontSize: '1.45rem', color: 'var(--text-deep)' }}>Arya: 25</span>
          <span className="handwritten-note" style={{ fontSize: '1.45rem', color: 'var(--text-deep)' }}>Siddharth: 22</span>
        </div>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.4rem', color: 'var(--text-deep)', marginBottom: '1.5rem' }}>
          "You told me age doesn't matter.<br />
          <span className="text-gradient-rose font-serif" style={{ fontSize: '2.2rem', fontWeight: 500 }}>Vibes do.</span>"
        </p>

        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-body)', fontSize: '1.05rem' }}>
          And I've been thinking about that ever since...
        </p>
      </div>

      {/* Cinematic Question Paper Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          padding: '3.5rem 1.5rem',
          margin: '2rem 0 4rem',
          borderRadius: 'var(--radius-lg)',
          background: '#fffdfc',
          border: '1px solid rgba(217, 107, 131, 0.25)',
          boxShadow: '0 20px 50px rgba(74, 39, 48, 0.08)'
        }}
      >
        <h3 className="font-serif text-gradient-rose" style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', marginBottom: '1rem', fontWeight: 400 }}>
          "Will our vibes match?"
        </h3>
        <p style={{ color: 'var(--text-body)', maxWidth: '580px', margin: '0 auto', fontSize: '1.08rem', lineHeight: 1.75 }}>
          Not today. Not tomorrow. Maybe not even soon.<br />
          But I'm genuinely waiting for the day you know me well enough to answer that yourself.
        </p>
      </motion.div>

      {/* Floating Stationery Notes */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <span className="handwritten-note" style={{ fontSize: '1.65rem', color: 'var(--accent-rose)' }}>
          things I hope we'll discover together...
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem' }}>
        {vibeDiscoveries.map((vibe, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.04 }}
            style={{
              padding: '1.6rem',
              borderRadius: 'var(--radius-md)',
              background: '#fffdfc',
              border: '1px solid rgba(217, 107, 131, 0.2)',
              boxShadow: '0 10px 30px rgba(100, 40, 55, 0.05)',
              transform: `rotate(${vibe.rotate})`
            }}
          >
            <h4 className="font-serif text-gradient-rose" style={{ fontSize: '1.45rem', marginBottom: '0.3rem', fontWeight: 500 }}>
              {vibe.title}
            </h4>
            <p className="handwritten-note" style={{ fontSize: '1.25rem', color: 'var(--text-body)', margin: 0, lineHeight: 1.5 }}>
              "{vibe.note}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
