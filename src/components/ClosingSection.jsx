import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { MessageCircle } from 'lucide-react';

export default function ClosingSection() {
  const section = aryaContent.sections.find((s) => s.id === 'closing-moment');
  if (!section) return null;

  return (
    <section id={section.id} className="py-24 sm:py-40 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#C86D7C]/15 text-center">
      {/* Header directly on Paper Canvas */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-3 mb-4 justify-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C827E]">
            {section.number}
          </span>
          <span className="w-8 h-px bg-[#C86D7C]/30" />
          <span className="font-handwriting text-2xl sm:text-3xl text-[#C86D7C]">
            {section.kicker}
          </span>
        </div>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl md:text-7xl font-light text-[#231F20]">
          {section.heading}
        </h2>
      </div>

      {/* Breathing Emotional Lines directly on Canvas */}
      <div className="space-y-8 sm:space-y-10 max-w-2xl mx-auto mb-20">
        {section.lines.map((line, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className={`font-serif-cormorant text-2xl sm:text-4xl leading-relaxed ${
              idx === 5 ? 'text-[#9B3B52] italic font-medium' : 'text-[#231F20]'
            }`}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* Final Mind Text */}
      <div className="mb-14">
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] italic">
          {section.finalMindText}
        </p>
      </div>

      {/* Open WhatsApp Callout directly on Canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="inline-block pt-6 border-t border-[#C86D7C]/20"
      >
        <div className="inline-flex items-center gap-3 text-[#9B3B52] hover:text-[#C86D7C] transition-all cursor-pointer group">
          <MessageCircle size={28} className="text-[#25D366]" />
          <span className="font-serif-cormorant italic text-3xl sm:text-5xl font-semibold">
            {section.whatsappProminent}
          </span>
        </div>
      </motion.div>
    </section>
  );
}


