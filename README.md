# Meridian marketing site

Next.js landing page for **Meridian**, aligned with the iOS `DesignSystem`: **Newsreader** (display serif, like SF Serif / New York), **Nunito** (rounded UI, like SF Rounded), champagne gold highlights `#e0c78c` / `#c7a870`, and blue primary `#3373fa`.

## Production URL (`meridian.vercel.app`)

Vercel’s default URL is `https://<project-name>.vercel.app`. To stop using `moneymonkey-site.vercel.app` and serve the site at **[https://meridian.vercel.app](https://meridian.vercel.app)**:

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → select this project.
2. **Settings** → **General** → **Project Name**.
3. Rename from `moneymonkey-site` to **`meridian`** (must be free on your team), then save.

The app and this repo assume **`https://meridian.vercel.app`** (see `app/layout.tsx` `metadataBase` and iOS `APIConfig.marketingSiteBaseURL`). If you use another host, set **`MarketingSiteURL`** in your app’s `Info.plist` (no trailing slash) and change `siteUrl` in `app/layout.tsx` to match.

You can also add a custom domain (e.g. `getmeridian.com`) under **Settings → Domains**; then update `siteUrl` / `MarketingSiteURL` to that domain.

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
