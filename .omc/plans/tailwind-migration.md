# Tailwind CSS v4 Migration Plan

**Date:** 2026-02-20 (revised)
**Branch:** astro-build
**Estimated Complexity:** MEDIUM-HIGH

## Context

The site uses SCSS with ~15 stylesheet files, CSS custom properties for theming (light/dark via `color-mode` attribute on `<html>`), and scoped `<style>` blocks in Astro components. Astro 5 uses **Tailwind v4**, which has a fundamentally different setup: CSS-based config (no `tailwind.config.mjs`), Vite plugin (not Astro integration), and `@theme` directives instead of JS config.

## Guardrails

### Must Have
- Zero visual regressions (every page must look identical before/after)
- CSS custom properties from `variables.scss` continue to work
- Dark/light mode toggle works via existing `color-mode` attribute mechanism
- Heart animation, fancy-href, gradient links, back-arrow, wave, tooltip all unchanged
- All responsive breakpoints preserved (custom 700px breakpoint)

### Must NOT Have
- No `@apply` abuse (only use for prose/typography where inline classes are impractical)
- No removal of complex animation SCSS
- No changes to HTML structure or component logic
- No Tailwind preflight conflicts with existing resets
- No `tailwind.config.mjs` file (Tailwind v4 uses CSS-based config)
- No `@astrojs/tailwind` integration (v4 uses Vite plugin directly)

---

## Phase 1: Install and Configure Tailwind v4

**Goal:** Tailwind v4 is installed as a Vite plugin, configured via CSS, and builds alongside existing SCSS with zero visual change.

### Tasks

1. **Install packages**
   ```bash
   bun add tailwindcss @tailwindcss/vite
   ```

2. **Add Tailwind as Vite plugin in `astro.config.mjs`**:
   ```js
   import tailwindcss from '@tailwindcss/vite';

   export default defineConfig({
     // ...existing config
     vite: {
       plugins: [tailwindcss()],
     },
   });
   ```
   Do NOT use `@astrojs/tailwind` -- that is for v3.

3. **Create `src/styles/tailwind.css`** with CSS-based config:
   ```css
   @layer theme, base, components, utilities;
   @import "tailwindcss/theme.css" layer(theme);
   @import "tailwindcss/utilities.css" layer(utilities);

   @theme {
     /* Surface colors (auto-switch via CSS custom properties, no dark: needed) */
     --color-surface1: var(--surface1);
     --color-surface2: var(--surface2);
     --color-surface3: var(--surface3);

     /* Element colors */
     --color-element1: var(--element1);
     --color-element2: var(--element2);
     --color-element3: var(--element3);
     --color-element4: var(--element4);
     --color-element-inverse: var(--elementInverse);

     /* Semantic colors */
     --color-primary: var(--primary-color);
     --color-secondary: var(--secondary-color);
     --color-tertiary: var(--tertiary);
     --color-danger: var(--danger);
     --color-info: var(--info);
     --color-card-shadow: var(--card-shadow-color);
     --color-text-shadow1: var(--text-shadow-color1);

     /* Font sizes (referencing CSS custom properties) */
     --font-size-h1: var(--h1);
     --font-size-h2: var(--h2);
     --font-size-h3: var(--h3);
     --font-size-h4: var(--h4);
     --font-size-h5: var(--h5);
     --font-size-h6: var(--h6);
     --font-size-body: var(--body);
     --font-size-caption: var(--caption);

     /* Custom breakpoint matching existing 700px */
     --breakpoint-mobile: 700px;
   }

   /* Dark mode variant matching existing color-mode attribute */
   @custom-variant dark (&:where([color-mode="dark"], [color-mode="dark"] *));
   ```

   **Key decisions:**
   - Imports only theme and utilities layers (omits preflight import entirely, avoiding conflicts with existing resets)
   - Custom `--breakpoint-mobile: 700px` matches existing SCSS `max-width: 700px`
   - All colors reference CSS custom properties, so they auto-switch with theme. No `dark:` prefix needed for color-based properties.
   - `dark:` variants are ONLY needed for non-variable properties (e.g., `filter`, `mix-blend-mode`, `display: none`)

   **Breakpoint prefix warning:** The custom breakpoint generates both `mobile:` (min-width: 700px) and `max-mobile:` (max-width: 700px) prefixes. Do NOT use `mobile:` -- only use `max-mobile:` for this site's responsive logic, since all existing SCSS uses `max-width: 700px` media queries.

