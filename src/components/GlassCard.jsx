import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', delay = 0, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-card ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}
