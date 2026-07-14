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
        {"This guide establishes the foundational mechanics of Divergence and Curl in Vector Calculus. "}
        {"By leveraging partial derivatives via the Del operator, we can quantify the expansion, contraction, and rotational behavior of continuous vector fields. "}
        {"These operations serve as the structural backbone for classical electrodynamics, fluid mechanics, and atmospheric simulation modeling."}
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
        <div className="sb-title">Divergence &amp; Curl · Part 1</div>
      </div>
      <div className="sb-group">Sections</div>
      <a className="sb-link" href="#s161">Vector Fields</a>
      <a className="sb-link" href="#quiz-161">Quiz 16.1</a>
      <a className="sb-link" href="#s162">The Divergence Operator</a>
      <a className="sb-link" href="#quiz-162">Quiz 16.2</a>
      <a className="sb-link" href="#s163">The Curl Operator</a>
      <a className="sb-link" href="#quiz-163">Quiz 16.3</a>
    </nav>
  );
}

function GuideHeaderPart1() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus Study Guide · Part 1 of 2</div>
      <h1 className="ch-title">Divergence &amp; Curl</h1>
      <p className="ch-sub">Vector Fields, Divergence &amp; Curl Operators</p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContentsPart1() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 1 of 2</div>
      <div className="toc-grid">
        <a className="toc-a" href="#s161">Vector Fields</a>
        <a className="toc-a" href="#s162">The Divergence Operator</a>
        <a className="toc-a" href="#s163">The Curl Operator</a>
        <a className="toc-a" href="#quiz-161">Practice Quizzes</a>
      </div>
    </nav>
  );
}

function SectionS161() {
  return (
    <section className="section" id="s161">
      <div className="sec-badge">{"Section 16.1"}</div>
      <h2 className="sec-title">{"Conceptual Vector Fields Space"}</h2>
      <p>
        {"To map fluid velocities, gravitational pull, or magnetic forces across space, we build a continuous vector field $\\mathbf{F}(x, y, z)$. "}
        {"A basic two-dimensional configuration assigns a distinct vector output containing both scale magnitude and directional heading to every coordinate pair index."}
        {"To trace how lines move through this domain, we analyze components $P$, $Q$, and $R$. "}
        {"By evaluating field continuity and differentiability, we map out the vector streams that govern particle trajectories through space."}
      </p>
    </section>
  );
}

