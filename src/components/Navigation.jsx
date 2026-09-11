import React, { useState, useEffect } from 'react';
import { Heart, ChevronDown } from 'lucide-react';
import { aryaContent } from '../data/aryaContent';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sectionElements = aryaContent.sections.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id)
      }));

      const scrollPos = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const currentChapter = aryaContent.sections.find((s) => s.id === activeSection);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#C86D7C]/15 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Title */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group text-left flex items-center gap-2"
        >
          <span className="font-serif-cormorant font-semibold text-xl sm:text-2xl tracking-widest text-[#231F20] group-hover:text-[#C86D7C] transition-colors">
            ARYA
          </span>
          <span className="text-[#C86D7C] text-xs font-handwriting">♡</span>
        </button>

        {/* Center Chapter Indicator (Desktop) */}
        <div className="hidden lg:flex items-center relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFFFF]/80 border border-[#C86D7C]/20 text-xs font-medium text-[#584F4C] hover:border-[#C86D7C] transition-all shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C86D7C] animate-pulse"></span>
            <span className="font-serif-cormorant text-sm italic text-[#231F20]">
              {currentChapter ? currentChapter.chapterName : 'Begin Story'}
            </span>
            <ChevronDown size={14} className={`text-[#8C827E] transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-80 max-h-96 overflow-y-auto bg-[#FFFFFF] border border-[#C86D7C]/20 rounded-2xl shadow-xl p-2 z-50">
              <div className="text-[10px] uppercase font-semibold text-[#8C827E] px-3 py-1.5 tracking-wider font-sans-jakarta">
                Chapters
              </div>
              {aryaContent.sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                    activeSection === sec.id
                      ? 'bg-[#F8EBEF] text-[#9B3B52] font-semibold'
                      : 'text-[#584F4C] hover:bg-[#FAF7F2]'
                  }`}
                >
                  <span className="truncate pr-2">{sec.chapterName}</span>
                  {activeSection === sec.id && <Heart size={12} className="text-[#C86D7C] shrink-0" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quick Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection('final-letter')}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C86D7C] text-white text-xs font-medium tracking-wide hover:bg-[#9B3B52] transition-colors shadow-xs"
          >
            <span>For Arya</span>
            <Heart size={12} className="fill-current" />
          </button>
        </div>
      </div>
    </header>
  );
}

