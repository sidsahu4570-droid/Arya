import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { UtensilsCrossed } from 'lucide-react';

export default function FoodSection() {
  const section = aryaContent.sections.find((s) => s.id === 'food-and-care');
  if (!section) return null;

  return (
    <section id={section.id} className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
      {/* Kicker & Header directly on Paper Canvas */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
        <div className="inline-flex items-center gap-3 mb-3">
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
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed">
          {section.subtitle}
        </p>
      </div>

      {/* Dialogue Chat Fragment Stream directly on Canvas */}
      <div className="max-w-md mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4">
        {section.dialogue.map((d, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className={`flex items-center gap-3 ${
              idx % 2 === 0
                ? 'justify-start'
                : 'justify-end'
            }`}
          >
            <div className="text-base sm:text-xl font-serif-cormorant">
              <span className="text-[#231F20]">{d.q}</span>
              {d.a && (
                <span className="ml-3 font-sans-jakarta text-xs sm:text-sm font-medium text-[#9B3B52]">
                  — {d.a}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Quote Block directly on Paper Canvas */}
      <div className="max-w-3xl mx-auto my-6 sm:my-10 py-6 border-y border-[#C86D7C]/20 text-center">
        <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#231F20] leading-relaxed whitespace-pre-line">
          {section.paragraphQuote}
        </p>
      </div>

      {/* The Indore Connection - Open Layout directly on Canvas */}
      {section.indoreConnection && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-8 sm:my-14 py-8 sm:py-12 border-t border-b border-[#C86D7C]/20 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#C86D7C] font-semibold mb-3">
            <UtensilsCrossed size={16} />
            <span>{section.indoreConnection.subKicker}</span>
          </div>

          <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#231F20] leading-relaxed mb-4 whitespace-pre-line font-normal">
            {section.indoreConnection.quote}
          </p>

          <p className="font-handwriting text-2xl sm:text-3xl text-[#C86D7C]">
            {section.indoreConnection.note}
          </p>
        </motion.div>
      )}
    </section>
  );
}



