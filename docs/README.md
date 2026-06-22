# Frontend Documentation

The frontend is the CalcVoyager React single-page application. It owns the browser experience: study guides, concept exploration, math tools, authentication screens, dashboard, bookmarks, local progress state, and the hosted solver launcher.

## Table of Contents

- [Documentation Map](#documentation-map)
- [Runtime Summary](#runtime-summary)
- [Source Map](#source-map)
- [Primary Routes](#primary-routes)
- [Configuration](#configuration)
- [Ownership Boundary](#ownership-boundary)

## Documentation Map

| File | Purpose |
| --- | --- |
| `README.md` | Frontend overview and navigation |
| `ARCHITECTURE.md` | Application architecture, rendering model, integration points |
| `COMPONENTS_AND_PAGES.md` | Shared components, route-level pages, guide/tool ownership |
| `STATE_ROUTING_AND_UI.md` | Context state, routing conventions, UI and math-rendering rules |
| `DEVELOPMENT_WORKFLOW.md` | Setup, commands, validation, deployment, troubleshooting |

## Runtime Summary

| Item | Current implementation |
| --- | --- |
| Framework | React with Create React App / `react-scripts` |
| Routing | `react-router-dom` in `src/App.js` |
| Styling | Global CSS plus page/component CSS files |
| Math rendering | KaTeX through `src/components/Math.jsx` and guide auto-rendering |
| Auth state | `AuthContext`, stored in localStorage as `calcvoyager_user` |
| Progress state | `ProgressContext`, stored per username in localStorage |
| Backend base URL | `REACT_APP_API_URL`, defaulting in code to `http://127.0.0.1:8002` |
| Solver UX | Opens hosted Streamlit solver in a new tab |

## Source Map

| Path | Responsibility |
| --- | --- |
| `src/App.js` | Providers, router, redirects, route registry |
| `src/components/` | Shared layout, header/footer, math rendering, bookmarks, section completion |
| `src/context/` | Auth and learning-progress state providers |
| `src/pages/` | Route-level pages, guides, tools, auth screens, dashboard |
| `src/utils/` | Small route/runtime utilities such as scroll reset |
| `public/` | Static shell, manifest, favicon, robots |
| `build/` | Generated production output |

## Primary Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/login`, `/signup` | Auth pages |
| `/dashboard` | User progress dashboard |
| `/simple-concepts` | Concept index |
| `/simple-concepts/:slug` | Interactive concept explorer |
| `/partial-derivatives/1`, `/partial-derivatives/2` | Partial derivatives guide |
| `/vector-calculus/1`, `/vector-calculus/2` | Vector calculus guide |
| `/test` | Continuity finder |
| `/extreme` | Extreme value tool |
| `/volumecalculator` | Volume/integral calculator |
| `/ai-solver` | Hosted solver launcher |

## Configuration

Create `frontend/.env` when local defaults are not sufficient:

```env
REACT_APP_API_URL=http://127.0.0.1:8002
```

Because this is a Create React App build, `REACT_APP_*` variables are compiled into the production bundle.

## Ownership Boundary

Frontend docs should describe browser behavior, routing, components, state, UI conventions, math rendering, and frontend validation. Backend endpoint schemas belong in `../../backend/docs/API_REFERENCE.md`; root deployment topology belongs in `../../docs/DEPLOYMENT.md`.
