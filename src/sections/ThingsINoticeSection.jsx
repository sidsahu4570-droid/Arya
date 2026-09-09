import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { Dumbbell, Shield, Sparkles, Moon, AlertCircle, Utensils, HeartHandshake, Smile } from 'lucide-react';

export default function ThingsINoticeSection() {
  const [emojiState, setEmojiState] = useState('angry'); // 'angry' -> 'transformed'

  const observations = [
    {
      icon: Shield,
      title: "Fiercely Independent",
      text: "You don't like explaining where you are, when you're going, or who you're with. You value your space."
    },
    {
      icon: Dumbbell,
      title: "Gym & Routine",
      text: "You stick to your gym routine no matter how packed or tiring your day gets."
    },
    {
      icon: Utensils,
      title: "Food is an Afterthought",
      text: "You get so deeply wrapped up in your day that lunch gets delayed and dinner disappears."
    },
    {
      icon: Moon,
      title: "Disappearing into Sleep",
      text: "When exhaustion hits, you can fall asleep so peacefully that you vanish from the world for hours."
    },
    {
      icon: AlertCircle,
      title: "Getting Annoyed at Me",
      text: "You have zero patience for silly mistakes—and you won't hesitate to give me that look or lecture."
    }
  ];

  return (
    <section id="things-i-notice" className="section-container">
      <SectionHeader
        badge="03. Observations"
        title="Things I Notice About You."
        subtitle="The little quirks, habits, and details that make you who you are."
      />

      <div className="grid-2" style={{ marginBottom: '2rem' }}>
        {observations.map((item, idx) => {
          const Icon = item.icon;
          return (
            <GlassCard key={idx} delay={idx * 0.1}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(230, 200, 148, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-gold)',
                    flexShrink: 0
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Interactive Emoji Story Card */}
      <GlassCard className="text-center" style={{ background: 'linear-gradient(135deg, rgba(26, 32, 46, 0.8) 0%, rgba(35, 25, 30, 0.6) 100%)' }}>
        <span className="badge-pill mb-4" style={{ background: 'rgba(223, 158, 142, 0.15)', color: 'var(--accent-rose)' }}>
          The Infamous Emoji Incident
        </span>

        <p className="font-serif" style={{ fontSize: '1.3rem', color: 'var(--text-primary)', margin: '1rem 0' }}>
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
              filter: 'drop-shadow(0 0 20px rgba(230, 200, 148, 0.3))',
              userSelect: 'none'
            }}
          >
            {emojiState === 'angry' ? '😡' : '😂 🫂'}
          </motion.div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            (Tap the emoji to see what happened)
          </p>
        </div>

        {emojiState === 'angry' ? (
          <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            "You thought I was angry at you. I was just texting normally!"
          </p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-gold" style={{ fontSize: '1.1rem', fontWeight: 500 }}>
              "That emoji was innocent. The consequences were not. 😂"
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.4rem' }}>
              And yes... I learned my lesson. Never sending that emoji again! 🤝
            </p>
          </motion.div>
        )}
      </GlassCard>
    </section>
  );
}
