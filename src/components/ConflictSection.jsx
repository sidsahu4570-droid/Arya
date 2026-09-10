import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';

export default function ConflictSection() {
  const section = aryaContent.sections.find((s) => s.id === 'when-youre-angry');
  if (!section) return null;

  return (
    <section id={section.id} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-handwriting text-2xl text-[#C86D7C] block mb-2">
          {section.kicker}
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl font-light text-[#231F20] mb-4">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed mb-6">
          {section.subtitle}
        </p>
        <span className="font-handwriting text-2xl text-[#C86D7C] block">
          {section.subKicker}
        </span>
      </div>

      {/* Main Quote Statement */}
      <div className="quote-card p-8 sm:p-10 mb-12 bg-[#FFFDF9]">
        <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#231F20] leading-relaxed font-normal">
          {section.headlineQuote}
        </p>
      </div>

      {/* Paragraphs */}
      <div className="space-y-6 max-w-3xl mx-auto mb-12">
        {section.paragraphs.map((p, idx) => (
          <p key={idx} className="font-serif-cormorant italic text-xl sm:text-2xl text-[#584F4C] leading-relaxed whitespace-pre-line text-center">
            {p}
          </p>
        ))}
      </div>

      {/* Deal Callout Box */}
      <div className="editorial-card p-6 text-center max-w-md mx-auto bg-[#F8EBEF] border-2 border-[#C86D7C]/30">
        <span className="font-sans-jakarta font-semibold text-lg text-[#9B3B52]">
          {section.deal}
        </span>
      </div>
    </section>
  );
}
