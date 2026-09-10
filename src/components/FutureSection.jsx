import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { Lock, Unlock, CheckCircle2 } from 'lucide-react';

export default function FutureSection() {
  const section = aryaContent.sections.find((s) => s.id === 'future-chapters');
  if (!section) return null;

  return (
    <section id={section.id} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
      {/* Header */}
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

      {/* 3 Stage Progression Cards */}
      <div className="space-y-8 max-w-3xl mx-auto">
        {section.stages.map((stage, idx) => (
          <motion.div
            key={stage.badge}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className={`editorial-card p-6 sm:p-10 ${
              stage.isUnlocked
                ? 'bg-[#FFFDF9] border-[#C86D7C]/30 shadow-xs'
                : 'bg-[#FAF7F2]/60 border-dashed border-[#C86D7C]/20 opacity-80'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="font-handwriting text-2xl text-[#C86D7C]">
                {stage.badge}
              </span>

              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  stage.isUnlocked
                    ? 'bg-[#F8EBEF] text-[#9B3B52]'
                    : 'bg-[#EAE5DC] text-[#8C827E]'
                }`}
              >
                {stage.isUnlocked ? <Unlock size={12} /> : <Lock size={12} />}
                <span>{stage.status}</span>
              </span>
            </div>

            <h3 className="font-serif-cormorant text-2xl sm:text-4xl text-[#231F20] font-normal mb-3">
              {stage.title}
            </h3>

            <p className="font-sans-jakarta text-sm sm:text-base text-[#584F4C] leading-relaxed">
              {stage.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
