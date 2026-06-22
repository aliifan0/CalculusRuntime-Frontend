# State, Routing, and UI Guidelines

## Table of Contents

- [State Model](#state-model)
- [Auth State](#auth-state)
- [Progress State](#progress-state)
- [Routing Rules](#routing-rules)
- [UI Guidelines](#ui-guidelines)
- [Math Rendering Rules](#math-rendering-rules)
- [Accessibility Expectations](#accessibility-expectations)

## State Model

The app currently has two global contexts:

| Context | File | Storage |
| --- | --- | --- |
| Auth | `src/context/AuthContext.js` | `localStorage` key `calcvoyager_user` |
| Progress | `src/context/ProgressContext.js` | `localStorage` key `calcvoyager_progress_<username>` |

Keep global state limited to cross-page concerns. Page-local form input, selected examples, tool controls, and transient UI state should stay in the page component.

## Auth State

`AuthContext` exposes:

- `user`
- `signup(username, password)`
- `login(username, password)`
- `logout()`

Signup/login call the backend and store the returned JWT as `accessToken`. The current frontend only calls auth endpoints directly; additional protected API calls should attach `Authorization: Bearer <token>`.

## Progress State

`ProgressContext` exposes:

- `progress`
- `stats`
- `markSectionComplete`
- `saveQuizScore`
- `addBookmark`
- `removeBookmark`
- `isBookmarked`
- `addSolverHistory`
- `recordVisit`

The backend has matching persistence endpoints for much of this data, but the current frontend source keeps the active implementation local. Treat backend sync as a deliberate future feature, not an accidental side effect.

## Routing Rules

- Register top-level routes in `src/App.js`.
- Use lowercase URL paths.
- Use slugs for dynamic educational content, as in `/simple-concepts/:slug`.
- Keep redirects explicit with `Navigate`.
- Use `ScrollToTop` for route transitions.
- Avoid introducing new prototype-style route names; prefer descriptive paths for new features.

## UI Guidelines

- Reuse existing colors, spacing, and page layout conventions from current CSS.
- Keep cards for repeated items, not whole page sections.
- Add page-specific CSS only when shared styling is not enough.
- Make buttons and links visually distinct based on action:
  - Use links for navigation.
  - Use buttons for in-page state changes.
- Keep mobile layouts explicit with media queries.
- Avoid adding visible instructional copy that duplicates obvious controls.

## Math Rendering Rules

- In JSX, use `InlineMath` for inline formulas and `BlockMath` for display formulas.
- In guide content rendered by `StudyGuideShell`, keep complete delimiters in one string.
- Use valid LaTeX commands, including `\to`, `\neq`, `\leq`, `\geq`, `\theta`, and `\frac`.
- Escape backslashes in JavaScript strings: `\\theta`, not `\theta`.
- Run `npm run build` after math-content changes.

## Accessibility Expectations

- Navigation links should have descriptive text.
- Icon-only or compact controls need accessible labels.
- Interactive controls should be keyboard reachable.
- Form errors should be visible in text, not only color.
- Dynamic UI such as tabs, toggles, and menus should keep clear active states.
