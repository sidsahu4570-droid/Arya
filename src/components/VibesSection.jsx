import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';

export default function VibesSection() {
  const section = aryaContent.sections.find((s) => s.id === 'vibes-matter');
  if (!section) return null;

  const cards = section.discoverCards || [];
  const c1 = cards[0];
  const c2 = cards[1];
  const c3 = cards[2];
  const c4 = cards[3];
  const c5 = cards[4];
  const c6 = cards[5];
  const c7 = cards[6];
  const c8 = cards[7];
  const c9 = cards[8];
  const c10 = cards[9];
  const c11 = cards[10];
  const c12 = cards[11];

  return (
    <section id={section.id} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#C86D7C]/15">
      {/* Chapter Kicker & Header directly on Paper Canvas */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C827E]">
            {section.number}
          </span>
          <span className="w-8 h-px bg-[#C86D7C]/30" />
          <span className="font-handwriting text-2xl text-[#C86D7C]">
            {section.kicker}
          </span>
        </div>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl md:text-7xl font-light text-[#231F20] mb-4">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed mb-8">
          {section.subtitle}
        </p>

        {/* Age Difference Line */}
        <div className="inline-flex items-center gap-4 text-sm font-medium mb-12">
          <span className="font-serif-cormorant text-lg sm:text-xl text-[#231F20]">
            {section.ages.arya}
          </span>
          <span className="text-[#C86D7C]">•</span>
          <span className="font-serif-cormorant text-lg sm:text-xl text-[#231F20]">
            {section.ages.siddharth}
          </span>
        </div>

        {/* Main Quote directly on Paper Canvas */}
        <div className="relative max-w-3xl mx-auto my-10 py-8 border-y border-[#C86D7C]/20 text-center">
          <p className="font-serif-cormorant italic text-3xl sm:text-5xl md:text-6xl text-[#231F20] leading-tight mb-8 whitespace-pre-line">
            {section.mainQuote}
          </p>

          <p className="text-xs uppercase tracking-widest text-[#8C827E] font-medium mb-4">
            {section.reflection}
          </p>

          <h3 className="font-serif-cormorant text-4xl sm:text-6xl text-[#9B3B52] font-normal italic mb-6">
            {section.bigQuestion}
          </h3>

          <p className="font-sans-jakarta text-sm sm:text-base text-[#584F4C] max-w-xl mx-auto leading-relaxed whitespace-pre-line">
            {section.note}
          </p>
        </div>

        {/* Sub-heading for Discovery */}
        <div className="pt-14 sm:pt-16">
          <span className="font-handwriting text-3xl sm:text-4xl text-[#C86D7C]">
            {section.discoverKicker}
          </span>
        </div>
      </div>

      {/* 
        ==================================================
        EDITORIAL THOUGHTS FLOW
        (NO 3-column grid, NO repeated hearts, NO horizontal dividers, NO cards)
        ==================================================
      */}
      <div className="pt-8 sm:pt-14">

        {/* THOUGHT 1: Humour - Left Aligned, Large Serif Heading + Small Italic Statement */}
        {c1 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-16 sm:my-24 text-left max-w-xl"
          >
            <h4 className="font-serif-cormorant text-3xl sm:text-5xl font-light text-[#231F20] mb-2 uppercase tracking-wide">
              {c1.title}
            </h4>
            <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#C86D7C]">
              {c1.text}
            </p>
          </motion.div>
        )}

        {/* THOUGHT 2: Communication - Offset Right, Large Italic Statement First */}
        {c2 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-20 sm:my-28 text-left sm:text-right max-w-xl sm:ml-auto"
          >
            <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#9B3B52] leading-snug mb-3">
              {c2.text}
            </p>
            <h4 className="font-serif-cormorant text-lg uppercase tracking-widest text-[#8C827E] font-medium">
              {c2.title}
            </h4>
          </motion.div>
        )}

        {/* THOUGHT 3: Trust - Centered Editorial Moment */}
        {c3 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-20 sm:my-32 max-w-xl mx-auto text-center"
          >
            <h4 className="font-serif-cormorant text-4xl sm:text-6xl text-[#231F20] font-light mb-3">
              {c3.title}
            </h4>
            <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#584F4C]">
              {c3.text}
            </p>
          </motion.div>
        )}

        {/* THOUGHT 4: Comfort - Asymmetric Left Padding */}
        {c4 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-16 sm:my-24 text-left max-w-lg sm:pl-10"
          >
            <h4 className="font-serif-cormorant text-2xl sm:text-3xl text-[#C86D7C] font-normal mb-2">
              {c4.title}
            </h4>
            <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#231F20]">
              {c4.text}
            </p>
          </motion.div>
        )}

        {/* THOUGHT 5: Ambition - Large Statement Focus */}
        {c5 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-20 sm:my-32 md:ml-12 max-w-2xl text-left"
          >
            <h4 className="font-serif-cormorant text-3xl sm:text-5xl text-[#231F20] font-light mb-3">
              {c5.title}
            </h4>
            <p className="font-serif-cormorant italic text-2xl sm:text-3xl text-[#9B3B52]">
              {c5.text}
            </p>
          </motion.div>
        )}

        {/* THOUGHT 6: Care - Minimal Centered Typography */}
        {c6 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-16 sm:my-28 max-w-xl mx-auto text-center"
          >
            <h4 className="font-serif-cormorant text-2xl sm:text-4xl text-[#8C827E] uppercase tracking-widest mb-2">
              {c6.title}
            </h4>
            <p className="font-serif-cormorant italic text-xl sm:text-3xl text-[#231F20]">
              {c6.text}
            </p>
          </motion.div>
        )}

        {/* THOUGHT 7: Adventure - Enormous Heading */}
        {c7 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-20 sm:my-32 text-left max-w-xl"
          >
            <h4 className="font-serif-cormorant text-4xl sm:text-6xl font-light text-[#231F20] uppercase mb-3">
              {c7.title}
            </h4>
            <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#C86D7C]">
              {c7.text}
            </p>
          </motion.div>
        )}

        {/* THOUGHT 8: Family - Soft Rose Right Offset */}
        {c8 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-16 sm:my-28 text-left sm:text-right max-w-xl sm:ml-auto"
          >
            <h4 className="font-serif-cormorant text-3xl sm:text-5xl text-[#9B3B52] mb-3">
              {c8.title}
            </h4>
            <p className="font-serif-cormorant italic text-lg sm:text-xl text-[#584F4C]">
              {c8.text}
            </p>
          </motion.div>
        )}

        {/* THOUGHT 9: Food - Handwriting Accent Moment */}
        {c9 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-20 sm:my-32 max-w-xl mx-auto text-center py-6 border-y border-[#C86D7C]/15"
          >
            <h4 className="font-handwriting text-3xl sm:text-4xl text-[#C86D7C] mb-2">
              {c9.title}
            </h4>
            <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#231F20]">
              {c9.text}
            </p>
          </motion.div>
        )}

        {/* THOUGHT 10: Late-Night Talks - Asymmetric Deep Accent */}
        {c10 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-20 sm:my-32 text-left max-w-2xl sm:pl-12"
          >
            <h4 className="font-serif-cormorant text-4xl sm:text-6xl font-light text-[#231F20] mb-3">
              {c10.title}
            </h4>
            <p className="font-serif-cormorant italic text-xl sm:text-3xl text-[#9B3B52]">
              {c10.text}
            </p>
          </motion.div>
        )}

        {/* THOUGHT 11: Patience - Quiet Minimal Moment */}
        {c11 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-16 sm:my-28 max-w-md text-left sm:text-right sm:ml-auto"
          >
            <span className="text-xs uppercase tracking-widest text-[#8C827E] font-semibold mb-2 block">
              {c11.title}
            </span>
            <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#231F20]">
              {c11.text}
            </p>
          </motion.div>
        )}

        {/* THOUGHT 12: Understanding - Concluding Editorial Statement */}
        {c12 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mt-20 sm:mt-32 mb-16 max-w-2xl mx-auto text-center py-10 border-t border-[#C86D7C]/20"
          >
            <h4 className="font-serif-cormorant text-4xl sm:text-6xl text-[#231F20] font-light mb-3 uppercase tracking-wide">
              {c12.title}
            </h4>
            <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#9B3B52] leading-relaxed">
              {c12.text}
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}



