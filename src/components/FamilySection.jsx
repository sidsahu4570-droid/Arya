import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { Home, Users, Heart } from 'lucide-react';

export default function FamilySection() {
  const section = aryaContent.sections.find((s) => s.id === 'my-family');
  if (!section) return null;

  return (
    <section id={section.id} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
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

      {/* Joint Family Tree Node Visual Layout */}
      <div className="editorial-card p-8 sm:p-12 mb-16 bg-[#FFFDF9] text-center">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#8C827E] mb-4">
          <Home size={16} className="text-[#C86D7C]" />
          <span>Roots</span>
        </div>

        <h3 className="font-serif-cormorant text-3xl sm:text-5xl font-normal text-[#231F20] mb-8">
          {section.jointFamilyTitle}
        </h3>

        {/* 8 Family Member Nodes */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
          {section.familyMembers.map((member, idx) => (
            <motion.div
              key={member}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`px-5 py-3 rounded-full border text-sm sm:text-base font-serif-cormorant transition-all ${
                member === 'Me'
                  ? 'bg-[#C86D7C] text-white font-semibold shadow-sm border-[#C86D7C]'
                  : 'bg-[#FFFFFF] text-[#231F20] border-[#C86D7C]/20 hover:border-[#C86D7C]'
              }`}
            >
              {member}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quotes Cards Sequence */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {section.quotes.map((q, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="quote-card p-6 sm:p-8 bg-[#FFFFFF]"
          >
            <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#362F2D] leading-relaxed">
              {q}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