4. **Import `tailwind.css` in `BaseLayout.astro`** (before `global.scss`):
   ```astro
   import '../styles/tailwind.css';
   ```

5. **Verify build** -- `bun run build` succeeds, site looks identical.

### Acceptance Criteria
- `bun run dev` starts without errors
- Tailwind utility classes (e.g., `class="text-red-500"`) render correctly when added to any template
- Existing SCSS styles are completely unaffected
- Dark/light mode toggle still works
- **Verify pages:** Home, any blog post, any hack page

### Files Modified
- `package.json` (new deps)
- `astro.config.mjs` (add Vite plugin)
- `src/styles/tailwind.css` (new file)
- `src/layouts/BaseLayout.astro` (import tailwind.css)

---

## Phase 2: Delete Unused SCSS and Consolidate Animation Styles

**Goal:** Remove dead code (including orphaned component SCSS files), merge remaining animation SCSS into one file.

### Tasks

1. **Delete unused SCSS files:**
   - `src/styles/components/circular-progress.scss`
   - `src/styles/components/sheet.scss`
   - `src/styles/components/topbar.scss`
   - `src/styles/components/input.scss`

2. **Delete orphaned component SCSS files** (these are NOT imported anywhere in the codebase -- they are dead code):
   - `src/styles/components/banner.scss`
   - `src/styles/components/button.scss`
   - `src/styles/components/footer.scss`

   **Verification step before deleting:** Grep for `.banner`, `.button`, `.footer` class usage in `.astro` files to confirm these styles are not active. If any classes ARE used in templates, the styles come from scoped `<style>` blocks in the components themselves, not from these orphaned SCSS files.

3. **Delete dead rules from remaining files:**
   - Remove `.gatsby-resp-image-image` from `blog.scss` (if not already in a deleted file)
   - Remove `deckgo-highlight-code` rules from `blog.scss` (lines 6-10)
   - Remove `.gatsby-image-wrapper` references from `global.scss` (lines 222-224, 260-263) and `responsive.scss` (lines 102-106)

4. **Create `src/styles/animations.scss`** -- consolidate all complex animation/pseudo-element rules that will NOT be migrated to Tailwind:
   - From `global.scss`: `.fancy-href` + `@keyframes gradientAnimation` (lines 140-163)
   - From `global.scss`: `a.gradient` + `@keyframes animation` (lines 303-336)
   - From `global.scss`: `.back-arrow` + `@keyframes arrowNormal/arrowHover` (lines 555-635)
   - From `global.scss`: `.tooltip` system (lines 575-620)
   - From `global.scss`: `.wave` + `.wave .end` (lines 484-502)
   - From `global.scss`: `.section__title::after` pseudo-element (lines 122-130)
   - From `global.scss`: `.timeline .year:after` + `.timeline-holder:after` pseudo-elements (lines 368-396)
   - From `global.scss`: `.card.featured:before` (lines 423-433)
   - Keep `heart.scss` as-is (already isolated)

5. **Update `global.scss` imports** to remove deleted files and add `animations.scss`.

6. **Verify build and visuals.**

### Acceptance Criteria
- `bun run build` succeeds with no missing import errors
- All animations (heart, fancy-href, gradient links, back-arrow, wave, tooltips) still render correctly
- No unused SCSS files remain
- Zero `.gatsby-*` references in any SCSS file
- **Verify pages:** Home (heart, wave, gradient links), any blog post (back-arrow), journey page (timeline)

### Files Modified
- Delete: `circular-progress.scss`, `sheet.scss`, `topbar.scss`, `input.scss`, `banner.scss`, `button.scss`, `footer.scss`
- Edit: `global.scss` (remove dead rules, extract animation rules)
- Edit: `blog.scss` (remove deckgo rule)
- Edit: `responsive.scss` (remove gatsby references)
- New: `src/styles/animations.scss`

---

## Phase 3: Migrate Typography and Blog Prose Styles

**Goal:** Replace `typography.scss` and `blog.scss` with Tailwind equivalents.

### Tasks

