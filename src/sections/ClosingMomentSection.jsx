import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function ClosingMomentSection() {
  const [step, setStep] = useState(0);

  const handleSomedayClick = () => {
    setStep(2);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#d96b83', '#e9a6b4', '#f6d6dd', '#fffdfc']
      });
    } catch (e) {
      // fallback
    }
  };

  return (
    <section
      id="closing-moment"
      style={{
        minHeight: '75vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 1.5rem',
        position: 'relative',
        zIndex: 2
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '650px', width: '100%' }}
      >
        <span className="handwritten-note mb-3" style={{ fontSize: '1.6rem', color: 'var(--accent-rose)' }}>
          ♡ closing moment
        </span>

        <h2 className="text-heading text-gradient-rose mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1.75rem' }}>
          One last thing...
        </h2>

        <div
          style={{
            padding: '2rem 1rem',
            minHeight: '220px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', width: '100%' }}
              >
                <p style={{ color: 'var(--text-body)', fontSize: '1.12rem', marginBottom: '0.5rem' }}>
                  What do you want to say right now?
                </p>

                <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <button onClick={() => setStep(1)} className="btn-romantic-link" style={{ fontSize: '1.45rem' }}>
                    <span>Don't answer yet →</span>
                  </button>

                  <button onClick={handleSomedayClick} className="btn-romantic-link" style={{ fontSize: '1.45rem', color: 'var(--text-deep)' }}>
                    <span>Maybe someday? →</span>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center' }}
              >
                <p className="font-serif text-gradient-rose" style={{ fontSize: '1.65rem' }}>
                  "Because I understand. Finding out if our vibes match takes time."
                </p>

                <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', maxWidth: '450px' }}>
                  Take all the time you need. No pressure, ever.
                </p>

                <button onClick={handleSomedayClick} className="btn-romantic-link" style={{ marginTop: '0.75rem', fontSize: '1.45rem', color: 'var(--text-deep)' }}>
                  <span>Maybe someday? →</span>
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}
              >
                <p className="font-serif text-gradient-rose" style={{ fontSize: '1.7rem', marginBottom: '0.2rem' }}>
                  "That's all I've ever wanted to hear."
                </p>

                <div
                  style={{
                    padding: '1.25rem 2.25rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(253, 236, 239, 0.8)',
                    border: '1px stroke var(--accent-rose)',
                    marginTop: '0.5rem'
                  }}
                >
                  <p className="font-serif text-gradient-rose" style={{ fontSize: '1.4rem', fontWeight: 500, margin: 0 }}>
                    Until then, let's just see where the vibes take us. 🤍
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
