import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { Car } from 'lucide-react';

export default function DreamsSection() {
  const section = aryaContent.sections.find((s) => s.id === 'the-life-i-imagine');
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
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl md:text-7xl font-light text-[#231F20] mb-3">
          {section.heading}
        </h2>
        <p className="font-serif-cormorant italic text-xl text-[#C86D7C] mb-8">
          {section.tagline}
        </p>

        {/* Quote Block - Pure Open Editorial Typography */}
        <div className="max-w-3xl mx-auto my-12 py-8 border-y border-[#C86D7C]/20">
          <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#231F20] leading-relaxed whitespace-pre-line">
            {section.quote}
          </p>
        </div>

        <p className="font-sans-jakarta text-sm sm:text-base text-[#584F4C] leading-relaxed whitespace-pre-line max-w-2xl mx-auto mt-6">
          {section.paragraph}
        </p>
      </div>

      {/* Automotive Editorial Spreads directly on Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-20">
        {section.cars.map((car, idx) => (
          <motion.div
            key={car.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`pt-6 border-t border-[#C86D7C]/25 ${
              idx === 0 ? 'md:col-span-2 pt-8 border-t-2 border-[#C86D7C]/40' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-handwriting text-xl text-[#C86D7C]">
                {car.tag}
              </span>
              <Car size={18} className="text-[#8C827E]" />
            </div>

            <h3 className="font-serif-cormorant text-3xl sm:text-5xl font-normal text-[#231F20] mb-3">
              {car.title}
            </h3>

            <p className="font-sans-jakarta text-sm sm:text-base text-[#584F4C] leading-relaxed">
              {car.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Closing Quote */}
      <div className="text-center max-w-2xl mx-auto pt-8 border-t border-[#C86D7C]/15">
        <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#231F20]">
          {section.closingQuote}
        </p>
      </div>
    </section>
  );
}


