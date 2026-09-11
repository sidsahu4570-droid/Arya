import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';

export default function VibesSection() {
  const section = aryaContent.sections.find((s) => s.id === 'vibes-matter');
  if (!section) return null;

  return (
    <section id={section.id} className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
      {/* Chapter Kicker & Header directly on Paper Canvas */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
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
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed mb-8">
          {section.subtitle}
        </p>

        {/* Age Difference Line */}
        <div className="inline-flex items-center gap-4 text-sm font-medium mb-16">
          <span className="font-serif-cormorant text-lg sm:text-xl text-[#231F20]">
            {section.ages.arya}
          </span>
          <span className="text-[#C86D7C]">•</span>
          <span className="font-serif-cormorant text-lg sm:text-xl text-[#231F20]">
            {section.ages.siddharth}
          </span>
        </div>

        {/* Main Quote directly on Paper Canvas */}
        <div className="relative max-w-3xl mx-auto my-12 py-8 border-y border-[#C86D7C]/20 text-center">
          <p className="font-serif-cormorant italic text-3xl sm:text-5xl md:text-6xl text-[#231F20] leading-tight mb-8 whitespace-pre-line">
            {section.mainQuote}
          </p>

          <p className="text-xs uppercase tracking-widest text-[#8C827E] font-medium mb-4">
            {section.reflection}
          </p>

          <h3 className="font-serif-cormorant text-4xl sm:text-6xl text-[#9B3B52] font-normal italic mb-6">
            {section.bigQuestion}
          </h3>

          <p className="font-sans-jakarta text-sm sm:text-base text-[#584F4C] max-w-xl mx-auto leading-relaxed whitespace-pre-line">
            {section.note}
          </p>
        </div>

        {/* Sub-heading for Discovery */}
        <div className="pt-20">
          <span className="font-handwriting text-3xl sm:text-4xl text-[#C86D7C]">
            {section.discoverKicker}
          </span>
        </div>
      </div>

      {/* 12 Discovery Concepts - Open Grid directly on Canvas (No Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 pt-4">
        {section.discoverCards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            className="pt-4 border-t border-[#C86D7C]/20"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#C86D7C] text-xs">♡</span>
              <h4 className="font-serif-cormorant text-2xl sm:text-3xl text-[#231F20] font-normal">
                {card.title}
              </h4>
            </div>
            <p className="font-serif-cormorant italic text-base sm:text-lg text-[#584F4C] leading-relaxed">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


