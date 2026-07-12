import React from "react";
import { Link } from "react-router-dom";
import StudyGuideShell from "./StudyGuideShell";
import "./PartialDerivativesGuide.css";

function Divider() {
  return <hr className="divider" />;
}

function OpeningNote() {
  return (
    <div className="opening-note-box">
      <p className="opening-note">
        <strong>Operational Blueprint:</strong> This study guide delivers an exhaustive treatment of constrained optimization via the method of Lagrange Multipliers. In multivariable calculus, optimizing an objective function over an unrestricted domain relies simply on locating critical points where the gradient vanishes. However, physical systems—such as thermodynamic equilibrium boundaries, structural load constraints, and machine learning loss surfaces—are universally bound by operational restrictions. This module formalizes the geometric alignment mechanics required to resolve these complex systems.
      </p>
    </div>
  );
}

// ==========================================
// SECTION 1: COMPONENTS (FUNDAMENTALS)
// ==========================================

function GuideSidebarPart1() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">Lagrange Multipliers · Part 1</div>
      </div>
      <div className="sb-group">Sections</div>
      <a className="sb-link" href="#s151">Geometric Intuition</a>
      <a className="sb-link" href="#quiz-151">Quiz 15.1</a>
      <a className="sb-link" href="#s152">Gradient Alignment</a>
      <a className="sb-link" href="#quiz-152">Quiz 15.2</a>
      <a className="sb-link" href="#s153">Objective vs Constraint</a>
      <a className="sb-link" href="#quiz-153">Quiz 15.3</a>
    </nav>
  );
}

function GuideHeaderPart1() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus Study Guide · Part 1 of 2</div>
      <h1 className="ch-title">Lagrange Multipliers</h1>
      <p className="ch-sub">Geometric Tangency, Vector Alignments &amp; Boundary Physics</p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContentsPart1() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 1 of 2</div>
      <div className="toc-grid">
        <a className="toc-a" href="#s151">Geometric Intuition</a>
        <a className="toc-a" href="#s152">Gradient Alignment</a>
        <a className="toc-a" href="#s153">Objective vs Constraint</a>
        <a className="toc-a" href="#quiz-151">Practice Quizzes</a>
      </div>
    </nav>
  );
}

function SectionS151() {
  return (
    <section className="section" id="s151">
      <div className="sec-badge">{"Section 15.1"}</div>
      <h2 className="sec-title">{"The Geometric Core Intuition"}</h2>
      <p>
        {"Imagine you are hiking on a 3D topographic terrain map defined by an objective elevation function $f(x, y)$. Your explicit mathematical goal is to find the highest peak or lowest valley. If there are no rules restriction parameters, you simply search for standard unconstrained critical points where the surface flattens completely. However, suppose you are forced to stay strictly on a paved path laid across the mountain. This path represents a constraint function curve, modeled as a level curve set to a constant value: $g(x,y) = c$."}
      </p>
      <p>
        {"To track this visually, project the level curves of $f(x,y)$ down onto a 2D coordinate plane alongside the constraint line $g(x,y) = c$. As you walk along the path, you cross various contours of $f(x,y)$. If your path cuts directly across a level curve line of $f$, it means your elevation is actively changing as you move forward. Therefore, that specific coordinate point cannot possibly be an extreme value along your path."}
      </p>
      <p>
        {"The elevation along your path stops changing only when the path runs completely parallel to a contour line of $f(x,y)$ for an infinitesimal moment. Geometrically, this means the constraint curve $g(x,y) = c$ is perfectly tangent to a level curve of $f(x,y)$. The moment these two distinct geometric curves share a tangent line, their corresponding orthogonal normal vectors must line up along the exact same linear path axis."}
      </p>
    </section>
  );
}

