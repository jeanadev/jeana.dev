# jeana.dev — Developer Guide

A quick-start for running the site locally, running accessibility tests, and deploying with rsync.

---

## Prerequisites

- **Node.js 20+** and **npm**
- Install dependencies after cloning:
  ```bash
  npm ci
  ```
- **Playwright (browsers)** for a11y tests (first time only):
  ```bash
  npx playwright install
  ```

---

## 1) Start the site locally

Serve with Eleventy’s dev server:

```bash
npm run serve
```

- Local URL: **http://localhost:8080/**
- This sets `BASE_URL=http://localhost:8080` so `_site/sitemap.xml` points to localhost in dev.
- File watching is included; for watch-without-server:
  ```bash
  npm run watch
  ```

---

## 2) Run accessibility tests

We use **Playwright + axe-core** (via `@axe-core/playwright`) and your test file(s) in `tests/accessibility.spec.js`.

### Run tests
```bash
npm run test:a11y
```
(alias of `npm run test`)

### How tests discover pages
- Tests should read the local sitemap at **http://localhost:8080/sitemap.xml**.
- Ensure the dev server is running if your test expects a running site; otherwise, have the spec spin up a server or build first as needed.

> First run? Execute `npx playwright install` to install browser binaries.

---

## 3) Build the site for production

```bash
npm run build
```
- Outputs to **_site/**.
- Sets `BASE_URL=https://www.jeana.dev` so `_site/sitemap.xml` contains production URLs.

Clean + rebuild:
```bash
npm run clean && npm run build
```

---

## 4) Deploy (rsync)

We deploy with **deploy.sh**, which **builds for production first**, then (optionally) runs a11y tests, and finally rsyncs `_site/` to the server.

### Dry-run (preview only)
```bash
npm run deploy:dry
```

### Normal production deploy (must be on `main`)
```bash
npm run deploy:prod
```

### Emergency deploy (skip a11y tests)
```bash
npm run deploy:emergency
```
> Skipping a11y should be rare.

### Server configuration via `.env`
Create a file named `.env` in the project root (not committed) with your server details:

```
TARGET_USER=your-ssh-username
TARGET_HOST=your.server.example
TARGET_PATH=/put/path/here
```

### What deploy does
1. Verifies you’re on the `main` branch.
2. Runs `npm run clean && npm run build`.
3. Runs `npm run test:a11y` unless `--skip-a11y` was passed.
4. Uses `rsync -avz --delete -e ssh` to sync `_site/` to `$TARGET_USER@$TARGET_HOST:$TARGET_PATH`.

---

## 5) Project structure & config notes

### Sitemap
- Implemented as **`_src/sitemap.njk`** (no external sitemap plugin).
- Uses global `BASE_URL` (from npm scripts) to build absolute links:
  - Dev: `BASE_URL=http://localhost:8080` (via `npm run serve` / `watch`)
  - Prod: `BASE_URL=https://www.jeana.dev` (via `npm run build`)
- Filters out `/assets/` so only real pages are listed (useful for a11y tests).

### CSS
- SCSS entry is **`_src/assets/css/styles.scss`** with partials in the same folder (`_*.scss`).
- Compiles to **`/assets/styles.css`**.
- Reference in HTML:
  ```html
  <link rel="stylesheet" href="/assets/styles.css" />
  ```

### Eleventy (ESM)
- Config file: **`eleventy.config.js`** (ES modules).
- Global data:
  ```js
  eleventyConfig.addGlobalData("BASE_URL", process.env.BASE_URL || "https://www.jeana.dev");
  ```
- Directories:
  - Input: `_src/`
  - Includes: `_includes/`
  - Output: `_site/`

---

## 6) Common commands

```bash
# Install deps
npm ci
npx playwright install   # first time for browsers

# Dev server
npm run serve
npm run watch

# Tests
npm run test:a11y

# Build
npm run clean && npm run build

# Deploy
npm run deploy:dry
npm run deploy:prod
npm run deploy:emergency
```

---

## 7) Troubleshooting

**Sitemap has production URLs in dev**
- Ensure you used `npm run serve` (it sets `BASE_URL=http://localhost:8080`).

**Playwright can’t find pages**
- Make sure the dev server is running, or update the spec to start a server/build before tests.
- Confirm `http://localhost:8080/sitemap.xml` exists.

**Deploy refused (wrong branch)**
- Switch to `main` or adjust the guard in `deploy.sh` if required.

---