import React from 'react';
import { motion } from 'framer-motion';

export default function WhatIReallyWantSection() {
  const lines = [
    { text: "I don't need you to say yes today.", size: '1.4rem', gold: false },
    { text: "I don't need you to call this a relationship.", size: '1.4rem', gold: false },
    { text: "I don't need you to promise me anything.", size: '1.4rem', gold: false },
    { text: "I just want time.", size: '1.8rem', gold: true },
    { text: "I want to know you.", size: '1.5rem', gold: false },
    { text: "I want you to know me.", size: '1.5rem', gold: false },
    { text: "I want us to have enough conversations that one day...", size: '1.6rem', gold: false },
    { text: "...you don't have to wonder whether our vibes match.", size: 'clamp(2rem, 5vw, 3.5rem)', gold: true, climax: true },
    { text: "You'll just know.", size: '2rem', gold: true, highlight: true }
  ];

  return (
    <section
      id="what-i-really-want"
      style={{
        background: '#040508',
        padding: '8rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(230, 200, 148, 0.1)',
        borderBottom: '1px solid rgba(230, 200, 148, 0.1)'
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <span className="badge-pill" style={{ background: 'rgba(230, 200, 148, 0.08)' }}>
            13. What I Really Want
          </span>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
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
                color: line.gold ? 'var(--accent-gold-light)' : 'var(--text-secondary)',
                fontWeight: line.climax ? 600 : line.gold ? 500 : 300,
                lineHeight: 1.3,
                margin: 0,
                textShadow: line.climax ? '0 0 30px rgba(230, 200, 148, 0.3)' : 'none'
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
