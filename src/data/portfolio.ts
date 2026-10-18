/**
 * Central portfolio data for Jashandeep (Jashan) — The Series.
 * Every fact, project, metric, and timeline milestone on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  id: 'jashan',
  fullName: 'Jashandeep',
  displayName: 'Jashandeep',
  firstName: 'JASHAN',
  seriesTag: 'THE SERIES',
  /** Studio card shown at the start of the opening sequence */
  originalLabel: 'A JASHAN ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'Next.js & React', 'Node.js & TypeScript'],
  intro:
    'Turning ideas into high-performance products. A B.Tech student at Thapar Institute of Engineering & Technology (TIET), Patiala, and full-stack developer based in Khanna, Punjab, building campus operating systems, responsive web applications, and scalable digital platforms.',
  location: 'Khanna, Punjab, India',
  college: 'Thapar Institute of Engineering & Technology (TIET), Patiala',
  email: 'jashandeepsingh@example.com',
  formspreeEndpoint: 'https://formspree.io/f/mvkzyqey',
  links: {
    linkedin: 'https://linkedin.com/',
    github: 'https://github.com/jasshaannn',
    instagram: 'https://www.instagram.com/jasshaannn?igsi=ZThiOWxsejdhd3dp&utm_source=qr',
    thaparInstagram: 'https://www.instagram.com/tietofficial/',
  },
  resumePdf: '/assets/Jashandeep_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Jashandeep',
  },
  interests: ['System Architecture', 'Distributed Systems', 'UI/UX Engineering', 'Real-Time Applications'],
};

export const education = [
  {
    school: 'Thapar Institute of Engineering & Technology (TIET)',
    place: 'Patiala, Punjab',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    period: '2026 – Present',
    score: 'B.Tech (2nd Year)',
    instagram: 'https://www.instagram.com/tietofficial/',
    instagramHandle: '@tietofficial',
  },
  {
    school: 'Senior Secondary School',
    place: 'Khanna, Punjab',
    degree: 'Secondary & Senior Secondary (Non-Medical) • JEE Foundation',
    period: '2021 – 2024',
    score: 'Analytical Rigor',
  },
];

