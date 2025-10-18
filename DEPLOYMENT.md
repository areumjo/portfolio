# Deployment Instructions for GitHub Pages

This portfolio is built with Next.js and configured for static export to GitHub Pages.

## Build the Static Site

```bash
npm run build
```

This will generate a static site in the `out/` directory.

## Deploy to GitHub Pages

### Option 1: Deploy to `username.github.io` (Recommended)

1. Create a new repository named `areumjo.github.io` on GitHub
2. Navigate to the `out` directory:
   ```bash
   cd out
   ```
3. Initialize git and push:
   ```bash
   git init
   git add .
   git commit -m "Deploy portfolio"
   git branch -M main
   git remote add origin https://github.com/areumjo/areumjo.github.io.git
   git push -u origin main
   ```
4. Your site will be live at `https://areumjo.github.io`

### Option 2: Deploy to `username.github.io/portfolio`

1. Create a new repository named `portfolio` on GitHub
2. Update `next.config.ts` basePath to `/portfolio`:
   ```typescript
   basePath: '/portfolio',
   ```
3. Rebuild:
   ```bash
   npm run build
   ```
4. Navigate to the `out` directory and push:
   ```bash
   cd out
   git init
   git add .
   git commit -m "Deploy portfolio"
   git branch -M main
   git remote add origin https://github.com/areumjo/portfolio.git
   git push -u origin main
   ```
5. Go to GitHub repository Settings → Pages
6. Set Source to "Deploy from a branch"
7. Select `main` branch and `/` (root) folder
8. Your site will be live at `https://areumjo.github.io/portfolio`

## Automated Deployment with GitHub Actions (Optional)

You can set up automated deployment by creating `.github/workflows/deploy.yml` in your source repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Updating Content

1. Make changes to the source files in `src/`
2. Test locally with `npm run dev`
3. Build with `npm run build`
4. Deploy the `out/` directory to GitHub Pages

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Deployment:** GitHub Pages (static export)
