import { useState, useRef, type FormEvent } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

export default function FinalCTA({ onReplay }: { onReplay: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
  const spacing = useTransform(scrollYProgress, [0, 1], ['0.6em', '0.02em']);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(16px)', 'blur(0px)']);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(profile.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        setFormStatus('error');
        setErrorMessage(data.errors?.[0]?.message || 'Failed to transmit message. Please try again.');
      }
    } catch {
      setFormStatus('error');
      setErrorMessage('Network disturbance detected. Please check your connection or reach out on Instagram.');
    }
  };

  const socialLinks = [
    { label: 'GitHub', href: profile.links.github, cursor: 'link' },
    { label: 'Instagram', href: profile.links.instagram, cursor: 'link' },
    { label: 'TIET @tietofficial', href: profile.links.thaparInstagram, cursor: 'link' },
    { label: 'LinkedIn', href: profile.links.linkedin, cursor: 'link' },
    { label: 'Direct Email', href: `mailto:${profile.email}`, cursor: 'link' },
  ];

  return (
    <section id="contact" ref={ref} className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(229,19,43,0.18),transparent_70%)]" />
      <Particles count={36} />

      <motion.p
        className="relative mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-crimson-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Next Episode
      </motion.p>
      <motion.h2
        className="relative font-display leading-[0.85] text-bone"
        style={{ fontSize: 'clamp(3.4rem, 13vw, 12rem)', letterSpacing: spacing, filter: blur, opacity }}
      >
        TO BE CONTINUED…
      </motion.h2>

      <motion.div
        className="relative mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      >
        <p className="font-sans text-2xl font-semibold tracking-[0.2em] text-bone sm:text-3xl">{profile.displayName.toUpperCase()}</p>
        <p className="mt-2 text-xs font-semibold tracking-[0.4em] text-mist sm:text-sm">
          {profile.role.toUpperCase()} • {profile.college.toUpperCase()}
        </p>
        <p className="mt-1 text-xs tracking-[0.24em] text-smoke">
          {profile.location.toUpperCase()} • 2026 – PRESENT
        </p>
      </motion.div>

      {/* Formspree Interactive Transmission Form */}
      <motion.div
        className="relative z-10 mt-12 w-full max-w-xl text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#14141e,#0c0c12)] p-6 ring-1 ring-white/10 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <div className="mb-6 border-b border-white/10 pb-4 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">Formspree Transmission</span>
            <h3 className="mt-1 font-display text-2xl tracking-wide text-bone sm:text-3xl">Send Me a Message</h3>
            <p className="mt-1 text-xs text-mist">
              Direct inbox delivery powered by Formspree. Reach out for projects, campus systems, or collaborations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-[0.2em] text-mist">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="What should I call you?"
                className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-bone placeholder-smoke transition focus:border-crimson focus:bg-white/[0.08] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-[0.2em] text-mist">
                Your Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@domain.com"
                className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-bone placeholder-smoke transition focus:border-crimson focus:bg-white/[0.08] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-[0.2em] text-mist">
                Message / Transmission
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="What would you like to build or discuss?"
                className="mt-1.5 w-full resize-none rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-bone placeholder-smoke transition focus:border-crimson focus:bg-white/[0.08] focus:outline-none"
              />
            </div>

            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-center text-xs font-semibold text-emerald-300"
              >
                ✓ Transmission received! Thank you for reaching out — I will get back to you shortly.
              </motion.div>
            )}

            {formStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-crimson/30 bg-crimson/10 p-4 text-center text-xs font-semibold text-rose-300"
              >
                {errorMessage || 'Transmission failed to send. Please try again.'}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={formStatus === 'loading'}
              className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-crimson px-6 font-sans text-xs font-bold tracking-[0.16em] text-white shadow-[0_0_35px_rgba(229,19,43,0.4)] transition hover:bg-crimson-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {formStatus === 'loading' ? (
                <span>TRANSMITTING MESSAGE...</span>
              ) : (
                <>
                  <span>▶</span>
                  <span>TRANSMIT ECHO</span>
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>

      {/* Social and Campus Links */}
      <motion.div
        className="relative mt-12 flex flex-wrap justify-center gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
      >
        {socialLinks.map((c) => (
          <motion.div key={c.label} variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}>
            <Magnetic>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                data-cursor={c.cursor}
                className="flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-6 text-xs font-bold tracking-[0.12em] text-bone transition hover:border-bone hover:bg-white/10"
              >
                {c.label.toUpperCase()}
                <span className="text-mist">↗</span>
              </a>
            </Magnetic>
          </motion.div>
        ))}
      </motion.div>

      <div className="relative mt-14 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.24em] text-smoke">
        <button type="button" onClick={() => scrollTo(0, { offset: 0 })} className="hover:text-bone">
          ↺ WATCH AGAIN
        </button>
        <button type="button" onClick={onReplay} className="hover:text-bone">
          ▶ REPLAY OPENING
        </button>
      </div>

      <footer className="mt-16 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
        <div className="mb-2 text-base">
          <SeriesMark />
        </div>
        <p className="text-[11px] leading-relaxed text-smoke">
          © {new Date().getFullYear()} {profile.displayName} • Thapar Institute (TIET), Patiala • Khanna, Punjab.
        </p>
      </footer>
    </section>
  );
}
