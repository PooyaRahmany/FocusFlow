# FocusFlow

A personal productivity web app for organizing tasks, planning work, tracking progress, and staying focused. The existing interface and workflows are preserved; this repository packages the application for GitHub Pages.

## Features

- **Today / Tasks** — organize daily tasks and track completion.
- **Planner** — manage plans and scheduled work.
- **Calendar** — view tasks by date.
- **Progress & Statistics** — review productivity and task activity.
- **Focus Timer** — use focused work and break sessions.
- **Music Player** — listen to the included calm audio tracks.
- **PromptVault / Bonfire** — save and organize reusable prompts.
- **Finance** — access the app's finance area.
- **Customization** — light and dark themes, color palettes, and English/Persian interface support.
- **Responsive interface** — desktop and mobile layouts.

## Run locally

The project is static and does not need a framework or build step. Run a local HTTP server from the repository root:

```bash
python -m http.server 8000
```

Open <http://localhost:8000>. Serving over HTTP is recommended so relative media paths behave like GitHub Pages.

## Deploy with GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site.

## Lighthouse CI

A GitHub Actions workflow runs Lighthouse CI on both mobile and desktop, with three runs per mode. It enforces a minimum score of **95/100** for Performance, Accessibility, Best Practices, and SEO. If any category misses the target, the workflow fails and uploads the Lighthouse reports as an artifact.

The workflow runs on pushes, pull requests, and manual dispatch. To run it, open the repository's **Actions** tab.

> The 95+ values are acceptance thresholds, not claimed results. The first real report is produced by GitHub Actions after the repository is pushed.

## Data and privacy

The app stores preferences and app data in the browser. Data is not automatically synchronized between browsers or devices. Clearing browser site data may remove locally stored information, so export or back up important data using the app's data tools. This repository does not include a server or cloud database.

## Project structure

```text
FocusFlow/
├── index.html
├── assets/
│   ├── css/       # Existing stylesheets; visual rules are unchanged
│   ├── js/        # Existing application scripts
│   ├── media/     # Extracted local images, SVGs, and audio
│   └── fonts/     # Original WOFF2 font files
├── .github/workflows/lighthouse.yml
├── .lighthouserc.mobile.json
├── .lighthouserc.desktop.json
├── ASSET-MANIFEST.json
└── QUALITY-REPORT.md
```

Large media files were moved from inert Base64 HTML blocks into local files. The app's synchronous asset lookup now returns their relative paths, so existing features can use them without changing the interface. Application scripts are deferred in their original document order, except for the small theme bootstrap that runs before first paint.

## Notes

- The visual CSS rules, colors, spacing, and animation definitions were not modified; only embedded font URLs were moved to identical local WOFF2 files.
- The original application workflows and localization dictionaries were retained. Changes are limited to asset loading, a lightweight media-selection check, document semantics, and non-visual accessibility labels.
- No license is included. Add a license only after choosing the reuse and redistribution terms you want.