function QuizMcq161() {
  return (
    <section className="mcq-section" id="quiz-161">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 16.1"}</span>
        <h2 className="mcq-section-title">{"Vector Field Assessments"}</h2>
      </div>
      <div className="mcq-card" data-section="field-concept" data-q="1" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"1"}</div>
          <div className="mcq-q-text">{"What spatial structural element is output by a standard 3D vector field expression $\\mathbf{F}(x,y,z)$ at any single coordinate point?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"A uniform scalar temperature measurement value."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"A set of intersecting scalar plane curves."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"A single vector arrow containing directional heading and magnitude length parameters."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"By definition, a multi-variable vector field maps spatial coordinates to matching vector quantities rather than isolated scalar values."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="field-concept" data-q="2" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"2"}</div>
          <div className="mcq-q-text">{"If every arrow in a vector field points directly away from the origin and grows longer as distance increases, how is this field categorized geometrically?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"A uniform rotational vortex field layout."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"A radial expansion field mapping outward flow lines."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"A constant parallel translation vector deck."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"Vectors pointing straight out from the coordinate center that scale with distance form a classic radial expansion profile."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="field-concept" data-q="3" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"3"}</div>
          <div className="mcq-q-text">{"Which mathematical component inside $\\mathbf{F}(x,y) = P(x,y)\\mathbf{i} + Q(x,y)\\mathbf{j}$ determines the vertical vertical scalar velocity component?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The scalar component function $Q(x,y)$ paired with the $\\mathbf{j}$ unit vector axis."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The horizontal parameter function $P(x,y)$ mapping along $\\mathbf{i}$."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The cross gradient magnitude modulus."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"The standard component configuration maps the $Q$ scalar function to the vertical vector component along the $\\mathbf{j}$ basis axis."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS162() {
  return (
    <section className="section" id="s162">
      <div className="sec-badge">{"Section 16.2"}</div>
      <h2 className="sec-title">{"The Divergence Operator"}</h2>
      <p>
        {"Divergence scales a vector field down to a scalar rate. "}
        {"Each component derivative tracks expansion or compression along its respective cardinal path axis, adding them together via a dot product with the vector differential Del operator $\\nabla$."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"Definition Formula — Vector Divergence"}</div>
        {"The divergence of a differentiable vector field $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}$ is given by:"}
        <div className="fml">
          {"$$\\text{div } \\mathbf{F} = \\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$$"}
        </div>
        {"Expanded definition interpretation: It measures the net outward flux of a vector field per unit volume about a point local coordinate point position."}
      </div>
    </section>
  );
}

function QuizMcq162() {
  return (
    <section className="mcq-section" id="quiz-162">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 16.2"}</span>
        <h2 className="mcq-section-title">{"Divergence Structure Verifications"}</h2>
      </div>
      <div className="mcq-card" data-section="div-formula" data-q="4" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"4"}</div>
          <div className="mcq-q-text">{"What mathematical output variant type is yielded when executing the divergence operation onto a vector field model?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"A pure multi-variable scalar function field tracking local source density values."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"A brand new three-dimensional perpendicular coordinate vector matrix layer."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"An isolated single angle measurement coordinate value."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"Divergence uses a dot product format ($\\nabla \\cdot \\mathbf{F}$), which reduces multi-variable vector groupings down into a pure scalar fields layout."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="div-formula" data-q="5" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"5"}</div>
          <div className="mcq-q-text">{"Evaluate the explicit scalar value for $\\nabla \\cdot \\mathbf{F}$ if the vector field is defined as $\\mathbf{F} = 3x^2\\mathbf{i} + 2y^2\\mathbf{j}$."}</div>
        </div>
        <div className="mcq-options">
          {/* FIXED: escaped \\mathbf{j} below to prevent bad escape sequence string token errors */}
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"$6x\\mathbf{i} + 4y\\\\mathbf{j}$"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"$6x + 4y$"}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"$6 + 4 = 10$"}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"Differentiating $P = 3x^2$ with respect to $x$ yields $6x$, and differentiating $Q = 2y^2$ with respect to $y$ yields $4y$. Adding them yields the scalar function $6x + 4y$."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="div-formula" data-q="6" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"6"}</div>
          <div className="mcq-q-text">{"What physical condition profile is indicated if $\\nabla \\cdot \\mathbf{F} < 0$ systematically within a local region area?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"Fluid is expanding outward into an empty void stream layout."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"Fluid velocities have frozen completely into a static vector deck."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"Fluid is condensing or compressing inward toward a structural density sink zone."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"Negative divergence scores state that more flux volume enters a micro region than leaves it, identifying a local compression sink point."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS163() {
  return (
    <section className="section" id="s163">
      <div className="sec-badge">{"Section 16.3"}</div>
      <h2 className="sec-title">{"The Curl Operator"}</h2>
      <p>
        {"A Curl calculation creates a brand new vector field tracking local spin. "}
        {"It calculates spatial multi-axis differences via a cross-product matrix mapping, where the final direction arrow defines the axis of maximum rotation using right-hand rule coordinates."}
      </p>
      <div className="box def">
        <div className="box-lbl">{"The Curl Cross-Product Matrix Layout"}</div>
        <div className="fml">
          {"$$\\text{curl } \\mathbf{F} = \\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ P & Q & R \\end{vmatrix}$$"}
        </div>
      </div>
    </section>
  );
}

function QuizMcq163() {
  return (
    <section className="mcq-section" id="quiz-163">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 16.3"}</span>
        <h2 className="mcq-section-title">{"Curl Reduction Drills"}</h2>
      </div>
      <div className="mcq-card" data-section="curl-core" data-q="7" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"7"}</div>
          <div className="mcq-q-text">{"What configuration structure converts general vector parameters into the standard curl output format expression?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"Computing the cross product matrix of Del with the field vector ($\\nabla \\times \\mathbf{F}$)."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"Computing the isolated triple dot scalar product alignment profile."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"Dividing component arrays uniformly by radial radius variables."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"By explicit definition framework, curl maps local structural vortex spinning by computing cross products using the Del differential vector layer."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="curl-core" data-q="8" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"8"}</div>
          <div className="mcq-q-text">{"Why does curl produce a full vector entity output instead of an isolated scalar value score map?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"Because spatial area limits force values to remain aligned along flat lines."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"To explicitly track the directional axis orientation line about which spatial rotation occurs."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"Because curl metrics ignore partial derivatives entirely during analysis tasks."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"Microscopic spin possesses both rotational intensity scale speed and a perpendicular physical direction line axis that demands a complete vector component model."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="curl-core" data-q="9" data-answer="C">
        {/* FIXED: Restored missing mcq-q-row layout wrapping elements here to prevent premature component breakdown */}
        <div className="mcq-q-row">
          <div className="mcq-num">{"9"}</div>
          <div className="mcq-q-text">{"If a vector field has zero curl everywhere inside a domain ($\\nabla \\times \\mathbf{F} = \\mathbf{0}$), what does this reveal about its physical property parameters?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The field lines are expanding outward symmetrically at maximum speed parameters."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The field vectors trace closed loop circles indefinitely across coordinate zones."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The vector field is irrotational, meaning a micro paddlewheel dropped inside will not experience spin rotation."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"Zero curl metrics identify irrotational vector geometries, meaning the field exerts no local curling or spinning torque profiles onto point objects inside."}</div>
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
        <div className="sb-title">Divergence &amp; Curl · Part 2</div>
      </div>
      <div className="sb-group">Sections</div>
      <a className="sb-link" href="#s164">Physical Mechanics Mapping</a>
      <a className="sb-link" href="#quiz-164">Quiz 16.4</a>
      <a className="sb-link" href="#s165">Core Vector Identities</a>
      <a className="sb-link" href="#quiz-165">Quiz 16.5</a>
      <a className="sb-link" href="#s166">Divergence Theorem</a>
      <a className="sb-link" href="#quiz-166">Quiz 16.6</a>
      <a className="sb-link" href="#s167">Stokes Framework</a>
      <a className="sb-link" href="#quiz-167">Quiz 16.7</a>
    </nav>
  );
}

function GuideHeaderPart2() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus Study Guide · Part 2 of 2</div>
      <h1 className="ch-title">Divergence &amp; Curl</h1>
      <p className="ch-sub">Identities, Divergence Theorem &amp; Stokes Connections</p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContentsPart2() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 2 of 2</div>
      <div className="toc-grid">
        <a className="toc-a" href="#s164">Physical Mechanics Mapping</a>
        <a className="toc-a" href="#s165">Core Vector Identities</a>
        <a className="toc-a" href="#s166">Divergence Theorem</a>
        <a className="toc-a" href="#s167">Stokes Framework</a>
      </div>
    </nav>
  );
}

function SectionS164() {
  return (
    <section className="section" id="s164">
      <div className="sec-badge">{"Section 16.4"}</div>
      <h2 className="sec-title">{"Physical Vector Flow Mechanics Mapping"}</h2>
      <p>
        {"Instead of dealing with vector math as abstract formulas, we apply these concepts directly to physical systems. "}
        {"For instance, checking divergence in a fluid model shows if material is pooling or expanding, while tracking curl reveals if eddies or vortex lines are forming inside the current flow."}
      </p>
      <div className="box ex">
        <div className="box-lbl">{"Core Standard Physical Catalog"}</div>
        <ul className="summary-list" style={{ gap: "10px", padding: "10px" }}>
          <li>{"Incompressible Fluid Matrix: $\\nabla \\cdot \\mathbf{v} = 0$ (Constant density tracking conservation)"}</li>
          <li>{"Irrotational Force Mechanics: $\\nabla \\times \\mathbf{F} = \\mathbf{0}$ (Path-independent conservative system)"}</li>
          <li>{"Solenoidal Magnetic Properties: $\\nabla \\cdot \\mathbf{B} = 0$ (Absence of isolated magnetic monopole sources)"}</li>
        </ul>
      </div>
    </section>
  );
}

function QuizMcq164() {
  return (
    <section className="mcq-section" id="quiz-164">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 16.4"}</span>
        <h2 className="mcq-section-title">{"Physical Catalog Assessments"}</h2>
      </div>
      <div className="mcq-card" data-section="vector-catalog" data-q="10" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"10"}</div>
          <div className="mcq-q-text">{"Which specific physical condition statement is fully validated when a magnetic field equation matches $\\nabla \\cdot \\mathbf{B} = 0$ perfectly?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"There are no isolated magnetic monopoles; all lines form complete closed continuous loops."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The magnetic field scales to infinity along linear trajectories."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The electrical current has completely stopped moving through the system loop."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"Zero divergence inside a magnetic system ($\\nabla \\cdot \\mathbf{B} = 0$) means there are no individual point sources, which confirms that magnetic monopoles do not exist in classical electromagnetic theory."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="vector-catalog" data-q="11" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"11"}</div>
          <div className="mcq-q-text">{"Determine the divergence metric status for an incompressible fluid velocity field $\\mathbf{v}$ passing through a closed pipe section."}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The divergence rises exponentially with linear velocity scale changes."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The divergence scales purely to negative infinity values uniformly."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The divergence evaluates to exactly zero ($\\nabla \\cdot \\mathbf{v} = 0$) because mass is conserved."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"Incompressible media maintain stable density properties throughout, meaning their divergence scores remain locked at zero due to conservation laws."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="vector-catalog" data-q="12" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"12"}</div>
          <div className="mcq-q-text">{"What mechanical event happens to a miniature floating paddlewheel dropped into a fluid domain tracking a curl score of $\\nabla \\times \\mathbf{v} \\neq \\mathbf{0}$?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The device moves forward along straight lines without rotating."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The tool spins about its center axis because of local fluid shear torque forces."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The mechanical device dissolves or implodes immediately under pressure parameters."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"A non-zero curl profile proves the presence of localized vortex shear forces, which applies a rotational torque that spins indicator objects placed in the flow."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS165() {
  return (
    <section className="section" id="s165">
      <div className="sec-badge">{"Section 16.5"}</div>
      <h2 className="sec-title">{"Core Differential Operator Vector Identities"}</h2>
      <p>
        {"Vector operations must be evaluated to identify core structural simplification shortcuts. "}
        {"We apply second-order differential combinations to test field properties, proving important standard vector calculus identities like:"}
        {"$$\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$$"}
        {"Solving these second-order structures simplifies multi-variable calculations and verifies that the curl of any smooth vector field contains absolutely no net scalar expansion sources."}
      </p>
    </section>
  );
}

function QuizMcq165() {
  return (
    <section className="mcq-section" id="quiz-165">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 16.5"}</span>
        <h2 className="mcq-section-title">{"Vector Identity Verifications"}</h2>
      </div>
      <div className="mcq-card" data-section="vector-identity" data-q="13" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"13"}</div>
          <div className="mcq-q-text">{"What is the absolute evaluation score for computing the divergence of the curl of any twice continuously differentiable 3D vector field ($\\nabla \\cdot (\\nabla \\times \\mathbf{F})$)?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"An infinite vector sequence matrix."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The gradient of the divergence scalar field."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"Exactly zero scalar ($0$) across all differentiable fields."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"By Clairaut's Theorem, mixed partial derivatives cancel out during expansion, which forces the divergence of any curl expression to evaluate to exactly zero."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="vector-identity" data-q="14" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"14"}</div>
          <div className="mcq-q-text">{"Evaluate the identity outcome for computing the curl of a standard scalar gradient field layout, expressed mathematically as $\\nabla \\times (\\nabla f)$."}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The zero vector $\\mathbf{0}$ (Conservative fields contain zero loop rotation)"}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The Laplacian scalar function field $\\nabla^2 f$."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The direct initial scalar value function $f$ itself."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"Gradient fields are conservative, meaning their lines expand without looping back on themselves. This guarantees that their curl calculation yields the zero vector $\\mathbf{0}$."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="vector-identity" data-q="15" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"15"}</div>
          <div className="mcq-q-text">{"What operator definition is generated when evaluating the dot product identity of Del with itself, written out as $\\nabla \\cdot \\nabla$?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The isolated cross rotational vector coordinate tracking array."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The Laplacian differential operator, denoted as $\\nabla^2$ or $\\Delta$."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"A flat transformation matrix scale value line indicator."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"The dot product of Del with itself sums the second partial derivatives ($\\frac{\\partial^2}{\\partial x^2} + \\frac{\\partial^2}{\\partial y^2} + \\frac{\\partial^2}{\\partial z^2}$), which defines the Laplacian operator $\\nabla^2$."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS166() {
  return (
    <section className="section" id="s166">
      <div className="sec-badge">{"Section 16.6"}</div>
      <h2 className="sec-title">{"The Divergence Theorem Spatial Boundary"}</h2>
      <p>
        {"In structural field applications, we often analyze flux passing through enclosing surfaces. "}
        {"Instead of calculating complex boundary surface vector integrations directly, the Divergence Theorem lets us evaluate the total expansion source density across the enclosed volume domain instead: "}
        {"$$\\iint_{\\partial V} \\mathbf{F} \\cdot d\\mathbf{S} = \\iiint_V (\\nabla \\cdot \\mathbf{F}) \\, dV$$"}
        {"Here, $\\partial V$ represents the closed bounding surface skin, while the volume integration sums all internal fluid expansion sources."}
      </p>
    </section>
  );
}

function QuizMcq166() {
  return (
    <section className="mcq-section" id="quiz-166">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 16.6"}</span>
        <h2 className="mcq-section-title">{"Divergence Theorem Assessments"}</h2>
      </div>
      <div className="mcq-card" data-section="div-theorem" data-q="16" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"16"}</div>
          <div className="mcq-q-text">{"What geometric boundary condition must be met to apply the Divergence Theorem to a surface integration?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The integration pathway surface layer must remain perfectly flat."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The surface must be completely closed, trapping a distinct, finite three-dimensional volume inside."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The boundary border curve must intersect the coordinate origin point."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"The Divergence Theorem requires a closed surface skin ($\\partial V$), because it links the total flux crossing that outer boundary directly to the volume trapped inside."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="div-theorem" data-q="17" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"17"}</div>
          <div className="mcq-q-text">{"How does changing the total internal source density generation inside a solid volume region impact the net surface flux passing out through its boundary?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"The net boundary flux increases proportionally because internal source changes scale the surface output directly."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"The surface outward flux stays completely locked at zero regardless of internal changes."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"The boundary flux flips orientation directions chaotically across tracking axes."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"The theorem equates internal divergence sources directly to outward surface flux, meaning any increase in internal generation pushes more net flux out across the boundary skin."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="div-theorem" data-q="18" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"18"}</div>
          <div className="mcq-q-text">{"What role does the unit normal vector $\\mathbf{n}$ perform inside the classical surface flux calculation step expression $\\iint \\mathbf{F} \\cdot \\mathbf{n} \\, dS$?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"It tracks the linear distance to the origin point."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"It measures the total surface area parameter value scale directly."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"It establishes the outward perpendicular heading direction for checking field line escape angles."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"The normal vector $\\mathbf{n}$ stands perpendicular to the surface skin, isolating the portion of the vector field pointing directly out across the boundary."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionS167() {
  return (
    <section className="section" id="s167">
      <div className="sec-badge">{"Section 16.7"}</div>
      <h2 className="sec-title">{"Stokes Conservation Framework"}</h2>
      <p>
        {"In rotational mechanics contexts, we link surface spin metrics directly to path circulation paths. "}
        {"Stokes' Theorem allows us to calculate the total curl passing through an open surface by tracking vector work values around its enclosing boundary line loop path instead: "}
        {"$$\\oint_{\\partial S} \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$$"}
        {"This allows engineers to analyze complex vortex fields by monitoring line integration tracks along the outer boundary circuit."}
      </p>
    </section>
  );
}

function QuizMcq167() {
  return (
    <section className="mcq-section" id="quiz-167">
      <div className="mcq-section-head">
        <span className="mcq-section-badge">{"Quiz Section 16.7"}</span>
        <h2 className="mcq-section-title">{"Stokes Workflow Drills"}</h2>
      </div>
      <div className="mcq-card" data-section="stokes-theorem" data-q="19" data-answer="B">
        <div className="mcq-q-row">
          <div className="mcq-num">{"19"}</div>
          <div className="mcq-q-text">{"What geometric configuration asset matches the surface parameters required for executing a Stokes Theorem conversion step?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"A completely solid multi-variable mass density block."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"An open surface area bounded by a distinct closed perimeter line loop curve $\\partial S$."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"An infinite un-bounded plane coordinate slice."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: B"}</span>
          <div className="mcq-explanation">{"Stokes' Theorem links the curl passing through an open surface directly to the line integration around its closed outer perimeter loop path."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="stokes-theorem" data-q="20" data-answer="A">
        <div className="mcq-q-row">
          <div className="mcq-num">{"20"}</div>
          <div className="mcq-q-text">{"How do structural calculus systems evaluate complex surface curl values when the target cap surface bends awkwardly through space?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"They substitute the messy surface integration with a simple line integration tracking the shared perimeter loop path instead."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"They drop all non-linear parameter values and treat the surface as flat."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"They swap out the vector expressions with basic one-dimensional scalar integrations."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: A"}</span>
          <div className="mcq-explanation">{"Since the theorem shows that any open surface sharing the same perimeter loop yields identical results, you can skip the awkward surface integration and evaluate the simple boundary loop path instead."}</div>
        </div>
      </div>
      <div className="mcq-card" data-section="stokes-theorem" data-q="21" data-answer="C">
        <div className="mcq-q-row">
          <div className="mcq-num">{"21"}</div>
          <div className="mcq-q-text">{"When evaluating boundary path directions for Stokes conversions, how is the correct tracking orientation determined?"}</div>
        </div>
        <div className="mcq-options">
          <div className="mcq-opt" data-opt="A"><span className="mcq-opt-letter">{"A"}</span>{"By matching vector lengths along the positive vertical axis lines."}</div>
          <div className="mcq-opt" data-opt="B"><span className="mcq-opt-letter">{"B"}</span>{"By selecting the shortest distance route to the nearest coordinate wall."}</div>
          <div className="mcq-opt" data-opt="C"><span className="mcq-opt-letter">{"C"}</span>{"By applying the Right-Hand Rule relative to the surface's normal vector heading direction."}</div>
        </div>
        <button className="mcq-reveal-btn">{"Reveal Answer"}</button>
        <div className="mcq-answer">
          <span className="mcq-correct-badge">{"Correct Option: C"}</span>
          <div className="mcq-explanation">{"The standard orientation conventions link path rotation to the surface normal heading using the Right-Hand Rule, ensuring consistency across vector cross-product math."}</div>
        </div>
      </div>
    </section>
  );
}

function SectionSummary() {
  return (
    <section className="section summary-box">
      <h2 className="summary-title">Vector Operators Operational Checklist</h2>
      <ul className="summary-list">
        <li>{"Construct field mappings using multi-variable components scaled across coordinate bases."}</li>
        <li>{"Simplify outward flux calculations by running divergence dot products with the Del operator."}</li>
        <li>{"Verify rotational micro spin dynamics by evaluating determinant cross-product curl matrices."}</li>
        <li>
          {"Bound your total field metrics using Divergence volume and Stokes circulation loop conversion theorems. "}
          {"For a dedicated walkthrough, open "}
          <Link to="/stokes-theorem/1" style={{ color: "var(--gold)", fontWeight: 600 }}>
            {"Stokes' Theorem"}
          </Link>
          {"."}
        </li>
      </ul>
    </section>
  );
}

// ==========================================
// CENTRAL ROUTER ROUTING CONTAINER
// ==========================================

function DivergenceAndCurlGuide({ section }) {
  if (section === 2) {
    return (
      <StudyGuideShell
        guideClass="partial-derivatives-guide"
        title="Divergence & Curl: Applications (Part 2)"
      >
        <GuideSidebarPart2 />
        <main className="main">
          <GuideHeaderPart2 />
          <TableOfContentsPart2 />
          <Divider />
          <SectionS164 />
          <QuizMcq164 />
          <Divider />
          <SectionS165 />
          <QuizMcq165 />
          <Divider />
          <SectionS166 />
          <QuizMcq166 />
          <Divider />
          <SectionS167 />
          <QuizMcq167 />
          <Divider />
          <SectionSummary />
        </main>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Divergence & Curl: Foundations (Part 1)"
    >
      <GuideSidebarPart1 />
      <main className="main">
        <GuideHeaderPart1 />
        <TableOfContentsPart1 />
        <Divider />
        <OpeningNote />
        <Divider />
        <SectionS161 />
        <QuizMcq161 />
        <Divider />
        <SectionS162 />
        <QuizMcq162 />
        <Divider />
        <SectionS163 />
        <QuizMcq163 />
        <Divider />
        <section id="summary1" className="section">
          <div className="sec-badge">{"Reference"}</div>
          <h2 className="sec-title">{"Part 1 Foundations Complete"}</h2>
          <p>
            {"Continue to "}
            <Link to="/divergence-curl/2" style={{ color: "var(--gold)", fontWeight: 600 }}>
              {"Part 2: Applications & Integral Theorems"}
            </Link>
            {"."}
          </p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default DivergenceAndCurlGuide;