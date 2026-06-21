# ISHC Foundation Website

A single-page React site for ISHC Foundation, built with Vite.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This creates a `dist/` folder with the final static site.

## Deploy on Vercel + connect ishcfoundation.com

1. **Push this project to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ishc-foundation.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in (GitHub login works)
   - Click **Add New Project**
   - Import the `ishc-foundation` repo
   - Leave all settings as default (Vercel auto-detects Vite) → click **Deploy**
   - You'll get a live URL like `ishc-foundation.vercel.app`

3. **Connect your domain**
   - In the Vercel project, go to **Settings → Domains**
   - Add `ishcfoundation.com` (and `www.ishcfoundation.com` if you want both)
   - Vercel will show you DNS records to add (an A record for the root domain, a CNAME for `www`)
   - Go to your domain registrar (wherever you bought ishcfoundation.com) → DNS settings → add those exact records
   - Wait for DNS to propagate (a few minutes to ~24 hours)

Once propagated, ishcfoundation.com will load this site directly.

## Updating content later

- All page content and translations live in `src/ISHCFoundation.jsx`
- The logo file is at `public/logo.jpeg` — replace it with a new file of the same name to update the logo everywhere on the site
- After making changes, just `git push` — Vercel automatically rebuilds and redeploys
