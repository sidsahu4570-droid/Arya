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
    <section id={section.id} className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-[#C86D7C]/15">
      {/* Editorial Chapter Header directly on Paper Canvas */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="w-8 h-px bg-[#C86D7C]/30" />
          <span className="font-handwriting text-2xl text-[#C86D7C]">
            {section.kicker}
          </span>
          <span className="w-8 h-px bg-[#C86D7C]/30" />
        </div>
        <h2 className="font-serif-cormorant text-4xl sm:text-6xl md:text-7xl font-light text-[#231F20] mb-4">
          {section.heading}
        </h2>
        <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed max-w-2xl mx-auto mb-8">
          {section.intro}
        </p>

        {/* Main Quote - Pure Open Editorial Typography directly on Canvas */}
        <div className="relative max-w-3xl mx-auto my-8 sm:my-12 py-6 border-y border-[#C86D7C]/20 text-center">
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
          className="my-12 sm:my-20 py-10 sm:py-14 border-t border-b border-[#C86D7C]/20 text-center"
        >
          {/* Header & Subheading */}
          <div className="max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C86D7C] font-semibold mb-2 justify-center">
              <Camera size={16} />
              <span>{section.instagramStory.subKicker}</span>
            </div>

            <h3 className="font-serif-cormorant text-3xl sm:text-5xl md:text-6xl text-[#231F20] mb-3 font-light">
              {section.instagramStory.subHeading}
            </h3>

            <span className="inline-block px-3.5 py-1 rounded-full bg-[#F8EBEF] text-[#9B3B52] text-xs font-medium tracking-wide">
              {section.instagramStory.label}
            </span>
          </div>

          {/* Memory Sequence - 5 Floating Moments Unfolding Naturally */}
          <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8 my-8 sm:my-12 text-left px-4">
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
              className="text-center pt-4"
            >
              <p className="font-serif-cormorant italic text-3xl sm:text-5xl md:text-6xl text-[#9B3B52] font-semibold leading-tight">
                {section.instagramStory.points[4]}
              </p>
            </motion.div>
          </div>

          {/* Story Quote, Note & Progression - Pure Open Editorial Layout */}
          <div className="max-w-2xl mx-auto pt-8 border-t border-[#C86D7C]/15 space-y-4">
            <p className="font-serif-cormorant italic text-xl sm:text-3xl text-[#231F20] leading-relaxed">
              {section.instagramStory.quote}
            </p>

            <p className="font-sans-jakarta text-xs sm:text-sm text-[#8C827E] italic">
              {section.instagramStory.note}
            </p>

            <div className="pt-2 text-[#9B3B52] text-xs sm:text-sm font-medium leading-relaxed max-w-lg mx-auto">
              {section.instagramStory.progression}
            </div>
          </div>
        </motion.div>
      )}

      {/* 
        ==================================================
        CINEMATIC EDITORIAL STORY - MEMORIES UNFOLDING
        ==================================================
      */}
      <div className="pt-8 sm:pt-14">

        {/* MEMORY 1: The Interview */}
        {m1 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-10 sm:my-16 text-left max-w-xl"
          >
            <h3 className="font-serif-cormorant text-3xl sm:text-5xl font-light text-[#231F20] mb-2 tracking-wide uppercase">
              {m1.title}
            </h3>
            <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#C86D7C] mb-3">
              {m1.tagline}
            </p>
            <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed">
              {m1.description}
            </p>
          </motion.div>
        )}

        {/* MEMORY 2: Working Together */}
        {m2 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-12 sm:my-20 text-left sm:text-right max-w-xl sm:ml-auto"
          >
            <p className="font-serif-cormorant italic text-3xl sm:text-5xl text-[#9B3B52] font-light leading-snug mb-3">
              "{m2.tagline}"
            </p>
            <span className="text-xs uppercase tracking-widest text-[#8C827E] font-semibold block mb-2">
              {m2.title}
            </span>
            <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed">
              {m2.description}
            </p>
          </motion.div>
        )}

        {/* MEMORY 3: That Google Meet */}
        {m3 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-12 sm:my-20 max-w-xl mx-auto text-center py-8 border-y border-[#C86D7C]/15"
          >
            <span className="font-handwriting text-2xl text-[#C86D7C] block mb-2">
              {m3.displayTitle}
            </span>
            <h3 className="font-serif-cormorant text-4xl sm:text-6xl text-[#231F20] font-light mb-2">
              {m3.title}
            </h3>
            <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#8C827E] mb-4">
              {m3.tagline}
            </p>
            <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed">
              {m3.description}
            </p>
          </motion.div>
        )}

        {/* MEMORY 4: Instagram */}
        {m4 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-12 sm:my-20 text-left max-w-lg sm:pl-10"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C86D7C] block mb-2">
              {m4.title}
            </span>
            <p className="font-serif-cormorant text-2xl sm:text-4xl text-[#231F20] font-normal italic leading-snug mb-3">
              "{m4.tagline}"
            </p>
            <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed">
              {m4.description}
            </p>
          </motion.div>
        )}

        {/* MEMORY 5: More Conversations */}
        {m5 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-14 sm:my-22 md:ml-12 max-w-2xl text-left"
          >
            <h3 className="font-serif-cormorant text-4xl sm:text-6xl text-[#231F20] font-light tracking-tight mb-2">
              {m5.title}
            </h3>
            <p className="font-serif-cormorant italic text-2xl sm:text-3xl text-[#9B3B52] mb-4">
              {m5.tagline}
            </p>
            <p className="font-sans-jakarta text-base sm:text-lg text-[#584F4C] leading-relaxed max-w-xl">
              {m5.description}
            </p>
          </motion.div>
        )}

        {/* MEMORY 6: The Confession */}
        {m6 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="my-14 sm:my-22 max-w-2xl mx-auto text-center"
          >
            <h3 className="font-serif-cormorant text-5xl sm:text-7xl font-light text-[#231F20] mb-2 tracking-wide">
              {m6.title}
            </h3>
            <p className="font-handwriting text-3xl sm:text-4xl text-[#C86D7C] mb-4">
              {m6.tagline}
            </p>
            <p className="font-sans-jakarta text-lg sm:text-xl text-[#584F4C] leading-relaxed max-w-lg mx-auto font-light">
              {m6.description}
            </p>
          </motion.div>
        )}

        {/* MEMORY 7: Where We Are Now */}
        {m7 && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mt-16 sm:mt-24 mb-10 max-w-2xl mx-auto text-center py-10 sm:py-14 border-t border-[#C86D7C]/20"
          >
            <span className="text-xs uppercase tracking-widest text-[#C86D7C] font-semibold block mb-3">
              the present moment
            </span>
            <h3 className="font-serif-cormorant text-4xl sm:text-6xl text-[#231F20] font-light mb-2">
              {m7.displayTitle}
            </h3>
            <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#8C827E] mb-6">
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





