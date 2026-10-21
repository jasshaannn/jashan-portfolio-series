import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { achievements, education, profile, projects, type ProfileId } from '../data/portfolio';
import { useFinePointer } from '../hooks/useMedia';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } } };
const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } },
};

export default function Hero({ onPlay, onResume, profileId }: { onPlay: () => void; onResume: () => void; profileId: ProfileId }) {
  const ref = useRef<HTMLElement>(null);
  const fine = useFinePointer();
  const { scrollTo } = useSmoothScroll();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blackout = useTransform(scrollYProgress, [0.35, 1], [0, 1]);

  // pointer parallax (desktop)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });
  const cardRotY = useTransform(px, [-1, 1], [-4, 4]);
  const cardRotX = useTransform(py, [-1, 1], [3, -3]);
  const chipX = useTransform(px, [-1, 1], [14, -14]);
  const chipY = useTransform(py, [-1, 1], [10, -10]);
  const glowX = useTransform(px, [-1, 1], ['-6%', '6%']);

  const meta = [
    education[0].period,
    'TIET Patiala',
    'Khanna, Punjab',
    `${projects.length} Originals`,
  ];

  const floating = [
    { text: 'TIET Patiala', sub: education[0].period, pos: '-left-6 -top-4', depth: 1 },
    { text: `${achievements[0].title}`, sub: achievements[0].org, pos: '-right-4 top-1/2', depth: -1 },
    { text: 'TypeScript · React · Next.js', sub: 'Primary stack', pos: '-left-4 -bottom-5', depth: 0.6 },
  ];

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
      onPointerMove={(e) => {
        if (!fine) return;
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      {/* atmosphere */}
      <motion.div aria-hidden className="absolute inset-0" style={{ x: glowX }}>
        <div className="absolute right-[-10%] top-[-10%] h-[90vh] w-[80vw] rounded-full bg-[radial-gradient(closest-side,rgba(229,19,43,0.34),rgba(229,19,43,0.06)_55%,transparent)] blur-2xl lg:right-[-4%] lg:w-[60vw]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[70vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(90,20,120,0.22),transparent)] blur-2xl" />
      </motion.div>
      <Particles className="z-[1]" />
      <div aria-hidden className="absolute inset-0 z-[1] overflow-hidden">
        <span className="light-streak left-[40%] top-[22%] w-[50vw]" style={{ animationDelay: '1.2s' }} />
        <span className="light-streak left-[30%] top-[64%] w-[40vw]" style={{ animationDelay: '3.6s' }} />
        <span className="light-streak left-[55%] top-[44%] w-[30vw]" style={{ animationDelay: '5.2s' }} />
      </div>

      {/* Hero content */}
      <div className="gutter relative z-[4] flex min-h-[100svh] items-center py-24 sm:py-28 lg:py-0">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-16">
          {/* Main Title & Bio */}
          <motion.div
            className="flex flex-col justify-center max-w-2xl"
            style={{ y: textY, opacity: fade }}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="mb-3 text-lg">
              <SeriesMark />
            </motion.div>
            <motion.h1 variants={item} className="font-display leading-[0.82] tracking-[0.02em] text-bone" style={{ fontSize: 'clamp(4.2rem, 11vw, 9.5rem)' }}>
              <span className="shimmer-text">{profile.firstName}</span>
            </motion.h1>
            <motion.p variants={item} className="mt-1 font-sans text-sm font-bold tracking-[0.62em] text-crimson-2 sm:text-base">
              {profile.seriesTag}
            </motion.p>

            <motion.div variants={item} className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium text-mist">
              <span className="rounded border border-white/25 px-1.5 py-px text-[10px] font-bold tracking-wider text-bone">FULL-STACK</span>
              {meta.map((m, i) => (
                <span key={m} className="flex items-center gap-3">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-smoke" />}
                  {m}
                </span>
              ))}
            </motion.div>

            <motion.p variants={item} className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/90 sm:text-xs sm:tracking-[0.34em]">
              {profile.tagline.join(' • ')}
            </motion.p>

            <motion.p variants={item} className="mt-4 max-w-xl text-[15px] leading-relaxed text-bone/80 sm:text-base">
              {profile.intro}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <button
                  type="button"
                  data-cursor="play"
                  onClick={onPlay}
                  className="flex min-h-12 items-center gap-3 rounded-md bg-bone px-6 py-3 text-[15px] font-bold text-ink transition hover:bg-white sm:px-8"
                >
                  <span className="text-lg">▶</span> Play Intro
                </button>
              </Magnetic>
              <Magnetic>
                {profileId === 'recruiter' ? (
                  <button type="button" onClick={onResume} className="glass flex min-h-12 items-center gap-3 rounded-md px-6 py-3 text-[15px] font-semibold text-bone transition hover:bg-white/15 sm:px-8">
                    <span className="text-lg">⤓</span> View Resume
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => scrollTo('#originals')}
                    className="glass flex min-h-12 items-center gap-3 rounded-md px-6 py-3 text-[15px] font-semibold text-bone transition hover:bg-white/15 sm:px-8"
                  >
                    <span className="text-xl leading-none">＋</span> My Work
                  </button>
                )}
              </Magnetic>
              <button
                type="button"
                onClick={() => scrollTo('#about')}
                aria-label="More info"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-lg text-bone transition hover:border-bone hover:bg-white/10"
              >
                ⓘ
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Series Overview & Featured Originals Dashboard */}
          <motion.div
            className="relative hidden lg:block"
            style={{ rotateY: cardRotY, rotateX: cardRotX, transformPerspective: 1000, opacity: fade }}
            initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
          >
            <div className="glass relative overflow-hidden rounded-2xl border border-white/15 p-7 shadow-[0_24px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(closest-side,rgba(229,19,43,0.35),transparent)] blur-xl" />
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson-2 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-crimson" />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.25em] text-crimson-2 uppercase">NOW STREAMING</span>
                </div>
                <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-bone">SEASON 01</span>
              </div>

              {/* Series Spec Info */}
              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-smoke">Lead Subject</p>
                  <p className="mt-0.5 font-display text-2xl tracking-wide text-bone">JASHANDEEP</p>
                  <p className="text-xs text-mist">Full-Stack Engineer · Next.js · TypeScript</p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-lg bg-ink-2/80 p-3 ring-1 ring-white/5">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-smoke">University</p>
                    <p className="mt-1 text-xs font-semibold text-bone">TIET Patiala</p>
                    <p className="text-[10px] text-mist">{education[0].period}</p>
                  </div>
                  <div className="rounded-lg bg-ink-2/80 p-3 ring-1 ring-white/5">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-smoke">Base</p>
                    <p className="mt-1 text-xs font-semibold text-bone">Khanna, Punjab</p>
                    <p className="text-[10px] text-mist">India</p>
                  </div>
                </div>

                {/* Featured Episodes snippet */}
                <div className="pt-2">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">Featured Originals</p>
                  <div className="space-y-1.5">
                    {projects.slice(0, 3).map((p, idx) => (
                      <div key={p.id} className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2 text-xs transition hover:bg-white/10">
                        <span className="font-medium text-bone">
                          <span className="mr-2 text-crimson-2 font-bold font-mono">0{idx + 1}</span>
                          {p.title}
                        </span>
                        <span className="text-[10px] text-smoke">{p.genre}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Chips */}
            {floating.map((f, i) => (
              <FloatChip key={f.text} {...f} index={i} mx={chipX} my={chipY} />
            ))}
          </motion.div>
        </div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 z-[3] h-32 bg-gradient-to-t from-ink to-transparent" />
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-[5] bg-ink" style={{ opacity: blackout }} />
    </section>
  );
}

type MV = ReturnType<typeof useTransform<number, number>>;

function FloatChip({ text, sub, pos, depth, index, mx, my }: { text: string; sub: string; pos: string; depth: number; index: number; mx: MV; my: MV }) {
  const x = useTransform(mx, (n: number) => n * depth);
  const y = useTransform(my, (n: number) => n * depth);
  return (
    <motion.div
      className={`glass absolute hidden rounded-xl px-4 py-2.5 md:block ${pos}`}
      style={{ x, y }}
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, delay: 1.2 + index * 0.18, ease: EASE }}
    >
      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}>
        <p className="text-sm font-semibold text-bone">{text}</p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-mist">{sub}</p>
      </motion.div>
    </motion.div>
  );
}
