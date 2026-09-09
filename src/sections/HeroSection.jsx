import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

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
      {/* Soft central glow */}
      <div
        className="ambient-glow ambient-gold"
        style={{
          width: '450px',
          height: '450px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.18
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '1.5rem' }}
      >
        <span className="badge-pill">
          <Sparkles size={13} /> Dedicated to Arya
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-gradient-gold"
        style={{
          fontSize: 'clamp(4rem, 12vw, 8.5rem)',
          letterSpacing: '0.08em',
          fontWeight: 400,
          textShadow: '0 0 50px rgba(230, 200, 148, 0.2)',
          marginBottom: '1rem'
        }}
      >
        ARYA
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-serif text-subtitle"
        style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          maxWidth: '650px',
          color: 'var(--accent-gold-light)',
          fontStyle: 'italic',
          marginBottom: '1.25rem',
          lineHeight: 1.4
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
          fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
          fontWeight: 300,
          marginBottom: '3rem',
          lineHeight: 1.6
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
        <button onClick={scrollToNext} className="btn-primary">
          <span>Read This</span>
          <ChevronDown size={18} />
        </button>
      </motion.div>
    </section>
  );
}
