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
        <strong>Operational Blueprint:</strong> This study guide delivers an exhaustive treatment of Taylor and Maclaurin Series expansions. By leveraging higher-order derivatives, we can reconstruct complex, non-linear transcendental functions as infinite polynomials centered around a specific spatial coordinate point. This serves as one of the most powerful tools in numerical analysis, engineering approximations, and physical simulation modeling.
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
        <div className="sb-title">Taylor Series · Part 1</div>
      </div>
      <div className="sb-group">Sections</div>
      <a className="sb-link" href="#s171">Polynomial Approximation</a>
      <a className="sb-link" href="#quiz-171">Quiz 17.1</a>
      <a className="sb-link" href="#s172">The Taylor Formula</a>
      <a className="sb-link" href="#quiz-172">Quiz 17.2</a>
      <a className="sb-link" href="#s173">Maclaurin Reductions</a>
      <a className="sb-link" href="#quiz-173">Quiz 17.3</a>
    </nav>
  );
}

function GuideHeaderPart1() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus Study Guide · Part 1 of 2</div>
      <h1 className="ch-title">Taylor Series</h1>
      <p className="ch-sub">Polynomial Approximations, The Taylor Formula &amp; Maclaurin Series</p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContentsPart1() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 1 of 2</div>
      <div className="toc-grid">
        <a className="toc-a" href="#s171">Polynomial Approximation</a>
        <a className="toc-a" href="#s172">The Taylor Formula</a>
        <a className="toc-a" href="#s173">Maclaurin Reductions</a>
        <a className="toc-a" href="#quiz-171">Practice Quizzes</a>
      </div>
    </nav>
  );
}

function SectionS171() {
  return (
    <section className="section" id="s171">
      <div className="sec-badge">{"Section 17.1"}</div>
      <h2 className="sec-title">{"Conceptual Polynomial Approximation Space"}</h2>
      <p>
        {"To approximate a non-linear continuous curve $f(x)$ at a specific coordinate center point $x = a$, we build a customizable polynomial expansion. A basic constant approximation matches only the exact function height coordinate value $f(a)$."}
        {"To match the tilting slope line, we incorporate the first derivative $f'(a)$. By continuously adding higher-order derivatives, we incrementally align the polynomial's bending curvature, twist, and higher rate changes to wrap perfectly around our target function curve."}
      </p>
    </section>
  );
}

