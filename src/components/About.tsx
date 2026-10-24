import { motion } from 'framer-motion';
import { education, profile } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function About() {
  const facts = [
    { k: 'College', v: 'TIET, Patiala', s: `${education[0].school} · ${education[0].period}` },
    { k: 'Degree', v: 'B.Tech, CSE', s: `${education[0].score}` },
    { k: 'Primary stack', v: 'TypeScript & React', s: 'with Next.js, Node.js, SQLite' },
    { k: 'Location', v: profile.location, s: 'Punjab, India' },
  ];

  return (
    <>
      <SectionHeading kicker="The Pilot" title="About Me" />
      <div className="gutter space-y-12">
        {/* Description quote & author bio */}
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE }}
        >
          <p className="font-serif text-[clamp(1.5rem,3.2vw,2.5rem)] italic leading-[1.25] text-bone">
            “{profile.intro}”
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-mist">
            <span className="font-semibold text-bone">— {profile.fullName}</span>
            <span className="h-1 w-1 rounded-full bg-smoke" />
            <span>B.Tech CSE @ TIET Patiala ({education[0].period})</span>
            <span className="h-1 w-1 rounded-full bg-smoke" />
            <span>Khanna, Punjab</span>
          </div>
        </motion.div>

        {/* Positioned inside UNDER description: Executive portrait card + credentials */}
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <motion.div
            className="mx-auto w-full max-w-md lg:max-w-none"
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            <Tilt max={5} className="rounded-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                <img
                  src="/assets/portrait-720.webp"
                  srcSet={profile.portrait.srcSet}
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  alt={profile.portrait.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/25 opacity-70" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/75 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.3em] text-crimson-2">STARRING</p>
                    <p className="font-display text-3xl leading-none text-bone">{profile.displayName}</p>
                    <p className="mt-1 text-xs text-mist">Lead Creator · S01–Present</p>
                  </div>
                  <span className="rounded border border-white/30 px-2 py-0.5 text-[11px] font-bold text-bone">S01–S05</span>
                </div>
              </div>
            </Tilt>
          </motion.div>

          <div className="space-y-8">
            <motion.dl
              className="grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.08 }}
            >
              {facts.map((f) => (
                <motion.div
                  key={f.k}
                  className="bg-ink-2 p-5"
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
                >
                  <dt className="text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">{f.k}</dt>
                  <dd className="mt-2 text-base font-semibold text-bone">{f.v}</dd>
                  <dd className="mt-0.5 text-xs text-mist">{f.s}</dd>
                </motion.div>
              ))}
            </motion.dl>

            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">Interests & Core Domains</p>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((i) => (
                  <span key={i} className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-bone">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
