# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run serve       # Local dev server at localhost:8080 (with live reload)
npm run build       # Production build (outputs to _site/)
npm run test:a11y   # Run accessibility tests (Playwright + Axe, WCAG 2.2)
npm run clean       # Remove _site/ directory
npm run deploy:dry  # Preview deployment (dry-run rsync)
npm run deploy:prod # Deploy to production (requires main branch + passes a11y)
npm run deploy:emergency  # Deploy skipping accessibility tests
```

Before running tests, Playwright browsers must be installed: `npx playwright install chromium`

Deployment requires a `.env` file with `TARGET_USER`, `TARGET_HOST`, and `TARGET_PATH`.

## Architecture

**Stack:** Eleventy (11ty) v3, Nunjucks templates, SCSS (no JS framework, no CSS framework).

**Source → Output:** `_src/` → `_site/` (configured in `eleventy.config.js`)

**Template hierarchy:**
- `base.njk` — root HTML shell (all pages extend this)
- `home.njk`, `blog.njk`, `free-form.njk` — page-type layouts
- Reusable includes: `header.njk`, `nav.njk`, `footer.njk`, `site-meta.njk`

**Routing:** File-based. `_src/about/index.md` → `/about/`, `_src/thoughts/2026/04/article.md` → `/thoughts/2026/04/article/`

**Navigation:** Driven by `eleventyNavigation` YAML frontmatter. The `eleventyNavigationPlugin` builds nav from collections automatically. Current page is marked `aria-current="page"`.

**Content:** All pages are Markdown files with YAML frontmatter. Key frontmatter fields: `title`, `description`, `layout`, `sectionHeader`, `modifier` (CSS class), `eleventyNavigation`, `date`, `image`.

**SCSS:** Modular partials in `_src/assets/css/`. Entry point is `style.scss`. Uses `@use` with `_variables.scss`, `_breakpoints.scss`, `_typography.scss`. Breakpoint mixin: `@include breakpoints.breakpoint(breakpoints.$bp-md)`. Compiled via custom Eleventy template format in `eleventy.config.js` using `sass.compileString()`.

**Environment:** `BASE_URL` is injected as a global Eleventy data value from the npm script environment (localhost in dev, production URL in build).

**Sitemap:** Custom `_src/sitemap.njk` generates `/sitemap.xml` from all collections, excluding `/assets/`. The accessibility test suite reads this sitemap to discover and test every page dynamically.

**Accessibility testing:** `tests/accessibility.spec.js` reads the sitemap XML, visits every page URL with Playwright, and runs Axe with WCAG 2.2 tags. Tests run against a locally built and served site (the playwright config starts the server automatically).
