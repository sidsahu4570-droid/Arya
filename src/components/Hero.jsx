import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';

export default function Hero() {
  const { hero } = aryaContent;

  const scrollToFirstSection = () => {
    const el = document.getElementById('how-this-started');
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Letter reveal animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const letters = hero.title.split('');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden bg-paper-gradient">
      {/* Ambient Radial Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] h-[340px] sm:h-[650px] bg-gradient-radial from-[#C86D7C]/10 via-[#F8EBEF]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Delicate Art-Directed Frame Border */}
      <div className="absolute inset-6 sm:inset-12 border border-[#C86D7C]/12 rounded-3xl pointer-events-none hidden md:block" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Tagline */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-handwriting text-3xl sm:text-5xl text-[#C86D7C] mb-4 sm:mb-6 block tracking-wide select-none"
        >
          {hero.tagline}
        </motion.span>

        {/* Letter-by-Letter Reveal for "ARYA" */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center mb-6 sm:mb-8"
        >
          {letters.map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="font-serif-cormorant text-7xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-extralight tracking-[0.12em] text-[#231F20] leading-none uppercase select-none"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Delicate Underline Flourish */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: 'easeOut' }}
          className="w-48 sm:w-80 md:w-96 h-[2px] bg-gradient-to-r from-transparent via-[#C86D7C]/50 to-transparent mb-8 sm:mb-10"
        />

        {/* Subtitle Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="font-serif-cormorant italic text-xl sm:text-3xl md:text-4xl text-[#362F2D] max-w-2xl leading-relaxed mb-6 font-normal whitespace-pre-line"
        >
          {hero.quote}
        </motion.p>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="font-sans-jakarta text-sm sm:text-base md:text-lg text-[#544C4A] max-w-lg font-light leading-relaxed mb-12 sm:mb-16 whitespace-pre-line"
        >
          {hero.paragraph}
        </motion.p>

        {/* Scroll CTA Button */}
        <motion.button
          onClick={scrollToFirstSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FFFFFF] border border-[#C86D7C]/25 text-[#231F20] text-sm sm:text-base font-serif-cormorant italic tracking-wide shadow-sm hover:shadow-md hover:border-[#C86D7C] transition-all"
        >
          <span className="text-[#C86D7C] group-hover:translate-y-0.5 transition-transform duration-300">
            {hero.cta}
          </span>
        </motion.button>
      </div>
    </section>
  );
}