function QuizMcq151() {
  return (
    <section className="mcq-section" id="quiz-151">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 15.1"}</span>
        <h2 className="mcq-section-title">{"Geometric Intuition Assessments"}</h2>
      </div>
      <div className="mcq-card" data-section="lagrange-geometry" data-q="1" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"1"}</div>
          <div className="mcq-q-text">{"Geometrically, what condition must be met at an optimal point when maximizing an objective function $f(x,y)$ subject to a smooth constraint curve $g(x,y) = c$?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The contour line of $f(x,y)$ must intersect the curve $g(x,y) = c$ at an exact perpendicular right angle."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The contour curve of $f(x,y)$ and the constraint curve $g(x,y) = c$ must become perfectly tangent."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The function $f(x,y)$ must drop down to zero value uniformly across the constraint boundary path."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"Tangency ensures that moving a tiny bit along the constraint curve doesn't push you onto a higher or lower contour of $f(x,y)$, meaning you have hit a local constrained extreme value."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="lagrange-geometry" data-q="2" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"2"}</div>
          <div className="mcq-q-text">{"If a path $g(x,y) = c$ crosses a level curve contour of $f(x,y) = k$ with a non-zero angle, what does this tell you about that coordinate point?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"It cannot be a constrained extremum because moving along the path will shift you to higher or lower values of $f$."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"It is guaranteed to be a absolute global maximum peak."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The gradient of the constraint function has exploded to infinity."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"If the path cuts across contour lines, your value is actively climbing or falling, which means you haven't hit a peak or valley yet along that path."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="lagrange-geometry" data-q="3" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"3"}</div>
          <div className="mcq-q-text">{"What geometric relationship do the normal vectors of two curves share when those curves are perfectly tangent to each other in a 2D plane?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"They point in directions that are exactly perpendicular to each other."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"They sum up together to produce a zero vector value."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"They line up along the same straight axis line, making them scalar multiples of each other."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"Since normal vectors are perpendicular to their respective tangent lines, and the curves share a tangent line, their normal vectors must point along the exact same parallel coordinate axis line."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS152() {
  return (
    <section className="section" id="s152">
      <div className="sec-badge">{"Section 15.2"}</div>
      <h2 className="sec-title">{"Mathematical Derivation of Gradient Alignment"}</h2>
      <p>
        {"Since the gradient vector $\\nabla f(x, y)$ is mathematically defined to always point perpendicular to its function's level curves, and $\\nabla g(x, y)$ points perpendicular to its constraint curve, our geometric tangency condition translates into a clean vector equation system. If two vectors point along the exact same straight line axis, one must be a scalar multiple of the other."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"The Definitive Core Lagrange Vector Identity"}</div>
        {"The master equation governing all constrained optimization spaces states:"}
        <div className="fml">
          {"$$\\nabla f(x, y) = \\lambda \\nabla g(x, y)$$"}
        </div>
        {"Where the scalar variable parameter $\\lambda$ (Lambda) is called the Lagrange Multiplier."}
      </div>
      <p>
        {"To solve this practically, we break this vector identity down into individual component algebraic equations. For a standard 2D space coordinate tracking system, this expands into a set of three independent equations with three variables ($x, y, \\lambda$):"}
      </p>
      <div className="box ex">
        <div className="box-lbl">{"Expanded System of Equations"}</div>
        {"1. Component X alignment: $$\\frac{\\partial f}{\\partial x} = \\lambda \\frac{\\partial g}{\\partial x}$$"}
        {"2. Component Y alignment: $$\\frac{\\partial f}{\\partial y} = \\lambda \\frac{\\partial g}{\\partial y}$$"}
        {"3. Constraint closure verification: $$g(x, y) = c$$"}
      </div>
    </section>
  );
}

function QuizMcq152() {
  return (
    <section className="mcq-section" id="quiz-152">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 15.2"}</span>
        <h2 className="mcq-section-title">{"Mathematical Structure Verifications"}</h2>
      </div>
      <div className="mcq-card" data-section="lagrange-math" data-q="4" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"4"}</div>
          <div className="mcq-q-text">{"What does the scalar value variable parameter $\\lambda$ signify in the equation vector balance expression $\\nabla f = \\lambda \\nabla g$?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The absolute spatial distance between the two gradient vector coordinate origins."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The angle of tilt between the tangent lines of the two functions."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The scaling ratio needed to balance the lengths of the parallel gradient vectors."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"The gradients point in the same (or opposite) direction, but their lengths are usually different. The multiplier $\\lambda$ scales them so they match perfectly."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="lagrange-math" data-q="5" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"5"}</div>
          <div className="mcq-q-text">{"How many independent equations must you set up to solve a standard Lagrange problem involving an objective function with three inputs $f(x, y, z)$ and one constraint?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"3 equations"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"4 equations"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"5 equations"}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"You need 3 equations to balance the partial derivatives for $x, y,$ and $z$, plus a 4th equation for the constraint rule itself to solve for your variables ($x, y, z, \\lambda$)."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="lagrange-math" data-q="6" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"6"}</div>
          <div className="mcq-q-text">{"If $\\nabla g(x_0, y_0) = \\mathbf{0}$ at a specific coordinate point, what happens to the standard Lagrange evaluation framework?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The method fails at that point; you have to check points where $\\nabla g = \\mathbf{0}$ manually as potential exceptions."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The multiplier value $\\lambda$ automatically collapses down to zero as well."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The objective function gradient values instantly shoot up to infinity."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"The Lagrange multiplier method assumes the constraint boundary is smooth and has a non-zero normal vector. If $\\nabla g = \\mathbf{0}$, that boundary point is singular and has to be checked manually."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS153() {
  return (
    <section className="section" id="s153">
      <div className="sec-badge">{"Section 15.3"}</div>
      <h2 className="sec-title">{"Deconstructing Objective vs Constraint Fields"}</h2>
      <p>
        {"A common point of confusion is accidentally mixing up the objective function and the constraint function during setup. The objective function $f(x,y)$ represents the field quantity you want to maximize or minimize—like profit margins, heat distribution, or structural efficiency. This function doesn't have a fixed value set in stone; its value shifts as you explore different parts of the map."}
      </p>
      <p>
        {"The constraint function $g(x,y)$, on the other hand, represents a hard limit or rule. It is always locked to a constant value ($g(x,y) = c$). This constant value defines the boundary of your searchable world, restricting you to a specific subset of coordinates inside your input space."}
      </p>
    </section>
  );
}

function QuizMcq153() {
  return (
    <section className="mcq-section" id="quiz-153">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 15.3"}</span>
        <h2 className="mcq-section-title">{"Field Deconstruction Drills"}</h2>
      </div>
      <div className="mcq-card" data-section="lagrange-fields" data-q="7" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"7"}</div>
          <div className="mcq-q-text">{"You need to find the closest distance from the origin $(0,0)$ to the curve $x^2 y = 16$. Identify the correct choice for the objective function $f(x,y)$."}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"$f(x,y) = x^2 + y^2$ (or its square root distance variant)"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"$f(x,y) = x^2 y$"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"$f(x,y) = 16$"}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"The value you want to minimize is the distance to the origin, which is modeled as $x^2 + y^2$. The curve equation $x^2 y = 16$ is your fixed constraint rule."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="lagrange-fields" data-q="8" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"8"}</div>
          <div className="mcq-q-text">{"What distinguishes a level curve of an objective function from a standard constraint function equation?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"Objective function level curves never have a continuous derivative."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"Constraint functions must always be linear lines."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The objective function value changes across the domain, while the constraint function is locked to a single target constant."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"The constraint function is set to a constant value ($g=c$) to build your boundary path. The objective function's value varies as you move along that path so you can find its peaks and valleys."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="lagrange-fields" data-q="9" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"9"}</div>
          <div className="mcq-q-text">{"If you switch the roles of your objective function and constraint function during setup, what happens to your final calculation answers?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The math yields the exact same optimization point solutions."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"You end up solving a completely different problem (dual optimization problem) which changes your coordinate answers."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The partial derivative terms cancel out to zero instantly."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"Switching the target function and the boundary rule fundamentally alters the shape of your optimization landscape, leading to a completely different set of coordinate answers."}</div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// SECTION 2: COMPONENTS (APPLICATIONS)
// ==========================================

function GuideSidebarPart2() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">Lagrange Multipliers · Part 2</div>
      </div>
      <div className="sb-group">Sections</div>
      <a className="sb-link" href="#s154">Single Constraint Workflows</a>
      <a className="sb-link" href="#quiz-154">Quiz 15.4</a>
      <a className="sb-link" href="#s155">Multi-Constraint Systems</a>
      <a className="sb-link" href="#quiz-155">Quiz 15.5</a>
      <a className="sb-link" href="#s156">Extreme Value Verifications</a>
      <a className="sb-link" href="#quiz-156">Quiz 15.6</a>
      <a className="sb-link" href="#s157">Industrial Physics Dynamics</a>
      <a className="sb-link" href="#quiz-157">Quiz 15.7</a>
    </nav>
  );
}

function GuideHeaderPart2() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus Study Guide · Part 2 of 2</div>
      <h1 className="ch-title">Lagrange Multipliers</h1>
      <p className="ch-sub">Applications, Dual Constraints &amp; Engineering Workflows</p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContentsPart2() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 2 of 2</div>
      <div className="toc-grid">
        <a className="toc-a" href="#s154">Single Constraint Workflows</a>
        <a className="toc-a" href="#s155">Multi-Constraint Systems</a>
        <a className="toc-a" href="#s156">Extreme Value Verifications</a>
        <a className="toc-a" href="#s157">Industrial Physics Dynamics</a>
      </div>
    </nav>
  );
}

