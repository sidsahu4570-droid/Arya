import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function FinalLetterSection() {
  return (
    <section id="final-letter" className="section-container">
      <SectionHeader
        badge="a letter for you"
        title="For Arya."
        subtitle="Written from the heart."
      />

      {/* Floating Warm Cream Paper Surface */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        className="paper-letter-surface"
        style={{
          maxWidth: '820px',
          margin: '0 auto'
        }}
      >
        {/* Intimate Handwritten Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="handwritten-note" style={{ fontSize: '2.4rem', color: 'var(--accent-rose)', display: 'block', marginBottom: '0.2rem' }}>
            For Arya ♡
          </span>
          <svg
            width="150"
            height="12"
            viewBox="0 0 150 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.75 }}
          >
            <path
              d="M4 8C40 2 105 3 146 9"
              stroke="var(--accent-rose)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="font-serif" style={{ color: 'var(--text-deep)', fontSize: 'clamp(1.1rem, 2.1vw, 1.3rem)', lineHeight: 1.9 }}>
          <p style={{ marginBottom: '1.25rem' }}>Maybe I'm getting ahead of myself.</p>
          <p style={{ marginBottom: '1.25rem' }}>Maybe I'm imagining too many things too soon.</p>
          <p style={{ marginBottom: '1.25rem' }}>But I can't help it. I like you. A lot.</p>

          <p style={{ marginBottom: '1.25rem' }}>
            And somewhere between asking whether you had lunch, wondering whether you reached home, getting worried when you disappear, laughing over stupid things, and apologising over one completely misunderstood emoji...<br />
            <strong style={{ color: 'var(--accent-rose)', fontWeight: 600 }}>you became someone I genuinely care about.</strong>
          </p>

          <p style={{ marginBottom: '1.25rem' }}>
            I know you don't know me enough yet. That's okay.<br />
            I'm not asking you to decide. Take your time. Know me properly. Let me know you properly.
          </p>

          <p style={{ marginBottom: '1.5rem', fontStyle: 'italic', color: 'var(--text-heading)' }}>
            And if one day you look at everything we've built between these conversations and think...<br />
            <span style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-deep)' }}>'Yeah. Our vibes actually do match.'</span><br />
            Then maybe we can start writing the next chapter.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Until then... I'll just be here.<br />
            Learning you. Supporting you. Annoying you a little. Making sure you eat. Arguing about stupid things. Apologising when I'm wrong.
          </p>

          <p style={{ marginBottom: '2.5rem', fontSize: '1.35rem', color: 'var(--accent-rose)', fontWeight: 500 }}>
            And hoping that someday, when you think about the future, I'm somewhere in it.
          </p>

          <div style={{ textAlign: 'right', marginTop: '3.5rem', borderTop: '1px solid rgba(217, 107, 131, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '0.5rem' }}>
            <span className="handwritten-note" style={{ fontSize: '2.3rem', color: 'var(--accent-rose)' }}>
              — Siddharth 🌹
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
