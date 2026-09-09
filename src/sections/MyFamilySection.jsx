import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { Users, Heart, Home, ShieldCheck } from 'lucide-react';

export default function MyFamilySection() {
  const familyMembers = [
    "Grandfather", "Grandmother", "Uncle", "Aunt",
    "Cousins", "Mother", "Sister", "Me"
  ];

  return (
    <section id="my-family" className="section-container">
      <SectionHeader
        badge="09. Roots & Values"
        title="I Should Tell You About The Life I Come From."
        subtitle="Honest transparency about who I am and where I come from."
      />

      <GlassCard className="mb-10 text-center" style={{ maxWidth: '850px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'rgba(230, 200, 148, 0.1)', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
          <Home size={28} />
        </div>

        <h3 className="font-serif text-gold" style={{ fontSize: '1.6rem', marginBottom: '1.25rem' }}>
          "I grow up in a joint family."
        </h3>

        {/* Family Pill Tree */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
          {familyMembers.map((member, idx) => (
            <span
              key={idx}
              className="glass-chip"
              style={{
                padding: '0.5rem 1.1rem',
                fontSize: '0.92rem',
                borderColor: member === 'Me' ? 'var(--accent-gold)' : 'var(--border-glass)',
                color: member === 'Me' ? 'var(--accent-gold)' : 'var(--text-secondary)'
              }}
            >
              {member}
            </span>
          ))}
        </div>

        <div style={{ textAlign: 'left', background: 'rgba(255, 255, 255, 0.02)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-glass)' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            "If someday life takes us far enough that we're talking about building a home together, I want you to know that my family will always be a deeply important part of my life."
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            <strong className="text-gold">"I won't ask you to choose between me and them.</strong> And I don't want to choose between the people I love either."
          </p>

          <p className="font-serif text-gold" style={{ fontSize: '1.2rem', margin: 0, fontStyle: 'italic' }}>
            "The only thing I would hope for is that we learn how to make space for each other."
          </p>
        </div>
      </GlassCard>
    </section>
  );
}
