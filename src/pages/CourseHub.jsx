import { Link, Navigate, useParams } from "react-router-dom";
import { getCourseById } from "../data/courses";

function CourseHub() {
  const { courseId } = useParams();
  const course = getCourseById(courseId);

  if (!course) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="home-page">
      <section className="home-hero" style={{ minHeight: "auto" }}>
        <div className="hero-copy">
          <p className="eyebrow">Course path</p>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <div className="hero-actions">
            <Link className="secondary-action" to="/">
              ← All courses
            </Link>
            {course.modules[0] && (
              <Link className="primary-action" to={course.modules[0].path}>
                Start first module →
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="guide-section" aria-labelledby="modules-heading">
        <div className="section-kicker">Modules</div>
        <h2 id="modules-heading">Choose a module</h2>
        <div className="guide-grid">
          {course.modules.map((mod) => (
            <Link
              className={`guide-card guide-card--${course.color}`}
              key={mod.path}
              to={mod.path}
            >
              <div className="guide-card-icon">{mod.icon}</div>
              <span>{mod.meta}</span>
              <h3>{mod.title}</h3>
              <p>{mod.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CourseHub;
