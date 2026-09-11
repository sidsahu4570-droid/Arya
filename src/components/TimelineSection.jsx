import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { Camera } from 'lucide-react';

export default function TimelineSection() {
  const section = aryaContent.sections.find((s) => s.id === 'how-this-started');
  if (!section) return null;

  const memories = section.timeline || [];
  const m1 = memories[0];
  const m2 = memories[1];
  const m3 = memories[2];
  const m4 = memories[3];
  const m5 = memories[4];
  const m6 = memories[5];
  const m7 = memories[6];

  return (
    <section id={section.id} className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#C86D7C]/15">
      {/* Editorial Chapter Header directly on Paper Canvas */}
      <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-32">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#C86D7C]/30" />
          <span className="font-handwriting text-2xl text-[#C86D7C]">
            {section.kicker}
          </span>
          <span className="w-8 h-px bg-[#C86D7C]/30" />
        </div>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl md:text-7xl font-light text-[#231F20] mb-6">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed max-w-2xl mx-auto mb-16">
          {section.intro}
        </p>

        {/* Main Quote - Pure Open Editorial Typography directly on Canvas */}
        <div className="relative max-w-3xl mx-auto my-16 py-8 border-y border-[#C86D7C]/20 text-center">
          <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#231F20] leading-relaxed whitespace-pre-line">
            {section.mainQuote}
          </p>
        </div>
      </div>

      {/* Instagram Story Portion - Organic Open Editorial Memory Sequence */}
      {section.instagramStory && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-24 py-16 border-t border-b border-[#C86D7C]/20 text-center"
        >
          {/* Header & Subheading */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C86D7C] font-semibold mb-3 justify-center">
              <Camera size={16} />
              <span>{section.instagramStory.subKicker}</span>
            </div>

            <h3 className="font-serif-cormorant text-3xl sm:text-5xl md:text-6xl text-[#231F20] mb-4 font-light">
              {section.instagramStory.subHeading}
            </h3>

            <span className="inline-block px-3.5 py-1 rounded-full bg-[#F8EBEF] text-[#9B3B52] text-xs font-medium tracking-wide">
              {section.instagramStory.label}
            </span>
          </div>

          {/* Memory Sequence - 5 Floating Moments Unfolding Naturally (No Numbered Circles, No Cards) */}
          <div className="max-w-2xl mx-auto space-y-10 sm:space-y-14 my-16 text-left px-4">
            {/* Moment 1 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-left md:w-4/5"
            >
              <p className="font-serif-cormorant text-2xl sm:text-3xl text-[#584F4C] font-light leading-relaxed">
                {section.instagramStory.points[0]}
              </p>
            </motion.div>

            {/* Moment 2 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-right md:w-4/5 md:ml-auto"
            >
              <p className="font-serif-cormorant italic text-3xl sm:text-4xl text-[#9B3B52] font-normal leading-relaxed">
                {section.instagramStory.points[1]}
              </p>
            </motion.div>

            {/* Moment 3 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center sm:text-left sm:pl-12"
            >
              <p className="font-handwriting text-2xl sm:text-3xl text-[#8C827E] italic">
                {section.instagramStory.points[2]}
              </p>
            </motion.div>

            {/* Moment 4 */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-left md:w-5/6"
            >
              <p className="font-serif-cormorant text-3xl sm:text-5xl text-[#231F20] font-normal leading-tight">
                {section.instagramStory.points[3]}
              </p>
            </motion.div>

            {/* Moment 5 - Payoff */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-center pt-6"
            >
              <p className="font-serif-cormorant italic text-3xl sm:text-5xl md:text-6xl text-[#9B3B52] font-semibold leading-tight">
                {section.instagramStory.points[4]}
              </p>
            </motion.div>
          </div>

          {/* Story Quote, Note & Progression - Pure Open Editorial Layout */}
          <div className="max-w-2xl mx-auto pt-12 border-t border-[#C86D7C]/15 space-y-6">
            <p className="font-serif-cormorant italic text-xl sm:text-3xl text-[#231F20] leading-relaxed">
              {section.instagramStory.quote}
            </p>

            <p className="font-sans-jakarta text-xs sm:text-sm text-[#8C827E] italic">
              {section.instagramStory.note}
            </p>

            <div className="pt-4 text-[#9B3B52] text-xs sm:text-sm font-medium leading-relaxed max-w-lg mx-auto">
              {section.instagramStory.progression}
            </div>
          </div>
        </motion.div>
      )}

      {/* 
        ==================================================
        CINEMATIC EDITORIAL STORY - MEMORIES UNFOLDING
        (NO timeline lines, NO dots, NO numbers, NO cards, NO repeated component loops)
        ==================================================
      */}
      <div className="pt-16 sm:pt-28">

        {/* MEMORY 1: The Interview - Left aligned, elegant serif title + italic tagline + paragraph */}
        {m1 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-24 sm:my-36 text-left max-w-xl"
          >
            <h3 className="font-serif-cormorant text-3xl sm:text-5xl font-light text-[#231F20] mb-2 tracking-wide uppercase">
              {m1.title}
            </h3>
            <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#C86D7C] mb-5">
              {m1.tagline}
            </p>
            <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed">
              {m1.description}
            </p>
          </motion.div>
        )}

        {/* MEMORY 2: Working Together - Offset Right, Large italic tagline emphasis first */}
        {m2 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-32 sm:my-48 text-left sm:text-right max-w-xl sm:ml-auto"
          >
            <p className="font-serif-cormorant italic text-3xl sm:text-5xl text-[#9B3B52] font-light leading-snug mb-4">
              "{m2.tagline}"
            </p>
            <span className="text-xs uppercase tracking-widest text-[#8C827E] font-semibold block mb-3">
              {m2.title}
            </span>
            <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed">
              {m2.description}
            </p>
          </motion.div>
        )}

        {/* MEMORY 3: That Google Meet - Centered editorial moment with spacious borders */}
        {m3 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-36 sm:my-52 max-w-xl mx-auto text-center py-12 border-y border-[#C86D7C]/15"
          >
            <span className="font-handwriting text-2xl text-[#C86D7C] block mb-2">
              {m3.displayTitle}
            </span>
            <h3 className="font-serif-cormorant text-4xl sm:text-6xl text-[#231F20] font-light mb-3">
              {m3.title}
            </h3>
            <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#8C827E] mb-6">
              {m3.tagline}
            </p>
            <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed">
              {m3.description}
            </p>
          </motion.div>
        )}

        {/* MEMORY 4: Instagram - Minimal typography with asymmetric left padding */}
        {m4 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-32 sm:my-48 text-left max-w-lg sm:pl-10"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C86D7C] block mb-2">
              {m4.title}
            </span>
            <p className="font-serif-cormorant text-2xl sm:text-4xl text-[#231F20] font-normal italic leading-snug mb-5">
              "{m4.tagline}"
            </p>
            <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed">
              {m4.description}
            </p>
          </motion.div>
        )}

        {/* MEMORY 5: More Conversations - Large emotional typography offset left-center */}
        {m5 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-36 sm:my-52 md:ml-12 max-w-2xl text-left"
          >
            <h3 className="font-serif-cormorant text-4xl sm:text-6xl text-[#231F20] font-light tracking-tight mb-3">
              {m5.title}
            </h3>
            <p className="font-serif-cormorant italic text-2xl sm:text-3xl text-[#9B3B52] mb-6">
              {m5.tagline}
            </p>
            <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed max-w-xl">
              {m5.description}
            </p>
          </motion.div>
        )}

        {/* MEMORY 6: The Confession - Intimate centered composition with dramatic serif focus */}
        {m6 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-36 sm:my-56 max-w-2xl mx-auto text-center"
          >
            <h3 className="font-serif-cormorant text-5xl sm:text-7xl font-light text-[#231F20] mb-3 tracking-wide">
              {m6.title}
            </h3>
            <p className="font-handwriting text-3xl sm:text-4xl text-[#C86D7C] mb-6">
              {m6.tagline}
            </p>
            <p className="font-sans-jakarta text-lg sm:text-xl text-[#584F4C] leading-relaxed max-w-lg mx-auto font-light">
              {m6.description}
            </p>
          </motion.div>
        )}

        {/* MEMORY 7: Where We Are Now - Quiet, spacious concluding statement directly on paper canvas */}
        {m7 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mt-36 sm:mt-56 mb-20 max-w-2xl mx-auto text-center py-16 border-t border-[#C86D7C]/20"
          >
            <span className="text-xs uppercase tracking-widest text-[#C86D7C] font-semibold block mb-4">
              the present moment
            </span>
            <h3 className="font-serif-cormorant text-4xl sm:text-6xl text-[#231F20] font-light mb-3">
              {m7.displayTitle}
            </h3>
            <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#8C827E] mb-8">
              {m7.tagline}
            </p>
            <p className="font-serif-cormorant italic text-2xl sm:text-4xl text-[#9B3B52] leading-relaxed max-w-xl mx-auto">
              {m7.description}
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}




