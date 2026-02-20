# Gatsby to Astro Migration Plan

**Created:** 2026-02-20
**Branch:** `astro-build` (empty, ready for fresh setup)
**Reference:** `master` branch (existing Gatsby site)
**Astro Version:** 5.x (latest stable)
**Package Manager:** bun

---

## Context

Migrate samuellawrentz.com from Gatsby 5 + React 18 to Astro 5. The site has ~28 blog posts (MDX), ~88 hacks (MDX across 5 categories: react, neovim, microfrontend, philosophy, software-philosophy), plus static pages (about, projects, legacy). Key preservation requirements: pixel-art heart CSS animation, all URLs, OG image generation via node-canvas, dark/light theming, Giscus comments.

The `astro-build` branch is empty. All work starts fresh there, referencing `master` for content and assets.

---

## Work Objectives

1. Fully functional Astro site with feature parity to the Gatsby version
2. All content pages migrated with identical URLs
3. Build-time OG image generation preserved
4. Updated/modernized home page design (heart CSS animation preserved)
5. Modern, clean codebase using Astro best practices (content collections, islands architecture)
6. Deploy to GitHub Pages via GitHub Actions

---

## Guardrails

### Must Have
- All existing URLs preserved exactly (`/blog/{slug}/`, `/hacks/{category}/{slug}/`, etc.)
- `trailingSlash: 'always'` in astro.config.mjs (Gatsby uses trailing slashes)
- Heart CSS animation (`heart.scss`) on home page - pixel-perfect preservation
- Dark/light theme toggle with localStorage persistence
- Content collections with TypeScript schemas using `image()` helper for heroImage
- RSS feed at `/rss.xml`, sitemap, robots.txt
- Giscus comments on blog posts
- OG images generated at build time using node-canvas
- Code syntax highlighting (Shiki/expressive-code, replacing deckdeckgo)
- Responsive design
- CNAME for samuellawrentz.com
- GitHub Actions deploy to gh-pages

