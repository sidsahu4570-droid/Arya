import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { aryaContent } from '../data/aryaContent';

export default function NoticeSection() {
  const section = aryaContent.sections.find((s) => s.id === 'things-i-notice');
  const [emojiRevealed, setEmojiRevealed] = useState(false);

  if (!section) return null;

  const observations = section.observations || [];
  const obs1 = observations[0];
  const obs2 = observations[1];
  const obs3 = observations[2];
  const obs4 = observations[3];
  const obs5 = observations[4];

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
      } catch (_err) {
        // fallback
      }
    }
  };

  return (
    <section id={section.id} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#C86D7C]/15">
      {/* Chapter Header directly on Paper Canvas */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#C86D7C]/30" />
          <span className="font-handwriting text-2xl text-[#C86D7C]">
            {section.kicker}
          </span>
          <span className="w-8 h-px bg-[#C86D7C]/30" />
        </div>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl md:text-7xl font-light text-[#231F20] mb-4">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base sm:text-lg text-[#544C4A] leading-relaxed">
          {section.subtitle}
        </p>
      </div>

      {/* 
        ==================================================
        FREE-FLOWING EDITORIAL COLLECTION OF OBSERVATIONS
        (NO 01/02/03 numbers, NO repeated hearts, NO horizontal lines between items, NO cards)
        ==================================================
      */}
      <div className="pt-8 sm:pt-14">

        {/* Observation 1: Fiercely Independent - Left Aligned, Large Serif Title */}
        {obs1 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-16 sm:my-24 text-left max-w-xl"
          >
            <h3 className="font-serif-cormorant text-3xl sm:text-5xl font-light text-[#231F20] mb-3 uppercase tracking-wide">
              {obs1.title}
            </h3>
            <p className="font-sans-jakarta text-base sm:text-lg text-[#544C4A] leading-relaxed">
              {obs1.text}
            </p>
          </motion.div>
        )}

        {/* Observation 2: Gym & Routine - Offset Right, Understated Italic Heading */}
        {obs2 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-20 sm:my-32 text-left sm:text-right max-w-xl sm:ml-auto"
          >
            <h3 className="font-serif-cormorant italic text-3xl sm:text-4xl text-[#C86D7C] font-normal mb-3">
              {obs2.title}
            </h3>
            <p className="font-sans-jakarta text-base sm:text-lg text-[#544C4A] leading-relaxed">
              {obs2.text}
            </p>
          </motion.div>
        )}

        {/* Observation 3: Food is an Afterthought - Oversized Centered Editorial Statement */}
        {obs3 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-24 sm:my-36 max-w-xl mx-auto text-center py-6"
          >
            <h3 className="font-serif-cormorant text-4xl sm:text-6xl text-[#231F20] font-light mb-4">
              {obs3.title}
            </h3>
            <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#544C4A] leading-relaxed">
              "{obs3.text}"
            </p>
          </motion.div>
        )}

        {/* Observation 4: Disappearing into Sleep - Intimate Soft Layout with Left Padding */}
        {obs4 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-20 sm:my-32 text-left max-w-lg sm:pl-12"
          >
            <h3 className="font-serif-cormorant italic text-3xl sm:text-5xl text-[#9B3B52] font-normal mb-3">
              {obs4.title}
            </h3>
            <p className="font-sans-jakarta text-base sm:text-lg text-[#544C4A] leading-relaxed">
              {obs4.text}
            </p>
          </motion.div>
        )}

        {/* Observation 5: When I Get It Wrong - Wide Central Highlight with Subtle Border Accent */}
        {obs5 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-24 sm:my-36 max-w-2xl mx-auto text-center py-12 border-y border-[#C86D7C]/15"
          >
            <h3 className="font-serif-cormorant text-3xl sm:text-5xl font-light text-[#231F20] mb-6 uppercase tracking-wide">
              {obs5.title}
            </h3>
            <p className="font-serif-cormorant italic text-xl sm:text-3xl text-[#231F20] leading-relaxed whitespace-pre-line">
              {obs5.text}
            </p>
          </motion.div>
        )}

      </div>

      {/* Infamous Emoji Incident - Open Layout directly on Canvas */}
      {section.emojiIncident && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 sm:mt-28 py-14 border-t border-b border-[#C86D7C]/20 text-center max-w-3xl mx-auto"
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



