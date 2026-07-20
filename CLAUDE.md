# Project: Samuel Lawrentz Personal Portfolio

Personal portfolio and blog site built with Astro 5.

## Writing Blog Posts

Before writing or editing any blog post, read **BOTH**:

1. This file (structure, routing, frontmatter, hero-image workflow).
2. **[`src/content/blog/.CLAUDE.md`](src/content/blog/.CLAUDE.md)** - the authoritative voice/style guide derived from all 30+ posts. It defines the conversational, self-deprecating voice, the 300-700 word target (900 hard max), banned AI-tell words (leverage, utilize, delve, "game changer", etc.), and the structure/punctuation rules.

Do not write from the top-level conventions alone - the voice guide is where posts actually pass or fail. (A stale `.cursor/rules/blog-creation-rule.mdc` also exists but contradicts the voice guide in places; prefer `blog/.CLAUDE.md`.)

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
bun run gen:image    # Generate a blog/figure image (packages/image-gen, needs GOOGLE_AI_API_KEY)
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
  generate-image.ts      # Wrapper around packages/image-gen for blog/figure art
  generate-og-images.cjs  # Node-canvas OG image generator (prebuild)
public/
  og-images/          # Generated OG images (PNG, not in src/ to avoid WebP conversion)
```

## Critical Conventions

- **Routing**: Uses `data.path` from frontmatter for URLs, NOT directory-derived slugs. Directory names often differ from URL paths.
- **Trailing slashes**: Always on (`trailingSlash: 'always'` in astro.config.mjs). All internal links must end with `/`.
- **Content frontmatter**: `path` field is the URL path (e.g., `/hacks/react/how-to-use-computed-state-in-react/`). Blog paths start with `/blog/`, hack paths with `/hacks/<category>/`.
- **Images**: Images in `src/` are auto-optimized to WebP. OG images go in `public/og-images/` to stay as PNG for social crawlers.
- **Hero image workflow**: Generate new blog art with `bun run gen:image "<prompt>" --output ./src/content/blog/<post-dir> --name header`. Keep prompts visual and explicitly ask for **no text** in the image.
- **Theme**: Dark/light mode via `color-mode` attribute on `<html>`. Inline script in `<head>` prevents flash. No forced default - respects stored/system preference. Pages render in either theme, so verify both.
- **IdeWindow shell + design tokens**: `src/components/IdeWindow.astro` is the shared "IDE window" shell (chrome dots, tabs, status bar) used by `blog/index`, `hacks/index`, `blog/tag/[tag]`. It ALSO defines the editor tokens (`--ide-text/-dim/-faint/-border`, `--syn-red/-cyan/-green/-amber`) and helper classes (`.t-green`, `.y-key`, `.j-punc`, etc.) in an `is:global` block - which only load on pages that render the component. A page NOT using IdeWindow must self-contain its own tokens. The **homepage (`src/pages/index.astro`) no longer uses IdeWindow** - it is a self-contained "minimal IDE" design (chromeless, own light/dark tokens mirroring the shell's palette). Restyling the homepage never touches the other pages, and vice-versa.
- **Global `h1` emboss**: `global.scss` sets `h1 { text-shadow: 2px 4px ... }` sitewide. For flat/minimal headings, override with `text-shadow: none` on the specific element.
- **OG images**: Generated at prebuild time via `scripts/generate-og-images.cjs` using node-canvas. Output to `public/og-images/`.
- **Sass deprecation**: `@import` warnings exist in global.scss - migrate to `@use` when updating styles.
- **Frontmatter titles**: Always use double quotes around `title:` values in frontmatter (colons break YAML parsing).
- **No em-dashes**: Do not use em-dashes (`---` or `—`) in blog content. Use regular dashes or rewrite the sentence.
