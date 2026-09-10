import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';

export default function WantSection() {
  const section = aryaContent.sections.find((s) => s.id === 'what-i-really-want');
  if (!section) return null;

  return (
    <section
      id={section.id}
      className="py-32 sm:py-44 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FBF1F3] to-[#FAF7F2] border-y border-[#C86D7C]/20"
    >
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-handwriting text-3xl sm:text-4xl text-[#C86D7C] block mb-6"
        >
          {section.kicker}
        </motion.span>

        <h2 className="font-serif-cormorant text-4xl sm:text-6xl font-light text-[#231F20] mb-12">
          {section.heading}
        </h2>

        <div className="space-y-6 sm:space-y-8 max-w-2xl mx-auto">
          {section.lines.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`font-serif-cormorant text-2xl sm:text-4xl md:text-5xl leading-tight font-normal ${
                idx >= 7
                  ? 'text-[#9B3B52] font-semibold italic scale-105'
                  : 'text-[#362F2D]'
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
