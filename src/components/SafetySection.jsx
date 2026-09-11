import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';

export default function SafetySection() {
  const section = aryaContent.sections.find((s) => s.id === 'safety-section');
  if (!section) return null;

  return (
    <section id={section.id} className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
      {/* Header Directly on Page */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C827E]">
            {section.number}
          </span>
          <span className="w-6 h-px bg-[#C86D7C]/30" />
          <span className="font-handwriting text-2xl text-[#C86D7C]">
            {section.kicker}
          </span>
        </div>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl md:text-7xl font-light text-[#231F20] mb-4">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed mb-4">
          {section.subtitle}
        </p>
        <span className="font-handwriting text-2xl text-[#C86D7C] block">
          {section.subKicker}
        </span>
      </div>

      {/* Paragraphs Sequence - Directly on Background */}
      <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto text-center my-8 sm:my-12">
        {section.paragraphs.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <p className={`font-serif-cormorant italic text-2xl sm:text-4xl leading-relaxed whitespace-pre-line ${
              idx === 2 || idx === 4 ? 'text-[#9B3B52] font-semibold' : 'text-[#231F20]'
            }`}>
              {p}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