1. **Install typography plugin:**
   ```bash
   bun add @tailwindcss/typography@next
   ```
   Add to `tailwind.css`:
   ```css
   @plugin "@tailwindcss/typography";
   ```

2. **Migrate `typography.scss` classes** -- replace each class with inline Tailwind utilities:

   | SCSS Class | Properties | Tailwind Equivalent |
   |---|---|---|
   | `.text-regularLight` | `font-weight: 100; font-size: var(--h4)` | `font-thin text-h4` |
   | `.text-title2` | `font-weight: 600; line-height: 1.3; font-size: var(--h4)` | `font-semibold leading-[1.3] text-h4` |
   | `.text-regular` | `font-size: inherit` | `text-[inherit]` (or remove class entirely) |
   | `.text-caption` | `font-size: var(--caption); font-weight: 100; letter-spacing: 0.5px` | `font-thin text-caption tracking-[0.5px]` |
   | `.text-subtext` | `font-size: var(--h6)` | `text-h6` |

   The `h5` rule (`margin-bottom: 0.5rem; & + p { margin-top: 0.5rem }`) should remain in global CSS (adjacent sibling selectors are not expressible inline).

   Update all files that use these classes: `BaseLayout.astro`, `index.astro`, `blog/[...slug].astro`, `hacks/[...slug].astro`, `journey/index.astro`, `pasttenser/index.astro`, `quotes-generator/index.astro`.

3. **Migrate `blog.scss` prose styles** -- configure `@tailwindcss/typography` and add `prose` class to content wrappers in `blog/[...slug].astro` and `hacks/[...slug].astro`:

   | SCSS Rule | Tailwind Prose Equivalent |
   |---|---|
   | `.blog-content a { color: var(--tertiary) }` | `prose-a:text-tertiary` |
   | `.blog-content h1 { font-size: 3rem }` | `prose-h1:text-[3rem]` |
   | `.blog-content h2 { margin-top: 60px; font-size: 2rem; margin-bottom: 10px }` | `prose-h2:mt-[60px] prose-h2:text-[2rem] prose-h2:mb-[10px]` |
   | `.blog-content h3 { margin-bottom: 10px; font-size: 1.5rem; opacity: 0.8 }` | `prose-h3:mb-[10px] prose-h3:text-[1.5rem] prose-h3:opacity-80` |
   | `.blog-content h4 { margin-bottom: 20px }` | `prose-h4:mb-[20px]` |
   | `.blog-content li { margin-bottom: 10px }` | `prose-li:mb-[10px]` |
   | `code { bg: var(--element4); color: var(--element1); padding; border-radius }` | `prose-code:bg-element4 prose-code:text-element1 prose-code:px-1 prose-code:rounded` |
   | `blockquote { border-left: 5px solid var(--primary-color); padding-left: 40px }` | `prose-blockquote:border-l-[5px] prose-blockquote:border-primary prose-blockquote:pl-10 prose-blockquote:ml-0` |
   | `.hero-image { border-radius: 15px; height: 450px }` | `rounded-[15px] h-[450px]` |
   | `h2 + p { margin-top: 10px }` | **Cannot be a prose utility.** Keep in a minimal scoped `<style>` block in the blog template. |
   | `h3 + * { margin-top: 16px }` | **Cannot be a prose utility.** Keep in a minimal scoped `<style>` block in the blog template. |

   The `.blog-content p + div.text-regularLight` compound selector should stay as a small scoped `<style>` block if needed (complex adjacent sibling + class combo).

4. **Delete `typography.scss` and `blog.scss`**, remove their imports from `global.scss`.

### Acceptance Criteria
- All text styles render identically (check: home page, blog post, hack page, about/journey, project pages)
- Blog prose (headings, code blocks, blockquotes, links, lists) matches current design
- Adjacent sibling rules (`h2 + p`, `h3 + *`) preserved in scoped `<style>` in blog template
- `typography.scss` and `blog.scss` are deleted with zero references remaining
- `bun run build` succeeds
- **Verify pages:** Home, 2 blog posts (one with code blocks, one with blockquotes), 1 hack page

