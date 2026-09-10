import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { Car, Sparkles, Compass } from 'lucide-react';

export default function DreamsSection() {
  const section = aryaContent.sections.find((s) => s.id === 'the-life-i-imagine');
  if (!section) return null;

  return (
    <section id={section.id} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#C86D7C]/15">
      {/* Chapter Kicker & Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-handwriting text-2xl text-[#C86D7C] block mb-2">
          {section.kicker}
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl font-light text-[#231F20] mb-3">
          {section.heading}
        </h2>
        <p className="font-serif-cormorant italic text-xl text-[#C86D7C] mb-8">
          {section.tagline}
        </p>

        {/* Quote Block */}
        <div className="editorial-card p-8 sm:p-10 text-left bg-gradient-to-br from-[#FFFDF9] to-[#FAF5EE] mb-8">
          <p className="font-serif-cormorant italic text-xl sm:text-3xl text-[#231F20] leading-relaxed whitespace-pre-line">
            {section.quote}
          </p>
        </div>

        <p className="font-sans-jakarta text-sm sm:text-base text-[#584F4C] leading-relaxed whitespace-pre-line">
          {section.paragraph}
        </p>
      </div>

      {/* 4 Car Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {section.cars.map((car, idx) => (
          <motion.div
            key={car.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="editorial-card p-6 bg-[#FFFFFF] flex flex-col justify-between group hover:border-[#C86D7C]/40"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-handwriting text-base text-[#C86D7C]">
                  {car.tag}
                </span>
                <Car size={18} className="text-[#8C827E] group-hover:text-[#C86D7C] transition-colors" />
              </div>
              <h3 className="font-serif-cormorant text-2xl text-[#231F20] font-normal mb-2 group-hover:text-[#9B3B52] transition-colors">
                {car.title}
              </h3>
              <p className="font-sans-jakarta text-sm text-[#584F4C] leading-relaxed">
                {car.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing Quote */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#362F2D]">
          {section.closingQuote}
        </p>
      </div>
    </section>
  );
}
