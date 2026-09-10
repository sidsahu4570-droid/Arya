import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { Shield, Heart } from 'lucide-react';

export default function SafetySection() {
  const section = aryaContent.sections.find((s) => s.id === 'safety-section');
  if (!section) return null;

  return (
    <section id={section.id} className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-handwriting text-2xl text-[#C86D7C] block mb-2">
          {section.kicker}
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl font-light text-[#231F20] mb-4">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed mb-6">
          {section.subtitle}
        </p>
        <span className="font-handwriting text-2xl text-[#C86D7C] block">
          {section.subKicker}
        </span>
      </div>

      {/* Paragraphs Sequence */}
      <div className="space-y-8 max-w-3xl mx-auto">
        {section.paragraphs.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`p-6 sm:p-8 rounded-2xl ${
              idx === 2 || idx === 4
                ? 'editorial-card bg-[#FFFDF9] text-center border-[#C86D7C]/30 shadow-sm'
                : 'quote-card bg-[#FFFFFF]'
            }`}
          >
            <p className={`font-serif-cormorant italic text-xl sm:text-3xl leading-relaxed whitespace-pre-line ${
              idx === 2 || idx === 4 ? 'text-[#9B3B52] font-semibold' : 'text-[#362F2D]'
            }`}>
              {p}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
