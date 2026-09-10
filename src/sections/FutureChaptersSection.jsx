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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '720px', margin: '0 auto' }}>
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
                paddingLeft: '1.5rem',
                borderLeft: chap.unlocked ? '2px solid var(--accent-rose)' : '2px solid rgba(217, 107, 131, 0.2)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="handwritten-note" style={{ fontSize: '1.45rem', color: chap.unlocked ? 'var(--accent-rose)' : 'var(--text-muted)' }}>
                  ♡ {chap.badge}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: chap.unlocked ? 'var(--accent-rose)' : 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Icon size={15} />
                  <span>{chap.status}</span>
                </div>
              </div>

              <h3 className="font-serif" style={{ fontSize: '1.55rem', color: chap.unlocked ? 'var(--text-deep)' : 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 400 }}>
                {chap.title}
              </h3>

              <p style={{ fontSize: '1.02rem', color: chap.unlocked ? 'var(--text-body)' : 'var(--text-muted)', margin: 0, lineHeight: 1.65 }}>
                {chap.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
