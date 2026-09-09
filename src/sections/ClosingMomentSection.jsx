import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Clock, Compass } from 'lucide-react';

export default function ClosingMomentSection() {
  const [step, setStep] = useState(0); // 0: Initial buttons, 1: After "Don't answer yet", 2: After "Maybe someday"

  const handleSomedayClick = () => {
    setStep(2);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#e6c894', '#df9e8e', '#f5f0eb']
      });
    } catch (e) {
      // fallback
    }
  };

  return (
    <section
      id="closing-moment"
      style={{
        minHeight: '80vh',
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
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '650px', width: '100%' }}
      >
        <span className="badge-pill mb-4" style={{ marginBottom: '1.5rem' }}>
          16. Closing Moment
        </span>

        <h2 className="text-heading text-gradient-gold mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
          One last thing...
        </h2>

        <div className="glass-card" style={{ padding: '2.5rem 1.5rem', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center', width: '100%' }}
              >
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  What do you want to say right now?
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <button onClick={() => setStep(1)} className="btn-secondary">
                    <Clock size={16} />
                    <span>Don't answer yet.</span>
                  </button>

                  <button onClick={handleSomedayClick} className="btn-primary">
                    <Sparkles size={16} />
                    <span>Maybe someday?</span>
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
                <p className="font-serif text-gold" style={{ fontSize: '1.5rem' }}>
                  "Because I know. You need time."
                </p>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '450px' }}>
                  Take all the time you need. No pressure, ever.
                </p>

                <button onClick={handleSomedayClick} className="btn-primary" style={{ marginTop: '1rem' }}>
                  <Sparkles size={16} />
                  <span>Maybe someday?</span>
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
                <p className="font-serif text-gold" style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>
                  "That's all I've ever wanted to hear."
                </p>

                <div
                  style={{
                    padding: '1.25rem 2rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(230, 200, 148, 0.1)',
                    border: '1px solid var(--accent-gold)',
                    marginTop: '0.5rem'
                  }}
                >
                  <p className="font-serif text-gradient-gold" style={{ fontSize: '1.35rem', fontWeight: 600, margin: 0 }}>
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
