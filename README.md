# JASHAN — THE SERIES

A cinematic, streaming-inspired portfolio clone for **Jashandeep**: Full-Stack Developer and B.Tech Student.
Every section is an episode, every project is an Original, and the whole site plays like a series.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Run it locally

Requires **Node.js 18+**.

```bash
cd jashan-portfolio-series
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, GitHub Pages or any static host.

## Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** It is the single source of truth for the entire series.

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub, Instagram | `profile` |
| Projects (UniFold, Virsa 2.0, Erudition, Timetables) | `projects` (Originals, modal, metrics, and links) |
| Achievements / Milestones | `achievements` |
| Skills & Tech Universe | `skillCategories`, `skillEvidence` |
| Seasons and episodes (My Journey) | `seasons` |
| Top 10 row | `topPicks` |
| ▶ Play Intro highlight reel | `introSlides` |
| Viewer Profiles (Jashan / Recruiter / Developer / Creative) | `viewerProfiles` |
| Opening studio card text | `profile.originalLabel` |

**Resume:** replace `public/assets/Jashandeep_Resume.pdf`.

**Photo:** replace `pic1.jpeg` (high-res photo) and `pic.png` (background-removed cutout), then run:

```bash
npm run images
```

This rebuilds the responsive WebP portraits and the social share image in `public/assets/`.

## What's inside

```
src/
  data/portfolio.ts        ← single source of truth (projects, journey, skills, bio)
  App.tsx                  ← stages: opening → profile select → home; overlays
  components/
    Hero.tsx               ← bold typography, parallax cutout portrait, interactive glow
    Originals.tsx          ← horizontal scrolling showcase of flagship projects
    Seasons.tsx            ← episodic timeline of education, milestones & grind
    TopPicks.tsx           ← top 10 rated highlights row
    Skills.tsx             ← interactive tech universe with cross-project evidence
    Achievements.tsx       ← awards, deployments & production systems
    ResumeViewer.tsx       ← designed screenplay resume sheet & PDF viewer
    OpeningSequence.tsx    ← cinematic title sequence with letterbox animations
    ProfileSelector.tsx    ← "Who's watching?" profile switcher (Jashan / Recruiter / Dev)
    PlayIntro.tsx          ← highlight reel modal
```
