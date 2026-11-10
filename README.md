# Anugrah Prima Pratama — Portfolio

A one-page portfolio: about, projects, skills, and contact.

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Structure

- `lib/data.ts` holds all of the site's text and data: profile, projects, skills, and workflow.
- `app/page.tsx` assembles the page.
- `app/globals.css` holds every style. Theme colors live in the `:root` block at the top.
- `components/` holds the header, project showcases, skill explorer, and interaction effects.
- `public/` holds the profile photo, project screenshots, and the CV as a PDF.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Through Laragon on Windows

Laragon's Nginx proxies `http://portofolio.test` to the Next.js app on port 3000. Start Nginx in Laragon, then run this from the project folder:

```bash
npm run dev -- --hostname 127.0.0.1
```

Open [http://portofolio.test](http://portofolio.test). The proxy config lives in `C:\laragon\etc\nginx\sites-enabled\portofolio.test.conf`.

## Production build

```bash
npm run build
npm run start
```

The site deploys to Vercel automatically on every push to `main`.
