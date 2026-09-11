import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#C86D7C]/15 text-center text-xs text-[#8C827E] bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-[#FFFFFF] border border-[#C86D7C]/20 text-[#C86D7C] hover:bg-[#F8EBEF] hover:border-[#C86D7C] transition-all shadow-xs"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>

        <div className="flex items-center gap-1.5 font-serif-cormorant text-sm italic text-[#584F4C]">
          <span>Written with patience and care</span>
          <Heart size={12} className="text-[#C86D7C] fill-current" />
          <span>for Arya</span>
        </div>
      </div>
    </footer>
  );
}
