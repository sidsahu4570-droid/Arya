import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function ThingsINoticeSection() {
  const [emojiState, setEmojiState] = useState('angry');

  const observations = [
    {
      title: "Fiercely Independent",
      text: "You don't like explaining where you are, when you're going, or who you're with. You value your space."
    },
    {
      title: "Gym & Routine",
      text: "You stick to your gym routine no matter how packed or tiring your day gets."
    },
    {
      title: "Food is an Afterthought",
      text: "You get so deeply wrapped up in your day that lunch gets delayed and dinner disappears."
    },
    {
      title: "Disappearing into Sleep",
      text: "When exhaustion hits, you can fall asleep so peacefully that you vanish from the world for hours."
    },
    {
      title: "Getting Annoyed at Me",
      text: "You have zero patience for silly mistakes—and you won't hesitate to give me that look or lecture."
    }
  ];

  return (
    <section id="things-i-notice" className="section-container">
      <SectionHeader
        badge="observations"
        title="Things I Notice About You."
        subtitle="The little quirks, habits, and details that make you who you are."
      />

      <div style={{ maxWidth: '750px', margin: '0 auto 3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {observations.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            style={{
              padding: '1.75rem',
              borderRadius: 'var(--radius-md)',
              background: '#fffdfc',
              border: '1px solid rgba(217, 107, 131, 0.2)',
              boxShadow: '0 10px 30px rgba(100, 40, 55, 0.05)'
            }}
          >
            <h3 className="font-serif text-gradient-rose" style={{ fontSize: '1.5rem', marginBottom: '0.4rem', fontWeight: 400 }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-body)', margin: 0, lineHeight: 1.75 }}>
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Interactive Emoji Story Note */}
      <div
        className="glass-card text-center"
        style={{
          maxWidth: '750px',
          margin: '0 auto',
          background: '#fffdfc',
          borderColor: 'rgba(217, 107, 131, 0.3)'
        }}
      >
        <span className="handwritten-note mb-2" style={{ fontSize: '1.5rem', color: 'var(--accent-rose)' }}>
          The Infamous Emoji Incident
        </span>

        <p className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-deep)', margin: '1rem 0' }}>
          "And apparently... one emoji can create an entire situation."
        </p>

        <div style={{ margin: '1.5rem 0' }}>
          <motion.div
            onClick={() => setEmojiState(emojiState === 'angry' ? 'transformed' : 'angry')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontSize: '4.5rem',
              cursor: 'pointer',
              display: 'inline-block',
              filter: 'drop-shadow(0 0 20px rgba(246, 214, 221, 0.8))',
              userSelect: 'none'
            }}
          >
            {emojiState === 'angry' ? '😡' : '😂 🫂'}
          </motion.div>
          <p className="handwritten-note" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            (tap the emoji to see what happened)
          </p>
        </div>

        {emojiState === 'angry' ? (
          <p style={{ color: 'var(--text-body)', fontStyle: 'italic' }}>
            "You thought I was angry at you. I was just texting normally!"
          </p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-rose" style={{ fontSize: '1.15rem', fontWeight: 500 }}>
              "That emoji was innocent. The consequences were not. 😂"
            </p>
            <p style={{ color: 'var(--text-body)', fontSize: '0.98rem', marginTop: '0.4rem' }}>
              And yes... I learned my lesson. Never sending that emoji again! 🤝
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
