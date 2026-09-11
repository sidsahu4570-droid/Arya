import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { Lock, Unlock } from 'lucide-react';

export default function FutureSection() {
  const section = aryaContent.sections.find((s) => s.id === 'future-chapters');
  if (!section) return null;

  return (
    <section id={section.id} className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
      {/* Header directly on Paper Canvas */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
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
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed">
          {section.subtitle}
        </p>
      </div>

      {/* 3 Stage Progression Tracker directly on Canvas */}
      <div className="relative max-w-3xl mx-auto my-16">
        {/* Connecting Vertical Progress Line */}
        <div className="absolute left-6 sm:left-8 top-8 bottom-8 w-0.5 bg-[#C86D7C]/30" />

        <div className="space-y-12 sm:space-y-16 relative">
          {section.stages.map((stage, idx) => (
            <motion.div
              key={stage.badge}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex items-start gap-6 sm:gap-8"
            >
              {/* Step Status Indicator Icon */}
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shrink-0 z-10 font-handwriting text-xl sm:text-2xl transition-all ${
                stage.isUnlocked
                  ? 'bg-[#C86D7C] text-white'
                  : 'bg-transparent text-gray-400 border border-gray-300'
              }`}>
                {stage.isUnlocked ? <Unlock size={20} /> : <Lock size={20} />}
              </div>

              {/* Step Content directly on Canvas */}
              <div className={`flex-1 pt-1 ${stage.isUnlocked ? '' : 'opacity-70'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-handwriting text-2xl sm:text-3xl text-[#C86D7C]">
                    {stage.badge}
                  </span>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                    stage.isUnlocked
                      ? 'bg-[#F8EBEF] text-[#9B3B52]'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {stage.status}
                  </span>
                </div>

                <h3 className="font-serif-cormorant text-2xl sm:text-4xl text-[#231F20] font-normal mb-2">
                  {stage.title}
                </h3>

                <p className="font-sans-jakarta text-sm sm:text-base text-[#584F4C] leading-relaxed max-w-xl">
                  {stage.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


