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

  // GPU-Accelerated 4-Group Entrance Animation (Runs ONCE, zero blur filters, zero loops)
  const groupVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: customDelay,
        ease: [0.25, 1, 0.5, 1]
      }
    })
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden bg-paper-gradient">
      {/* Ambient Radial Atmosphere Glow (Static GPU Layer) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] h-[340px] sm:h-[650px] bg-gradient-radial from-[#C86D7C]/10 via-[#F8EBEF]/30 to-transparent rounded-full blur-2xl sm:blur-3xl pointer-events-none transform-gpu" />

      {/* Delicate Art-Directed Frame Border */}
      <div className="absolute inset-6 sm:inset-12 border border-[#C86D7C]/12 rounded-3xl pointer-events-none hidden md:block" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* GROUP 1: Tagline */}
        <motion.span
          custom={0.1}
          variants={groupVariants}
          initial="hidden"
          animate="visible"
          className="font-handwriting text-3xl sm:text-5xl text-[#C86D7C] mb-4 sm:mb-6 block tracking-wide select-none transform-gpu"
        >
          {hero.tagline}
        </motion.span>

        {/* GROUP 2: "ARYA" Main Title */}
        <motion.div
          custom={0.25}
          variants={groupVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center mb-6 sm:mb-8 transform-gpu"
        >
          <h1 className="font-serif-cormorant text-7xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-extralight tracking-[0.12em] text-[#231F20] leading-none uppercase select-none">
            {hero.title}
          </h1>
        </motion.div>

        {/* Flourish Line */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          className="w-48 sm:w-80 md:w-96 h-[2px] bg-gradient-to-r from-transparent via-[#C86D7C]/50 to-transparent mb-8 sm:mb-10 transform-gpu"
        />

        {/* GROUP 3: Quote & Supporting Text */}
        <motion.div
          custom={0.45}
          variants={groupVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center transform-gpu"
        >
          <p className="font-serif-cormorant italic text-xl sm:text-3xl md:text-4xl text-[#362F2D] max-w-2xl leading-relaxed mb-6 font-normal whitespace-pre-line">
            {hero.quote}
          </p>

          <p className="font-sans-jakarta text-sm sm:text-base md:text-lg text-[#544C4A] max-w-lg font-light leading-relaxed mb-12 sm:mb-16 whitespace-pre-line">
            {hero.paragraph}
          </p>
        </motion.div>

        {/* GROUP 4: Scroll CTA Button (Static after entry) */}
        <motion.button
          onClick={scrollToFirstSection}
          custom={0.6}
          variants={groupVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FFFFFF] border border-[#C86D7C]/25 text-[#231F20] text-sm sm:text-base font-serif-cormorant italic tracking-wide shadow-sm hover:shadow-md hover:border-[#C86D7C] transition-all transform-gpu"
        >
          <span className="text-[#C86D7C] group-hover:translate-y-0.5 transition-transform duration-300">
            {hero.cta}
          </span>
        </motion.button>
      </div>
    </section>
  );
}

