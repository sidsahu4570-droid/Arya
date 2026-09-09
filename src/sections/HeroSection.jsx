import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToNext = () => {
    const el = document.getElementById('how-this-started');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '2rem 1.5rem',
        zIndex: 2
      }}
    >
      {/* Soft romantic rose glow */}
      <div
        className="ambient-glow ambient-rose"
        style={{
          width: '500px',
          height: '500px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.2
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '0.75rem' }}
      >
        <span className="handwritten-note" style={{ fontSize: '1.6rem', color: 'var(--accent-blush)' }}>
          for you.
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ position: 'relative', display: 'inline-block', marginBottom: '1.25rem' }}
      >
        <h1
          className="text-gradient-rose"
          style={{
            fontSize: 'clamp(4.5rem, 14vw, 9.5rem)',
            letterSpacing: '0.08em',
            fontWeight: 400,
            lineHeight: 1,
            margin: 0
          }}
        >
          ARYA
        </h1>

        {/* Subtle handwritten underline SVG */}
        <svg
          width="100%"
          height="16"
          viewBox="0 0 200 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginTop: '-10px', opacity: 0.7 }}
        >
          <path
            d="M5 11C40 4 110 3 195 12"
            stroke="var(--accent-rose)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-serif text-subtitle"
        style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.85rem)',
          maxWidth: '650px',
          color: 'var(--text-primary)',
          fontStyle: 'italic',
          marginBottom: '1.25rem',
          lineHeight: 1.45
        }}
      >
        "Maybe this is nothing yet.<br />
        Maybe someday it becomes everything."
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          maxWidth: '540px',
          color: 'var(--text-secondary)',
          fontSize: 'clamp(0.98rem, 1.8vw, 1.12rem)',
          fontWeight: 300,
          marginBottom: '3.5rem',
          lineHeight: 1.65
        }}
      >
        Some things aren't meant to be decided in one conversation.<br />
        They're meant to be discovered.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <button onClick={scrollToNext} className="btn-romantic-link">
          <span>read my little story ↓</span>
        </button>
      </motion.div>
    </section>
  );
}
