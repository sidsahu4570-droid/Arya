import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function LittleThingsSection() {
  const memories = [
    {
      text: "Lunch hua?",
      note: "just checking...",
      sub: "daily check-in",
      type: "underlined",
      rotate: "-1.5deg",
      align: "flex-start",
      connector: "↓"
    },
    {
      text: "Dinner kar liya?",
      note: "making sure...",
      sub: "making sure",
      type: "tapeScrap",
      rotate: "1.8deg",
      align: "flex-end",
      connector: "↓"
    },
    {
      text: "Take care 🎀",
      note: "always",
      sub: "warm reminder",
      type: "handwrittenScript",
      rotate: "-0.8deg",
      align: "center"
    },
    {
      text: "Wake up.",
      note: "morning energy ☀️",
      sub: "morning energy",
      type: "sunDoodle",
      rotate: "2.2deg",
      align: "flex-start"
    },
    {
      text: "Reached home?",
      note: "safety check",
      sub: "safety check",
      type: "polaroid",
      rotate: "-2deg",
      align: "flex-end",
      connector: "↓"
    },
    {
      text: "Don't be angry on me.",
      note: "after 😡 emoji",
      sub: "after 😡 emoji",
      type: "playfulNote",
      rotate: "1.2deg",
      align: "center"
    },
    {
      text: "I am worried for you.",
      note: "because I care",
      sub: "genuine care",
      type: "floatingScript",
      rotate: "-2.2deg",
      align: "flex-start"
    },
    {
      text: "I hope you ate.",
      note: "don't skip meals",
      sub: "always food",
      type: "curvedLine",
      rotate: "1.5deg",
      align: "flex-end"
    },
    {
      text: "You should sleep.",
      note: "late nights ✨",
      sub: "late nights",
      type: "eveningNote",
      rotate: "-1.4deg",
      align: "center"
    },
    {
      text: "Call me when you're free.",
      note: "no pressure",
      sub: "no pressure",
      type: "italicScript",
      rotate: "2deg",
      align: "flex-start"
    },
    {
      text: "Did you reach safely?",
      note: "late commutes",
      sub: "late commutes",
      type: "safetyNote",
      rotate: "-1.8deg",
      align: "flex-end"
    }
  ];

  return (
    <section id="the-little-things" className="section-container">
      <SectionHeader
        badge="tiny fragments"
        title="The Little Things."
        subtitle="Small daily messages that mean more than they seem."
      />

      {/* Personal Introduction Line (No card!) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '2.5rem' }}
      >
        <span className="handwritten-note" style={{ fontSize: '1.45rem', color: 'var(--text-deep)' }}>
          "I don't know why these little things matter so much... but somehow, they do."
        </span>
      </motion.div>

      {/* Main Single Central Scrapbook Sheet Object */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          background: '#FFFDFC',
          border: '1px solid rgba(217, 107, 131, 0.18)',
          borderRadius: '24px',
          padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
          boxShadow: '0 20px 50px rgba(180, 90, 110, 0.08), 0 2px 10px rgba(100, 40, 55, 0.03)',
          position: 'relative'
        }}
      >
        {/* Decorative Washi Tape Strips (Scrapbook details) */}
        <div
          style={{
            position: 'absolute',
            top: '-12px',
            left: '30px',
            width: '90px',
            height: '24px',
            background: 'rgba(246, 214, 221, 0.6)',
            transform: 'rotate(-4deg)',
            borderRadius: '2px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-12px',
            right: '30px',
            width: '90px',
            height: '24px',
            background: 'rgba(253, 236, 239, 0.8)',
            transform: 'rotate(3deg)',
            borderRadius: '2px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
          }}
        />

        {/* Floating Scrapbook Header Note */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="handwritten-note" style={{ fontSize: '1.6rem', color: 'var(--accent-rose)' }}>
            ♡ little thoughts from daily conversations
          </span>
          <div style={{ width: '60px', height: '1px', background: 'rgba(217, 107, 131, 0.25)', margin: '0.5rem auto 0' }} />
        </div>

        {/* Memories Container inside the Sheet */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.2rem'
          }}
        >
          {memories.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, filter: 'blur(3px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.08 }}
              style={{
                alignSelf: item.align,
                maxWidth: '480px',
                width: '100%',
                transform: `rotate(${item.rotate})`,
                position: 'relative'
              }}
            >
              {/* Varying Visual Treatments */}
              {item.type === 'tapeScrap' ? (
                <div
                  style={{
                    background: 'rgba(253, 236, 239, 0.45)',
                    padding: '1.1rem 1.4rem',
                    borderRadius: '12px',
                    borderLeft: '2px dashed var(--accent-rose)',
                    position: 'relative'
                  }}
                >
                  <p className="font-serif text-deep" style={{ fontSize: '1.5rem', margin: '0 0 0.2rem', fontWeight: 500 }}>
                    "{item.text}"
                  </p>
                  <span className="handwritten-note" style={{ fontSize: '1.2rem', color: 'var(--accent-rose)' }}>
                    ♡ {item.note}
                  </span>
                </div>
              ) : item.type === 'polaroid' ? (
                <div
                  style={{
                    background: '#FFFDFC',
                    padding: '1.2rem 1.4rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(217, 107, 131, 0.2)',
                    boxShadow: '0 4px 14px rgba(180, 90, 110, 0.05)'
                  }}
                >
                  <p className="font-serif text-gradient-rose" style={{ fontSize: '1.55rem', margin: '0 0 0.3rem', fontWeight: 500 }}>
                    "{item.text}"
                  </p>
                  <span className="handwritten-note" style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
                    📌 {item.note}
                  </span>
                </div>
              ) : item.type === 'underlined' ? (
                <div>
                  <p
                    className="font-serif text-gradient-rose"
                    style={{
                      fontSize: '1.65rem',
                      margin: '0 0 0.2rem',
                      fontWeight: 400,
                      display: 'inline-block',
                      borderBottom: '1px solid var(--accent-rose)'
                    }}
                  >
                    "{item.text}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                    <span style={{ color: 'var(--accent-rose)', fontSize: '0.9rem' }}>♡</span>
                    <span className="handwritten-note" style={{ fontSize: '1.25rem', color: 'var(--text-body)' }}>
                      {item.note}
                    </span>
                  </div>
                </div>
              ) : (
                /* Freeform Floating Memory */
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ color: 'var(--accent-rose)', fontSize: '1.1rem' }}>♡</span>
                    <span className="font-serif text-deep" style={{ fontSize: '1.6rem', fontWeight: 400 }}>
                      "{item.text}"
                    </span>
                  </div>
                  <span className="handwritten-note" style={{ fontSize: '1.25rem', color: 'var(--accent-rose)', paddingLeft: '1.5rem', display: 'block', marginTop: '0.1rem' }}>
                    ~ {item.note}
                  </span>
                </div>
              )}

              {/* Delicate Connector Arrow */}
              {item.connector && (
                <div style={{ textAlign: 'center', marginTop: '0.6rem', color: 'var(--accent-rose)', opacity: 0.65, fontSize: '1.2rem' }}>
                  {item.connector}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