function SectionS154() {
  return (
    <section className="section" id="s154">
      <div className="sec-badge">{"Section 15.4"}</div>
      <h2 className="sec-title">{"Single Constraint Computational Workflows"}</h2>
      <p>
        {"When solving a single-constraint problem manually, the most efficient tactic is usually to isolate and eliminate the multiplier parameter $\\lambda$ as quickly as possible. Let's work through a practical optimization problem step by step to see how this works."}
      </p>
      <div className="box ex">
        <div className="box-lbl">{"Step-by-Step Engineering Calculation"}</div>
        <p>{"Maximize the function $f(x,y) = xy$ subject to the boundary constraint equation $x^2 + y^2 = 8$."}</p>
        <p>{"Step 1: Compute your gradients."}</p>
        {"$$\\nabla f = \\langle y, x \\rangle, \\quad \\nabla g = \\langle 2x, 2y \\rangle$$"}
        <p>{"Step 2: Set up your component balance equations using your multiplier."}</p>
        {"$$y = \\lambda(2x) \\quad \\Rightarrow \\quad \\lambda = \\frac{y}{2x}$$"}
        {"$$x = \\lambda(2y) \\quad \\Rightarrow \\quad \\lambda = \\frac{x}{2y}$$"}
        <p>{"Step 3: Equate your lambda expressions to build a direct relationship between your inputs."}</p>
        {"$$\\frac{y}{2x} = \\frac{x}{2y} \\quad \\Rightarrow \\quad 2y^2 = 2x^2 \\quad \\Rightarrow \\quad y^2 = x^2$$"}
        <p>{"Step 4: Plug this relationship back into your constraint equation to solve for your coordinates."}</p>
        {"$$x^2 + x^2 = 8 \\quad \\Rightarrow \\quad 2x^2 = 8 \\quad \\Rightarrow \\quad x^2 = 4 \\quad \\Rightarrow \\quad x = \\pm 2$$"}
        <p>{"This yields four distinct critical coordinate points to check: $(2,2), (2,-2), (-2,2),$ and $(-2,-2)$."}</p>
      </div>
    </section>
  );
}

