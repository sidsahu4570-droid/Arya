import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { Heart } from 'lucide-react';

export default function LetterSection() {
  const section = aryaContent.sections.find((s) => s.id === 'final-letter');
  if (!section) return null;

  return (
    <section id={section.id} className="py-22 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#C86D7C]/15">
      {/* Chapter Header directly on Paper Canvas */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#C86D7C]/30" />
          <span className="font-handwriting text-2xl text-[#C86D7C]">
            {section.kicker}
          </span>
          <span className="w-8 h-px bg-[#C86D7C]/30" />
        </div>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl md:text-7xl font-light text-[#231F20] mb-3">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base text-[#584F4C] leading-relaxed">
          {section.subtitle}
        </p>
      </div>

      {/* Intimate Personal Letter Page directly on Paper Canvas */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl mx-auto py-8 text-left relative"
      >
        <div className="flex items-center justify-between pb-6 border-b border-[#C86D7C]/20 mb-10">
          <span className="font-serif-cormorant text-3xl sm:text-5xl text-[#9B3B52] font-semibold">
            {section.letterHeader}
          </span>
          <Heart size={20} className="text-[#C86D7C] fill-current" />
        </div>

        <div className="space-y-8 text-[#231F20] font-serif-cormorant text-2xl sm:text-3xl leading-relaxed font-normal">
          {section.paragraphs.map((p, idx) => (
            <p key={idx} className="whitespace-pre-line">
              {p}
            </p>
          ))}
        </div>

        {/* Signature */}
        <div className="mt-20 pt-8 border-t border-[#C86D7C]/20 flex flex-col items-end">
          <span className="font-handwriting text-5xl sm:text-7xl text-[#C86D7C]">
            {section.signature}
          </span>
          <span className="text-[#C86D7C] text-3xl mt-2">{section.heart}</span>
        </div>
      </motion.div>
    </section>
  );
}


