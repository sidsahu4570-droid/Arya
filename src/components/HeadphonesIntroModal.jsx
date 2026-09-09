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
        background: 'rgba(8, 10, 15, 0.95)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        textAlign: 'center'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          maxWidth: '480px',
          width: '100%',
          padding: '3rem 2rem',
          borderRadius: 'var(--radius-lg)',
          background: 'rgba(18, 22, 32, 0.8)',
          border: '1px solid rgba(230, 200, 148, 0.25)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(230, 200, 148, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(230, 200, 148, 0.1)',
            border: '1px solid var(--accent-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-gold)',
            marginBottom: '1.5rem',
            boxShadow: '0 0 25px rgba(230, 200, 148, 0.25)'
          }}
        >
          <Headphones size={28} />
        </motion.div>

        <span className="badge-pill mb-3" style={{ background: 'rgba(230, 200, 148, 0.1)', color: 'var(--accent-gold)' }}>
          One little thing before you begin...
        </span>

        <h2 className="font-serif text-gradient-gold" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', marginBottom: '0.75rem', fontWeight: 500 }}>
          Put your headphones on. 🤍
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '360px' }}>
          This story includes a gentle romantic instrumental soundtrack created to accompany your read.
        </p>

        <button onClick={onEnter} className="btn-primary" style={{ padding: '0.95rem 2.75rem', fontSize: '1.05rem' }}>
          <span>Enter</span>
          <Sparkles size={18} />
        </button>
      </motion.div>
    </motion.div>
  );
}
