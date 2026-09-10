import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { aryaContent } from '../data/aryaContent';
import { Sparkles, MessageCircleWarning, Heart } from 'lucide-react';

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
    <section id={section.id} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#C86D7C]/15">
      {/* Chapter Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-handwriting text-2xl sm:text-3xl text-[#C86D7C] block mb-2">
          {section.kicker}
        </span>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl font-light text-[#231F20] mb-4">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base sm:text-lg text-[#544C4A] leading-relaxed">
          {section.subtitle}
        </p>
      </div>

      {/* Grid of Observations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {section.observations.map((obs, idx) => (
          <motion.div
            key={obs.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className={`editorial-card p-6 sm:p-8 ${
              obs.title === 'When I Get It Wrong' ? 'md:col-span-2 lg:col-span-2 bg-[#FFFDF9]' : ''
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#C86D7C] text-sm">♡</span>
              <h3 className="font-serif-cormorant text-2xl text-[#231F20] font-normal">
                {obs.title}
              </h3>
            </div>
            <p className="font-sans-jakarta text-sm sm:text-base text-[#544C4A] leading-relaxed whitespace-pre-line">
              {obs.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* The Infamous Emoji Incident Box */}
      {section.emojiIncident && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="editorial-card p-8 sm:p-14 text-center max-w-3xl mx-auto bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EE] to-[#FBF1F3] relative overflow-hidden border-2 border-[#C86D7C]/25 shadow-md"
        >
          <span className="font-handwriting text-2xl sm:text-3xl text-[#C86D7C] block mb-2">
            {section.emojiIncident.subKicker}
          </span>
          <h3 className="font-serif-cormorant text-2xl sm:text-4xl text-[#231F20] mb-6 font-normal">
            {section.emojiIncident.subHeading}
          </h3>

          {/* Interactive Emoji Container with Pulsing Attention Ring */}
          <div className="my-8 flex justify-center">
            <div className="relative inline-block">
              {/* Pulsing Outer Attention Ring */}
              <div className="absolute -inset-3 rounded-full bg-[#C86D7C]/20 animate-ping pointer-events-none opacity-75" />

              <button
                onClick={handleEmojiClick}
                aria-label="Tap emoji to reveal incident text"
                className="relative z-10 p-6 rounded-full bg-[#FFFFFF] border-2 border-[#C86D7C] shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center"
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

          {/* Revealed Text Animation */}
          <AnimatePresence>
            {emojiRevealed && (
              <motion.div
                initial={{ opacity: 0, height: 0, scale: 0.96 }}
                animate={{ opacity: 1, height: 'auto', scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="mt-6 p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#C86D7C]/25 text-left space-y-4 shadow-sm"
              >
                {section.emojiIncident.revealedContent.map((line, idx) => (
                  <p
                    key={idx}
                    className={`font-serif-cormorant text-lg sm:text-2xl text-[#362F2D] ${
                      idx === 2
                        ? 'font-sans-jakarta text-sm font-medium text-[#C86D7C] pt-3 border-t border-[#C86D7C]/15'
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
