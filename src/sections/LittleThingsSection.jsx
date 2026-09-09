import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function LittleThingsSection() {
  const fragments = [
    { text: "Lunch hua?", sub: "Daily check-in" },
    { text: "Dinner kar liya?", sub: "Making sure" },
    { text: "Take care 🎀", sub: "Warm reminder" },
    { text: "Wake up.", sub: "Morning energy" },
    { text: "Reached home?", sub: "Safety check" },
    { text: "Don't be angry on me.", sub: "After 😡 emoji" },
    { text: "I am worried for you.", sub: "Genuine care" },
    { text: "I hope you ate.", sub: "Always food" },
    { text: "You should sleep.", sub: "Late nights" },
    { text: "Call me when you're free.", sub: "No pressure" },
    { text: "Did you reach safely?", sub: "Late commutes" }
  ];

  return (
    <section id="the-little-things" className="section-container" style={{ overflow: 'hidden' }}>
      <SectionHeader
        badge="tiny fragments"
        title="The Little Things."
        subtitle="Small daily messages that mean more than they seem."
      />

      <div
        style={{
          display: 'flex',
          gap: '1.25rem',
          overflowX: 'auto',
          paddingBottom: '2rem',
          paddingTop: '0.5rem',
          scrollbarWidth: 'thin',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {fragments.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            style={{
              minWidth: '230px',
              maxWidth: '260px',
              flexShrink: 0,
              padding: '1.75rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(50, 19, 31, 0.65)',
              border: '1px solid rgba(231, 184, 193, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
            }}
          >
            <div>
              <span className="handwritten-note" style={{ fontSize: '1.2rem', color: 'var(--accent-blush)', display: 'block', marginBottom: '0.5rem' }}>
                {item.sub}
              </span>
              <h3 className="font-serif text-gradient-rose" style={{ fontSize: '1.45rem', marginBottom: 0 }}>
                "{item.text}"
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
