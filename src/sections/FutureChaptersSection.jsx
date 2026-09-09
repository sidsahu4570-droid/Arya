import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Unlock, Lock } from 'lucide-react';

export default function FutureChaptersSection() {
  const chapters = [
    {
      badge: "NOW",
      title: "Getting to know each other",
      status: "Unlocked",
      icon: Unlock,
      desc: "Talking, sharing stories, discovering each other's routines, habits, and values.",
      unlocked: true
    },
    {
      badge: "LATER",
      title: "Finding the things that make us laugh",
      status: "Unlocked",
      icon: Unlock,
      desc: "Building inside jokes, finding comfort in silence, and being completely ourselves.",
      unlocked: true
    },
    {
      badge: "SOMEDAY",
      title: "Seeing whether this became something real",
      status: "Not Unlocked Yet",
      icon: Lock,
      desc: "That's okay. I'm patient.",
      unlocked: false
    }
  ];

  return (
    <section id="future-chapters" className="section-container">
      <SectionHeader
        badge="the journey ahead"
        title="Waiting For The Vibes."
        subtitle="Chapter by chapter, without rushing."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', maxWidth: '750px', margin: '0 auto' }}>
        {chapters.map((chap, idx) => {
          const Icon = chap.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                background: chap.unlocked ? 'rgba(50, 19, 31, 0.65)' : 'rgba(22, 10, 16, 0.5)',
                border: chap.unlocked ? '1px solid rgba(231, 184, 193, 0.25)' : '1px solid rgba(231, 184, 193, 0.1)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="handwritten-note" style={{ fontSize: '1.35rem', color: chap.unlocked ? 'var(--accent-blush)' : 'var(--text-muted)' }}>
                  {chap.badge}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: chap.unlocked ? 'var(--accent-blush)' : 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Icon size={15} />
                  <span>{chap.status}</span>
                </div>
              </div>

              <h3 className="font-serif" style={{ fontSize: '1.5rem', color: chap.unlocked ? 'var(--text-primary)' : 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}>
                {chap.title}
              </h3>

              <p style={{ fontSize: '0.98rem', color: chap.unlocked ? 'var(--text-secondary)' : 'var(--text-muted)', margin: 0, lineHeight: 1.65 }}>
                {chap.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
