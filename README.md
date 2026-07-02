# Dyllan Mutsereketa — Portfolio

A Next.js 14 (App Router) + React + TypeScript + Tailwind CSS rebuild of the portfolio, ready to push to GitHub and deploy on Vercel.

## Stack

- **Next.js 14** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS** for styling — cream / ink-black / gold design system
- **Framer Motion** for the bubbly buttons, scroll-reveal animations, and the animated scroll-progress bar
- **lucide-react** for icons

## Design & liveliness features

- Cream, black and gold palette with alternating light/dark section bands for rhythm
- Bold Archivo display type + Inter body type
- Animated scroll-progress bar at the very top of the page
- Scroll-based active-state highlighting in the nav
- Auto-scrolling skills marquee between the hero and About
- Scroll-reveal + stagger animations on every section (Framer Motion `whileInView`)
- Spring-animated "bubbly" buttons and a spring-animated certificate lightbox
- Drifting floating skill tags and soft animated gradient blobs behind the hero portrait

## Getting started locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy — replace the placeholder assets

The zip ships with placeholder SVG/DOCX files so the site runs out of the box. Swap in your real files at the **same paths** and everything (Download CV, profile photo, certificate viewers) keeps working automatically:

| Placeholder | Replace with | Used for |
|---|---|---|
| `public/images/dyllan-profile.svg` | Your real photo (`.jpg`/`.png`) — update the path in `lib/data.ts` → `profile.photo` | Hero portrait |
| `public/docs/dyllan-mutsereketa-cv.docx` | Your real CV (keep the same filename, or update `lib/data.ts` → `profile.cv`) | Download CV buttons |
| `public/certificates/ceshhar-mascot-hackathon.svg` | Your CeSHHAR MASCOT Hackathon certificate image (`.jpg`/`.png`/`.svg`) | "View Certificate" on CareNest + Certifications section |
| `public/certificates/usaii-global-hackathon.svg` | Your USAII Global Hackathon certificate image | "View Certificate" on ServiceBridge AI + Certifications section |

If you switch a file extension (e.g. `.svg` → `.jpg`), update the matching path in `lib/data.ts`.

## Editing content

All portfolio content (profile info, skills, projects, certificates, timeline, database experience) lives in one place: **`lib/data.ts`**. Edit that file to add projects, change copy, or update links — no need to touch the components.

## Contact form

`app/api/contact/route.ts` validates submissions but doesn't send email yet (no credentials were provided). To make it actually deliver messages, pick one:

- **Resend** — add `RESEND_API_KEY` in Vercel's Environment Variables, then call the Resend SDK inside the route.
- **Nodemailer/SMTP** — add SMTP credentials as env vars and send via `nodemailer` inside the route.
- **A database** — save submissions to Firestore/MySQL/etc. and check them from a dashboard.

See the `TODO` comment in that file and `.env.example` for the variable names it's expecting.

## Deploying to Vercel

1. Push this project to a new GitHub repository.
2. In Vercel, click **Add New → Project** and import the repo.
3. Framework preset: **Next.js** (auto-detected). No extra build settings needed.
4. Deploy. Vercel will give you a `*.vercel.app` URL, and you can attach a custom domain afterward.

```bash
git init
git add .
git commit -m "Initial commit: Next.js portfolio"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
