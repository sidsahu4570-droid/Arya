import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { MessageCircle, Heart, Sparkles } from 'lucide-react';

export default function ClosingSection() {
  const section = aryaContent.sections.find((s) => s.id === 'closing-moment');
  if (!section) return null;

  return (
    <section id={section.id} className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#C86D7C]/15 text-center">
      {/* Header */}
      <div className="mb-12">
        <span className="font-handwriting text-2xl sm:text-3xl text-[#C86D7C] block mb-2">
          {section.kicker}
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl font-light text-[#231F20]">
          {section.heading}
        </h2>
      </div>

      {/* Lines */}
      <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto mb-16">
        {section.lines.map((line, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className={`font-serif-cormorant text-xl sm:text-3xl leading-relaxed ${
              idx === 5 ? 'text-[#C86D7C] italic font-semibold' : 'text-[#362F2D]'
            }`}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* Final Mind Text */}
      <div className="mb-12">
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] italic">
          {section.finalMindText}
        </p>
      </div>

      {/* Visually Prominent WhatsApp Callout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="editorial-card p-8 sm:p-12 max-w-xl mx-auto bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EE] to-[#FBF1F3] border-2 border-[#C86D7C]/40 shadow-xl relative overflow-hidden group rounded-3xl"
      >
        <div className="flex justify-center mb-4">
          <span className="w-14 h-14 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center border border-[#25D366]/20">
            <MessageCircle size={28} />
          </span>
        </div>

        <p className="font-serif-cormorant italic text-3xl sm:text-5xl font-semibold text-[#231F20] group-hover:text-[#9B3B52] transition-colors leading-tight">
          {section.whatsappProminent}
        </p>
      </motion.div>
    </section>
  );
}