### Files Modified
- Delete: `typography.scss`, `blog.scss`
- Edit: `global.scss` (remove imports)
- Edit: `tailwind.css` (add typography plugin)
- Edit: `package.json` (add `@tailwindcss/typography@next`)
- Edit: `BaseLayout.astro`, `index.astro`, `blog/[...slug].astro`, `hacks/[...slug].astro`, `journey/index.astro`, `pasttenser/index.astro`, `quotes-generator/index.astro`

---

## Phase 4: Migrate Global Layout, Cards, Components, and Responsive Styles

**Goal:** Replace remaining simple SCSS rules in `global.scss`, scoped `<style>` blocks, and `responsive.scss` with Tailwind utilities.

### Tasks

1. **Migrate `global.scss` layout rules** to inline Tailwind classes:

   | SCSS Rule | Tailwind Equivalent |
   |---|---|
   | `body { margin: 0; color: var(--element1); bg: var(--surface1); font-size: var(--body); line-height: 1.6 }` | Keep as global reset (body styles are not inline-able) |
   | `main, .logo { width: min(900px, 95vw); margin: auto }` | `w-[min(900px,95vw)] mx-auto` |
   | `.logo { padding: 20px 0 40px; cursor: pointer }` | `py-[20px] pb-[40px] cursor-pointer` |
   | `.logo svg { width: clamp(230px, 20vw, 320px) }` | `w-[clamp(230px,20vw,320px)]` |
   | `h1 { font-size: var(--h1); text-shadow: ...; line-height: 1.2 }` | Keep as global heading rule (text-shadow not a utility) |
   | `h2 { font-size: var(--h2); line-height: 1.3; margin-top: -10px; margin-bottom: 20px }` | Keep as global heading rule |
   | `.subtext` | `text-element2` |
   | `.container { display: flex }` | `flex` |
   | `.container .intro { flex: 1 1 70% }` | `flex-[1_1_70%]` |
   | `.container .image { flex: 1 0 30%; display: flex; justify-content: center; align-items: center; position: relative; top: -60px; zoom: 1.3 }` | `flex-[1_0_30%] flex justify-center items-center relative -top-[60px] [zoom:1.3]` |
   | `.section { margin: 90px 0; position: relative }` | `my-[90px] relative last:mb-0` |
   | `.section__title { mb: 30px; font-size: var(--h1); uppercase; font-weight: 100 }` | `mb-[30px] text-h1 uppercase font-thin` (::after stays in animations.scss) |
   | `.section__title__new { text-align: center }` | `text-center` + `after:content-none` |
   | `.cards { grid cols repeat(auto-fit, minmax(220px, 1fr)); gap: 16px }` | `grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] auto-rows-fr gap-4` |
   | `.cards .card { bg: var(--surface2); shadow; flex col; rounded-lg; p-4; transition; cursor-pointer }` | `bg-surface2 shadow-[2px_7px_14px_rgb(0_0_0/20%)] flex flex-col rounded-lg p-4 transition-transform duration-200 origin-left cursor-pointer h-full` |
   | `.cards .card__description { margin-top: auto }` | `mt-auto` |
   | `.blogs { flex col }` | `flex flex-col` |
   | `.blogs .card { flex; gap-4; cursor-pointer }` | `flex gap-4 cursor-pointer` |
   | `.blogs .card h3 { margin: 12px 0 }` | `my-3` |
   | `.blogs .card__home { p-0; gap-0 }` | `p-0 gap-0` |
   | `.blogs .card__details { overflow-hidden; p-4; pb-5; flex-1 }` | `overflow-hidden p-4 pb-5 flex-1` |
   | `.blogs .card.bordered:not(.read-more) { shadow; border-2 border-element1; overflow-hidden; relative }` | `shadow-[12px_12px_0px_var(--card-shadow-color)] border-2 border-element1 overflow-hidden relative` |
   | `.list-item { flex; gap-6; py-6 px-3; justify-between; border-b border-element3; cursor-pointer }` | `flex gap-6 py-6 px-3 justify-between border-b border-element3 cursor-pointer` |
   | `.tags { flex; gap-2; mt-1; overflow-x-auto }` | `flex gap-2 mt-1 overflow-x-auto` |
   | `.tag { nowrap; max-w-[160px]; truncate; px-3; border border-element3; rounded-full; text-h6; text-element3 }` | `whitespace-nowrap max-w-[160px] truncate px-3 border border-element3 rounded-full text-h6 text-element3` |
   | `.date-tag { mt-2; justify-between; overflow-hidden }` | `mt-2 justify-between overflow-hidden` |
   | `.time { sticky; bottom-[10px]; p-4; text-h3; font-thin }` | `sticky bottom-[10px] p-4 text-h3 font-thin` |
   | `.timer { opacity-0; cursor-default; transition-opacity duration-500 }` | `opacity-0 cursor-default transition-opacity duration-500` |
   | `.timer.visible` | `opacity-100` (toggled via JS) |
   | `.card-container { bg-surface2; rounded }` | `bg-surface2 rounded` |
   | `.hide-icon { overflow-hidden; w-0 }` | `overflow-hidden w-0` |
   | `.coding-activity { gap-6 }` | `gap-6` |
   | `.coding-activity figure { flex-[0_0_50%]; rounded-lg; m-0 mx-auto; overflow-hidden; w-[clamp(200px,100%,750px)]; hue-rotate-[122deg] brightness-100 }` | `flex-[0_0_50%] rounded-lg mx-auto overflow-hidden w-[clamp(200px,100%,750px)] [filter:hue-rotate(122deg)_brightness(1)]` |
   | `.column-image { mx-[-10vw]; columns-2 }` | `mx-[-10vw] columns-2` |
   | `::selection { bg: var(--primary-color) }` | Keep as global CSS |
   | `a { color: inherit; text-underline-offset: 2px }` | Keep as global CSS |
   | `img { max-width: 100%; height: auto }` | Keep as global CSS |
   | `li { margin-bottom: 12px }` | Keep as global CSS |

   **Color-mode overrides (global.scss lines 532-645):**
   - `[color-mode="light"] .blogs .card.read-more .card__image { filter: none; mix-blend-mode: darken }` -> use `dark:` only for the dark-specific `filter: invert(1); mix-blend-mode: lighten` on `.read-more .card__image`. The light version is the default.
   - `[color-mode="light"] .dark-calendar { display: none }` / `[color-mode="dark"] .light-calendar { display: none }` -> `hidden dark:block` / `block dark:hidden`
   - `[color-mode="light"] a.gradient:hover` -> keep in animations.scss (complex gradient override)
   - `[color-mode="dark"] input` color override -> keep in minimal global CSS

