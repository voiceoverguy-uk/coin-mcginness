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
    layout.tsx       - Root layout with Navbar + Footer
    page.tsx         - Homepage (hero, credits, showreels, syncs, films, about, CTA)
    globals.css      - Global styles + Tailwind directives
    showreels/
      page.tsx       - Showreels page with embedded YouTube videos
    film/
      page.tsx       - Feature film scores grid with placeholder posters
    about/
      page.tsx       - Biography, stats, broadcasters list
    contact/
      page.tsx       - Contact form (UI only, no backend)
      layout.tsx     - Contact page metadata
  components/
    Navbar.tsx       - Fixed top nav with mobile hamburger menu
    Footer.tsx       - Site footer with nav links + social placeholders
    VideoCard.tsx    - Showreel card with play overlay + lightbox modal
    SyncCard.tsx     - Horizontal scroll sync placement card + lightbox
    FilmCard.tsx     - Film poster placeholder card
```

## Design System
- **Theme**: Dark cinematic (Netflix/Disney+ inspired)
- **Background**: Near-black (#0a0a0a)
- **Cards**: #141414 with #1f1f1f borders
- **Accent**: Muted cinematic red (#b91c1c)
- **Typography**: Inter font, white/soft grey text

## Running Locally
```bash
npm run dev    # Starts on port 5000
npm run build  # Production build
```

## Deployment
Configured for Vercel deployment. Push to GitHub and connect to Vercel for automatic deployments.

## Placeholder Content
All images use placeholder blocks ready to be swapped with real assets:
- Film posters, album covers, portrait photo
- YouTube thumbnails load automatically from video IDs
