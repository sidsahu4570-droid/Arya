import React from 'react';
import { aryaContent } from '../data/aryaContent';


export default function DrinkSection() {
  const section = aryaContent.sections.find((s) => s.id === 'when-you-drink');
  if (!section) return null;

  return (
    <section id={section.id} className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
      {/* Header Directly on Page */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-[#C86D7C]/30" />
          <span className="font-handwriting text-2xl text-[#C86D7C]">
            {section.kicker}
          </span>
          <span className="w-6 h-px bg-[#C86D7C]/30" />
        </div>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl md:text-7xl font-light text-[#231F20] mb-4">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed mb-6">
          {section.subtitle}
        </p>
        <span className="font-handwriting text-2xl text-[#C86D7C] block">
          {section.subKicker}
        </span>
      </div>

      {/* Main Quote Directly on Page */}
      <div className="max-w-3xl mx-auto my-16 text-center">
        <p className="font-serif-cormorant italic text-3xl sm:text-5xl text-[#231F20] leading-relaxed whitespace-pre-line font-normal">
          {section.mainQuote}
        </p>
      </div>

      {/* Imagined Scene Editorial Area */}
      <div className="my-16 p-8 sm:p-12 text-center max-w-3xl mx-auto bg-gradient-to-br from-[#F5EFE6]/60 via-[#FAF7F2] to-[#FBF1F3]/60 rounded-3xl border border-[#C86D7C]/20 relative overflow-hidden">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#8C827E] block mb-4">
          {section.imaginedSceneTitle}
        </span>
        <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#362F2D] leading-relaxed mb-8">
          {section.imaginedSceneText}
        </p>

        <div className="pt-6 border-t border-[#C86D7C]/15">
          <span className="font-handwriting text-2xl text-[#C86D7C] block mb-2">
            {section.conditionTitle}
          </span>
          <p className="font-serif-cormorant italic text-xl sm:text-3xl text-[#231F20]">
            {section.conditionText}
          </p>
        </div>
      </div>
    </section>
  );
}