2. **Migrate scoped `<style>` in `index.astro`** -> inline Tailwind:
   - `.btn { inline-flex items-center justify-center py-2.5 px-6 border-none rounded cursor-pointer font-[inherit] text-body transition-all duration-200 }`
   - `.btn--secondary { bg-transparent border-2 border-element1 text-element1 w-[200px] hover:bg-element1 hover:text-surface1 }`
   - `.social-link { text-caption no-underline py-1 border-b border-element3 hover:border-element1 }`
   - `.card__image img { w-full h-full object-cover }`

3. **Migrate `responsive.scss`** -- convert `max-width: 700px` media queries to Tailwind responsive prefixes.

   **Breakpoint strategy:** SCSS uses `max-width: 700px` (styles applied below 700px). Tailwind v4 supports `max-mobile:` with our custom `--breakpoint-mobile: 700px`. The logic inverts: SCSS says "at mobile, do X" while Tailwind says "below mobile breakpoint, do X" using `max-mobile:`.

   **Complete responsive mappings:**

   | SCSS (at max-width: 700px) | Tailwind Equivalent | Notes |
   |---|---|---|
   | `.show-mobile { display: none }` (default) + `display: block !important` at mobile | `hidden max-mobile:block` | |
   | `.subscribe-container { flex-wrap: wrap }` | `max-mobile:flex-wrap` | **Possibly dead rule** -- verify `.subscribe-container` exists in templates |
   | `.subscribe-container .input-block, .input-wrapper, input { width: 100% }` | `max-mobile:w-full` on each child | **Possibly dead rule** -- verify with `.subscribe-container` |
   | `.blogs, .blog-page-title { margin: 0 !important; margin-bottom: 32px !important }` | `max-mobile:!m-0 max-mobile:!mb-8` | |
   | `.blogs a { flex-grow: 1 !important }` | `max-mobile:grow` | |
   | `.blogs a .card:not(.read-more) { min-height: 230px }` | `max-mobile:min-h-[230px]` | |
   | `.section .blogs .card__home { padding: 12px; margin-bottom: 24px; border-radius: 8px }` | `max-mobile:p-3 max-mobile:mb-6 max-mobile:rounded-lg` | |
   | `.section .blogs .card__home .card__image { border-radius: 8px 8px 0 0; overflow: hidden }` | `max-mobile:rounded-t-lg max-mobile:rounded-b-none max-mobile:overflow-hidden` | |
   | `.section .blogs .card__home .card__date { margin-top: 12px }` | `max-mobile:mt-3` | |
   | `.card.read-more { background-color: transparent !important; margin-top: 20px !important; box-shadow: none !important }` | `max-mobile:!bg-transparent max-mobile:!mt-5 max-mobile:!shadow-none` | |
   | `.time { display: none !important }` | Default visible, `max-mobile:!hidden` | |
   | `.wave { display: none }` | Default visible, `max-mobile:hidden` | |
   | `.container:not(.increase-specificity) { flex-wrap: wrap-reverse }` | `max-mobile:flex-wrap-reverse` | |
   | `.container:not(.increase-specificity) .intro { flex: 1 1 100% }` | `max-mobile:flex-[1_1_100%]` | |
   | `.container:not(.increase-specificity) .image { height: 200px; justify-content: start; left: calc(50% - 70px); flex: 0 0 100px }` | **Keep as scoped CSS** -- complex `calc()` positioning with `left: calc(50% - 70px)` is awkward in Tailwind; use `max-mobile:h-[200px] max-mobile:justify-start max-mobile:left-[calc(50%-70px)] max-mobile:flex-[0_0_100px]` or keep as scoped style | |
   | `main { overflow-x: hidden }` | `max-mobile:overflow-x-hidden` | |
   | `.friends-title { text-align: center }` | `max-mobile:text-center` | **Possibly dead rule** -- verify `.friends-title` exists in templates |
   | `.friends-title:after { content: none !important }` | `max-mobile:after:!content-none` | **Possibly dead rule** -- verify with `.friends-title` |
   | `.blog-content .content { width: auto !important }` | `max-mobile:!w-auto` | |
   | `.container.quotes-page:not(.increase-specificity) { flex-wrap: wrap }` | `max-mobile:flex-wrap` (on quotes page container) | |
   | `.topbar .topbar-text a { text-decoration: underline; pointer-events: all }` | `max-mobile:underline max-mobile:pointer-events-auto` | **Possibly dead rule** -- verify `.topbar` exists in templates (topbar.scss was deleted in Phase 2) |
   | `.topbar .button-cont { display: none }` | `max-mobile:hidden` | **Possibly dead rule** -- same as above |
   | `.section .blogs .card { display: block; box-shadow: ...; background-color: var(--surface2) }` | `max-mobile:block max-mobile:shadow-[2px_7px_14px_rgb(0_0_0/20%)] max-mobile:bg-surface2` | |
   | `.parent { display: flex; flex-direction: column }` | `max-mobile:flex max-mobile:flex-col` | |
   | `.div0 .card__image { height: auto }` | `max-mobile:h-auto` | **Possibly dead rule** -- verify `.div0` exists in templates |
   | `.div0 .card__image .gatsby-image-wrapper { transform: none }` | Delete (Gatsby reference) | |
   | `body .hcard { position: absolute; width: 140px; height: 140px; right: -35px; top: 85px }` | `max-mobile:absolute max-mobile:w-[140px] max-mobile:h-[140px] max-mobile:-right-[35px] max-mobile:top-[85px]` | |
   | `.home-blog a:nth-child(5n) { grid-column: auto }` | `max-mobile:[&:nth-child(5n)]:col-auto` | |

   **Verification needed for potentially dead rules:** Before migrating, grep for `.subscribe-container`, `.topbar`, `.div0`, `.friends-title` in `.astro` files. If not found, skip those rules entirely (they are dead code from the Gatsby era).

