import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { MessageSquare, Heart } from 'lucide-react';

export default function LittleThingsSection() {
  const section = aryaContent.sections.find((s) => s.id === 'the-little-things');
  if (!section) return null;

  return (
    <section id={section.id} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#C86D7C]/15">
      {/* Chapter Kicker & Header */}
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

        <div className="editorial-card p-6 sm:p-8 max-w-2xl mx-auto bg-[#FFFDF9]">
          <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#362F2D]">
            {section.quote}
          </p>
        </div>

        <div className="mt-10">
          <span className="font-handwriting text-2xl text-[#C86D7C]">
            {section.subKicker}
          </span>
        </div>
      </div>

      {/* Elegant Message Sequence UI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {section.messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="editorial-card p-5 bg-[#FFFFFF] border border-[#C86D7C]/15 rounded-2xl flex flex-col justify-between hover:border-[#C86D7C]/40 group"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#F8EBEF] text-[#C86D7C] flex items-center justify-center shrink-0 mt-0.5">
                <MessageSquare size={14} />
              </div>
              <p className="font-serif-cormorant font-medium text-xl text-[#231F20] group-hover:text-[#9B3B52] transition-colors leading-snug">
                {msg.text}
              </p>
            </div>
            <div className="text-right">
              <span className="font-handwriting text-base text-[#C86D7C]">
                {msg.sub}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
