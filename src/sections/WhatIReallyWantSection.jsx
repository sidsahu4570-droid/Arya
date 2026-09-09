import React from 'react';
import { motion } from 'framer-motion';

export default function WhatIReallyWantSection() {
  const lines = [
    { text: "I don't need you to say yes today.", size: '1.45rem', rose: false },
    { text: "I don't need you to call this a relationship.", size: '1.45rem', rose: false },
    { text: "I don't need you to promise me anything.", size: '1.45rem', rose: false },
    { text: "I just want time.", size: '1.95rem', rose: true },
    { text: "I want to know you.", size: '1.55rem', rose: false },
    { text: "I want you to know me.", size: '1.55rem', rose: false },
    { text: "I want us to have enough conversations that one day...", size: '1.65rem', rose: false },
    { text: "...you don't have to wonder whether our vibes match.", size: 'clamp(2.2rem, 5.5vw, 3.8rem)', rose: true, climax: true },
    { text: "You'll just know.", size: '2.1rem', rose: true, highlight: true }
  ];

  return (
    <section
      id="what-i-really-want"
      style={{
        background: 'linear-gradient(180deg, #fff7f5 0%, #fdecef 50%, #fff7f5 100%)',
        padding: '9rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(217, 107, 131, 0.15)',
        borderBottom: '1px solid rgba(217, 107, 131, 0.15)'
      }}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="handwritten-note" style={{ fontSize: '1.6rem', color: 'var(--accent-rose)' }}>
            what I really want...
          </span>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
          {lines.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="font-serif"
              style={{
                fontSize: line.size,
                color: line.rose ? 'var(--text-heading)' : 'var(--text-body)',
                fontWeight: line.climax ? 500 : 300,
                lineHeight: 1.35,
                margin: 0
              }}
            >
              {line.text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
