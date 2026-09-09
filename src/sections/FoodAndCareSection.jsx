import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function FoodAndCareSection() {
  return (
    <section id="food-and-care" className="section-container">
      <SectionHeader
        badge="simple care"
        title="Please Eat First."
        subtitle="Because honestly, it bothers me more than it should when you skip meals."
      />

      <div className="glass-card text-center" style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(50, 19, 31, 0.75)' }}>
        {/* Soft Warm Candlelight Glow */}
        <div className="ambient-glow ambient-deep-red" style={{ width: '300px', height: '300px', top: '20%', left: '50%', transform: 'translateX(-50%)', opacity: 0.25 }} />

        {/* Intimate dialogue reveal */}
        <div style={{ margin: '0 auto 2.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'center' }}>
          <span className="handwritten-note" style={{ fontSize: '1.4rem', color: 'var(--accent-blush)' }}>"lunch?"</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>no?</span>
          <span className="handwritten-note" style={{ fontSize: '1.4rem', color: 'var(--accent-blush)' }}>"dinner?"</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>also no?</span>
          <span className="handwritten-note" style={{ fontSize: '1.4rem', color: 'var(--accent-blush)' }}>"you slept hungry?"</span>
        </div>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', lineHeight: '1.85', marginBottom: '2rem' }}>
          "There have been moments when you were so busy that lunch became late, dinner disappeared, and sleep won.<br /><br />
          And honestly... I don't know why something as simple as you not eating can bother me this much."
        </p>

        <div
          style={{
            background: 'rgba(22, 10, 16, 0.7)',
            border: '1px solid rgba(231, 184, 193, 0.2)',
            borderRadius: 'var(--radius-md)',
            padding: '1.75rem',
            margin: '2rem 0',
            textAlign: 'left'
          }}
        >
          <span className="handwritten-note mb-2" style={{ fontSize: '1.3rem', color: 'var(--accent-champagne)' }}>
            The Indore Connection
          </span>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', margin: 0, lineHeight: 1.8 }}>
            "If you were here in Indore, I'd probably annoy you until you ate something. And yes, if necessary, I'd make it myself.<br /><br />
            One day, when you come to Indore, I'll introduce you to my favourite kind of care: <strong className="text-blush">home food, long conversations, and someone asking you for the hundredth time... 'Lunch hua?'</strong>"
          </p>
        </div>

        <p className="handwritten-note" style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
          (No excuses allowed when you're busy!)
        </p>
      </div>
    </section>
  );
}
