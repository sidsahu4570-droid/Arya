import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { ArrowRight } from 'lucide-react';

export default function YourFreedomSection() {
  const shifts = [
    { from: "Questioning you", to: "Knowing you" },
    { from: "Controlling you", to: "Trusting you" },
    { from: "Demanding updates", to: "Wanting to hear from you" }
  ];

  return (
    <section id="your-freedom" className="section-container">
      <SectionHeader
        badge="freedom & space"
        title="I Know You Need Your Space."
        subtitle="Affection without possessiveness."
      />

      <div className="glass-card mb-12 text-center" style={{ maxWidth: '800px', margin: '0 auto 3rem', background: '#fffdfc' }}>
        <p className="font-serif text-subtitle" style={{ fontSize: '1.35rem', color: 'var(--text-deep)', marginBottom: '1.5rem', lineHeight: '1.85' }}>
          "You once told me you don't like answering anyone about where you are, when you're going, or who you're with.<br /><br />
          <span className="text-gradient-rose" style={{ fontWeight: 500 }}>I understand that.</span><br /><br />
          I don't want to become another person you feel you have to report everything to.<br />
          I want to be the person you <strong className="text-rose">WANT</strong> to tell things to."
        </p>

        <p className="handwritten-note" style={{ fontSize: '1.45rem', color: 'var(--accent-rose)' }}>
          — There is a world of difference.
        </p>
      </div>

      {/* Floating Shift Compositions */}
      <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {shifts.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            style={{
              padding: '1.25rem 1.75rem',
              borderRadius: 'var(--radius-md)',
              background: '#fffdfc',
              border: '1px solid rgba(217, 107, 131, 0.2)',
              boxShadow: '0 10px 30px rgba(100, 40, 55, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            <div style={{ flex: 1, textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '1.02rem' }}>
              {item.from}
            </div>
            
            <div style={{ color: 'var(--accent-rose)', display: 'flex', alignItems: 'center' }}>
              <ArrowRight size={18} />
            </div>

            <div style={{ flex: 1, textAlign: 'right', fontWeight: 500, color: 'var(--text-deep)', fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>
              {item.to}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
