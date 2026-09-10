import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { ArrowRight } from 'lucide-react';

export default function SpaceSection() {
  const section = aryaContent.sections.find((s) => s.id === 'your-freedom');
  if (!section) return null;

  return (
    <section id={section.id} className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
      {/* Kicker & Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-handwriting text-2xl text-[#C86D7C] block mb-2">
          {section.kicker}
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl font-light text-[#231F20] mb-4">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed">
          {section.subtitle}
        </p>
      </div>

      {/* Major Editorial Quote Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="quote-card p-8 sm:p-14 mb-16 bg-[#FFFDF9] border-l-4 border-[#C86D7C] shadow-sm"
      >
        <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#231F20] leading-relaxed whitespace-pre-line mb-6 font-normal">
          {section.quote}
        </p>
        <p className="text-right font-handwriting text-2xl text-[#C86D7C]">
          {section.tag}
        </p>
      </motion.div>

      {/* Comparison Layout Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {section.comparisons.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="editorial-card p-6 text-center flex flex-col items-center justify-center bg-[#FFFFFF]/80"
          >
            <span className="font-serif-cormorant text-lg text-[#8C827E] line-through mb-2">
              {item.left}
            </span>
            <div className="my-2 text-[#C86D7C] rotate-90 md:rotate-0">
              <ArrowRight size={18} />
            </div>
            <span className="font-serif-cormorant font-semibold text-2xl text-[#231F20]">
              {item.right}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
