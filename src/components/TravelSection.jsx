import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { MapPin, Star } from 'lucide-react';

export default function TravelSection() {
  const section = aryaContent.sections.find((s) => s.id === 'the-world');
  if (!section) return null;

  const destinationImages = {
    Paris: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    Tokyo: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
    Switzerland: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    Italy: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    Dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    Maldives: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    Monaco: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80'
  };

  return (
    <section id={section.id} className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[#C86D7C]/15">
      {/* Chapter Header directly on Paper Canvas */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
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

      {/* Monaco Feature Spread directly on Canvas */}
      {section.monacoSpotlight && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-16 py-10 border-t border-b border-[#C86D7C]/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
            {/* Cinematic Image */}
            <div className="lg:col-span-6 h-[340px] sm:h-[440px] rounded-2xl overflow-hidden relative">
              <img
                src={destinationImages.Monaco}
                alt="Monaco"
                className="w-full h-full object-cover brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-6 left-6 text-white lg:hidden">
                <span className="font-serif-cormorant text-4xl font-light">Monaco</span>
              </div>
            </div>

            {/* Content directly on Canvas */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C86D7C] font-semibold mb-3">
                  <Star size={16} className="fill-current" />
                  <span>{section.monacoSpotlight.spotlightKicker}</span>
                </div>

                <div className="mb-6">
                  <h3 className="font-serif-cormorant text-4xl sm:text-6xl font-normal text-[#231F20] leading-none mb-2">
                    {section.monacoSpotlight.title}
                  </h3>
                  <span className="font-serif-cormorant italic text-lg sm:text-xl text-[#C86D7C] block">
                    {section.monacoSpotlight.subTitle}
                  </span>
                </div>

                <p className="font-serif-cormorant italic text-xl sm:text-3xl text-[#231F20] leading-relaxed mb-6 font-normal">
                  {section.monacoSpotlight.monacoQuote}
                </p>
              </div>

              <p className="font-sans-jakarta text-sm sm:text-base text-[#544C4A] leading-relaxed pt-6 border-t border-[#C86D7C]/15">
                {section.monacoSpotlight.paragraph}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* 6 Destinations Grid directly on Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {section.destinations.map((dest, idx) => (
          <motion.div
            key={dest.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="flex flex-col justify-between"
          >
            <div className="h-56 rounded-xl overflow-hidden relative mb-4">
              <img
                src={destinationImages[dest.name]}
                alt={dest.name}
                className="w-full h-full object-cover brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                <span className="font-serif-cormorant text-2xl font-light">
                  {dest.name}
                </span>
                <MapPin size={16} className="text-[#F8EBEF]" />
              </div>
            </div>

            <div>
              <p className="font-serif-cormorant italic text-base text-[#C86D7C] mb-2">
                {dest.tagline}
              </p>
              <p className="font-sans-jakarta text-sm text-[#544C4A] leading-relaxed">
                {dest.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


