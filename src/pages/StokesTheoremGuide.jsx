import { Link } from "react-router-dom";
import StudyGuideShell from "./StudyGuideShell";
import "./PartialDerivativesGuide.css";

function Divider() {
  return <hr className="divider" />;
}

function GuideSidebarPart1() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">Stokes&apos; Theorem · Part 1</div>
      </div>
      <div className="sb-group">Sections</div>
      <a className="sb-link" href="#st-1">Circulation Intuition</a>
      <a className="sb-link" href="#st-2">Oriented Surfaces</a>
      <a className="sb-link" href="#st-3">The Stokes Statement</a>
      <div className="sb-group">Practice</div>
      <a className="sb-link" href="#st-quiz1">Practice Quiz</a>
    </nav>
  );
}

function GuideSidebarPart2() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">Stokes&apos; Theorem · Part 2</div>
      </div>
      <div className="sb-group">Sections</div>
      <a className="sb-link" href="#st-4">Choosing Surfaces</a>
      <a className="sb-link" href="#st-5">Right-Hand Orientation</a>
      <a className="sb-link" href="#st-6">Workflow Checklist</a>
      <div className="sb-group">Practice</div>
      <a className="sb-link" href="#st-quiz2">Practice Quiz</a>
    </nav>
  );
}

function GuideHeaderPart1() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus Study Guide · Part 1 of 2</div>
      <h1 className="ch-title">Stokes&apos; Theorem</h1>
      <p className="ch-sub">Circulation, Oriented Surfaces &amp; The Fundamental Statement</p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function GuideHeaderPart2() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus Study Guide · Part 2 of 2</div>
      <h1 className="ch-title">Stokes&apos; Theorem</h1>
      <p className="ch-sub">Surface Choice, Orientation &amp; Application Workflows</p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContentsPart1() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 1 of 2</div>
      <div className="toc-grid">
        <a className="toc-a" href="#st-1">Circulation Intuition</a>
        <a className="toc-a" href="#st-2">Oriented Surfaces</a>
        <a className="toc-a" href="#st-3">The Stokes Statement</a>
        <a className="toc-a" href="#st-quiz1">Practice Quiz</a>
      </div>
    </nav>
  );
}

function TableOfContentsPart2() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 2 of 2</div>
      <div className="toc-grid">
        <a className="toc-a" href="#st-4">Choosing Surfaces</a>
        <a className="toc-a" href="#st-5">Right-Hand Orientation</a>
        <a className="toc-a" href="#st-6">Workflow Checklist</a>
        <a className="toc-a" href="#st-quiz2">Practice Quiz</a>
      </div>
    </nav>
  );
}

function OpeningNote() {
  return (
    <section className="section" id="st-open">
      <div className="sec-badge">Overview</div>
      <h2 className="sec-title">Why Stokes&apos; Theorem Matters</h2>
      <p>
        {"Stokes' Theorem is the circulation counterpart of the Divergence Theorem. "}
        {"It converts a surface integral of curl into a line integral around the boundary curve — "}
        {"or the other way around — so engineers can trade awkward surface calculations for simpler loop integrals."}
      </p>
      <div className="box note">
        <p>
          {"Prerequisite: curl $\\nabla \\times \\mathbf{F}$ and oriented surfaces. "}
          {"Review "}
          <Link to="/divergence-curl/1" style={{ color: "var(--gold)", fontWeight: 600 }}>
            Divergence &amp; Curl
          </Link>
          {" if those operators are still fuzzy."}
        </p>
      </div>
    </section>
  );
}

function SectionST1() {
  return (
    <section className="section" id="st-1">
      <div className="sec-badge">Section 18.1</div>
      <h2 className="sec-title">Circulation Intuition</h2>
      <p>
        {"Circulation measures the net work a vector field does dragging a particle once around a closed curve $C$:"}
      </p>
      <div className="fml">{"$$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$$"}</div>
      <p>
        {"If $\\mathbf{F}$ represents a force or a fluid velocity, positive circulation means the field tends to push "}
        {"along the orientation of $C$ more than against it — think of swirling water around a drain."}
      </p>
    </section>
  );
}

function SectionST2() {
  return (
    <section className="section" id="st-2">
      <div className="sec-badge">Section 18.2</div>
      <h2 className="sec-title">Oriented Surfaces and Boundary Curves</h2>
      <p>
        {"An oriented surface $S$ carries a consistent unit normal $\\mathbf{n}$. Its boundary $\\partial S$ inherits "}
        {"an orientation from that normal via the right-hand rule: if your thumb points in the $\\mathbf{n}$ direction, "}
        {"your fingers curl along the positive direction of $\\partial S$."}
      </p>
      <div className="box def">
        <div className="box-lbl">Compatibility rule</div>
        <p>
          {"Stokes' Theorem requires that $S$ and $\\partial S$ are compatibly oriented. Flipping the normal flips "}
          {"the boundary direction and changes the sign of both sides of the identity."}
        </p>
      </div>
    </section>
  );
}

