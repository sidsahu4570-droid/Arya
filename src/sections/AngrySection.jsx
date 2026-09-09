import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function AngrySection() {
  const [dealAccepted, setDealAccepted] = useState(false);

  return (
    <section id="when-youre-angry" className="section-container">
      <SectionHeader
        badge="conflict resolution"
        title="I Already Know One Thing..."
        subtitle="What happens when I inevitably mess up."
      />

      <div className="glass-card text-center" style={{ maxWidth: '750px', margin: '0 auto', background: 'rgba(50, 19, 31, 0.75)' }}>
        <span className="handwritten-note mb-2" style={{ fontSize: '1.4rem', color: 'var(--accent-blush)' }}>
          "don't judge me 😂"
        </span>

        <h3 className="font-serif text-gradient-rose" style={{ fontSize: '1.7rem', margin: '0.75rem 0 1.25rem' }}>
          "If I ever become stupid enough to make the same mistake twice..."
        </h3>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.85, marginBottom: '1.75rem' }}>
          You'll probably get angry.<br />
          Maybe you'll lecture me. Maybe you'll give me <em>that look</em>. Maybe you'll ignore me for a while.
        </p>

        <div
          style={{
            background: 'rgba(125, 38, 59, 0.25)',
            border: '1px solid rgba(125, 38, 59, 0.4)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            margin: '1.5rem 0'
          }}
        >
          <p className="font-serif text-gradient-rose" style={{ fontSize: '1.4rem', margin: 0, fontWeight: 500 }}>
            "And if you ever get drunk and decide to beat me up...<br />
            please remember I'm on your side. 😂"
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={() => setDealAccepted(!dealAccepted)}
            className="btn-romantic-link"
            style={{ fontSize: '1.35rem', color: dealAccepted ? 'var(--accent-blush)' : 'var(--accent-cream)' }}
          >
            {dealAccepted ? (
              <span>Deal Accepted: No Violence! 🤝</span>
            ) : (
              <span>Proposed Deal: No Violence. Complain Instead! 😂</span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
