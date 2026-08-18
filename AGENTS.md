# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single-service Next.js 16 (App Router, Turbopack, React 19) static
portfolio/CV site. There is no backend, database, or required environment
variable — it runs entirely from `npm` scripts. Package manager is **npm**
(`package-lock.json`). Node 22 is available and works.

### Services / commands

There is one service (the Next.js app). Standard commands live in `package.json`:

- Dev server: `npm run dev` (serves on `http://localhost:3000`). Run it in a
  persistent terminal; it uses Turbopack with hot reload.
- Production build: `npm run build` (compiles + type-checks + prerenders).
- Production start: `npm run start` (after a build).

### App behavior

- The page language is controlled by the `?lang=` query param (`?lang=en`
  default, `?lang=es`). The on-page top-right "Lang: EN / ES" pill is just a set
  of `<a>` links to those URLs, so language selection is server-rendered — verify
  it directly with e.g. `curl -s "http://localhost:3000/?lang=es"`.

### Gotchas

- **`npm run lint` is broken and this is a pre-existing repo issue, not an
  environment problem.** Next.js 16 removed the `next lint` command (the script
  errors with `Invalid project directory ... /lint`). ESLint 9 is installed but
  the repo still uses a legacy `.eslintrc.json`, which is incompatible with
  ESLint 9's flat-config default. Running ESLint directly also fails. Do not
  "fix" this unless explicitly asked; migrating lint config is a code change
  outside normal setup.
- **Browser/computer-use testing:** Chrome auto-offers Google Translate on this
  page (it detects Spanish content). If Google Translate is applied, it mutates
  the DOM and crashes the React app (black screen). When testing in a browser,
  dismiss the translate popup with Escape and never apply it. For reliable
  headless screenshots, call the real Chrome binary at `/opt/google/chrome/chrome`
  directly (the `google-chrome` wrapper on PATH injects a fixed
  `--user-data-dir`/remote-debugging profile that conflicts and hangs); pass
  `--disable-features=Translate,TranslateUI` and a fresh `--user-data-dir`.
