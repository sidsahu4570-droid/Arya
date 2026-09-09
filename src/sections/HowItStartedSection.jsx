import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import GlassCard from '../components/GlassCard';
import { Briefcase, MessageCircle, Heart, Clock, Sparkles, Video, Camera, Unlock } from 'lucide-react';

export default function HowItStartedSection() {
  const timelineEvents = [
    {
      icon: Briefcase,
      title: '1. The Interview',
      subtitle: 'Where it all began',
      description: 'You came to me for a job. I interviewed you, everything went well, and you started working with me.'
    },
    {
      icon: Briefcase,
      title: '2. Working Together',
      subtitle: 'Professional chemistry',
      description: 'Work updates, project discussions, and learning how we solve problems together.'
    },
    {
      icon: Video,
      title: '3. Google Meet — CRM Call',
      subtitle: 'The first ask',
      description: 'At the end of explaining the CRM call, I asked for your Instagram ID... and you initially said no.'
    },
    {
      icon: Camera,
      title: '4. Asking Again & Instagram',
      subtitle: 'A few days later',
      description: 'I didn\'t push you then. A few days later, I asked again... and this time, you shared it with me.'
    },
    {
      icon: MessageCircle,
      title: '5. More Conversations',
      subtitle: 'Beyond work',
      description: 'Random messages, late replies, lunches, dinners, gym chats, and sharing small daily moments.'
    },
    {
      icon: Heart,
      title: '6. The Confession',
      subtitle: 'Honest feelings',
      description: 'I told you that I liked you and wanted something more than just friendship.'
    },
    {
      icon: Clock,
      title: '7. Where We Are Now',
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

      {/* SPECIAL FEATURE CARD: "And then there was Instagram..." */}
      <GlassCard
        className="mb-16"
        style={{
          background: 'linear-gradient(135deg, rgba(225, 48, 108, 0.08) 0%, rgba(245, 96, 64, 0.05) 50%, rgba(230, 200, 148, 0.08) 100%)',
          borderColor: 'rgba(245, 96, 64, 0.25)',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), 0 0 20px rgba(225, 48, 108, 0.1)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span className="badge-pill mb-3" style={{ background: 'rgba(225, 48, 108, 0.15)', color: '#f56040', borderColor: 'rgba(245, 96, 64, 0.3)' }}>
            <Camera size={13} style={{ marginRight: '4px' }} /> That One Google Meet Call
          </span>
          <h3 className="font-serif text-gradient-gold" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginTop: '0.5rem' }}>
            "And then there was Instagram..."
          </h3>
        </div>

        {/* Dialogue Visualizer */}
        <div
          style={{
            maxWidth: '560px',
            margin: '0 auto 2rem',
            background: 'rgba(12, 15, 22, 0.7)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-glass)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {/* Step 1: Google Meet */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem 1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-sm)' }}>
            <Video size={18} className="text-gold" />
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Google Meet • CRM Explanation Call</span>
          </div>

          {/* Step 2: First Ask */}
          <div style={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px', marginLeft: '4px' }}>Siddharth</div>
            <div style={{ background: 'rgba(230, 200, 148, 0.12)', border: '1px solid rgba(230, 200, 148, 0.25)', padding: '0.75rem 1.1rem', borderRadius: '16px 16px 16px 4px', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
              "Waise... Instagram ID?"
            </div>
          </div>

          {/* Step 3: Arya saying Nope */}
          <div style={{ alignSelf: 'flex-end', maxWidth: '80%' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px', marginRight: '4px', textAlign: 'right' }}>Arya</div>
            <div style={{ background: 'rgba(223, 158, 142, 0.15)', border: '1px solid rgba(223, 158, 142, 0.3)', padding: '0.75rem 1.1rem', borderRadius: '16px 16px 4px 16px', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
              "Nope. 😌"
            </div>
          </div>

          {/* Transition Divider */}
          <div style={{ textAlign: 'center', margin: '0.5rem 0', color: 'var(--text-muted)', fontSize: '0.82rem', fontStyle: 'italic', letterSpacing: '0.04em' }}>
            —— I didn't push you then. A few days passed... ——
          </div>

          {/* Step 4: Second Ask */}
          <div style={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px', marginLeft: '4px' }}>Siddharth (A few days later)</div>
            <div style={{ background: 'rgba(230, 200, 148, 0.12)', border: '1px solid rgba(230, 200, 148, 0.25)', padding: '0.75rem 1.1rem', borderRadius: '16px 16px 16px 4px', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
              "Ab Instagram ID mil sakti hai?"
            </div>
          </div>

          {/* Step 5: Arya sharing it */}
          <div style={{ alignSelf: 'flex-end', maxWidth: '80%' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px', marginRight: '4px', textAlign: 'right' }}>Arya</div>
            <div style={{ background: 'linear-gradient(135deg, rgba(225, 48, 108, 0.2), rgba(245, 96, 64, 0.2))', border: '1px solid rgba(245, 96, 64, 0.4)', padding: '0.75rem 1.1rem', borderRadius: '16px 16px 4px 16px', color: 'var(--accent-gold-light)', fontSize: '0.95rem', fontWeight: 500 }}>
              "Okay... here you go."
            </div>
          </div>

          {/* Step 6: Unlocked Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              padding: '0.75rem',
              background: 'rgba(230, 200, 148, 0.1)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--accent-gold)',
              color: 'var(--accent-gold)',
              fontWeight: 600,
              fontSize: '0.92rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '0.5rem'
            }}
          >
            <Unlock size={16} />
            <span>Instagram Unlocked. 😂</span>
          </motion.div>
        </div>

        {/* Narrative Reflection */}
        <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
          <p className="font-serif text-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            "I asked once. You said no.<br />
            I didn't push you then.<br />
            A few days later, I asked again...<br />
            <span className="text-gold font-serif" style={{ fontSize: '1.35rem' }}>and this time, you shared it with me.</span>"
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            Maybe it was just Instagram. But somehow, that tiny little thing still made me smile.
          </p>

          <div style={{ display: 'inline-flex', padding: '0.6rem 1.25rem', borderRadius: 'var(--radius-full)', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-glass)', fontSize: '0.88rem', color: 'var(--accent-gold)' }}>
            CRM ➔ Google Meet ➔ Instagram — Funny how something that started with work slowly became a little more personal. 😂
          </div>
        </div>
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
                transition={{ duration: 0.6, delay: idx * 0.1 }}
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
