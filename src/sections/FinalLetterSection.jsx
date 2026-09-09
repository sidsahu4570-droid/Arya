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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', borderBottom: '1px solid rgba(38, 17, 26, 0.15)', paddingBottom: '1rem' }}>
          <span className="handwritten-note" style={{ fontSize: '1.6rem', color: '#7d263b' }}>
            Personal Letter
          </span>
          {/* Subtle Wax Seal Detail */}
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#7d263b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f8ede5',
              fontFamily: 'var(--font-handwriting)',
              fontWeight: 700,
              fontSize: '1.1rem',
              boxShadow: '0 4px 12px rgba(125, 38, 59, 0.4)'
            }}
          >
            A&S
          </div>
        </div>

        <div className="font-serif" style={{ color: '#26111a', fontSize: 'clamp(1.1rem, 2.1vw, 1.3rem)', lineHeight: 1.9 }}>
          <p style={{ marginBottom: '1.25rem' }}>Maybe I'm getting ahead of myself.</p>
          <p style={{ marginBottom: '1.25rem' }}>Maybe I'm imagining too many things too soon.</p>
          <p style={{ marginBottom: '1.25rem' }}>But I can't help it. I like you. A lot.</p>

          <p style={{ marginBottom: '1.25rem' }}>
            And somewhere between asking whether you had lunch, wondering whether you reached home, getting worried when you disappear, laughing over stupid things, and apologising over one completely misunderstood emoji...<br />
            <strong style={{ color: '#7d263b', fontWeight: 600 }}>you became someone I genuinely care about.</strong>
          </p>

          <p style={{ marginBottom: '1.25rem' }}>
            I know you don't know me enough yet. That's okay.<br />
            I'm not asking you to decide. Take your time. Know me properly. Let me know you properly.
          </p>

          <p style={{ marginBottom: '1.5rem', fontStyle: 'italic', color: '#541c2a' }}>
            And if one day you look at everything we've built between these conversations and think...<br />
            <span style={{ fontSize: '1.4rem', fontWeight: 600, color: '#160a10' }}>'Yeah. Our vibes actually do match.'</span><br />
            Then maybe we can start writing the next chapter.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Until then... I'll just be here.<br />
            Learning you. Supporting you. Annoying you a little. Making sure you eat. Arguing about stupid things. Apologising when I'm wrong.
          </p>

          <p style={{ marginBottom: '2.5rem', fontSize: '1.35rem', color: '#7d263b', fontWeight: 500 }}>
            And hoping that someday, when you think about the future, I'm somewhere in it.
          </p>

          <div style={{ textAlign: 'right', marginTop: '3.5rem', borderTop: '1px solid rgba(38, 17, 26, 0.15)', paddingTop: '1.5rem' }}>
            <span className="handwritten-note" style={{ fontSize: '2.2rem', color: '#7d263b' }}>
              — Siddharth
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
