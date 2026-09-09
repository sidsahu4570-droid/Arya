import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { ShieldCheck, PhoneCall, Heart } from 'lucide-react';

export default function SafetySection() {
  return (
    <section id="safety-section" className="section-container">
      <SectionHeader
        badge="12. Reassurance"
        title="You Don't Have To Face The World Alone."
        subtitle="A quiet promise of presence."
      />

      <GlassCard className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'rgba(230, 200, 148, 0.1)', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
          <ShieldCheck size={28} />
        </div>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.3rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          "I know there are things you're afraid of. I know life isn't always simple.<br /><br />
          I can't promise that nothing bad will ever happen.<br />
          <span className="text-gold">But I can promise that if you're important to me, I won't casually walk away when things get difficult.</span>"
        </p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-full)', background: 'rgba(230, 200, 148, 0.08)', border: '1px solid var(--border-glass)', marginTop: '1rem' }}>
          <PhoneCall size={18} className="text-gold" />
          <span style={{ fontSize: '1rem', color: 'var(--accent-gold-light)', fontWeight: 500 }}>
            "I want to be someone you feel safe calling."
          </span>
        </div>
      </GlassCard>
    </section>
  );
}
