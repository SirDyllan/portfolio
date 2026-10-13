# Dyllan Mutsereketa — Portfolio

Personal portfolio of Dyllan Mutsereketa — software developer, graphic designer and IT Intern at Prevsol Digital.

## Stack

- **Next.js 16** (App Router, statically prerendered) + **React 19** + **TypeScript**
- **Tailwind CSS 4** — cream / ink-black / gold theme defined in `app/globals.css` (`@theme`)
- **Framer Motion** for scroll-reveal and spring animations
- **lucide-react** for icons

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Check types with `npm run typecheck` and build with `npm run build`.

## Editing content

Everything on the page lives in **`lib/data.ts`** — profile, quick facts, professional experience, projects, skills, certificates, milestones and database experience. Edit that file; the components update automatically.

### Adding photos

| What | Drop files into | Then list them in `lib/data.ts` |
|---|---|---|
| Project photos | `public/images/projects/<project>/` | the project's `gallery` array |
| Internship / job photos | `public/images/experience/<company>/` | the experience entry's `gallery` array |

An empty `gallery: []` shows "Photos coming soon"; once it has images a "View Gallery" button appears.

### Adding certificates

Put the image in `public/certificates/` and set `image: "/certificates/<file>"` on the matching entry in `certificates`. Entries without an `image` show as "Certificate pending". To add a brand-new certificate, add a new entry and (optionally) reference its `id` from a project's or experience entry's `certificateId`.

### Company logos

Logos live in `public/logos/` and are referenced from the `experience` entries.

## Contact form

The contact form opens the visitor's email app with their message pre-filled and addressed to the email in `profile.email` — no backend or API keys needed.

## Deploying

Push to GitHub and import the repo in Vercel (framework preset: Next.js). Netlify also works via `netlify.toml`.
