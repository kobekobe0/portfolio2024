# kobebriansantos.vercel.app

Personal portfolio of Kobe Brian Santos. Next.js (App Router), every page prerendered to static HTML.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build, should list every route as static
```

## Where the content lives

All content is data. Edit these three files and every page, the metadata, the structured data,
the sitemap and `/llms.txt` update together.

| File | What it holds |
| --- | --- |
| `lib/site.ts` | Name, role, employer, email, socials, work history, education, skills, quick answers |
| `lib/projects.ts` | Case studies and the "earlier projects" list |
| `lib/articles.tsx` | Essays |

To add a project, add an entry to `lib/projects.ts`. It gets its own page at `/work/<slug>`.
Entries with `published: false` are drafts and are not rendered anywhere.

When you change content, bump `lastUpdated` in `lib/site.ts`.

## SEO and GEO, and where each piece is

- Static HTML for every route, so crawlers that do not run JavaScript still read everything.
- Titles, descriptions, canonical URLs, Open Graph and Twitter cards: `app/layout.tsx` and each page's `metadata`.
- Structured data (schema.org JSON-LD): `lib/schema.ts` and the bottom of each page.
  Person and WebSite on every page, ProfilePage on home, CreativeWork and BreadcrumbList on case studies,
  FAQPage on About, BlogPosting on essays.
- `app/sitemap.ts` generates `/sitemap.xml`. `app/robots.ts` generates `/robots.txt` and allows AI crawlers by name.
- `app/llms.txt/route.ts` generates `/llms.txt`, a Markdown summary for AI assistants.
- `next.config.mjs` redirects the old URLs (`/projects`, `/experience`, `/articles`, `/article/1`, `/contact`).
- Social preview image: `app/opengraph-image.tsx`, rendered to a static PNG at build time.

## Deploying on Vercel

The previous version was Create React App. In the Vercel project, open Settings, then Build and Deployment,
and set Framework Preset to Next.js (leave the build and output overrides off). Then push.

After the first deploy:

1. Add the site to Google Search Console and submit `/sitemap.xml`.
2. Paste the verification code into `verification` in `app/layout.tsx` if you verify by meta tag.
3. If you move to a custom domain, change `url` in `lib/site.ts`. Everything canonical derives from it.