4. **Delete `responsive.scss`** and remove its import from `global.scss`.

### Acceptance Criteria
- All pages render identically at all breakpoints (mobile at 700px, desktop)
- Dark/light mode works everywhere
- Card hover effects, transitions preserved
- `bun run build` succeeds
- All deleted SCSS files have zero remaining references
- Potentially dead responsive rules (`.subscribe-container`, `.topbar`, `.div0`, `.friends-title`) verified and either migrated or removed
- **Verify pages:** Home (cards, hero, wave), blog listing (bordered cards), blog post, hack page, journey (timeline), about-me/coding-activity, projects (PastTenser, Quotes Generator), 404 page
- **Verify at widths:** 375px (mobile), 700px (breakpoint), 1200px (desktop)

### Files Modified
- Delete: `responsive.scss`
- Edit: `global.scss` (now contains only: font imports, variables import, heart import, animations import, body/html resets, heading base styles, `::selection`, `a` defaults, `img` defaults, `li` default, `h5 + p` rule)
- Edit: Nearly all `.astro` template files (adding Tailwind classes)

---

## Phase 5: Final Cleanup and Verification

**Goal:** Slim down remaining SCSS, migrate `@import` to `@use`, verify everything.

### Tasks

1. **Slim down `global.scss`** to only:
   - `@use 'variables'` (migrated from `@import`)
   - `@use 'heart'` (migrated from `@import`)
   - `@use 'animations'` (migrated from `@import`)
   - Google Font `@import url(...)` statements (these must stay as `@import` -- CSS spec)
   - Minimal base styles: `html` box-sizing + font-family, `body` reset, `img` reset, heading font-sizes (h1-h4 with text-shadow), `a` defaults, `::selection`, `li` margin, `h5 + p` adjacency rule

