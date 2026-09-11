import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';

export default function DreamsSection() {
  const section = aryaContent.sections.find((s) => s.id === 'the-life-i-imagine');
  if (!section) return null;

  const cars = section.cars || [];
  const car1 = cars[0];
  const car2 = cars[1];
  const car3 = cars[2];
  const car4 = cars[3];

  return (
    <section id={section.id} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#C86D7C]/15">
      {/* Chapter Kicker & Header directly on Paper Canvas */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
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
        <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#C86D7C] mb-8">
          {section.tagline}
        </p>

        {/* Quote Block - Pure Open Editorial Typography */}
        <div className="max-w-3xl mx-auto my-12 py-8 border-y border-[#C86D7C]/20 text-center">
          <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#231F20] leading-relaxed whitespace-pre-line">
            {section.quote}
          </p>
        </div>

        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed whitespace-pre-line max-w-2xl mx-auto mt-6">
          {section.paragraph}
        </p>
      </div>

      {/* 
        ==================================================
        PREMIUM AUTOMOTIVE EDITORIAL SPREADS (4 SCENES OF A JOURNEY)
        (NO repeated icons, NO repeated horizontal dividers, NO cards)
        ==================================================
      */}
      <div className="pt-8 sm:pt-14">

        {/* SCENE 1: Supercar - Hero of the section, Enormous Typography */}
        {car1 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-16 sm:my-24 text-left max-w-2xl"
          >
            <span className="font-handwriting text-2xl text-[#C86D7C] block mb-2">
              {car1.tag}
            </span>
            <h3 className="font-serif-cormorant text-5xl sm:text-7xl md:text-8xl font-light text-[#231F20] mb-4 tracking-tight uppercase">
              {car1.title}
            </h3>
            <p className="font-sans-jakarta text-base sm:text-xl text-[#584F4C] leading-relaxed max-w-lg">
              {car1.desc}
            </p>
          </motion.div>
        )}

        {/* SCENE 2: Sports Coupe - Dynamic Asymmetric Composition (Offset Right) */}
        {car2 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-20 sm:my-32 text-left sm:text-right max-w-xl sm:ml-auto"
          >
            <span className="font-handwriting text-2xl text-[#8C827E] block mb-2">
              {car2.tag}
            </span>
            <h3 className="font-serif-cormorant text-4xl sm:text-6xl font-normal text-[#9B3B52] mb-3">
              {car2.title}
            </h3>
            <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed">
              {car2.desc}
            </p>
          </motion.div>
        )}

        {/* SCENE 3: Luxury SUV - Quiet, Comfortable, Spacious Centered Moment */}
        {car3 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-24 sm:my-36 max-w-xl mx-auto text-center py-6"
          >
            <span className="font-handwriting text-2xl text-[#C86D7C] block mb-2">
              {car3.tag}
            </span>
            <h3 className="font-serif-cormorant text-4xl sm:text-6xl text-[#231F20] font-light mb-4">
              {car3.title}
            </h3>
            <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#584F4C] leading-relaxed">
              {car3.desc}
            </p>
          </motion.div>
        )}

        {/* SCENE 4: Grand Tourer - Wide Cinematic Closing Journey Moment */}
        {car4 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-24 sm:my-36 max-w-2xl mx-auto text-center py-12 border-y border-[#C86D7C]/15"
          >
            <span className="font-handwriting text-2xl text-[#8C827E] block mb-2">
              {car4.tag}
            </span>
            <h3 className="font-serif-cormorant text-5xl sm:text-7xl font-light text-[#231F20] mb-4 tracking-wide uppercase">
              {car4.title}
            </h3>
            <p className="font-sans-jakarta text-base sm:text-xl text-[#584F4C] leading-relaxed max-w-lg mx-auto">
              {car4.desc}
            </p>
          </motion.div>
        )}

      </div>

      {/* Closing Quote directly on Canvas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto mt-20 sm:mt-28 pt-12 border-t border-[#C86D7C]/15"
      >
        <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#231F20] leading-relaxed">
          {section.closingQuote}
        </p>
      </motion.div>
    </section>
  );
}



