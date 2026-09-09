import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { Briefcase, MessageCircle, Heart, Clock, Sparkles } from 'lucide-react';

export default function HowItStartedSection() {
  const timelineEvents = [
    {
      icon: Briefcase,
      title: 'The Interview',
      subtitle: 'Where it all began',
      description: 'You came to me for a job. I interviewed you, everything went well, and you started working with me.'
    },
    {
      icon: MessageCircle,
      title: 'Working Together',
      subtitle: 'Between tasks & messages',
      description: 'Random work updates slowly turned into personal conversations, late replies, lunches, dinners, and gym chats.'
    },
    {
      icon: Sparkles,
      title: 'Seeing You Differently',
      subtitle: 'The shift',
      description: 'I didn\'t plan for it. I just started liking the person behind the conversations.'
    },
    {
      icon: Heart,
      title: 'The Confession',
      subtitle: 'Honest feelings',
      description: 'I told you that I liked you and wanted something more than just friendship.'
    },
    {
      icon: Clock,
      title: 'Where We Are Now',
      subtitle: 'No rush, just patience',
      description: '"Maybe after some time—a month, two months, a year—we see where things go and if our vibes match."'
    }
  ];

  return (
    <section id="how-this-started" className="section-container">
      <SectionHeader
        badge="01. The Beginning"
        title="Funny how this started."
        subtitle="It wasn't scripted, and I definitely didn't plan it. It just happened organically."
      />

      <GlassCard className="mb-12">
        <p className="font-serif text-subtitle text-center" style={{ fontSize: '1.25rem', color: 'var(--text-primary)', lineHeight: '1.8' }}>
          "You came to me for a job. I took your interview. Everything went well. You started working with me...<br /><br />
          And somewhere between conversations about work, random messages, late replies, lunches, dinners, gym, and all those little moments...<br />
          <span className="text-gold font-serif" style={{ fontSize: '1.35rem' }}>I started seeing you differently."</span>
        </p>
      </GlassCard>

      {/* Interactive Timeline */}
      <div style={{ position: 'relative', maxWidth: '750px', margin: '0 auto' }}>
        {/* Timeline connecting line */}
        <div
          style={{
            position: 'absolute',
            left: '28px',
            top: '30px',
            bottom: '30px',
            width: '2px',
            background: 'linear-gradient(180deg, var(--accent-gold) 0%, var(--accent-rose) 100%)',
            opacity: 0.3,
            zIndex: 0
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
          {timelineEvents.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-glass)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-gold)',
                    boxShadow: '0 0 15px rgba(230, 200, 148, 0.15)',
                    flexShrink: 0
                  }}
                >
                  <Icon size={22} />
                </div>

                <div
                  className="glass-card"
                  style={{
                    flex: 1,
                    padding: '1.5rem',
                    marginBottom: 0
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <h3 className="font-serif text-gold" style={{ fontSize: '1.3rem', margin: 0 }}>
                      {item.title}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.subtitle}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
