import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { Home } from 'lucide-react';

export default function FamilySection() {
  const section = aryaContent.sections.find((s) => s.id === 'my-family');
  if (!section) return null;

  return (
    <section id={section.id} className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
      {/* Header directly on Paper Canvas */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C827E]">
            {section.number}
          </span>
          <span className="w-8 h-px bg-[#C86D7C]/30" />
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

        <span className="font-handwriting text-2xl sm:text-3xl text-[#C86D7C] block">
          {section.subKicker}
        </span>
      </div>

      {/* Joint Family Relationship Diagram directly on Canvas */}
      <div className="my-8 sm:my-12 py-6 sm:py-8 border-t border-b border-[#C86D7C]/20 text-center">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#8C827E] mb-3">
          <Home size={16} className="text-[#C86D7C]" />
          <span>Family Tree & Roots</span>
        </div>

        <h3 className="font-serif-cormorant text-3xl sm:text-5xl font-normal text-[#231F20] mb-6">
          {section.jointFamilyTitle}
        </h3>

        {/* 8 Family Member Nodes */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 max-w-3xl mx-auto">
          {section.familyMembers.map((member, idx) => (
            <motion.div
              key={member}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-lg font-serif-cormorant transition-all ${
                member === 'Me'
                  ? 'bg-[#C86D7C] text-white font-medium'
                  : 'bg-transparent text-[#231F20] border border-[#C86D7C]/30'
              }`}
            >
              {member}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quotes Sequence directly on Paper Canvas */}
      <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto text-center my-8 sm:my-12">
        {section.quotes.map((q, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#231F20] leading-relaxed">
              {q}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


