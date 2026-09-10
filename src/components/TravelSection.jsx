import React from 'react';
import { motion } from 'framer-motion';
import { aryaContent } from '../data/aryaContent';
import { MapPin, Star } from 'lucide-react';

export default function TravelSection() {
  const section = aryaContent.sections.find((s) => s.id === 'the-world');
  if (!section) return null;

  // Tasteful, high quality editorial destination images (no stock couples)
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

      {/* Special Spotlight: Monaco */}
      {section.monacoSpotlight && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="editorial-card mb-20 overflow-hidden bg-[#FFFFFF] border-2 border-[#C86D7C]/30 shadow-lg group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Cinematic Image Side */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full overflow-hidden">
              <img
                src={destinationImages.Monaco}
                alt="Monaco Supercars"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
            </div>

            {/* Content Side */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-[#FFFDF9] to-[#FAF5EE]">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C86D7C] font-semibold mb-3">
                  <Star size={16} className="fill-current" />
                  <span>{section.monacoSpotlight.spotlightKicker}</span>
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6">
                  <h3 className="font-serif-cormorant text-4xl sm:text-6xl font-normal text-[#231F20]">
                    {section.monacoSpotlight.title}
                  </h3>
                  <span className="font-serif-cormorant italic text-lg sm:text-xl text-[#C86D7C]">
                    {section.monacoSpotlight.subTitle}
                  </span>
                </div>

                <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#362F2D] leading-relaxed mb-6 whitespace-pre-line font-normal">
                  {section.monacoSpotlight.monacoQuote}
                </p>
              </div>

              <p className="font-sans-jakarta text-sm sm:text-base text-[#544C4A] leading-relaxed pt-4 border-t border-[#C86D7C]/15">
                {section.monacoSpotlight.paragraph}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* 6 Destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.destinations.map((dest, idx) => (
          <motion.div
            key={dest.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="editorial-card overflow-hidden bg-[#FFFFFF] flex flex-col justify-between group hover:border-[#C86D7C]/40"
          >
            {/* Destination Image Header */}
            <div className="h-48 overflow-hidden relative">
              <img
                src={destinationImages[dest.name]}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                <span className="font-serif-cormorant text-2xl font-normal drop-shadow-md">
                  {dest.name}
                </span>
                <MapPin size={16} className="text-[#F8EBEF]" />
              </div>
            </div>

            {/* Destination Text Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-serif-cormorant italic text-sm text-[#C86D7C] mb-3">
                  {dest.tagline}
                </p>
                <p className="font-sans-jakarta text-sm text-[#544C4A] leading-relaxed">
                  {dest.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
