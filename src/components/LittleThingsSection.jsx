import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { MessageSquare } from 'lucide-react';

export default function LittleThingsSection() {
  const section = aryaContent.sections.find((s) => s.id === 'the-little-things');
  if (!section) return null;

  return (
    <section id={section.id} className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
      {/* Chapter Kicker & Header directly on Paper Canvas */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
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
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed mb-4">
          {section.subtitle}
        </p>

        {/* Section Quote - Pure Open Editorial Typography */}
        <div className="max-w-3xl mx-auto my-6 sm:my-10 py-6 border-y border-[#C86D7C]/20">
          <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#231F20] leading-relaxed">
            {section.quote}
          </p>
        </div>

        <div className="mt-6">
          <span className="font-handwriting text-3xl sm:text-4xl text-[#C86D7C]">
            {section.subKicker}
          </span>
        </div>
      </div>

      {/* Organic Conversation Message Sequence directly on Canvas */}
      <div className="max-w-3xl mx-auto space-y-5 sm:space-y-8">
        {section.messages.map((msg, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isEven ? -15 : 15, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`flex items-start gap-4 ${isEven ? 'justify-start md:pr-12' : 'justify-end md:pl-12'}`}
            >
              <div className={`py-2 max-w-xl ${isEven ? 'text-left' : 'text-right'}`}>
                <div className={`flex items-center gap-2 mb-2 ${isEven ? 'justify-start' : 'justify-end'}`}>
                  <MessageSquare size={14} className="text-[#C86D7C]" />
                  <span className="font-handwriting text-lg text-[#C86D7C]">
                    {msg.sub}
                  </span>
                </div>
                <p className="font-serif-cormorant font-normal text-2xl sm:text-3xl text-[#231F20] leading-snug">
                  {msg.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}


