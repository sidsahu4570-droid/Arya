import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';

export default function WantSection() {
  const section = aryaContent.sections.find((s) => s.id === 'what-i-really-want');
  if (!section) return null;

  return (
    <section
      id={section.id}
      className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FBF1F3]/50 to-[#FAF7F2] border-y border-[#C86D7C]/15"
    >
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-3 mb-4 justify-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C827E]">
            {section.number}
          </span>
          <span className="w-6 h-px bg-[#C86D7C]/30" />
          <span className="font-handwriting text-3xl sm:text-4xl text-[#C86D7C]">
            {section.kicker}
          </span>
        </div>

        <h2 className="font-serif-cormorant text-4xl sm:text-6xl md:text-7xl font-light text-[#231F20] mb-8 sm:mb-14">
          {section.heading}
        </h2>

        <div className="space-y-5 sm:space-y-8 max-w-3xl mx-auto">
          {section.lines.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              className={`font-serif-cormorant leading-tight font-normal transition-all ${
                idx >= 7
                  ? 'text-3xl sm:text-5xl md:text-6xl text-[#9B3B52] font-semibold italic'
                  : idx >= 4
                  ? 'text-2xl sm:text-4xl md:text-5xl text-[#231F20]'
                  : 'text-xl sm:text-3xl md:text-4xl text-[#584F4C]'
              }`}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

