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

      <div className="glass-card text-center" style={{ maxWidth: '800px', margin: '0 auto', background: '#fffdfc' }}>
        {/* Intimate dialogue reveal */}
        <div style={{ margin: '0 auto 2.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
          <span className="handwritten-note" style={{ fontSize: '1.45rem', color: 'var(--accent-rose)' }}>"lunch?"</span>
          <span style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>no?</span>
          <span className="handwritten-note" style={{ fontSize: '1.45rem', color: 'var(--accent-rose)' }}>"dinner?"</span>
          <span style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>also no?</span>
          <span className="handwritten-note" style={{ fontSize: '1.45rem', color: 'var(--accent-rose)' }}>"you slept hungry?"</span>
        </div>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.35rem', color: 'var(--text-deep)', lineHeight: '1.85', marginBottom: '2rem' }}>
          "There have been moments when you were so busy that lunch became late, dinner disappeared, and sleep won.<br /><br />
          And honestly... I don't know why something as simple as you not eating can bother me this much."
        </p>

        <div
          style={{
            background: 'rgba(253, 236, 239, 0.65)',
            border: '1px solid rgba(217, 107, 131, 0.2)',
            borderRadius: 'var(--radius-md)',
            padding: '1.85rem',
            margin: '2rem 0',
            textAlign: 'left'
          }}
        >
          <span className="handwritten-note mb-2" style={{ fontSize: '1.35rem', color: 'var(--accent-rose)' }}>
            The Indore Connection
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
