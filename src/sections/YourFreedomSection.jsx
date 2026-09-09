import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { ArrowRight, Feather, Shield, Heart } from 'lucide-react';

export default function YourFreedomSection() {
  const shifts = [
    { from: "Questioning you", to: "Knowing you" },
    { from: "Controlling you", to: "Trusting you" },
    { from: "Demanding updates", to: "Wanting to hear from you" }
  ];

  return (
    <section id="your-freedom" className="section-container">
      <SectionHeader
        badge="04. Freedom & Space"
        title="I Know You Need Your Space."
        subtitle="Affection without possessiveness."
      />

      <GlassCard className="mb-10 text-center">
        <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'rgba(230, 200, 148, 0.1)', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
          <Feather size={24} />
        </div>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          "You once told me you don't like answering anyone about where you are, when you're going, or who you're with.<br /><br />
          <span className="text-gold">I understand that.</span><br /><br />
          I don't want to become another person you feel you have to report everything to.<br />
          I want to be the person you <strong className="text-gradient-rose">WANT</strong> to tell things to."
        </p>

        <p className="text-muted font-serif" style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
          — There is a world of difference.
        </p>
      </GlassCard>

      {/* Interactive Shift Cards */}
      <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {shifts.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="glass-card"
            style={{
              padding: '1.25rem 1.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              background: 'rgba(18, 22, 32, 0.7)'
            }}
          >
            <div style={{ flex: 1, textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '1rem' }}>
              {item.from}
            </div>
            
            <div style={{ color: 'var(--accent-gold)', display: 'flex', alignItems: 'center' }}>
              <ArrowRight size={18} />
            </div>

            <div style={{ flex: 1, textAlign: 'right', fontWeight: 600, color: 'var(--accent-gold-light)', fontSize: '1.1rem' }}>
              {item.to}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
