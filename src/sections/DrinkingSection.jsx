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

      <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
        <span className="handwritten-note mb-2" style={{ fontSize: '1.5rem', color: 'var(--accent-rose)' }}>
          ♡ "yes, I remember this."
        </span>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.35rem', color: 'var(--text-deep)', lineHeight: 1.85, marginBottom: '2rem' }}>
          "I know you drink sometimes.<br />
          I'm not a fan of it. I'd probably still tell you to stop because I worry about your health.<br />
          <strong className="text-rose">But I'm not here to control you.</strong>"
        </p>

        <div style={{ background: 'rgba(253, 236, 239, 0.5)', borderLeft: '3px solid var(--accent-rose)', padding: '1.75rem', margin: '2rem 0', textAlign: 'left' }}>
          <span className="handwritten-note mb-1" style={{ fontSize: '1.35rem', color: 'var(--accent-rose)' }}>The Imagined Scene</span>
          <p style={{ color: 'var(--text-body)', fontSize: '1.02rem', lineHeight: 1.8, margin: 0 }}>
            "If someday you're completely drunk, I'll probably be the idiot quietly getting you home safely, making sure you're comfortable, getting you water, and waiting until you fall asleep peacefully."
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          style={{
            padding: '1.25rem',
            marginTop: '1.5rem'
          }}
        >
          <span className="font-serif text-deep" style={{ fontSize: '1.25rem', fontWeight: 500 }}>
            "One tiny condition though..."
          </span>
          <p className="text-gradient-rose font-serif" style={{ fontSize: '1.45rem', fontWeight: 500, margin: '0.4rem 0 0' }}>
            "Please don't turn into a professional boxer after two drinks. 😂"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
