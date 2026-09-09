import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { Unlock, Lock, Sparkles, Heart } from 'lucide-react';

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
        badge="14. The Journey Ahead"
        title="Waiting For The Vibes."
        subtitle="Chapter by chapter, without rushing."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '750px', margin: '0 auto' }}>
        {chapters.map((chap, idx) => {
          const Icon = chap.icon;
          return (
            <GlassCard
              key={idx}
              delay={idx * 0.15}
              style={{
                borderColor: chap.unlocked ? 'var(--border-glass-hover)' : 'rgba(255, 255, 255, 0.05)',
                background: chap.unlocked ? 'var(--bg-card)' : 'rgba(12, 15, 22, 0.5)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span
                  className="badge-pill"
                  style={{
                    background: chap.unlocked ? 'rgba(230, 200, 148, 0.1)' : 'rgba(255, 255, 255, 0.04)',
                    color: chap.unlocked ? 'var(--accent-gold)' : 'var(--text-muted)'
                  }}
                >
                  {chap.badge}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: chap.unlocked ? 'var(--accent-gold)' : 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Icon size={16} />
                  <span>{chap.status}</span>
                </div>
              </div>

              <h3 className="font-serif" style={{ fontSize: '1.4rem', color: chap.unlocked ? 'var(--text-primary)' : 'var(--text-muted)', marginBottom: '0.4rem' }}>
                {chap.title}
              </h3>

              <p style={{ fontSize: '0.95rem', color: chap.unlocked ? 'var(--text-secondary)' : 'var(--text-muted)', margin: 0 }}>
                {chap.desc}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
