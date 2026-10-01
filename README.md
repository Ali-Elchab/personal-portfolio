# Ali Elchab | Portfolio

Personal portfolio of Ali Elchab, Flutter mobile engineer. Live at https://alielchab.vercel.app

Built with Next.js 14 (App Router), Tailwind CSS and Vercel Analytics, hosted on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding or editing a project

1. Edit `app/data/projects.js`. Every project has a `slug`, `status`, `summary`, `overview`, `highlights`, `stack` and `links`.
2. Optional fields: `caseStudy` (`challenge`, `approach`), `metrics` (`[{ value, label }]`), `role`, `links.liveUrl`.
3. Put images in `public/images/projects/<slug>/`:
   - `cover.jpg` (or `.webp` / `.png`) for the card and detail header
   - `screen-1.webp`, `screen-2.webp`, ... for the screenshot gallery

Images are picked up automatically. No code change is needed.

## CV

Put the PDF at `public/Ali-Elchab-CV.pdf`. The site links to it automatically and falls back to the Google Drive copy while the file is missing.

## Share image

`app/opengraph-image.png` is the preview shown when the site is shared on LinkedIn, WhatsApp and similar.
