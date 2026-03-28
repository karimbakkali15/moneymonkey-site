# Meridian marketing site

Next.js landing page for **Meridian**, aligned with the iOS `DesignSystem`: **Newsreader** (display serif, like SF Serif / New York), **Nunito** (rounded UI, like SF Rounded), champagne gold highlights `#e0c78c` / `#c7a870`, and blue primary `#3373fa`.

## Production URL

**Production URL:** **`https://meridian-finance-site.vercel.app`**. Do **not** paste your `*.vercel.app` hostname into **Domains** as if it were a custom domain — Vercel already assigns it to this project.

**Other hostnames** you own (e.g. `meridian.financialadvisor`): add them under **Settings → Domains** on this project. `vercel.json` **301-redirects** those hosts to `https://meridian-finance-site.vercel.app` once verified.

Canonical URLs: `app/layout.tsx` (`siteUrl`) and iOS `MarketingSiteURL` use **`https://meridian-finance-site.vercel.app`**.

## Develop

```bash
npm install
npm run dev
```

## Production on Vercel

If **GitHub is already connected** to this project, every push to **`main`** creates a **Production** deployment automatically. Nothing else is required for “go live.”

1. [Vercel Dashboard](https://vercel.com/dashboard) → open the project linked to `karimbakkali15/moneymonkey-site`.
2. **Settings → Git**: confirm **Production Branch** is **`main`**.
3. **Deployments**: the top deployment for `main` should show the **Production** badge. Open it to copy the live URL.

**CLI (optional):** from this folder, after `npx vercel login`, run `npm run deploy:prod` to push the current tree to production without waiting for Git.

`vercel.json` pins the runtime to **`lhr1`** (London) for lower latency in the UK. Change `regions` if you prefer another edge.

Static legal pages: `public/privacy-policy.html`, `terms.html`, `support.html`.

## Assets

Replace `public/app-icon.png` and `public/screenshots/*` when the App Store icon and shots are final.