function SectionST3() {
  return (
    <section className="section" id="st-3">
      <div className="sec-badge">Section 18.3</div>
      <h2 className="sec-title">The Stokes Statement</h2>
      <p>
        {"If $\\mathbf{F}$ is a smooth vector field on an oriented surface $S$ with compatibly oriented boundary $\\partial S$, then:"}
      </p>
      <div className="fml">
        {"$$\\oint_{\\partial S} \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$$"}
      </div>
      <p>
        {"Left side: circulation around the rim. Right side: total curl flux through any surface capped by that rim. "}
        {"Any two oriented surfaces sharing the same oriented boundary give the same circulation."}
      </p>
    </section>
  );
}

function QuizPart1() {
  return (
    <section className="mcq-section" id="st-quiz1">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">Quiz · Part 1</span>
        <h2 className="mcq-section-title">Stokes Foundations</h2>
        <div className="mcq-score-strip">
          <span className="score-lbl">Score</span>
          <span className="score-val" id="scorestokes-f">0 / 3</span>
        </div>
      </div>
      <div className="mcq-card" data-section="stokes-f" data-q="1" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">1</div>
          <div className="mcq-q-text">
            {"What geometric configuration is required to apply Stokes' Theorem?"}
          </div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">A</span>{"A closed solid volume with no boundary curve."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">B</span>{"An oriented open surface bounded by a closed curve $\\partial S$."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">C</span>{"An unbounded plane with no orientation."}</div>
        </div>
        <button type="button" className="mcq-reveal-btn">Reveal Answer</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">Correct Option: B</span>
          <div className="mcq-explanation">
            {"Stokes links curl flux through an open surface to circulation on its closed perimeter."}
          </div>
        </div>
      </div>
      <div className="mcq-card" data-section="stokes-f" data-q="2" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">2</div>
          <div className="mcq-q-text">
            {"Which operator appears on the surface-integral side of Stokes' Theorem?"}
          </div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">A</span>{"Curl $\\nabla \\times \\mathbf{F}$"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">B</span>{"Divergence $\\nabla \\cdot \\mathbf{F}$"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">C</span>{"Gradient $\\nabla f$"}</div>
        </div>
        <button type="button" className="mcq-reveal-btn">Reveal Answer</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">Correct Option: A</span>
          <div className="mcq-explanation">
            {"The identity is $\\oint \\mathbf{F}\\cdot d\\mathbf{r} = \\iint (\\nabla \\times \\mathbf{F})\\cdot d\\mathbf{S}$."}
          </div>
        </div>
      </div>
      <div className="mcq-card" data-section="stokes-f" data-q="3" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">3</div>
          <div className="mcq-q-text">
            {"How is the positive orientation of $\\partial S$ chosen relative to $S$?"}
          </div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">A</span>{"Always counterclockwise in the $xy$-plane, ignoring the normal."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">B</span>{"Along the shortest path on the boundary."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">C</span>{"By the right-hand rule relative to the surface normal."}</div>
        </div>
        <button type="button" className="mcq-reveal-btn">Reveal Answer</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">Correct Option: C</span>
          <div className="mcq-explanation">
            {"Compatible orientation uses the right-hand rule tying $\\mathbf{n}$ to the traversal of $\\partial S$."}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionST4() {
  return (
    <section className="section" id="st-4">
      <div className="sec-badge">Section 18.4</div>
      <h2 className="sec-title">Choosing a Convenient Surface</h2>
      <p>
        {"Because any oriented surface with the same oriented boundary works, you may replace a complicated cap "}
        {"with a flat disk, a planar polygon, or another surface where $\\nabla \\times \\mathbf{F}$ is easier to integrate."}
      </p>
      <div className="box exm">
        <div className="box-lbl">Strategy</div>
        <p>
          {"If $C$ is a circle in a plane and $\\nabla \\times \\mathbf{F}$ is constant or simple on that plane, "}
          {"integrate over the flat disk bounded by $C$ instead of a bulging hemisphere."}
        </p>
      </div>
    </section>
  );
}

function SectionST5() {
  return (
    <section className="section" id="st-5">
      <div className="sec-badge">Section 18.5</div>
      <h2 className="sec-title">Right-Hand Orientation Checks</h2>
      <p>
        {"Before computing, fix $\\mathbf{n}$ and walk $\\partial S$ so the surface stays on your left "}
        {"(equivalently: thumb = normal, fingers = boundary direction). Inconsistent orientation is the most common sign error."}
      </p>
    </section>
  );
}

function SectionST6() {
  return (
    <section className="section" id="st-6">
      <div className="sec-badge">Section 18.6</div>
      <h2 className="sec-title">Operational Workflow</h2>
      <ol className="steps">
        <li>{"Identify the closed curve $C$ (or surface $S$) you are given."}</li>
        <li>{"Decide whether the line integral or the curl-flux integral is easier."}</li>
        <li>{"Choose a convenient oriented surface (or boundary) with matching orientation."}</li>
        <li>{"Compute $\\nabla \\times \\mathbf{F}$ if using the surface side; parametrize $C$ if using the line side."}</li>
        <li>{"Evaluate and interpret the circulation."}</li>
      </ol>
      <p>
        {"Need drills across topics? Jump to the "}
        <Link to="/practice" style={{ color: "var(--gold)", fontWeight: 600 }}>
          Practice Section
        </Link>
        {"."}
      </p>
    </section>
  );
}

function QuizPart2() {
  return (
    <section className="mcq-section" id="st-quiz2">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">Quiz · Part 2</span>
        <h2 className="mcq-section-title">Stokes Applications</h2>
        <div className="mcq-score-strip">
          <span className="score-lbl">Score</span>
          <span className="score-val" id="scorestokes-a">0 / 3</span>
        </div>
      </div>
      <div className="mcq-card" data-section="stokes-a" data-q="1" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">1</div>
          <div className="mcq-q-text">
            {"When a target surface is awkwardly shaped, how can Stokes still help?"}
          </div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">A</span>{"Replace the surface integral with a line integral on the shared perimeter (or pick a simpler surface with the same rim)."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">B</span>{"Drop all nonlinear terms and pretend the surface is flat without checking orientation."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">C</span>{"Convert everything to a scalar triple integral over a solid volume."}</div>
        </div>
        <button type="button" className="mcq-reveal-btn">Reveal Answer</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">Correct Option: A</span>
          <div className="mcq-explanation">
            {"Surfaces sharing an oriented boundary give identical circulation, so you may switch to an easier geometry."}
          </div>
        </div>
      </div>
      <div className="mcq-card" data-section="stokes-a" data-q="2" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">2</div>
          <div className="mcq-q-text">
            {"If you reverse the surface normal, what happens to both sides of Stokes' identity?"}
          </div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">A</span>{"Only the surface integral changes sign."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">B</span>{"Nothing — orientation is optional."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">C</span>{"Both sides change sign so equality is preserved when orientation stays consistent."}</div>
        </div>
        <button type="button" className="mcq-reveal-btn">Reveal Answer</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">Correct Option: C</span>
          <div className="mcq-explanation">
            {"Flipping $\\mathbf{n}$ also flips $\\partial S$; both integrals pick up a minus sign."}
          </div>
        </div>
      </div>
      <div className="mcq-card" data-section="stokes-a" data-q="3" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">3</div>
          <div className="mcq-q-text">
            {"Stokes' Theorem is the natural bridge between which two ideas?"}
          </div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">A</span>{"Divergence and volume flux only."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">B</span>{"Boundary circulation and surface curl flux."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">C</span>{"Partial derivatives and Lagrange multipliers."}</div>
        </div>
        <button type="button" className="mcq-reveal-btn">Reveal Answer</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">Correct Option: B</span>
          <div className="mcq-explanation">
            {"The theorem equates $\\oint_{\\partial S}\\mathbf{F}\\cdot d\\mathbf{r}$ with $\\iint_S(\\nabla\\times\\mathbf{F})\\cdot d\\mathbf{S}$."}
          </div>
        </div>
      </div>
    </section>
  );
}

function Part1Complete() {
  return (
    <section id="summary1" className="section">
      <div className="sec-badge">Reference</div>
      <h2 className="sec-title">Part 1 Complete</h2>
      <p>
        {"Continue to "}
        <Link to="/stokes-theorem/2" style={{ color: "var(--gold)", fontWeight: 600 }}>
          Part 2: Applications &amp; Workflow Drills
        </Link>
        {" for surface selection strategies and more MCQs."}
      </p>
    </section>
  );
}

function StokesTheoremGuide({ section = 1 }) {
  if (section === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide">
        <GuideSidebarPart2 />
        <main className="main">
          <GuideHeaderPart2 />
          <TableOfContentsPart2 />
          <Divider />
          <SectionST4 />
          <Divider />
          <SectionST5 />
          <Divider />
          <SectionST6 />
          <Divider />
          <QuizPart2 />
        </main>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide">
      <GuideSidebarPart1 />
      <main className="main">
        <GuideHeaderPart1 />
        <TableOfContentsPart1 />
        <OpeningNote />
        <Divider />
        <SectionST1 />
        <Divider />
        <SectionST2 />
        <Divider />
        <SectionST3 />
        <Divider />
        <QuizPart1 />
        <Part1Complete />
      </main>
    </StudyGuideShell>
  );
}

export default StokesTheoremGuide;
