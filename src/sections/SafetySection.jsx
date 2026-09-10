import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function SafetySection() {
  return (
    <section id="safety-section" className="section-container">
      <SectionHeader
        badge="presence"
        title="If You Ever Need Someone, I'm Here."
        subtitle="A quiet promise of presence."
      />

      <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
        <span className="handwritten-note mb-2" style={{ fontSize: '1.55rem', color: 'var(--accent-rose)' }}>
          ♡ "I'd like to be someone you can count on."
        </span>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.35rem', color: 'var(--text-deep)', lineHeight: 1.85, marginBottom: '1.75rem' }}>
          "I don't know everything you're carrying.<br />
          I don't know every difficult day you'll have.<br />
          And I don't want to pretend that I know."
        </p>

        <p className="font-serif text-gradient-rose" style={{ fontSize: '1.45rem', fontWeight: 500, lineHeight: 1.7, marginBottom: '1.75rem' }}>
          "But if someday you need someone to listen, talk, sit quietly with you, or simply be there..."<br />
          <span className="text-rose" style={{ fontSize: '1.55rem', display: 'block', marginTop: '0.4rem' }}>
            "I'd want to be that person."
          </span>
        </p>

        <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '640px', margin: '0 auto 2rem' }}>
          "I can't promise that life will always be easy.<br />
          But I can promise that, if you become important to me, I'll want to be there through the difficult days too."
        </p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1.75rem', borderRadius: 'var(--radius-full)', background: 'rgba(253, 236, 239, 0.7)', border: '1px solid rgba(217, 107, 131, 0.2)' }}>
          <span className="handwritten-note" style={{ fontSize: '1.45rem', color: 'var(--accent-rose)' }}>
            "Maybe someday, you'll know you can call me."
          </span>
        </div>
      </div>
    </section>
  );
}
