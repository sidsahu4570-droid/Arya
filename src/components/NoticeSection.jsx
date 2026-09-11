import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { aryaContent } from '../data/aryaContent';

export default function NoticeSection() {
  const section = aryaContent.sections.find((s) => s.id === 'things-i-notice');
  const [emojiRevealed, setEmojiRevealed] = useState(false);

  if (!section) return null;

  const handleEmojiClick = (e) => {
    setEmojiRevealed(!emojiRevealed);
    if (!emojiRevealed) {
      try {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;
        confetti({
          particleCount: 30,
          spread: 70,
          origin: { x, y },
          colors: ['#C86D7C', '#F8EBEF', '#E28D9D', '#C5A059']
        });
      } catch (err) {
        // fallback
      }
    }
  };

  return (
    <section id={section.id} className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[#C86D7C]/15">
      {/* Chapter Header directly on Paper Canvas */}
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
        <p className="font-sans-jakarta text-base sm:text-lg text-[#544C4A] leading-relaxed">
          {section.subtitle}
        </p>
      </div>

      {/* Editorial Magazine Grid directly on Paper Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 mb-24">
        {section.observations.map((obs, idx) => {
          const isWide = obs.title === 'When I Get It Wrong';

          return (
            <motion.div
              key={obs.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`relative pt-6 border-t border-[#C86D7C]/20 ${
                isWide ? 'md:col-span-2 pt-8 border-t-2 border-[#C86D7C]/30' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#C86D7C] text-xs">♡</span>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#8C827E]">
                  0{idx + 1}
                </span>
                <h3 className="font-serif-cormorant text-2xl sm:text-4xl text-[#231F20] font-normal ml-1">
                  {obs.title}
                </h3>
              </div>
              <p className={`font-sans-jakarta text-sm sm:text-base text-[#544C4A] leading-relaxed whitespace-pre-line ${
                isWide ? 'font-serif-cormorant italic text-xl sm:text-2xl text-[#362F2D]' : ''
              }`}>
                {obs.text}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Infamous Emoji Incident - Open Layout directly on Canvas */}
      {section.emojiIncident && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-16 py-12 border-t border-b border-[#C86D7C]/20 text-center max-w-3xl mx-auto"
        >
          <span className="font-handwriting text-2xl sm:text-3xl text-[#C86D7C] block mb-2">
            {section.emojiIncident.subKicker}
          </span>
          <h3 className="font-serif-cormorant text-3xl sm:text-5xl text-[#231F20] mb-6 font-normal">
            {section.emojiIncident.subHeading}
          </h3>

          {/* Interactive Emoji Container */}
          <div className="my-8 flex justify-center">
            <div className="relative inline-block">
              <button
                onClick={handleEmojiClick}
                aria-label="Tap emoji to reveal incident text"
                className="relative z-10 p-5 rounded-full bg-transparent hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center"
              >
                <span className="text-6xl sm:text-7xl group-hover:rotate-12 transition-transform duration-300 select-none">
                  {section.emojiIncident.emoji}
                </span>
                <span className="font-serif-cormorant italic text-xs text-[#C86D7C] mt-2 group-hover:underline font-medium">
                  {section.emojiIncident.hint}
                </span>
              </button>
            </div>
          </div>

          {/* Revealed Text Animation - Open Layout */}
          <AnimatePresence>
            {emojiRevealed && (
              <motion.div
                initial={{ opacity: 0, height: 0, scale: 0.96 }}
                animate={{ opacity: 1, height: 'auto', scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="mt-6 pt-6 border-t border-[#C86D7C]/20 text-left space-y-4"
              >
                {section.emojiIncident.revealedContent.map((line, idx) => (
                  <p
                    key={idx}
                    className={`font-serif-cormorant text-xl sm:text-3xl text-[#231F20] ${
                      idx === 2
                        ? 'font-sans-jakarta text-sm font-medium text-[#9B3B52] pt-4 border-t border-[#C86D7C]/15'
                        : 'italic'
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}


