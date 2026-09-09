import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { Utensils, Heart, MapPin, Coffee } from 'lucide-react';

export default function FoodAndCareSection() {
  return (
    <section id="food-and-care" className="section-container">
      <SectionHeader
        badge="05. Simple Care"
        title="Please Eat First."
        subtitle="Because honestly, it bothers me more than it should when you skip meals."
      />

      <GlassCard className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Animated Glowing Plate Illustration */}
        <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 2rem' }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '1px dashed rgba(230, 200, 148, 0.4)',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(230, 200, 148, 0.1)',
              border: '1px solid var(--accent-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-gold)',
              position: 'absolute',
              top: '20px',
              left: '20px',
              boxShadow: '0 0 25px rgba(230, 200, 148, 0.2)'
            }}
          >
            <Utensils size={32} />
          </div>
        </div>

        <p className="font-serif text-subtitle" style={{ fontSize: '1.3rem', color: 'var(--text-primary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          "There have been moments when you were so busy that lunch became late, dinner disappeared, and sleep won.<br /><br />
          And honestly... I don't know why something as simple as you not eating can bother me this much."
        </p>

        <div
          style={{
            background: 'rgba(230, 200, 148, 0.05)',
            border: '1px solid var(--border-glass)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            margin: '1.5rem 0',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
            <MapPin size={18} />
            <span style={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              The Indore Connection
            </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', margin: 0, lineHeight: 1.7 }}>
            "If you were here in Indore, I'd probably annoy you until you ate something. And yes, if necessary, I'd make it myself.<br /><br />
            One day, when you come to Indore, I'll introduce you to my favourite kind of care: <strong className="text-gold">home food, long conversations, and someone asking you for the hundredth time... 'Lunch hua?'</strong>"
          </p>
        </div>

        <p className="text-muted" style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>
          (No excuses allowed when you're busy!)
        </p>
      </GlassCard>
    </section>
  );
}
