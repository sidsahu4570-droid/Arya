import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function LittleThingsSection() {
  const fragments = [
    { text: "Lunch hua?", sub: "daily check-in", styleType: "scrap", rotate: "-2deg", align: "flex-start" },
    { text: "Dinner kar liya?", sub: "making sure", styleType: "floating", rotate: "1.5deg", align: "flex-end" },
    { text: "Take care 🎀", sub: "warm reminder", styleType: "polaroid", rotate: "-1deg", align: "center" },
    { text: "Wake up.", sub: "morning energy", styleType: "floating", rotate: "2.2deg", align: "flex-start" },
    { text: "Reached home?", sub: "safety check", styleType: "scrap", rotate: "-1.8deg", align: "flex-end" },
    { text: "Don't be angry on me.", sub: "after 😡 emoji", styleType: "polaroid", rotate: "1deg", align: "center" },
    { text: "I am worried for you.", sub: "genuine care", styleType: "floating", rotate: "-2.5deg", align: "flex-start" },
    { text: "I hope you ate.", sub: "always food", styleType: "scrap", rotate: "1.8deg", align: "flex-end" },
    { text: "You should sleep.", sub: "late nights", styleType: "polaroid", rotate: "-1.2deg", align: "center" },
    { text: "Call me when you're free.", sub: "no pressure", styleType: "floating", rotate: "2deg", align: "flex-start" },
    { text: "Did you reach safely?", sub: "late commutes", styleType: "scrap", rotate: "-1.5deg", align: "flex-end" }
  ];

  return (
    <section id="the-little-things" className="section-container">
      <SectionHeader
        badge="tiny fragments"
        title="The Little Things."
        subtitle="Small daily messages that mean more than they seem."
      />

      {/* Romantic Scrapbook Canvas (No slider, no horizontal scroll, no card grid) */}
      <div
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          position: 'relative'
        }}
      >
        {fragments.map((item, idx) => {
          if (item.styleType === 'scrap') {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                style={{
                  alignSelf: item.align,
                  maxWidth: '420px',
                  width: '90%',
                  background: '#fffdfc',
                  padding: '1.5rem 1.8rem',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(180, 90, 110, 0.07), inset 0 0 0 1px rgba(217, 107, 131, 0.18)',
                  transform: `rotate(${item.rotate})`,
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                  <span style={{ color: 'var(--accent-rose)', fontSize: '0.9rem' }}>♡</span>
                  <span className="handwritten-note" style={{ fontSize: '1.25rem', color: 'var(--accent-rose)' }}>
                    {item.sub}
                  </span>
                </div>
                <p className="font-serif text-gradient-rose" style={{ fontSize: '1.55rem', margin: 0, fontWeight: 500, lineHeight: 1.4 }}>
                  "{item.text}"
                </p>
              </motion.div>
            );
          }

          if (item.styleType === 'polaroid') {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                style={{
                  alignSelf: item.align,
                  maxWidth: '440px',
                  width: '90%',
                  background: 'rgba(253, 236, 239, 0.55)',
                  padding: '1.4rem 1.7rem',
                  borderRadius: '12px',
                  borderLeft: '3px solid var(--accent-rose)',
                  transform: `rotate(${item.rotate})`,
                  position: 'relative'
                }}
              >
                <p className="font-serif text-deep" style={{ fontSize: '1.6rem', margin: '0 0 0.3rem', fontWeight: 500 }}>
                  "{item.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span style={{ color: 'var(--accent-rose)', fontSize: '0.85rem' }}>♡</span>
                  <span className="handwritten-note" style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                    {item.sub}
                  </span>
                </div>
              </motion.div>
            );
          }

          // Floating freeform handwritten note
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
              style={{
                alignSelf: item.align,
                maxWidth: '420px',
                width: '90%',
                padding: '0.8rem 1rem',
                transform: `rotate(${item.rotate})`,
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                <span style={{ color: 'var(--accent-rose)', fontSize: '1.1rem' }}>♡</span>
                <p className="font-serif text-gradient-rose" style={{ fontSize: '1.65rem', margin: 0, fontWeight: 400 }}>
                  "{item.text}"
                </p>
              </div>
              <span className="handwritten-note" style={{ fontSize: '1.3rem', color: 'var(--text-body)', paddingLeft: '1.4rem', display: 'block' }}>
                — {item.sub}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
