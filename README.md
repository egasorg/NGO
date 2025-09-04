# EGAS Website Starter

A minimal, free static site you can host on **GitHub Pages**.

## Quick start
1. Upload these files into your repo (root folder).
2. In **Settings → Pages**, set **Branch** to `main` and **Folder** to `root`.
3. Wait ~30s and open the URL GitHub shows (e.g. `https://USERNAME.github.io/REPO`).

## Customize
- Edit `index.html` text (About, Programs, Team, Contact).
- Replace `images/logo-placeholder.svg` with your real logo.
- Update social links and email (search for `hello@egas.org`).

## Custom domain (optional)
1. In **Settings → Pages**, add your domain (e.g. `egas.ly`).
2. In your domain DNS, create:
   - `A` records to GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (or) a `CNAME` from `www` to `USERNAME.github.io`
3. Add a file named `CNAME` at repo root with your domain inside (e.g. `egas.ly`).

## Notes
- The contact form uses `mailto:` (opens the visitor’s email app). For a real form, plug in a service like Formspree.
