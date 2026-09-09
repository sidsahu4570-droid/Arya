import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ badge, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

  return (
    <div className={`mb-12 ${alignClass}`} style={{ textAlign: align }}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '1rem' }}
        >
          <span className="badge-pill">{badge}</span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-heading text-gradient-gold"
          style={{ marginBottom: subtitle ? '0.75rem' : 0 }}
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
          style={{ maxWidth: '650px', margin: align === 'center' ? '0 auto' : 0 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
