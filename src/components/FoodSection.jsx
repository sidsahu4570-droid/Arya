import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { UtensilsCrossed, Heart } from 'lucide-react';

export default function FoodSection() {
  const section = aryaContent.sections.find((s) => s.id === 'food-and-care');
  if (!section) return null;

  return (
    <section id={section.id} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
      {/* Kicker & Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-handwriting text-2xl text-[#C86D7C] block mb-2">
          {section.kicker}
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl font-light text-[#231F20] mb-4">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed">
          {section.subtitle}
        </p>
      </div>

      {/* Dialogue Chat Fragment Cards */}
      <div className="max-w-xl mx-auto mb-16 space-y-4">
        {section.dialogue.map((d, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className={`flex items-center gap-3 p-4 rounded-2xl border ${
              idx % 2 === 0
                ? 'bg-[#FFFDF9] border-[#C86D7C]/20 text-[#231F20] mr-8'
                : 'bg-[#F8EBEF] border-[#C86D7C]/30 text-[#9B3B52] ml-8 justify-end'
            }`}
          >
            <span className="font-serif-cormorant text-xl font-medium">
              {d.q}
            </span>
            {d.a && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#FFFFFF] text-xs font-semibold text-[#584F4C] border border-[#C86D7C]/15">
                {d.a}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Main Quote Block */}
      <div className="quote-card p-8 sm:p-10 mb-16 bg-[#FFFDF9]">
        <p className="font-serif-cormorant italic text-xl sm:text-3xl text-[#362F2D] leading-relaxed whitespace-pre-line">
          {section.paragraphQuote}
        </p>
      </div>

      {/* The Indore Connection - Distinct Visual Treatment */}
      {section.indoreConnection && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="editorial-card p-8 sm:p-12 bg-gradient-to-br from-[#FAF5EE] via-[#FFFDF9] to-[#FBF1F3] border-2 border-[#C86D7C]/30 shadow-md relative overflow-hidden"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C86D7C] font-semibold mb-4">
            <UtensilsCrossed size={16} />
            <span>{section.indoreConnection.subKicker}</span>
          </div>

          <p className="font-serif-cormorant italic text-xl sm:text-3xl text-[#231F20] leading-relaxed mb-6 whitespace-pre-line font-normal">
            {section.indoreConnection.quote}
          </p>

          <p className="text-right font-handwriting text-2xl text-[#C86D7C]">
            {section.indoreConnection.note}
          </p>
        </motion.div>
      )}
    </section>
  );
}