export const experience = [
  {
    company: 'Campus & Open Source Platforms',
    role: 'Lead Full-Stack Developer & Creator',
    place: 'Khanna & Patiala, Punjab',
    period: '2026 – Present',
    points: [
      'Architected and deployed campus-scale applications including UniFold (University Resource Hub), handling academic repositories, timetable schedules, and student communities.',
      'Built and optimized real-time timetable routing engines for college campuses (TIET Timetable & GNE Timetable) with responsive mobile-first UI.',
      'Engineered custom web solutions and portals including Erudition Institute results portal and SSA Virsa official student association platform.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'unifold-resource-hub',
    title: 'UniFold: Campus OS',
    year: '2026',
    genre: 'Full-Stack • Campus OS • SQLite',
    logline: 'A modern campus operating system connecting students with academic study materials, schedules, and college societies.',
    stack: ['React 19', 'Vite', 'Express', 'SQLite', 'Tailwind CSS', 'Multer'],
    build: [
      'Engineered a complete Campus Operating System integrating 467+ verified lecture notes, PPT decks, and question papers across 23 university subjects with instant preview and download.',
      'Implemented a lightweight SQLite and Express backend with Multer file pipeline, accelerating resource discovery and eliminating backend latency for hundreds of active students.',
    ],
    features: [
      '467+ lecture notes & papers indexed across 23 subjects',
      'Google Drive cloud stream integration with instant preview',
      'Campus timetable, societies & events directory',
      'Express & SQLite backend with lightning-fast querying',
    ],
    metrics: [
      { value: '467+', label: 'academic resources indexed' },
      { value: '23', label: 'university subjects supported' },
      { value: '100%', label: 'open student access' },
      { value: '<50ms', label: 'search & query latency' },
    ],
    github: 'https://github.com/jasshaannn/univeristy-resource-hub',
    live: 'https://uniifold-frontend-mu.vercel.app',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'virsa-website',
    title: 'SSA Virsa 2.0',
    year: '2026',
    genre: 'Next.js 14 • TypeScript • Design',
    logline: 'The official digital portal for the Sikh Students Association Virsa, delivering immersive cultural and campus events.',
    stack: ['Next.js 14', 'TypeScript', 'React', 'Tailwind CSS', 'Vercel'],
    build: [
      'Developed high-performance Next.js and TypeScript platform for SSA Virsa with server-side rendering, smooth interactive animations, and responsive mobile layouts.',
      'Streamlined event announcements and media archives, reducing page load times by 55% across all client devices.',
    ],
    features: [
      'Next.js SSR & App Router architecture',
      'Interactive cultural showcase & photo archives',
      'Dynamic event schedule and community registration',
      'Optimized image pipeline deployed on Vercel Edge',
    ],
    metrics: [
      { value: '99+', label: 'Lighthouse performance score' },
      { value: '55%', label: 'faster page load time' },
      { value: '100%', label: 'responsive mobile design' },
      { value: 'Edge', label: 'zero-downtime Vercel deploy' },
    ],
    github: 'https://github.com/jasshaannn/VirsaWebsite-26-27',
    live: 'https://virsawebsite2-0-two.vercel.app',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'erudition-portal',
    title: 'Erudition Portal',
    year: '2026',
    genre: 'Web Platform • Education • UI/UX',
    logline: 'Official institute website and student results portal with instant verification and streamlined admissions in Khanna, Punjab.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    build: [
      'Built the official web portal for Erudition Institute of Global Education featuring instant student result lookup, course catalog, and digital admissions.',
      'Crafted an accessible, SEO-optimized user experience resulting in thousands of student and parent session visits.',
    ],
    features: [
      'Instant student examination result verification',
      'Global education course catalog & syllabus breakdown',
      'Admissions inquiry form with automated dispatch',
      'Responsive mobile layout and CDN caching',
    ],
    metrics: [
      { value: '1,000+', label: 'student queries handled' },
      { value: '100%', label: 'uptime on Vercel' },
      { value: 'Instant', label: 'result lookup turnaround' },
      { value: 'SEO', label: 'optimized institution reach' },
    ],
    github: 'https://github.com/jasshaannn/erudition',
    live: 'https://erudition-pink.vercel.app',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'campus-timetable',
    title: 'Smart Timetable',
    year: '2025',
    genre: 'Frontend • Real-Time • Mobile First',
    logline: 'Real-time interactive timetable scheduler tailored for TIET Patiala & GNE engineering college batches.',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    build: [
      'Created an interactive timetable dashboard serving students across college branches with rapid schedule switching, lecture alerts, and period trackers.',
      'Dedicated implementations tailored for Thapar Institute of Engineering & Technology (TIET) and GNE students.',
    ],
    features: [
      'Instant batch and semester filtering',
      'Mobile-friendly pocket schedule UI',
      'Fast client-side cache and offline readiness',
      'Dual campus implementations for TIET Patiala and GNE',
    ],
    metrics: [
      { value: '100%', label: 'client-side speed' },
      { value: 'Zero', label: 'cold-start delay' },
      { value: 'TIET', label: 'Patiala batch schedules' },
      { value: 'Mobile', label: 'first pocket layout' },
    ],
    github: 'https://github.com/jasshaannn/Tiet-timetable',
    live: 'https://gne-timetable.vercel.app',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'thapar-cse',
    title: 'TIET Patiala',
    org: 'Thapar Institute of Engineering & Technology',
    detail: 'Pursuing B.Tech Computer Science & Engineering (2026 – Present) at Thapar Institute, Patiala.',
    laurel: 'Engineering',
    link: 'https://www.instagram.com/tietofficial/',
  },
  {
    id: 'unifold-reach',
    title: 'Campus OS Impact',
    org: 'UniFold Platform',
    detail: 'Indexed 467+ academic resources across 23 subjects, serving college students with instant downloads and search.',
    laurel: 'Campus Scale',
    link: 'https://uniifold-frontend-mu.vercel.app',
  },
  {
    id: 'virsa-portal',
    title: 'SSA Virsa 2.0',
    org: 'Sikh Students Association',
    detail: 'Spearheaded the official Next.js 14 and TypeScript digital home for SSA Virsa with Edge deployment on Vercel.',
    laurel: 'Official Platform',
    link: 'https://virsawebsite2-0-two.vercel.app',
  },
  {
    id: 'erudition-launch',
    title: 'Institutional System',
    org: 'Erudition Institute (Khanna)',
    detail: 'Engineered student examination result verification portal and admissions inquiry pipeline handling live traffic.',
    laurel: 'Production System',
    link: 'https://erudition-pink.vercel.app',
  },
  {
    id: 'github-presence',
    title: '11+ Repositories',
    org: 'GitHub Open Source',
    detail: 'Actively maintained public repositories across TypeScript, React, Next.js, Node.js, and Python on github.com/jasshaannn.',
    laurel: 'Open Source',
    link: 'https://github.com/jasshaannn',
  },
  {
    id: 'jee-foundation',
    title: 'Problem Solving Rigor',
    org: 'JEE Preparation Grind',
    detail: 'Two years of intense mathematical and algorithmic foundation building and disciplined engineering mindset.',
    laurel: 'Analytical Rigor',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Next.js', name: 'Production Next.js 14 & Edge Deployment', link: 'https://github.com/jasshaannn/VirsaWebsite-26-27' },
  { issuer: 'React', name: 'Modern React 19 & Component Architecture', link: 'https://github.com/jasshaannn/univeristy-resource-hub' },
  { issuer: 'TypeScript', name: 'Typed Web Development & Scalable Tooling', link: 'https://github.com/jasshaannn' },
  { issuer: 'Node.js', name: 'Server-Side Engineering & Express APIs', link: 'https://github.com/jasshaannn' },
  { issuer: 'Database', name: 'Relational Schema Design & SQLite Integration', link: 'https://github.com/jasshaannn/univeristy-resource-hub' },
  { issuer: 'Git', name: 'Version Control & Open Source Collaboration', link: 'https://github.com/jasshaannn' },
  { issuer: 'Web Platform', name: 'Responsive UI Design & Tailwind CSS Mastery', link: 'https://github.com/jasshaannn' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'TypeScript & JavaScript are primary',
    skills: [
      { name: 'TypeScript', mono: 'Ts', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'High-performance interactive interfaces',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx', note: 'App Router' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Vite', mono: 'Vt' },
      { name: 'D3.js', mono: 'D3' },
      { name: 'Responsive UI', mono: 'Ui' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server logic, APIs & data pipelines',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Multer', mono: 'Mu' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Storage, schemas & file indexing',
    skills: [
      { name: 'SQLite', mono: 'Sl' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'File Storage', mono: 'Fs' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Shipping, version control & edge deploy',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Vercel Edge', mono: 'Vc' },
      { name: 'npm', mono: 'Np' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'VS Code', mono: 'Vs' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The engineering foundation',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'Problem Solving', mono: 'Ps' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OS Concepts', mono: 'Os' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Active frontiers in the series',
    skills: [
      { name: 'System Architecture', mono: 'Sa' },
      { name: 'Distributed Systems', mono: 'Ds' },
      { name: 'UI/UX Engineering', mono: 'Ux' },
      { name: 'Real-Time Applications', mono: 'Rt' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  TypeScript: ['SSA Virsa 2.0', 'VirsaWebsite-26-27', 'jashan-journey'],
  JavaScript: ['UniFold Campus OS', 'Erudition Portal', 'TIET Timetable'],
  React: ['UniFold Campus OS', 'SSA Virsa 2.0', 'StudySync'],
  'Next.js': ['SSA Virsa 2.0', 'jashan-journey'],
  'Tailwind CSS': ['UniFold Campus OS', 'SSA Virsa 2.0', 'Jashandeep Portfolio'],
  'Node.js': ['UniFold Backend', 'StudySync', 'Portfolio API'],
  'Express.js': ['UniFold Backend', 'Portfolio Contact Server'],
  SQLite: ['UniFold Campus OS (better-sqlite3)'],
  'REST APIs': ['UniFold API', 'Portfolio Contact Service'],
  'Git / GitHub': ['11+ Public Repositories on github.com/jasshaannn'],
  'Vercel Edge': ['UniFold', 'SSA Virsa 2.0', 'Erudition', 'Timetable'],
  HTML5: ['Erudition Portal', 'GNE Timetable', 'TIET Timetable'],
  CSS3: ['Deep Dark Pixel Theme', 'Erudition Portal'],
  Python: ['Problem Solving & Scripting'],
  C: ['CS Fundamentals & Systems'],
  'C++': ['DSA Problem Solving'],
  DSA: ['JEE Rigor & Algorithmic Problem Solving'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Awakening',
    period: '2006 – 2023',
    synopsis: 'Early foundations in Khanna, Punjab — innate curiosity to explore, build, and understand the digital landscape.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Awakening',
        description: 'Born with an innate drive to dismantle curiosity into knowledge, build real tools, and explore digital systems.',
        tags: ['The Beginning', 'Curiosity', 'Digital Roots'],
        runtime: '2006 – 2023',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: '10th Completed',
        description: 'Finished secondary schooling in Khanna, Punjab with academic distinction, transitioning into focused scientific exploration.',
        tags: ['Academics', 'Foundations', 'Khanna'],
        runtime: '2023',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'The JEE Grind',
    period: '2023 – 2024',
    synopsis: 'Two years of intense JEE preparation — forging deep analytical discipline, problem solving, and endurance.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Analytical Crucible',
        description: 'Completed two years of intensive engineering entrance preparation, strengthening problem-solving stamina and core mathematical fundamentals.',
        tags: ['JEE Grind', 'Problem Solving', 'Discipline'],
        runtime: '2023 – 2024',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Enter TIET Patiala & Code',
    period: '2024 – 2026',
    synopsis: 'B.Tech Computer Science at Thapar Institute of Engineering & Technology (TIET), Patiala — transitioning into full-stack web platforms.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'TIET Patiala Engineering',
        description: 'Stepping into Computer Science and Engineering at Thapar Institute (TIET), Patiala, building real-world software and modern web architectures.',
        tags: ['TIET Patiala', 'B.Tech CSE', 'Engineering'],
        runtime: '2024 – 2026',
        palette: violet,
      },
      {
        code: 'S03 E02',
        title: 'Campus Timetables',
        description: 'Designed and deployed interactive pocket schedule timetables tailored for TIET Patiala and engineering students.',
        tags: ['TIET Timetable', 'GNE Timetable', 'Vercel'],
        runtime: '2025',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2026 – Present',
    synopsis: 'B.Tech Second Year at Thapar Institute (TIET) — architecting UniFold Campus OS, launching SSA Virsa 2.0, and shipping institutional portals.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'UniFold: The Campus OS',
        description: 'Engineered a modern campus operating system with 467+ academic resources across 23 subjects, backed by SQLite and Express.',
        tags: ['UniFold', 'React 19', 'SQLite', 'Campus OS'],
        runtime: '2026 – Present',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'SSA Virsa 2.0 & Erudition',
        description: 'Built high-performance Next.js 14 platform for SSA Virsa and the official student results portal for Erudition Institute in Khanna.',
        tags: ['Next.js 14', 'TypeScript', 'Erudition Khanna', 'Virsa'],
        runtime: '2026 – Present',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: '11+ Open Source Repositories',
        description: 'Maintained 11+ public codebases on GitHub spanning campus portals, productivity apps, and full-stack solutions.',
        tags: ['GitHub', 'Open Source', '11 Repos'],
        runtime: '2026 – Present',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: '2026 – Present',
    synopsis: 'Continuing to build on foundational computer science at TIET Patiala while unpacking scalable systems and high-performance products.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'High-Performance Products',
        description: 'Pushing into distributed architecture, scalable cloud services, real-time sync, and ambitious production systems.',
        tags: ['System Architecture', 'Distributed Systems', 'Cloud'],
        runtime: '2026 – Present',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'College', title: 'TIET Patiala', detail: 'Thapar Institute of Engineering & Technology • @tietofficial', palette: violet },
  { label: 'Primary language', title: 'TypeScript', detail: 'Primary driver across Next.js & React platforms', palette: amber },
  { label: 'Flagship Campus OS', title: 'UniFold', detail: '467+ academic resources across 23 subjects', palette: ocean },
  { label: 'Production portal', title: 'SSA Virsa 2.0', detail: 'Next.js 14 SSR & App Router on Vercel', palette: amber },
  { label: 'Institutional system', title: 'Erudition Portal', detail: 'Instant student results & admissions in Khanna', palette: crimson },
  { label: 'Campus scheduler', title: 'TIET Timetable', detail: 'Interactive schedule engine for college batches', palette: jade },
  { label: 'Location & Roots', title: 'Khanna, Punjab', detail: 'Based in Khanna, studying in Patiala', palette: crimson },
  { label: 'Analytical foundation', title: 'The JEE Grind', detail: 'Two years of intense problem-solving discipline', palette: violet },
  { label: 'Backend architecture', title: 'Node & Express', detail: 'REST APIs with SQLite & Multer file streaming', palette: ocean },
  { label: 'Current chapter', title: '2026 – Present', detail: 'Turning ambitious ideas into scalable products', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · TIET Patiala',
    lines: [
      'Thapar Institute of Engineering & Technology, Patiala',
      '2026 – Present · Second Year',
      'Location: Khanna, Punjab',
    ],
    chips: ['TIET Patiala', 'Khanna, Punjab', 'B.Tech CSE', '2026 – Present'],
  },
  {
    kicker: 'Core Stack',
    title: 'TypeScript & JavaScript first.',
    lines: ['React, Next.js, Node.js, Express.js · Tailwind CSS', 'SQLite, REST APIs, Multer · Git, GitHub, Vercel'],
    chips: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind', 'SQLite'],
  },
  {
    kicker: 'Campus Flagship',
    title: 'UniFold: Campus OS',
    lines: [
      'A complete campus operating system for university students',
      '467+ verified notes and solved papers across 23 subjects',
      'Lightweight SQLite backend with sub-50ms search latency',
    ],
  },
  {
    kicker: 'Production Portals',
    title: 'Virsa 2.0 & Erudition',
    lines: [
      'SSA Virsa 2.0 — Next.js 14 SSR portal deployed on Vercel Edge',
      'Erudition Institute (Khanna) — Online result verification & admissions',
      'TIET & GNE Timetables — Real-time batch schedulers',
    ],
  },
  {
    kicker: 'Milestones',
    title: 'The Problem Solver',
    lines: ['Two years of intense JEE preparation grind', '11+ active public repositories on GitHub', 'Real student and campus user impact'],
  },
  {
    kicker: 'Current status',
    title: '2026 – Present: Building Products',
    lines: ['Building scalable web systems · High-performance applications · Distributed architecture'],
  },
];

export type ProfileId = 'jashan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'jashan',
    name: 'Jashan',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, projects & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • TIET Patiala & Khanna', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • 2026 – Present`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the series', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Milestones', meta: `${achievements.length} Moments • Production Systems`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
