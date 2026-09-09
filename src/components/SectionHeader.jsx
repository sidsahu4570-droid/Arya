import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ badge, title, subtitle, align = 'center' }) {
  return (
    <div className={`mb-12 ${align === 'left' ? 'text-left' : 'text-center'}`} style={{ textAlign: align }}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '0.6rem' }}
        >
          <span className="handwritten-note" style={{ fontSize: '1.4rem', color: 'var(--accent-rose)' }}>
            {badge}
          </span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.2rem, 5.2vw, 3.8rem)',
            color: 'var(--text-heading)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: subtitle ? '0.75rem' : 0
          }}
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-subtitle"
          style={{ maxWidth: '650px', margin: align === 'center' ? '0 auto' : 0, color: 'var(--text-body)' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