### Must NOT Have
- No client-side React router (use Astro's file-based routing)
- No GraphQL layer
- No unnecessary React islands (Astro components where possible, React only for Giscus, theme toggle, session timer)
- No ShareThis dependency (replace with simple share links or remove)
- No gatsby-image - use Astro's built-in image optimization
- No avataaars dependency (replace with static image or CSS avatar)

---

## Pre-Migration Audit (Before Phase 1)

**0. MDX Component Audit**
- Grep all MDX files for custom components: `<deckdeckgo`, `<Banner`, `<MDXProvider`, `<mdx-embed`, any JSX imports
- Create compatibility mapping: which components need Astro equivalents
- Identify any MDX files using `<deckdeckgo-highlight-code>` inline tags (vs fenced code blocks)
- **Output:** List of custom components used + migration strategy for each

---

## Phase 1: Project Scaffolding and Core Infrastructure

**Goal:** Empty Astro project with routing, layout, theming, and styling foundation.

### Tasks

1. **Initialize Astro project on `astro-build` branch**
   - Run `bun create astro@latest` with TypeScript strict mode
   - Install integrations: `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/react`
   - Install `sass` for SCSS support, `@astrojs/rss` for RSS
   - Configure `astro.config.mjs`:
     - `site: 'https://samuellawrentz.com'`
     - `trailingSlash: 'always'` (CRITICAL - matches Gatsby URL format)
     - MDX integration
     - Sitemap integration
     - React integration
     - Shiki syntax highlighting config
   - **Acceptance:** `bun run dev` starts without errors, TypeScript compiles clean

2. **Port global styles and theming**
   - Copy from master: `variables.scss`, `typography.scss`, `responsive.scss`, `style.scss`
   - Copy `heart.scss` exactly as-is (pixel-art heart animation)
   - Set up IBM Plex Sans font loading (CDN or `@fontsource/ibm-plex-sans`)
   - Material Icons Round font loading
   - Implement `color-mode` attribute on `<html>` with localStorage persistence
   - Inline theme-init script in `<head>` to prevent flash of wrong theme
   - **Acceptance:** Dark/light toggle works, CSS variables switch correctly, heart animation renders

3. **Create base layout (`src/layouts/BaseLayout.astro`)**
   - Header: logo image, site name, back navigation, dark/light toggle icon, RSS link
   - Footer component (as Astro component)
   - Session timer as React island (`client:load`) - must use `sessionStorage` for time persistence since Astro is MPA (no persistent layout like Gatsby's `gatsby-plugin-layout`)
   - Meta tags, favicon
   - GTM script (note: legacy UA-122999794-1 is sunset, keep GTM only: GTM-MKMH3FD)
   - SEO head component (title, description, og:image, twitter:card)
   - **Acceptance:** Layout renders on all pages, toggle/timer functional

---

## Phase 2: Content Collections and Content Migration

**Goal:** All MDX content files migrated and rendering with correct URLs.

### CRITICAL: Routing Strategy (Astro 5 Specific)

Astro 5 uses `glob` loader for content collections and `post.id` (not `post.slug`) for routing. Directory names often DON'T match the URL slug (e.g., directory `computed-state/` but URL path is `/hacks/react/how-to-use-computed-state-in-react/`). Content files are named `post.mdx`/`hack.mdx`.

**Solution:** Add a `slug` field to each MDX file's frontmatter (derived from existing `path` field) during migration. Astro 5 supports `slug` in frontmatter to override auto-generated IDs. In `getStaticPaths()`, use `entry.data.path` (or the slug override) to generate route params. Use `const { Content } = await render(entry)` for rendering.

**Content config pattern (Astro 5):**
```ts
// src/content.config.ts
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    path: z.string(),
    tags: z.array(z.string()),
    description: z.string().optional(),
    heroImage: image().optional(),
    published: z.boolean().optional(),
    type: z.string().default("blog"),
  }),
});
```

**Route pattern:**
```astro
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => {
    const slug = post.data.path.replace(/^\/blog\//, '').replace(/\/$/, '');
    return { params: { slug }, props: { post } };
  });
}
const { post } = Astro.props;
const { Content } = await render(post);
```

### Tasks

4. **Define content collections with Zod schemas**
   - `src/content/blog/` schema:
     - title (string), date (date), published (boolean), tags (string[]), path (string)
     - description (string), heroImage (image() helper), type (string, default "blog")
   - `src/content/hacks/` schema:
     - title (string), path (string), description (string), type (literal "hack")
     - category (string), tags (string[]), heroImage (image(), optional)
   - Content migration steps:
     - Copy `master:blog/*/post.mdx` → `src/content/blog/*/index.mdx` (rename files)
     - Copy `master:blog/*/` assets (images) alongside
     - Copy `master:hacks/{category}/*/hack.mdx` → `src/content/hacks/{category}/*/index.mdx`
     - **Rename** `hacks/software philosophy/` → `hacks/software-philosophy/` (fix space in dirname)
     - Adjust any frontmatter image paths if needed for Astro's `image()` helper
   - **Acceptance:** `astro build` parses all MDX files without errors, schemas validate

5. **Create dynamic route pages using frontmatter.path**
   - `src/pages/blog/index.astro` - blog listing, all published posts sorted by date DESC
   - `src/pages/blog/[...slug].astro` - individual blog post
     - `getStaticPaths()`: iterate blog collection, extract slug from `frontmatter.path` (strip `/blog/` prefix), return as params
   - `src/pages/hacks/index.astro` - hacks hub with category links
   - `src/pages/hacks/[...slug].astro` - handles both category listings AND individual hacks
     - `getStaticPaths()`: iterate hacks collection, extract slug from `frontmatter.path` (strip `/hacks/` prefix)
     - Also generate category index pages: react, neovim, microfrontend, philosophy, software-philosophy
   - **Acceptance:** ALL content pages accessible at their original URLs, zero 404s

6. **Create blog post and hack templates (as Astro components)**
   - Blog template: hero image (Astro `<Image>`), title, tags, date, MDX content, related posts, Giscus (React island with `client:visible`), simple share links
   - Hack template: title, tags, MDX content, related hacks, share links
   - Code highlighting: Shiki configured in `astro.config.mjs` (theme matching current site's dark aesthetic)
   - OG meta tags: use placeholder path `/og-images/{sanitized-path}.png` (actual generation in Phase 4)
   - **Acceptance:** Content renders with styling, code blocks highlighted, comments load

---

## Phase 3: Static Pages and Components

**Goal:** All non-content pages and interactive components working.

### Tasks

7. **Create static pages**
   - `src/pages/index.astro` - **Updated/modernized home page**:
     - Hero section with heart CSS animation + 3D card tilt (PRESERVED)
     - Refreshed layout/typography for the intro section
     - Latest 4 blogs as cards
     - Hack links section
     - Projects grid
     - "We can be friends" / social links section
   - `src/pages/about-me/journey/index.astro` - Journey page with images
   - `src/pages/about-me/coding-activity/index.astro` - Coding activity page
   - `src/pages/projects/pasttenser/index.astro` - PastTenser project page
   - `src/pages/projects/quotes-generator/index.astro` - Quotes generator page
   - `src/pages/404.astro` - Custom 404 page
   - `src/pages/legacy/old-home-page.astro` - Legacy page
   - Copy all images from `master:src/images/` and page-local assets
   - **Acceptance:** All routes render correctly, heart animation works on home, images display

8. **Port interactive components as React islands**
   - Giscus comments wrapper (`client:visible`)
   - Theme toggle button (`client:load`)
   - Session timer with circular progress (`client:load`, persist elapsed time in `sessionStorage`)
   - 3D card tilt effect: vanilla JS in Astro `<script>` tag (no React needed)
   - **Acceptance:** Theme persists across navigation, comments load, timer counts, tilt works

---

## Phase 4: OG Images, Feed, and Build Pipeline

**Goal:** OG image generation, RSS feed, and deployment pipeline.

### Tasks

9. **Integrate OG image generation**
   - Port `canvas_new.js` and `canvas.js` from master as build scripts
   - Two code paths in existing generator:
     - Posts with `header.png`: composite hero image + gradient overlay + title text + logo
     - Posts without `header.png`: fallback simpler generator (`gen()` from `canvas.js`)
   - Create `scripts/generate-og-images.ts` as a postbuild script:
     - Read content collection entries (import from built manifest or parse frontmatter directly)
     - Resolve hero image paths from content directories (not Gatsby's `absolutePath`)
     - Generate 1200x630 PNG → `public/og-images/{sanitized-path}.png` (public/ so they're served as-is, no WebP conversion - social crawlers need stable PNG URLs)
   - Run as `"prebuild"` script (so images are in public/ before Astro copies them to dist/)
   - Add to package.json: `"prebuild": "node scripts/generate-og-images.js"`
   - Install `canvas` npm package
   - **Acceptance:** `bun run build` generates OG images for all published posts, meta tags reference correct paths

10. **RSS feed, sitemap, robots.txt, and deployment**
    - RSS: `src/pages/rss.xml.ts` using `@astrojs/rss`, published blog posts only (not hacks - matching Gatsby behavior)
    - Sitemap: via `@astrojs/sitemap` integration
    - `public/robots.txt`
    - `public/CNAME` with `samuellawrentz.com`
    - Static assets: copy `static/favicon.ico`, `static/ogimage.png`, resume PDF to `public/`
    - GitHub Actions workflow (`.github/workflows/deploy.yml`):
      - Trigger on push to `astro-build`
      - Install native deps for canvas: `sudo apt-get install -y libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev build-essential`
      - Setup bun, install deps, `bun run build`
      - Deploy `dist/` to gh-pages branch
    - **Acceptance:** RSS validates, sitemap accessible, CNAME present, CI deploys successfully

---

## Phase 5: Polish and Verification

**Goal:** Visual parity (with modernized home), performance, and final QA.

### Tasks

11. **Visual QA and responsive testing**
    - Compare all pages against live Gatsby site for visual parity
    - Verify home page modernization looks good + heart animation works
    - Test dark/light mode on all page types
    - Verify responsive breakpoints (mobile, tablet, desktop)
    - Verify all internal links (no broken links)
    - Verify all images load
    - Test code highlighting in blog posts and hacks
    - **Acceptance:** No unintended visual regressions, responsive works, zero broken links

12. **Performance and SEO audit**
    - Run Lighthouse on home, blog listing, and a blog post
    - Verify meta tags (title, description, og:image, twitter:card) on all page types
    - Verify canonical URLs
    - Ensure minimal JS bundle (Astro islands only)
    - **Acceptance:** Lighthouse performance >= 90, all meta tags correct

---

## Success Criteria

- [ ] All page types render correctly (home, blog list, blog post, hacks hub, hack category, hack post, about pages, projects, 404, legacy)
- [ ] All MDX content pages accessible at original URLs (trailing slashes preserved)
- [ ] Heart CSS animation preserved on home page
- [ ] Home page modernized/refreshed
- [ ] Dark/light theme toggle with localStorage persistence
- [ ] Giscus comments on blog posts
- [ ] OG images generated for all published posts
- [ ] RSS feed valid at `/rss.xml`
- [ ] Sitemap and robots.txt present
- [ ] Code syntax highlighting works
- [ ] GitHub Actions deploys to GitHub Pages
- [ ] Lighthouse performance >= 90
- [ ] CNAME for samuellawrentz.com preserved

---

## Technical Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Astro version | 5.x (latest stable) | Latest features, content collections improvements |
| Package manager | bun | Matches existing CI workflow |
| URL routing | `frontmatter.path` in getStaticPaths() + `slug` frontmatter override | Directory names don't match URL slugs; Astro 5 supports slug override in frontmatter |
| Content collections | Astro 5 `glob` loader + `content.config.ts` | New API: `glob({ pattern, base })`, `render()` from `astro:content`, `post.id` not `post.slug` |
| Trailing slashes | `trailingSlash: 'always'` | Matches Gatsby URL format, prevents broken links |
| Syntax highlighting | Shiki (Astro built-in) | Zero-JS, theme-aware, replaces deckdeckgo |
| Social sharing | Simple share links or remove | Removes ShareThis dependency bloat |
| Avatar | Drop `avataaars` | Replace with static image or CSS |
| Image optimization | Astro `<Image>` + `image()` schema helper | Built-in, auto-converts to WebP with lazy loading. Only for `src/` images; `public/` images served as-is |
| OG images location | `public/og-images/` (not `src/`) | Must be served as PNG for social crawlers - no WebP conversion, no hashed filenames |
| Blog hero images | `src/content/blog/` alongside MDX | Processed via `image()` schema helper → auto WebP optimization |
| Interactive components | React islands with `client:` directives | Minimal JS: Giscus, toggle, timer only |
| Session timer | sessionStorage for persistence | Astro MPA = no persistent layout, timer resets on nav without storage |
| OG images | Postbuild script with node-canvas | Decoupled from Astro internals, port existing canvas_new.js + canvas.js |
| Analytics | GTM only (GTM-MKMH3FD) | Legacy UA property is sunset |

---

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| MDX files use custom components (deckdeckgo, Banner, mdx-embed) | Build failures | Pre-migration audit (Task 0) identifies all custom components |
| `software philosophy/` directory has space | Broken paths | Rename to `software-philosophy/` during copy |
| heroImage paths differ between Gatsby GraphQL and Astro | Schema validation errors | Use `image()` Zod helper, test with first few files before bulk copy |
| node-canvas native deps in CI | CI build failure | Explicit apt-get install in GitHub Actions |
| Session timer resets on navigation | UX regression | Use sessionStorage to persist elapsed time |

---

## Consensus Review Notes

**Architect review:** Identified critical slug routing issue (frontmatter.path != directory names), missing trailingSlash config, software philosophy space, MDX audit need. All addressed above.

**Critic review:** Approved with advisories. Confirmed canvas_new.js exists on master (canvas devDependency in package.json). Flagged home page modernization scope - addressed by making it explicit in Task 7.
