# Colin McGinness - Composer Portfolio

## Overview
A premium cinematic portfolio website for composer Colin McGinness, built with Next.js 14 (App Router) and Tailwind CSS 3. Designed to be deployed on Vercel via GitHub.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment target**: Vercel (via GitHub)

## Project Structure
```
src/
  app/
    layout.tsx          - Root layout with Navbar + Footer, global metadata
    page.tsx            - Homepage (hero, credits, showreels, album covers, tv syncs, syncs, films, awards, about, CTA)
    globals.css         - Global styles + Tailwind directives
    showreels/
      page.tsx          - Showreels page with embedded YouTube videos
    film/
      page.tsx          - Feature film scores with real poster images + gallery
    awards/
      page.tsx          - Awards & Recognition (wins, nominations, festival selections)
    about/
      page.tsx          - Biography, stats, broadcasters list
    contact/
      page.tsx          - Contact form (UI only, no backend)
      layout.tsx        - Contact page metadata
  components/
    Navbar.tsx          - Fixed top nav with mobile hamburger menu
    Footer.tsx          - Site footer with nav links + social placeholders
    VideoCard.tsx       - Showreel card with play overlay + lightbox modal
    SyncCard.tsx        - Horizontal scroll sync placement card + lightbox
    FilmCard.tsx        - Film poster card with gallery lightbox (arrow nav)
    AlbumCoversRail.tsx - Horizontal scrolling album covers rail (shuffled client-side)
    TVSyncRail.tsx      - Horizontal scrolling TV sync poster rail (shuffled client-side)
    AwardCard.tsx       - Award card components (Small + Large variants, gold accent)
  data/
    albumCovers.ts      - 89 album cover entries with src/alt/title
    tvSyncs.ts          - 25 selected portrait TV sync images
    awards.ts           - Award entries (wins, nominations, selections)
    films.ts            - 7 film projects with poster/gallery/description
public/
  images/
    album-covers/       - 89 production music album cover images
    tv-syncs/           - 77 TV sync placement poster images (25 selected for display)
    awards/             - 9 award/festival recognition images
    films/              - 23 film-related images (posters, stills, premiere photos)
```

## Design System
- **Theme**: Dark cinematic (Netflix/Disney+ inspired)
- **Background**: Near-black (#0a0a0a)
- **Cards**: #141414 with #1f1f1f borders
- **Accent**: Muted cinematic red (#b91c1c)
- **Awards accent**: Gold (#d4a853)
- **Typography**: Inter font, white/soft grey text

## Pages (6)
1. **Home** (/) - Hero with YouTube showreel, credit strip, featured showreels, album covers rail, TV sync rail, video syncs rail, feature films grid, awards preview, about preview, contact CTA
2. **Showreels** (/showreels) - 4 embedded YouTube showreel videos
3. **Film** (/film) - Real poster grid with gallery lightbox for 7 film projects
4. **Awards** (/awards) - Featured wins, nominations, festival recognition with gold accent
5. **About** (/about) - Biography, stats, broadcaster tags
6. **Contact** (/contact) - Contact form (UI-only) with professional enquiries sidebar

## Running Locally
```bash
npm run dev    # Starts on port 5000
npm run build  # Production build
```

## Deployment
- Configured for Vercel deployment via GitHub
- `.eslintrc.json` included for Next.js build compatibility
- No `output: 'standalone'` (Vercel handles this)
- Set `NEXT_PUBLIC_SITE_URL` env var in Vercel for canonical URLs

## Image Assets
All real images extracted from uploaded ZIPs:
- Album covers: square format, used in horizontal scrolling rail
- TV syncs: portrait format posters, 25 selected from 77 available
- Awards: festival laurels, award photos, recognition graphics
- Films: movie posters, premiere photos, soundtrack covers grouped by project
