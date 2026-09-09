import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Camera, Video, Unlock } from 'lucide-react';

export default function HowItStartedSection() {
  const diaryEntries = [
    {
      num: '01',
      title: 'THE INTERVIEW',
      note: 'where I thought this was just work.',
      text: 'You came to me for a job. I took your interview, everything went well, and you started working with me.'
    },
    {
      num: '02',
      title: 'WORKING TOGETHER',
      note: 'and then I started noticing you.',
      text: 'Work updates, project discussions, and learning how we solve problems together.'
    },
    {
      num: '03',
      title: 'THAT GOOGLE MEET',
      note: 'the CRM call',
      text: 'At the end of explaining the CRM call... I casually asked for your Instagram ID.'
    },
    {
      num: '04',
      title: 'INSTAGRAM',
      note: 'asked once, asked again...',
      text: 'You initially said no. I didn\'t push you then. A few days later, I asked again... and this time, you shared it with me.'
    },
    {
      num: '05',
      title: 'MORE CONVERSATIONS',
      note: 'lunches, dinners, gym, late nights',
      text: 'Random messages, late replies, lunches, dinners, gym chats, and sharing small daily moments.'
    },
    {
      num: '06',
      title: 'THE CONFESSION',
      note: 'honest feelings',
      text: 'I told you that I liked you and wanted something more than just friendship.'
    },
    {
      num: '07',
      title: 'WHERE WE ARE NOW',
      note: 'no rush, just patience',
      text: '"Maybe after some time—a month, two months, a year—we see where things go and if our vibes match."'
    }
  ];

  return (
    <section id="how-this-started" className="section-container">
      <SectionHeader
        badge="our little timeline"
        title="Funny how this started."
        subtitle="It wasn't scripted, and I definitely didn't plan it. It just happened organically."
      />

      {/* Intro Narrative Quote */}
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
        <p className="font-serif text-subtitle" style={{ fontSize: '1.3rem', color: 'var(--text-primary)', lineHeight: '1.8' }}>
          "You came to me for a job. I took your interview. Everything went well. You started working with me...<br /><br />
          And somewhere between conversations about work, random messages, late replies, lunches, dinners, gym, and all those little moments...<br />
          <span className="text-gradient-rose font-serif" style={{ fontSize: '1.45rem' }}>I started seeing you differently."</span>
        </p>
      </div>

      {/* SPECIAL MEMORY CARD: "And then there was Instagram..." */}
      <div
        className="glass-card mb-20"
        style={{
          background: 'rgba(50, 19, 31, 0.65)',
          borderColor: 'rgba(231, 184, 193, 0.25)',
          maxWidth: '750px',
          margin: '0 auto 5rem'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span className="handwritten-note" style={{ fontSize: '1.4rem' }}>
            That One Google Meet Call...
          </span>
          <h3 className="font-serif text-gradient-rose" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginTop: '0.4rem' }}>
            "And then there was Instagram..."
          </h3>
        </div>

        {/* Dialogue Memory Flow */}
        <div
          style={{
            maxWidth: '540px',
            margin: '0 auto 2rem',
            background: 'rgba(22, 10, 16, 0.65)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-glass)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-blush)', fontSize: '0.9rem' }}>
            <Video size={16} />
            <span>Google Meet • CRM Explanation Call</span>
          </div>

          <div style={{ alignSelf: 'flex-start', maxWidth: '82%' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Siddharth</div>
            <div style={{ background: 'rgba(231, 184, 193, 0.12)', border: '1px solid rgba(231, 184, 193, 0.25)', padding: '0.7rem 1rem', borderRadius: '14px 14px 14px 4px', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
              "Waise... Instagram ID?"
            </div>
          </div>

          <div style={{ alignSelf: 'flex-end', maxWidth: '82%' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px', textAlign: 'right' }}>Arya</div>
            <div style={{ background: 'rgba(125, 38, 59, 0.3)', border: '1px solid rgba(125, 38, 59, 0.5)', padding: '0.7rem 1rem', borderRadius: '14px 14px 4px 14px', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
              "Nope. 😌"
            </div>
          </div>

          <div style={{ textAlign: 'center', margin: '0.4rem 0', color: 'var(--text-muted)', fontSize: '0.82rem', fontStyle: 'italic' }}>
            —— I didn't push you then. A few days passed... ——
          </div>

          <div style={{ alignSelf: 'flex-start', maxWidth: '82%' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Siddharth (A few days later)</div>
            <div style={{ background: 'rgba(231, 184, 193, 0.12)', border: '1px solid rgba(231, 184, 193, 0.25)', padding: '0.7rem 1rem', borderRadius: '14px 14px 14px 4px', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
              "Ab Instagram ID mil sakti hai?"
            </div>
          </div>

          <div style={{ alignSelf: 'flex-end', maxWidth: '82%' }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px', textAlign: 'right' }}>Arya</div>
            <div style={{ background: 'rgba(201, 130, 145, 0.25)', border: '1px solid rgba(201, 130, 145, 0.4)', padding: '0.7rem 1rem', borderRadius: '14px 14px 4px 14px', color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 500 }}>
              "Okay... here you go."
            </div>
          </div>

          <div style={{ textAlign: 'center', padding: '0.6rem', background: 'rgba(231, 184, 193, 0.08)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--accent-rose)', color: 'var(--accent-blush)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Unlock size={15} />
            <span>Instagram Unlocked. 😂</span>
          </div>
        </div>

        {/* Text Reflection */}
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <p className="font-serif text-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            "I asked once. You said no.<br />
            I didn't push you then.<br />
            A few days later, I asked again...<br />
            <span className="text-gradient-rose font-serif" style={{ fontSize: '1.35rem' }}>and this time, you shared it with me.</span>"
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            Maybe it was just Instagram. But somehow, that tiny little thing still made me smile.
          </p>

          <span className="handwritten-note" style={{ fontSize: '1.3rem', color: 'var(--accent-champagne)' }}>
            CRM ➔ Google Meet ➔ Instagram — Funny how something that started with work slowly became a little more personal. 😂
          </span>
        </div>
      </div>

      {/* Diary Chapters Flow */}
      <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {diaryEntries.map((entry, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: idx * 0.08 }}
            style={{
              paddingLeft: '1.5rem',
              borderLeft: '2px solid rgba(231, 184, 193, 0.2)',
              position: 'relative'
            }}
          >
            <div style={{ position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-rose)' }} />
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
              <span className="font-serif text-muted" style={{ fontSize: '1.1rem', fontWeight: 600 }}>{entry.num}</span>
              <h3 className="font-serif text-gradient-rose" style={{ fontSize: '1.5rem', margin: 0 }}>{entry.title}</h3>
              <span className="handwritten-note" style={{ fontSize: '1.25rem', color: 'var(--accent-blush)' }}>{entry.note}</span>
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.7 }}>
              {entry.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
