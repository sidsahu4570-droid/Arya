import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { ShieldAlert, Smile, CheckCircle2, MessageSquareWarning } from 'lucide-react';

export default function AngrySection() {
  const [dealAccepted, setDealAccepted] = useState(false);

  return (
    <section id="when-youre-angry" className="section-container">
      <SectionHeader
        badge="10. Conflict Resolution"
        title="I Already Know One Thing..."
        subtitle="What happens when I inevitably mess up."
      />

      <GlassCard className="text-center" style={{ maxWidth: '750px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'rgba(223, 158, 142, 0.1)', color: 'var(--accent-rose)', marginBottom: '1.25rem' }}>
          <MessageSquareWarning size={28} />
        </div>

        <h3 className="font-serif text-gold" style={{ fontSize: '1.6rem', marginBottom: '1.25rem' }}>
          "If I ever become stupid enough to make the same mistake twice..."
        </h3>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          You'll probably get angry.<br />
          Maybe you'll lecture me. Maybe you'll give me <em>that look</em>. Maybe you'll ignore me for a while.
        </p>

        <div
          style={{
            background: 'rgba(223, 158, 142, 0.07)',
            border: '1px solid rgba(223, 158, 142, 0.2)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            margin: '1.5rem 0'
          }}
        >
          <p className="font-serif text-gradient-rose" style={{ fontSize: '1.35rem', margin: 0, fontWeight: 500 }}>
            "And if you ever get drunk and decide to beat me up...<br />
            please remember I'm on your side. 😂"
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={() => setDealAccepted(!dealAccepted)}
            className="btn-secondary"
            style={{
              borderColor: dealAccepted ? 'var(--accent-emerald)' : 'var(--border-glass)',
              color: dealAccepted ? 'var(--accent-emerald)' : 'var(--text-secondary)'
            }}
          >
            {dealAccepted ? (
              <>
                <CheckCircle2 size={18} />
                <span>Deal Accepted: No Violence! 🤝</span>
              </>
            ) : (
              <>
                <Smile size={18} />
                <span>Proposed Deal: No Violence. Complain Instead! 😂</span>
              </>
            )}
          </button>
        </div>
      </GlassCard>
    </section>
  );
}
