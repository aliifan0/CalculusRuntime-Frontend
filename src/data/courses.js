/** Top-level subject paths shown on Home ("Choose a path"). */
export const COURSES = [
  {
    id: "calculus-analytical-geometry",
    title: "Calculus and Analytical Geometry",
    description:
      "Single-variable foundations: functions, continuity, derivatives, Taylor ideas, and geometric intuition before multivariable work.",
    path: "/courses/calculus-analytical-geometry",
    meta: "Foundations · Self-reading notes",
    icon: "ƒ",
    color: "gold",
    modules: [
      {
        title: "Simple Concepts",
        description: "Plain-language notes for dimensions, continuity, derivatives, and integrals.",
        path: "/simple-concepts",
        meta: "Syllabus overview",
        icon: "ƒ",
      },
      {
        title: "Taylor Series",
        description: "Local linear and higher-order approximations with Maclaurin catalogs and error bounds.",
        path: "/taylor-series/1",
        meta: "2 parts · MCQ practice",
        icon: "Σ",
      },
    ],
  },
  {
    id: "multivariable-calculus",
    title: "Multi Variable Calculus",
    description:
      "Partial derivatives, vector calculus, limits, multiple integrals, Lagrange multipliers, and divergence & curl.",
    path: "/courses/multivariable-calculus",
    meta: "Full study path · Guides + tools",
    icon: "∂",
    color: "teal",
    modules: [
      {
        title: "Partial Derivatives",
        description: "Limits, gradients, tangent planes, differentials, and optimization.",
        path: "/partial-derivatives/1",
        meta: "2 parts · MCQ practice",
        icon: "∂",
      },
      {
        title: "Limits & Continuity",
        description: "Multivariable limits, path-dependence, and continuity.",
        path: "/limits-continuity/1",
        meta: "2 parts · Path analysis",
        icon: "lim",
      },
      {
        title: "Vector Calculus",
        description: "Line integrals, conservative fields, Green’s theorem, and surfaces.",
        path: "/vector-calculus/1",
        meta: "2 parts · Worked examples",
        icon: "∇",
      },
      {
        title: "Multiple Integrals",
        description: "Double and triple integrals, Fubini, polar and cylindrical coordinates.",
        path: "/multiple-integrals/1",
        meta: "2 parts · Worked integrals",
        icon: "∬",
      },
      {
        title: "Lagrange Multipliers",
        description: "Constrained optimization via gradient alignment.",
        path: "/lagrange-multipliers/1",
        meta: "2 parts · Applications",
        icon: "λ",
      },
      {
        title: "Divergence & Curl",
        description: "Vector field operators, identities, divergence theorem, and Stokes.",
        path: "/divergence-curl/1",
        meta: "2 parts · Theorems",
        icon: "∇·",
      },
      {
        title: "Stokes' Theorem",
        description: "Circulation, oriented surfaces, and Stokes application workflows.",
        path: "/stokes-theorem/1",
        meta: "2 parts · Applications",
        icon: "∮",
      },
      {
        title: "Practice Section",
        description: "Focused MCQ arena across Lagrange, divergence, Stokes, Taylor, and related modules.",
        path: "/practice",
        meta: "Interactive · Difficulty tiers",
        icon: "✎",
      },
    ],
  },
  {
    id: "linear-algebra",
    title: "Linear Algebra",
    description:
      "Vectors, matrices, linear systems, eigenvalues, and the algebraic toolkit used across calculus and data science.",
    path: "/courses/linear-algebra",
    meta: "Course hub · Modules expanding",
    icon: "A",
    color: "blue",
    modules: [
      {
        title: "Lagrange Multipliers (gradient systems)",
        description: "Constrained optimization that rests on linear-algebraic gradient conditions.",
        path: "/lagrange-multipliers/1",
        meta: "Related module",
        icon: "λ",
      },
      {
        title: "Vector Field Visualizer",
        description: "Explore vector fields interactively while you build geometric intuition.",
        path: "/vectorfield",
        meta: "Interactive tool",
        icon: "↗",
      },
    ],
  },
  {
    id: "probability-statistics",
    title: "Probability and Statistics",
    description:
      "Probability models, random variables, distributions, and statistical reasoning for science and engineering.",
    path: "/courses/probability-statistics",
    meta: "Course hub · Modules expanding",
    icon: "P",
    color: "purple",
    modules: [
      {
        title: "Practice Section",
        description: "MCQ drills across calculus topics while statistics modules are added.",
        path: "/practice",
        meta: "Practice workspace",
        icon: "✎",
      },
      {
        title: "AI Calculus Solver",
        description: "Step-by-step solver you can use alongside probability homework when expressions appear.",
        path: "/ai-solver",
        meta: "Companion tool",
        icon: "🤖",
      },
    ],
  },
];

export function getCourseById(id) {
  return COURSES.find((c) => c.id === id) || null;
}
