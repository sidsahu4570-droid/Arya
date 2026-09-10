import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function SafetySection() {
  return (
    <section id="safety-section" className="section-container">
      <SectionHeader
        badge="reassurance"
        title="You Don't Have To Face The World Alone."
        subtitle="A quiet promise of presence."
      />

      <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
        <span className="handwritten-note mb-2" style={{ fontSize: '1.5rem', color: 'var(--accent-rose)' }}>
          ♡ "I want you to feel safe with me."
        </span>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.35rem', color: 'var(--text-deep)', lineHeight: 1.85, marginBottom: '2rem' }}>
          "I know there are things you're afraid of. I know life isn't always simple.<br /><br />
          I can't promise that nothing bad will ever happen.<br />
          <span className="text-gradient-rose font-serif" style={{ fontSize: '1.45rem', fontWeight: 500 }}>But I can promise that if you're important to me, I won't casually walk away when things get difficult.</span>"
        </p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1.75rem', borderRadius: 'var(--radius-full)', background: 'rgba(253, 236, 239, 0.7)', border: '1px solid rgba(217, 107, 131, 0.2)', marginTop: '1rem' }}>
          <span className="handwritten-note" style={{ fontSize: '1.45rem', color: 'var(--accent-rose)' }}>
            "I want to be someone you feel safe calling."
          </span>
        </div>
      </div>
    </section>
  );
}