function QuizMcq171() {
  return (
    <section className="mcq-section" id="quiz-171">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 17.1"}</span>
        <h2 className="mcq-section-title">{"Approximation Space Assessments"}</h2>
      </div>
      <div className="mcq-card" data-section="taylor-concept" data-q="1" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"1"}</div>
          <div className="mcq-q-text">{"What geometric physical element is locked in place when matching the first-degree term of a Taylor polynomial to a function line curve at point $a$?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The absolute spatial area bounding profile layout."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The exact tangent line slope angle value."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The inflection coordinate crossing points locus."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"The first derivative $f'(a)$ directly tracks the instantaneous line slope, creating a tangent line linear approximation profile locally."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="taylor-concept" data-q="2" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"2"}</div>
          <div className="mcq-q-text">{"As you add higher-degree terms to a convergent Taylor polynomial, what behavior happens to the approximation region?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The tracking region expands outward further away from the center coordinate point."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The matching profile shrinks strictly to a single infinitesimal point coordinate."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The polynomial sequence begins to oscillate chaotically to infinity."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"Higher-order terms match higher-order behaviors, which lets the polynomial map the function's bends accurately across an expanding window around your center point."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="taylor-concept" data-q="3" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"3"}</div>
          <div className="mcq-q-text">{"Which mathematical attribute determines how well a Taylor polynomial mimics a local function curve's concavity?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The zero-th degree constant coordinate value."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The linear scalar coefficient parameter."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The second-degree derivative coefficient term ($f''(a)$)."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"The second derivative dictates the function's structural concavity (bending up vs. bending down)."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS172() {
  return (
    <section className="section" id="s172">
      <div className="sec-badge">{"Section 17.2"}</div>
      <h2 className="sec-title">{"The General Taylor Series Formula"}</h2>
      <p>
        {"The mathematical identity for building a Taylor Series scales infinitely. Each polynomial term is explicitly weighted by a corresponding derivative value evaluated at the center point $a$, scaled inversely by its matching factorial index value to balance power rule operations."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"Definition Formula — Infinite Taylor Series"}</div>
        {"The expansion of an infinitely differentiable function $f(x)$ centered at point $x = a$ is given by:"}
        <div className="fml">
          {"$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n$$"}
        </div>
        {"Expanded version: $$f(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\frac{f'''(a)}{3!}(x-a)^3 + \\dots$$"}
      </div>
    </section>
  );
}

function QuizMcq172() {
  return (
    <section className="mcq-section" id="quiz-172">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 17.2"}</span>
        <h2 className="mcq-section-title">{"Formula Structure Verifications"}</h2>
      </div>
      <div className="mcq-card" data-section="taylor-formula" data-q="4" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"4"}</div>
          <div className="mcq-q-text">{"Why does a factorial expression ($n!$) always divide the derivative coefficient term inside the Taylor formulation?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"To adjust for base-10 logarithmic scaling indexes."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"To neutralize geometric area dimensions across parameter changes."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"To counteract the scaling numbers generated by repeatedly applying the Power Rule to $(x-a)^n$."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"Differentiating $x^n$ $n$ times pulls down factors of $n, (n-1), (n-2)...$ which creates an $n!$ multiplier. Dividing by $n!$ keeps your polynomial derivative isolated."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="taylor-formula" data-q="5" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"5"}</div>
          <div className="mcq-q-text">{"Evaluate the explicit expression value for the $n=0$ structural term of a standard Taylor series layout."}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"$f(a)$"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"0"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"$f'(a)(x-a)$"}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"For $n=0$, the 0-th derivative is simply the un-differentiated function $f(a)$, $0! = 1$, and $(x-a)^0 = 1$. This leaves only $f(a)$."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="taylor-formula" data-q="6" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"6"}</div>
          <div className="mcq-q-text">{"What does the notation $f^{(4)}(a)$ represent inside the general Taylor expansion framework?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The function value $f(a)$ scaled up to its 4th power exponent."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The 4th derivative of the function evaluated explicitly at coordinate point $a$."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The product of multiplying the first 4 terms together."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"Parentheses around an exponent index indicate a high-order derivative operation, rather than an exponential power matrix value."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS173() {
  return (
    <section className="section" id="s173">
      <div className="sec-badge">{"Section 17.3"}</div>
      <h2 className="sec-title">{"Maclaurin Special Case Reductions"}</h2>
      <p>
        {"A Maclaurin series is simply a specific subset case of the Taylor Series where the approximation center point is placed exactly at the coordinate origin ($a = 0$). This simplifies the algebraic expressions because your variable differences $(x-a)^n$ reduce simply to $x^n$."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"The Maclaurin Equation Layout"}</div>
        <div className="fml">
          {"$$f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n$$"}
        </div>
      </div>
    </section>
  );
}

function QuizMcq173() {
  return (
    <section className="mcq-section" id="quiz-173">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 17.3"}</span>
        <h2 className="mcq-section-title">{"Maclaurin Reduction Drills"}</h2>
      </div>
      <div className="mcq-card" data-section="maclaurin-core" data-q="7" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"7"}</div>
          <div className="mcq-q-text">{"What explicit value selection converts a general Taylor formulation into a standard Maclaurin series format?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"$a = 1$"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"$a = 0$"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"$a = \\infty$"}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"By definition, a Maclaurin series is identical to a Taylor series that is centered precisely at the coordinate origin position."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="maclaurin-core" data-q="8" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"8"}</div>
          <div className="mcq-q-text">{"Why are Maclaurin models frequently preferred over Taylor configurations for early numerical analysis drills?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"Evaluating expressions at zero eliminates complex binomial tracking layers like $(x-a)^n$."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"Because Maclaurin series are guaranteed to converge faster across all variable domains."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"Because they avoid dividing by factorial values entirely."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"Centering at zero reduces the polynomial base to simple powers of $x^n$, making the algebraic expressions much easier to evaluate manually."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="maclaurin-core" data-q="9" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"9"}</div>
          <div className="mcq-q-text">{"If a function $f(x)$ contains an undefined coordinate state at point $x=0$ (such as $\\ln(x)$), what does this mean for its Maclaurin expansion?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The function can still be expanded using fractional negative power indicators."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The index terms switch to imaginary complex parameters."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"A Maclaurin expansion is impossible; you must use a general Taylor series centered at a point where the function is defined (like $a=1$)."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"Since you cannot evaluate the function or its derivatives at zero, a Maclaurin series cannot be constructed. You must center your expansion elsewhere using a Taylor model instead."}</div>
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
        <div className="sb-title">Taylor Series · Part 2</div>
      </div>
      <div className="sb-group">Sections</div>
      <a className="sb-link" href="#s174">Common Maclaurin Expansions</a>
      <a className="sb-link" href="#quiz-174">Quiz 17.4</a>
      <a className="sb-link" href="#s175">Radius of Convergence</a>
      <a className="sb-link" href="#quiz-175">Quiz 17.5</a>
      <a className="sb-link" href="#s176">Taylor Error Estimation</a>
      <a className="sb-link" href="#quiz-176">Quiz 17.6</a>
      <a className="sb-link" href="#s177">Engineering Computations</a>
      <a className="sb-link" href="#quiz-177">Quiz 17.7</a>
    </nav>
  );
}

function GuideHeaderPart2() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus Study Guide · Part 2 of 2</div>
      <h1 className="ch-title">Taylor Series</h1>
      <p className="ch-sub">Convergence, Error Bounds &amp; Engineering Applications</p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContentsPart2() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 2 of 2</div>
      <div className="toc-grid">
        <a className="toc-a" href="#s174">Common Maclaurin Expansions</a>
        <a className="toc-a" href="#s175">Radius of Convergence</a>
        <a className="toc-a" href="#s176">Taylor Error Estimation</a>
        <a className="toc-a" href="#s177">Engineering Computations</a>
      </div>
    </nav>
  );
}

function SectionS174() {
  return (
    <section className="section" id="s174">
      <div className="sec-badge">{"Section 17.4"}</div>
      <h2 className="sec-title">{"Common Transcendental Maclaurin Expansions"}</h2>
      <p>
        {"Instead of deriving an expansion from scratch every time, we can reuse and adapt known standard series formulas for core transcendental functions via direct substitution."}
      </p>
      <div className="box ex">
        <div className="box-lbl">{"Core Standard Reference Catalog"}</div>
        <ul className="summary-list" style={{ gap: "10px", padding: "10px" }}>
          <li>{"$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$"}</li>
          <li>{"$\\sin(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ (Odd symmetry terms)"}</li>
          <li>{"$\\cos(x) = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$ (Even symmetry terms)"}</li>
        </ul>
      </div>
    </section>
  );
}

function QuizMcq174() {
  return (
    <section className="mcq-section" id="quiz-174">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 17.4"}</span>
        <h2 className="mcq-section-title">{"Catalog Manipulation Drills"}</h2>
      </div>
      <div className="mcq-card" data-section="taylor-catalog" data-q="10" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"10"}</div>
          <div className="mcq-q-text">{"Which standard function series catalog matches the expression layout containing exclusively odd factorial denominators?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"$\\sin(x)$"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"$\\cos(x)$"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"$e^x$"}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"Because sine is an odd function, its Maclaurin expansion retains exclusively odd power terms and odd factorial denominators: $(2n+1)!$."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="taylor-catalog" data-q="11" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"11"}</div>
          <div className="mcq-q-text">{"Determine the correct Maclaurin expansion sequence for $e^{-2x}$ by leveraging direct expression substitution."}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"$1 - x + x^2 - x^3 + \\dots$"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"$-2x - 4x^2 - 8x^3 - \\dots$"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"$1 - 2x + \\frac{4x^2}{2!} - \\frac{8x^3}{3!} + \\dots$"}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"Substituting $(-2x)$ for $x$ in the standard $e^x$ series yields $1 + (-2x) + \\frac{(-2x)^2}{2!} + \\frac{(-2x)^3}{3!}$, which expands to choice C."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="taylor-catalog" data-q="12" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"12"}</div>
          <div className="mcq-q-text">{"What operation converts the standard Maclaurin series for $\\cos(x)$ directly into the expansion for $\\sin(x)$?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"Multiplying the full sequence by a factor of $x$."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"Differentiating the $\\sin(x)$ expansion term-by-term yields the $\\cos(x)$ expansion."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"Inverting the sign of every single term in the sequence uniformly."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"Because $d/dx(\\sin x) = \\cos x$, differentiating sine's polynomial term-by-term reproduces cosine's expansion exactly."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS175() {
  return (
    <section className="section" id="s175">
      <div className="sec-badge">{"Section 17.5"}</div>
      <h2 className="sec-title">{"Radius & Intervals of Convergence Boundaries"}</h2>
      <p>
        {"An infinite series polynomial must be evaluated to ensure it doesn't add up to an infinite value. We use the Ratio Test to find the safe window of operation, setting up the absolute limit inequality:"}
        {"$$\\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| < 1$$"}
        {"Solving this inequality reveals the Radius of Convergence $R$, defining the valid boundary domain where our polynomial cleanly matches our function."}
      </p>
    </section>
  );
}

function QuizMcq175() {
  return (
    <section className="mcq-section" id="quiz-175">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 17.5"}</span>
        <h2 className="mcq-section-title">{"Convergence Limit Verifications"}</h2>
      </div>
      <div className="mcq-card" data-section="taylor-convergence" data-q="13" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"13"}</div>
          <div className="mcq-q-text">{"What is the absolute radius of convergence ($R$) value for the standard Maclaurin series of functions like $e^x$, $\\sin(x)$, and $\\cos(x)$?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"$R = 1$"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"$R = 0$"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"$R = \\infty$ (Converges everywhere for all real numbers)"}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"The factorials in their denominators grow so fast that the Ratio Test limit drops to 0 for any real value of $x$. This means they converge across all real numbers."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="taylor-convergence" data-q="14" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"14"}</div>
          <div className="mcq-q-text">{"If a power series has a radius of convergence of $R=3$ centered at $a=0$, identify the coordinate value location where its convergence behavior is uncertain without further checking."}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"$x = 3$ (The exact boundary edge)"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"$x = 0$ (The center coordinate)"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"$x = 5$ (An external point)"}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"The Ratio Test is inconclusive when the limit equals exactly 1, which happens at the boundary endpoints ($x = \\pm R$). You have to check these points separately."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="taylor-convergence" data-q="15" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"15"}</div>
          <div className="mcq-q-text">{"What happens to a polynomial approximation if you plug in an $x$-value that falls outside your interval of convergence?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The polynomial values continue to track the function perfectly."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The terms grow out of control and diverge toward infinity, making the approximation useless."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The polynomial values drop down and flatten out along the zero axis line."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"Outside the interval of convergence, the infinite sum adds up to an infinite value, completely breaking the approximation."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS176() {
  return (
    <section className="section" id="s176">
      <div className="sec-badge">{"Section 17.6"}</div>
      <h2 className="sec-title">{"Taylor's Inequality & Remainder Error Bounds"}</h2>
      <p>
        {"In practical applications, we can't sum infinite terms; we have to truncate (cut off) the polynomial at a certain degree $n$. The leftover part is the remainder error, $R_n(x) = f(x) - P_n(x)$. We use Taylor's Inequality to find the exact maximum upper bound of this error margin:"}
        {"$$\\left| R_n(x) \\right| \\leq \\frac{M}{(n+1)!} \\left| x - a \\right|^{n+1}$$"}
        {"Here, $M$ represents the maximum absolute value achieved by the $(n+1)$-th derivative within the tracking region range."}
      </p>
    </section>
  );
}

function QuizMcq176() {
  return (
    <section className="mcq-section" id="quiz-176">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 17.6"}</span>
        <h2 className="mcq-section-title">{"Error Bounder Assessments"}</h2>
      </div>
      <div className="mcq-card" data-section="taylor-error" data-q="16" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"16"}</div>
          <div className="mcq-q-text">{"What does the remainder value $R_n(x)$ explicitly measure in practical computation drills?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The speed index required to compute your polynomial terms."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The exact error discrepancy difference between the true function value and your truncated polynomial approximation."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The coordinate value location where the function hits zero."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"The remainder captures the leftover portion of the infinite sum, which represents the numerical error introduced by truncating your polynomial early."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="taylor-error" data-q="17" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"17"}</div>
          <div className="mcq-q-text">{"How does moving further away from your center point $a$ impact your remainder error bound value?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The error bound increases because the term $|x-a|^{n+1}$ grows larger."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The error bound shrinks down systematically toward zero values."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The error bound remains completely locked at a constant value profile."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"Taylor approximations are local. As you move away from the center point $a$, the distance term $|x-a|$ increases, which inflates the maximum potential error bound."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="taylor-error" data-q="18" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"18"}</div>
          <div className="mcq-q-text">{"What role does the constant value $M$ play inside the Taylor inequality formula layout?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"It acts as the total number of polynomial terms you intend to keep."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"It tracks the location of the polynomial's root coordinates."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"It sets an upper limit on the absolute value of the next derivative, $(n+1)$, across your active tracking window."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"$M$ is a safety ceiling that bounds the worst-case size of the $(n+1)$-th derivative term inside your target interval."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS177() {
  return (
    <section className="section" id="s177">
      <div className="sec-badge">{"Section 17.7"}</div>
      <h2 className="sec-title">{"Applied Computational Engineering Workflows"}</h2>
      <p>
        {"In engineering contexts, Taylor series simplify complex physics equations. For instance, dropping everything after the linear term in a sine expansion gives us the small-angle approximation: $\\sin(x) \\approx x$. Additionally, they let us evaluate non-elementary integrals (like $\\int e^{-x^2} dx$) by converting the integrand into its polynomial series format and integrating term-by-term instead."}
      </p>
    </section>
  );
}

function QuizMcq177() {
  return (
    <section className="mcq-section" id="quiz-177">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 17.7"}</span>
        <h2 className="mcq-section-title">{"Engineering Workflow Drills"}</h2>
      </div>
      <div className="mcq-card" data-section="taylor-engineering" data-q="19" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"19"}</div>
          <div className="mcq-q-text">{"What popular engineering approximation is derived by truncating the Maclaurin series for $\\sin(x)$ immediately after its first non-zero term?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"$\\sin(x) \\approx 1$"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"$\\sin(x) \\approx x$ (The Small-Angle Approximation)"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"$\\sin(x) \\approx x - \\frac{x^3}{6}$"}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"Keeping only the first term of sine's Maclaurin series yields $\\sin(x) \\approx x$, which simplifies pendulum and orbital mechanics calculations when angles are close to zero."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="taylor-engineering" data-q="20" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"20"}</div>
          <div className="mcq-q-text">{"How do computational systems evaluate complex non-elementary integrals like $\\int_{0}^{1} \\sin(x^2) \\, dx$ using series?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"They substitute $x^2$ into sine's standard Maclaurin series, and then integrate that polynomial term-by-term."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"They solve the expression using integration-by-parts iterations."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"They swap the integration boundaries with radius of convergence limits."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"Since $\\sin(x^2)$ has no analytical antiderivative, converting it to a polynomial series lets you integrate it term-by-term using the Power Rule."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="taylor-engineering" data-q="21" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"21"}</div>
          <div className="mcq-q-text">{"When evaluating an alternating series approximation, what is the fastest way to bound the maximum error of your truncation step?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"Sum up the remaining infinite terms using a geometric formula."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"Compute the value of the first term you kept in your sum."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The Alternating Series Estimation Theorem states the error is strictly bounded by the absolute value of the very first discarded term."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"For convergent alternating series, your error margin is always smaller than the absolute value of the first term you left out."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionSummary() {
  return (
    <section className="section summary-box">
      <h2 className="summary-title">Taylor Series Operational Checklist</h2>
      <ul className="summary-list">
        <li>{"Construct expansions using higher derivatives scaled by matching factorials ($n!$)"}</li>
        <li>{"Simplify calculations at the origin ($a=0$) using standard Maclaurin template conversions."}</li>
        <li>{"Verify valid calculation zones by running a Ratio Test to find the radius of convergence $R$."}</li>
        <li>{"Bound your truncation errors using Taylor's inequality remainder checkpoints."}</li>
      </ul>
    </section>
  );
}

// ==========================================
// CENTRAL ROUTER ROUTING CONTAINER
// ==========================================

function TaylorSeriesGuide({ section }) {
  if (section === 2) {
    return (
      <StudyGuideShell
        guideClass="partial-derivatives-guide"
        title="Taylor Series: Applications (Part 2)"
      >
        <GuideSidebarPart2 />
        <main className="main">
          <GuideHeaderPart2 />
          <TableOfContentsPart2 />
          <Divider />
          <SectionS174 />
          <QuizMcq174 />
          <Divider />
          <SectionS175 />
          <QuizMcq175 />
          <Divider />
          <SectionS176 />
          <QuizMcq176 />
          <Divider />
          <SectionS177 />
          <QuizMcq177 />
          <Divider />
          <SectionSummary />
        </main>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Taylor Series: Foundations (Part 1)"
    >
      <GuideSidebarPart1 />
      <main className="main">
        <GuideHeaderPart1 />
        <TableOfContentsPart1 />
        <Divider />
        <OpeningNote />
        <Divider />
        <SectionS171 />
        <QuizMcq171 />
        <Divider />
        <SectionS172 />
        <QuizMcq172 />
        <Divider />
        <SectionS173 />
        <QuizMcq173 />
        <Divider />
        <section id="summary1" className="section">
          <div className="sec-badge">{"Reference"}</div>
          <h2 className="sec-title">{"Part 1 Foundations Complete"}</h2>
          <p>
            {"Continue to "}
            <Link to="/taylor-series/2" style={{ color: "var(--gold)", fontWeight: 600 }}>
              {"Part 2: Convergence, Error Bounds & Applications"}
            </Link>
            {"."}
          </p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default TaylorSeriesGuide;