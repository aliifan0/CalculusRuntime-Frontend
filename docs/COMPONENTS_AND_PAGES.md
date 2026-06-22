# Components and Pages

## Table of Contents

- [Component Ownership](#component-ownership)
- [Shared Components](#shared-components)
- [Page Groups](#page-groups)
- [Guide System](#guide-system)
- [Tool Pages](#tool-pages)
- [Adding a New Page](#adding-a-new-page)

## Component Ownership

Use `src/components/` for reusable UI and behavior. Use `src/pages/` for route-level screens, even when a page is internally complex.

## Shared Components

| Component | Responsibility |
| --- | --- |
| `Layout.jsx` | Site chrome wrapper and theme persistence |
| `Header.jsx` | Primary nav, mobile nav, auth links, theme toggle |
| `Footer.jsx` | Shared footer |
| `Math.jsx` | KaTeX render helpers: `InlineMath`, `BlockMath`, `renderLatexToElement` |
| `BookmarkButton.jsx` | Auth-only bookmark toggle tied to `ProgressContext` |
| `SectionCompleteBar.jsx` | Guide completion control and progress integration |

Each component with non-trivial styling owns a sibling CSS file.

## Page Groups

| Page group | Files | Purpose |
| --- | --- | --- |
| Home/dashboard | `Home.jsx`, `Dashboard.jsx` | Landing and user progress overview |
| Auth | `Login.jsx`, `Signup.jsx`, `Auth.css` | Signup/login forms through `AuthContext` |
| Concepts | `SimpleConcepts.jsx`, `ConceptExplore.jsx` | Concept index and interactive concept pages |
| Partial derivatives | `PartialPart1.jsx`, `PartialPart2.jsx`, `PartialDerivativesGuide.jsx` | Structured guide content |
| Vector calculus | `VectorPart1.jsx`, `VectorPart2.jsx`, `VectorCalculusGuide.jsx` | Structured guide content |
| Tools | `ContinuityFinder.jsx`, `ExtremeValueFinder.jsx`, `VolumeCalculator.jsx` | Interactive calculation tools |
| Solver | `AISolver.jsx` | Hosted Streamlit solver launcher |

## Guide System

`StudyGuideShell.jsx` provides guide behavior:

- Section rendering.
- Sidebar navigation.
- MCQ interactions.
- Section completion.
- KaTeX auto-rendering for guide content.
- Scroll and active-section behavior.

Guide part files should keep content data close to the page that renders it, unless shared curriculum metadata is introduced.

## Tool Pages

Tool pages are standalone route-level experiences. They should:

- Validate user input before calculation.
- Render math through `Math.jsx`.
- Keep long-running or complex math logic separate from presentation where possible.
- Handle empty, invalid, and edge-case states explicitly.

## Adding a New Page

1. Add the route-level component under `src/pages/`.
2. Add styling as `PageName.css` when the page needs custom layout.
3. Register the route in `src/App.js`.
4. Add navigation in `Header.jsx` only if it belongs in primary navigation.
5. Use `Layout` for normal app pages.
6. Update this file when the page creates a new owned workflow.
7. Run `npm run build`.
