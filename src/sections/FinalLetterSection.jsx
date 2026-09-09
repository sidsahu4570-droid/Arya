import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { Feather, Heart } from 'lucide-react';

export default function FinalLetterSection() {
  return (
    <section id="final-letter" className="section-container">
      <SectionHeader
        badge="15. A Letter For You"
        title="For Arya."
        subtitle="Written from the heart."
      />

      <GlassCard
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(26, 30, 42, 0.85) 0%, rgba(18, 21, 30, 0.95) 100%)',
          borderColor: 'rgba(230, 200, 148, 0.25)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(230, 200, 148, 0.1)',
          padding: '3rem 2.5rem'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--border-glass)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-gold)' }}>
            <Feather size={20} />
            <span className="font-serif" style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>Personal Letter</span>
          </div>
          {/* Wax seal detail */}
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #df9e8e, #e6c894)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#090b10',
              fontWeight: 700,
              fontSize: '0.85rem',
              boxShadow: '0 0 10px rgba(230, 200, 148, 0.4)'
            }}
          >
            A&S
          </div>
        </div>

        <div className="font-serif" style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', lineHeight: 1.85 }}>
          <p style={{ marginBottom: '1.25rem' }}>Maybe I'm getting ahead of myself.</p>
          <p style={{ marginBottom: '1.25rem' }}>Maybe I'm imagining too many things too soon.</p>
          <p style={{ marginBottom: '1.25rem' }}>But I can't help it. I like you. A lot.</p>

          <p style={{ marginBottom: '1.25rem' }}>
            And somewhere between asking whether you had lunch, wondering whether you reached home, getting worried when you disappear, laughing over stupid things, and apologising over one completely misunderstood emoji...<br />
            <span className="text-gold" style={{ fontWeight: 600 }}>you became someone I genuinely care about.</span>
          </p>

          <p style={{ marginBottom: '1.25rem' }}>
            I know you don't know me enough yet. That's okay.<br />
            I'm not asking you to decide. Take your time. Know me properly. Let me know you properly.
          </p>

          <p style={{ marginBottom: '1.5rem', color: 'var(--accent-gold-light)', fontStyle: 'italic' }}>
            And if one day you look at everything we've built between these conversations and think...<br />
            <span style={{ fontSize: '1.35rem', fontWeight: 600, color: '#fff' }}>'Yeah. Our vibes actually do match.'</span><br />
            Then maybe we can start writing the next chapter.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Until then... I'll just be here.<br />
            Learning you. Supporting you. Annoying you a little. Making sure you eat. Arguing about stupid things. Apologising when I'm wrong.
          </p>

          <p style={{ marginBottom: '2rem', fontSize: '1.3rem', color: 'var(--accent-gold)' }}>
            And hoping that someday, when you think about the future, I'm somewhere in it.
          </p>

          <div style={{ textAlign: 'right', marginTop: '3rem', borderTop: '1px solid var(--border-glass)', paddingTop: '1.5rem' }}>
            <span className="font-serif text-gold" style={{ fontSize: '1.6rem', fontWeight: 600 }}>
              — Siddharth
            </span>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
