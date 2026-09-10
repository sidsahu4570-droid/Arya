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

      <div style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
        <span className="handwritten-note mb-2" style={{ fontSize: '1.5rem', color: 'var(--accent-rose)' }}>
          ♡ "don't judge me 😂"
        </span>

        <h3 className="font-serif text-gradient-rose" style={{ fontSize: '1.75rem', margin: '0.75rem 0 1.25rem', fontWeight: 400 }}>
          "If I ever become stupid enough to make the same mistake twice..."
        </h3>

        <p style={{ color: 'var(--text-body)', fontSize: '1.08rem', lineHeight: 1.85, marginBottom: '2rem' }}>
          Maybe someday, if we're close enough, you'll be the person who tells me when I'm being stupid.<br />
          I'd probably deserve it sometimes. 😂
        </p>

        <div
          style={{
            padding: '1.5rem',
            borderLeft: '3px solid var(--accent-rose)',
            background: 'rgba(253, 236, 239, 0.5)',
            margin: '1.5rem 0',
            textAlign: 'center'
          }}
        >
          <p className="font-serif text-gradient-rose" style={{ fontSize: '1.4rem', margin: 0, fontWeight: 500 }}>
            "If I ever get it wrong, I'll always listen and try to make things right.<br />
            Because understanding each other matters most."
          </p>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <button
            onClick={() => setDealAccepted(!dealAccepted)}
            className="btn-romantic-link"
            style={{ fontSize: '1.45rem' }}
          >
            {dealAccepted ? (
              <span>Deal Accepted: Always Communicate! 🤝</span>
            ) : (
              <span>Proposed Deal: Always Talk It Out! 😂</span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
