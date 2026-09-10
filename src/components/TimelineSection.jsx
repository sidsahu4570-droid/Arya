import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { Sparkles, Calendar, Camera } from 'lucide-react';

export default function TimelineSection() {
  const section = aryaContent.sections.find((s) => s.id === 'how-this-started');
  if (!section) return null;

  return (
    <section id={section.id} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#C86D7C]/15">
      {/* Chapter Kicker & Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <span className="font-handwriting text-2xl text-[#C86D7C] block mb-2">
          {section.kicker}
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl font-light text-[#231F20] mb-6">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed mb-8">
          {section.intro}
        </p>

        {/* Main Quote Box */}
        <div className="quote-card p-6 sm:p-8 text-left my-8 bg-[#FFFDF9]">
          <p className="font-serif-cormorant italic text-lg sm:text-2xl text-[#362F2D] leading-relaxed whitespace-pre-line">
            {section.mainQuote}
          </p>
        </div>
      </div>

      {/* Instagram Story Spotlight Box */}
      {section.instagramStory && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="editorial-card p-6 sm:p-10 mb-20 relative overflow-hidden bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EE] to-[#FBF1F3]"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C86D7C] font-semibold mb-3">
            <Camera size={16} />
            <span>{section.instagramStory.subKicker}</span>
          </div>

          <h3 className="font-serif-cormorant text-2xl sm:text-4xl text-[#231F20] mb-2 font-normal">
            {section.instagramStory.subHeading}
          </h3>
          <span className="inline-block px-3 py-1 rounded-full bg-[#F8EBEF] text-[#9B3B52] text-xs font-medium mb-6">
            {section.instagramStory.label}
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Story Steps */}
            <div className="space-y-3">
              {section.instagramStory.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#584F4C]">
                  <span className="w-5 h-5 rounded-full bg-[#C86D7C]/15 text-[#C86D7C] flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Story Quote & Progression */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF]/80 border border-[#C86D7C]/20">
              <p className="font-serif-cormorant italic text-lg sm:text-xl text-[#362F2D] mb-4">
                {section.instagramStory.quote}
              </p>
              <p className="text-xs text-[#8C827E] italic mb-4">
                {section.instagramStory.note}
              </p>
              <div className="p-3 rounded-xl bg-[#F8EBEF] text-[#9B3B52] text-xs font-medium leading-relaxed">
                {section.instagramStory.progression}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Editorial Interactive Timeline Layout */}
      <div className="relative mt-16">
        {/* Central Vertical Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C86D7C]/30 via-[#C86D7C]/15 to-transparent -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-12 sm:space-y-16">
          {section.timeline.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2 p-2">
                  <div className="editorial-card p-6 sm:p-8 relative group">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-serif-cormorant text-3xl font-light text-[#C86D7C]">
                        {item.rawNum}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#8C827E] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#C86D7C]/10">
                        {item.title}
                      </span>
                    </div>

                    <h4 className="font-serif-cormorant text-2xl text-[#231F20] font-normal mb-1">
                      {item.displayTitle}
                    </h4>
                    <p className="font-serif-cormorant italic text-sm text-[#C86D7C] mb-4">
                      {item.tagline}
                    </p>

                    <p className="font-sans-jakarta text-sm sm:text-base text-[#584F4C] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Central Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FAF7F2] border-2 border-[#C86D7C] items-center justify-center z-10 shadow-xs">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C86D7C]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
