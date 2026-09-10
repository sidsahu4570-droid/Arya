import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';

export default function DrinkSection() {
  const section = aryaContent.sections.find((s) => s.id === 'when-you-drink');
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

      {/* Main Quote */}
      <div className="quote-card p-8 sm:p-12 mb-16 bg-[#FFFDF9]">
        <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#231F20] leading-relaxed whitespace-pre-line font-normal">
          {section.mainQuote}
        </p>
      </div>

      {/* Imagined Scene Editorial Box */}
      <div className="editorial-card p-8 sm:p-12 bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EE] to-[#FBF1F3] mb-12">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#8C827E] block mb-3">
          {section.imaginedSceneTitle}
        </span>
        <p className="font-serif-cormorant italic text-xl sm:text-3xl text-[#362F2D] leading-relaxed mb-8">
          {section.imaginedSceneText}
        </p>

        <div className="pt-6 border-t border-[#C86D7C]/15">
          <span className="font-handwriting text-2xl text-[#C86D7C] block mb-2">
            {section.conditionTitle}
          </span>
          <p className="font-serif-cormorant italic text-lg sm:text-2xl text-[#231F20]">
            {section.conditionText}
          </p>
        </div>
      </div>
    </section>
  );
}