function QuizMcq154() {
  return (
    <section className="mcq-section" id="quiz-154">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 15.4"}</span>
        <h2 className="mcq-section-title">{"Workflow Calculation Drills"}</h2>
      </div>
      <div className="mcq-card" data-section="lagrange-calc" data-q="10" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"10"}</div>
          <div className="mcq-q-text">{"Evaluating our example problem above, what is the absolute maximum value achieved by $f(x,y) = xy$ along the boundary $x^2 + y^2 = 8$?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"4"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"8"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"2"}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"Plugging the critical coordinates into our objective function reveals that $(2,2)$ and $(-2,-2)$ both yield a maximum value of $4$. The other two points yield a minimum value of $-4$."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="lagrange-calc" data-q="11" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"11"}</div>
          <div className="mcq-q-text">{"Why is it usually a bad idea to divide both sides of a Lagrange equation by a variable like $x$ or $y$ during the elimination step?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"It forces your multiplier value $\\lambda$ to turn negative."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"It alters the geometric dimensionality of your vector space."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"You risk accidentally destroying valid critical points where that variable equals zero ($x=0$ or $y=0$)."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"Dividing by a variable assumes it can never be zero. If a critical point actually occurs where that variable is zero, you will completely miss it. Always factor expressions instead of dividing them out."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="lagrange-calc" data-q="12" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"12"}</div>
          <div className="mcq-q-text">{"If you run a Lagrange calculation and find a point where $\\nabla f = \\mathbf{0}$ and $\\nabla g \\neq \\mathbf{0}$, what does this tell you about the value of your multiplier $\\lambda$?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The multiplier value is undefined."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The multiplier $\\lambda$ equals exactly zero."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The multiplier value has blown up to infinity."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"If $\\nabla f = \\mathbf{0}$, the objective function has hit a natural unconstrained peak or valley that happens to sit directly on your constraint boundary path, forcing $\\lambda = 0$."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS155() {
  return (
    <section className="section" id="s155">
      <div className="sec-badge">{"Section 15.5"}</div>
      <h2 className="sec-title">{"Multi-Constraint Optimization Spaces"}</h2>
      <p>
        {"In advanced engineering and physics problems, you will often find yourself tracking multiple boundary rules at the same time. For example, a spacecraft might need to minimize fuel usage while staying locked onto a specific orbital trajectory line. Geometrically, if you have two distinct constraints, $g(x,y,z) = c$ and $h(x,y,z) = d$, your boundary path is formed by the intersection line where these two surfaces meet."}
      </p>
      <p>
        {"For an objective function to hit an extreme value along this intersection curve, its gradient $\\nabla f$ must sit inside the flat plane spanned by the normal vectors of both constraint surfaces. This means we must introduce a second distinct multiplier variable ($\\mu$, Mu) to balance our vector equation space:"}
      </p>
      <div className="box def">
        <div className="box-lbl">{"The Multi-Constraint Lagrange Vector Identity"}</div>
        <div className="fml">
          {"$$\\nabla f = \\lambda \\nabla g + \\mu \\nabla h$$"}
        </div>
      </div>
    </section>
  );
}

function QuizMcq155() {
  return (
    <section className="mcq-section" id="quiz-155">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 15.5"}</span>
        <h2 className="mcq-section-title">{"Multi-Constraint System Drills"}</h2>
      </div>
      <div className="mcq-card" data-section="lagrange-multi" data-q="13" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"13"}</div>
          <div className="mcq-q-text">{"How many total variables must you keep track of when optimizing a 3D function $f(x,y,z)$ bound by two distinct constraint equations?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"3 variables ($x, y, z$)"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"4 variables ($x, y, z, \\lambda$)"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"5 variables ($x, y, z, \\lambda, \\mu$)"}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"You need three spatial coordinates ($x, y, z$) plus two independent multiplier values ($\\lambda$ and $\\mu$) to track and balance both boundary equations simultaneously."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="lagrange-multi" data-q="14" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"14"}</div>
          <div className="mcq-q-text">{"Geometrically, what shape is formed by the intersection of two smooth, non-parallel constraint surfaces inside a 3D coordinate space?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"A 1D space intersection curve line."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"A flat 2D bounding plane sheet."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"An isolated single coordinate point location."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"When two 2D surfaces intersect inside a 3D space, they cross along a 1D curve line, creating a single path that your optimization search must follow."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="lagrange-multi" data-q="15" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"15"}</div>
          <div className="mcq-q-text">{"What condition must be true for the constraint gradients $\\nabla g$ and $\\nabla h$ to safely run a multi-constraint Lagrange optimization?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"They must point in the exact same direction."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"They must be linearly independent vectors (not parallel to each other)."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"Their dot product must equal exactly zero everywhere."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"If the gradients were parallel, the two constraint surfaces would be tangent to each other, which collapses your intersection space and breaks the linear algebra foundation of the method."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS156() {
  return (
    <section className="section" id="s156">
      <div className="sec-badge">{"Section 15.6"}</div>
      <h2 className="sec-title">{"Extreme Value Verification Tests"}</h2>
      <p>
        {"The classic Lagrange method has a major limitation: it only highlights critical points. It doesn't tell you whether those points are maximums or minimums. Even worse, you cannot use the standard unconstrained Second Derivative Test here because we are only looking for extreme values along a constrained boundary line."}
      </p>
      <p>
        {"If your constraint boundary forms a closed, bounded shape—like a solid sphere or a locked bounding box—the Extreme Value Theorem guarantees that an absolute maximum and minimum must exist. In these scenarios, you can simply calculate the objective function's value at all your critical points and compare them directly: the highest result is your maximum, and the lowest is your minimum."}
      </p>
    </section>
  );
}

function QuizMcq156() {
  return (
    <section className="mcq-section" id="quiz-156">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 15.6"}</span>
        <h2 className="mcq-section-title">{"Verification Theory Assessments"}</h2>
      </div>
      <div className="mcq-card" data-section="lagrange-verify" data-q="16" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"16"}</div>
          <div className="mcq-q-text">{"Why does the standard unconstrained Second Derivative Test fail when evaluating critical points found via Lagrange Multipliers?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"Because the multiplier values introduce complex imaginary roots."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"Because a point can be a maximum along your restricted path even if it looks like a saddle point in the open 3D space."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"Because partial derivatives always cancel out to zero when cross-differentiated."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"The unconstrained landscape might slope downward away from your point, but if your boundary line prevents you from moving in those directions, that point remains a valid maximum along your restricted path."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="lagrange-verify" data-q="17" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"17"}</div>
          <div className="mcq-q-text">{"What topological property must your constraint boundary satisfy to guarantee that your critical point list contains both an absolute maximum and minimum value?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The boundary must be a compact set (both closed and bounded)."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The boundary curve must be completely linear."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The boundary domain must stretch out infinitely along at least one coordinate axis."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"The Extreme Value Theorem states that any continuous function evaluated over a compact (closed and bounded) domain must achieve absolute maximum and minimum values."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="lagrange-verify" data-q="18" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"18"}</div>
          <div className="mcq-q-text">{"Advanced check: What matrix assembly is used to mathematically classify Lagrange critical points when your domain stretches out infinitely?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"A standard Vandermonde matrix lookup."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The classical Wronskian differential matrix layout."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The Bordered Hessian matrix assembly."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"The Bordered Hessian matrix embeds your constraint equation's derivatives directly into a second-derivative matrix layout, letting you run an exact determinant test to classify high-dimensional constrained critical points."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS157() {
  return (
    <section className="section" id="s157">
      <div className="sec-badge">{"Section 15.7"}</div>
      <h2 className="sec-title">{"Industrial Physics & Economic Dynamics"}</h2>
      <p>
        {"In industrial physics and macroeconomics, the Lagrange multiplier $\\lambda$ has a powerful physical meaning beyond acting as a basic balancing scalar. It tracks the shadow price or sensitivity rate of your system. Specifically, $\\lambda$ measures exactly how much your optimized objective value would increase or decrease if you loosened your constraint boundary rule by a single unit index."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"The Sensitivity Interpretation Formula"}</div>
        <div className="fml">
          {"$$\\lambda = \\frac{\\partial f^*}{\\partial c}$$"}
        </div>
        {"Where $f^*$ represents the optimal value achieved by your objective function under a constraint level value $c$."}
      </div>
    </section>
  );
}

function QuizMcq157() {
  return (
    <section className="mcq-section" id="quiz-157">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 15.7"}</span>
        <h2 className="mcq-section-title">{"Industrial Physics Applications"}</h2>
      </div>
      <div className="mcq-card" data-section="lagrange-industry" data-q="19" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"19"}</div>
          <div className="mcq-q-text">{"An industrial plant optimizes its production volume, and calculates a final multiplier value of $\\lambda = 4.5$. What does this value mean?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"Increasing your available resource budget by 1 unit will boost your total production output by roughly 4.5 units."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The production lines are operating with a 4.5% error margin."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The system has 4.5 independent optimal configurations."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"The multiplier acts as a marginal value indicator, revealing how sensitive your optimized system is to changes in your resource constraints."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="lagrange-industry" data-q="20" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"20"}</div>
          <div className="mcq-q-text">{"When optimizing production efficiency under a strict labor budget, what field equation format is universally handled via Lagrange operations?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The classical Navier-Stokes fluid velocity matrix model."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The Maxwell electromagnetic wave equation layout."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The Cobb-Douglas production function formula ($P = b L^\\alpha K^\\beta$)"}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"The Cobb-Douglas equation models how industrial output scales based on labor and capital investments, making it a classic target for constrained Lagrange optimization formulas."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="lagrange-industry" data-q="21" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"21"}</div>
          <div className="mcq-q-text">{"If a system's calculated Lagrange Multiplier $\\lambda$ turns out to be a negative number, what does this tell you about the optimization landscape?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"An algebraic calculation mistake was made; multipliers must always be positive."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"Increasing your constraint boundary constant $c$ will decrease your optimized objective function values."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The target function gradient vector has inverted its dimension space."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"A negative derivative means your output values drop as your input constraint grows. This tells you that relaxing your constraint boundary will actually lower your optimized results."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionSummary() {
  return (
    <section className="section summary-box">
      <h2 className="summary-title">Lagrange Multipliers Operational Checklist</h2>
      <ul className="summary-list">
        <li>{"Isolate your objective target function $f$ from your boundary rule constraint equation $g=c$."}</li>
        <li>{"Compute your partial derivative gradients and set up the balancing system: $\\nabla f = \\lambda \\nabla g$."}</li>
        <li>{"Eliminate the scalar parameter $\\lambda$ early to map out your coordinate relationships cleanly."}</li>
        <li>{"Verify your final critical points by comparing their values directly over compact boundary regions."}</li>
      </ul>
    </section>
  );
}

// ==========================================
// CENTRAL ROUTER ROUTING CONTAINER
// ==========================================

function LagrangeMultipliersGuide({ section }) {
  if (section === 2) {
    return (
      <StudyGuideShell
        guideClass="partial-derivatives-guide"
        title="Lagrange Multipliers: Applications (Part 2)"
      >
        <GuideSidebarPart2 />
        <main className="main">
          <GuideHeaderPart2 />
          <TableOfContentsPart2 />
          <Divider />
          <SectionS154 />
          <QuizMcq154 />
          <Divider />
          <SectionS155 />
          <QuizMcq155 />
          <Divider />
          <SectionS156 />
          <QuizMcq156 />
          <Divider />
          <SectionS157 />
          <QuizMcq157 />
          <Divider />
          <SectionSummary />
        </main>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Lagrange Multipliers: Foundations (Part 1)"
    >
      <GuideSidebarPart1 />
      <main className="main">
        <GuideHeaderPart1 />
        <TableOfContentsPart1 />
        <Divider />
        <OpeningNote />
        <Divider />
        <SectionS151 />
        <QuizMcq151 />
        <Divider />
        <SectionS152 />
        <QuizMcq152 />
        <Divider />
        <SectionS153 />
        <QuizMcq153 />
        <Divider />
        <section id="summary1" className="section">
          <div className="sec-badge">{"Reference"}</div>
          <h2 className="sec-title">{"Part 1 Foundations Complete"}</h2>
          <p>
            {"Ready to solve high-dimensional calculations? Move on to "}
            <Link to="/lagrange-multipliers/2" style={{ color: "var(--gold)", fontWeight: 600 }}>
              {"Part 2: Applications & Multi-Constraint Frameworks"}
            </Link>
            {" to study complex algebraic substitution workflows, dual boundary systems, and sensitivity rate tracking."}
          </p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default LagrangeMultipliersGuide;