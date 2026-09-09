import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { MessageCircleHeart } from 'lucide-react';

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
        badge="06. Tiny Fragments"
        title="The Little Things."
        subtitle="Small daily messages that mean more than they seem."
      />

      {/* Horizontal marquee / scrollable container */}
      <div
        style={{
          display: 'flex',
          gap: '1.25rem',
          overflowX: 'auto',
          paddingBottom: '1.5rem',
          paddingTop: '0.5rem',
          scrollbarWidth: 'thin',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {fragments.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="glass-card"
            style={{
              minWidth: '220px',
              maxWidth: '260px',
              flexShrink: 0,
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'rgba(20, 25, 36, 0.7)'
            }}
          >
            <div>
              <MessageCircleHeart size={20} className="text-gold mb-3" style={{ marginBottom: '0.75rem' }} />
              <h3 className="font-serif text-gold" style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>
                "{item.text}"
              </h3>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {item.sub}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
