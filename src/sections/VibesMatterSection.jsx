import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { Smile, MessageSquare, ShieldCheck, HeartHandshake, Zap, Heart, Compass, Home, Utensils, Moon, Hourglass, Eye } from 'lucide-react';

export default function VibesMatterSection() {
  const [selectedVibe, setSelectedVibe] = useState(null);

  const vibeCategories = [
    { name: 'Humour', icon: Smile, note: 'Laughing at the same stupid jokes & inside jokes.' },
    { name: 'Communication', icon: MessageSquare, note: 'Being able to talk about anything without filter.' },
    { name: 'Trust', icon: ShieldCheck, note: 'Knowing we have each other\'s back, always.' },
    { name: 'Comfort', icon: HeartHandshake, note: 'Silence feeling easy, never awkward.' },
    { name: 'Ambition', icon: Zap, note: 'Supporting each other\'s big dreams & career goals.' },
    { name: 'Care', icon: Heart, note: 'Noticing the little things when life gets overwhelming.' },
    { name: 'Adventure', icon: Compass, note: 'Exploring new places and spontaneous trips.' },
    { name: 'Family', icon: Home, note: 'Respecting where we come from and who we love.' },
    { name: 'Food', icon: Utensils, note: 'Indore food dates and making sure you actually eat.' },
    { name: 'Late-Night Talks', icon: Moon, note: 'Deep 2 AM conversations when the world stops.' },
    { name: 'Patience', icon: Hourglass, note: 'Taking time to build something genuine.' },
    { name: 'Understanding', icon: Eye, note: 'Accepting each other\'s habits without judgment.' }
  ];

  return (
    <section id="vibes-matter" className="section-container">
      <SectionHeader
        badge="02. The Foundation"
        title="You Said Vibes Matter."
        subtitle="When I asked if our age difference mattered, you answered with something I'll never forget."
      />

      <GlassCard className="text-center mb-12">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <div className="glass-chip" style={{ padding: '0.6rem 1.4rem', fontSize: '1rem' }}>
            Arya: <strong className="text-gold" style={{ marginLeft: '0.4rem' }}>25</strong>
          </div>
          <div className="glass-chip" style={{ padding: '0.6rem 1.4rem', fontSize: '1rem' }}>
            Siddharth: <strong className="text-gold" style={{ marginLeft: '0.4rem' }}>22</strong>
          </div>
        </div>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
          "You told me age doesn't matter.<br />
          <span className="text-gradient-rose" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Vibes do.</span>"
        </p>

        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
          And somehow, that simple answer made me care even more about the question that actually matters...
        </p>
      </GlassCard>

      {/* Animated Big Question */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          padding: '3rem 1.5rem',
          margin: '2rem 0 3rem',
          borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, rgba(230, 200, 148, 0.08) 0%, rgba(223, 158, 142, 0.05) 100%)',
          border: '1px solid var(--border-glass)'
        }}
      >
        <h3 className="font-serif text-gradient-gold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
          "Will our vibes match?"
        </h3>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
          Not today. Not tomorrow. Maybe not even soon.<br />
          But I'm genuinely waiting for the day you know me well enough to answer that yourself.
        </p>
      </motion.div>

      {/* Vibe Meter Cards */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <span className="badge-pill" style={{ background: 'rgba(223, 158, 142, 0.1)', color: 'var(--accent-rose)' }}>
          Things I Hope We'll Discover Together
        </span>
      </div>

      <div className="grid-3">
        {vibeCategories.map((vibe, idx) => {
          const Icon = vibe.icon;
          const isSelected = selectedVibe === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setSelectedVibe(isSelected ? null : idx)}
              className="glass-card"
              style={{
                cursor: 'pointer',
                borderColor: isSelected ? 'var(--accent-gold)' : 'var(--border-glass)',
                background: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                padding: '1.4rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(230, 200, 148, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-gold)'
                  }}
                >
                  <Icon size={18} />
                </div>
                <h4 className="font-serif" style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: 0 }}>
                  {vibe.name}
                </h4>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                {vibe.note}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
