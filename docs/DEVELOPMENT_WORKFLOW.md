# Frontend Development Workflow

## Table of Contents

- [Setup](#setup)
- [Commands](#commands)
- [Environment](#environment)
- [Validation](#validation)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Maintenance Checklist](#maintenance-checklist)

## Setup

```bash
cd frontend
npm install
npm start
```

The development server runs at:

```text
http://localhost:3000
```

Start the backend separately when testing auth or API-backed workflows.

## Commands

| Command | Purpose |
| --- | --- |
| `npm start` | Run CRA development server |
| `npm run build` | Create production static build |
| `npm test` | Run React test runner |
| `npm install` | Install dependencies from `package-lock.json` |

## Environment

`frontend/.env.example` documents the API base URL:

```env
REACT_APP_API_URL=http://127.0.0.1:8002
```

Set this explicitly for production builds. CRA only exposes environment variables prefixed with `REACT_APP_`.

## Validation

Before opening a frontend PR:

```bash
cd frontend
npm run build
```

For behavior-heavy changes, also run relevant manual checks:

- Auth: signup, login, logout, dashboard avatar.
- Guides: section navigation, completion, quiz interaction, KaTeX rendering.
- Concepts: `Explore more` links and `/simple-concepts/:slug` pages.
- Tools: empty input, invalid input, expected calculation path.
- Mobile nav: hamburger open/close, Escape key, outside click.

## Deployment

```bash
cd frontend
npm ci
REACT_APP_API_URL=https://api.example.com npm run build
```

Deploy `frontend/build/` to static hosting. Do not deploy with a localhost API URL unless the target environment is strictly local.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Auth requests fail | Backend not running or wrong API URL | Start backend on port `8002` or update `.env` |
| CORS error | Backend does not allow frontend origin | Update backend `ALLOWED_ORIGINS` |
| LaTeX appears as raw text | Missing `InlineMath`/`BlockMath` or broken delimiters | Use `Math.jsx` helpers or fix delimiters |
| Build fails after LaTeX edit | Unescaped backslash in JS string | Use escaped commands such as `\\theta` |
| Progress missing after logout | Progress is username-scoped localStorage | Log in as the same username |

## Maintenance Checklist

- Keep new routes documented in `README.md`.
- Keep new page groups documented in `COMPONENTS_AND_PAGES.md`.
- Update state docs when context values change.
- Update workflow docs when commands or env vars change.
- Prefer deleting stale generated build artifacts from commits unless intentionally updating deployment output.
