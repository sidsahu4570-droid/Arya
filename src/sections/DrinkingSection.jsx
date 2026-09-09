import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { GlassWater, Heart, Shield, Sparkles } from 'lucide-react';

export default function DrinkingSection() {
  return (
    <section id="when-you-drink" className="section-container">
      <SectionHeader
        badge="11. Caring Boundaries"
        title="When You Drink."
        subtitle="Worrying without controlling."
      />

      <GlassCard className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'rgba(230, 200, 148, 0.1)', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
          <GlassWater size={28} />
        </div>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          "I know you drink sometimes.<br />
          I'm not a fan of it. I'd probably still tell you to stop because I worry about your health.<br />
          <strong className="text-gold">But I'm not here to control you.</strong>"
        </p>

        <div style={{ background: 'rgba(18, 22, 32, 0.8)', border: '1px solid var(--border-glass)', padding: '1.5rem', borderRadius: 'var(--radius-md)', margin: '1.5rem 0', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
            <Shield size={18} />
            <span style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              The Imagined Scene
            </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7, margin: 0 }}>
            "If someday you're completely drunk, I'll probably be the idiot quietly getting you home safely, making sure you're comfortable, getting you water, and waiting until you fall asleep peacefully."
          </p>
        </div>

        {/* Playful Warning Banner */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{
            background: 'linear-gradient(135deg, rgba(223, 158, 142, 0.15) 0%, rgba(230, 200, 148, 0.1) 100%)',
            border: '1px solid rgba(223, 158, 142, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginTop: '1.5rem'
          }}
        >
          <span className="font-serif text-gold" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
            "One tiny condition though..."
          </span>
          <p className="text-gradient-rose font-serif" style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0.4rem 0 0' }}>
            "PLEASE DON'T TRY TO BOX ME AFTER TWO DRINKS. 😂"
          </p>
        </motion.div>
      </GlassCard>
    </section>
  );
}
