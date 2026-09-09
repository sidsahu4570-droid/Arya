import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function DrinkingSection() {
  return (
    <section id="when-you-drink" className="section-container">
      <SectionHeader
        badge="caring boundaries"
        title="When You Drink."
        subtitle="Worrying without controlling."
      />

      <div className="glass-card text-center" style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(50, 19, 31, 0.75)' }}>
        <span className="handwritten-note mb-2" style={{ fontSize: '1.4rem', color: 'var(--accent-champagne)' }}>
          "yes, I remember this."
        </span>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.3rem', color: 'var(--text-primary)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
          "I know you drink sometimes.<br />
          I'm not a fan of it. I'd probably still tell you to stop because I worry about your health.<br />
          <strong className="text-blush">But I'm not here to control you.</strong>"
        </p>

        <div style={{ background: 'rgba(22, 10, 16, 0.7)', border: '1px solid rgba(231, 184, 193, 0.2)', padding: '1.75rem', borderRadius: 'var(--radius-md)', margin: '1.75rem 0', textAlign: 'left' }}>
          <span className="handwritten-note mb-1" style={{ fontSize: '1.25rem', color: 'var(--accent-blush)' }}>The Imagined Scene</span>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.8, margin: 0 }}>
            "If someday you're completely drunk, I'll probably be the idiot quietly getting you home safely, making sure you're comfortable, getting you water, and waiting until you fall asleep peacefully."
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{
            background: 'linear-gradient(135deg, rgba(125, 38, 59, 0.3) 0%, rgba(50, 19, 31, 0.5) 100%)',
            border: '1px solid rgba(231, 184, 193, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '1.35rem',
            marginTop: '1.5rem'
          }}
        >
          <span className="font-serif text-blush" style={{ fontSize: '1.25rem', fontWeight: 500 }}>
            "One tiny condition though..."
          </span>
          <p className="text-gradient-rose font-serif" style={{ fontSize: '1.45rem', fontWeight: 600, margin: '0.4rem 0 0' }}>
            "PLEASE DON'T TRY TO BOX ME AFTER TWO DRINKS. 😂"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