2. **Verify Sass variable usage before `@use` migration:** Before migrating `@import` to `@use`, check that `heart.scss` and `animations.scss` only use CSS custom properties (not Sass variables like `$var`). If they DO use Sass variables, add `@use 'variables' as *` at the top of each file so the variables are available under `@use` semantics.

3. **Migrate all SCSS `@import` to `@use`** in `global.scss` and any remaining SCSS files to eliminate Sass deprecation warnings.

4. **Evaluate converting `heart.scss` and `animations.scss` to plain CSS** -- if they use no Sass features (variables, nesting, mixins), rename to `.css`. If nesting is used, keep as SCSS (Astro compiles both).

5. **Full visual regression check** -- verify every page:
   - Home page (heart animation, cards, blog list, hack categories, wave, gradient links)
   - Blog listing and individual blog post (prose, code blocks, images, blockquotes, back-arrow)
   - Hacks hub and individual hack pages
   - About me / journey / coding-activity (timeline, calendar light/dark toggle)
   - Projects (PastTenser, Quotes Generator)
   - 404 page
   - Dark mode on ALL above pages
   - Mobile responsive (375px) on ALL above pages
   - Breakpoint boundary (700px) on key pages

6. **Run build** -- `bun run build` succeeds with no warnings about missing classes or broken imports.

### Acceptance Criteria
- `bun run build` succeeds cleanly
- Only `variables.scss` (or `.css`), `heart.scss`, and `animations.scss` remain in `src/styles/` alongside `tailwind.css` and `global.scss`
- `global.scss` is minimal (< 30 lines of imports + base rules)
- Zero Sass `@import` deprecation warnings (all migrated to `@use`)
- Every page matches pre-migration appearance at desktop, 700px, and mobile widths
- Dark/light toggle works on every page
- No unused CSS class references in any template file
- No `.gatsby-*` references anywhere in the codebase

### Files Modified
- `global.scss` (final slim version with `@use`)
- Possibly rename `heart.scss` -> `heart.css`, `animations.scss` -> `animations.css`
- `package.json` (possibly remove `sass` if all SCSS converted to CSS)

---

## Success Criteria

1. Site builds and deploys without errors
2. Zero visual regressions across all pages and breakpoints
3. Dark/light mode fully functional via CSS custom properties (NOT Tailwind `dark:` for colors)
4. `dark:` variants used ONLY for non-variable properties (filters, blend modes, display toggles)
5. SCSS footprint reduced to ~3-4 files (variables, heart, animations, minimal global) from ~15
6. All simple layout/typography/responsive styles expressed as Tailwind utilities
7. No `@apply` usage except in prose/typography plugin config
8. Custom 700px breakpoint preserved via `--breakpoint-mobile` in `@theme`
9. Zero `.gatsby-*` references in the codebase
10. Zero Sass `@import` deprecation warnings
