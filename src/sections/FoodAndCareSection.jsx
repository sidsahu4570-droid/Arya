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

      <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
        {/* Intimate dialogue reveal */}
        <div style={{ margin: '0 auto 2.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'center' }}>
          <span className="handwritten-note" style={{ fontSize: '1.45rem', color: 'var(--accent-rose)' }}>"lunch hua?"</span>
          <span style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>no?</span>
          <span className="handwritten-note" style={{ fontSize: '1.45rem', color: 'var(--accent-rose)' }}>"dinner?"</span>
          <span style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>also no?</span>
          <span className="handwritten-note" style={{ fontSize: '1.45rem', color: 'var(--accent-rose)' }}>"you slept hungry?"</span>
        </div>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.35rem', color: 'var(--text-deep)', lineHeight: '1.85', marginBottom: '2.5rem' }}>
          "There have been moments when you were so busy that lunch became late, dinner disappeared, and sleep won.<br /><br />
          And honestly... I don't know why something as simple as you not eating can bother me this much."
        </p>

        {/* Indore Note Scrapbook */}
        <div
          className="scrapbook-note"
          style={{
            maxWidth: '680px',
            margin: '0 auto 2rem',
            textAlign: 'left',
            transform: 'rotate(-0.5deg)',
            background: '#fffdfc'
          }}
        >
          <span className="handwritten-note mb-2" style={{ fontSize: '1.4rem', color: 'var(--accent-rose)' }}>
            ♡ The Indore Connection
          </span>
          <p style={{ color: 'var(--text-body)', fontSize: '1.02rem', margin: 0, lineHeight: 1.8 }}>
            "If you were here in Indore, I'd probably annoy you until you ate something. And yes, if necessary, I'd make it myself.<br /><br />
            One day, when you come to Indore, I'll introduce you to my favourite kind of care: <strong className="text-rose">home food, long conversations, and someone asking you for the hundredth time... 'Lunch hua?'</strong>"
          </p>
        </div>

        <p className="handwritten-note" style={{ fontSize: '1.3rem', color: 'var(--text-muted)' }}>
          (No excuses allowed when you're busy!)
        </p>
      </div>
    </section>
  );
}
