import React from 'react';
import { aryaContent } from '../data/aryaContent';


export default function ConflictSection() {
  const section = aryaContent.sections.find((s) => s.id === 'when-youre-angry');
  if (!section) return null;

  return (
    <section id={section.id} className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
      {/* Header Directly on Page */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C827E]">
            {section.number}
          </span>
          <span className="w-6 h-px bg-[#C86D7C]/30" />
          <span className="font-handwriting text-2xl text-[#C86D7C]">
            {section.kicker}
          </span>
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

      {/* Main Quote Statement Directly on Page Background */}
      <div className="max-w-3xl mx-auto my-12 text-center">
        <p className="font-serif-cormorant italic text-3xl sm:text-5xl text-[#231F20] leading-relaxed font-normal">
          {section.headlineQuote}
        </p>
      </div>

      {/* Paragraphs */}
      <div className="space-y-6 max-w-3xl mx-auto mb-16">
        {section.paragraphs.map((p, idx) => (
          <p key={idx} className="font-serif-cormorant italic text-xl sm:text-3xl text-[#584F4C] leading-relaxed whitespace-pre-line text-center">
            {p}
          </p>
        ))}
      </div>

      {/* Deal Callout Badge */}
      <div className="text-center">
        <span className="inline-block px-6 py-3 rounded-full bg-[#F8EBEF] border border-[#C86D7C]/30 text-[#9B3B52] font-sans-jakarta font-semibold text-base sm:text-lg">
          {section.deal}
        </span>
      </div>
    </section>
  );
}

