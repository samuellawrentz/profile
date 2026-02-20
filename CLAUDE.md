# Project: Samuel Lawrentz Personal Portfolio

Personal portfolio and blog site built with Astro 5.

## Tech Stack

- **Framework**: Astro 5 with MDX
- **Styling**: SCSS (global.scss imports variables, heart, typography, responsive)
- **React Islands**: Giscus comments (`client:visible`), SessionTimer (`client:load`)
- **Package Manager**: bun
- **Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- **Domain**: samuellawrentz.com

## Key Commands

```bash
bun install          # Install dependencies
bun run dev          # Start dev server (localhost:4321)
bun run build        # Build (runs OG image generation first via prebuild)
bun run preview      # Preview production build
```

## Project Structure

```
src/
  content.config.ts   # Content collections: blog + hacks (glob loader, Zod schemas)
  content/
    blog/             # Blog posts (MDX with frontmatter)
    hacks/            # Hacks organized by category dirs (react/, neovim/, microfrontend/, philosophy/, software-philosophy/)
  pages/
    index.astro       # Home page (heart animation, blog cards, hack categories)
    blog/             # Blog listing + [...slug].astro dynamic routes
    hacks/            # Hacks hub + [...slug].astro (category listing + individual hack)
    about-me/         # Journey + coding-activity pages
    projects/         # PastTenser + Quotes Generator
    rss.xml.ts        # RSS feed
    404.astro
  layouts/
    BaseLayout.astro  # Main layout (header, footer, theme toggle, GTM, session timer)
  components/         # Banner, Footer, GiscusComments, SEO, SessionTimer, ThemeToggle
  styles/             # global.scss, variables.scss, heart.scss, typography.scss, responsive.scss
scripts/
  generate-og-images.cjs  # Node-canvas OG image generator (prebuild)
public/
  og-images/          # Generated OG images (PNG, not in src/ to avoid WebP conversion)
```

## Critical Conventions

- **Routing**: Uses `data.path` from frontmatter for URLs, NOT directory-derived slugs. Directory names often differ from URL paths.
- **Trailing slashes**: Always on (`trailingSlash: 'always'` in astro.config.mjs). All internal links must end with `/`.
- **Content frontmatter**: `path` field is the URL path (e.g., `/hacks/react/how-to-use-computed-state-in-react/`). Blog paths start with `/blog/`, hack paths with `/hacks/<category>/`.
- **Images**: Images in `src/` are auto-optimized to WebP. OG images go in `public/og-images/` to stay as PNG for social crawlers.
- **Theme**: Dark/light mode via `color-mode` attribute on `<html>`. Inline script in `<head>` prevents flash.
- **OG images**: Generated at prebuild time via `scripts/generate-og-images.cjs` using node-canvas. Output to `public/og-images/`.
- **Sass deprecation**: `@import` warnings exist in global.scss — migrate to `@use` when updating styles.
