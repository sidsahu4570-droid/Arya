import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { ArrowRight } from 'lucide-react';

export default function SpaceSection() {
  const section = aryaContent.sections.find((s) => s.id === 'your-freedom');
  if (!section) return null;

  return (
    <section id={section.id} className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
      {/* Kicker & Header directly on Paper Canvas */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#C86D7C]/30" />
          <span className="font-handwriting text-2xl text-[#C86D7C]">
            {section.kicker}
          </span>
          <span className="w-8 h-px bg-[#C86D7C]/30" />
        </div>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl md:text-7xl font-light text-[#231F20] mb-4">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed">
          {section.subtitle}
        </p>
      </div>

      {/* Pure Open Editorial Quote directly on Canvas */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto my-16 py-8 border-y border-[#C86D7C]/20 text-center relative px-4"
      >
        <p className="font-serif-cormorant italic text-3xl sm:text-5xl text-[#231F20] leading-relaxed whitespace-pre-line mb-6 font-normal">
          {section.quote}
        </p>
        <p className="font-handwriting text-2xl sm:text-4xl text-[#C86D7C]">
          {section.tag}
        </p>
      </motion.div>

      {/* Open Typographic Split Lines directly on Canvas */}
      <div className="max-w-3xl mx-auto divide-y divide-[#C86D7C]/15 my-16">
        {section.comparisons.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="py-6 grid grid-cols-1 md:grid-cols-12 items-center gap-4 text-center md:text-left"
          >
            <div className="md:col-span-5 text-right md:pr-4">
              <span className="font-serif-cormorant text-xl text-[#8C827E] line-through">
                {item.left}
              </span>
            </div>

            <div className="md:col-span-2 flex justify-center text-[#C86D7C]">
              <ArrowRight size={18} className="rotate-90 md:rotate-0 opacity-70" />
            </div>

            <div className="md:col-span-5 text-left md:pl-4">
              <span className="font-serif-cormorant font-medium text-2xl sm:text-3xl text-[#9B3B52]">
                {item.right}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


