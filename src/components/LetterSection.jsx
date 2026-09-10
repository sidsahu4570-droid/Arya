import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { Heart } from 'lucide-react';

export default function LetterSection() {
  const section = aryaContent.sections.find((s) => s.id === 'final-letter');
  if (!section) return null;

  return (
    <section id={section.id} className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#C86D7C]/15">
      {/* Chapter Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-handwriting text-2xl text-[#C86D7C] block mb-2">
          {section.kicker}
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl font-light text-[#231F20] mb-3">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base text-[#584F4C] leading-relaxed">
          {section.subtitle}
        </p>
      </div>

      {/* Handwritten Personal Letter Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="editorial-card p-8 sm:p-14 bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EE] to-[#FBF1F3] border-2 border-[#C86D7C]/30 shadow-lg relative overflow-hidden rounded-3xl"
      >
        <div className="flex items-center justify-between pb-6 border-b border-[#C86D7C]/15 mb-8">
          <span className="font-serif-cormorant text-3xl sm:text-4xl text-[#9B3B52] font-semibold">
            {section.letterHeader}
          </span>
          <Heart size={20} className="text-[#C86D7C] fill-current animate-pulse" />
        </div>

        <div className="space-y-6 text-[#231F20] font-serif-cormorant text-xl sm:text-2xl leading-relaxed font-normal">
          {section.paragraphs.map((p, idx) => (
            <p key={idx} className="whitespace-pre-line">
              {p}
            </p>
          ))}
        </div>

        {/* Signature */}
        <div className="mt-12 pt-8 border-t border-[#C86D7C]/15 flex flex-col items-end">
          <span className="font-handwriting text-4xl sm:text-5xl text-[#C86D7C]">
            {section.signature}
          </span>
          <span className="text-[#C86D7C] text-2xl mt-1">{section.heart}</span>
        </div>
      </motion.div>
    </section>
  );
}
