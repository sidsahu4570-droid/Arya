import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

export default function MyFamilySection() {
  const familyMembers = [
    "Grandfather", "Grandmother", "Uncle", "Aunt",
    "Cousins", "Mother", "Sister", "Me"
  ];

  return (
    <section id="my-family" className="section-container">
      <SectionHeader
        badge="roots & values"
        title="I Should Tell You About The Life I Come From."
        subtitle="Honest transparency about who I am and where I come from."
      />

      <div className="glass-card text-center" style={{ maxWidth: '850px', margin: '0 auto', background: '#fffdfc' }}>
        <span className="handwritten-note mb-2" style={{ fontSize: '1.55rem', color: 'var(--accent-rose)' }}>
          "This is the home I come from."
        </span>

        <h3 className="font-serif text-gradient-rose" style={{ fontSize: '1.7rem', margin: '0.75rem 0 1.5rem', fontWeight: 400 }}>
          I grew up in a joint family.
        </h3>

        {/* Floating Family Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.25rem' }}>
          {familyMembers.map((member, idx) => (
            <span
              key={idx}
              className="handwritten-note"
              style={{
                padding: '0.4rem 1.1rem',
                fontSize: '1.3rem',
                borderRadius: 'var(--radius-full)',
                background: member === 'Me' ? 'var(--accent-light-rose)' : 'rgba(253, 236, 239, 0.7)',
                border: '1px solid rgba(217, 107, 131, 0.25)',
                color: 'var(--text-deep)'
              }}
            >
              {member}
            </span>
          ))}
        </div>

        <div style={{ textAlign: 'left', background: 'rgba(253, 236, 239, 0.5)', padding: '1.85rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(217, 107, 131, 0.2)' }}>
          <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            "If someday life takes us far enough that we're talking about building a home together, I want you to know that my family will always be a deeply important part of my life."
          </p>

          <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            <strong className="text-rose font-serif" style={{ fontSize: '1.2rem' }}>"I won't ask you to choose between me and them.</strong> And I don't want to choose between the people I love either."
          </p>

          <p className="font-serif text-gradient-rose" style={{ fontSize: '1.25rem', margin: 0, fontStyle: 'italic' }}>
            "The only thing I would hope for is that we learn how to make space for each other."
          </p>
        </div>
      </div>
    </section>
  );
}
