import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Sparkles, Heart } from 'lucide-react';

export default function HeadphonesIntroModal({ onEnter }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(22, 10, 16, 0.96)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        textAlign: 'center'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          maxWidth: '460px',
          width: '100%',
          padding: '3.5rem 2.25rem',
          borderRadius: 'var(--radius-lg)',
          background: 'rgba(50, 19, 31, 0.75)',
          border: '1px solid rgba(231, 184, 193, 0.25)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(125, 38, 59, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <span className="handwritten-note mb-2" style={{ fontSize: '1.4rem' }}>
          for you.
        </span>

        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(231, 184, 193, 0.12)',
            border: '1px solid var(--accent-blush)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-blush)',
            margin: '1.25rem 0',
            boxShadow: '0 0 25px rgba(231, 184, 193, 0.2)'
          }}
        >
          <Headphones size={26} />
        </motion.div>

        <h2 className="font-serif text-gradient-rose" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.5rem)', marginBottom: '0.75rem', fontWeight: 400 }}>
          Put your headphones on. 🤍
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '2.25rem', maxWidth: '340px' }}>
          One little thing before you begin... put on your headphones for the soundtrack.
        </p>

        <button onClick={onEnter} className="btn-romantic-link" style={{ fontSize: '1.5rem', color: 'var(--accent-cream)' }}>
          <span>open the letter →</span>
        </button>
      </motion.div>
    </motion.div>
  );
}
