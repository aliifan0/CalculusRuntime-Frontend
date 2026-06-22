# Frontend Architecture

## Table of Contents

- [Overview](#overview)
- [Application Shell](#application-shell)
- [Routing Architecture](#routing-architecture)
- [Rendering Math](#rendering-math)
- [Backend Integration](#backend-integration)
- [Solver Integration](#solver-integration)
- [Build Output](#build-output)
- [Known Risks](#known-risks)

## Overview

The frontend is a React SPA using Create React App. It is organized around route-level pages in `src/pages/`, shared components in `src/components/`, and application state providers in `src/context/`.

```text
index.js
  -> App.js
       -> AuthProvider
       -> ProgressProvider
       -> BrowserRouter
       -> Layout
            -> Header
            -> active page
            -> Footer
```

## Application Shell

`src/components/Layout.jsx` owns the shared page chrome. It renders:

- `Header` with navigation, theme toggle, auth links, mobile menu, and dashboard avatar.
- The active route body passed from `App.js`.
- `Footer`.

Theme state is stored in localStorage under `calculus-dark` and applied to the document root through `data-theme`.

## Routing Architecture

`src/App.js` is the single source of truth for top-level routes. It uses:

- `BrowserRouter` for SPA routing.
- `ScrollToTop` to reset scroll position on route changes.
- `Navigate` redirects for guide part defaults.
- `Layout body={<Page />}` for all app pages except login/signup.

Current guide redirects:

| Source | Redirect |
| --- | --- |
| `/partial-derivatives` | `/partial-derivatives/1` |
| `/vector-calculus` | `/vector-calculus/1` |

## Rendering Math

Math rendering uses two paths:

| Path | Used by | Notes |
| --- | --- | --- |
| `InlineMath` / `BlockMath` | JSX page content and tools | Renders directly through KaTeX |
| `StudyGuideShell` auto-render | Guide content strings/HTML | Supports `$...$`, `$$...$$`, `\(...\)`, and `\[...\]` |

When writing JSX, prefer `InlineMath` and `BlockMath` so math does not depend on text-node normalization. When writing guide content, keep delimiters complete inside the same string.

## Backend Integration

`AuthContext` uses `REACT_APP_API_URL` and calls:

- `POST /api/auth/signup`
- `POST /api/auth/login`

The returned user and token are stored as `calcvoyager_user`. Current progress APIs exist in the backend, but `ProgressContext` currently persists learning state locally per username.

## Solver Integration

The AI solver page does not embed the solver. It opens the hosted Streamlit app:

```text
https://dapeaqzot5jtellyuyxjrf.streamlit.app/
```

If a user is signed in, clicking the solver launcher records an entry in local solver history through `ProgressContext`.

## Build Output

`npm run build` produces static assets in `frontend/build/`. The build is deployable to any static host, provided `REACT_APP_API_URL` was set before build time.

## Known Risks

- `ProgressContext` duplicates data that backend APIs can persist; synchronization should be designed before expanding progress features.
- Route names such as `/test`, `/extreme`, and `/volumecalculator` are functional but not fully productized.
- Auth tokens live in localStorage, so XSS prevention and safe rendering are important.
- Test coverage is thin for route flows, auth, localStorage state, and math-heavy tools.
