import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { Sparkles, Heart } from 'lucide-react';

export default function VibesSection() {
  const section = aryaContent.sections.find((s) => s.id === 'vibes-matter');
  if (!section) return null;

  return (
    <section id={section.id} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#C86D7C]/15">
      {/* Chapter Kicker & Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-handwriting text-2xl text-[#C86D7C] block mb-2">
          {section.kicker}
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl font-light text-[#231F20] mb-4">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed mb-8">
          {section.subtitle}
        </p>

        {/* Age Difference Badge */}
        <div className="inline-flex items-center gap-6 px-6 py-3 rounded-full bg-[#FFFFFF] border border-[#C86D7C]/20 shadow-xs mb-10">
          <span className="font-serif-cormorant text-base sm:text-lg font-semibold text-[#231F20]">
            {section.ages.arya}
          </span>
          <span className="text-[#C86D7C] font-light">•</span>
          <span className="font-serif-cormorant text-base sm:text-lg font-semibold text-[#231F20]">
            {section.ages.siddharth}
          </span>
        </div>

        {/* Main Emotional Quote Block */}
        <div className="editorial-card p-8 sm:p-12 mb-12 bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EE] to-[#FBF1F3] relative overflow-hidden">
          <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#231F20] leading-tight mb-6 whitespace-pre-line">
            {section.mainQuote}
          </p>

          <p className="text-xs uppercase tracking-widest text-[#8C827E] font-medium mb-4">
            {section.reflection}
          </p>

          <h3 className="font-serif-cormorant text-3xl sm:text-5xl text-[#C86D7C] font-normal italic mb-6">
            {section.bigQuestion}
          </h3>

          <p className="font-sans-jakarta text-sm sm:text-base text-[#584F4C] max-w-xl mx-auto leading-relaxed whitespace-pre-line">
            {section.note}
          </p>
        </div>

        {/* Section Sub-heading */}
        <div className="pt-8">
          <span className="font-handwriting text-2xl sm:text-3xl text-[#C86D7C]">
            {section.discoverKicker}
          </span>
        </div>
      </div>

      {/* 12 Discovery Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.discoverCards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="editorial-card p-6 sm:p-8 flex flex-col justify-between group hover:border-[#C86D7C]/40"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#C86D7C] text-sm">♡</span>
                <h4 className="font-serif-cormorant text-2xl text-[#231F20] font-normal group-hover:text-[#9B3B52] transition-colors">
                  {card.title}
                </h4>
              </div>
              <p className="font-serif-cormorant italic text-base sm:text-lg text-[#584F4C] leading-relaxed">
                {card.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
